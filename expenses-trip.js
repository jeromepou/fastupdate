/* ═══════════════════════════════════════════════════════════════════════════════
   expenses-trip.js — Trip Form (jours → tâches → heures) + Itinerary et per diem
   ───────────────────────────────────────────────────────────────────────────────
   Chargé par expenses.js (import dynamique) : rien à ajouter dans index.
   Données dans le rapport (Firebase) :
     trip  = { d: { 'AAAA-MM-JJ': { m: 1, t: { <id>: { n: '2.5', h: [2, 1.5] } } } }, x: { 'AAAA-MM-JJ': 1 } }   (x = jours supprimés)
     itin  = { e: { <id>: { id, s, e, det, ron: [détails], pd: [{ a, c }] } } }        (s/e = dates, pd = per diem : montant + devise)
   La liste des tâches et les textes de règles viennent de l'ancien site (hasbackoffice.net).
   ═══════════════════════════════════════════════════════════════════════════════ */
const FREQ = ["1.1", "1.2", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "3.6", "3.7", "3.8", "3.9", "3.10"];
const ALL = ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "1.10", "1.11", "1.12", "1.13", "1.14", "1.15", "1.16", "1.17", "1.18", "1.19", "1.20", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16", "2.17", "2.18", "2.19", "2.20", "2.21", "2.22", "2.23", "2.24", "2.25", "2.26", "2.27", "2.28", "2.29", "2.30", "2.31", "2.32", "2.33", "2.34", "2.35", "2.36", "2.37", "2.38", "2.39", "2.40", "2.41", "2.42", "2.43", "2.44", "2.45", "2.46", "2.47", "2.48", "2.49", "2.50", "2.51", "2.52", "2.53", "2.54", "2.55", "2.56", "2.57", "2.58", "2.59", "2.60", "2.61", "2.62", "2.63", "2.64", "2.65", "2.66", "2.67", "2.68", "2.69", "2.70", "2.71", "2.72", "2.73", "2.74", "2.75", "2.76", "2.77", "2.78", "2.79", "2.80", "2.81", "2.82", "2.83", "2.84", "2.85", "2.86", "2.87", "2.88", "2.89", "2.90", "2.91", "2.92", "2.93", "2.94", "2.95", "2.96", "2.97", "2.98", "2.99", "2.100", "2.101", "2.102", "2.103", "2.104", "2.105", "2.106", "2.107", "2.108", "2.109", "2.110", "2.111", "2.112", "2.113", "2.114", "2.115", "2.116", "2.117", "2.118", "2.119", "2.120", "3.16", "4.46", "4.57", "17.1", "0.5", "1.21", "1.23", "1.27", "2.456", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.13", "3.14", "3.400", "3.456", "4.2", "4.18", "5.2", "5.5", "5.8", "5.11", "5.12", "5.20", "6.1", "6.3", "6.4", "6.5", "6.6", "7.1", "7.2", "7.8", "8.1", "8.2", "8.3", "8.9", "9.1", "9.4", "9.5", "9.6", "9.7", "9.8", "9.10", "9.11", "9.12", "9.18", "9.25", "9.33", "10.1", "10.2", "10.5", "10.15", "10.16", "10.27", "11.19", "11.26", "12.1", "12.2", "12.3", "14.1", "14.2", "14.3", "14.4", "15.19", "15.26", "16.5"];
const RULES = {
 "combined": "COMBINED WORK ORDERS\n\nBASIC CONCEPT BEHIND SPLITTING EXPENSES IS TREATING THE CUSTOMERS FAIRLY\n\n1) 2 SUPPORTS ON A SINGLE DAY (FOR TWO DIFFERENT A/C) IN THE SAME LOCATION\n\nCHARGE THE AIRLINE TICKET COST OF FIRST SUPPORT (AS PER TRIP FORM DATES AND AIRLINE TICKET DATES) - CHARGE FULL AMOUNT\n\nAIRLINE TICKET (HOME-LOCATION OF SUPPORT)\n\nEXCESS BAGGAGE (IN HOMETOWN) , OR AIRPORT LUGGAGE EXPENSES (IF ANY)\n\nTAXI TRANSPORTATION HOME-AIRPORT (IF ANY)\n\nTRAVELLING TIME (HOME-FBO) TO BE CHARGED IN FULL\n\nSECOND SUPPORT (AS PER TRIP FORM DATES AND AIRLINE TICKET DATES) - CHARGE FULL AMOUNT\n\nAIRLINE TICKET (LOCATION OF SUPPORT – HOME)\n\nEXCESS BAGGAGE (LOCATION OF SUPPORT) , OR AIRPORT LUGGAGE EXPENSES (IF ANY)\n\nFBO-AIRPORT\n\nEXPENSES TO BE SPLIT OVER THE TWO SUPPORTS\n\nTRANSPORTATION COSTS (HOME-AIRPORT-HOME - IF YOU USED YOUR PERSONAL CAR\n\nCHARGED THE LAST DAY AS PER TRIP FORM : DATE COMPLETED - IN CASE YOU USED YOUR PERSONAL CAR– IF NOT PLS IGNORE THIS NOTE\n\nPARKING - ALSO CHARGED AS PER LAST TRIP FORM DATE (“DATE COMPLETED”)\n\nPER DIEM IS NEVER SPLIT OVER TWO SUPPORTS\n\nIF RETURN FLIGHT IS LATER THAN 13 00 HRS CHARGED TO THE W/O WITH MORE WORKING HOURS, OR TO THE WORK ORDER WHICH WAS ASSIGNED FIRST (SUGGESTION).\n\n2) 2 SUPPORTS FOR 2 DIFFERENT A/C IN DIFFERENT LOCATIONS\n\nEXAMPLE: LOCATION OF FIRST SUPPORT: AMS\n\nLOCATION OF SECOND SUPPORT: MUC\n\nCHARGE TO FIRST SUPPORT (AS PER TRIP FORM DATES AND AIRLINE TICKET DATES) (FULL AMOUNT)\n\nHOTEL ACCOMMODATION IN AMS (TRANSFERS AND PERSONAL EXPENSES EXCLUDED - LAUNDRY MAY BE INCLUDED) AS PER HOTEL BILL DATES\n\nAIRLINE TICKET (HOME-AMS) - TRAVELLING TIME: FULLY CHARGED\n\nEXCESS BAGGAGE , OR AIRPORT LUGGAGE EXPENSES (IF ANY)\n\nPER DIEM AMS (LOCATION YOU STAYED THE NIGHT) - AS PER HOTEL ACCOMMODATION DATES\n\nCHARGE TO SECOND SUPPORT (FULL AMOUNT) (AS PER TRIP FORM DATES AND AIRLINE TICKET DATES)\n\nACCOMMODATION IN MUC– AS HOTEL BILL DATES\n\nAIRLINE TICKET (MUC-HOME ),\n\nEXCESS BAGGAGE , OR AIRPORT LUGGAGE EXPENSES(IF ANY)\n\nPER DIEM IN MUC AS PER TRIP FORM DATES AND HOTEL BILL DATES\n\nSHARE EXPENSES FIELD\n\nAIRLINE TICKET (AMS-MUC) – TYPE IN “SHARED WITH” FIELD THE OTHER SUPPORT FA# - TRAVELLING TIME SHARED AS WELL\n\nEXCESS BAGGAGE , OR AIRPORT LUGGAGE EXPENSES (IF ANY)\n\nTAXI HOTEL-AMS ON THE DAY OF DEPARTURE\n\nPRIVATE CAR EXPENSES (HOME-HOMETOWN-HOME)\n\nPARKING AT HOMETOWN\n\n3) 3 WORK ORDERS (NOT RETURNING HOME FOR 3 DIFFERENT A/C)\n\nAIRLINE TICKET HOME-LOCATION OF THE FIRST W/O LOCATION/EXCESS BAGGAGE , OR\n\nAIRPORT LUGGAGE EXPENSES (IF ANY)TO THE FIRST CHRONOLOGICAL W/O\n\nAIRLINE TICKET HOME-LOCATION OF THE SECOND W/O LOCATION EXCESS BAGGAGE , OR\n\nAIRPORT LUGGAGE EXPENSES(IF ANY) TO THE SECOND CHRONOLOGICAL W/O\n\nAIRLINE TICKET HOME-LOCATION OF THE FIRST W/O LOCATION, EXCESS BAGGAGE , OR\n\nAIRPORT LUGGAGE EXPENSES (IF ANY) TO THE THIRD CHRONOLOGICAL W/O\n\nHOTEL AND PER DIEM TO BE CHARGED AS PER HOTEL BILL DATES\n\nTRANSPORTATION COSTS: CHARGED AS PER TRIP FORM DATES TO THE CORRESPONDING WORK ORDER.\n\nCAR FUEL EXPENSES (HOME-AIRPORT-HOME): SHARED OVER THE OTHER TWO W/O\n\nPARKING : SHARED OVER THE OTHER TWO W/O",
 "airport": "If you fly close to an airport of the support\n\nExample #1\n\nLocation of the support: LBG\n\nFlight from: ZRH-CDG\n\nYou took a taxi from CDG - LBG\n\nIn the field “Means of transportation” select TAXI\n\nItinerary details automatically generated by the program: ZRH-CDG-LBG (FLIGHT#/TAXI)\n\nExample #2\n\nLocation of the support: KJK\n\nFlight from ZRH-BRU\n\nYou rented a car BRU-KJK\n\nIn the field “Means of transportation” select DRIVING\n\nThe itinerary details automatically generated by the program: ZRH-BRU-KJK (FLIGHT#/DRIVING)",
 "travel": "CASE 1: FLYING TO / FROM THE LOCATION OF THE SUPPORT\n\n2.5 HRS before departure time + duration of flight (as mentioned on the airline ticket) + transit time between two flights (if any) + drive to location of support\n\nTransit time between two connecting flights cannot be counted for more than 3 hours\n\nIn case the airline ticket or transport/land expense is shared with another work order, travelling time is also to be shared over the two W/O (total travelling time over two)\n\nCASE 2: DRIVING TO THE LOCATION OF THE SUPPORT\n\nIn this case, the actual travelling time is charged from your home to the location of the support."
};
let X;

const rep = () => X.S.reports[X.S.rid];
const wd = d => new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' });
const dayHours = d => Object.values((d && d.t) || {}).reduce((s, t) => s + (t.h || []).reduce((a, b) => a + b, 0), 0);
const ymd = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const help = (t, s) => '<details class="xp-help"><summary>' + t + '</summary><div class="xpt-pre">' + X.esc(s) + '</div></details>';
const upd = async r => { await X.save(r); X.render(); };
const g = id => (X.$('#' + id) || {}).value || '';
const MODE = { 'Taxi': 'TAXI', 'Train': 'TRAIN', 'Bus': 'BUS', 'Boat': 'BOAT', 'Rental car': 'DRIVING', 'Rental car fuel': 'DRIVING' };

// ── Jours du Trip Form : créés automatiquement d'après « Date started » → « Date completed » ──
export const syncDays = r => {
  if (!r.dateStart || !r.dateEnd || r.dateEnd < r.dateStart) return;
  const t = r.trip = r.trip || {}; t.d = t.d || {};
  const end = new Date(r.dateEnd + 'T00:00:00');
  for (let d = new Date(r.dateStart + 'T00:00:00'), n = 0; d <= end && n < 400; d.setDate(d.getDate() + 1), n++) {
    const k = ymd(d); if (!t.d[k] && !(t.x && t.x[k])) t.d[k] = { m: 1 };
  }
};

// ── Onglet Trip Form ──────────────────────────────────────────────────────────
const taskForm = k => '<details class="xpt-new"><summary>+ Task</summary><div class="xp-r4"><div class="xp-f"><label for="tk_s_' + k + '">Task</label><select id="tk_s_' + k + '"><option value="">—</option><optgroup label="Frequent">' + FREQ.map(t => '<option>' + t + '</option>').join('') + '</optgroup><optgroup label="All tasks">' + ALL.map(t => '<option>' + t + '</option>').join('') + '</optgroup></select></div><div class="xp-f"><label for="tk_x_' + k + '">or another task</label><input id="tk_x_' + k + '"></div><div class="xp-f"><label for="tk_h_' + k + '">Hours (optional)</label><input id="tk_h_' + k + '" inputmode="decimal"></div><div class="xp-f"><label>&nbsp;</label><button class="xp-btn" data-a="tkAdd" data-day="' + k + '">Add task</button></div></div></details>';

const dayV = (k, d, ro) => {
  const da = ' data-day="' + k + '"';
  return '<div class="xpt-day"><div class="xp-h" style="margin-bottom:6px"><b>' + wd(k) + '</b><span class="xp-m">' + X.r2(dayHours(d)) + ' h' + (ro ? '' : ' · <button class="xp-lk" data-a="dayDel"' + da + '>Delete day</button>') + '</span></div>' +
    Object.entries(d.t || {}).map(([id, t]) => { const ta = da + ' data-id="' + id + '"'; return '<div class="xp-t" style="--c:90px 1fr ' + (ro ? '1px' : '230px') + '"><b>' + X.esc(t.n) + '</b><span>' +
      (t.h || []).map((h, i) => '<span class="xpt-h">' + (ro ? h + ' h' : '<button class="xp-lk" data-a="hrEdit"' + ta + ' data-i="' + i + '">' + h + ' h</button><button class="xp-lk" data-a="hrDel"' + ta + ' data-i="' + i + '" aria-label="Delete these hours">×</button>') + '</span>').join('') + '</span>' +
      (ro ? '<span></span>' : '<span class="xp-ac"><button class="xp-lk" data-a="hrAdd"' + ta + '>+ hours</button><button class="xp-lk" data-a="tkEdit"' + ta + '>Change task</button><button class="xp-lk" data-a="tkDel"' + ta + '>Delete</button></span>') + '</div>'; }).join('') +
    (ro ? '' : taskForm(k)) + '</div>';
};

export const tripV = (src, ro) => {
  const t = (src.trip && src.trip.d) || {}, days = Object.keys(t).sort(), tot = days.reduce((s, k) => s + dayHours(t[k]), 0);
  return '<section class="xp-c"><div class="xp-h"><h2 style="margin:0">Trip Form · ' + X.r2(tot) + ' h</h2>' + (ro ? '' : '<span><input id="tf_day" type="date" style="width:170px"> <button class="xp-btn" data-a="dayAdd">Add a day</button></span>') + '</div>' +
    (days.length ? days.map(k => dayV(k, t[k], ro)).join('') : '<div class="xp-m">Fill in “Date started” and “Date completed” above: the days of the Trip Form appear here automatically.</div>') +
    help('Travelling time rules', RULES.travel) + '</section>';
};

// ── Onglet Itinerary et per diem ──────────────────────────────────────────────
const overlap = (a, b) => a.s && b.s && a.s <= (b.e || b.s) && b.s <= (a.e || a.s);
const conflicts = (r, e) => !(e.pd || []).length ? [] : Object.values(X.S.reports).filter(o => o.id !== r.id && o.itin && o.itin.e && Object.values(o.itin.e).some(x => (x.pd || []).length && overlap(e, x))).map(X.title);
const chip = (txt, act, id, i, ro) => '<span class="xpt-h">' + X.esc(txt) + (ro ? '' : '<button class="xp-lk" data-a="' + act + '" data-id="' + id + '" data-i="' + i + '" aria-label="Remove">×</button>') + '</span>';

export const itinV = (src, ro) => {
  const es = Object.values((src.itin && src.itin.e) || {}).sort((a, b) => (a.s || '').localeCompare(b.s || '')), live = !ro;
  return '<section class="xp-c"><h2>Itinerary and per diem</h2>' + (ro ? '' : '<div class="xp-m" style="margin-bottom:10px">One line per place where you stayed the night (RON) or per travel period.</div><div class="xp-r4"><div class="xp-f"><label for="it_s">Date start</label><input id="it_s" type="date"></div><div class="xp-f"><label for="it_e">Date end</label><input id="it_e" type="date"></div><div class="xp-f" style="grid-column:span 2"><label for="it_d">Itinerary details</label><input id="it_d" placeholder="e.g. ZRH-CDG-LBG (FLIGHT#/TAXI)"></div><div class="xp-f"><label for="it_a">Per diem amount (optional)</label><input id="it_a" inputmode="decimal"></div><div class="xp-f"><label for="it_c">Currency</label><select id="it_c">' + X.curOpts('USD') + '</select></div><div class="xp-f"><label>&nbsp;</label><button class="xp-btn xp-pri" data-a="itAdd">Add</button></div><div class="xp-f"><label>&nbsp;</label><button class="xp-lk" data-a="itSuggest">Suggest from expenses</button></div></div>') +
    (es.length ? es.map(e => { const cf = live ? conflicts(src, e) : [];
      return '<div class="xpt-day"><div class="xp-h" style="margin-bottom:6px"><b>' + X.fmtD(e.s) + ' → ' + X.fmtD(e.e) + '</b><span>' + (cf.length ? '<span class="xp-chip2 warn">Per diem also in ' + X.esc(cf.join(', ')) + '</span> ' : '') + (ro ? '' : '<button class="xp-lk" data-a="itDel" data-id="' + e.id + '">Delete entry</button>') + '</span></div>' + (e.det ? '<div>' + X.esc(e.det) + '</div>' : '') +
        '<div class="xpt-row"><span class="xp-m">RON details</span>' + (e.ron || []).map((t, i) => chip(t, 'itRonDel', e.id, i, ro)).join('') + (ro ? '' : '<button class="xp-lk" data-a="itRonAdd" data-id="' + e.id + '">+ detail</button>') + '</div>' +
        '<div class="xpt-row"><span class="xp-m">Per diem</span>' + (e.pd || []).map((p, i) => chip(X.money(p.a, p.c), 'itPdDel', e.id, i, ro)).join('') + (ro ? '' : '<button class="xp-lk" data-a="itPdAdd" data-id="' + e.id + '">+ per diem</button>') + '</div></div>'; }).join('') : '<div class="xp-m">No itinerary entry yet.</div>') +
    help('If you fly close to an airport of the support', RULES.airport) + help('Combined work orders', RULES.combined) + '</section>';
};

export const checks = r => {
  const t = (r.trip && r.trip.d) || {}, days = Object.keys(t), withH = days.filter(k => dayHours(t[k]) > 0).length, n = Object.keys((r.itin && r.itin.e) || {}).length;
  const row = (ok, a, b) => '<div class="xp-ck"><span class="xp-chip2 ' + (ok ? 'ok' : 'warn') + '">' + (ok ? 'OK' : 'To check') + '</span> ' + b + '</div>';
  return row(days.length && withH === days.length, 0, 'Trip Form: ' + (days.length ? withH + ' of ' + days.length + ' day(s) with hours' : 'no day yet')) + row(n > 0, 0, 'Itinerary: ' + n + (n === 1 ? ' entry' : ' entries'));
};

// ── Actions ───────────────────────────────────────────────────────────────────
const CSS = '.xpt-day{border:1px solid #e3e7ec;border-radius:10px;padding:12px 14px;margin-bottom:10px;background:#fcfcff}.xpt-h{display:inline-flex;align-items:center;margin-right:6px;border:1px solid #d9dcf5;border-radius:99px;padding:0 4px 0 8px;background:#f1f0ff}.xpt-row{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin-top:6px}.xpt-pre{white-space:pre-wrap;margin-top:8px;font-size:13px}.xpt-new summary{margin:8px 0 0}';

export function init(x) {
  X = x; const A = X.A;
  if (!document.getElementById('xpt-css')) { const s = document.createElement('style'); s.id = 'xpt-css'; s.textContent = CSS; document.head.appendChild(s); }
  const task = d => { const r = rep(); return [r, ((r.trip || {}).d || {})[d.day], ((((r.trip || {}).d || {})[d.day] || {}).t || {})[d.id]]; };
  const ask = (m, v) => { const r = prompt(m, v == null ? '' : v); return r === null ? null : X.num(r); };
  A.dayAdd = async () => { const r = rep(), k = g('tf_day'); if (!k) return X.toast('Choose a date.', 1); r.trip = r.trip || {}; (r.trip.d = r.trip.d || {})[k] = r.trip.d[k] || { m: 1 }; if (r.trip.x) delete r.trip.x[k]; await upd(r); };
  A.dayDel = async d => { if (!confirm('Delete this day and its tasks?')) return; const r = rep(); delete r.trip.d[d.day]; (r.trip.x = r.trip.x || {})[d.day] = 1; await upd(r); };
  A.tkAdd = async d => {
    const r = rep(), v = g('tk_x_' + d.day).trim() || g('tk_s_' + d.day), h = X.num(g('tk_h_' + d.day));
    if (!v) return X.toast('Choose a task or type one.', 1);
    if (h > 24) return X.toast('Hours cannot exceed 24 for one task.', 1);
    ((r.trip.d[d.day].t = r.trip.d[d.day].t || {}))['k_' + Date.now()] = { n: v, h: h > 0 ? [X.r2(h)] : [] }; await upd(r);
  };
  A.tkEdit = async d => { const [r, , t] = task(d), v = prompt('Task number', t.n); if (v === null || !v.trim()) return; t.n = v.trim(); await upd(r); };
  A.tkDel = async d => { if (!confirm('Delete this task?')) return; const [r, day] = task(d); delete day.t[d.id]; await upd(r); };
  A.hrAdd = async d => { const [r, day, t] = task(d), n = ask('Hours to add (e.g. 2.5)'); if (n === null) return; if (!(n > 0 && n <= 24)) return X.toast('Enter hours between 0 and 24.', 1); if (dayHours(day) + n > 24) return X.toast('That day would exceed 24 hours.', 1); t.h = (t.h || []).concat(X.r2(n)); await upd(r); };
  A.hrEdit = async d => { const [r, day, t] = task(d), n = ask('Hours', t.h[+d.i]); if (n === null) return; if (!(n > 0 && n <= 24)) return X.toast('Enter hours between 0 and 24.', 1); t.h[+d.i] = X.r2(n); if (dayHours(day) > 24) { t.h[+d.i] = X.r2(n) ; return X.toast('That day would exceed 24 hours.', 1); } await upd(r); };
  A.hrDel = async d => { const [r, , t] = task(d); t.h.splice(+d.i, 1); await upd(r); };
  const ent = d => { const r = rep(); return [r, r.itin.e[d.id]]; };
  A.itAdd = async () => {
    const r = rep(), s = g('it_s'), e = g('it_e') || s, a = X.num(g('it_a'));
    if (!s) return X.toast('Choose the start date.', 1);
    if (e < s) return X.toast('The end date is before the start date.', 1);
    const id = 'i_' + Date.now(); r.itin = r.itin || {}; (r.itin.e = r.itin.e || {})[id] = { id, s, e, det: g('it_d').trim(), ron: [], pd: a > 0 ? [{ a: X.r2(a), c: g('it_c') || 'USD' }] : [] }; await upd(r);
  };
  A.itDel = async d => { if (!confirm('Delete this itinerary entry?')) return; const [r] = ent(d); delete r.itin.e[d.id]; await upd(r); };
  A.itRonAdd = async d => { const [r, e] = ent(d), v = prompt('RON location details'); if (v === null || !v.trim()) return; e.ron = (e.ron || []).concat(v.trim()); await upd(r); };
  A.itRonDel = async d => { const [r, e] = ent(d); e.ron.splice(+d.i, 1); await upd(r); };
  A.itPdAdd = async d => { const [r, e] = ent(d), n = ask('Per diem amount'); if (n === null) return; if (!(n > 0)) return X.toast('Enter an amount above 0.', 1); e.pd = (e.pd || []).concat({ a: X.r2(n), c: ((e.pd || []).slice(-1)[0] || {}).c || 'USD' }); await upd(r); };
  A.itPdDel = async d => { const [r, e] = ent(d); e.pd.splice(+d.i, 1); await upd(r); };
  A.itSuggest = () => {                                               // ZRH-CDG (vol) + CDG-LBG (taxi) → « ZRH-CDG-LBG (FLIGHT#/TAXI) »
    const ls = X.lines(rep()).filter(l => (l.type === 'flight' || (l.type === 'transport' && l.sub !== 'Private car fuel')) && l.fromTo);
    const path = [], modes = [];
    ls.forEach(l => { const p = String(l.fromTo).toUpperCase().split(/\s*-\s*/).filter(Boolean), m = l.type === 'flight' ? 'FLIGHT#' : (MODE[l.sub] || 'LAND'); if (!p.length) return; if (path.length && path[path.length - 1] === p[0]) path.push(...p.slice(1)); else path.push(...p); if (!modes.includes(m)) modes.push(m); });
    if (!path.length) return X.toast('Fill “From / To” (e.g. ZRH-CDG) on your flight and transport expenses first.', 1);
    X.$('#it_d').value = path.join('-') + ' (' + modes.join('/') + ')';
  };
}
