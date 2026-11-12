/* ═══════════════════════════════════════════════════════════════════════════════
   expenses.js — Expenses : remplace New / Saved / Submitted / History de l'ancien site (hasbackoffice.net)
   ───────────────────────────────────────────────────────────────────────────────
   Chargé À LA DEMANDE par index :   const m = await import('./expenses.js'); m.open(deps);
   Firebase :
     expenses/<uid>/<rid>              = un rapport : en-tête + lignes de dépenses (SANS les photos) + versions envoyées
     expensePhotos/<uid>/<rid>/<lid>   = photos des reçus d'une dépense (liste de data-URL JPEG compressés)
     expenseConfig/kmRate              = { value, currency, by, at } — valeur au km du « Private car fuel » (admins / ops)
   Étape 1 (ce fichier) : liste Saved + Submitted (filtres, versions), nouveau rapport (projet / WO à la main / type EWT),
   éditeur de dépenses (devise, paiement, déduction, partage, Sella, photos, calcul au km), envoi / retour en édition.
   Étape 2 (expenses-trip.js, chargé par ce fichier) : onglets Trip Form (jours / tâches / heures) et Itinerary + per diem.
   Étapes suivantes : plusieurs lieux, PDF « Receipts », écran de contrôle Ops.
   ═══════════════════════════════════════════════════════════════════════════════ */

// ── Constantes (listes reprises de l'ancien site) ────────────────────────────
const EWT = ['Fast Meeting', 'Fast Training', 'Meeting', 'Monthly Supporting Expenses', 'Qatar Executive', 'Training', 'Visa', 'Passport', 'EIS', 'HAS-INT'];
const TYPES = { flight: 'Flight', hotel: 'Hotel', parking: 'Parking', transport: 'Transport', supplies: 'Internal supplies', tooling: 'Material / tooling', covid: 'COVID test / masks', other: 'Other' };
const SUBS = ['Taxi', 'Train', 'Bus', 'Boat', 'Toll fees', 'Private car fuel', 'Rental car', 'Rental car fuel'];
const PAY = { private: 'Private credit card or cash', amex: 'American Express', magna: 'Magna', has: 'Paid by HAS directly' };
const FAV = ['EUR', 'USD', 'CHF', 'AED', 'GBP', 'QAR', 'SEK', 'TRY', 'DKK', 'ARS', 'HKD', 'THB', 'ILS', 'ZAR'];
const TPL = { 'Default': '{x}', 'Home': 'HOME-{x}-HOME', 'Hotel to Assignment': 'HOTEL-{x}-ASSIGNMENT', 'Assignment to Hotel': 'ASSIGNMENT-{x}-HOTEL' };
const RATE0 = { value: 0.95, currency: 'USD' };      // valeur au km par défaut tant que expenseConfig/kmRate n'existe pas
const PER = 20, MAXPH = 8;
const OWNERS = ['prof_1781832236715'];               // module en test : utilisable seulement par ces profils (mets null pour l'ouvrir à tous)
const HEAD = ['kind', 'etype', 'wo', 'model', 'sn', 'reg', 'loc', 'icao', 'country', 'dateStart', 'dateEnd', 'category', 'locs'];

let D, root, S, TRIP;
const A = {};

// ── Petits outils ─────────────────────────────────────────────────────────────
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const $ = q => root.querySelector(q);
const num = v => { const n = parseFloat(String(v ?? '').replace(',', '.')); return isFinite(n) ? n : 0; };
const r2 = n => Math.round(n * 100) / 100;
const money = (n, c) => (c ? c + ' ' : '') + r2(n).toFixed(2);
const fmtD = d => d ? new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';
const todayISO = () => new Date().toISOString().slice(0, 10);
const monthCat = () => new Date().toLocaleString('en-GB', { month: 'short' }).toUpperCase() + '/' + new Date().getFullYear();
const clone = o => JSON.parse(JSON.stringify(o));
const uid = () => D.me().id;
const R = p => D.ref(D.db, p);
const phPath = (rid, lid) => 'expensePhotos/' + uid() + '/' + rid + '/' + lid;
const title = r => r.kind === 'ewt' ? 'EWT · ' + r.etype : (r.wo || 'No work order');
const lines = r => Object.values(r.lines || {}).sort((a, b) => (a.date || '').localeCompare(b.date || '') || String(a.id).localeCompare(String(b.id)));
const totals = ls => { const t = {}; ls.forEach(l => { t[l.currency] = (t[l.currency] || 0) + num(l.amount); }); const e = Object.entries(t); return e.length ? e.map(([c, v]) => money(v, c)).join('  ·  ') : '—'; };
const dates = r => r.dateStart ? fmtD(r.dateStart) + (r.dateEnd ? ' → ' + fmtD(r.dateEnd) : '') : '—';
const locsOf = r => [{ loc: r.loc, icao: r.icao, country: r.country }].concat(r.locs || []);   // lieu 1 + jusqu'à 4 lieux supplémentaires
const locTxt = r => (r.loc || '—') + ((r.locs || []).length ? ' +' + r.locs.length : '');
const mk = o => ({ id: 'exp_' + Date.now(), status: 'draft', ver: 0, createdAt: Date.now(), updatedAt: Date.now(), lines: {}, ...o });

const toast = (m, bad) => {
  if (!root) return;
  root.querySelectorAll('.xp-toast').forEach(x => x.remove());
  const t = document.createElement('div'); t.className = 'xp-toast' + (bad ? ' bad' : ''); t.textContent = m; root.appendChild(t);
  setTimeout(() => t.remove(), bad ? 6000 : 2600);
};
const fail = e => {
  console.error('Expenses:', e);
  const m = String((e && e.message) || e);
  toast(/permission/i.test(m) ? 'Firebase refused this (permission denied) — publish the expenses rules first.' : m, 1);
};

// ── Devises : listes du navigateur (pas de grosse liste dans le code) ─────────
let _cu;
const currencies = () => {
  if (_cu) return _cu;
  let all = [], dn = null;
  try { all = Intl.supportedValuesOf('currency'); } catch (e) { all = FAV.slice(); }
  try { dn = new Intl.DisplayNames(['en'], { type: 'currency' }); } catch (e) {}
  const nm = c => { try { return (dn && dn.of(c)) || c; } catch (e) { return c; } };
  return (_cu = { fav: FAV.map(c => [c, nm(c)]), all: all.filter(c => !FAV.includes(c)).map(c => [c, nm(c)]) });
};
const curOpts = sel => {
  const c = currencies(), o = ([k, n]) => '<option value="' + k + '"' + (k === sel ? ' selected' : '') + '>' + esc(n) + ' (' + k + ')</option>';
  return '<optgroup label="Frequent">' + c.fav.map(o).join('') + '</optgroup><optgroup label="All currencies">' + c.all.map(o).join('') + '</optgroup>';
};

// ── Photos : compression dans le navigateur (JPEG, 1600 px max, < ~380 Ko) ────
const loadImg = src => new Promise((ok, ko) => { const im = new Image(); im.onload = () => ok(im); im.onerror = () => ko(new Error('This file is not an image.')); im.src = src; });
async function shrink(file) {
  const u = URL.createObjectURL(file);
  try {
    const im = await loadImg(u), c = document.createElement('canvas');
    let s = Math.min(1, 1600 / Math.max(im.width, im.height)), q = 0.72, out = '';
    for (let i = 0; i < 5; i++) {
      c.width = Math.max(1, Math.round(im.width * s)); c.height = Math.max(1, Math.round(im.height * s));
      c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
      out = c.toDataURL('image/jpeg', q);
      if (out.length < 380000) break;
      s *= 0.8; q = Math.max(0.4, q - 0.08);
    }
    return out;
  } finally { URL.revokeObjectURL(u); }
}
async function rotate(d, dir) {
  const im = await loadImg(d), c = document.createElement('canvas');
  c.width = im.height; c.height = im.width;
  const x = c.getContext('2d'); x.translate(c.width / 2, c.height / 2); x.rotate(dir * Math.PI / 2); x.drawImage(im, -im.width / 2, -im.height / 2);
  return c.toDataURL('image/jpeg', 0.72);
}
const addPh = async files => {
  grab();
  for (const f of files) { if (S.ph.length >= MAXPH) { toast('Maximum ' + MAXPH + ' photos per expense.', 1); break; } S.ph.push(await shrink(f)); }
  render();
};

// ── Données ───────────────────────────────────────────────────────────────────
const safe = p => p.catch(e => ({ exists: () => false, val: () => null, err: e }));
async function load() {
  const [a, c, p] = await Promise.all([safe(D.get(R('expenses/' + uid()))), safe(D.get(R('expenseConfig/kmRate'))), safe(D.get(R('team/' + uid() + '/projects')))]);
  if (a.err) throw a.err;                                             // rapports illisibles : règles Firebase pas encore publiées
  S.reports = a.exists() ? a.val() : {};
  Object.values(S.reports).forEach(r => { if (r.lines == null) r.lines = {}; });
  S.rate = c.exists() && c.val().value > 0 ? c.val() : RATE0;
  S.projects = p.exists() ? Object.values(p.val()).filter(x => x && x.id && !x.transferred).sort((x, y) => (y.createdAt || 0) - (x.createdAt || 0)) : [];
}
const save = async r => { r.updatedAt = Date.now(); await D.set(R('expenses/' + uid() + '/' + r.id), clone(r)); S.reports[r.id] = r; };
const create = async o => { const r = mk(o); await save(r); S.rid = r.id; S.tab = 'exp'; S.view = 'rep'; render(); };

// ── Vues ──────────────────────────────────────────────────────────────────────
const lineRows = (ls, edit) => {
  const sty = '--c:70px 1.2fr 1.5fr 110px 1.2fr 80px' + (edit ? ' 120px' : '');
  return '<div class="xp-t hd" style="' + sty + '"><span>Date</span><span>Type</span><span>Description</span><span>Amount</span><span>Payment</span><span>Receipts</span>' + (edit ? '<span></span>' : '') + '</div>' +
    ls.map(l => '<div class="xp-t" style="' + sty + '"><span>' + esc(fmtD(l.date).slice(0, 6)) + '</span><span>' + esc(TYPES[l.type] || l.type || '') + (l.sub ? ' · ' + esc(l.sub) : '') + '</span><span>' + esc(l.fromTo || l.hotel || l.desc || '—') + '</span><b>' + esc(money(num(l.amount), l.currency)) + '</b><span>' + esc(PAY[l.payment] || '—') + '</span><span>' + (l.np ? l.np + (l.np > 1 ? ' photos' : ' photo') : '<span class="xp-chip2 warn">None</span>') + '</span>' +
      (edit ? '<span class="xp-ac"><button class="xp-lk" data-a="editLine" data-id="' + esc(l.id) + '">Edit</button><button class="xp-lk" data-a="delLine" data-id="' + esc(l.id) + '">Delete</button></span>' : '') + '</div>').join('') +
    '<div class="xp-tot">' + esc(totals(ls)) + '</div>';
};

const homeV = () => {
  const all = Object.values(S.reports), f = S.flt;
  const has = (v, k) => !f[k] || String(v || '').toLowerCase().includes(f[k].toLowerCase());
  const ok = r => has(title(r), 'wo') && has(r.category, 'cat') && has(r.sn, 'sn') && has(r.reg, 'reg') && has(r.model, 'model') && ['loc', 'icao', 'country'].every(k => !f[k] || locsOf(r).some(x => String(x[k] || '').toLowerCase().includes(f[k].toLowerCase()))) &&
    (!f.q || [title(r), r.sn, r.reg, r.model, locsOf(r).map(x => x.loc).join(' '), r.category].join(' ').toLowerCase().includes(f.q.toLowerCase())) &&
    (!f.from || (r.dateEnd || r.dateStart || '') >= f.from) && (!f.to || (r.dateStart || r.dateEnd || '9999') <= f.to);
  const dr = all.filter(r => r.status !== 'submitted').sort((a, b) => b.updatedAt - a.updatedAt);
  const sb = all.filter(r => r.status === 'submitted' && ok(r)).sort((a, b) => b.submittedAt - a.submittedAt);
  const pages = Math.max(1, Math.ceil(sb.length / PER)), pg = Math.min(S.page, pages - 1);
  const fi = (id, lab, v, type = 'text') => '<div class="xp-f"><label for="' + id + '">' + lab + '</label><input id="' + id + '" type="' + type + '" value="' + esc(v) + '"></div>';
  const open = Object.keys(f).some(k => k !== 'q' && f[k]) ? ' open' : '';
  const sty = '--c:1.3fr 1fr 1fr 1.3fr .8fr 230px';
  return '<div class="xp-h"><div><h1>Expenses</h1><div class="xp-m">Drafts to finish and everything you have submitted</div></div><button class="xp-btn xp-pri" data-a="new">+ New expense</button></div>' +
    '<section class="xp-c"><h2>To send · ' + dr.length + '</h2>' + (dr.length ? '<div class="xp-t hd" style="' + sty + '"><span>Work order</span><span>Aircraft</span><span>Location</span><span>Dates</span><span>Status</span><span></span></div>' +
      dr.map(r => '<div class="xp-t" style="' + sty + '"><b>' + esc(title(r)) + '</b><span>' + esc([r.model, r.sn].filter(Boolean).join(' · ') || '—') + '</span><span>' + esc(locTxt(r)) + '</span><span>' + dates(r) + '</span><span><span class="xp-chip2">Draft</span></span><span class="xp-ac"><button class="xp-lk" data-a="open" data-id="' + r.id + '">Edit</button><button class="xp-btn xp-pri" data-a="send" data-id="' + r.id + '">Send</button><button class="xp-lk" data-a="delr" data-id="' + r.id + '">Delete</button></span></div>').join('') : '<div class="xp-m">Nothing waiting. Use “+ New expense” to start a report.</div>') + '</section>' +
    '<section class="xp-c xp-flt"><div class="xp-h"><h2 style="margin:0">Submitted · ' + sb.length + '</h2><span><input id="fq" placeholder="Search work order, serial, registration…" value="' + esc(f.q) + '" style="width:280px"> <button class="xp-btn" data-a="filter">Search</button> <button class="xp-lk" data-a="clear">Clear</button></span></div>' +
    '<details' + open + '><summary>All filters</summary><div class="xp-r4">' + fi('f_wo', 'Work order', f.wo) + fi('f_cat', 'Category', f.cat) + fi('f_sn', 'Serial number', f.sn) + fi('f_reg', 'Registration', f.reg) + fi('f_model', 'Aircraft type', f.model) + fi('f_loc', 'Location', f.loc) + fi('f_icao', 'Airport (ICAO)', f.icao) + fi('f_country', 'Country', f.country) + fi('f_from', 'Work completed after', f.from, 'date') + fi('f_to', 'Work started before', f.to, 'date') + '</div></details>' +
    (sb.length ? '<div class="xp-t hd" style="' + sty + '"><span>Work order</span><span>Aircraft</span><span>Location</span><span>Dates</span><span>Sent</span><span></span></div>' +
      sb.slice(pg * PER, pg * PER + PER).map(r => '<div class="xp-t" style="' + sty + '"><b>' + esc(title(r)) + (r.category ? '<br><span class="xp-m">' + esc(r.category) + '</span>' : '') + '</b><span>' + esc([r.model, r.sn].filter(Boolean).join(' · ') || '—') + '</span><span>' + esc(locTxt(r)) + '</span><span>' + dates(r) + '</span><span>' + esc(new Date(r.submittedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })) + ' · v' + (r.ver || 1) + '</span><span class="xp-ac"><button class="xp-lk" data-a="det" data-id="' + r.id + '">Details</button><button class="xp-lk" data-a="reopen" data-id="' + r.id + '">Back to edit</button></span></div>').join('') +
      '<div class="xp-h" style="margin:12px 0 0"><span class="xp-m">' + (pg * PER + 1) + '–' + Math.min(sb.length, pg * PER + PER) + ' of ' + sb.length + '</span><span><button class="xp-lk" data-a="pg" data-d="-1"' + (pg ? '' : ' disabled') + '>‹ Previous</button><button class="xp-lk" data-a="pg" data-d="1"' + (pg < pages - 1 ? '' : ' disabled') + '>Next ›</button></span></div>' : '<div class="xp-m" style="margin-top:12px">No submitted report matches.</div>') + '</section>';
};

const newV = () =>
  '<div class="xp-h"><h1>New expense</h1></div>' +
  '<section class="xp-c"><h2>One of your projects</h2><div class="xp-m" style="margin-bottom:8px">Work order, aircraft and location are filled in for you.</div>' +
  (S.projects.length ? S.projects.map(p => '<button class="xp-pj" data-a="fromProj" data-id="' + esc(p.id) + '"><b>' + esc(p.wo || '—') + '</b><span>' + esc([p.model, p.sn, p.reg].filter(Boolean).join(' · ')) + '</span><span class="xp-m">' + esc(p.loc || '') + '</span></button>').join('') : '<div class="xp-m">No project found in your account.</div>') + '</section>' +
  '<section class="xp-c"><h2>Work order not in your projects</h2><div class="xp-row"><input id="n_wo" placeholder="e.g. FA34226"><button class="xp-btn" data-a="newWo">Create</button></div></section>' +
  '<section class="xp-c"><h2>Other expenses (no Trip Form)</h2><div class="xp-tiles">' + EWT.map(t => '<button class="xp-tile" data-a="newEwt" data-t="' + esc(t) + '">' + esc(t) + '</button>').join('') + '</div>' +
  '<div class="xp-row" style="margin-top:12px"><label for="n_cat">Category</label><input id="n_cat" placeholder="e.g. ' + monthCat() + ' — month or free text"></div></section>';

const locBlock = (r, sub) => {
  const ls = r.locs || [], inp = (i, f, lab, v) => '<div class="xp-f"><label>' + lab + '</label><input data-li="' + i + '" data-lf="' + f + '" value="' + esc(v) + '"' + (sub ? ' disabled' : '') + '></div>';
  return (ls.length ? '<div class="xp-m" style="margin:6px 0">Additional locations</div>' + ls.map((x, i) => '<div class="xp-r4">' + inp(i, 'loc', 'Location ' + (i + 2), x.loc) + inp(i, 'icao', 'Airport (ICAO)', x.icao) + inp(i, 'country', 'Country', x.country) + (sub ? '' : '<div class="xp-f"><label>&nbsp;</label><button class="xp-lk" data-a="locDel" data-i="' + i + '">Remove</button></div>') + '</div>').join('') : '') +
    (!sub && ls.length < 4 ? '<button class="xp-lk" data-a="locAdd">+ Add a location</button>' : '');
};

const repV = () => {
  const r = S.reports[S.rid], ls = lines(r), sub = r.status === 'submitted', ro = sub ? ' disabled' : '';
  const inp = (k, lab, type = 'text') => '<div class="xp-f"><label>' + lab + '</label><input type="' + type + '" data-r="' + k + '" value="' + esc(r[k]) + '"' + ro + '></div>';
  const noRc = ls.filter(l => !l.np).length;
  const tab = r.kind === 'ewt' || !TRIP ? 'exp' : (S.tab || 'exp');
  const tabs = r.kind === 'ewt' || !TRIP ? '' : '<nav class="xp-tabs">' + [['exp', 'Expenses · ' + ls.length], ['trip', 'Trip Form'], ['itin', 'Itinerary and per diem']].map(([k, v]) => '<button class="xp-tab' + (tab === k ? ' on' : '') + '" data-a="tab" data-v="' + k + '">' + v + '</button>').join('') + '</nav>';
  return '<div class="xp-h"><div><h1>' + esc(title(r)) + ' <span class="xp-chip2' + (sub ? ' ok' : '') + '">' + (sub ? 'Sent · v' + r.ver : 'Draft') + '</span></h1></div><span>' +
    (sub ? '<button class="xp-btn" data-a="reopen" data-id="' + r.id + '">Back to edit</button>' : '<button class="xp-btn xp-pri" data-a="send" data-id="' + r.id + '"' + (ls.length ? '' : ' disabled') + '>Send</button>') + '</span></div>' +
    '<section class="xp-c"><div class="xp-r4">' + (r.kind === 'ewt' ? '<div class="xp-f"><label>Type</label><b>' + esc(r.etype) + '</b></div>' + inp('category', 'Category') : inp('wo', 'Work order') + inp('model', 'Aircraft type') + inp('sn', 'Serial number') + inp('reg', 'Registration') + inp('loc', 'Location') + inp('icao', 'Airport (ICAO)') + inp('country', 'Country')) + inp('dateStart', 'Date started', 'date') + inp('dateEnd', 'Date completed', 'date') + '</div>' + (r.kind === 'wo' ? locBlock(r, sub) : '') + '</section>' +
    tabs + (tab === 'trip' ? TRIP.tripV(r, sub) : tab === 'itin' ? TRIP.itinV(r, sub) : '<section class="xp-c"><div class="xp-h"><h2 style="margin:0">Expenses · ' + ls.length + '</h2>' + (sub ? '' : '<button class="xp-btn xp-pri" data-a="addLine">+ Add expense</button>') + '</div>' +
    (ls.length ? lineRows(ls, !sub) : '<div class="xp-m">No expense yet.</div>') + '</section>') +
    '<section class="xp-c"><h2>Before sending</h2><div class="xp-ck"><span class="xp-chip2' + (ls.length ? ' ok' : ' warn') + '">' + (ls.length ? 'OK' : 'To do') + '</span> ' + ls.length + ' expense(s)</div><div class="xp-ck"><span class="xp-chip2' + (noRc ? ' warn' : ' ok') + '">' + (noRc ? 'To check' : 'OK') + '</span> ' + (noRc ? noRc + ' expense(s) without a receipt photo' : 'every expense has a receipt') + '</div>' + (r.kind === 'wo' && TRIP ? TRIP.checks(r) : '') + '</section>';
};

const kmBox = l => {
  const rs = l.routes || [], tot = r2(rs.reduce((s, x) => s + x.km, 0) * S.rate.value);
  return '<section class="xp-c"><h2>Private car fuel calculator</h2><div class="xp-m" style="margin-bottom:10px">Rate: ' + S.rate.value.toFixed(2) + ' ' + S.rate.currency + ' per km (set by the BackOffice). Routes and calculation are written on the receipt.</div>' +
    '<div class="xp-r3"><div class="xp-f"><label for="k_tpl">Template</label><select id="k_tpl">' + Object.keys(TPL).map(k => '<option>' + k + '</option>').join('') + '</select></div><div class="xp-f"><label for="k_x">Route</label><input id="k_x" placeholder="e.g. ZRH"></div><div class="xp-f"><label for="k_km">Distance (km)</label><input id="k_km" inputmode="decimal"></div></div>' +
    '<button class="xp-btn" data-a="addRoute">Add route</button>' + rs.map((x, i) => '<div class="xp-rt"><span>' + esc(x.r) + ' · ' + x.km + ' km</span><button class="xp-lk" data-a="rmRoute" data-i="' + i + '">Remove</button></div>').join('') +
    (rs.length ? '<div class="xp-rt"><b>' + tot.toFixed(2) + ' ' + S.rate.currency + '</b><button class="xp-btn xp-pri" data-a="calc">Calculate</button></div>' : '') +
    '<div class="xp-r2" style="margin-top:12px"><div class="xp-f"><label for="l_pfrom">Private car fuel date from</label><input id="l_pfrom" type="date" value="' + esc(l.pfrom) + '"></div><div class="xp-f"><label for="l_pto">Private car fuel date to</label><input id="l_pto" type="date" value="' + esc(l.pto) + '"></div></div></section>';
};

const expV = () => {
  const r = S.reports[S.rid], l = S.ln, ewt = r.kind === 'ewt', km = l.type === 'transport' && l.sub === 'Private car fuel';
  const chips = (list, cur, a) => list.map(([k, v]) => '<button type="button" class="xp-chip' + (k === cur ? ' on' : '') + '" data-a="' + a + '" data-v="' + esc(k) + '">' + esc(v) + '</button>').join('');
  const f = (k, lab, type = 'text', ex = '') => '<div class="xp-f"><label for="l_' + k + '">' + lab + '</label><input id="l_' + k + '" type="' + type + '" value="' + esc(l[k]) + '" ' + ex + '></div>';
  const isEdit = !!(r.lines && r.lines[l.id]);
  return '<div class="xp-h"><div><h1>' + (isEdit ? 'Edit expense' : 'Add expense') + '</h1><div class="xp-m">' + esc(title(r)) + '</div></div><span><button class="xp-btn" data-a="back">Cancel</button> <button class="xp-btn xp-pri" data-a="saveLine">Save expense</button></span></div><div class="xp-g2"><div>' +
    '<section class="xp-c"><h2>Type</h2>' + (ewt ? '<span class="xp-chip on">' + esc(r.etype) + '</span>' : '<div class="xp-chips">' + chips(Object.entries(TYPES), l.type, 'type') + '</div>') +
    (l.type === 'transport' ? '<h2 style="margin-top:12px">Means of transport</h2><div class="xp-chips">' + chips(SUBS.map(s => [s, s]), l.sub, 'sub') + '</div>' : '') +
    (l.type === 'hotel' ? '<div class="xp-r2" style="margin-top:12px">' + f('hotel', 'Hotel name') + f('city', 'Accommodation city (where you stayed the night)') + '</div><details class="xp-help"><summary>Hotel bill rules</summary>Check the bill. If transfers or parking are included, deduct them and create a separate expense. Paid in cash: report only accommodation, taxes and laundry. Paid with AMEX: enter the gross amount, put dinners and drinks in “Personal expense” and press Deduct, and attach the payment receipt. Taxes paid in another currency or by another method: create a separate hotel expense.</details>' : '') +
    (l.type === 'flight' ? '<div class="xp-r2" style="margin-top:12px">' + f('flight', 'Flight number') + '</div>' : '') + '</section>' +
    (km ? kmBox(l) : '') +
    '<section class="xp-c"><div class="xp-r3">' + f('date', l.type === 'hotel' ? 'Check-in date' : 'Date of expense', 'date') + (l.type === 'hotel' ? f('dateEnd', 'Check-out date', 'date') : '') + '</div>' +
    '<div class="xp-r3"><div class="xp-f"><label for="l_amount">Amount</label><input id="l_amount" inputmode="decimal" value="' + esc(l.amount) + '"></div><div class="xp-f"><label for="l_currency">Currency</label><select id="l_currency">' + curOpts(l.currency) + '</select></div><div class="xp-f"><label for="l_payment">Payment method</label><select id="l_payment">' + Object.entries(PAY).map(([k, v]) => '<option value="' + k + '"' + (k === l.payment ? ' selected' : '') + '>' + v + '</option>').join('') + '</select></div></div>' +
    '<div class="xp-r3">' + f('priv', 'Personal expense', 'text', 'inputmode="decimal"') + '<div class="xp-f"><label>&nbsp;</label><button class="xp-btn" data-a="deduct">Deduct from amount</button></div>' + (l.ded ? '<div class="xp-f xp-m"><label>&nbsp;</label>Already deducted: ' + l.ded + '</div>' : '') + '</div>' +
    '<div class="xp-r3">' + f('share', 'Share with (work order)', 'text', 'placeholder="FA…"') + '<div class="xp-f"><label>&nbsp;</label><label class="xp-ckb"><input id="l_sella" type="checkbox"' + (l.sella ? ' checked' : '') + '> Sella</label></div></div>' +
    '<div class="xp-m" style="margin:-4px 0 12px">Shared expenses must also be reported in the other work order.</div>' +
    f('fromTo', 'From / To (written on the receipt next to the type)') + '<div class="xp-f" style="margin-top:12px"><label for="l_desc">Description (written on the receipt)</label><textarea id="l_desc">' + esc(l.desc) + '</textarea></div><div class="xp-f" style="margin-top:12px"><label for="l_notes">Notes for the BackOffice reviewers</label><textarea id="l_notes">' + esc(l.notes) + '</textarea></div></section></div>' +
    '<aside class="xp-c"><h2>Receipts</h2>' + (S.phLoaded ? '<label class="xp-dz">Add photos<input id="l_file" type="file" accept="image/*" multiple hidden></label>' : '<div class="xp-m">Loading photos…</div>') +
    '<div class="xp-ph">' + S.ph.map((d, i) => '<div><img src="' + d + '" alt="Receipt ' + (i + 1) + '"><div><button class="xp-lk" data-a="photoRot" data-i="' + i + '" data-d="-1" aria-label="Rotate left">⟲</button><button class="xp-lk" data-a="photoRot" data-i="' + i + '" data-d="1" aria-label="Rotate right">⟳</button><button class="xp-lk" data-a="photoView" data-i="' + i + '">View</button><button class="xp-lk" data-a="photoDel" data-i="' + i + '">Delete</button></div></div>').join('') + '</div></aside></div>';
};

const detV = () => {
  const r = S.reports[S.rid], vs = r.versions || {}, ks = Object.keys(vs).sort((a, b) => +a.slice(1) - +b.slice(1));
  const key = vs['v' + S.vv] ? 'v' + S.vv : ks[ks.length - 1], v = vs[key] || { lines: r.lines, head: r, at: r.submittedAt }, h = v.head || r;
  const ls = Object.values(v.lines || {}).sort((a, b) => (a.date || '').localeCompare(b.date || ''));
  const row = (a, b) => '<div class="xp-f"><label>' + a + '</label><b>' + esc(b || '—') + '</b></div>';
  return '<div class="xp-h"><div><h1>' + esc(title(h)) + '</h1><div class="xp-m">Sent ' + esc(new Date(v.at).toLocaleString('en-GB')) + (v.by ? ' by ' + esc(v.by) : '') + (v.note ? ' · Note: ' + esc(v.note) : '') + '</div></div><span>' +
    (ks.length > 1 ? '<select id="d_ver">' + ks.map(k => '<option value="' + k.slice(1) + '"' + (k === key ? ' selected' : '') + '>Version ' + k.slice(1) + '</option>').join('') + '</select> ' : '') +
    (r.status === 'submitted' ? '<button class="xp-btn" data-a="reopen" data-id="' + r.id + '">Back to edit</button>' : '') + '</span></div>' +
    '<section class="xp-c"><div class="xp-r4">' + row('Work order', title(h)) + row('Aircraft type', h.model) + row('Serial number', h.sn) + row('Registration', h.reg) + row('Location', h.loc) + row('Airport (ICAO)', h.icao) + row('Country', h.country) + row('Category', h.category) + row('Additional locations', (h.locs || []).map(x => [x.loc, x.icao, x.country].filter(Boolean).join(' / ')).join(' · ')) + row('Date started', fmtD(h.dateStart)) + row('Date completed', fmtD(h.dateEnd)) + '</div></section>' +
    '<section class="xp-c"><h2>Expenses · ' + ls.length + '</h2>' + lineRows(ls, false) + '</section>' + (TRIP && h.kind !== 'ewt' ? TRIP.tripV(v, true) + TRIP.itinV(v, true) : '');
};

const render = () => {
  if (!root) return;
  $('#xp-v').innerHTML = ({ home: homeV, new: newV, rep: repV, exp: expV, det: detV })[S.view]();
  $('#xp-back').textContent = S.view === 'home' ? '← Menu' : '← Expenses';
};

// ── Formulaire d'une dépense ──────────────────────────────────────────────────
const grab = () => {
  const l = S.ln; if (!l) return;
  ['date', 'dateEnd', 'amount', 'currency', 'payment', 'priv', 'share', 'fromTo', 'desc', 'notes', 'hotel', 'city', 'flight', 'pfrom', 'pto'].forEach(k => { const e = $('#l_' + k); if (e) l[k] = e.value; });
  const s = $('#l_sella'); if (s) l.sella = s.checked;
};

// ── Actions (boutons data-a="...") ────────────────────────────────────────────
A.close = () => { if (root) { root.remove(); root = null; } };
A.back = () => { if (S.view === 'home') return A.close(); S.view = S.view === 'exp' ? 'rep' : 'home'; render(); };
A.new = () => { S.view = 'new'; render(); };
A.open = d => { S.rid = d.id; S.tab = 'exp'; S.view = 'rep'; render(); };
A.locAdd = async () => { const r = S.reports[S.rid]; (r.locs = r.locs || []).push({ loc: '', icao: '', country: '' }); await save(r); render(); };
A.locDel = async d => { const r = S.reports[S.rid]; r.locs.splice(+d.i, 1); await save(r); render(); };
A.tab = d => {
  S.tab = d.v; const r = S.reports[S.rid];
  if (d.v === 'trip' && TRIP && r.status !== 'submitted') { TRIP.syncDays(r); save(r).catch(fail); }   // crée les jours d'après les dates du rapport
  render();
};
A.det = d => { S.rid = d.id; S.vv = 0; S.view = 'det'; render(); };
A.pg = d => { S.page = Math.max(0, S.page + +d.d); render(); };
A.clear = () => { S.flt = {}; S.page = 0; render(); };
A.filter = () => {
  const g = id => ($('#' + id) || {}).value || '';
  S.flt = { q: g('fq'), wo: g('f_wo'), cat: g('f_cat'), sn: g('f_sn'), reg: g('f_reg'), model: g('f_model'), loc: g('f_loc'), icao: g('f_icao'), country: g('f_country'), from: g('f_from'), to: g('f_to') };
  S.page = 0; render();
};
A.fromProj = async d => {
  const p = S.projects.find(x => x.id === d.id); if (!p) return;
  const loc = String(p.loc || '').trim();
  await create({ kind: 'wo', pid: p.id, wo: p.wo || '', model: p.model || '', sn: p.sn || '', reg: p.reg || '', loc, icao: /^[A-Za-z]{4}$/.test(loc) ? loc.toUpperCase() : '' });
};
A.newWo = async () => { const wo = ($('#n_wo').value || '').trim().toUpperCase(); if (!wo) return toast('Type the work order number.', 1); await create({ kind: 'wo', wo }); };
A.newEwt = async d => { let cat = ($('#n_cat').value || '').trim(); if (!cat && d.t === 'Monthly Supporting Expenses') cat = monthCat(); await create({ kind: 'ewt', etype: d.t, category: cat }); };
A.delr = async d => {
  if (!confirm('Delete this draft and its receipts?')) return;
  await D.remove(R('expenses/' + uid() + '/' + d.id)); await D.remove(R('expensePhotos/' + uid() + '/' + d.id));
  delete S.reports[d.id]; render();
};
A.send = async d => {
  const r = S.reports[d.id || S.rid], ls = lines(r);
  if (!ls.length) return toast('Add at least one expense before sending.', 1);
  const miss = ls.filter(l => !l.np).length;
  if (miss && !confirm(miss + ' expense(s) have no receipt photo. Send anyway?')) return;
  const note = prompt('Note for the BackOffice reviewers (optional)', ''); if (note === null) return;
  r.ver = (r.ver || 0) + 1; r.status = 'submitted'; r.submittedAt = Date.now();
  const head = {}; HEAD.forEach(k => { if (r[k] != null) head[k] = r[k]; });
  (r.versions = r.versions || {})['v' + r.ver] = { at: r.submittedAt, note: note.trim(), by: (D.me() || {}).name || '', lines: clone(r.lines || {}), trip: clone(r.trip || null), itin: clone(r.itin || null), head };
  await save(r); S.view = 'home'; render(); toast('Sent to the BackOffice (version ' + r.ver + ').');
};
A.reopen = async d => {
  const r = S.reports[d.id || S.rid];
  if (!confirm('Move this report back to editing? You will send it again as a new version.')) return;
  r.status = 'draft'; await save(r); S.rid = r.id; S.view = 'rep'; render();
};
A.addLine = () => {
  const r = S.reports[S.rid], last = lines(r).slice(-1)[0] || {};
  S.ln = { id: 'l_' + Date.now(), type: r.kind === 'ewt' ? 'ewt' : 'flight', sub: '', date: todayISO(), amount: '', currency: last.currency || 'EUR', payment: last.payment || 'private', routes: [] };
  S.ph = []; S.phLoaded = true; S.view = 'exp'; render();
};
A.editLine = async d => {
  const r = S.reports[S.rid]; S.ln = clone(r.lines[d.id]); S.ln.routes = S.ln.routes || [];
  S.ph = []; S.phLoaded = !S.ln.np; S.view = 'exp'; render();
  if (S.ln.np) {
    const s = await D.get(R(phPath(r.id, d.id)));
    S.ph = s.exists() ? Object.values(s.val()) : []; S.phLoaded = true;
    if (S.view === 'exp' && S.ln.id === d.id) { grab(); render(); }
  }
};
A.delLine = async d => {
  if (!confirm('Delete this expense?')) return;
  const r = S.reports[S.rid]; delete r.lines[d.id]; await save(r); await D.remove(R(phPath(r.id, d.id))); render();
};
A.type = d => { grab(); S.ln.type = d.v; if (d.v !== 'transport') S.ln.sub = ''; render(); };
A.sub = d => { grab(); S.ln.sub = d.v; render(); };
A.addRoute = () => {
  grab(); const x = ($('#k_x').value || '').trim(), km = num($('#k_km').value), tpl = $('#k_tpl').value;
  if (!x || !(km > 0)) return toast('Type a route and a distance in km.', 1);
  S.ln.routes.push({ r: TPL[tpl].replace('{x}', x.toUpperCase()), km: r2(km) }); render();
};
A.rmRoute = d => { grab(); S.ln.routes.splice(+d.i, 1); render(); };
A.calc = () => {                                                      // même texte que l'ancien site : (86.00 KM) x 0.95$/KM = 81.70 $
  grab(); const l = S.ln, rs = l.routes, rate = S.rate.value, tot = r2(rs.reduce((s, x) => s + x.km, 0) * rate), sym = S.rate.currency === 'USD' ? '$' : ' ' + S.rate.currency;
  l.amount = tot.toFixed(2); l.currency = S.rate.currency; l.rate = rate;
  l.fromTo = rs.map(x => x.r).join(' / ');
  l.desc = l.fromTo + '\n(' + rs.map(x => x.km.toFixed(2) + ' KM').join(' + ') + ') x ' + rate.toFixed(2) + sym + '/KM = ' + tot.toFixed(2) + ' ' + sym.trim();
  render();
};
A.deduct = () => {
  grab(); const l = S.ln, p = num(l.priv);
  if (!(p > 0)) return toast('Type the personal expense amount first.', 1);
  l.amount = r2(num(l.amount) - p).toFixed(2); l.ded = r2((l.ded || 0) + p); l.priv = ''; render();
};
A.photoRot = async d => { grab(); S.ph[+d.i] = await rotate(S.ph[+d.i], +d.d); render(); };
A.photoDel = d => { grab(); S.ph.splice(+d.i, 1); render(); };
A.photoView = d => { const w = window.open('', '_blank'); if (w) w.document.write('<img src="' + S.ph[+d.i] + '" style="max-width:100%">'); };
A.saveLine = async () => {
  grab(); const r = S.reports[S.rid], l = S.ln;
  if (!l.date) return toast('Date of expense is required.', 1);
  if (!(num(l.amount) > 0)) return toast('Amount must be greater than 0.', 1);
  if (!l.currency) return toast('Choose a currency.', 1);
  l.amount = r2(num(l.amount));
  if (S.phLoaded) l.np = S.ph.length;
  r.lines = r.lines || {}; r.lines[l.id] = clone(l);
  await save(r);
  if (S.phLoaded) await D.set(R(phPath(r.id, l.id)), S.ph.length ? S.ph : null);
  S.view = 'rep'; render();
};
A.rate = async () => {                                                // réservé aux admins / ops (règle Firebase expenseConfig)
  const v = prompt('Private car fuel — value per km (USD)', S.rate.value); if (v === null) return;
  const n = num(v); if (!(n > 0 && n < 100)) return toast('Enter a number above 0.', 1);
  const o = { value: n, currency: 'USD', by: (D.me() || {}).name || '', at: Date.now() };
  await D.set(R('expenseConfig/kmRate'), o); S.rate = o; toast('Rate saved: ' + n.toFixed(2) + ' USD per km.');
};

// ── Style (injecté une seule fois, tout est préfixé xp-) ──────────────────────
export const CSS = `
.xp{position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;background:#f4f6fb;color:#1b2430;font:14px/1.45 system-ui,-apple-system,'Segoe UI',sans-serif}
.xp *{box-sizing:border-box}
.xp-top{flex:none;display:flex;align-items:center;gap:8px;padding:calc(9px + env(safe-area-inset-top,0px)) 14px 9px;color:#fff;background:linear-gradient(120deg,#1e1b4b,#312e81 58%,#4338ca)}
.xp-top b{font-size:15px}.xp-sp{flex:1}
.xp-top button{border:0;border-radius:10px;padding:8px 13px;font:600 13px system-ui;color:#fff;background:rgba(255,255,255,.16);cursor:pointer;white-space:nowrap}
.xp-b{flex:1;overflow:auto;padding:18px 14px 60px}.xp-w{max-width:1040px;margin:0 auto}
.xp h1{margin:0 0 4px;font-size:22px}.xp h2{margin:0 0 10px;font-size:15px}.xp-m{color:#5b6675}
.xp-c{background:#fff;border:1px solid #e3e7ec;border-radius:12px;padding:16px 18px;margin-bottom:16px}
.xp-h{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:12px}
.xp-btn{font:600 13px system-ui;border:1px solid #c5cdd8;background:#fff;color:#1b2430;border-radius:8px;padding:8px 13px;cursor:pointer}
.xp-btn:disabled,.xp-lk:disabled{opacity:.45;cursor:default}
.xp-pri{background:#4338ca;border-color:#4338ca;color:#fff}
.xp-lk{font:600 13px system-ui;border:0;background:none;color:#4338ca;padding:4px 6px;cursor:pointer}
.xp-t{display:grid;grid-template-columns:var(--c);gap:10px;align-items:center;padding:10px 2px;border-top:1px solid #edf0f3;font-size:13.5px}
.xp-t>*{min-width:0}.xp-t.hd{border-top:0;font-size:12px;font-weight:600;color:#5b6675;padding-top:0}
.xp-ac{display:flex;justify-content:flex-end;align-items:center;gap:2px}
.xp-tot{display:flex;justify-content:flex-end;padding-top:10px;border-top:1px solid #edf0f3;font-weight:700}
.xp-chip2{display:inline-block;font-size:12px;font-weight:600;border-radius:99px;padding:2px 9px;background:#fef3d6;color:#7a5a00}
.xp-chip2.ok{background:#e4f4e4;color:#1f5a1f}.xp-chip2.warn{background:#fef3d6;color:#7a5a00}
.xp-ck{margin:6px 0}
.xp-f label,.xp-row label{display:block;font-size:12px;font-weight:600;color:#5b6675;margin-bottom:4px}
.xp input,.xp select,.xp textarea{font:inherit;width:100%;border:1px solid #c5cdd8;border-radius:8px;padding:8px 10px;background:#fff;color:#1b2430}
.xp textarea{min-height:64px}.xp-row{display:flex;gap:10px;align-items:center}.xp-row input{flex:1}.xp-row label{margin:0}
.xp-r2,.xp-r3,.xp-r4{display:grid;gap:12px;margin-bottom:12px}
.xp-r2{grid-template-columns:1fr 1fr}.xp-r3{grid-template-columns:1fr 1fr 1fr}.xp-r4{grid-template-columns:repeat(4,1fr)}
.xp-g2{display:grid;grid-template-columns:1.7fr 1fr;gap:16px;align-items:start}
.xp-chips,.xp-tiles{display:flex;flex-wrap:wrap;gap:8px}
.xp-chip{font:600 13px system-ui;border:1px solid #c5cdd8;background:#fff;color:#1b2430;border-radius:99px;padding:6px 12px;cursor:pointer}
.xp-chip.on{background:#4338ca;border-color:#4338ca;color:#fff}
.xp-tile{font:600 13px system-ui;min-width:150px;min-height:56px;border:1px solid #c5cdd8;border-radius:10px;background:#fff;color:#1b2430;padding:10px;cursor:pointer}
.xp-pj{display:grid;grid-template-columns:1fr 2fr 1fr;gap:10px;width:100%;text-align:left;font:inherit;border:1px solid #e3e7ec;border-radius:10px;background:#fff;padding:11px 14px;margin-top:8px;cursor:pointer}
.xp-pj:hover,.xp-tile:hover{border-color:#4338ca;background:#f1f0ff}
.xp-rt{display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-top:1px solid #edf0f3;margin-top:8px}
.xp-ckb{display:flex!important;align-items:center;gap:8px;font-size:14px!important;color:#1b2430!important;padding-top:8px}.xp-ckb input{width:auto}
.xp-help{margin:10px 0 0;color:#5b6675}.xp-help summary{cursor:pointer;font-weight:600;color:#4338ca}
.xp-dz{display:block;text-align:center;border:2px dashed #c5cdd8;border-radius:12px;padding:18px;color:#5b6675;cursor:pointer;font-weight:600}
.xp-ph{display:flex;flex-wrap:wrap;gap:12px;margin-top:12px}.xp-ph>div{width:110px}
.xp-ph img{width:110px;height:150px;object-fit:cover;border-radius:8px;border:1px solid #e3e7ec;display:block}
.xp details summary{cursor:pointer;font-weight:600;color:#4338ca;margin:4px 0 10px}
.xp-toast{position:absolute;left:50%;bottom:calc(22px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);z-index:60;max-width:calc(100vw - 32px);padding:10px 16px;border-radius:12px;background:#1b2430;color:#fff;font-weight:600;box-shadow:0 10px 30px rgba(0,0,0,.3)}
.xp-toast.bad{background:#b42318}
.xp-tabs{display:flex;gap:6px;margin:0 0 14px;flex-wrap:wrap}
.xp-tab{font:600 13px system-ui;border:1px solid #c5cdd8;background:#fff;color:#1b2430;border-radius:10px;padding:8px 14px;cursor:pointer}
.xp-tab.on{background:#4338ca;border-color:#4338ca;color:#fff}
@media(max-width:760px){.xp-t{grid-template-columns:1fr 1fr!important}.xp-t.hd{display:none}.xp-ac{justify-content:flex-start;flex-wrap:wrap;grid-column:1/-1}.xp-r2,.xp-r3,.xp-r4,.xp-g2{grid-template-columns:1fr}.xp-pj{grid-template-columns:1fr}}
`;

// ── Point d'entrée ────────────────────────────────────────────────────────────
const X = { get S() { return S; }, A, esc, num, r2, fmtD, money, curOpts, save, render, toast, lines, title, $ };   // partagé avec expenses-trip.js

export async function open(deps) {
  D = deps; A.close();
  const me = D.me && D.me();
  if (!me || !me.id) { alert('Sign in with your engineer profile first.'); return; }
  if (OWNERS && !OWNERS.includes(me.id)) { alert('Expenses is not available yet.'); return; }
  S = { view: 'home', reports: {}, rate: RATE0, projects: [], flt: {}, page: 0, rid: null, ln: null, ph: [], phLoaded: true, vv: 0, tab: 'exp' };
  if (!document.getElementById('xp-css')) { const s = document.createElement('style'); s.id = 'xp-css'; s.textContent = CSS; document.head.appendChild(s); }
  root = document.createElement('div'); root.className = 'xp';
  root.innerHTML = '<div class="xp-top"><button id="xp-back" data-a="back">← Menu</button><b>Expenses</b><span class="xp-sp"></span>' + ((D.isAdmin() || D.ops()) ? '<button data-a="rate">Rate per km</button>' : '') + '<button data-a="close" aria-label="Close">✕</button></div><div class="xp-b"><div class="xp-w" id="xp-v"><div class="xp-m">Loading…</div></div></div>';
  root.addEventListener('click', e => { const b = e.target.closest('[data-a]'); if (!b || !A[b.dataset.a]) return; Promise.resolve().then(() => A[b.dataset.a](b.dataset, b)).catch(fail); });
  root.addEventListener('change', e => {
    const t = e.target;
    if (t.dataset && t.dataset.r) { const r = S.reports[S.rid]; r[t.dataset.r] = t.value; if (TRIP && r.kind === 'wo' && (t.dataset.r === 'dateStart' || t.dataset.r === 'dateEnd')) TRIP.syncDays(r); save(r).catch(fail); }
    else if (t.dataset && t.dataset.li != null && t.dataset.li !== '') { const r = S.reports[S.rid]; r.locs[+t.dataset.li][t.dataset.lf] = t.value; save(r).catch(fail); }
    else if (t.id === 'l_file') addPh(t.files).catch(fail);
    else if (t.id === 'd_ver') { S.vv = +t.value; render(); }
  });
  root.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.closest('.xp-flt')) A.filter(); });
  document.body.appendChild(root);
  try { TRIP = await import('./expenses-trip.js'); TRIP.init(X); } catch (e) { TRIP = null; console.warn('expenses-trip.js not loaded:', e); }
  try { await load(); } catch (e) { fail(e); }
  render();
}
