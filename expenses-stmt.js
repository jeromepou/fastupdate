/* ═══════════════════════════════════════════════════════════════════════════════
   expenses-stmt.js — relevé mensuel d'une personne (calcul PUR : aucune dépendance DOM ni Firebase)
   ───────────────────────────────────────────────────────────────────────────────
   Reprend les règles du « CASH REPORT » de l'ancien site (relevés de mars 2026) :
   · montants en USD, convertis au taux du mois et ARRONDIS AU DOLLAR SUPÉRIEUR, ligne par ligne
   · deux relevés : GAC (rapports facturés à GAC) et HAS PAYS (frais à la charge de HAS)
   · feuilles : CASH REPORT · MAGNA · AMEX · CASH_PAYABLE · PRIVATE_EXPENSES · PAID BY HAS DIRECTLY
   · Cash payable = Total − (Magna + Amex + Private expenses + Paid by HAS directly)
   · per diem : montant par jour, de la date de début à la date de fin de chaque entrée de l'itinéraire
   Utilisé par expenses-acct.js (écran comptable), expenses-xlsx.js (Excel) et expenses-pdf.js (reçus).
   ═══════════════════════════════════════════════════════════════════════════════ */

export const HEAD = { hotel: 'Hotel', flight: 'Airline Ticket', excess: 'Excess Baggage', transport: 'Transp. Land', luggage: 'Luggage Airport Expenses', parking: 'Parking', tips: 'Tips', visa: 'Visas Passport', phone: 'Phone Fax Internet', courier: 'Courier Postage', tooling: 'Material Tools Transp. Customs', airport: 'Airport Access', covid: 'Covid Test', inoc: 'Inoculation', licence: 'Licence Author. Renewal', calib: 'Tools Calibration', misc: 'Misc', perdiem: 'Per Diem' };
const BASE = ['hotel', 'flight', 'excess', 'transport', 'luggage', 'parking', 'tips', 'visa', 'phone', 'courier', 'tooling', 'airport', 'covid'];
export const COLS = { gac: BASE.concat(['inoc', 'misc', 'perdiem']), has: BASE.concat(['licence', 'calib', 'misc', 'perdiem']) };
export const PAYER_NAME = { gac: 'GAC', has: 'HAS' };
export const PAY_NAME = { cash: 'cash', amex: 'american express', magna: 'magna', has: 'paid by HAS directly' };
export const HAS_EWT = ['Fast Meeting', 'Fast Training', 'Meeting', 'Training', 'EIS', 'HAS-INT'];   // types « sans Trip Form » payés par HAS par défaut
const T2C = { flight: 'flight', excess: 'excess', hotel: 'hotel', transport: 'transport', luggage: 'luggage', parking: 'parking', tips: 'tips', visa: 'visa', phone: 'phone', courier: 'courier', tooling: 'tooling', airport: 'airport', covid: 'covid', inoc: 'inoc', licence: 'licence', calib: 'calib', supplies: 'misc', other: 'misc' };

const num = v => { const n = parseFloat(String(v ?? '').replace(',', '.')); return isFinite(n) ? n : 0; };
const arr = x => Array.isArray(x) ? x : Object.values(x || {});
export const ceilUsd = x => Math.ceil(Math.round(x * 1e6) / 1e6);                    // 403.2 → 404 · 58.496 → 59 · 110.00000000000001 → 110
export const usd = (amount, cur, rates, fx) => { const k = cur === 'USD' ? 1 : (+fx > 0 ? +fx : +((rates || {})[cur])); return k > 0 ? ceilUsd(num(amount) * k) : null; };
export const rateOf = (cur, rates) => cur === 'USD' ? 1 : (+((rates || {})[cur]) > 0 ? +rates[cur] : null);

// type d'une ligne → colonne du Cash Report (selon le relevé : « Inoculation » n'existe que chez GAC ; « Licence » et « Tools Calibration » que chez HAS)
export const catOf = (l, r) => {
  let c = T2C[l.type] || (r.kind === 'ewt' && (r.etype === 'Visa' || r.etype === 'Passport') ? 'visa' : 'misc');
  return c;
};
const colFor = (c, payer) => COLS[payer].includes(c) ? c : 'misc';
export const payerOf = (l, r, over) => (over && over[l.id]) || l.payer || ((l.type === 'licence' || l.type === 'calib') ? 'has' : (r.kind === 'ewt' && HAS_EWT.includes(r.etype) ? 'has' : 'gac'));
export const payMethod = l => (l.payment === 'amex' || l.payment === 'magna' || l.payment === 'has') ? l.payment : 'cash';   // « private » = cash ou carte personnelle

export const daysIn = ym => new Date(+ym.slice(0, 4), +ym.slice(5, 7), 0).getDate();
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const monLabel = ym => ym ? MON[+ym.slice(5, 7) - 1] + '. ' + ym.slice(2, 4) : '';          // « Mar. 26 »
export const monFile = ym => ym ? MON[+ym.slice(5, 7) - 1] + '.' + ym.slice(0, 4) : '';             // « Mar.2026 »
export const eu = n => (Math.round(n * 100) / 100).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });   // 1.730,00
export const initials = name => {
  const w = String(name || '').trim().split(/\s+/).filter(Boolean); if (!w.length) return '??';
  if (w.length === 1) return w[0].slice(0, 2).toUpperCase();
  const caps = s => s === s.toUpperCase() && s !== s.toLowerCase();
  const sur = caps(w[0]) && !caps(w[1]);                                                    // « MARTIN Chloe » : nom en premier
  return (sur ? w[1][0] + w[0][0] : w[0][0] + w[w.length - 1][0]).toUpperCase();
};
export const stDate = l => (l.type === 'hotel' && l.dateEnd && l.dateEnd >= l.date) ? l.dateEnd : l.date;
export const refOf = r => r.kind === 'ewt' ? ((r.etype || '').replace(/\s+/g, '') + (r.category ? ' ' + r.category : '')) : (r.wo || '');
const dayList = (s, e) => { const o = []; if (!s) return o; const a = new Date(s + 'T00:00:00Z'), b = new Date((e || s) + 'T00:00:00Z'); for (let d = a; d <= b && o.length < 400; d = new Date(d.getTime() + 864e5)) o.push(d.toISOString().slice(0, 10)); return o; };

// ── Contributions : une ligne de dépense (ou un jour de per diem) = une contribution ─────────────
export function contributions(r, ym, rates, over, missing, fx) {
  const out = [], ewt = r.kind === 'ewt', ref = refOf(r), mis = c => { if (missing && c && c !== 'USD') missing.add(c); };
  Object.values(r.lines || {}).forEach(l => {
    const dt = stDate(l); if (String(dt || '').slice(0, 7) !== ym) return;
    const pay = payMethod(l), company = pay !== 'cash', ded = company ? num(l.ded) : 0, payer = payerOf(l, r, over);
    const f = fx && +fx[l.id] > 0 ? +fx[l.id] : 0, g = usd(num(l.amount) + ded, l.currency, rates, f); if (g == null) { mis(l.currency); return; }
    const p = ded > 0 ? (usd(ded, l.currency, rates, f) || 0) : 0;
    out.push({ ym, day: +dt.slice(8, 10), date: dt, rid: r.id, ref, ewt, payer, cat: colFor(catOf(l, r), payer), usd: g, priv: p, pay, lid: l.id, from: l.fromTo || l.city || '', cur: l.currency, amt: num(l.amount) + ded, kind: 'line', ln: l, rp: r, rate: l.currency === 'USD' ? 1 : (f || rateOf(l.currency, rates)), fx: !!f });
  });
  if (!ewt) arr((r.itin || {}).e).forEach(e => {
    const pds = arr(e.pd).filter(p => p && num(p.a) > 0);
    dayList(e.s, e.e).filter(d => d.slice(0, 7) === ym).forEach(d => pds.forEach(p => {
      const g = usd(p.a, p.c, rates); if (g == null) { mis(p.c); return; }
      out.push({ ym, day: +d.slice(8, 10), date: d, rid: r.id, ref, ewt: false, payer: payerOf({ id: '_pd', type: 'perdiem' }, r, over), cat: 'perdiem', usd: g, priv: 0, pay: 'cash', lid: '_pd', from: arr(e.ron)[0] || e.det || '', cur: p.c, amt: num(p.a), kind: 'perdiem', rate: rateOf(p.c, rates) });
    }));
  });
  return out;
}

export const totals = list => {
  const t = { all: 0, cash: 0, magna: 0, amex: 0, has: 0, priv: 0 };
  list.forEach(c => { t.all += c.usd; t[c.pay] += c.usd; t.priv += c.priv; });
  t.payable = t.all - (t.magna + t.amex + t.priv + t.has);
  return t;
};

// items : [{ r, over, fx }] — over : { ligne: 'gac'|'has' } · fx : { ligne: taux imposé } — uniquement des rapports APPROUVÉS (contrôle 3 fait) · rates : { EUR: 1.26, … } du mois · duty : { 1: true, … } ou null
export function buildStatement({ person, ym, items, rates, duty }) {
  const missing = new Set(), all = [];
  (items || []).forEach(({ r, over, fx }) => contributions(r, ym, rates, over, missing, fx).forEach(c => all.push(c)));
  const by = p => all.filter(c => c.payer === p), t = { gac: totals(by('gac')), has: totals(by('has')) };
  return { ym, person: person || {}, initials: (person && person.ini) || initials(person && person.name), label: monLabel(ym), file: monFile(ym), contribs: all, duty: duty || null, rates: rates || {},
    missing: [...missing].sort(), tot: t, payable: { gac: t.gac.payable, has: t.has.payable, all: t.gac.payable + t.has.payable }, n: { gac: by('gac').length, has: by('has').length } };
}

// ── Une feuille (kind : all · magna · amex · cash · priv · has) d'un relevé (payer : gac · has) ───
export function sheet(st, payer, kind) {
  const cols = COLS[payer], list = st.contribs.filter(c => c.payer === payer);
  const keep = c => kind === 'all' ? true : kind === 'priv' ? c.priv > 0 : c.pay === kind;
  const val = c => kind === 'priv' ? c.priv : c.usd;
  const nd = daysIn(st.ym), dayRows = Array.from({ length: nd }, () => []), extra = new Map();
  const add = (row, c) => { const k = c.cat; const cell = row.cells[k] || (row.cells[k] = { v: 0, pays: {} }); cell.v += val(c); cell.pays[c.pay] = (cell.pays[c.pay] || 0) + val(c); if (c.from) row.from.add(c.from); };
  list.filter(keep).forEach(c => {
    if (c.ewt) { let row = extra.get(c.rid); if (!row) extra.set(c.rid, row = { ref: c.ref, rid: c.rid, extra: true, cells: {}, from: new Set() }); add(row, c); }
    else { const rows = dayRows[c.day - 1]; let row = rows.find(x => x.rid === c.rid); if (!row) rows.push(row = { day: c.day, ref: c.ref, rid: c.rid, cells: {}, from: new Set() }); add(row, c); }
  });
  const rows = [];
  dayRows.forEach((rs, i) => { const d = i + 1, on = st.duty ? !!st.duty[d] : false; if (!rs.length) rows.push({ day: d, cells: {}, from: [], duty: on ? 'ON' : '', total: 0 }); else rs.forEach((row, k) => rows.push(Object.assign(row, { from: [...row.from], duty: k === 0 && on ? 'ON' : '' }))); });
  [...extra.values()].sort((a, b) => a.ref.localeCompare(b.ref)).forEach(row => rows.push(Object.assign(row, { from: [...row.from], duty: '' })));
  rows.forEach(r => { r.total = Object.values(r.cells).reduce((s, c) => s + c.v, 0); });
  const colTotals = {}; cols.forEach(k => { colTotals[k] = rows.reduce((s, r) => s + ((r.cells[k] || {}).v || 0), 0); });
  const mixed = []; rows.forEach((r, ri) => Object.entries(r.cells).forEach(([k, c]) => { const ps = Object.keys(c.pays).filter(p => c.pays[p] > 0); if (kind === 'all' && ps.length > 1) mixed.push({ ri, k, parts: ps.map(p => [p, c.pays[p]]) }); }));
  return { payer, kind, cols, rows, colTotals, total: rows.reduce((s, r) => s + r.total, 0), mixed, dutyDays: rows.filter(r => r.duty === 'ON').length };
}

// ── Noms de fichiers et mail (mêmes libellés que le mail de Thalia) ──────────────────────────────
export const names = st => { const b = 'HAS-' + st.initials + '-'; return { gac: { xlsx: b + 'CASH REPORT-' + st.file + '.xlsx', pdf: b + 'MONTHLY EXPENSE RECEIPTS-' + st.file + '.pdf' }, has: { xlsx: b + 'HAS PAYS-CASH REPORT-' + st.file + '.xlsx', pdf: b + 'HAS PAYS-EXPENSE RECEIPTS-' + st.file + '.pdf' } }; };
export const subject = st => 'HAS-' + st.initials + '-' + st.label.toUpperCase();      // « HAS-JP-MAR. 26 »
export function mailBody(st, o) {
  o = o || {}; const first = String((st.person.name || '')).split(/\s+/).filter(Boolean).map(w => w.replace(/^./, c => c.toUpperCase()).replace(/(?<=.)(.*)/, m => m.toLowerCase()))[0] || 'colleague';
  const f = (n, k) => eu(n) + ' USD';
  const rows = [['GAC', st.payable.gac], ['HAS', st.payable.has]].filter(([k, v], i) => i === 0 || v || st.n.has);
  const lines = rows.map(([k, v]) => '<b>' + k + ':</b> ' + f(v)).join('<br>');
  const html = '<div style="font:14px/1.5 Arial,sans-serif;color:#1b2430"><p>Dear ' + first + ',</p><p>Hope this mail finds you well!</p><p>Attached your ' + st.label + ' cash expenses.</p><p>' + lines + '<br><b>Total cash payable: ' + f(st.payable.all) + '</b></p><p>Kindly review and revert.</p>' + (o.note ? '<p>' + String(o.note).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c])).replace(/\n/g, '<br>') + '</p>' : '') + (o.signature || '<p>Best regards</p>') + '</div>';
  return html;
}
