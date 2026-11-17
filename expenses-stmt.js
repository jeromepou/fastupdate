/* ═══════════════════════════════════════════════════════════════════════════════
   expenses-stmt.js — relevé mensuel d'une personne (calcul PUR : aucune dépendance DOM ni Firebase)
   ───────────────────────────────────────────────────────────────────────────────
   Reprend les règles du « CASH REPORT » de l'ancien site (relevés de mars 2026) :
   · montants en USD, convertis ligne par ligne et ARRONDIS AU DOLLAR SUPÉRIEUR, au taux du mois (par défaut)
     ou au taux du jour (au choix du comptable, par type de dépense), ou à un taux imposé sur une dépense
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

// ── Quel taux ? taux imposé sur la dépense · taux du jour (si le comptable l'a choisi pour ce type) · taux du mois (par défaut) ──
// rates = expenseConfig/rates/<mois> = { EUR: 1.26, …, _rule: { hotel: 'day' }, _day: { EUR: { '03': 1.241 } } }
// _rule et _day sont facultatifs : sans eux, tout est converti au taux du mois (comportement d'origine)
export const isDayRule = (rates, cat) => !!(rates && rates._rule && rates._rule[cat] === 'day');
export const dayKey = date => String(date || '').slice(8, 10);
export const pickRate = (cur, cat, date, rates, own) => {
  if (cur === 'USD') return { k: 1, src: 'usd' };
  if (+own > 0) return { k: +own, src: 'own' };
  if (isDayRule(rates, cat)) { const k = +((((rates._day || {})[cur]) || {})[dayKey(date)]); return k > 0 ? { k, src: 'day' } : { k: null, src: 'day', miss: cur + '@' + date }; }
  const k = +((rates || {})[cur]); return k > 0 ? { k, src: 'month' } : { k: null, src: 'month', miss: cur };
};

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
export const missLabel = m => { const [c, d] = String(m).split('@'); return d ? c + ' on ' + d.slice(8, 10) + ' ' + MON[+d.slice(5, 7) - 1] : c; };   // « EUR » · « EUR on 28 Mar »
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

// ── Entrées d'un rapport pour un mois, SANS prix : une ligne de dépense (ou un jour de per diem) = une entrée ──
function entries(r, ym) {
  const out = [], ewt = r.kind === 'ewt', ref = refOf(r);
  Object.values(r.lines || {}).forEach(l => { const dt = stDate(l); if (String(dt || '').slice(0, 7) === ym) out.push({ kind: 'line', l, dt, ewt, ref, cat: catOf(l, r), cur: l.currency }); });
  if (!ewt) arr((r.itin || {}).e).forEach(e => {
    const pds = arr(e.pd).filter(p => p && num(p.a) > 0);
    dayList(e.s, e.e).filter(d => d.slice(0, 7) === ym).forEach(d => pds.forEach(p => out.push({ kind: 'perdiem', p, e, dt: d, ewt: false, ref, cat: 'perdiem', cur: p.c })));
  });
  return out;
}

// ── Contributions : une entrée convertie en dollars (une ligne de dépense ou un jour de per diem = une contribution) ──
// missing : Set rempli avec « EUR » (taux du mois absent) ou « EUR@2026-03-28 » (taux du jour absent) · fx : { ligne: taux imposé }
export function contributions(r, ym, rates, over, missing, fx) {
  const out = [], mis = m => { if (missing && m) missing.add(m); };
  entries(r, ym).forEach(en => {
    if (en.kind === 'line') {
      const l = en.l, dt = en.dt, pay = payMethod(l), company = pay !== 'cash', ded = company ? num(l.ded) : 0, payer = payerOf(l, r, over);
      const f = fx && +fx[l.id] > 0 ? +fx[l.id] : 0, pr = pickRate(l.currency, en.cat, dt, rates, f); if (pr.k == null) { mis(pr.miss); return; }
      const g = ceilUsd((num(l.amount) + ded) * pr.k), p = ded > 0 ? ceilUsd(ded * pr.k) : 0;
      out.push({ ym, day: +dt.slice(8, 10), date: dt, rid: r.id, ref: en.ref, ewt: en.ewt, payer, cat: colFor(en.cat, payer), rcat: en.cat, usd: g, priv: p, pay, lid: l.id, from: l.fromTo || l.city || '', cur: l.currency, amt: num(l.amount) + ded, kind: 'line', ln: l, rp: r, rate: pr.k, rsrc: pr.src, fx: !!f });
    } else {
      const p = en.p, pr = pickRate(p.c, 'perdiem', en.dt, rates, 0); if (pr.k == null) { mis(pr.miss); return; }
      out.push({ ym, day: +en.dt.slice(8, 10), date: en.dt, rid: r.id, ref: en.ref, ewt: false, payer: payerOf({ id: '_pd', type: 'perdiem' }, r, over), cat: 'perdiem', rcat: 'perdiem', usd: ceilUsd(num(p.a) * pr.k), priv: 0, pay: 'cash', lid: '_pd', from: arr(en.e.ron)[0] || en.e.det || '', cur: p.c, amt: num(p.a), kind: 'perdiem', rate: pr.k, rsrc: pr.src });
    }
  });
  return out;
}

// ── Ce qu'il faut saisir pour un mois : taux du mois par devise · taux du jour par (devise, date) · types de dépense en devise étrangère ──
// (un taux imposé sur une dépense — check 3 — dispense de saisir le taux pour cette dépense) · curs = toutes les devises étrangères du mois
export function needs(items, ym, rates) {
  const month = new Map(), days = new Map(), cats = new Map(), curs = new Set();
  const add = (m, k, o, cat) => { let x = m.get(k); if (!x) m.set(k, x = Object.assign(o, { cats: new Set(), n: 0 })); x.cats.add(cat); x.n++; };
  (items || []).forEach(({ r, fx }) => entries(r, ym).forEach(en => {
    if (!en.cur || en.cur === 'USD') return;
    cats.set(en.cat, (cats.get(en.cat) || 0) + 1); curs.add(en.cur);
    if (en.kind === 'line' && fx && +fx[en.l.id] > 0) return;
    if (isDayRule(rates, en.cat)) add(days, en.cur + '@' + en.dt, { cur: en.cur, date: en.dt }, en.cat); else add(month, en.cur, { cur: en.cur }, en.cat);
  }));
  const fin = x => Object.assign(x, { cats: [...x.cats].sort() }), order = Object.keys(HEAD);
  return { month: [...month.values()].map(fin).sort((a, b) => a.cur.localeCompare(b.cur)), days: [...days.values()].map(fin).sort((a, b) => a.date.localeCompare(b.date) || a.cur.localeCompare(b.cur)),
    cats: [...cats.entries()].map(([cat, n]) => ({ cat, n })).sort((a, b) => order.indexOf(a.cat) - order.indexOf(b.cat)), curs: [...curs].sort() };
}

// ── Taux réellement utilisés dans un relevé (le comptable les vérifie) : devise · taux · base (mois / jour / imposé) · types de dépense ──
const SRC_ORDER = { month: 0, day: 1, own: 2 };
const usedRates = list => {
  const m = new Map();
  list.forEach(c => { if (c.cur === 'USD' || !c.rsrc) return; const key = [c.cur, c.rsrc, c.rate, c.rsrc === 'day' ? c.date : ''].join('|'); let x = m.get(key); if (!x) m.set(key, x = { cur: c.cur, src: c.rsrc, k: c.rate, date: c.rsrc === 'day' ? c.date : null, cats: new Set(), n: 0 }); x.cats.add(c.rcat); x.n++; });
  return [...m.values()].map(x => Object.assign(x, { cats: [...x.cats].sort() })).sort((a, b) => a.cur.localeCompare(b.cur) || SRC_ORDER[a.src] - SRC_ORDER[b.src] || String(a.date).localeCompare(String(b.date)) || a.k - b.k);
};

export const totals = list => {
  const t = { all: 0, cash: 0, magna: 0, amex: 0, has: 0, priv: 0 };
  list.forEach(c => { t.all += c.usd; t[c.pay] += c.usd; t.priv += c.priv; });
  t.payable = t.all - (t.magna + t.amex + t.priv + t.has);
  return t;
};

// items : [{ r, over, fx }] — over : { ligne: 'gac'|'has' } · fx : { ligne: taux imposé } — uniquement des rapports APPROUVÉS (contrôle 3 fait) · rates : { EUR: 1.26, …, _rule, _day } du mois · duty : { 1: true, … } ou null
export function buildStatement({ person, ym, items, rates, duty }) {
  const missing = new Set(), all = [];
  (items || []).forEach(({ r, over, fx }) => contributions(r, ym, rates, over, missing, fx).forEach(c => all.push(c)));
  const by = p => all.filter(c => c.payer === p), t = { gac: totals(by('gac')), has: totals(by('has')) };
  return { ym, person: person || {}, initials: (person && person.ini) || initials(person && person.name), label: monLabel(ym), file: monFile(ym), contribs: all, duty: duty || null, rates: rates || {}, used: usedRates(all),
    missing: [...missing].sort(), tot: t, payable: { gac: t.gac.payable, has: t.has.payable, all: t.gac.payable + t.has.payable }, n: { gac: by('gac').length, has: by('has').length } };
}

// ── Empreinte d'un relevé : change dès qu'un montant, un payeur, un mode de paiement ou une dépense change (sert à repérer « modifié depuis l'envoi ») ──
export const fingerprint = st => {
  const s = st.contribs.map(c => [c.rid, c.lid, c.date, c.usd, c.priv, c.payer, c.pay, c.cat].join(':')).sort().join('|'); let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36) + '.' + st.contribs.length;
};

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
