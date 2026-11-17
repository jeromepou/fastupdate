/* ═══════════════════════════════════════════════════════════════════════════════
   expenses-acct.js — console COMPTABLE (profil comptable : Thalia, ou un futur employé)
   Chargé à la demande par expenses.js :  const m = await import('./expenses-acct.js'); m.init(X);
   Onglets : To check (Check 3) · Statements (relevé mensuel par personne : Excel + PDF + mail) · Rates (taux du mois ; taux du jour au choix, par type de dépense) · People (qui est comptable) · Settings
   Firebase :
     expenseConfig/accountants/<uid> = { name, email, only, by, at }  — « only » : profil uniquement comptable (l'écran s'ouvre tout seul à la connexion)
     expenseConfig/rates/<AAAA-MM>/<DEVISE> = taux du mois vers USD (défaut) · …/<AAAA-MM>/_rule/<type> = 'day' (taux du jour pour ce type ; absent = taux du mois)
     expenseConfig/rates/<AAAA-MM>/_day/<DEVISE>/<JJ> = taux du jour · expenseConfig/initials/<uid> · expenseConfig/statementCc · expenseConfig/test
     expenseStatements/<uid>/<AAAA-MM> = { at, by, name, mode, gac, has, total, ck, n, to, files, paid, ack{state, note, at} } — suivi du relevé envoyé (ck = empreinte : repère « Changed since sent »)
   Calculs : expenses-stmt.js · Excel : expenses-xlsx.js · PDF des reçus : expenses-pdf.js · mails : expenses-mail.js
   ═══════════════════════════════════════════════════════════════════════════════ */
import * as ST from './expenses-stmt.js';
import { buildMime, inviteMail, addrs } from './expenses-mail.js';
import { queueHtml, loadQueue, logIt } from './expenses-review.js';

let X;
export const init = x => { X = x; };
const S = () => X.S, D = () => X.D, R = p => X.R(p), esc = s => X.esc(s), AC = () => S().ac;
const ON = new Set(['D', 'MD', 'AD', 'DP', 'DQ', 'DT', 'E', 'SB', 'A', 'DL']);          // codes du planning « en service » (famille on / eng)
const XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
const eu = ST.eu;
const ymNow = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0'); };
const ymPrev = ym => { const y = +ym.slice(0, 4), m = +ym.slice(5, 7); return m === 1 ? (y - 1) + '-12' : y + '-' + String(m - 1).padStart(2, '0'); };
const dl = (bytes, name, type) => { const u = URL.createObjectURL(new Blob([bytes], { type })), a = document.createElement('a'); a.href = u; a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(u), 60000); };
const when = at => new Date(at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
const photosOf = async (uid, rid, lid) => { const s = await D().get(R('expensePhotos/' + uid + '/' + rid + '/' + lid)); return s.exists() ? Object.values(s.val()) : []; };

// ── Chargement d'un mois : notes approuvées + payeurs/taux imposés + noms, adresses, jours de service ─────
export async function loadMonths() {
  const s = await X.safe(D().get(R('expenseApproved'))), ac = AC();
  ac.months = Object.keys(s.exists() ? s.val() : {}).sort().reverse();
  if (!ac.ym) ac.ym = ac.months[0] || ymPrev(ymNow());
  if (!ac.months.includes(ac.ym)) ac.months.unshift(ac.ym);
}
export async function loadMonth() {
  const ac = AC(), ym = ac.ym; ac.loading = true; X.render();
  const idx = await X.safe(D().get(R('expenseApproved/' + ym))), tree = idx.exists() ? idx.val() : {}, people = {};
  await Promise.all(Object.entries(tree).map(async ([uid, rs]) => {
    const items = [];
    await Promise.all(Object.keys(rs || {}).map(async rid => {
      const [a, v] = await Promise.all([X.safe(D().get(R('expenses/' + uid + '/' + rid))), X.safe(D().get(R('expenseReview/' + uid + '/' + rid + '/ver/v' + ((rs[rid] || {}).ver || 1))))]);
      if (!a.exists()) return; const r = a.val(); r.lines = r.lines || {}; const vv = v.exists() ? v.val() : {};
      items.push({ r, over: vv.pay || {}, fx: vv.fx || {} });
    }));
    const g = k => X.safe(D().get(R('team/' + uid + '/' + k))).then(x => x.exists() ? x.val() : '');
    const [name, email, gm, stm, sd] = await Promise.all([g('name'), g('email'), g('gmailConnectedEmail'), X.safe(D().get(R('expenseStatements/' + uid + '/' + ym))), X.safe(D().get(R('schedule/d/' + ym + '/' + uid)))]);
    let duty = null;
    if (!sd.err) { const st = sd.exists() ? sd.val() : {}; duty = {}; for (let d = 1; d <= ST.daysIn(ym); d++) { const e = st[String(d).padStart(2, '0')]; duty[d] = !(e && e.s) || ON.has(e.s); } }
    people[uid] = { uid, name: name || uid, email: email || gm || '', items: items.sort((x, y) => (x.r.submittedAt || 0) - (y.r.submittedAt || 0)), stm: stm.exists() ? stm.val() : null, duty };
  }));
  ac.people = people; ac.sel = ac.sel && people[ac.sel] ? ac.sel : null; ac.loading = false; X.render();
}
const ratesOf = () => ((S().cfg.rates || {})[AC().ym]) || {};
const allItems = () => Object.values(AC().people || {}).flatMap(p => p.items);
const dayRate = (cur, date) => +((((ratesOf()._day || {})[cur]) || {})[ST.dayKey(date)]) || 0;
const dLab = date => X.fmtD(date).slice(0, 6);                                       // « 28 Mar »
const catLab = c => ST.HEAD[c] || c;
const stOf = uid => { const p = AC().people[uid]; return ST.buildStatement({ person: { id: uid, name: p.name, ini: (S().cfg.initials || {})[uid] }, ym: AC().ym, items: p.items, rates: ratesOf(), duty: p.duty }); };

// ── Vues ──────────────────────────────────────────────────────────────────────
const TABS = [['check', 'To check'], ['stm', 'Statements'], ['rates', 'Rates'], ['people', 'People'], ['set', 'Settings']];
const monthSel = () => '<select id="ac_ym" data-ch="acMonth">' + (AC().months || []).map(m => '<option value="' + m + '"' + (m === AC().ym ? ' selected' : '') + '>' + ST.monLabel(m) + '</option>').join('') + '</select>';
const statusChip = (p, st) => {
  const s = p.stm; if (!s) return '<span class="xp-chip2 warn">Not sent</span>';
  const chg = st && (s.ck ? ST.fingerprint(st) !== s.ck : s.total != null && Math.abs(st.payable.all - s.total) > 0.005) ? ' <span class="xp-chip2 warn" title="The amounts changed after this statement was ' + (s.mode === 'draft' ? 'saved as a draft' : 'sent') + ' (a rate or a report changed). Send it again if needed.">Changed since sent</span>' : '';
  const a = s.ack && s.ack.state === 'ok' ? ' <span class="xp-chip2 ok">Confirmed</span>' : s.ack && s.ack.state === 'query' ? ' <span class="xp-chip2 bad" title="' + esc(s.ack.note || '') + '">Question</span>' : '';
  return '<span class="xp-chip2 ' + (s.mode === 'draft' ? 'warn' : 'ok') + '">' + (s.mode === 'draft' ? 'Draft in Gmail' : 'Sent ' + when(s.at)) + '</span>' + a + (s.paid ? ' <span class="xp-chip2 ok">Paid</span>' : '') + chg;
};
const previewHtml = (st, payer) => {
  const sh = ST.sheet(st, payer, 'all'), used = sh.cols.filter(k => sh.colTotals[k] > 0);
  if (!sh.rows.some(r => r.total > 0)) return '<div class="xp-m" style="margin:8px 0">No ' + ST.PAYER_NAME[payer] + ' expense this month.</div>';
  const mix = new Set(sh.mixed.map(m => m.ri + '|' + m.k)), fmt = n => n ? String(n) : '';
  const body = sh.rows.filter(r => r.total > 0 || r.duty === 'ON').map((r, i) => { const ri = sh.rows.indexOf(r); return '<tr><td>' + (r.day || '') + '</td><td>' + esc(r.duty || '') + '</td><td>' + esc(r.ref || '') + '</td><td class="l">' + esc((r.from || []).join(' / ')) + '</td>' + used.map(k => '<td' + (mix.has(ri + '|' + k) ? ' class="mx"' : '') + '>' + fmt((r.cells[k] || {}).v) + '</td>').join('') + '<td><b>' + fmt(r.total) + '</b></td></tr>'; }).join('');
  return '<div class="xp-sc"><table class="xp-tb"><thead><tr><th>Day</th><th>Duty</th><th>Work order</th><th class="l">From / To · RON</th>' + used.map(k => '<th>' + esc(ST.HEAD[k]) + '</th>').join('') + '<th>$ Total</th></tr></thead><tbody>' + body + '</tbody><tfoot><tr><td></td><td>' + sh.dutyDays + '</td><td></td><td class="l">Total</td>' + used.map(k => '<td>' + sh.colTotals[k] + '</td>').join('') + '<td><b>' + sh.total + '</b></td></tr></tfoot></table></div>';
};
const repsHtml = p => '<h3>Reports in this statement · ' + p.items.length + '</h3>' + p.items.map(({ r }) => '<div class="xp-t" style="--c:1.3fr 1.4fr 150px 150px"><b>' + esc(X.title(r)) + '</b><span class="xp-m">' + esc([r.model, r.sn, r.loc].filter(Boolean).join(' · ')) + '</span><span>v' + (r.ver || 1) + ' · ' + X.lines(r).length + ' expense(s)</span><span class="xp-ac"><button class="xp-lk" data-a="acOpen" data-u="' + esc(p.uid) + '" data-id="' + esc(r.id) + '">Open · reopen</button></span></div>').join('');
const SRC = { month: 'Month rate', day: 'Rate of the day', own: 'Set on the expense' };
const usedHtml = st => !st.used.length ? '' : '<details class="xp-help"><summary>Exchange rates used · ' + st.used.length + '</summary><div style="overflow:auto;margin:6px 0"><table class="xp-tb"><thead><tr><th class="l">Currency</th><th>Rate → USD</th><th class="l">Basis</th><th class="l">Applied to</th></tr></thead><tbody>' +
  st.used.map(u => '<tr><td class="l">' + esc(u.cur) + '</td><td>' + esc(String(u.k)) + '</td><td class="l">' + SRC[u.src] + (u.date ? ' · ' + esc(dLab(u.date)) : '') + '</td><td class="l">' + esc(u.cats.map(catLab).join(', ')) + ' · ' + u.n + ' expense(s)</td></tr>').join('') + '</tbody></table></div></details>';
const detailHtml = uid => {
  const p = AC().people[uid], st = stOf(uid), t = st.tot, hasPart = st.n.has > 0, e = S().cfg.initials || {};
  const line = (k, lab) => { const x = t[k]; return '<tr><td>' + lab + '</td><td>' + eu(x.all) + '</td><td>' + eu(x.magna) + '</td><td>' + eu(x.amex) + '</td><td>' + eu(x.priv) + '</td><td>' + eu(x.has) + '</td><td><b>' + eu(x.payable) + '</b></td></tr>'; };
  return '<section class="xp-c"><div class="xp-h"><h2 style="margin:0">' + esc(p.name) + ' · ' + esc(st.label) + '</h2><span><label class="xp-m" for="ac_ini">Initials</label> <input id="ac_ini" style="width:70px;display:inline-block" maxlength="4" value="' + esc(st.initials) + '" data-ch="acIni" data-u="' + esc(uid) + '"></span></div>' +
    (st.missing.length ? '<div class="xp-ban">Missing exchange rate: ' + esc(st.missing.map(ST.missLabel).join(', ')) + ' — set it in the Rates tab (or on the expense, check 3 screen) before sending.</div>' : '') +
    '<table class="xp-tb xp-sm"><thead><tr><th></th><th>Total</th><th>Magna</th><th>Amex</th><th>Private</th><th>Paid by HAS</th><th>Cash payable</th></tr></thead><tbody>' + line('gac', 'GAC') + (hasPart ? line('has', 'HAS PAYS') : '') + '</tbody></table>' +
    usedHtml(st) + '<h3>GAC — Cash report</h3>' + previewHtml(st, 'gac') + (hasPart ? '<h3>HAS PAYS — Cash report</h3>' + previewHtml(st, 'has') : '') + repsHtml(p) +
    '<div class="xp-ac" style="justify-content:flex-start;gap:8px;flex-wrap:wrap;margin-top:12px"><button class="xp-btn" data-a="acFile" data-u="' + esc(uid) + '" data-p="gac" data-k="xlsx">Excel · GAC</button><button class="xp-btn" data-a="acFile" data-u="' + esc(uid) + '" data-p="gac" data-k="pdf">Receipts PDF · GAC</button>' +
    (hasPart ? '<button class="xp-btn" data-a="acFile" data-u="' + esc(uid) + '" data-p="has" data-k="xlsx">Excel · HAS PAYS</button><button class="xp-btn" data-a="acFile" data-u="' + esc(uid) + '" data-p="has" data-k="pdf">Receipts PDF · HAS PAYS</button>' : '') +
    '<button class="xp-btn xp-pri" data-a="acSend" data-u="' + esc(uid) + '">Send the statement…</button>' + (p.stm ? '<button class="xp-lk" data-a="acPaid" data-u="' + esc(uid) + '">' + (p.stm.paid ? 'Mark as not paid' : 'Mark as paid') + '</button>' + (p.stm.mode === 'draft' ? '<button class="xp-lk" data-a="acSentMark" data-u="' + esc(uid) + '">Mark as sent</button>' : '') : '') + '</div></section>';
};
const stmV = () => {
  const ac = AC(); if (!ac.ym) return '<div class="xp-m">Loading…</div>'; const ps = Object.values(ac.people || {}).sort((a, b) => a.name.localeCompare(b.name));
  const sty = '--c:1.2fr 70px 110px 110px 110px 1.2fr 130px';
  return '<section class="xp-c"><div class="xp-h"><h2 style="margin:0">Monthly statements</h2><span>' + monthSel() + ' <button class="xp-btn" data-a="acSendAll">Send all not sent…</button></span></div>' +
    (ac.loading ? '<div class="xp-m">Loading…</div>' : ps.length ? '<div class="xp-t hd" style="' + sty + '"><span>Person</span><span>Reports</span><span>GAC payable</span><span>HAS payable</span><span>Total</span><span>Status</span><span></span></div>' +
      ps.map(p => { const st = stOf(p.uid); return '<div class="xp-t" style="' + sty + '"><b>' + esc(p.name) + '</b><span>' + p.items.length + '</span><span>' + eu(st.payable.gac) + '</span><span>' + (st.n.has ? eu(st.payable.has) : '—') + '</span><b>' + eu(st.payable.all) + '</b><span>' + statusChip(p, st) + (st.missing.length ? ' <span class="xp-chip2 bad">rate ' + esc(st.missing.map(ST.missLabel).join(', ')) + '</span>' : '') + '</span><span class="xp-ac"><button class="xp-btn' + (ac.sel === p.uid ? ' xp-pri' : '') + '" data-a="acSel" data-u="' + esc(p.uid) + '">' + (ac.sel === p.uid ? 'Close' : 'Open') + '</button></span></div>'; }).join('') : '<div class="xp-m">No approved report for ' + esc(ST.monLabel(ac.ym)) + ' yet. Reports appear here once check 3 is done.</div>') + '</section>' + (ac.sel && ac.people[ac.sel] ? detailHtml(ac.sel) : '');
};
const dayMissHtml = nd => { const m = nd.days.filter(x => !dayRate(x.cur, x.date)); return m.length ? '<div class="xp-ban">No rate of the day yet for ' + m.length + ' date(s): ' + esc(m.slice(0, 6).map(x => x.cur + ' ' + dLab(x.date)).join(', ') + (m.length > 6 ? '…' : '')) + '</div>' : ''; };
const ratesV = () => {
  const ac = AC(); if (!ac.ym || ac.loading) return '<div class="xp-m">Loading…</div>';
  const rt = ratesOf(), nd = ST.needs(allItems(), ac.ym, rt), cur = new Set(Object.keys(rt).filter(k => k[0] !== '_')), ml = esc(ST.monLabel(ac.ym));
  nd.curs.forEach(c => cur.add(c)); (ac.extraCur || []).forEach(c => cur.add(c));       // toutes les devises du mois (même celles couvertes par un taux imposé ou par le taux du jour) ; l'alerte ne vise que celles dont le taux du mois sert vraiment
  const miss = nd.month.filter(x => !(+rt[x.cur] > 0)).map(x => x.cur), sent = Object.values(ac.people || {}).filter(p => p.stm).length;
  return '<section class="xp-c"><div class="xp-h"><h2 style="margin:0">Exchange rates to USD</h2><span>' + monthSel() + ' <button class="xp-btn" data-a="acRatesCopy">Copy from ' + esc(ST.monLabel(ymPrev(ac.ym))) + '</button></span></div>' +
    '<div class="xp-m" style="margin-bottom:10px">Every expense is converted to USD and rounded up to the next dollar. By default the <b>month rate</b> is used (usually the rate of the last day of the month). For some types of expense (a hotel, a taxi…) you can choose the <b>rate of the day</b> instead — step 2. For one exceptional expense, use the “FX rate” box on the check 3 screen.</div>' +
    (sent ? '<div class="xp-m" style="margin-bottom:10px">' + sent + ' statement(s) of ' + ml + ' were already sent. They keep the amounts that were sent: if you change a rate now, send them again (a “Changed since sent” label reminds you).</div>' : '') +
    '<h3>1 · Month rates</h3>' + (miss.length ? '<div class="xp-ban">No month rate yet for: ' + esc(miss.join(', ')) + '</div>' : '') +
    (cur.size ? '<div class="xp-r4">' + [...cur].sort().map(c => '<div class="xp-f"><label>' + esc(c) + ' → USD</label><input inputmode="decimal" data-ch="acRate" data-c="' + esc(c) + '" value="' + esc(rt[c] || '') + '" placeholder="e.g. 1.26"></div>').join('') + '</div>' : '<div class="xp-m">No foreign-currency expense in ' + ml + '.</div>') +
    '<div class="xp-row" style="margin-top:6px"><input id="ac_cur" placeholder="Add a currency (e.g. CHF)" maxlength="3" style="max-width:220px"><button class="xp-btn" data-a="acRateAdd">Add</button></div></section>' +
    '<section class="xp-c"><h2>2 · Which rate for which type of expense?</h2>' + (nd.cats.length ? '<div class="xp-m" style="margin-bottom:8px">Only the types with a foreign-currency expense in ' + ml + ' are listed. “Rate of the day” = the rate of the date of the expense (a hotel: its check-out date); you type those rates in step 3.</div>' +
      nd.cats.map(c => '<div class="xp-t" style="--c:1.4fr 1fr 250px"><b>' + esc(catLab(c.cat)) + '</b><span class="xp-m">' + c.n + ' expense(s)</span><span class="xp-chips2">' + [['month', 'Month rate'], ['day', 'Rate of the day']].map(([v, lab]) => '<button type="button" class="xp-chip sm' + ((ST.isDayRule(rt, c.cat) ? 'day' : 'month') === v ? ' on' : '') + '" data-a="acRule" data-k="' + esc(c.cat) + '" data-v="' + v + '">' + lab + '</button>').join('') + '</span></div>').join('') : '<div class="xp-m">No foreign-currency expense in ' + ml + '.</div>') + '</section>' +
    (nd.days.length ? '<section class="xp-c"><h2>3 · Rates of the day</h2><div id="ac_daymiss">' + dayMissHtml(nd) + '</div><div class="xp-t hd" style="--c:100px 70px 1fr 170px"><span>Date</span><span>Currency</span><span>Used for</span><span>Rate → USD</span></div>' +
      nd.days.map(x => '<div class="xp-t" style="--c:100px 70px 1fr 170px"><span>' + esc(dLab(x.date)) + '</span><b>' + esc(x.cur) + '</b><span class="xp-m">' + esc(x.cats.map(catLab).join(', ')) + ' · ' + x.n + ' expense(s)</span><span><input inputmode="decimal" data-ch="acDayRate" data-c="' + esc(x.cur) + '" data-d="' + esc(x.date) + '" value="' + esc(dayRate(x.cur, x.date) || '') + '" placeholder="rate of the day"></span></div>').join('') + '</section>' : '');
};
const peopleV = () => {
  const ac = AC(), accs = Object.entries(S().cfg.accountants || {}), pub = ac.pub || {}, picks = Object.entries(pub).filter(([id]) => !(S().cfg.accountants || {})[id]).sort((a, b) => String(a[1].name).localeCompare(String(b[1].name)));
  return '<section class="xp-c"><h2>People with accounting access · ' + accs.length + '</h2><div class="xp-m" style="margin-bottom:10px">Accounting access can be added to any profile, on top of its other roles (engineer, Ops…). A person who is only an accountant gets this screen automatically when signing in.</div>' +
    (accs.length ? accs.map(([id, a]) => '<div class="xp-t" style="--c:1.2fr 1.4fr 170px 190px"><b>' + esc(a.name || id) + '</b><span>' + esc(a.email || (pub[id] || {}).email || '—') + '</span><label class="xp-ckb"><input type="checkbox" data-ch="acOnly" data-u="' + esc(id) + '"' + (a.only ? ' checked' : '') + '> Accounting only</label><span class="xp-ac"><button class="xp-lk" data-a="acInvite" data-u="' + esc(id) + '">Invitation mail</button><button class="xp-lk" data-a="acRemove" data-u="' + esc(id) + '">Remove</button></span></div>').join('') : '<div class="xp-m">Nobody yet.</div>') + '</section>' +
    '<section class="xp-c"><h2>Add a person</h2><div class="xp-r3"><div class="xp-f"><label for="ac_pick">Profile</label><select id="ac_pick"><option value="">— choose —</option>' + picks.map(([id, p]) => '<option value="' + esc(id) + '">' + esc(p.name || id) + (p.role ? ' (' + esc(p.role) + ')' : '') + '</option>').join('') + '</select></div><div class="xp-f"><label for="ac_mail">E-mail (for the invitation)</label><input id="ac_mail" type="email" placeholder="name@headstartaviation.com"></div><div class="xp-f"><label>&nbsp;</label><label class="xp-ckb"><input id="ac_only" type="checkbox"> Accounting only</label></div></div>' +
    '<button class="xp-btn xp-pri" data-a="acAdd">Add accounting access</button>' + (picks.length ? '' : '<div class="xp-m" style="margin-top:8px">No other profile found. A new person first needs a profile: create it in Manage Team (name, e-mail, PIN), then add it here.</div>') +
    '<details class="xp-help"><summary>How does Thalia (or a new employee) sign in?</summary>1) In Manage Team, create her profile (name, e-mail and PIN) like any other person. 2) Add her here — she keeps this access on top of any other role. 3) Press “Invitation mail”: she receives the link and the steps. 4) At sign-in, her Expenses screen opens by itself on the Accounting console.</details></section>';
};
const setV = () => {
  const c = S().cfg, cc = Array.isArray(c.statementCc) ? c.statementCc : Object.values(c.statementCc || {}), canTest = X.isAdmin() || X.uid() === X.OWNER_ID;
  return '<section class="xp-c"><h2>Statement e-mails</h2><div class="xp-f"><label for="ac_cc">Copy to (separate addresses with commas)</label><input id="ac_cc" value="' + esc(cc.join(', ')) + '" data-ch="acCc" placeholder="accounting@…"></div></section>' +
    '<section class="xp-c"><h2>Private car fuel</h2><div class="xp-m">Value per km: ' + esc(S().rate.value.toFixed(2)) + ' ' + esc(S().rate.currency) + ' — change it with “Rate per km” in the top bar (Ops).</div></section>' +
    (canTest ? '<section class="xp-c"><h2>Test mode</h2><label class="xp-ckb"><input type="checkbox" data-ch="acTest"' + (c.test === true ? ' checked' : '') + '> The owner profile can do checks 1, 2 and 3 alone and check its own reports (to try the whole flow). Switch it off before the team uses Expenses.</label></section>' : '');
};
const checkV = () => queueHtml(true) + '<div style="text-align:right"><button class="xp-lk" data-a="rvAll">See every report in progress</button></div>';

const acV = () => {
  const ac = AC(); if (!ac) return '<div class="xp-m">Loading…</div>';
  return '<div class="xp-h"><div><h1>Accounting</h1><div class="xp-m">Final check of expense reports, monthly statements and exchange rates</div></div></div><nav class="xp-tabs">' + TABS.map(([k, v]) => '<button class="xp-tab' + (ac.tab === k ? ' on' : '') + '" data-a="acTab" data-v="' + k + '">' + v + (k === 'check' ? ' · ' + ((S().queue || []).filter(q => q.c === 2).length) : '') + '</button>').join('') + '</nav>' +
    ({ check: checkV, stm: stmV, rates: ratesV, people: peopleV, set: setV })[ac.tab]();
};

// ── Actions ───────────────────────────────────────────────────────────────────
export const A = {};
A.acTab = async d => {
  const ac = AC();
  if ((d.v === 'stm' || d.v === 'rates') && !ac.ym) await loadMonths();                      // le mois doit être connu avant de dessiner l'onglet
  ac.tab = d.v; X.render();
  if (d.v === 'check') { await loadQueue(); X.render(); }
  if (d.v === 'stm' || d.v === 'rates') { await loadMonths(); await loadMonth(); }
  if (d.v === 'people' && !ac.pub) { const s = await X.safe(D().get(R('teamPublic'))); ac.pub = s.exists() ? s.val() : {}; X.render(); }
};
A.rvAll = () => { S().acBack = 'ac'; S().view = 'q'; X.render(); };
A.acOpen = async d => { S().acBack = 'ac'; S().rvBackHook = loadMonth; await X.A.rvOpen(d); };       // ouvre un rapport (même déjà approuvé) depuis le relevé : taux, payeur, ou « Reopen »
A.acMonth = async (d, el) => { AC().ym = el.value; AC().sel = null; await loadMonth(); };
A.acSel = d => { const ac = AC(); ac.sel = ac.sel === d.u ? null : d.u; X.render(); };
A.acIni = async (d, el) => { const v = el.value.trim().toUpperCase().slice(0, 4); S().cfg.initials = S().cfg.initials || {}; if (v) { await D().set(R('expenseConfig/initials/' + d.u), v); S().cfg.initials[d.u] = v; } else { await D().remove(R('expenseConfig/initials/' + d.u)); delete S().cfg.initials[d.u]; } X.render(); };
A.acRate = async (d, el) => {
  if (String(d.c)[0] === '_') return;
  const ym = AC().ym, n = parseFloat(String(el.value).replace(',', '.')), cfg = S().cfg; cfg.rates = cfg.rates || {};
  if (el.value.trim() === '') { await D().remove(R('expenseConfig/rates/' + ym + '/' + d.c)); if (cfg.rates[ym]) delete cfg.rates[ym][d.c]; }
  else if (n > 0 && n < 100000) { await D().set(R('expenseConfig/rates/' + ym + '/' + d.c), n); (cfg.rates[ym] = cfg.rates[ym] || {})[d.c] = n; X.toast(d.c + ' rate saved for ' + ST.monLabel(ym) + '.'); }
  else { X.toast('The rate must be a number above 0.', 1); el.value = (cfg.rates[ym] || {})[d.c] || ''; return; }
  X.render();
};
A.acRule = async d => {                                                 // type de dépense : taux du mois (défaut) ou taux du jour — pour le mois affiché
  const ym = AC().ym, cfg = S().cfg; cfg.rates = cfg.rates || {}; const m = (cfg.rates[ym] = cfg.rates[ym] || {});
  if (d.v === 'day') { await D().set(R('expenseConfig/rates/' + ym + '/_rule/' + d.k), 'day'); (m._rule = m._rule || {})[d.k] = 'day'; }
  else { await D().remove(R('expenseConfig/rates/' + ym + '/_rule/' + d.k)); if (m._rule) { delete m._rule[d.k]; if (!Object.keys(m._rule).length) delete m._rule; } }
  X.toast(catLab(d.k) + ': ' + (d.v === 'day' ? 'rate of the day' : 'month rate') + ' for ' + ST.monLabel(ym) + '.'); X.render();
};
A.acDayRate = async (d, el) => {
  const ym = AC().ym, n = parseFloat(String(el.value).replace(',', '.')), dd = ST.dayKey(d.d), cfg = S().cfg, path = 'expenseConfig/rates/' + ym + '/_day/' + d.c + '/' + dd;
  cfg.rates = cfg.rates || {}; const m = (cfg.rates[ym] = cfg.rates[ym] || {});
  if (el.value.trim() === '') { await D().remove(R(path)); const x = (m._day || {})[d.c]; if (x) { delete x[dd]; if (!Object.keys(x).length) delete m._day[d.c]; if (!Object.keys(m._day).length) delete m._day; } }
  else if (n > 0 && n < 100000) { await D().set(R(path), n); ((m._day = m._day || {})[d.c] = m._day[d.c] || {})[dd] = n; X.toast(d.c + ' rate of ' + dLab(d.d) + ' saved.'); }
  else { X.toast('The rate must be a number above 0.', 1); el.value = (((m._day || {})[d.c]) || {})[dd] || ''; return; }
  const box = X.$('#ac_daymiss'); if (box) box.innerHTML = dayMissHtml(ST.needs(allItems(), ym, ratesOf()));     // sans tout redessiner : le curseur reste dans le tableau
};
A.acRateAdd = () => { const v = (X.$('#ac_cur').value || '').trim().toUpperCase(); if (!/^[A-Z]{3}$/.test(v) || v === 'USD') return X.toast('Type a 3-letter currency code (not USD).', 1); (AC().extraCur = AC().extraCur || []).push(v); X.render(); };
A.acRatesCopy = async () => {                                           // recopie les taux du mois précédent et ses choix « taux du jour » (pas les taux du jour eux-mêmes)
  const ac = AC(), prev = (S().cfg.rates || {})[ymPrev(ac.ym)], nums = o => Object.fromEntries(Object.entries(o || {}).filter(([k, v]) => k[0] !== '_' && +v > 0));
  if (!prev || !Object.keys(nums(prev)).length) return X.toast('No rate found for ' + ST.monLabel(ymPrev(ac.ym)) + '.', 1);
  const cur = ratesOf(), merged = Object.assign({}, nums(prev), cur); if (!merged._rule && prev._rule) merged._rule = Object.assign({}, prev._rule);
  await D().set(R('expenseConfig/rates/' + ac.ym), merged); S().cfg.rates = S().cfg.rates || {}; S().cfg.rates[ac.ym] = merged; X.toast('Rates copied — check them and adjust.'); X.render();
};
A.acCc = async (d, el) => { const l = addrs(el.value); await D().set(R('expenseConfig/statementCc'), l.length ? l : null); S().cfg.statementCc = l; el.value = l.join(', '); X.toast('Copy list saved.'); };
A.acTest = async (d, el) => { await D().set(R('expenseConfig/test'), el.checked); S().cfg.test = el.checked; X.toast(el.checked ? 'Test mode ON — only for the owner profile.' : 'Test mode OFF.'); };
A.acAdd = async () => {
  const id = X.$('#ac_pick').value, mail = (X.$('#ac_mail').value || '').trim(), only = X.$('#ac_only').checked, p = (AC().pub || {})[id];
  if (!id) return X.toast('Choose a profile.', 1); if (mail && !addrs(mail).length) return X.toast('This e-mail address is not valid.', 1);
  const o = { name: (p && p.name) || id, only: !!only, by: X.uid(), at: Date.now() }; if (mail) o.email = mail;
  await D().set(R('expenseConfig/accountants/' + id), o); (S().cfg.accountants = S().cfg.accountants || {})[id] = o; S().acct = !!S().cfg.accountants[X.uid()]; X.toast(o.name + ' now has accounting access.'); X.render();
};
A.acRemove = async d => { const a = (S().cfg.accountants || {})[d.u]; if (!confirm('Remove accounting access for ' + ((a && a.name) || d.u) + '?')) return; await D().remove(R('expenseConfig/accountants/' + d.u)); delete S().cfg.accountants[d.u]; S().acct = !!S().cfg.accountants[X.uid()]; X.toast('Access removed.'); X.render(); };
A.acOnly = async (d, el) => { await D().update(R('expenseConfig/accountants/' + d.u), { only: !!el.checked }); S().cfg.accountants[d.u].only = !!el.checked; X.toast(el.checked ? 'Accounting only: the screen opens at sign-in.' : 'Normal profile with accounting access.'); };
A.acInvite = async d => {
  const a = (S().cfg.accountants || {})[d.u] || {}; let em = a.email; if (!em) { const g = await X.safe(D().get(R('team/' + d.u + '/email'))); em = g.exists() ? g.val() : ''; }
  if (!addrs(em).length) return X.toast('No e-mail address for this person: remove and add her again with an address.', 1);
  if (!D().sendMail) return X.toast('Sending e-mail is not available in this version.', 1);
  const m = inviteMail({ name: a.name }, location.href.split('#')[0].split('?')[0], { signature: D().signature && D().signature() });
  await D().sendMail([em], [], m.subject, m.html); X.toast('Invitation sent to ' + em + '.');
};

// ── Fichiers du relevé ────────────────────────────────────────────────────────
export async function makeFile(uid, payer, kind) {
  const st = stOf(uid), nm = ST.names(st)[payer], p = AC().people[uid];
  if (kind === 'xlsx') { const XL = await import('./expenses-xlsx.js'); return { name: nm.xlsx, type: XLSX, bytes: XL.workbook(st, payer) }; }
  const PDF = await import('./expenses-pdf.js');
  return { name: nm.pdf, type: 'application/pdf', bytes: await PDF.statement(st, payer, { name: p.name, by: X.me().name, title: nm.pdf.replace(/\.pdf$/, ''), getPhotos: (rid, lid) => photosOf(uid, rid, lid) }) };
}
A.acFile = async d => {
  if (stOf(d.u).missing.length) return X.toast('Set the missing exchange rate first (Rates tab).', 1);
  X.toast('Building the file…'); const f = await makeFile(d.u, d.p, d.k); dl(f.bytes, f.name, f.type); X.toast('Done: ' + f.name);
};
const sendOne = async (uid, o) => {                                       // o = { note, draft, to }
  const p = AC().people[uid], st = stOf(uid), to = addrs(o.to || p.email), cc = addrs(S().cfg.statementCc);
  if (st.missing.length) throw new Error(p.name + ': exchange rate missing for ' + st.missing.map(ST.missLabel).join(', ') + '.');
  if (!st.n.gac && !st.n.has) throw new Error(p.name + ': nothing to send.');
  const files = []; for (const [payer, n] of [['gac', st.n.gac], ['has', st.n.has]]) if (n) { files.push(await makeFile(uid, payer, 'xlsx')); files.push(await makeFile(uid, payer, 'pdf')); }
  const html = ST.mailBody(st, { note: o.note, signature: D().signature && D().signature() }), subject = ST.subject(st);
  if (!D().sendRaw) { files.forEach(f => dl(f.bytes, f.name, f.type)); return { fallback: true, subject, html, to, cc, files }; }
  const mb = files.reduce((s, f) => s + f.bytes.length, 0) / 1e6;                       // Gmail refuse un message de plus de 25 Mo (les pièces jointes grossissent d'un tiers une fois encodées)
  if (mb > 17) throw new Error(p.name + ': the files weigh ' + mb.toFixed(1) + ' MB — too big for one Gmail message (25 MB max). Download each file from the statement and send them yourself.');
  await D().sendRaw(buildMime({ to, cc, subject, html, attachments: files }), { draft: !!o.draft });
  const rec = { at: Date.now(), by: X.uid(), name: X.me().name, mode: o.draft ? 'draft' : 'sent', gac: st.payable.gac, has: st.payable.has, total: st.payable.all, ck: ST.fingerprint(st), n: st.n.gac + st.n.has, to: to.join(', '), files: files.map(f => f.name) };
  await D().set(R('expenseStatements/' + uid + '/' + AC().ym), rec); p.stm = rec;
  for (const { r } of p.items) await logIt(uid, r.id, { t: 'stmt', note: ST.monLabel(AC().ym) });
  return { ok: true, to };
};
const askSend = (title, p, many) => X.ask({ title, text: many ? 'One mail per person, with the Excel and PDF files attached (GAC, and HAS PAYS when there is one). Copies go to: ' + (addrs(S().cfg.statementCc).join(', ') || '—') + '.' : 'To: ' + (p.email || 'no address found') + ' · Copies to: ' + (addrs(S().cfg.statementCc).join(', ') || '—'), email: !many && !addrs(p.email).length, note: 'Short message added to the mail (optional)', choice: [['draft', 'Save as Gmail draft (I will send it myself)'], ['sent', 'Send now']], ok: 'Continue' });
A.acSend = async d => {
  const p = AC().people[d.u], a = await askSend('Send the ' + ST.monLabel(AC().ym) + ' statement to ' + p.name, p, false); if (!a) return;
  if (a.email) p.email = a.email;
  X.toast('Building the files and the mail…'); const r = await sendOne(d.u, { note: a.note, draft: a.choice !== 'sent', to: a.email || p.email });
  if (r.fallback) { await X.ask({ title: 'Files downloaded — send the mail yourself', text: 'This version of the app cannot attach files to an e-mail yet. The files are downloaded; copy the text below into your mail.', copy: 'To: ' + r.to.join(', ') + '\nCc: ' + r.cc.join(', ') + '\nSubject: ' + r.subject + '\n\n' + r.html.replace(/<br\s*\/?>/g, '\n').replace(/<\/p>/g, '\n\n').replace(/<[^>]+>/g, '').trim(), ok: 'Close', hideCancel: true }); return; }
  X.toast(a.choice === 'sent' ? 'Statement sent to ' + p.name + '.' : 'Draft saved in your Gmail for ' + p.name + '.'); X.render();
};
A.acSendAll = async () => {
  const ps = Object.values(AC().people || {}).filter(p => !p.stm && p.items.length); if (!ps.length) return X.toast('Everything has already been sent.', 1);
  const a = await askSend('Send ' + ps.length + ' statement(s) — ' + ST.monLabel(AC().ym), null, true); if (!a) return;
  let ok = 0; const bad = [];
  for (const p of ps) { try { X.toast('Sending ' + p.name + '… (' + (ok + bad.length + 1) + '/' + ps.length + ')'); const r = await sendOne(p.uid, { note: a.note, draft: a.choice !== 'sent' }); if (r.fallback) { bad.push(p.name + ': this version cannot attach files'); break; } ok++; } catch (e) { bad.push(String((e && e.message) || e)); } }
  X.render(); X.toast(ok + ' statement(s) ' + (a.choice === 'sent' ? 'sent' : 'saved as drafts') + (bad.length ? ' · ' + bad.length + ' problem(s): ' + bad.join(' | ') : '.'), bad.length ? 1 : 0);
};
A.acPaid = async d => { const p = AC().people[d.u]; const paid = p.stm.paid ? null : { at: Date.now(), by: X.uid() }; await D().update(R('expenseStatements/' + d.u + '/' + AC().ym), { paid }); p.stm.paid = paid; X.render(); };
A.acSentMark = async d => { const p = AC().people[d.u]; await D().update(R('expenseStatements/' + d.u + '/' + AC().ym), { mode: 'sent', at: Date.now() }); p.stm.mode = 'sent'; X.render(); };

// ── Ouverture de la console ───────────────────────────────────────────────────
export async function openConsole() {
  const s = S(); s.ac = { tab: 'check', ym: null, months: [], people: {}, sel: null, loading: false, pub: null, extraCur: [] }; s.view = 'ac'; s.acBack = 'ac'; X.render();
  await loadQueue().catch(() => { }); X.render();
}
export const views = { ac: acV };
