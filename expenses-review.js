/* ═══════════════════════════════════════════════════════════════════════════════
   expenses-review.js — contrôle des notes de frais (Check 1 et 2 : Ops · Check 3 : comptabilité)
   Chargé à la demande par expenses.js :  const m = await import('./expenses-review.js'); m.init(X);
   Firebase (voir R3) :
     expenseQueue/<uid>/<rid>                  = { ver, at, name, title, sub, n, np, tot, c, c1, c1n, c2, c2n } — file d'attente (c = contrôles faits)
     expenseReview/<uid>/<rid>/ver/vN/c1|c2|c3 = { by, name, at, note }      — écrits UNE fois, dans l'ordre, par 3 personnes différentes (règles)
     expenseReview/<uid>/<rid>/ver/vN/ret      = { by, name, at, note, lines{ligne:remarque} } — note de frais renvoyée à l'engineer
     expenseReview/<uid>/<rid>/ver/vN/pay|fx   = payeur GAC/HAS par ligne · taux de change imposé par ligne (comptable)
     expenseReview/<uid>/<rid>/lock            = { by, name, at, ver } — posé au Check 3 : plus personne ne modifie la note
     expenseReview/<uid>/<rid>/log/<id>        = journal (envoyé, rappelé, contrôles, retour…)
     expenseApproved/<AAAA-MM>/<uid>/<rid>     = index lu par la comptable pour fabriquer le relevé du mois
   ═══════════════════════════════════════════════════════════════════════════════ */
import { canDo, flat } from './expenses-badge.js';
import * as ST from './expenses-stmt.js';
import { returnMail } from './expenses-mail.js';

let X;
export const init = x => { X = x; };
const S = () => X.S, D = () => X.D, R = p => X.R(p), esc = s => X.esc(s);
const who = () => ({ me: X.uid(), ops: X.isOps(), acct: X.isAcct(), test: X.testOn() });
const when = at => new Date(at).toLocaleString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
const day = at => new Date(at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
const logKey = () => 'e' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
export const logIt = async (uid, rid, o) => { try { await D().set(R('expenseReview/' + uid + '/' + rid + '/log/' + logKey()), Object.assign({ at: Date.now(), by: X.uid(), name: X.me().name }, o)); } catch (e) { console.warn('log', e); } };

// ── File d'attente ────────────────────────────────────────────────────────────
export async function loadQueue() {
  const s = await X.safe(D().get(R('expenseQueue'))); if (s.err) throw s.err;
  S().queue = flat(s.exists() ? s.val() : {}).sort((a, b) => (a.at || 0) - (b.at || 0));
}
const chip = (txt, cls, tip) => '<span class="xp-chip2 ' + (cls || '') + '"' + (tip ? ' title="' + esc(tip) + '"' : '') + '>' + esc(txt) + '</span>';
const prog = q => [1, 2, 3].map(n => n <= (q.c || 0) ? chip('✓' + n, 'ok', n === 1 ? q.c1n : n === 2 ? q.c2n : '') : n === (q.c || 0) + 1 ? chip(String(n), 'now') : chip(String(n), 'off')).join(' ');
const need = q => (q.c || 0) === 0 ? 'Ops check 1' : q.c === 1 ? 'Ops check 2 (another person)' : 'Accounting check 3';

export function queueHtml(only) {
  const q = (S().queue || []), w = who(), mine = q.filter(x => canDo(x, (x.c || 0) + 1, w)), rest = q.filter(x => !mine.includes(x));
  const sty = '--c:1fr 1.5fr 80px 1.2fr 150px 150px';
  const row = (x, can) => '<div class="xp-t" style="' + sty + '"><b>' + esc(x.name || x.uid) + '</b><span>' + esc(x.title || x.rid) + '<br><span class="xp-m">' + esc(x.sub || '') + '</span></span><span>' + esc(day(x.at)) + ' · v' + (x.ver || 1) + '</span><span>' + (x.n || 0) + ' expense(s) · ' + esc(x.tot || '') + (x.np ? '<br><span class="xp-chip2 warn">' + x.np + ' without photo</span>' : '') + '</span><span>' + prog(x) + '</span><span class="xp-ac">' +
    (can ? '<button class="xp-btn xp-pri" data-a="rvOpen" data-u="' + esc(x.uid) + '" data-id="' + esc(x.rid) + '">Review · check ' + ((x.c || 0) + 1) + '</button>' : '<button class="xp-lk" data-a="rvOpen" data-u="' + esc(x.uid) + '" data-id="' + esc(x.rid) + '">View</button><span class="xp-m">' + esc(need(x)) + '</span>') + '</span></div>';
  const hd = '<div class="xp-t hd" style="' + sty + '"><span>Engineer</span><span>Report</span><span>Sent</span><span>Expenses</span><span>Checks</span><span></span></div>';
  return '<section class="xp-c"><h2>For you to check · ' + mine.length + '</h2>' + (mine.length ? hd + mine.map(x => row(x, 1)).join('') : '<div class="xp-m">Nothing waiting for you.</div>') + '</section>' +
    (only ? '' : '<section class="xp-c"><h2>Waiting for someone else · ' + rest.length + '</h2>' + (rest.length ? hd + rest.map(x => row(x, 0)).join('') : '<div class="xp-m">Nothing else in progress.</div>') + '</section>');
}
const queueV = () => '<div class="xp-h"><div><h1>Expense checks</h1><div class="xp-m">Every report is checked by three different people: two from Ops, then accounting.</div></div><button class="xp-btn" data-a="rvRefresh">Refresh</button></div>' + queueHtml(false);

// ── Une note de frais à contrôler ─────────────────────────────────────────────
const ymOf = (r, v) => { const set = new Set(); Object.values(r.lines || {}).forEach(l => { const d = ST.stDate(l); if (d) set.add(d.slice(0, 7)); });
  Object.values((r.itin || {}).e || {}).forEach(e => { if (!e || !e.s) return; const a = new Date(e.s + 'T00:00:00Z'), b = new Date((e.e || e.s) + 'T00:00:00Z'); for (let d = a, i = 0; d <= b && i < 400; d = new Date(d.getTime() + 864e5), i++) set.add(d.toISOString().slice(0, 7)); }); return [...set].sort(); };
export const monthsOf = ymOf;
const verOf = rq => rq.rv && rq.rv.ver && rq.rv.ver[rq.vk] || {};

export const A = {};
A.rvRefresh = async () => { await loadQueue(); X.render(); };
A.rvOpen = async d => {
  const s = S(); s.rq = { uid: d.u, rid: d.id, loading: true, flags: {}, note: '' }; s.view = 'rv'; X.render();
  const [a, v] = await Promise.all([X.safe(D().get(R('expenses/' + d.u + '/' + d.id))), X.safe(D().get(R('expenseReview/' + d.u + '/' + d.id)))]);
  if (a.err) throw a.err;
  const r = a.exists() ? a.val() : null; if (!r) { s.rq = null; s.view = 'q'; X.render(); return X.toast('This report no longer exists.', 1); }
  r.lines = r.lines || {};
  const rq = s.rq; rq.r = r; rq.rv = v.exists() ? v.val() : {}; rq.vk = 'v' + (r.ver || 1); rq.q = (s.queue || []).find(x => x.uid === d.u && x.rid === d.id) || { uid: d.u, rid: d.id, c: Object.keys(verOf(rq)).filter(k => /^c[123]$/.test(k)).length };
  if (!rq.q.name) { const g = await X.safe(D().get(R('team/' + d.u + '/name'))); if (g.exists()) rq.q = Object.assign({}, rq.q, { name: g.val() }); }       // rapport déjà approuvé : il n'est plus dans la file, on retrouve le nom
  rq.loading = false; X.render();
};
const rqLines = rq => X.lines(rq.r);
const effPayer = (rq, l) => (verOf(rq).pay || {})[l.id] || ST.payerOf(l, rq.r);
const lineTxt = l => [X.TYPES[l.type] || l.type, l.sub].filter(Boolean).join(' · ');
const lineWhat = l => [l.fromTo, l.hotel && 'Hotel: ' + l.hotel, l.city, l.desc && !l.fromTo ? String(l.desc).split('\n')[0] : ''].filter(Boolean).join(' · ') || '—';
const nextOf = rq => { const v = verOf(rq); return v.c3 ? 4 : v.c2 ? 3 : v.c1 ? 2 : 1; };
const myLast = rq => { const v = verOf(rq), me = X.uid(); return [3, 2, 1].find(n => v['c' + n] && v['c' + n].by === me && !(v['c' + (n + 1)])); };

const fxCell = (rq, l, fx) => {                                          // case « FX rate » du comptable = taux imposé sur CETTE dépense ; en dessous : le taux qui s'applique sinon (mois ou jour)
  if (l.currency === 'USD') return '<span class="xp-m">—</span>';
  const dt = ST.stDate(l), rt = ((S().cfg.rates || {})[String(dt).slice(0, 7)]) || {}, pr = ST.pickRate(l.currency, ST.catOf(l, rq.r), dt, rt, fx);
  const cap = pr.src === 'own' ? 'this expense only' : pr.k ? (pr.src === 'day' ? 'day rate ' : 'month rate ') + pr.k : 'no ' + (pr.src === 'day' ? 'day' : 'month') + ' rate yet';
  return '<input class="xp-fx" inputmode="decimal" placeholder="' + esc(pr.k && pr.src !== 'own' ? pr.k : 'rate') + '" data-ch="rvFx" data-lid="' + esc(l.id) + '" value="' + esc(fx || '') + '"><br><span class="xp-m" style="font-size:11px">' + esc(cap) + '</span>';
};
const reviewV = () => {
  const s = S(), rq = s.rq; if (!rq) return '<div class="xp-m">Nothing selected.</div>';
  if (rq.loading) return '<div class="xp-m">Loading the report…</div>';
  const r = rq.r, v = verOf(rq), n = nextOf(rq), locked = !!(rq.rv && rq.rv.lock), ls = rqLines(rq), acct = X.isAcct(), w = who(), can = !locked && !v.ret && n <= 3 && canDo({ uid: rq.uid, c: n - 1, c1: (v.c1 || {}).by, c2: (v.c2 || {}).by }, n, w);
  const miss = ls.filter(l => !l.np).length, undo = !locked && myLast(rq), steps = [1, 2, 3].map(k => v['c' + k] ? chip('Check ' + k + ' ✓ ' + (v['c' + k].name || ''), 'ok', when(v['c' + k].at)) : chip('Check ' + k, k === n && !v.ret ? 'now' : 'off')).join(' ');
  const sty = '--c:62px 1.1fr 1.5fr 105px 1fr 108px 74px 64px' + (acct ? ' 120px' : '');
  const rows = ls.map(l => { const p = effPayer(rq, l), fl = rq.flags[l.id], fx = (v.fx || {})[l.id], priv = l.ded ? '<br><span class="xp-m">private part deducted: ' + esc(l.ded) + '</span>' : '';
    return '<div class="xp-t' + (fl != null ? ' xp-fl' : '') + '" style="' + sty + '"><span>' + esc(X.fmtD(l.date).slice(0, 6)) + '</span><span>' + esc(lineTxt(l)) + '</span><span>' + esc(lineWhat(l)) + (l.share ? '<br><span class="xp-m">Shared with ' + esc(l.share) + '</span>' : '') + (l.notes ? '<br><span class="xp-m">Note: ' + esc(l.notes) + '</span>' : '') + '</span><b>' + esc(X.money(X.num(l.amount), l.currency)) + priv + '</b><span>' + esc(X.PAY[l.payment] || '—') + '</span>' +
      '<span class="xp-chips2">' + ['gac', 'has'].map(k => '<button type="button" class="xp-chip sm' + (p === k ? ' on' : '') + '" data-a="rvPay" data-lid="' + esc(l.id) + '" data-v="' + k + '"' + (locked && !acct ? ' disabled' : '') + '>' + k.toUpperCase() + '</button>').join('') + '</span>' +
      '<span>' + (l.np ? '<button class="xp-lk" data-a="rvPhotos" data-lid="' + esc(l.id) + '">View · ' + l.np + '</button>' : '<span class="xp-chip2 warn">None</span>') + '</span><span><button class="xp-lk" data-a="rvFlag" data-lid="' + esc(l.id) + '"' + (v.c3 || locked ? ' disabled' : '') + '>' + (fl != null ? 'Unflag' : 'Flag') + '</button></span>' +
      (acct ? '<span>' + fxCell(rq, l, fx) + '</span>' : '') + '</div>' +
      (fl != null ? '<div class="xp-fln"><input data-ch="rvFlagNote" data-lid="' + esc(l.id) + '" placeholder="What should the engineer fix on this expense?" value="' + esc(fl) + '"></div>' : ''); }).join('');
  const log = Object.values(rq.rv.log || {}).sort((a, b) => a.at - b.at).map(e => '<div class="xp-lg"><span class="xp-m">' + esc(when(e.at)) + '</span> <b>' + esc(e.name || '') + '</b> ' + esc(({ sent: 'sent the report (v' + e.ver + ')', recalled: 'recalled the report to edit it', c1: 'did check 1', c2: 'did check 2', c3: 'did check 3 — approved', ret: 'returned the report', undo: 'cancelled check ' + e.n, reopen: 'reopened the approved report', stmt: 'sent the monthly statement' })[e.t] || e.t) + (e.note ? ' — ' + esc(e.note) : '') + '</div>').join('');
  return '<div class="xp-h"><div><h1>' + esc(X.title(r)) + ' <span class="xp-chip2">v' + (r.ver || 1) + '</span></h1><div class="xp-m">' + esc((rq.q && rq.q.name) || rq.uid) + ' · sent ' + esc(r.submittedAt ? when(r.submittedAt) : '—') + '</div></div><span><button class="xp-btn" data-a="rvBack">← Checks</button></span></div>' +
    '<section class="xp-c"><div class="xp-h" style="margin:0"><span>' + steps + (locked ? ' ' + chip('Approved · locked', 'ok') : '') + (v.ret ? ' ' + chip('Returned by ' + (v.ret.name || ''), 'warn') : '') + '</span><span class="xp-m">' + ls.length + ' expense(s) · ' + esc(X.totalsOf(ls)) + (miss ? ' · ' + miss + ' without photo' : '') + '</span></div>' +
    (v.ret ? '<div class="xp-ban">Returned: ' + esc(v.ret.note || '(no note)') + '</div>' : '') + '</section>' +
    '<section class="xp-c"><div class="xp-r4">' + [['Work order', X.title(r)], ['Aircraft type', r.model], ['Serial number', r.sn], ['Registration', r.reg], ['Location', r.loc], ['Date started', X.fmtD(r.dateStart)], ['Date completed', X.fmtD(r.dateEnd)], ['Category', r.category]].map(([a, b]) => '<div class="xp-f"><label>' + a + '</label><b>' + esc(b || '—') + '</b></div>').join('') + '</div></section>' +
    '<section class="xp-c"><h2>Expenses · ' + ls.length + '</h2><div class="xp-t hd" style="' + sty + '"><span>Date</span><span>Type</span><span>Description</span><span>Amount</span><span>Payment</span><span>Charged to</span><span>Receipts</span><span></span>' + (acct ? '<span>FX rate</span>' : '') + '</div>' + rows + '<div class="xp-tot">' + esc(X.totalsOf(ls)) + '</div></section>' +
    X.tripHtml(r) +
    '<section class="xp-c"><h2>Your decision</h2>' + (locked ? '<div class="xp-m">This report was approved by accounting and is locked.' + (acct ? ' Use “Reopen” to let the engineer edit it again.' : '') + '</div>' : v.ret ? '<div class="xp-m">The report was returned to the engineer. It comes back here when it is sent again.</div>' : '') +
    '<div class="xp-f" style="margin:10px 0"><label for="rv_note">Note' + (can ? ' (kept with the check; sent to the engineer if you return the report)' : '') + '</label><textarea id="rv_note"' + (can || (!locked && !v.ret) ? '' : ' disabled') + '>' + esc(rq.note) + '</textarea></div><div class="xp-ac" style="justify-content:flex-start;gap:8px;flex-wrap:wrap">' +
    (can ? '<button class="xp-btn xp-pri" data-a="rvApprove">Approve · check ' + n + (n === 3 ? ' (final)' : '') + '</button>' : '') +
    (!locked && !v.ret && n <= 3 && (X.isOps() || acct) && (rq.uid !== X.uid() || X.testOn()) ? '<button class="xp-btn" data-a="rvReturn">Return to the engineer</button>' : '') +
    (v.c3 && !locked && acct ? '<button class="xp-btn xp-pri" data-a="rvFinalize">Finalize (lock the report)</button>' : '') +
    (undo ? '<button class="xp-lk" data-a="rvUndo">Cancel my check ' + undo + '</button>' : '') +
    (locked && acct ? '<button class="xp-btn" data-a="rvReopen">Reopen the report</button>' : '') + '</div>' +
    (!can && !locked && !v.ret && n <= 3 ? '<div class="xp-m" style="margin-top:10px">' + esc(rq.uid === X.uid() && !X.testOn() ? 'You cannot check your own report.' : 'Check ' + n + ' must be done by ' + (n === 3 ? 'accounting' : 'an Ops person') + (n > 1 ? ', different from the previous check(s).' : '.')) + '</div>' : '') + '</section>' +
    (log ? '<section class="xp-c"><h2>History</h2>' + log + '</section>' : '');
};

const pathV = rq => 'expenseReview/' + rq.uid + '/' + rq.rid + '/ver/' + rq.vk;
const syncQ = async (rq, o) => { try { await D().update(R('expenseQueue/' + rq.uid + '/' + rq.rid), o); } catch (e) { console.warn('queue', e); } };
const grabNote = () => { const e = X.$('#rv_note'); if (e && S().rq) S().rq.note = e.value; };
const ensure = rq => { rq.rv = rq.rv || {}; rq.rv.ver = rq.rv.ver || {}; return (rq.rv.ver[rq.vk] = rq.rv.ver[rq.vk] || {}); };

A.rvBack = async () => { const s = S(); s.rq = null; s.view = s.acBack || 'q'; const h = s.rvBackHook; s.rvBackHook = null; await loadQueue().catch(() => { }); if (h) await Promise.resolve(h()).catch(() => { }); X.render(); };
A.rvFlag = d => { grabNote(); const f = S().rq.flags; if (f[d.lid] != null) delete f[d.lid]; else f[d.lid] = ''; X.render(); };
A.rvFlagNote = (d, el) => { S().rq.flags[d.lid] = el.value; };
A.rvPay = async d => {
  const rq = S().rq, v = ensure(rq); grabNote();
  await D().set(R(pathV(rq) + '/pay/' + d.lid), d.v); (v.pay = v.pay || {})[d.lid] = d.v; X.render();
};
A.rvFx = async (d, el) => {
  const rq = S().rq, v = ensure(rq), n = parseFloat(String(el.value).replace(',', '.'));
  if (el.value.trim() === '') { await D().remove(R(pathV(rq) + '/fx/' + d.lid)); if (v.fx) delete v.fx[d.lid]; grabNote(); X.render(); X.toast('Rate removed — the usual rate applies again.'); return; }
  if (!(n > 0)) { X.toast('The rate must be a number above 0.', 1); el.value = (v.fx || {})[d.lid] || ''; return; }
  await D().set(R(pathV(rq) + '/fx/' + d.lid), n); (v.fx = v.fx || {})[d.lid] = n; grabNote(); X.render(); X.toast('Rate saved for this expense.');
};
A.rvPhotos = async d => {
  const rq = S().rq; X.toast('Loading the photos…');
  const s = await X.safe(D().get(R('expensePhotos/' + rq.uid + '/' + rq.rid + '/' + d.lid))); if (s.err) throw s.err;
  const arr = s.exists() ? Object.values(s.val()) : []; const l = rq.r.lines[d.lid] || {};
  if (!arr.length) return X.toast('No photo found for this expense.', 1);
  X.lightbox(arr, lineTxt(l) + ' · ' + X.money(X.num(l.amount), l.currency));
};

const finish = async (rq, n, note) => {                                   // Check n : écrit le contrôle, la file d'attente et le journal
  const me = X.me(), at = Date.now(), rec = { by: me.id, name: me.name, at }; if (note) rec.note = note;
  await D().set(R(pathV(rq) + '/c' + n), rec); ensure(rq)['c' + n] = rec;
  if (n < 3) await syncQ(rq, { c: n, ['c' + n]: me.id, ['c' + n + 'n']: me.name });
  await logIt(rq.uid, rq.rid, { t: 'c' + n, ver: rq.r.ver || 1, note: note || null });
};
const lockIt = async rq => {                                              // Check 3 fait → verrou + index du mois + sortie de la file
  const me = X.me(), at = Date.now(), r = rq.r, lock = { by: me.id, name: me.name, at, ver: r.ver || 1 };
  await D().set(R('expenseReview/' + rq.uid + '/' + rq.rid + '/lock'), lock); rq.rv.lock = lock;
  for (const ym of ymOf(r)) await D().set(R('expenseApproved/' + ym + '/' + rq.uid + '/' + rq.rid), { ver: r.ver || 1, at, by: me.id });
  await D().remove(R('expenseQueue/' + rq.uid + '/' + rq.rid)).catch(() => { });
};
A.rvApprove = async () => {
  const rq = S().rq; grabNote(); const n = nextOf(rq); if (n > 3) return;
  const flagged = Object.keys(rq.flags).length; if (flagged && !confirm(flagged + ' expense(s) are flagged. Approve anyway? (Use “Return” to send them back.)')) return;
  const miss = X.lines(rq.r).filter(l => !l.np).length; if (miss && !confirm(miss + ' expense(s) have no receipt photo. Approve anyway?')) return;
  await finish(rq, n, rq.note.trim());
  if (n === 3) { await lockIt(rq); X.toast('Approved — the report is locked and goes into the monthly statement.'); } else X.toast('Check ' + n + ' done. Next: ' + (n === 1 ? 'a second Ops person.' : 'accounting.'));
  S().queue = (S().queue || []).filter(q => !(q.uid === rq.uid && q.rid === rq.rid && n === 3)); await A.rvBack();
};
A.rvFinalize = async () => { const rq = S().rq; await lockIt(rq); X.toast('Report locked.'); X.render(); };
A.rvReturn = async () => {
  const rq = S().rq; grabNote(); const lines = {}; Object.entries(rq.flags).forEach(([id, t]) => { lines[id] = String(t || '').trim(); });
  const note = rq.note.trim(); if (!note && !Object.keys(lines).length) return X.toast('Write a note or flag at least one expense so the engineer knows what to fix.', 1);
  const me = X.me(), rec = { by: me.id, name: me.name, at: Date.now(), note, lines }; if (!Object.keys(lines).length) delete rec.lines;
  await D().set(R(pathV(rq) + '/ret'), rec); ensure(rq).ret = rec;
  await D().remove(R('expenseQueue/' + rq.uid + '/' + rq.rid)).catch(() => { });
  await logIt(rq.uid, rq.rid, { t: 'ret', ver: rq.r.ver || 1, note });
  X.toast('Returned to the engineer.');
  try {                                                                    // mail à l'engineer (facultatif)
    const em = await X.safe(D().get(R('team/' + rq.uid + '/email'))), nm = await X.safe(D().get(R('team/' + rq.uid + '/name'))), mail = em.exists() ? em.val() : '';
    if (mail && D().sendMail) { const m = returnMail(rq.r, rec, { name: nm.exists() ? nm.val() : '' }, { lineName: id => { const l = rq.r.lines[id] || {}; return X.fmtD(l.date).slice(0, 6) + ' ' + lineTxt(l) + ' ' + X.money(X.num(l.amount), l.currency); }, signature: D().signature && D().signature() }); await D().sendMail([mail], [], m.subject, m.html); X.toast('Returned — the engineer was also told by e-mail.'); }
  } catch (e) { X.toast('Returned — but the e-mail to the engineer could not be sent (' + String((e && e.message) || e).slice(0, 110) + '). Please tell him yourself.', 1); }
  S().queue = (S().queue || []).filter(q => !(q.uid === rq.uid && q.rid === rq.rid)); await A.rvBack();
};
A.rvUndo = async () => {
  const rq = S().rq, n = myLast(rq); if (!n) return; if (!confirm('Cancel your check ' + n + '?')) return;
  await D().remove(R(pathV(rq) + '/c' + n)); delete ensure(rq)['c' + n];
  await syncQ(rq, { c: n - 1, ['c' + n]: null, ['c' + n + 'n']: null }); await logIt(rq.uid, rq.rid, { t: 'undo', n });
  if (n === 3) { /* le verrou n'existe pas encore (il est posé après c3) : rien à retirer */ }
  X.toast('Check ' + n + ' cancelled.'); X.render();
};
A.rvReopen = async () => {                                                // comptable : rouvre une note approuvée (retire le verrou, le Check 3 et l'index des mois)
  const rq = S().rq; if (!confirm('Reopen this report? The engineer will be able to edit it again and it will go through the checks again.')) return;
  const base = 'expenseReview/' + rq.uid + '/' + rq.rid;
  await D().remove(R(base + '/lock')); delete rq.rv.lock;
  await D().remove(R(pathV(rq) + '/c3')).catch(() => { }); delete ensure(rq).c3;
  for (const ym of ymOf(rq.r)) await D().remove(R('expenseApproved/' + ym + '/' + rq.uid + '/' + rq.rid)).catch(() => { });
  await D().set(R('expenseQueue/' + rq.uid + '/' + rq.rid), { ver: rq.r.ver || 1, at: rq.r.submittedAt || Date.now(), name: (rq.q && rq.q.name) || '', title: X.title(rq.r), sub: [rq.r.model, rq.r.sn, rq.r.loc].filter(Boolean).join(' · '), n: X.lines(rq.r).length, np: X.lines(rq.r).filter(l => !l.np).length, tot: X.totalsOf(X.lines(rq.r)), c: 2, c1: (verOf(rq).c1 || {}).by || null, c1n: (verOf(rq).c1 || {}).name || null, c2: (verOf(rq).c2 || {}).by || null, c2n: (verOf(rq).c2 || {}).name || null }).catch(() => { });
  await logIt(rq.uid, rq.rid, { t: 'reopen', ver: rq.r.ver || 1 });
  X.toast('Report reopened — it is back in the check 3 queue (the engineer can also recall it to edit it).'); X.render();
};

export const views = { q: queueV, rv: reviewV };
