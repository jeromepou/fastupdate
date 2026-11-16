/* ═══════════════════════════════════════════════════════════════════════════════
   expenses-pdf.js — PDF « Receipts » d'un rapport (ma propre mise en page : je n'ai jamais vu le document de l'ancien site)
   Contenu : en-tête du rapport, tableau des dépenses + totaux par devise, Trip Form (jours / tâches / heures), Itinerary + per diem,
   puis UNE PAGE PAR PHOTO DE REÇU (avec la date, le type et le montant de la dépense).
   + statement(st, payer, o) : le PDF MENSUEL « MONTHLY EXPENSE RECEIPTS » de la comptable, au format de l'ancien site (voir plus bas).
   Chargé par expenses.js / expenses-acct.js (import dynamique). Utilise pdf-lib, déjà chargé par index (window.PDFLib).
   ═══════════════════════════════════════════════════════════════════════════════ */
import { COLS } from './expenses-stmt.js';
const A4 = [595.28, 841.89], M = 40;
const MAP = { '→': '->', '–': '-', '—': '-', '×': 'x', '’': "'", '‘': "'", '“': '"', '”': '"', '…': '...', '·': '-', '€': 'EUR ', '⟲': '', '⟳': '' };
const wdl = d => new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' });
const hrs = d => Object.values((d && d.t) || {}).reduce((s, t) => s + (t.h || []).reduce((a, b) => a + b, 0), 0);
const r2 = n => Math.round(n * 100) / 100;

// r = rapport ; o = { who, title, lines, money, fmtD, types, pay, getPhotos(lid) → [data-URL JPEG] }
export async function make(r, o) {
  const P = window.PDFLib;
  if (!P) throw new Error('pdf-lib.min.js not found — check that its <script> tag is in index.html.');
  const doc = await P.PDFDocument.create(), F = await doc.embedFont(P.StandardFonts.Helvetica), B = await doc.embedFont(P.StandardFonts.HelveticaBold);
  const okc = new Set(F.getCharacterSet()), rgb = P.rgb, W = A4[0] - 2 * M;
  const safe = t => String(t == null ? '' : t).replace(/\r/g, '').replace(/[^\x20-\x7e\n]/g, c => okc.has(c.codePointAt(0)) ? c : (MAP[c] != null ? MAP[c] : '?'));
  doc.setTitle('Expense report ' + safe(o.title)); doc.setCreator('FAST Update');
  let page, y;
  const np = () => { page = doc.addPage(A4); y = A4[1] - M; };
  const need = h => { if (y - h < M + 24) np(); };
  const wrap = (t, f, s, w) => {
    const out = [];
    safe(t).split('\n').forEach(par => {
      let line = '';
      par.split(/\s+/).filter(Boolean).forEach(word => {
        const test = line ? line + ' ' + word : word;
        if (f.widthOfTextAtSize(test, s) <= w) { line = test; return; }
        if (line) out.push(line);
        while (f.widthOfTextAtSize(word, s) > w && word.length > 1) { let i = word.length; while (i > 1 && f.widthOfTextAtSize(word.slice(0, i), s) > w) i--; out.push(word.slice(0, i)); word = word.slice(i); }
        line = word;
      });
      out.push(line);
    });
    return out;
  };
  const draw = (t, x, f, s, c) => page.drawText(t, { x, y, size: s, font: f, color: c || rgb(0.1, 0.12, 0.16) });
  const para = (t, f, s, w, c, lead) => { wrap(t, f, s, w).forEach(l => { need(lead || s + 3); y -= lead || s + 3; draw(l, M, f, s, c); }); };
  const h2 = t => { need(34); y -= 22; draw(safe(t), M, B, 12, rgb(0.26, 0.22, 0.79)); y -= 4; page.drawLine({ start: { x: M, y }, end: { x: M + W, y }, thickness: 0.6, color: rgb(0.85, 0.87, 0.9) }); };

  // ── 1. En-tête ──
  np();
  draw('Expense report', M, B, 18); y -= 22; draw(safe(o.title), M, B, 13, rgb(0.26, 0.22, 0.79));
  y -= 16; const sub = r.status === 'submitted' ? 'Sent - version ' + (r.ver || 1) : 'Draft';
  draw(safe([o.who, sub, 'Generated ' + new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })].filter(Boolean).join('  |  ')), M, F, 9, rgb(0.35, 0.4, 0.46));
  const locs = [r.loc].concat((r.locs || []).map(x => x.loc)).filter(Boolean).join(' / ');
  const head = r.kind === 'ewt' ? [['Type', r.etype], ['Category', r.category], ['Date started', o.fmtD(r.dateStart)], ['Date completed', o.fmtD(r.dateEnd)]]
    : [['Work order', r.wo], ['Aircraft type', r.model], ['Serial number', r.sn], ['Registration', r.reg], ['Location', locs], ['Airport (ICAO)', [r.icao].concat((r.locs || []).map(x => x.icao)).filter(Boolean).join(' / ')], ['Date started', o.fmtD(r.dateStart)], ['Date completed', o.fmtD(r.dateEnd)]];
  y -= 10;
  for (let i = 0; i < head.length; i += 2) {
    need(26); y -= 12;
    [0, 1].forEach(k => { const h = head[i + k]; if (!h) return; const x = M + k * (W / 2); page.drawText(safe(h[0]), { x, y, size: 8, font: F, color: rgb(0.4, 0.45, 0.5) }); page.drawText(safe(h[1] || '-'), { x, y: y - 11, size: 10.5, font: B, color: rgb(0.1, 0.12, 0.16) }); });
    y -= 14;
  }

  // ── 2. Dépenses ──
  h2('Expenses (' + o.lines.length + ')');
  const cw = [58, 78, 160, 80, 90, 49];
  const X0 = [M]; cw.forEach((w, i) => X0.push(X0[i] + w));
  need(24); y -= 14; ['Date', 'Type', 'Description', 'Amount', 'Payment', 'Receipts'].forEach((t, i) => page.drawText(t, { x: X0[i], y, size: 8, font: B, color: rgb(0.4, 0.45, 0.5) }));
  o.lines.forEach(l => {
    const typ = [(o.types || {})[l.type] || l.type, l.sub].filter(Boolean).join(' - '), desc = [l.fromTo, l.hotel && 'Hotel: ' + l.hotel, l.city && l.city, l.share && 'Shared with ' + l.share, l.sella && 'Sella', l.flight && 'Flight ' + l.flight, l.type === 'hotel' && l.dateEnd && 'Check-out ' + o.fmtD(l.dateEnd), l.pfrom && l.pto && 'Period ' + o.fmtD(l.pfrom) + ' - ' + o.fmtD(l.pto), String(l.desc || '').replace(l.fromTo || '', '').trim(), l.ded > 0 && 'Personal part deducted: ' + o.money(+l.ded, l.currency), l.notes && 'Note: ' + l.notes].filter(Boolean).join('\n');
    const cols = [wrap(o.fmtD(l.date), F, 8.5, cw[0] - 4), wrap(typ, F, 8.5, cw[1] - 4), wrap(desc || '-', F, 8.5, cw[2] - 6), wrap(o.money(+l.amount, l.currency), B, 8.5, cw[3] - 4), wrap((o.pay || {})[l.payment] || '-', F, 8.5, cw[4] - 4), wrap(l.np ? l.np + (l.np > 1 ? ' photos' : ' photo') : 'None', F, 8.5, cw[5] - 2)];
    const n = Math.max(...cols.map(c => c.length)), hgt = n * 11 + 8;
    need(hgt); const top = y; page.drawLine({ start: { x: M, y: top - 2 }, end: { x: M + W, y: top - 2 }, thickness: 0.4, color: rgb(0.9, 0.91, 0.93) });
    cols.forEach((c, i) => c.forEach((ln, k) => page.drawText(ln, { x: X0[i], y: top - 12 - k * 11, size: 8.5, font: i === 3 ? B : F, color: rgb(0.1, 0.12, 0.16) })));
    y = top - hgt;
  });
  const tot = {}; o.lines.forEach(l => { tot[l.currency] = (tot[l.currency] || 0) + (+l.amount || 0); });
  need(26); y -= 16; draw('Total: ' + (Object.entries(tot).map(([c, v]) => o.money(v, c)).join('   |   ') || '-'), M, B, 10.5);

  // ── 3. Trip Form ──
  const days = Object.keys((r.trip && r.trip.d) || {}).sort();
  if (r.kind !== 'ewt' && days.length) {
    h2('Trip Form - ' + r2(days.reduce((s, k) => s + hrs(r.trip.d[k]), 0)) + ' h');
    days.forEach(k => {
      const d = r.trip.d[k], tasks = Object.values(d.t || {});
      need(18); y -= 14; draw(safe(wdl(k)), M, B, 9.5); page.drawText(r2(hrs(d)) + ' h', { x: M + W - 40, y, size: 9.5, font: B, color: rgb(0.1, 0.12, 0.16) });
      tasks.forEach(t => para('Task ' + t.n + ':  ' + ((t.h || []).length ? t.h.map(h => h + ' h').join(' + ') : '-'), F, 9, W - 16, rgb(0.25, 0.28, 0.33), 12));
    });
  }

  // ── 4. Itinéraire et per diem ──
  const ents = Object.values((r.itin && r.itin.e) || {}).sort((a, b) => (a.s || '').localeCompare(b.s || ''));
  if (r.kind !== 'ewt' && ents.length) {
    h2('Itinerary and per diem');
    ents.forEach(e => {
      need(30); y -= 14; draw(safe(o.fmtD(e.s) + ' -> ' + o.fmtD(e.e)), M, B, 9.5);
      if (e.det) para(e.det, F, 9, W, rgb(0.25, 0.28, 0.33), 12);
      if ((e.ron || []).length) para('RON: ' + e.ron.join(' ; '), F, 9, W, rgb(0.25, 0.28, 0.33), 12);
      if ((e.pd || []).length) para('Per diem: ' + e.pd.map(p => o.money(p.a, p.c)).join(' + '), F, 9, W, rgb(0.25, 0.28, 0.33), 12);
    });
  }

  // ── 5. Une page par photo de reçu ──
  for (const l of o.lines) {
    if (!l.np) continue;
    const photos = await o.getPhotos(l.id);
    for (let i = 0; i < photos.length; i++) {
      np(); const label = 'Receipt - ' + o.fmtD(l.date) + ' - ' + ((o.types || {})[l.type] || l.type) + (l.sub ? ' - ' + l.sub : '') + ' - ' + o.money(+l.amount, l.currency);
      draw(safe(label), M, B, 11); y -= 14; draw(safe(o.title + '   |   photo ' + (i + 1) + ' of ' + photos.length), M, F, 8.5, rgb(0.4, 0.45, 0.5)); y -= 12;
      try {
        const b64 = String(photos[i]).split(',')[1] || '', im = await doc.embedJpg(Uint8Array.from(atob(b64), c => c.charCodeAt(0)));
        const sc = Math.min(W / im.width, (y - M - 24) / im.height, 1.5);
        page.drawImage(im, { x: M, y: y - im.height * sc, width: im.width * sc, height: im.height * sc });
      } catch (e) { draw('This photo could not be added to the PDF.', M, F, 9, rgb(0.7, 0.1, 0.1)); }
    }
  }

  // ── Pied de page : numéros ──
  const ps = doc.getPages();
  ps.forEach((p, i) => { p.drawText(safe(o.title), { x: M, y: 22, size: 8, font: F, color: rgb(0.5, 0.53, 0.58) }); p.drawText('Page ' + (i + 1) + ' / ' + ps.length, { x: A4[0] - M - 52, y: 22, size: 8, font: F, color: rgb(0.5, 0.53, 0.58) }); });
  return doc.save();
}

export function save(bytes, name) {
  const u = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' })), a = document.createElement('a');
  a.href = u; a.download = name; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(u), 60000);
}


// ═══════════════════════════════════════════════════════════════════════════════
// PDF MENSUEL « MONTHLY EXPENSE RECEIPTS » — reproduit la mise en page des PDF de l'ancien site (mars 2026) :
//   · une page par reçu (une page de plus par photo supplémentaire) ; ordre = dates des rapports WO, puis les rapports EWT
//   · en haut à gauche : cadre ROUGE avec la référence (n° de WO, ou « Visa », « MonthlySupportingExpenses MAR/2026 »…)
//   · en haut à droite : « montant DEVISE * taux= » + cadre ROUGE avec le montant en USD (arrondi au dollar supérieur)
//   · quand plusieurs dépenses tombent dans la MÊME case de l'Excel (même WO, même jour, même colonne) : « Total: » en rouge
//     sur la 1re page, et chaque dépense porte sa propre conversion dans un cadre VERT en bas à droite
//   · au centre, en gras : type + trajet, nom ou description ; puis la photo (le site d'origine l'étirait ; ici elle garde ses proportions)
// ═══════════════════════════════════════════════════════════════════════════════
const MONS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dm = d => d ? (+d.slice(8, 10)) + '-' + MONS[+d.slice(5, 7) - 1] : '';                               // 16-Mar
const rng = (a, b) => { if (!a) return ''; if (!b || b === a) return dm(a); return a.slice(0, 7) === b.slice(0, 7) ? (+a.slice(8, 10)) + '-' + (+b.slice(8, 10)) + ' ' + MONS[+a.slice(5, 7) - 1] : dm(a) + ' - ' + dm(b); };   // 16-28 Mar
const f2 = n => (Math.round(n * 100) / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const LABEL = { flight: 'Airline Ticket', excess: 'ExcessBaggage', hotel: 'Hotel', transport: 'Transport', luggage: 'LuggageAirportExpenses', parking: 'Parking', tips: 'Tips', visa: 'Visa', phone: 'PhoneFaxInternet', courier: 'CourierPostage', tooling: 'MaterialToolsTranspCustoms', airport: 'AirportAccess', covid: 'CovidTest', inoc: 'Inoculation', licence: 'LicenceAuthorRenewal', calib: 'ToolsCalibration', supplies: 'Internal supplies', other: 'Other' };
const lns = s => s ? String(s).split(/\n/).map(x => x.trim()).filter(Boolean) : [];

// Textes centrés d'une page (paragraphes) — pur, testé sans PDF
export function receiptParas(c, name) {
  const l = c.ln || {}, t = l.type, up = String(name || '').toUpperCase(), ft = String(l.fromTo || '').trim(), de = String(l.desc || '').trim(), keep = a => a.filter(p => p.length && p[0]);
  if (t === 'transport' && l.sub === 'Private car fuel') { const a = l.pfrom || l.date, b = l.pto; return keep([['Private car fuel ' + (b && b !== a ? 'from ' + dm(a) + ' to ' + dm(b) : 'on ' + dm(a))], de ? lns(de) : lns(ft)]); }
  if (t === 'transport') return keep([[l.sub || 'Transport'], lns(ft), lns(de)]);
  if (t === 'hotel') return keep([[[l.hotel || 'Hotel', l.city ? '(' + l.city + ')' : ''].filter(Boolean).join(' ')], ['ACCOMMODATION ' + rng(l.date, l.dateEnd)], lns(de)]);
  if (t === 'other' || t === 'supplies') { const d = lns(de); return keep([[d[0] || (t === 'supplies' ? 'Internal supplies' : 'Other')], lns(ft), d.slice(1)]); }
  const ewtVisa = t === 'ewt' && /visa|passport/i.test((c.rp && c.rp.etype) || '');
  if (t === 'visa' || ewtVisa) return keep([['Visa'], [de || up]]);
  const head = (t === 'ewt' ? ((c.rp && c.rp.etype) || 'Expense') : (LABEL[t] || 'Expense')) + (ft ? ' ' + ft : '');
  return keep([[head], [up], de && de.toUpperCase() !== up ? lns(de) : []]);
}

// Ordre et regroupement des reçus d'un relevé (payer : gac | has) — pur, testé sans PDF
export function receiptGroups(st, payer) {
  const cols = COLS[payer], seen = [], list = st.contribs.filter(c => c.payer === payer && c.kind === 'line');
  list.forEach(c => { if (!seen.includes(c.rid)) seen.push(c.rid); });
  const m = new Map(), key = c => c.ewt ? c.rid + '|' + c.cat : c.rid + '|' + c.date + '|' + c.cat;      // = une case du Cash Report
  list.forEach(c => { const k = key(c); if (!m.has(k)) m.set(k, { key: k, ewt: c.ewt, rid: c.rid, ref: c.ref, date: c.date, cat: c.cat, items: [] }); m.get(k).items.push(c); });
  const gs = [...m.values()];
  gs.forEach(g => { g.items.sort((a, b) => a.date.localeCompare(b.date) || String(a.lid).localeCompare(String(b.lid))); g.sum = g.items.reduce((s, c) => s + c.usd, 0); });
  gs.sort((a, b) => (a.ewt - b.ewt) || (a.ewt ? 0 : a.date.localeCompare(b.date)) || (seen.indexOf(a.rid) - seen.indexOf(b.rid)) || (cols.indexOf(a.cat) - cols.indexOf(b.cat)));
  return gs;
}

const jpg = d => Uint8Array.from(atob(String(d).split(',')[1] || ''), c => c.charCodeAt(0));

// st : relevé (expenses-stmt.buildStatement) · payer : 'gac' | 'has' · o = { name, by, title, getPhotos(rid, lid) → [data-URL JPEG], onProgress(i, n) }
export async function statement(st, payer, o) {
  const P = window.PDFLib;
  if (!P) throw new Error('pdf-lib.min.js not found — check that its <script> tag is in index.html.');
  o = o || {};
  const doc = await P.PDFDocument.create(), B = await doc.embedFont(P.StandardFonts.HelveticaBold), F = await doc.embedFont(P.StandardFonts.Helvetica), okc = new Set(B.getCharacterSet());
  const safe = t => String(t == null ? '' : t).replace(/\r/g, '').replace(/[^\x20-\x7e]/g, c => okc.has(c.codePointAt(0)) ? c : (MAP[c] != null ? MAP[c] : '?'));
  const RED = P.rgb(1, 0, 0), GREEN = P.rgb(0, 0.78, 0), INK = P.rgb(0, 0, 0), H = A4[1], CX = A4[0] / 2, XR = A4[0] - 27;
  doc.setTitle(safe(o.title || 'Monthly expense receipts')); doc.setCreator('FAST Update'); if (o.by) doc.setAuthor(safe(o.by));
  const T = yTop => H - yTop;
  let page;
  const box = (x, yTop, w, h, col) => page.drawRectangle({ x, y: T(yTop + h), width: w, height: h, borderColor: col, borderWidth: 2.2 });
  const txt = (t, x, yTop, s) => page.drawText(t, { x, y: T(yTop), size: s || 12, font: B, color: INK });
  const refBox = ref => { const t = safe(ref || '-'); let s = 12; const mw = 300; while (s > 7 && B.widthOfTextAtSize(t, s) > mw) s -= .5; const w = B.widthOfTextAtSize(t, s) + 20; box(27, 27.5, w, 31, RED); txt(t, 37, 47.5 + (12 - s) / 3, s); };
  const amountBox = (yTop, label, value, col) => { const v = safe(value), w = B.widthOfTextAtSize(v, 12) + 20, x1 = XR - w; box(x1, yTop, w, 31, col); txt(v, x1 + 10, yTop + 20); const lw = B.widthOfTextAtSize(safe(label), 12); txt(safe(label), x1 - 8 - lw, yTop + 20); };
  const centred = (paras, y0) => {
    let y = y0;
    paras.forEach(p => { p.forEach(line => { wrapC(safe(line), 480).forEach(l => { const w = B.widthOfTextAtSize(l, 12); txt(l, CX - w / 2, y); y += 14.4; }); }); y += 22.2; });
    return y;
  };
  const wrapC = (t, w) => { if (B.widthOfTextAtSize(t, 12) <= w) return [t]; const out = []; let line = ''; t.split(/\s+/).forEach(wd => { const x = line ? line + ' ' + wd : wd; if (B.widthOfTextAtSize(x, 12) <= w || !line) line = x; else { out.push(line); line = wd; } }); if (line) out.push(line); return out; };
  const conv = c => f2(c.amt) + ' ' + c.cur + ' * ' + (c.cur === 'USD' ? '1' : String(c.rate != null ? c.rate : '?')) + '=';
  const groups = receiptGroups(st, payer), total = groups.reduce((s, g) => s + g.items.length, 0);
  let done = 0;
  for (const g of groups) {
    const multi = g.items.length > 1; let firstPage = true;
    for (const c of g.items) {
      const photos = c.ln && c.ln.np && o.getPhotos ? ((await o.getPhotos(c.rid, c.lid)) || []) : [];
      for (let i = 0; i < Math.max(1, photos.length); i++) {
        page = doc.addPage(A4); refBox(g.ref);
        if (firstPage) { firstPage = false; if (multi) amountBox(27.5, 'Total:', f2(g.sum) + ' $', RED); else amountBox(27.5, conv(c), f2(c.usd) + ' $', RED); }
        let y = 86;
        if (i === 0) { y = centred(receiptParas(c, o.name || (st.person && st.person.name)), 86); if (multi) amountBox(750, conv(c), f2(c.usd) + ' $', GREEN); }
        if (photos[i]) {
          const imTop = Math.max(y + 8, 150), bottom = i === 0 && multi ? 105 : 50;
          try {
            const im = await doc.embedJpg(jpg(photos[i])), sc = Math.min(A4[0] - 72, 1e9) / im.width, k = Math.min(sc, (H - bottom - imTop) / im.height, 1.5);
            page.drawImage(im, { x: CX - im.width * k / 2, y: T(imTop + im.height * k), width: im.width * k, height: im.height * k });
          } catch (e) { page.drawText('This photo could not be added to the PDF.', { x: 40, y: T(imTop + 12), size: 9, font: F, color: P.rgb(.7, .1, .1) }); }
        }
        o.onProgress && o.onProgress(++done, total);
      }
    }
  }
  if (!doc.getPageCount()) { page = doc.addPage(A4); txt('No expense to show for this statement.', 40, 90); }
  const n = doc.getPageCount();
  doc.getPages().forEach((p, i) => p.drawText((i + 1) + ' / ' + n, { x: CX - 12, y: 24, size: 7.5, font: F, color: P.rgb(.55, .58, .62) }));
  return doc.save();
}
