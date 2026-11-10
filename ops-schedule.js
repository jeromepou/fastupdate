/* ═══════════════════════════════════════════════════════════════════════════════
   ops-schedule.js — Engineer Schedule : planning des engineers (Ops) + « My schedule » (engineer)
   ───────────────────────────────────────────────────────────────────────────────
   Chargé À LA DEMANDE par index.html :   const m = await import('./ops-schedule.js'); m.open(deps);
   Ce fichier ne contient AUCUNE donnée de personne : tout vient de Firebase.
   Firebase (écriture réservée aux Ops) :
     schedule/engineers/<uid>                = fiche de la personne (base, n° FN, licences, types avion… ; équipe Ops : dn = nom dans les mails, wk = semaine type)
     schedule/d/<AAAA-MM>/<uid>/<JJ>    = exception du jour { s, c, p, n, x, h, a }   (jour absent = « On duty »)
     schedule/config                    = destinataires des 2 mails, contacts, textes
     schedule/log                       = 150 derniers changements
   Lecture seule : teamPublic (liste des personnes) · backoffice/assignments (jours « Engaged » automatiques)
   ═══════════════════════════════════════════════════════════════════════════════ */

// ── Constantes ───────────────────────────────────────────────────────────────
const TYPES = ['GIV', 'GV', 'G150', 'G200', 'G280', 'G450', 'G500', 'G550', 'G600', 'G650', 'G700', 'G800'];      // ordre des « MODELS »
const MATRIX = ['G150', 'G200', 'G280', 'G450', 'G500', 'G550', 'G600', 'G650', 'G700', 'G800', 'GIV', 'GV'];     // ordre de la matrice du mail Availability
const REGIONS = ['Europe', 'Asia', 'Africa'];
const FAM = {                                                         // couleurs = celles de ton Excel actuel
  on: { n: 'On duty', c: '#92D050' }, eng: { n: 'Engaged', c: '#FFFF00' }, off: { n: 'Off duty', c: '#00B0F0' },
  un: { n: 'Training / Not reported / Unavailable / Sick', c: '#BFBFBF' }, enf: { n: 'Enforced off duty', c: '#D9E1F2' }
};
// code : [libellé, famille de couleur, lettre affichée, poids « jour de service »]
const ST = {
  eng: {
    D: ['On duty', 'on', '', 1], MD: ['Morning duty', 'on', 'AM', .5], AD: ['Afternoon duty', 'on', 'PM', .5],
    E: ['Engaged', 'eng', '', 1], SB: ['Standby', 'eng', 'SB', 1], A: ['Long-term assignment', 'eng', 'A', 1],
    O: ['Off duty', 'off', '', 0], V: ['Vacation', 'off', 'V', 0], R: ['Rest', 'off', 'R', 1], F: ['Flexible off duty', 'off', 'F', 0],
    N: ['Enforced off duty', 'enf', '', 0],
    T: ['Training', 'un', 'T', 0], S: ['Sick / medical', 'un', 'S', 0], Q: ['Quarantine', 'un', 'Q', 0], U: ['Unavailable', 'un', 'U', 0], I: ['Mission outside FAST', 'un', 'I', 0]
  },
  ops: {
    D: ['On duty', 'on', '', 1], MD: ['Morning on duty', 'on', 'AM', 1], AD: ['Afternoon on duty', 'on', 'PM', 1],
    U: ['Supervisory / additional tasks', 'on', 'U', 1], MG: ['Manager on duty', 'on', 'MoD', 1], B: ['Substitution day', 'on', 'B', 1], W: ['Duty swap', 'on', 'W', 1], M: ['Meeting', 'on', 'M', 1],
    O: ['Off duty', 'off', '', 0], V: ['Time off', 'off', 'V', 0],
    T: ['Training', 'un', 'T', 0], S: ['Sick', 'un', 'S', 0], R: ['Other', 'un', 'R', 0]
  }
};
const ROWS = {                                                       // lignes de boutons de l'éditeur (une famille par ligne)
  eng: [['Available', ['D', 'MD', 'AD']], ['Engaged', ['E', 'SB', 'A']], ['Off', ['O', 'V', 'R', 'F', 'N']], ['Unavailable', ['T', 'S', 'Q', 'U', 'I']]],
  ops: [['On duty', ['D', 'MD', 'AD', 'U', 'MG', 'B', 'W', 'M']], ['Off', ['O', 'V']], ['Unavailable', ['T', 'S', 'R']]]
};
const BRUSH = { eng: ['D', 'E', 'O', 'V', 'T', 'U'], ops: ['MD', 'AD', 'U', 'MG', 'D', 'O', 'V', 'T'] };
const CFG0 = {
  sched: { to: '', cc: '', subject: '10 DAY SCHEDULE – EURO-ASIA FAST ({from} – {to})', intro: 'Dear All,\n\nPlease find below the 10 DAY SCHEDULE for EURO-ASIA FAST.' },
  avail: { to: '', cc: '', subject: 'FAST AVAILABILITY STATUS – {date}', intro: 'Dear All,\n\nPlease find today’s FAST Availability Status.', note: '', link: '', tel: '', am: 'From 6:30 to 15:00 UTC', pm: 'From 15:00 to 23:00 UTC' },
  contacts: []
};

// ── Utilitaires : dates (toujours « AAAA-MM-JJ » en heure locale) ──────────────
const pad = n => String(n).padStart(2, '0');
const iso = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
const pd = s => new Date(s + 'T00:00:00');
const addD = (s, n) => { const d = pd(s); d.setDate(d.getDate() + n); return iso(d); };
const today = () => iso(new Date());
const diff = (a, b) => Math.round((pd(b) - pd(a)) / 864e5);
const mon = s => s.slice(0, 7), dd = s => s.slice(8, 10);
const addM = (m, n) => { const d = new Date(+m.slice(0, 4), +m.slice(5, 7) - 1 + n, 1); return d.getFullYear() + '-' + pad(d.getMonth() + 1); };
const WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], MN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const ML = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const wd = s => pd(s).getDay(), isWE = s => wd(s) === 0 || wd(s) === 6;
const ordn = n => n + (n % 100 >= 11 && n % 100 <= 13 ? 'th' : ({ 1: 'st', 2: 'nd', 3: 'rd' }[n % 10] || 'th'));
const fdate = s => ordn(+dd(s)) + ' ' + MN[+s.slice(5, 7) - 1];                  // 12th Nov
const flong = s => ordn(+dd(s)) + ' ' + ML[+s.slice(5, 7) - 1];                  // 7th November
const fshort = s => WD[wd(s)] + ' ' + (+dd(s)) + ' ' + MN[+s.slice(5, 7) - 1];   // Mon 9 Nov
const fdm = s => dd(s) + '/' + s.slice(5, 7);                                    // 09/11
const monthName = m => ML[+m.slice(5, 7) - 1] + ' ' + m.slice(0, 4);
const rangeTxt = (a, b) => {
  const x = pd(a), y = pd(b), sm = x.getMonth() === y.getMonth() && x.getFullYear() === y.getFullYear();
  return sm ? x.getDate() + ' – ' + y.getDate() + ' ' + MN[y.getMonth()] + ' ' + y.getFullYear()
    : x.getDate() + ' ' + MN[x.getMonth()] + (x.getFullYear() !== y.getFullYear() ? ' ' + x.getFullYear() : '') + ' – ' + y.getDate() + ' ' + MN[y.getMonth()] + ' ' + y.getFullYear();
};
const isoD = s => /^\d{4}-\d\d-\d\d$/.test(s || '') ? s : /^\d\d-\d\d$/.test(s || '') ? new Date().getFullYear() + '-' + s : '';   // dates du Back Office
const dayList = (a, b) => { const o = []; for (let d = a; d <= b && o.length < 400; d = addD(d, 1)) o.push(d); return o; };

// ── Utilitaires : texte et noms ───────────────────────────────────────────────
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const norm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const isSur = t => t.length > 1 && /[A-ZÀ-ÖØ-Þ]/.test(t[0]) && t.slice(0, -1) === t.slice(0, -1).toUpperCase();      // « JANESKI » (tolère « SANTUCCi »)
const splitName = full => { const w = String(full || '').trim().split(/\s+/).filter(Boolean); let i = 0; while (i < w.length - 1 && isSur(w[i])) i++; return { sur: w.slice(0, i).join(' '), giv: w.slice(i).join(' ') }; };
const title = s => s.toLowerCase().replace(/(^|[\s\-'’])([a-zà-ÿ])/g, (m, a, b) => a + b.toUpperCase());
const shortName = full => { const { sur, giv } = splitName(full); if (sur) return (giv[0] || '') + '. ' + title(sur); const w = String(full || '').trim().split(/\s+/); return w.length > 1 ? w[0][0] + '. ' + w.slice(1).join(' ') : String(full || ''); };
const fullUpper = full => { const { sur, giv } = splitName(full); return (giv + ' ' + sur).trim().toUpperCase(); };
const inits = n => { const w = String(n || '').replace(/\./g, ' ').trim().split(/\s+/); return ((w[0] || '')[0] || '') + ((w.length > 1 ? w[w.length - 1] : '')[0] || ''); };
const hue = s => [...String(s)].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 360, 7);
const cities = list => [...new Set(list.filter(Boolean))];

// ── Licences et types avion : q = { G650: 3, G450: 2 … }   1 = B1 · 2 = B2 · 3 = B1 + B2 ──
const catOf = q => { let m = 0; Object.values(q || {}).forEach(v => { m |= v; }); return m === 3 ? 'B1/B2' : m === 2 ? 'B2' : m === 1 ? 'B1' : ''; };
const qualLines = q => {                                                           // « B1/B2 - G280/G500 » · « B2 – GV/G450 »
  const g = { 1: [], 2: [], 3: [] }; TYPES.forEach(t => { const v = (q || {})[t]; if (v) g[v].push(t); });
  const o = []; if (g[3].length) o.push('B1/B2 - ' + g[3].join('/')); if (g[1].length) o.push('B1 - ' + g[1].join('/')); if (g[2].length) o.push('B2 - ' + g[2].join('/')); return o;
};
const modelLines = q => { const L = qualLines(q); return L.length === 1 ? [L[0].replace(/^B[12](\/B2)? - /, '')] : L; };      // colonne MODELS du mail Availability
const typeOf = s => {                                                              // texte libre du Back Office (« G650ER », « GIV-SP »…) → code
  s = String(s || '').toUpperCase().replace(/[\s_\-]/g, ''); const m = s.match(/G?(150|200|280|450|500|550|600|650|700|800)/);
  if (m) return 'G' + m[1]; if (/GIV|G400|GULFSTREAMIV/.test(s)) return 'GIV'; if (/(^|[^A-Z])GV([^A-Z]|$)|GULFSTREAMV$/.test(s)) return 'GV'; return '';
};

// ── État ──────────────────────────────────────────────────────────────────────
let D = null, S = null, root = null, raf = 0, syncT = 0;
const R = p => D.ref(D.db, p);
const newState = () => ({
  ops: false, uid: '', name: '', tab: 'plan', grp: 'eng', start: today(), span: 10, q: '', reg: '', typ: '', kpi: '', brush: '',
  engs: {}, dir: {}, dirB: 0, roster: {}, days: {}, ready: {}, subs: {}, offs: [], cfg: JSON.parse(JSON.stringify(CFG0)), asg: [], dv: {}, asgOk: false,
  undo: [], dur: 1, sel: null, ed: null, adate: today(), month: today().slice(0, 7), err: '', loading: true, busy: false, syncing: false
});
const toast = (m, bad) => { if (!root) return; root.querySelectorAll('.sc-toast').forEach(x => x.remove()); const t = document.createElement('div'); t.className = 'sc-toast' + (bad ? ' bad' : ''); t.textContent = m; root.appendChild(t); setTimeout(() => t.remove(), bad ? 5200 : 2600); };
const paint = () => { if (raf || !root) return; raf = requestAnimationFrame(() => { raf = 0; if (root) renderAll(); }); };

// ── Lecture / écoute Firebase ─────────────────────────────────────────────────
const stored = (uid, date) => (((S.days[mon(date)] || {})[uid]) || {})[dd(date)] || null;
function watch(path, fn, quiet) {
  const off = D.onValue(R(path), s => { try { fn(s.val()); } catch (e) { console.error('schedule', path, e); } paint(); },
    e => { if (!quiet) S.err = (e && e.message) || String(e); S.loading = false; paint(); });
  S.offs.push(off); return off;
}
function watchMonth(m) {
  if (S.subs[m] || !S.uid) return;          // pas avant load() : on ne connaît pas encore le rôle (ops / engineer)
  S.subs[m] = watch('schedule/d/' + m + (S.ops ? '' : '/' + S.uid), v => {
    S.days[m] = S.ops ? (v || {}) : { [S.uid]: v || {} }; S.ready[m] = 1; if (S.ops) syncSoon();
  });
}
function needMonths() {
  const o = new Set(); const t = today();
  if (!S.ops || S.tab === 'me') { const m = S.month; [addM(m, -1), m, addM(m, 1)].forEach(x => o.add(x)); }
  if (S.ops) {
    const a = S.start, b = addD(S.start, Math.max(S.span, 10) + 10); for (let m = mon(a); m <= mon(b); m = addM(m, 1)) o.add(m);
    for (let m = mon(S.adate); m <= mon(addD(S.adate, 125)); m = addM(m, 1)) o.add(m);          // « Duty until / Back on duty » regardent loin devant
    const mf = S.mf || t; [mon(mf), addM(mon(mf), 1), addM(mon(mf), 2)].forEach(x => o.add(x));
    [mon(t), addM(mon(t), 1), addM(mon(t), 2)].forEach(x => o.add(x));          // horizon de la synchro automatique
  }
  return [...o];
}
async function load() {
  S.uid = (D.me() || {}).id || ''; S.name = (D.me() || {}).name || ''; S.ops = !!D.ops();
  S.tab = S.ops ? 'plan' : 'me';
  if (S.ops) {
    try { const s = await D.get(R('teamPublic')); S.roster = s.exists() ? s.val() : {}; } catch (e) { S.roster = {}; }
    watch('schedule/engineers', v => { S.engs = v || {}; S.loading = false; rebuildDerived(); syncSoon(); loadDir(Object.keys(S.engs).filter(k => S.engs[k].g === 'ops')); });
    watch('schedule/config', v => { S.cfg = mergeCfg(v); });
    watch('backoffice/assignments', v => {
      S.asg = Object.values(v || {}).map(x => { try { return JSON.parse(x.json); } catch (e) { return null; } }).filter(a => a && a.wo);
      S.asgOk = true; rebuildDerived(); syncSoon();
    }, true);
  } else {
    try { const s = await D.get(R('schedule/engineers/' + S.uid)); if (s.exists()) S.engs[S.uid] = s.val(); } catch (e) { S.err = e.message || String(e); }
    S.loading = false;
  }
  needMonths().forEach(watchMonth);
}
const mergeCfg = v => { const o = JSON.parse(JSON.stringify(CFG0)); v = v || {}; ['sched', 'avail'].forEach(k => Object.assign(o[k], v[k] || {})); o.contacts = Array.isArray(v.contacts) ? v.contacts : Object.values(v.contacts || {}); return o; };

// ── Jours « Engaged » automatiques, tirés du Back Office (lecture seule) ───────
function rebuildDerived() {
  const dv = {}, t0 = addD(today(), -45), t1 = addD(today(), 200), idx = {}, byIni = {};
  Object.entries(S.roster).forEach(([uid, p]) => { if (p && p.name) { idx[norm(p.name)] = uid; const i = splitName(p.name); const k = (i.giv[0] || '') + (i.sur[0] || ''); (byIni[k.toUpperCase()] = byIni[k.toUpperCase()] || []).push(uid); } });
  Object.entries(S.engs).forEach(([uid, c]) => { if (c.full && !idx[norm(c.full)]) idx[norm(c.full)] = uid; });
  const acc = {};
  S.asg.forEach(a => {
    const p0 = (a.apt || [])[0] || {}, city = p0.l || p0.c || '', proj = String(a.proj || '').replace(/^#/, '');
    (a.eng || []).forEach(e => {
      if (e.role !== 'P' && e.role !== 'S' && e.role !== 'Prep') return;               // « CTI » n'occupe pas les jours de l'engineer
      const l = byIni[String(e.i || '').toUpperCase()] || [], uid = idx[norm(e.n)] || (l.length === 1 ? l[0] : '');
      if (!uid) return;
      const from = isoD(e.from) || isoD(a.start) || isoD(a.eta); if (!from) return;
      let to = isoD(e.to) || isoD(a.etd) || (a.ws === 'In progress' && today() > from ? today() : from); if (to < from) to = from; if (diff(from, to) > 150) to = addD(from, 150);
      const k = e.role === 'Prep' ? 'prep' : a.ws === 'Stand-by' ? 'sb' : 'e';         // Prep = jour de préparation : vert + texte (comme « Macau #87132 » vert dans ton tableau)
      for (let d = from < t0 ? t0 : from; d <= to && d <= t1; d = addD(d, 1)) {
        const o = acc[uid + '|' + d] = acc[uid + '|' + d] || { uid, d, n: { e: 0, sb: 0, prep: 0 }, c: [], p: [], w: [], t: '' };
        o.n[k]++; o.c.push(city); o.p.push(proj); o.w.push(a.wo); o.t = o.t || typeOf(a.type);
      }
    });
  });
  Object.values(acc).forEach(o => { (dv[o.uid] = dv[o.uid] || {})[o.d] = { s: o.n.e ? 'E' : o.n.sb ? 'SB' : 'D', c: cities(o.c).join(' / '), p: cities(o.p).join(' & '), w: cities(o.w), t: o.t, pr: !o.n.e && !o.n.sb && o.n.prep ? 1 : 0 }; });
  S.dv = dv;
}

// ── Semaine type + Roster Ops ─────────────────────────────────────────────────
// wk = { 'AAAA-MM-JJ': 'MD MD MD MD MD - -' }  (lun → dim ; « - » = défaut du groupe ; 14, 21 ou 28 mots = rotation sur 2, 3 ou 4 semaines) : la dernière date ≤ au jour s'applique, la rotation commence le lundi de cette semaine.
const stdOf = (c, date) => { const w = c && c.wk; if (!w) return ''; let k = ''; Object.keys(w).forEach(x => { if (x <= date && x > k) k = x; }); if (!k) return ''; const t = String(w[k]).trim().split(/\s+/), n = t.length % 7 ? 7 : t.length, dy = Math.round((pd(date) - pd(addD(k, -((wd(k) + 6) % 7)))) / 864e5), x = t[((dy % n) + n) % n]; return x && x !== '-' ? x : ''; };
const defOf = (uid, date) => { const c = S.engs[uid] || {}, g = c.g === 'ops' ? 'ops' : 'eng', s = stdOf(c, date); return s && ST[g][s] ? s : g === 'ops' ? 'O' : 'D'; };
const dnOf = p => p.dn || (() => { const nm = (S.roster[p.id] || {}).name || p.full || p.n || '', { sur, giv } = splitName(nm); return sur ? (giv + ' ' + title(sur)).trim() : nm; })();
const WDF = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const wdText = set => {                                                           // {5,6} → « Friday & Saturday » · {0..4} → « Sunday to Thursday »
  const on = i => set.has(((i % 7) + 7) % 7); if (!set.size) return ''; if (set.size === 7) return 'Every day';
  const o = []; for (let i = 0; i < 7; i++) if (on(i) && !on(i - 1)) { let n = 1; while (on(i + n)) n++; o.push(n === 1 ? WDF[i] : n === 2 ? WDF[i] + ' & ' + WDF[(i + 1) % 7] : WDF[i] + ' to ' + WDF[(i + n - 1) % 7]); }
  return o.join(', ');
};
// Qui est de service le jour « date » (lu dans les états des personnes de l'équipe Ops) :
//   op = opérateurs (AM / PM / On duty ce jour-là) · sv = superviseurs (état U) · mg = managers on duty (état MG) sur les 7 jours qui suivent, avec leurs jours
function dutyFor(date) {
  const win = [0, 1, 2, 3, 4, 5, 6].map(i => addD(date, i)), out = { op: [], sv: [], mg: [] }, rk = { MD: 0, AD: 1, D: 2 };
  const days = (id, k) => new Set(win.filter(d => eff(id, d).s === k).map(wd));
  people('ops').forEach(p => {
    const s = eff(p.id, date).s; if (s in rk) out.op.push({ p, s });
    const u = days(p.id, 'U'); if (u.size) out.sv.push({ p, w: wdText(u) });
    const m = days(p.id, 'MG'); if (m.size) out.mg.push({ p, w: wdText(m) });
  });
  out.op.sort((a, b) => rk[a.s] - rk[b.s]); return out;
}
// Lignes du tableau « Person of contact… » du mail Availability : le roster + les contacts fixes (Réglages)
function contactRows(date) {
  const d = dutyFor(date), cf = S.cfg.avail, rows = [], nc = [];
  const add = (role, p, when, op) => { const x = S.dir[p.id] || {}, nm = dnOf(p); if (!x.ph && !x.em && !S.dirB && !nc.includes(nm)) nc.push(nm); rows.push({ role, name: nm, when, lines: [].concat(op && cf.tel ? ['Tel. ' + cf.tel] : [], x.ph ? [(op ? 'Mob. Tel. ' : 'Mobile: ') + x.ph] : []), email: x.em || '' }); };
  d.op.forEach(x => add('FASTOPs Person of contact', x.p, x.s === 'MD' ? cf.am : x.s === 'AD' ? cf.pm : '', 1));
  d.sv.forEach(x => add('FAST OPS Supervisor', x.p, x.w)); d.mg.forEach(x => add('HAS Manager on duty', x.p, x.w));
  (S.cfg.contacts || []).forEach(x => rows.push({ role: x.role || '', name: x.name || '', when: x.when || '', lines: String(x.tel || '').split('\n').map(s => s.trim()).filter(Boolean), email: x.email || '' }));
  const miss = []; if (!d.op.length) miss.push('operator'); if (!d.sv.length) miss.push('supervisor'); if (!d.mg.length) miss.push('manager on duty');
  return { rows, miss, nc };
}
// Téléphone et e-mail : lus dans la base de l'app (team/<uid>/phone et /email) — petits champs seulement
async function loadDir(ids) {
  const need = ids.filter(id => !(id in S.dir) && !/^ext_/.test(id)); if (!need.length) return;
  need.forEach(id => { S.dir[id] = {}; }); S.dirB++;
  await Promise.all(need.map(async id => { try { const [ph, em] = await Promise.all(['phone', 'email'].map(k => D.get(R('team/' + id + '/' + k)).then(x => x.val() || ''))); S.dir[id] = { ph, em }; } catch (e) { } }));
  S.dirB--; paint();
}
// ── Valeur effective d'un jour : saisie manuelle > Back Office > semaine type > « On duty » (Ops : « Off ») ─────
function eff(uid, date) {
  const c0 = S.engs[uid] || {}, g = c0.g === 'ops' ? 'ops' : 'eng', def = defOf(uid, date), st = stored(uid, date), dv = (S.dv[uid] || {})[date];
  let c = null, auto = false;
  if (st && (!st.a || !S.ops)) { c = st; auto = !!st.a; } else if (dv) { c = dv; auto = true; }
  const s = c && c.s && ST[g][c.s] ? c.s : def;
  return { s, g, fam: ST[g][s][1], c: c ? c.c || '' : '', p: c ? c.p || '' : '', n: c ? c.n || '' : '', x: c ? (c.x ? 1 : 0) : 0, h: c ? +c.h || 0 : 0, auto, man: !!c && !auto, dv: dv || null, plain: !c, pr: c && c === dv && dv.pr ? 1 : 0 };
}
const famOf = (uid, date) => eff(uid, date).fam;
const isDuty = f => f === 'on' || f === 'eng';
const people = g => Object.entries(S.engs).filter(([, c]) => (c.g || 'eng') === g && c.on !== 0).map(([id, c]) => Object.assign({ id }, c))
  .sort((a, b) => (a.ord == null ? 999 : a.ord) - (b.ord == null ? 999 : b.ord) || String(a.n || '').localeCompare(String(b.n || '')));
const regOf = c => c.reg || ((S.roster[c.id] || {}).team === 'FAST ASIA' ? 'Asia' : 'Europe');
const label = e => { const p = String(e.p || '').split(/\s*[&,]\s*/).filter(Boolean).map(x => '#' + x.replace(/^#/, '')).join(' & '); return [e.c, p].filter(Boolean).join(' '); };
const projList = e => String(e.p || '').split(/\s*[&,]\s*/).filter(Boolean).map(x => '#' + x.replace(/^#/, '')).join(' & ');
const stats = (uid, a, b) => { let duty = 0, plus = 0, hrs = 0; for (let d = a; d <= b; d = addD(d, 1)) { const e = eff(uid, d); duty += ST[e.g][e.s][3]; if (e.x) plus++; hrs += e.h; } return { duty, plus, hrs }; };

// ── Écriture : un seul update « multi-chemins » par geste (annulable) ───────────
const clean = c => { const o = {}; ['s', 'c', 'p', 'n'].forEach(k => { if (c[k]) o[k] = String(c[k]).slice(0, 80); }); if (c.x) o.x = 1; if (+c.h) o.h = +c.h; if (c.a) o.a = 1; return o; };
async function commit(list, text, quiet) {                                          // list : [[uid, date, cellule | null]]
  const up = {}, prev = {};
  list.forEach(([uid, date, cell]) => { const k = mon(date) + '/' + uid + '/' + dd(date); if (!(k in prev)) prev[k] = stored(uid, date) || null; up[k] = cell ? clean(cell) : null; });
  if (!Object.keys(up).length) return;
  if (!quiet) { S.undo.push({ text, prev }); if (S.undo.length > 40) S.undo.shift(); }
  try { await D.update(R('schedule/d'), up); if (!quiet) logIt(text); }
  catch (e) { if (!quiet) S.undo.pop(); toast(permMsg(e), 1); }
}
async function undo() {
  const u = S.undo.pop(); if (!u) return toast('Nothing to undo');
  try { await D.update(R('schedule/d'), u.prev); logIt('Undo: ' + u.text); toast('Undone: ' + u.text); } catch (e) { toast(permMsg(e), 1); }
  paint();
}
const permMsg = e => /permission/i.test(e && e.message || '') ? 'Firebase refused the write — publish rule R2 (schedule) first.' : (e && e.message) || String(e);
function logIt(t) {
  try { const by = S.name || 'Ops'; D.runTransaction(R('schedule/log'), cur => { const a = Array.isArray(cur) ? cur : Object.values(cur || {}); a.push({ at: Date.now(), by, t }); return a.slice(-150); }); } catch (e) { /* journal facultatif */ }
}

// ── Synchronisation automatique : les jours « Engaged » du Back Office sont écrits dans le planning ──
function syncSoon() { if (!S || !S.ops) return; clearTimeout(syncT); syncT = setTimeout(syncAuto, 900); }
async function syncAuto() {
  if (!S || !S.ops || !S.asgOk || S.syncing) return;
  const t = today(), ms = [mon(t), addM(mon(t), 1), addM(mon(t), 2)]; if (!ms.every(m => S.ready[m])) return;
  const lo = ms[0] + '-01', list = [];                                               // du début du mois en cours (compteurs de l'engineer) ; jamais les mois non chargés
  Object.keys(S.dv).forEach(uid => Object.keys(S.dv[uid]).forEach(d => {
    if (d < lo || !ms.includes(mon(d))) return;
    const v = S.dv[uid][d], st = stored(uid, d); if (st && !st.a) return;                  // une saisie manuelle n'est jamais écrasée
    const want = { s: v.s, c: v.c, p: v.p, a: 1 }; if (!st || st.s !== want.s || (st.c || '') !== (want.c || '') || (st.p || '') !== (want.p || '')) list.push([uid, d, want]);
  }));
  ms.forEach(m => Object.entries(S.days[m] || {}).forEach(([uid, cells]) => Object.entries(cells || {}).forEach(([k, st]) => {
    const d = m + '-' + k; if (!st || !st.a || d < lo) return; if (!(S.dv[uid] || {})[d]) list.push([uid, d, null]);        // jour auto périmé (allocation retirée)
  })));
  if (!list.length) return;
  S.syncing = true; try { await commit(list, 'Auto-sync', true); } finally { S.syncing = false; }
}

// ── Styles (tout est sous #sc-root : rien ne déborde sur le reste de l'app) ────────
const CSS = `
#sc-root{--ink:#1e1b4b;--tx:#111827;--mut:#6b7280;--line:#e6e8f2;--bg:#f4f5fb;--card:#fff;--ac:#4f46e5;--ac2:#6366f1;--acl:#eef0ff;--bad:#e11d48;--warn:#d97706;
--nw:236px;--cw:76px;--rh:54px;--tw:58px;
position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;overflow:hidden;color:var(--tx);
font:14px/1.4 -apple-system,'Segoe UI',Inter,system-ui,sans-serif;-webkit-text-size-adjust:100%;
background:radial-gradient(900px 420px at 6% -8%,#e0e7ff,transparent 70%),radial-gradient(700px 380px at 100% 0,#ede9fe,transparent 70%),var(--bg)}
#sc-root *{box-sizing:border-box}
#sc-root h1,#sc-root h2,#sc-root h3,#sc-root h4,#sc-root p{margin:0}
:where(#sc-root) button{font:inherit;color:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation}
#sc-root :is(input,select,textarea){font:inherit;font-size:14px;color:var(--tx);background:#fff;border:1px solid var(--line);border-radius:10px;padding:8px 10px;min-height:38px;width:100%;margin:0}
#sc-root :is(input,select,textarea):focus{outline:2px solid var(--ac2);outline-offset:0;border-color:transparent}
#sc-root input[type=checkbox]{width:18px;height:18px;min-height:0;padding:0;accent-color:var(--ac)}
#sc-root [hidden]{display:none!important}
#sc-root .f-on{--c:#92D050}#sc-root .f-eng{--c:#FFFF00}#sc-root .f-off{--c:#00B0F0}#sc-root .f-un{--c:#BFBFBF}#sc-root .f-enf{--c:#D9E1F2}
#sc-root .k-asg{--c:#FFFF00}#sc-root .k-av{--c:#92D050}#sc-root .k-un{--c:#00B0F0}

/* barre du haut */
.sc-top{flex:none;display:flex;align-items:center;gap:8px;padding:calc(9px + env(safe-area-inset-top,0px)) 14px 9px;color:#fff;background:linear-gradient(120deg,#1e1b4b,#312e81 58%,#4338ca);box-shadow:0 8px 28px rgba(30,27,75,.3);z-index:6}
.sc-top h1{font-size:16px;font-weight:700;white-space:nowrap;margin:0 6px 0 2px}
.sc-b{border:0;border-radius:10px;padding:8px 13px;font-weight:600;font-size:13px;color:#fff;background:rgba(255,255,255,.15);white-space:nowrap;transition:background .15s}
.sc-b:hover{background:rgba(255,255,255,.28)}
.sc-tabs{display:flex;gap:3px;background:rgba(255,255,255,.12);padding:3px;border-radius:12px}
.sc-tabs button{border:0;border-radius:9px;padding:7px 14px;font-weight:600;font-size:13px;color:#e0e7ff;background:none;white-space:nowrap}
.sc-tabs button.on{background:#fff;color:#312e81;box-shadow:0 2px 8px rgba(0,0,0,.18)}
.sc-sp{flex:1}
.sc-act{display:flex;gap:8px;align-items:center;margin-left:auto;order:5}
.sc-fil{display:contents}.ph-only{display:none!important}.sc-btn.on{background:var(--ink);border-color:var(--ink);color:#fff}

/* barre d'outils */
.sc-bar{flex:none;display:flex;flex-wrap:wrap;align-items:center;gap:8px 10px;padding:12px 16px 6px}
.sc-nav{display:flex;gap:4px;background:#fff;border:1px solid var(--line);border-radius:12px;padding:3px;box-shadow:0 1px 2px rgba(30,27,75,.05)}
.sc-nav button{border:0;background:none;border-radius:9px;min-width:36px;height:34px;padding:0 10px;font-weight:700;color:var(--ink)}
.sc-nav button:hover{background:var(--acl)}
.sc-rng{font-weight:700;color:var(--ink);font-size:15px;white-space:nowrap;min-width:0}
.sc-seg{display:flex;gap:2px;background:#e9ebf7;padding:3px;border-radius:11px}
.sc-seg button{border:0;background:none;border-radius:8px;padding:6px 11px;font-weight:600;font-size:13px;color:#4b5563;white-space:nowrap}
.sc-seg button.on{background:#fff;color:var(--ac);box-shadow:0 1px 4px rgba(30,27,75,.15)}
#sc-root .sc-q{flex:1 1 170px;min-width:130px;max-width:300px;border-radius:11px;background:#fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2.2' stroke-linecap='round'%3E%3Ccircle cx='11' cy='11' r='7'/%3E%3Cpath d='m20 20-3.5-3.5'/%3E%3C/svg%3E") 10px 50%/16px no-repeat;padding-left:34px}
#sc-root select.sc-sel{width:auto;min-width:0;border-radius:11px;padding-right:26px}
.sc-btn{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);background:#fff;border-radius:11px;padding:0 12px;height:38px;font-weight:600;font-size:13px;color:var(--ink);white-space:nowrap;box-shadow:0 1px 2px rgba(30,27,75,.05)}
.sc-btn:hover{background:var(--acl);border-color:#c7d2fe}
.sc-btn.p{background:var(--ac);border-color:var(--ac);color:#fff}.sc-btn.p:hover{background:#4338ca}
.sc-btn.d{background:#fff0f3;border-color:#fecdd3;color:var(--bad)}
.sc-btn[disabled]{opacity:.45;pointer-events:none}
.sc-btn svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}

/* puces : KPI, filtres, pinceaux */
.sc-kpi{flex:none;display:flex;flex-wrap:wrap;gap:7px;padding:4px 16px 6px;align-items:center}
.sc-chip{display:inline-flex;align-items:center;gap:7px;border:1px solid var(--line);background:#fff;border-radius:999px;padding:5px 12px 5px 9px;font-weight:600;font-size:12.5px;color:#374151;box-shadow:0 1px 2px rgba(30,27,75,.05);white-space:nowrap}
.sc-chip i{width:12px;height:12px;border-radius:50%;background:var(--c,#cbd5e1);box-shadow:inset 0 0 0 1px rgba(0,0,0,.12);flex:none}
.sc-chip b{font-weight:800;color:var(--ink)}
.sc-chip:hover{border-color:#c7d2fe;background:#fafaff}
.sc-chip.on{background:var(--ink);border-color:var(--ink);color:#fff}.sc-chip.on b{color:#fff}
.sc-chip.bad{border-color:#fecdd3;background:#fff1f2;color:var(--bad)}
.sc-leg{flex:none;display:flex;flex-wrap:wrap;gap:6px;align-items:center;padding:0 16px 8px;color:var(--mut);font-size:12px}
.sc-leg .sc-chip{font-size:12px;padding:4px 11px 4px 8px}
.sc-leg .sc-chip.on{background:var(--ac);border-color:var(--ac);box-shadow:0 0 0 3px rgba(99,102,241,.25)}
.sc-leg em{font-style:normal;margin-right:2px;font-weight:600}
.sc-tri{display:inline-block;width:0;height:0;border-style:solid;border-width:8px 8px 0 0;border-color:var(--ac) transparent transparent transparent;margin-right:4px;vertical-align:-1px}

/* zone principale */
#sc-body{flex:1;min-height:0;display:flex;flex-direction:column}
.sc-main{flex:1;min-height:0;display:flex;flex-direction:column;padding:0 16px 14px}
.sc-page{flex:1;min-height:0;overflow:auto;padding:12px 16px 40px;-webkit-overflow-scrolling:touch}
.sc-note{margin:6px 16px 0;padding:10px 14px;border-radius:12px;background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;font-size:13px}
.sc-note.bad{background:#fff1f2;border-color:#fecdd3;color:#9f1239}
.sc-empty{margin:30px auto;max-width:520px;text-align:center;color:var(--mut);padding:30px 20px;background:#fff;border:1px dashed #c7d2fe;border-radius:18px}
.sc-empty h3{color:var(--ink);font-size:17px;margin-bottom:6px}.sc-empty .sc-btn{margin:12px 4px 0}

/* grille */
.sc-gw{flex:1;min-height:0;overflow:auto;background:#fff;border:1px solid var(--line);border-radius:16px;box-shadow:0 10px 30px rgba(30,27,75,.07);-webkit-overflow-scrolling:touch;position:relative}
.sc-grid{display:grid;grid-template-columns:var(--nw) repeat(var(--cols),minmax(var(--cw),1fr));width:100%;min-width:max-content}
.sc-grid.tot{grid-template-columns:var(--nw) repeat(var(--cols),minmax(var(--cw),1fr)) var(--tw) var(--tw)}
.sc-hd{position:sticky;top:0;z-index:4;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:7px 2px;background:#fafaff;border-bottom:1px solid var(--line);font-size:11px;color:var(--mut);font-weight:600;line-height:1.2;text-transform:uppercase;letter-spacing:.3px}
.sc-hd b{font-size:15px;color:var(--ink);letter-spacing:0;font-weight:800}
.sc-hd.we{background:#f3f1ff}.sc-hd.we b{color:#6d28d9}
.sc-hd.td b{background:var(--ac);color:#fff;border-radius:8px;padding:0 7px}
.sc-hd.co{left:0;z-index:6;align-items:flex-start;padding-left:14px;text-transform:none;font-size:12px;border-right:1px solid var(--line)}
.sc-nm{position:sticky;left:0;z-index:3;display:flex;align-items:center;gap:10px;padding:6px 10px 6px 14px;background:#fff;border-bottom:1px solid #eef0f8;border-right:1px solid var(--line);cursor:pointer;min-width:0}
.sc-nm:hover{background:#f7f8ff}
.sc-av{flex:none;width:34px;height:34px;border-radius:50%;display:grid;place-items:center;font-size:12px;font-weight:800;color:hsl(var(--h) 55% 28%);background:hsl(var(--h) 85% 90%);box-shadow:inset 0 0 0 1.5px hsl(var(--h) 60% 80%)}
.sc-nt{min-width:0;display:flex;flex-direction:column;line-height:1.2}
.sc-nt b{font-size:13.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--ink)}
.sc-nt small{font-size:11.5px;color:var(--mut);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sc-nt small i{font-style:normal;font-weight:700;color:var(--ac)}
.sc-nm .sc-wr{margin-left:auto;color:var(--warn);font-size:15px;flex:none}
.sc-c{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:var(--rh);margin:3px;padding:3px 2px;border-radius:10px;font-size:11px;line-height:1.15;text-align:center;color:#1f2937;background:var(--c);box-shadow:inset 0 0 0 1px rgba(0,0,0,.08);cursor:pointer;user-select:none;-webkit-user-select:none;transition:box-shadow .1s,transform .08s;overflow:hidden;contain:inline-size}
.sc-c:hover{box-shadow:inset 0 0 0 2px rgba(30,27,75,.5)}
.sc-c.sel{box-shadow:0 0 0 3px var(--ac),0 0 0 6px rgba(99,102,241,.25);z-index:2}
.sc-c.pa{opacity:.55}.sc-c.pa:hover{opacity:1}
.sc-c b{font-weight:700;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sc-c span{font-size:10px;opacity:.75;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sc-c .lt{font-size:13px;font-weight:800;opacity:.85}
.sc-c.au::before{content:"";position:absolute;left:0;top:0;border-style:solid;border-width:10px 10px 0 0;border-color:var(--ac) transparent transparent transparent}
.sc-c .xp{position:absolute;right:4px;bottom:2px;font-size:11px;font-weight:900;color:#1e1b4b}
.sc-c .dt{position:absolute;top:3px;right:3px;width:9px;height:9px;border-radius:50%;background:var(--bad);box-shadow:0 0 0 2px #fff}
.sc-c.h2{background:linear-gradient(90deg,var(--c) 50%,#fff 50%)}
.sc-c.h3{background:linear-gradient(90deg,#fff 50%,var(--c) 50%)}
.sc-c.td-col{box-shadow:inset 0 0 0 1px rgba(0,0,0,.08),0 0 0 2px rgba(79,70,229,.22)}
.sc-t{display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:11px;color:var(--mut);border-bottom:1px solid #eef0f8;line-height:1.2}
.sc-t b{font-size:14px;color:var(--ink)}
.brush .sc-c{cursor:crosshair;touch-action:none}

/* éditeur d'un jour */
.sc-bd{position:fixed;inset:0;z-index:28;background:transparent}
.sc-ed{position:fixed;z-index:30;width:432px;max-width:calc(100vw - 16px);max-height:calc(100vh - 16px);overflow:auto;background:#fff;border-radius:18px;box-shadow:0 24px 70px rgba(30,27,75,.38),0 0 0 1px rgba(30,27,75,.08);padding:14px;animation:sc-pop .12s ease-out}
@keyframes sc-pop{from{opacity:0;transform:translateY(6px) scale(.98)}to{opacity:1;transform:none}}
.sc-ed-h{display:flex;align-items:center;gap:8px;margin-bottom:10px}
.sc-ed-h .sc-av{width:30px;height:30px;font-size:11px}
.sc-ed-h div{min-width:0;flex:1;line-height:1.2}.sc-ed-h b{display:block;color:var(--ink)}.sc-ed-h small{color:var(--mut);font-size:12px}
.sc-x{border:0;background:#f1f2f9;border-radius:50%;width:30px;height:30px;font-size:15px;color:#4b5563;flex:none}.sc-x:hover{background:#e5e7f5}
.sc-lab{display:block;font-size:11px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;color:var(--mut);margin:12px 0 6px}
.sc-row{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
.sc-st{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);background:#fff;border-radius:999px;padding:4px 11px 4px 8px;font-weight:600;font-size:12.5px;color:#1f2937;min-height:32px}
.sc-fr{display:flex;gap:8px;align-items:flex-start;margin-top:7px}.sc-fr>em{flex:none;width:84px;padding-top:9px;font-style:normal;font-size:10.5px;font-weight:800;letter-spacing:.4px;text-transform:uppercase;color:var(--mut)}.sc-fr>.sc-row{flex:1;gap:5px}
.sc-st::before{content:"";width:12px;height:12px;border-radius:50%;background:var(--c);box-shadow:inset 0 0 0 1px rgba(0,0,0,.14);flex:none}
.sc-st:hover{border-color:#a5b4fc;background:#fafaff}
.sc-st.on{border-color:var(--ac);box-shadow:0 0 0 2px rgba(99,102,241,.3);background:#f5f6ff}
.sc-du{border:1px solid var(--line);background:#fff;border-radius:9px;min-width:34px;height:32px;padding:0 8px;font-weight:700;font-size:13px;color:#374151}
.sc-du.on{background:var(--ink);color:#fff;border-color:var(--ink)}
.sc-fg{display:grid;grid-template-columns:1fr 1fr;gap:8px}.sc-fg label{display:flex;flex-direction:column;gap:3px;font-size:11px;font-weight:700;letter-spacing:.3px;text-transform:uppercase;color:var(--mut)}
.sc-fg label.w{grid-column:1/-1}
.sc-ed details{margin-top:10px;border-top:1px solid var(--line);padding-top:8px}.sc-ed summary{cursor:pointer;font-weight:600;color:var(--ac);font-size:13px;padding:4px 0;list-style:none}
.sc-ed summary::-webkit-details-marker{display:none}
.sc-ed .sc-f{display:flex;gap:8px;justify-content:space-between;margin-top:12px}
.sc-cur{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:var(--mut);margin-bottom:2px}.sc-cur i{width:11px;height:11px;border-radius:50%;background:var(--c);box-shadow:inset 0 0 0 1px rgba(0,0,0,.14)}
.sc-warn{margin:8px 0 0;padding:8px 10px;border-radius:10px;background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;font-size:12.5px}

/* fenêtres (mails, fiche, recherche…) */
.sc-md{position:absolute;inset:0;z-index:40;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,.45);padding:16px;animation:sc-fade .12s}
@keyframes sc-fade{from{opacity:0}to{opacity:1}}
.sc-dlg{display:flex;flex-direction:column;width:min(1020px,100%);max-height:100%;background:#fff;border-radius:20px;box-shadow:0 30px 90px rgba(15,23,42,.5);overflow:hidden}
.sc-dlg.sm{width:min(560px,100%)}.sc-dlg.md{width:min(760px,100%)}
.sc-dh{flex:none;display:flex;align-items:center;gap:10px;padding:14px 18px;border-bottom:1px solid var(--line)}
.sc-dh h3{font-size:16px;color:var(--ink);flex:1}
.sc-db{flex:1;min-height:0;overflow:auto;padding:16px 18px;-webkit-overflow-scrolling:touch}
.sc-df{flex:none;display:flex;flex-wrap:wrap;gap:8px;justify-content:flex-end;padding:12px 18px calc(12px + env(safe-area-inset-bottom,0px));border-top:1px solid var(--line);background:#fafaff}
.sc-df .sc-sp{flex:1 1 20px}
.sc-g2{display:grid;grid-template-columns:1fr 1fr;gap:10px 12px}.sc-g2 label,.sc-g1 label{display:flex;flex-direction:column;gap:4px;font-size:11px;font-weight:700;letter-spacing:.3px;text-transform:uppercase;color:var(--mut)}
.sc-g2 .w{grid-column:1/-1}
.sc-prev{border:1px solid var(--line);border-radius:14px;padding:14px;background:#fff;overflow:auto;margin-top:12px;color:#000;font:13px/1.45 Arial,Helvetica,sans-serif}
.sc-h4{font-size:12px;font-weight:800;letter-spacing:.5px;text-transform:uppercase;color:var(--ac);margin:18px 0 8px}.sc-h4:first-child{margin-top:0}
.sc-tg{display:inline-block;border-radius:999px;padding:2px 9px;font-size:11px;font-weight:700;background:var(--acl);color:var(--ac);margin:0 4px 4px 0;white-space:nowrap}
.sc-tg.b1{background:#e0f2fe;color:#075985}.sc-tg.b2{background:#f3e8ff;color:#6b21a8}.sc-tg.b3{background:#e0e7ff;color:#3730a3}

/* disponibilité (matrice + liste) */
.sc-av2{display:grid;grid-template-columns:minmax(330px,430px) minmax(0,1fr);gap:16px;align-items:start}.sc-stk{display:grid;gap:16px;align-content:start;min-width:0}
.sc-cr{padding:9px 0;border-top:1px solid var(--line);font-size:13px;display:grid;gap:1px}.sc-cr:first-of-type{border-top:0}.sc-cr em{font-style:normal;font-size:10.5px;font-weight:800;letter-spacing:.5px;text-transform:uppercase;color:var(--ac2,#4f46e5)}.sc-cr b{font-size:14px}.sc-cr small{color:var(--mut);font-size:12px}.sc-cr span{color:var(--mut);font-size:12px;word-break:break-word}.sc-h5{margin:14px 0 6px;font-size:12px;letter-spacing:.4px;text-transform:uppercase;color:var(--mut)}
.sc-card{background:#fff;border:1px solid var(--line);border-radius:16px;box-shadow:0 10px 30px rgba(30,27,75,.06);padding:14px 14px 16px}
.sc-card h3{font-size:15px;color:var(--ink);margin-bottom:10px;display:flex;align-items:center;gap:8px}
.sc-mx{display:grid;grid-template-columns:50px repeat(6,minmax(0,1fr));gap:4px;font-size:12px}
.sc-mx .h{font-weight:800;color:var(--ink);text-align:center;padding:5px 0;background:#f4f5fb;border-radius:8px}
.sc-mx .l{display:flex;align-items:center;font-weight:700;color:var(--ink)}
.sc-mx .m{display:grid;place-items:center;height:32px;border:0;border-radius:8px;background:var(--c);font-weight:800;color:#1f2937;box-shadow:inset 0 0 0 1px rgba(0,0,0,.08);padding:0}
.sc-mx .m:hover{box-shadow:inset 0 0 0 2px var(--ink)}
.sc-mx .m.z{color:rgba(0,0,0,.38);font-weight:600}
.sc-gl{display:flex;align-items:center;gap:8px;margin:14px 0 6px;font-weight:800;font-size:12px;letter-spacing:.5px;text-transform:uppercase;color:var(--ink)}
.sc-gl i{width:14px;height:14px;border-radius:5px;background:var(--c);box-shadow:inset 0 0 0 1px rgba(0,0,0,.12)}
.sc-pr{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:12px;border:1px solid var(--line);border-left:5px solid var(--c);background:#fff;margin-bottom:6px}
.sc-pr .sc-nt{flex:1}.sc-pr .tx{margin-left:auto;text-align:right;font-size:12.5px;line-height:1.25;color:#1f2937;max-width:46%}.sc-pr .tx small{display:block;color:var(--mut)}
.sc-pr.as .sc-nt b{color:#b91c1c}
.sc-cg{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:12px}
.sc-pc{display:flex;flex-direction:column;gap:8px;background:#fff;border:1px solid var(--line);border-radius:16px;padding:12px 14px;box-shadow:0 6px 18px rgba(30,27,75,.05);cursor:pointer}
.sc-pc:hover{border-color:#a5b4fc}.sc-pc.off{opacity:.55}
.sc-pc .t{display:flex;align-items:center;gap:10px}
.sc-bar2{display:flex;flex-wrap:wrap;gap:8px 10px;align-items:center;margin-bottom:12px}

/* My schedule (engineer) */
.sc-me{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:16px;align-items:start;max-width:1100px;margin:0 auto}
.sc-hero{border-radius:18px;padding:16px 18px;color:#1f2937;background:var(--c);box-shadow:inset 0 0 0 1px rgba(0,0,0,.08),0 10px 30px rgba(30,27,75,.1)}
.sc-hero small{display:block;font-weight:700;letter-spacing:.5px;text-transform:uppercase;opacity:.7}.sc-hero h2{font-size:24px;margin:2px 0 4px}.sc-hero p{font-size:13.5px}
.sc-cal{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:5px}
.sc-cal .w{font-size:11px;font-weight:800;text-align:center;color:var(--mut);text-transform:uppercase;padding:2px 0}
.sc-cal .d{position:relative;min-height:62px;border-radius:11px;padding:5px 5px 4px;background:var(--c);box-shadow:inset 0 0 0 1px rgba(0,0,0,.08);font-size:11px;line-height:1.15;color:#1f2937;overflow:hidden}
.sc-cal .d>i{font-style:normal;font-weight:800;font-size:12px;display:block;margin-bottom:2px}
.sc-cal .d.o{opacity:.4}.sc-cal .d.td{box-shadow:inset 0 0 0 2px var(--ac),0 0 0 2px rgba(79,70,229,.25)}
.sc-cal .d b{display:block;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sc-cal .d span{opacity:.75;font-size:10px;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sc-stat{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:10px}.sc-stat div{background:#f7f8ff;border-radius:12px;padding:8px 6px;text-align:center}
.sc-stat b{display:block;font-size:20px;color:var(--ink)}.sc-stat small{font-size:11px;color:var(--mut)}
.sc-wk{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:4px 12px;font-size:13px;margin-top:8px}.sc-wk>span:nth-child(3n+1){white-space:nowrap}.sc-wk .h{font-size:11px;font-weight:700;text-transform:uppercase;color:var(--mut)}

/* modèles de types (fiche) */
.sc-tq{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px}
.sc-tq div{display:flex;align-items:center;justify-content:space-between;gap:6px;border:1px solid var(--line);border-radius:12px;padding:5px 6px 5px 10px;font-weight:800;color:var(--ink)}
.sc-tq .sg{display:flex;gap:2px}.sc-tq .sg button{border:1px solid var(--line);background:#fff;border-radius:8px;padding:0 7px;height:28px;font-size:11px;font-weight:700;color:#6b7280}
.sc-tq .sg button.on{background:var(--ac);color:#fff;border-color:var(--ac)}
.sc-tq div.has{background:#f7f8ff;border-color:#c7d2fe}

/* messages */
.sc-toast{position:absolute;left:50%;bottom:calc(22px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);z-index:60;max-width:calc(100vw - 32px);padding:10px 16px;border-radius:12px;background:#1e1b4b;color:#fff;font-weight:600;font-size:13px;box-shadow:0 12px 34px rgba(0,0,0,.3);animation:sc-pop .15s}
.sc-toast.bad{background:#be123c}
.sc-sk{padding:60px;text-align:center;color:var(--mut)}

/* tablette */
@media(max-width:1100px){#sc-root{--nw:200px;--cw:66px}.sc-av2{grid-template-columns:1fr}.sc-me{grid-template-columns:1fr}}
/* téléphone */
@media(max-width:760px){
#sc-root{--nw:112px;--cw:54px;--rh:52px}
.sc-top{padding-left:10px;padding-right:10px;flex-wrap:wrap;gap:6px}.sc-top h1{font-size:15px;order:1}.sc-top .sc-sp{order:2}.sc-top .x{order:3}
.sc-top .sc-tabs{order:5;width:100%}.sc-tabs button{flex:1;padding:8px 6px}
.sc-b{padding:8px 11px}.sc-top .sc-b span{display:none}
.sc-bar{padding:10px 10px 4px}.sc-kpi,.sc-leg{padding-left:10px;padding-right:10px}.sc-main{padding:0 8px 8px}.sc-page{padding:10px 10px 40px}
.sc-rng{font-size:14px;flex:1 1 118px;min-width:118px;overflow:hidden;text-overflow:ellipsis}.sc-btn .tx{display:none}.sc-btn{padding:0 10px;height:36px}
.pc-only{display:none!important}.ph-only{display:inline-flex!important}
.sc-fil{display:none;flex:1 1 100%;order:6;flex-wrap:wrap;gap:8px}.sc-fil.open{display:flex}
.sc-bar{gap:8px 8px}.sc-nav button{min-width:32px;height:32px;padding:0 8px}.sc-seg button{padding:6px 9px;font-size:12.5px}
.sc-kpi,.sc-leg{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none}.sc-kpi::-webkit-scrollbar,.sc-leg::-webkit-scrollbar{display:none}.sc-kpi>*,.sc-leg>*{flex:none}
.sc-top .sc-sp~*{order:3}
#sc-root .sc-q{max-width:none;flex:1 1 100%}
.sc-av{width:28px;height:28px;font-size:11px}.sc-nm{padding:5px 6px 5px 8px;gap:7px}.sc-nm .sc-av{display:none}.sc-nt b{white-space:normal;font-size:13px;line-height:1.15}.sc-nt small{white-space:normal;font-size:11px}
.sc-ed{left:0!important;right:0!important;bottom:0!important;top:auto!important;width:auto;max-width:none;max-height:88vh;border-radius:22px 22px 0 0;padding:14px 14px calc(16px + env(safe-area-inset-bottom,0px))}
.sc-bd{background:rgba(15,23,42,.35)}.sc-fr>em{width:66px;font-size:10px}.sc-du{min-width:32px;padding:0 6px}
.sc-md{padding:0;align-items:flex-end}.sc-dlg,.sc-dlg.sm,.sc-dlg.md{width:100%;max-height:96%;border-radius:22px 22px 0 0}
.sc-g2{grid-template-columns:1fr}.sc-dlg.sh .sc-g2,.sc-g2.sc-wkg{grid-template-columns:1fr 1fr}.sc-cal .d{min-height:54px;padding:3px}.sc-cal .d b{font-size:10px}.sc-cal .d span{display:none}
.sc-pr .tx{max-width:52%}.sc-cg{grid-template-columns:1fr}.sc-mx{gap:3px}.sc-prev{padding:8px}
}
@media(min-width:1400px){#sc-root{--cw:84px}}
@media print{#sc-root{position:static}}
`;

// ═══ Vues : coque, barre du haut, planning (grille) ═══════════════════════════════
const IC = {
  undo: '<svg viewBox="0 0 24 24"><path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/></svg>',
  find: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  mail: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  cfg: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  dl: '<svg viewBox="0 0 24 24"><path d="M12 4v11m0 0 4-4m-4 4-4-4M5 20h14"/></svg>',
  log: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  cal: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  fil: '<svg viewBox="0 0 24 24"><path d="M3 5h18l-7 8.5V20l-4-2v-4.5z"/></svg>',
  more: '<svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.7" fill="currentColor"/><circle cx="12" cy="12" r="1.7" fill="currentColor"/><circle cx="19" cy="12" r="1.7" fill="currentColor"/></svg>'
};
const SEC = { eng: 'Engineers', ops: 'Ops team' };

function buildRoot() {
  closeRoot();
  root = document.createElement('div'); root.id = 'sc-root';
  root.innerHTML = '<style>' + CSS + '</style><div id="sc-top"></div><div id="sc-body"></div><div id="sc-ov"></div><div id="sc-mo"></div>';
  document.body.appendChild(root);
  wire();
}
function closeRoot() {
  if (S) { (S.offs || []).forEach(f => { try { f(); } catch (e) { } }); S.offs = []; S.subs = {}; }
  if (root) { root.remove(); root = null; }
  document.removeEventListener('keydown', onKey, true); clearTimeout(syncT); cancelAnimationFrame(raf); raf = 0; G = null;
}

function renderAll() {
  if (!root) return;
  needMonths().forEach(watchMonth);
  renderTop();
  const body = root.querySelector('#sc-body');
  const gw = body.querySelector('.sc-gw'), pg = body.querySelector('.sc-page'), q = body.querySelector('.sc-q');
  const keep = { gl: gw ? gw.scrollLeft : 0, gt: gw ? gw.scrollTop : 0, pt: pg ? pg.scrollTop : 0, f: q && document.activeElement === q ? [q.selectionStart, q.selectionEnd] : null };
  body.innerHTML = S.err ? errBox() + (S.tab === 'me' ? viewMe() : '') : S.loading ? '<div class="sc-sk">Loading the schedule…</div>'
    : S.tab === 'plan' ? viewPlan() : S.tab === 'avail' ? viewAvail() : S.tab === 'engs' ? viewEngs() : viewMe();
  const g2 = body.querySelector('.sc-gw'), p2 = body.querySelector('.sc-page'), q2 = body.querySelector('.sc-q');
  if (g2) { g2.scrollLeft = keep.gl; g2.scrollTop = keep.gt; if (S.scrollTo) { const c = g2.querySelector('[data-hd="' + S.scrollTo + '"]'); if (c) g2.scrollLeft = Math.max(0, c.offsetLeft - parseFloat(getComputedStyle(root).getPropertyValue('--nw')) - 8); S.scrollTo = ''; } }
  if (p2) p2.scrollTop = keep.pt;
  if (q2 && keep.f) { q2.focus(); try { q2.setSelectionRange(keep.f[0], keep.f[1]); } catch (e) { } }
  if (S.ed) drawEd(true);
  if (S.md === 'sh' && S.sh) fillPrev();
}
const errBox = () => '<div class="sc-note bad"><b>Schedule not available.</b> ' + esc(S.err) + (/permission/i.test(S.err) ? '<br>Publish the Firebase rule <b>R2</b> (node <code>schedule</code>), then reopen this page.' : '') + '</div>';

function renderTop() {
  const tabs = S.ops ? [['plan', 'Schedule'], ['avail', 'Availability'], ['engs', 'Engineers']] : [];
  const mine = S.ops && S.engs[S.uid] && S.engs[S.uid].on !== 0;
  root.querySelector('#sc-top').innerHTML = '<header class="sc-top"><button class="sc-b" data-a="exit" title="Back to the app">←&nbsp;<span>Menu</span></button><h1>' + (S.tab === 'me' ? 'My schedule' : 'Engineer Schedule') + '</h1>' +
    (tabs.length ? '<nav class="sc-tabs">' + tabs.map(([k, l]) => '<button data-a="tab" data-v="' + k + '" class="' + (S.tab === k ? 'on' : '') + '">' + l + '</button>').join('') + '</nav>' : '') +
    '<span class="sc-sp"></span>' + (mine ? '<button class="sc-b" data-a="tab" data-v="' + (S.tab === 'me' ? 'plan' : 'me') + '">' + (S.tab === 'me' ? 'Planner' : 'My view') + '</button>' : '') +
    (S.ops ? '<button class="sc-b" data-a="bo" title="Back Office">🗂&nbsp;<span>Back Office</span></button>' : '') +
    '<button class="sc-b x" data-a="exit" aria-label="Close">✕</button></header>';
}

// ── Fenêtre affichée ──
const winOf = () => {
  if (S.span === 0) { const m = mon(S.start), a = m + '-01', b = addD(addM(m, 1) + '-01', -1); return { a, b, days: dayList(a, b) }; }
  const a = S.start, b = addD(a, S.span - 1); return { a, b, days: dayList(a, b) };
};
const focusDay = w => { const t = today(); return t >= w.a && t <= w.b ? t : w.a; };

function filtered(w) {
  const q = norm(S.q).split(' ').filter(Boolean), f = focusDay(w);
  return people(S.grp).filter(p => {
    if (S.reg && regOf(p) !== S.reg) return false;
    if (S.typ && !(p.q || {})[S.typ]) return false;
    if (q.length) { const hay = norm([p.n, p.full, p.base, p.icao, p.iata, p.fn, regOf(p), catOf(p.q), Object.keys(p.q || {}).join(' ')].join(' ')); if (!q.every(x => hay.includes(x))) return false; }
    if (S.kpi) { const fm = eff(p.id, f).fam; if (S.kpi === 'off' ? (fm !== 'off' && fm !== 'enf') : fm !== S.kpi) return false; }
    return true;
  });
}

// ── Conflits (Back Office ↔ planning) ──
function conflicts() {
  const out = [], t = today(), a = addD(t, -1), b = addD(t, 60);
  Object.entries(S.dv).forEach(([uid, days]) => {
    const c = S.engs[uid]; if (!c || c.on === 0) return; const g = c.g === 'ops' ? 'ops' : 'eng', seen = {};
    Object.entries(days).forEach(([d, v]) => {
      if (d < a || d > b) return; const st = stored(uid, d);
      if (st && !st.a && ST[g][st.s] && !isDuty(ST[g][st.s][1]) && (v.s === 'E' || v.s === 'SB')) out.push({ k: 'off', uid, d, t: 'Allocated on ' + v.w.join(', ') + ' but marked “' + ST[g][st.s][0] + '”' });
      if (v.w.length > 1 && v.c.includes(' / ')) out.push({ k: 'clash', uid, d, t: 'Two jobs in different places: ' + v.c });
      const sk = v.t + v.w.join(); if (v.t && g === 'eng' && !(c.q || {})[v.t] && !seen[sk]) { seen[sk] = 1; out.push({ k: 'type', uid, d, t: 'Not rated on ' + v.t + ' (' + v.w.join(', ') + ')' }); }
    });
  });
  return out.sort((x, y) => x.d.localeCompare(y.d));
}

function cellHtml(p, d, w, cf) {
  const e = eff(p.id, d), st = ST[e.g][e.s], lab = label(e), t = today();
  const inner = e.c || e.p ? (e.c ? '<b>' + esc(e.c) + '</b>' : '') + (e.p ? '<span>' + esc(projList(e)) + '</span>' : '') : st[2] ? '<b class="lt">' + esc(st[2]) + '</b>' : '';
  const half = e.s === 'MD' ? ' h2' : e.s === 'AD' ? ' h3' : '', sel = S.sel && S.sel.uids.includes(p.id) && S.sel.dates.includes(d) ? ' sel' : '';
  const tip = (p.n || '') + ' · ' + fshort(d) + ' · ' + st[0] + (lab ? ' · ' + lab : '') + (e.n ? ' — ' + e.n : '') + (e.auto ? ' (from Back Office)' : '') + (e.x ? ' · extra work' + (e.h ? ' ' + e.h + ' h' : '') : '');
  return '<div class="sc-c f-' + e.fam + half + (e.auto ? ' au' : '') + (d < t ? ' pa' : '') + (d === t ? ' td-col' : '') + sel + '" data-a="cell" data-u="' + p.id + '" data-d="' + d + '" title="' + esc(tip) + '">' +
    inner + (e.x ? '<i class="xp">+</i>' : '') + (cf[p.id + '|' + d] ? '<i class="dt"></i>' : '') + '</div>';
}

function viewPlan() {
  const w = winOf(), list = filtered(w), t = today(), f = focusDay(w), cf = {}, cfl = conflicts(), allP = people(S.grp);
  cfl.forEach(c => { cf[c.uid + '|' + c.d] = 1; });
  const cnt = { on: 0, eng: 0, off: 0, un: 0 }; allP.forEach(p => { const fm = eff(p.id, f).fam; cnt[fm === 'enf' ? 'off' : fm]++; });
  const hasOps = Object.values(S.engs).some(c => c.g === 'ops'), hasEng = Object.values(S.engs).some(c => (c.g || 'eng') === 'eng');
  const types = S.grp === 'eng' ? '<select class="sc-sel" data-a="typ" aria-label="Aircraft type"><option value="">Any type</option>' + TYPES.map(x => '<option' + (S.typ === x ? ' selected' : '') + '>' + x + '</option>').join('') + '</select>' +
    '<select class="sc-sel" data-a="reg" aria-label="Region"><option value="">All regions</option>' + REGIONS.map(x => '<option' + (S.reg === x ? ' selected' : '') + '>' + x + '</option>').join('') + '</select>' : '';
  const rng = S.span === 0 ? monthName(mon(S.start)) : rangeTxt(w.a, w.b);
  const fAct = !!(S.q || S.typ || S.reg || S.kpi);
  let h = '<div class="sc-bar"><div class="sc-nav"><button data-a="nav" data-v="-1" aria-label="Previous">‹</button><button data-a="today">Today</button><button data-a="nav" data-v="1" aria-label="Next">›</button></div>' +
    '<div class="sc-rng">' + rng + '</div>' +
    '<div class="sc-seg">' + [[10, '10 days'], [14, '2 weeks'], [0, 'Month']].map(([v, l]) => '<button data-a="span" data-v="' + v + '" class="' + (S.span === v ? 'on' : '') + '">' + l + '</button>').join('') + '</div>' +
    '<div class="sc-act"><button class="sc-btn" data-a="undo" title="Undo (Ctrl+Z)"' + (S.undo.length ? '' : ' disabled') + '>' + IC.undo + '<span class="tx">Undo</span></button>' +
    (S.grp === 'eng' ? '<button class="sc-btn pc-only" data-a="find" title="Find an engineer for a job">' + IC.find + '<span class="tx">Find</span></button>' : '') +
    '<button class="sc-btn p" data-a="share" title="Mails and exports">' + IC.mail + '<span class="tx">Send / Export</span></button>' +
    '<button class="sc-btn ph-only' + (S.fil || fAct ? ' on' : '') + '" data-a="fil" title="Search and filters">' + IC.fil + '</button>' +
    '<button class="sc-btn pc-only" data-a="log" title="History">' + IC.log + '</button><button class="sc-btn pc-only" data-a="cfg" title="Settings">' + IC.cfg + '</button>' +
    '<button class="sc-btn ph-only" data-a="more" title="More">' + IC.more + '</button></div>' +
    '<div class="sc-fil' + (S.fil ? ' open' : '') + '">' + (hasOps && hasEng ? '<div class="sc-seg">' + ['eng', 'ops'].map(g => '<button data-a="grp" data-v="' + g + '" class="' + (S.grp === g ? 'on' : '') + '">' + SEC[g] + '</button>').join('') + '</div>' : '') +
    '<input class="sc-q" type="search" placeholder="Search name, base, type…" value="' + esc(S.q) + '" data-a="q" autocomplete="off">' + types + '</div></div>';
  h += '<div class="sc-kpi"><span style="font-size:12px;color:var(--mut);font-weight:600">' + (f === t ? 'Today' : fshort(f)) + '</span>' +
    [['on', S.grp === 'eng' ? 'Available' : 'On duty'], ['eng', 'Engaged'], ['off', 'Off duty'], ['un', 'Unavailable']].filter(([k]) => S.grp === 'eng' || k !== 'eng').map(([k, l]) => '<button class="sc-chip f-' + k + (S.kpi === k ? ' on' : '') + '" data-a="kpi" data-v="' + k + '"><i></i>' + l + ' <b>' + cnt[k] + '</b></button>').join('') +
    (cfl.length ? '<button class="sc-chip bad" data-a="conf">⚠ ' + cfl.length + ' conflict' + (cfl.length > 1 ? 's' : '') + '</button>' : '') + '</div>';
  h += '<div class="sc-leg"><em>Paint</em>' + BRUSH[S.grp].map(k => '<button class="sc-chip f-' + ST[S.grp][k][1] + (S.brush === k ? ' on' : '') + '" data-a="brush" data-v="' + k + '"><i></i>' + ST[S.grp][k][0] + '</button>').join('') +
    '<button class="sc-chip' + (S.brush === '-' ? ' on' : '') + '" data-a="brush" data-v="-"><i style="background:#fff"></i>Clear</button>' +
    (S.brush ? '<span>Tap or drag over days · <a href="#" data-a="brush" data-v="" style="color:var(--ac);font-weight:700">stop</a></span>' : '<span><i class="sc-tri"></i>filled from the Back Office</span>') + '</div>';
  if (!allP.length) return h + emptyPlan();
  const tot = S.span === 0 ? ' tot' : '';
  h += '<div class="sc-main"><div class="sc-gw' + (S.brush ? ' brush' : '') + '"><div class="sc-grid' + tot + '" style="--cols:' + w.days.length + '">';
  h += '<div class="sc-hd co">' + list.length + (S.grp === 'eng' ? ' engineer' + (list.length === 1 ? '' : 's') : ' in the ops team') + '</div>';
  w.days.forEach(d => { h += '<div class="sc-hd' + (isWE(d) ? ' we' : '') + (d === t ? ' td' : '') + '" data-hd="' + d + '">' + WD[wd(d)] + '<b>' + (+dd(d)) + '</b>' + (S.span !== 0 || dd(d) === '01' ? MN[+d.slice(5, 7) - 1] : '') + '</div>'; });
  if (tot) h += '<div class="sc-hd">Duty<b>Σ</b></div><div class="sc-hd">Extra<b>+</b></div>';
  const typeWarn = {}; cfl.forEach(c => { if (c.k === 'type') typeWarn[c.uid] = c.t; });
  list.forEach(p => {
    h += '<div class="sc-nm" data-a="who" data-u="' + p.id + '" title="' + esc([p.full || p.n, p.fn, p.base, catOf(p.q)].filter(Boolean).join(' · ')) + '"><span class="sc-av" style="--h:' + hue(p.id) + '">' + esc(inits(p.n)) + '</span><span class="sc-nt"><b>' + esc(p.n || '?') + '</b><small>' +
      (S.grp === 'eng' ? esc(p.base || '—') + (catOf(p.q) ? ' · <i>' + catOf(p.q) + '</i>' : '') : 'Ops team') + '</small></span>' + (typeWarn[p.id] ? '<span class="sc-wr" title="' + esc(typeWarn[p.id]) + '">⚠</span>' : '') + '</div>';
    w.days.forEach(d => { h += cellHtml(p, d, w, cf); });
    if (tot) { const s = stats(p.id, w.a, w.b); h += '<div class="sc-t"><b>' + (Math.round(s.duty * 2) / 2) + '</b></div><div class="sc-t"><b>' + (s.plus || '–') + '</b>' + (s.hrs ? '<small>' + s.hrs + ' h</small>' : '') + '</div>'; }
  });
  if (!list.length) h += '<div style="grid-column:1/-1;padding:34px;text-align:center;color:var(--mut)">No one matches these filters.</div>';
  return h + '</div></div></div>';
}
const emptyPlan = () => '<div class="sc-empty"><h3>No one in the schedule yet</h3>The schedule shows the engineers you add in <b>Engineers</b>. Import your engineers file once (base, FN number, licences, aircraft types), or add them one by one.<br>' +
  '<button class="sc-btn p" data-a="import">' + IC.dl + ' Import engineers file (.json)</button><button class="sc-btn" data-a="tab" data-v="engs">' + IC.plus + ' Open Engineers</button></div>';

// ═══ Interactions : écriture, éditeur d'un jour, sélection, pinceau, clavier, événements ═══
const A = {}, Oi = {}, Oc = {};                                  // actions : clic · saisie · changement
const phone = () => window.matchMedia('(max-width:760px)').matches;
const $ov = () => root && root.querySelector('#sc-ov'), $mo = () => root && root.querySelector('#sc-mo');
const dn = uid => (S.engs[uid] || {}).n || (S.roster[uid] || {}).name || '?';
const SHORT = { eng: { MD: 'AM duty', AD: 'PM duty', A: 'Long-term', F: 'Flexible off', N: 'Enforced off', I: 'Outside FAST', S: 'Sick' }, ops: { MD: 'AM duty', AD: 'PM duty', U: 'Supervisor', MG: 'Manager on duty', B: 'Substitution', W: 'Duty swap' } };
const gOf = uid => (S.engs[uid] || {}).g === 'ops' ? 'ops' : 'eng';

// ── Écrire une liste de jours : on part de la valeur affichée, on applique fn, on enregistre en 1 seul geste annulable ──
function normCell(uid, d, c) {
  if (!c.s) c.s = defOf(uid, d);
  const bare = !c.c && !c.p && !c.n && !c.x && !(+c.h);
  return c.s === defOf(uid, d) && bare && !(S.dv[uid] || {})[d] ? null : c;          // jour « par défaut » : on n'enregistre rien
}
async function patch(list, fn, text) {
  const out = list.map(([uid, d]) => {
    const e = eff(uid, d), st = stored(uid, d);
    const base = st && !(st.a && S.ops) ? Object.assign({}, st) : { s: e.s, c: e.c, p: e.p, n: e.n, x: e.x, h: e.h };
    delete base.a; return [uid, d, normCell(uid, d, fn(base, e) || base)];
  });
  await commit(out, text);
}
function what(list, st) {
  const us = [...new Set(list.map(x => x[0]))], ds = list.map(x => x[1]).sort(), a = ds[0], b = ds[ds.length - 1];
  return (us.length === 1 ? dn(us[0]) : us.length + ' people') + ' · ' + (a === b ? fdate(a) : fdate(a) + '–' + fdate(b)) + (st ? ' · ' + st : '');
}
function setSt(c, k, g) {
  c.s = k; const f = ST[g][k][1];
  if (f !== 'on' && f !== 'eng') { delete c.c; delete c.p; delete c.x; delete c.h; }      // pas de ville / projet sur un jour off
  return c;
}
async function brushApply(list) {
  const k = S.brush, g = S.grp; if (!k) return;
  if (k === '-') await commit(list.map(([u, d]) => [u, d, null]), what(list, 'cleared'));
  else if (ST[g][k]) await patch(list, c => setSt(c, k, g), what(list, ST[g][k][0]));
  paint();
}

// ── Éditeur d'un jour (bulle sur PC, feuille du bas sur téléphone) — chaque geste est enregistré tout de suite ──
function edTargets() { const E = S.ed; return E.mode === 'sel' ? E.targets : dayList(E.d, addD(E.d, S.dur - 1)).map(d => [E.u, d]); }
function openEd(targets, el, mode) {
  closeMd(); const r = el.getBoundingClientRect();
  S.dur = 1; S.ed = { mode, targets, u: targets[0][0], d: targets[0][1], r: { l: r.left, t: r.top, b: r.bottom, w: r.width } };
  syncSel(); drawEd();
}
function closeEd() { if (!S || !S.ed) return; S.ed = null; S.sel = null; const o = $ov(); if (o) o.innerHTML = ''; paint(); }
function syncSel() { const T = S.ed ? edTargets() : []; S.sel = T.length ? { uids: [...new Set(T.map(t => t[0]))], dates: [...new Set(T.map(t => t[1]))] } : null; paint(); }
function edHtml() {
  const E = S.ed, T = edTargets(), g = gOf(E.u), es = T.map(([u, d]) => eff(u, d)), states = new Set(es.map(e => e.s));
  const same = k => new Set(es.map(e => e[k])).size === 1 ? es[0][k] : '', mixed = k => new Set(es.map(e => e[k])).size > 1;
  const us = [...new Set(T.map(t => t[0]))], ds = T.map(t => t[1]).sort(), a = ds[0], b = ds[ds.length - 1], nd = new Set(ds).size;
  const av = us.length === 1 ? '<span class="sc-av" style="--h:' + hue(us[0]) + '">' + esc(inits(dn(us[0]))) + '</span>' : '';
  const autos = es.filter(e => e.auto), ovr = es.filter(e => e.man && e.dv), wos = [...new Set(es.flatMap(e => (e.dv && e.dv.w) || []))];
  const fld = (f, lab, ph, cls) => '<label' + (cls ? ' class="' + cls + '"' : '') + '>' + lab + '<input data-f="' + f + '" maxlength="40" placeholder="' + (mixed(f) ? '(mixed)' : ph) + '" value="' + esc(same(f)) + '" autocomplete="off"></label>';
  return '<div class="sc-ed-h">' + av + '<div><b>' + (us.length === 1 ? esc(dn(us[0])) : us.length + ' people') + '</b><small>' + (a === b ? fshort(a) : fshort(a) + ' → ' + fshort(b) + ' · ' + nd + ' days') + '</small></div><button class="sc-x" data-a="edx" aria-label="Close">✕</button></div>' +
    (autos.length ? '<div class="sc-warn">From the Back Office' + (wos.length ? ' · <b>' + esc(wos.join(', ')) + '</b>' : '') + '. Changing it here overrides it.</div>' : '') +
    (ovr.length ? '<div class="sc-warn">Overrides the Back Office' + (wos.length ? ' (' + esc(wos.join(', ')) + ')' : '') + '.</div>' : '') +
    (E.mode === 'one' ? '<div class="sc-fr"><em>Days</em><div class="sc-row">' + [1, 2, 3, 4, 5, 7, 10, 14].map(n => '<button class="sc-du' + (S.dur === n ? ' on' : '') + '" data-a="edur" data-v="' + n + '">' + n + '</button>').join('') + '</div></div>' : '') +
    ROWS[g].map(([lab, codes]) => '<div class="sc-fr"><em>' + lab + '</em><div class="sc-row">' + codes.map(k => '<button class="sc-st f-' + ST[g][k][1] + (states.size === 1 && states.has(k) ? ' on' : '') + '" data-a="edst" data-v="' + k + '" title="' + esc(ST[g][k][0]) + '">' + esc((SHORT[g] || {})[k] || ST[g][k][0]) + '</button>').join('') + '</div></div>').join('') +
    '<span class="sc-lab">Details</span><div class="sc-fg">' + fld('c', 'City', 'e.g. Rome') + fld('p', 'Project', 'e.g. 87039') + fld('n', 'Note (the engineer sees it)', 'Optional', 'w') + '</div>' +
    '<details' + (es.some(e => e.x) ? ' open' : '') + '><summary>Extra work</summary><div class="sc-fg" style="margin-top:8px;align-items:end"><label style="flex-direction:row;align-items:center;gap:8px;text-transform:none;font-size:13px;letter-spacing:0;color:var(--tx)"><input type="checkbox" data-f="x"' + (es.every(e => e.x) ? ' checked' : '') + '> Worked extra (+)</label>' +
    '<label>Hours<input type="number" inputmode="decimal" min="0" max="24" step="0.5" data-f="h" value="' + (same('h') || '') + '"></label></div></details>' +
    '<div class="sc-f"><button class="sc-btn d" data-a="edreset">' + (autos.length || ovr.length ? 'Back to automatic' : 'Clear') + '</button><button class="sc-btn p" data-a="edx">Done</button></div>';
}
function drawEd(soft) {
  const o = $ov(), E = S && S.ed; if (!o || !E) return;
  const old = o.querySelector('.sc-ed'), ae = document.activeElement;
  if (soft && old && ae && old.contains(ae) && /^(INPUT|TEXTAREA)$/.test(ae.tagName)) return;      // on ne dérange pas une saisie en cours
  const sc = old ? old.scrollTop : 0;
  o.innerHTML = (phone() ? '<div class="sc-bd" data-a="edx"></div>' : '') + '<div class="sc-ed" role="dialog">' + edHtml() + '</div>';
  const ed = o.querySelector('.sc-ed'); ed.scrollTop = sc;
  if (!phone()) {
    const w = ed.offsetWidth, h = ed.offsetHeight, vw = innerWidth, vh = innerHeight, r = E.r, clx = v => Math.max(8, Math.min(vw - w - 8, v)), cly = v => Math.max(8, Math.min(vh - h - 8, v));
    const cand = [[clx(r.l + r.w / 2 - w / 2), r.b + 8], [clx(r.l + r.w / 2 - w / 2), r.t - h - 8], [r.l + r.w + 8, cly(r.t + (r.b - r.t) / 2 - h / 2)], [r.l - w - 8, cly(r.t + (r.b - r.t) / 2 - h / 2)]];
    const fit = cand.find(([x, y]) => x >= 8 && y >= 8 && x + w <= vw - 8 && y + h <= vh - 8) || [clx(r.l + r.w + 8), cly(r.b + 8)];      // jamais par-dessus la cellule si on peut l'éviter
    ed.style.left = fit[0] + 'px'; ed.style.top = fit[1] + 'px';
  }
}
A.edx = () => closeEd();
A.edur = el => { S.dur = +el.dataset.v || 1; syncSel(); drawEd(); };
A.edst = async el => { const T = edTargets(), k = el.dataset.v, g = gOf(S.ed.u); await patch(T, c => setSt(c, k, g), what(T, ST[g][k][0])); drawEd(true); };
A.edreset = async () => { const T = edTargets(); await commit(T.map(([u, d]) => [u, d, null]), what(T, 'reset')); drawEd(true); };
async function edField(el) {
  if (!S.ed) return;
  const T = edTargets(), f = el.dataset.f, v = el.type === 'checkbox' ? (el.checked ? 1 : 0) : f === 'p' ? el.value.replace(/#/g, '').trim() : el.value.trim();
  await patch(T, c => { if (f === 'h') { if (+v) c.h = +v; else delete c.h; } else if (v) c[f] = v; else delete c[f]; return c; }, what(T, ({ c: 'city', p: 'project', n: 'note', x: 'extra work', h: 'hours' })[f]));
  drawEd(true);
}

// ── Gestes sur la grille : clic · glisser pour sélectionner (souris) · pinceau (souris et tactile) ──
let G = null;
const cellAt = (x, y) => { const e = document.elementFromPoint(x, y); return e && e.closest ? e.closest('.sc-c[data-a="cell"]') : null; };
function rectOf(g, c1) {
  const i0 = g.rows.indexOf(g.u), i1 = g.rows.indexOf(c1.dataset.u), j0 = g.cols.indexOf(g.d), j1 = g.cols.indexOf(c1.dataset.d);
  if (i0 < 0 || i1 < 0 || j0 < 0 || j1 < 0) return [[g.u, g.d]];
  const o = []; g.rows.slice(Math.min(i0, i1), Math.max(i0, i1) + 1).forEach(u => g.cols.slice(Math.min(j0, j1), Math.max(j0, j1) + 1).forEach(d => o.push([u, d]))); return o;
}
function mark(keys) { root.querySelectorAll('.sc-c.sel').forEach(c => { if (!keys.has(c.dataset.u + '|' + c.dataset.d)) c.classList.remove('sel'); }); root.querySelectorAll('.sc-c').forEach(c => { if (keys.has(c.dataset.u + '|' + c.dataset.d)) c.classList.add('sel'); }); }
function onPointerDown(e) {
  if (!S || !S.ops) return;
  const cell = e.target.closest && e.target.closest('.sc-c[data-a="cell"]');
  if (S.ed && !e.target.closest('.sc-ed') && !cell && !e.target.closest('.sc-bd')) closeEd();
  if (!cell || (e.pointerType === 'mouse' && e.button !== 0)) return;
  const grid = cell.closest('.sc-grid');
  G = { cell, u: cell.dataset.u, d: cell.dataset.d, x: e.clientX, y: e.clientY, type: e.pointerType, moved: false, cur: null, brush: S.brush, painted: new Map(),
    rows: [...grid.querySelectorAll('.sc-nm')].map(n => n.dataset.u), cols: [...grid.querySelectorAll('.sc-hd[data-hd]')].map(h => h.dataset.hd) };
  if (G.brush) gestPaint(cell);
  window.addEventListener('pointermove', gestMove); window.addEventListener('pointerup', gestEnd); window.addEventListener('pointercancel', gestCancel);
}
function gestPaint(c) { const k = c.dataset.u + '|' + c.dataset.d; if (G.painted.has(k)) return; G.painted.set(k, [c.dataset.u, c.dataset.d]); c.classList.add('sel'); }
function gestMove(e) {
  if (!G) return; const c = cellAt(e.clientX, e.clientY);
  if (G.brush) { if (c) gestPaint(c); return; }
  if (G.type === 'touch') return;
  if (!G.moved && Math.hypot(e.clientX - G.x, e.clientY - G.y) < 6) return;
  G.moved = true; if (c && c !== G.cur) { G.cur = c; mark(new Set(rectOf(G, c).map(t => t[0] + '|' + t[1]))); }
}
function gestOff() { window.removeEventListener('pointermove', gestMove); window.removeEventListener('pointerup', gestEnd); window.removeEventListener('pointercancel', gestCancel); }
function gestCancel() { gestOff(); const g = G; G = null; if (g && g.brush && g.painted.size) paint(); }
function gestEnd(e) {
  gestOff(); const g = G; G = null; if (!g || !S) return;
  if (g.brush) { S.noclick = Date.now(); const l = [...g.painted.values()]; if (l.length) brushApply(l); return; }
  if (g.moved && g.cur) { S.noclick = Date.now(); S.anchor = { u: g.u, d: g.d }; openEd(rectOf(g, g.cur), g.cur, 'sel'); }
}
// Un simple clic / tap ouvre l'éditeur sur l'événement « click » (jamais sur pointerup : sinon, sur téléphone, le clic « fantôme » tombe sur la feuille qui vient de s'ouvrir)
A.cell = (el, e) => {
  if (!S.ops || Date.now() - (S.noclick || 0) < 500) return;
  const grid = el.closest('.sc-grid'), rows = [...grid.querySelectorAll('.sc-nm')].map(n => n.dataset.u), cols = [...grid.querySelectorAll('.sc-hd[data-hd]')].map(h => h.dataset.hd), u = el.dataset.u, d = el.dataset.d;
  if (e.shiftKey && S.anchor && rows.includes(S.anchor.u) && cols.includes(S.anchor.d)) return openEd(rectOf({ rows, cols, u: S.anchor.u, d: S.anchor.d }, el), el, 'sel');
  S.anchor = { u, d }; openEd([[u, d]], el, 'one');
};

// ── Fenêtres ──
function openMd(html, cls) { closeEd(); const m = $mo(); if (!m) return; m.innerHTML = '<div class="sc-md" data-a="mdbg"><div class="sc-dlg ' + (cls || '') + '" role="dialog" aria-modal="true">' + html + '</div></div>'; S.md = cls || 'x'; }
function closeMd() { const m = $mo(); if (m) m.innerHTML = ''; if (S) S.md = null; }
const dh = (t, extra) => '<div class="sc-dh"><h3>' + t + '</h3>' + (extra || '') + '<button class="sc-x" data-a="mdx" aria-label="Close">✕</button></div>';
A.mdx = () => closeMd();
A.mdbg = (el, e) => { if (e.target === el) closeMd(); };

// ── Clavier ──
function onKey(e) {
  if (!S || !root) return;
  const typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target || {}).tagName || '');
  if (e.key === 'Escape') {
    if (S.md) closeMd(); else if (S.ed) closeEd(); else if (S.brush) { S.brush = ''; paint(); } else return;
    e.stopPropagation(); return;
  }
  if ((e.ctrlKey || e.metaKey) && !e.shiftKey && (e.key || '').toLowerCase() === 'z' && !typing && S.ops && S.tab === 'plan') { e.preventDefault(); e.stopPropagation(); undo(); }
}

// ── Branchement des événements (délégation : un seul écouteur par type) ──
function wire() {
  root.addEventListener('click', e => {
    const el = e.target.closest('[data-a]'); if (!el || !root.contains(el)) return;
    const f = A[el.dataset.a]; if (!f) return; if (el.tagName === 'A') e.preventDefault(); f(el, e);
  });
  root.addEventListener('input', e => { const f = Oi[e.target.dataset.a]; if (f) f(e.target, e); });
  root.addEventListener('change', e => { const el = e.target; if (el.dataset.f) return edField(el); const f = Oc[el.dataset.a]; if (f) f(el, e); });
  root.addEventListener('pointerdown', onPointerDown);
  document.addEventListener('keydown', onKey, true);
}

// ── Actions de la barre d'outils ──
A.exit = () => close();
A.tab = el => { closeEd(); S.tab = el.dataset.v; if (S.tab === 'me') S.month = today().slice(0, 7); paint(); };
A.bo = () => { close(); if (typeof window.openBackOffice === 'function') window.openBackOffice(); };
A.nav = el => {
  const v = +el.dataset.v; closeEd();
  if (S.span === 0) S.start = addM(mon(S.start), v) + '-01'; else S.start = addD(S.start, v * S.span);
  S.scrollTo = ''; paint();
};
A.today = () => { closeEd(); S.start = S.span === 0 ? today() : today(); S.scrollTo = today(); paint(); };
A.span = el => {
  closeEd(); const v = +el.dataset.v;
  if (v === 0) S.scrollTo = mon(S.start) === mon(today()) ? today() : '';
  else if (S.span === 0) S.start = mon(S.start) === mon(today()) ? today() : mon(S.start) + '-01';
  S.span = v; paint();
};
A.grp = el => { closeEd(); S.grp = el.dataset.v; S.kpi = ''; S.typ = ''; S.reg = ''; S.brush = ''; paint(); };
A.kpi = el => { S.kpi = S.kpi === el.dataset.v ? '' : el.dataset.v; paint(); };
A.brush = el => { closeEd(); S.brush = el.dataset.v === S.brush ? '' : el.dataset.v; paint(); };
A.undo = () => undo();
A.fil = () => { S.fil = !S.fil; paint(); };
A.more = () => openMd(dh('More') + '<div class="sc-db" style="display:grid;gap:8px">' + (S.grp === 'eng' ? '<button class="sc-btn" data-a="find">' + IC.find + ' Find an engineer</button>' : '') + '<button class="sc-btn" data-a="log">' + IC.log + ' History</button><button class="sc-btn" data-a="cfg">' + IC.cfg + ' Settings</button></div>', 'sm');
Oi.q = el => { S.q = el.value; paint(); };
Oc.typ = el => { S.typ = el.value; paint(); };
Oc.reg = el => { S.reg = el.value; paint(); };

// ═══ Pages : disponibilité, équipe, « My schedule », recherche, conflits, historique, réglages ═══

// ── Statut d'un engineer un jour donné (c'est ce texte qui sort dans le mail « Availability ») ──
const HOR = 90, KC = { asg: 'k-asg', av: 'k-av', off: 'k-un' }, KN = { asg: 'Assigned', av: 'Available', off: 'Off duty / unavailable' };
const flongW = s => WD[wd(s)] + ' ' + flong(s);
function dutyRun(uid, date) { let last = date; for (let i = 1; i <= HOR; i++) { const n = addD(date, i); if (!isDuty(eff(uid, n).fam)) return last; last = n; } return ''; }     // dernier jour de la série de jours « duty »
function backOn(uid, date) { for (let i = 1; i <= 120; i++) { const n = addD(date, i); if (isDuty(eff(uid, n).fam)) return n; } return ''; }
function nextJob(uid, date, within) {                                                // prochaine affectation (avec ville / projet) dans les « within » jours
  for (let i = 1; i <= within; i++) {
    const d = addD(date, i), e = eff(uid, d); if (e.fam !== 'eng' || !(e.c || e.p)) continue;
    const key = x => x.c || projList(x), lab = key(e), ds = [d]; for (let j = i + 1; j <= i + 30; j++) { const n = addD(date, j), x = eff(uid, n); if (x.fam === 'eng' && key(x) === lab) ds.push(n); else break; }
    return { label: lab, days: ds };
  }
  return null;
}
function fmtDays(ds) {                                                               // « 9th & 10th Nov » · « 9th–12th Nov »
  const a = ds[0], b = ds[ds.length - 1];
  if (ds.length === 1) return fdate(a);
  if (mon(a) !== mon(b)) return fdate(a) + ' – ' + fdate(b);
  return ds.length === 2 ? ordn(+dd(a)) + ' & ' + ordn(+dd(b)) + ' ' + MN[+a.slice(5, 7) - 1] : ordn(+dd(a)) + '–' + ordn(+dd(b)) + ' ' + MN[+a.slice(5, 7) - 1];
}
function statusOf(uid, date) {
  const e = eff(uid, date), f = e.fam, lab = label(e), run = () => { const x = dutyRun(uid, date); return x ? 'Duty until ' + fdate(x) : ''; };
  if (f === 'eng') return { k: 'asg', l1: e.s === 'SB' ? ('Standby ' + lab).trim() : lab || (e.s === 'A' ? 'Long-term assignment' : 'Engaged'), l2: run() };
  if (f === 'on') {
    const nj = !lab && nextJob(uid, date, 7);
    return { k: 'av', l1: lab ? (e.pr ? 'Prep ' : '') + lab : nj ? nj.label + ' (' + fmtDays(nj.days) + ')' : '', l2: run() };
  }
  const b = backOn(uid, date);
  return { k: 'off', l1: e.s === 'T' ? 'Training' : f === 'un' ? 'Unavailable' : 'Off Duty', l2: b ? 'Back on duty ' + fdate(b) : '' };
}
const ordCmp = (a, b) => (a.ord == null ? 999 : a.ord) - (b.ord == null ? 999 : b.ord) || String(a.n || '').localeCompare(String(b.n || ''));
function availModel(date) {
  const eng = people('eng').map((p, i) => ({ p, i, reg: regOf(p), st: statusOf(p.id, date) })), o = { asg: 0, av: 1, off: 2 }, mx = {};
  const rows = eng.slice().sort((a, b) => o[a.st.k] - o[b.st.k] || a.i - b.i);
  MATRIX.forEach(t => REGIONS.forEach(r => [1, 2].forEach(b => {
    const c = eng.filter(x => x.reg === r && ((x.p.q || {})[t] & b));
    mx[t + '|' + r + '|' + b] = { k: c.some(x => x.st.k === 'av') ? 'av' : c.some(x => x.st.k === 'asg') ? 'asg' : 'off', n: c.filter(x => x.st.k === 'av').length, tot: c.length };
  })));
  return { rows, mx };
}
const monthsReady = (a, b) => { for (let m = mon(a); m <= mon(b); m = addM(m, 1)) if (!S.ready[m]) return false; return true; };
const prRow = r => {
  const s = r.st, tx = s.l1 ? esc(s.l1) + (s.l2 ? '<small>' + esc(s.l2) + '</small>' : '') : esc(s.l2 || '');
  return '<div class="sc-pr ' + KC[s.k] + (r.reg === 'Asia' ? ' as' : '') + '" data-a="who" data-u="' + r.p.id + '"><span class="sc-av" style="--h:' + hue(r.p.id) + '">' + esc(inits(r.p.n)) + '</span><div class="sc-nt"><b>' + esc(r.p.n) + '</b><small>' +
    esc([r.p.base, catOf(r.p.q)].filter(Boolean).join(' · ')) + '</small></div><div class="tx">' + tx + '</div></div>';
};

// ── Page « Availability » ──
function matrixHtml(M) {
  let h = '<div class="sc-mx"><div></div>' + REGIONS.map(r => '<div class="h" style="grid-column:span 2">' + r.toUpperCase() + '</div>').join('') + '<div></div>' + REGIONS.map(() => '<div class="h">B1</div><div class="h">B2</div>').join('');
  MATRIX.forEach(t => {
    h += '<div class="l">' + t + '</div>' + REGIONS.map(r => [1, 2].map(b => {
      const m = M.mx[t + '|' + r + '|' + b];
      return '<button class="m ' + KC[m.k] + (m.tot ? '' : ' z') + '" data-a="mxc" data-v="' + t + '|' + r + '|' + b + '" title="' + t + ' B' + b + ' · ' + r + ' — ' + m.n + ' available of ' + m.tot + '">' + (m.tot ? m.n + '/' + m.tot : '–') + '</button>';
    }).join('')).join('');
  });
  return h + '</div>';
}
// ── Carte « Who to call » : ce que le mail Availability affichera pour ce jour (lu dans le roster) ──
function contactsCard(d) {
  const { rows, miss, nc } = contactRows(d);
  return '<div class="sc-card"><h3>Who to call</h3>' + (rows.length ? rows.map(r => '<div class="sc-cr"><em>' + esc(r.role) + '</em><b>' + esc(r.name) + '</b>' + (r.when ? '<small>' + esc(r.when) + '</small>' : '') +
    (r.lines.length || r.email ? '<span>' + r.lines.map(esc).join(' · ') + (r.email ? (r.lines.length ? '<br>' : '') + esc(r.email) : '') + '</span>' : '') + '</div>').join('') : '<p style="color:var(--mut);font-size:13px;margin:0">Nobody on the roster for this day.</p>') +
    (miss.length ? '<div class="sc-warn">⚠ No ' + miss.join(', no ') + ' on the roster for this day — that line will be missing from the mail.</div>' : '') +
    (nc.length ? '<div class="sc-warn">⚠ No phone or e-mail found in the team database for ' + nc.map(esc).join(', ') + '.</div>' : '') +
    '<button class="sc-btn" style="margin-top:10px" data-a="roster">' + IC.cal + ' Edit the roster</button></div>';
}
A.roster = () => { S.tab = 'plan'; S.grp = 'ops'; S.start = S.span === 0 ? S.adate : addD(S.adate, -2); paint(); };
function viewAvail() {
  const d = S.adate, M = availModel(d), cnt = { asg: 0, av: 0, off: 0 }; M.rows.forEach(r => cnt[r.st.k]++);
  return '<div class="sc-bar"><div class="sc-nav"><button data-a="adate" data-v="-1" aria-label="Previous day">‹</button><button data-a="adate" data-v="0">Today</button><button data-a="adate" data-v="1" aria-label="Next day">›</button></div>' +
    '<div class="sc-rng">' + flongW(d) + '</div><input type="date" data-a="adp" value="' + d + '" style="width:auto" aria-label="Pick a date"><span class="sc-sp"></span>' +
    '<button class="sc-btn p" data-a="share" data-v="avail">' + IC.mail + '<span class="tx">Send / Export</span></button></div>' +
    '<div class="sc-page"><div class="sc-av2"><div class="sc-stk"><div class="sc-card"><h3>Availability by region</h3>' + matrixHtml(M) +
    '<div class="sc-leg" style="padding:12px 0 0"><span class="sc-chip k-asg"><i></i>Assigned</span><span class="sc-chip k-av"><i></i>Available</span><span class="sc-chip k-un"><i></i>Unavailable</span></div>' +
    '<p style="font-size:12px;color:var(--mut);margin-top:8px">Each square = engineers rated for that aircraft type (B1 or B2): available / total. Tap a square to see who.</p></div>' + contactsCard(d) + '</div>' +
    '<div class="sc-card"><h3>Engineers <span class="sc-tg" style="margin:0">' + M.rows.length + '</span></h3>' +
    ['asg', 'av', 'off'].map(k => { const rs = M.rows.filter(r => r.st.k === k); return rs.length ? '<div class="sc-gl ' + KC[k] + '"><i></i>' + KN[k] + ' · ' + rs.length + '</div>' + rs.map(prRow).join('') : ''; }).join('') +
    (M.rows.length ? '' : '<div style="color:var(--mut)">No engineer yet.</div>') + '</div></div></div>';
}
A.adate = el => { const v = +el.dataset.v; S.adate = v === 0 ? today() : addD(S.adate, v); paint(); };
Oc.adp = el => { if (/^\d{4}-\d\d-\d\d$/.test(el.value)) { S.adate = el.value; paint(); } };
A.mxc = el => {
  const [t, r, b] = el.dataset.v.split('|'), M = availModel(S.adate), rs = M.rows.filter(x => x.reg === r && ((x.p.q || {})[t] & +b));
  openMd(dh(r + ' · ' + t + ' B' + b + ' · ' + fshort(S.adate)) + '<div class="sc-db">' + (rs.length ? rs.map(prRow).join('') : '<div class="sc-empty" style="margin:0">Nobody is rated ' + t + ' B' + b + ' in ' + r + '.<br>Add the rating in the person’s profile (Engineers tab).</div>') + '</div>', 'sm');
};

// Résumé de la semaine type d'une personne de l'équipe Ops : « Supervisor · Tuesday to Saturday »
const wkSum = c => {
  const w = c.wk || {}, ks = Object.keys(w).sort(), k = ks.filter(x => x <= today()).pop() || ks[0]; if (!k) return '';
  const t = String(w[k]).trim().split(/\s+/); if (t.length > 7) return t.length / 7 + '-week rotation';
  const by = {}; t.forEach((x, i) => { if (x !== '-' && ST.ops[x]) (by[x] = by[x] || new Set()).add((i + 1) % 7); });
  return Object.entries(by).map(([x, set]) => ((SHORT.ops || {})[x] || ST.ops[x][0]) + ' · ' + wdText(set)).join(' — ');
};
// ── Page « Engineers » : les fiches (base, n° FN, licences, types avion) ──
function viewEngs() {
  const q = norm(S.q).split(' ').filter(Boolean), all = Object.entries(S.engs).map(([id, c]) => Object.assign({ id }, c));
  const sec = g => all.filter(c => (c.g || 'eng') === g && (!q.length || q.every(x => norm([c.n, c.full, c.base, c.icao, c.iata, c.fn, regOf(c), Object.keys(c.q || {}).join(' ')].join(' ')).includes(x)))).sort(ordCmp);
  const tg = (t, v) => '<span class="sc-tg b' + v + '">' + t + '</span>';
  const card = c => {
    const eng = (c.g || 'eng') === 'eng', miss = eng && !Object.keys(c.q || {}).length;
    return '<div class="sc-pc' + (c.on === 0 ? ' off' : '') + '" data-a="who" data-u="' + c.id + '"><div class="t"><span class="sc-av" style="--h:' + hue(c.id) + '">' + esc(inits(c.n)) + '</span><div class="sc-nt"><b>' + esc(c.n || '?') + '</b><small>' +
      esc([c.full && c.full !== c.n ? c.full : '', c.fn].filter(Boolean).join(' · ') || ' ') + '</small></div></div>' +
      '<div style="font-size:12.5px;color:#374151">' + esc(eng ? [c.base, [c.icao, c.iata].filter(Boolean).join(' / ')].filter(Boolean).join(' · ') || 'No base yet' : [wkSum(c) || 'No standard week yet', c.base].filter(Boolean).join(' · ')) + (eng ? ' · ' + esc(regOf(c)) : '') + (c.on === 0 ? ' · hidden' : '') + '</div>' +
      (eng ? '<div>' + (miss ? '<span class="sc-tg" style="background:#fff7ed;color:#9a3412">Add aircraft types</span>' : (catOf(c.q) ? '<span class="sc-tg" style="background:#1e1b4b;color:#fff">' + catOf(c.q) + '</span>' : '') + TYPES.filter(t => (c.q || {})[t]).map(t => tg(t, c.q[t])).join('')) + '</div>' : '') + '</div>';
  };
  const e = sec('eng'), o = sec('ops');
  return '<div class="sc-page"><div class="sc-bar2"><input class="sc-q" type="search" placeholder="Search engineers…" value="' + esc(S.q) + '" data-a="q" autocomplete="off" style="flex:1 1 220px">' +
    '<button class="sc-btn p" data-a="padd">' + IC.plus + '<span>Add person</span></button><button class="sc-btn" data-a="import">' + IC.dl + '<span class="tx">Import</span></button><button class="sc-btn" data-a="backup" title="Download a backup of the engineers data">' + IC.dl + '<span class="tx">Backup</span></button></div>' +
    (all.length ? '' : emptyPlan()) + (e.length ? '<h4 class="sc-h4">Engineers · ' + e.length + '</h4><div class="sc-cg">' + e.map(card).join('') + '</div>' : '') +
    (o.length ? '<h4 class="sc-h4">Ops team · ' + o.length + '</h4><div class="sc-cg">' + o.map(card).join('') + '</div>' : '') + '</div>';
}
A.who = el => { if (S.ops) openProfile(el.dataset.u); };
A.padd = () => openProfile('');
function openProfile(uid) {
  const isNew = !uid, c = isNew ? { g: 'eng', reg: 'Europe', on: 1, q: {} } : JSON.parse(JSON.stringify(S.engs[uid] || {}));
  S.pf = { uid: uid || '', isNew, g: c.g === 'ops' ? 'ops' : 'eng', q: Object.assign({}, c.q || {}) };
  const free = Object.entries(S.roster).filter(([id, p]) => p && p.name && !S.engs[id]).sort((a, b) => String(a[1].name).localeCompare(String(b[1].name)));
  const f = (k, lab, v, ph, cls, x) => '<label' + (cls ? ' class="' + cls + '"' : '') + '>' + lab + '<input data-pf="' + k + '" value="' + esc(v == null ? '' : v) + '"' + (ph ? ' placeholder="' + esc(ph) + '"' : '') + (x || '') + ' autocomplete="off"></label>';
  const sel = (k, lab, opts, v, a) => '<label>' + lab + '<select data-pf="' + k + '"' + (a ? ' data-a="' + a + '"' : '') + '>' + opts.map(([x, l]) => '<option value="' + x + '"' + (String(x) === String(v) ? ' selected' : '') + '>' + l + '</option>').join('') + '</select></label>';
  const wkNow = (() => { const w = c.wk || {}, ks = Object.keys(w).sort(), k = ks.filter(x => x <= today()).pop() || ks[0] || '', t = k ? String(w[k]).trim().split(/\s+/) : []; return { f: k || today().slice(0, 8) + '01', t, n: Math.min(4, Math.max(1, Math.ceil(t.length / 7))) }; })();
  const wkOpts = v => [['-', 'Off'], ['MD', 'AM duty (operator)'], ['AD', 'PM duty (operator)'], ['D', 'On duty'], ['U', 'Supervisor'], ['MG', 'Manager on duty']].map(([k, l]) => '<option value="' + k + '"' + (k === v ? ' selected' : '') + '>' + l + '</option>').join('');
  const opsBlock = '<div data-ops style="margin-top:16px;' + (S.pf.g === 'ops' ? '' : 'display:none') + '"><h4 class="sc-h4" style="margin-bottom:8px">Roster</h4><div class="sc-g2">' + f('dn', 'Name in the contacts table', c.dn, dnOf(c) || 'e.g. Kerry Towns') + '<label>Standard week starts on<input type="date" data-pf="wkf" value="' + wkNow.f + '"></label>' +
    sel('wkn', 'Repeats every', [1, 2, 3, 4].map(n => [n, n + (n > 1 ? ' weeks' : ' week')]), wkNow.n, 'wkn') + '</div>' +
    '<p style="font-size:12.5px;color:var(--mut);margin:10px 0 6px">The standard week repeats by itself, so in the schedule you only paint the exceptions (leave, swaps…). The operators, supervisor and managers on duty in the availability mail come from here.</p>' +
    [0, 1, 2, 3].map(w => '<div data-wkw="' + w + '"' + (w < wkNow.n ? '' : ' style="display:none"') + '><h5 class="sc-h5" data-wkc' + (wkNow.n > 1 ? '' : ' style="display:none"') + '>Week ' + (w + 1) + '</h5><div class="sc-g2 sc-wkg">' +
      ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((n, i) => '<label>' + n + '<select data-pf="wk' + (w * 7 + i) + '">' + wkOpts(wkNow.t[w * 7 + i] || '-') + '</select></label>').join('') + '</div></div>').join('') + '</div>';
  openMd(dh(isNew ? 'Add a person' : esc(c.n || 'Person')) + '<div class="sc-db">' +
    (isNew ? '<label class="sc-g1" style="display:flex;margin-bottom:12px">Person (from the app’s team list)<select data-pf="uid" data-a="pfuid"><option value="">Choose…</option>' + free.map(([id, p]) => '<option value="' + esc(id) + '">' + esc(p.name) + (p.team ? ' · ' + esc(p.team) : '') + '</option>').join('') + '<option value="__new">Someone without an app account…</option></select></label>' : '') +
    '<div class="sc-g2">' + f('full', 'Full name', c.full, 'e.g. Danijel JANESKI') + f('n', 'Short name (shown everywhere)', c.n, 'e.g. D. Janeski') +
    sel('g', 'Role', [['eng', 'Engineer'], ['ops', 'Ops team (operator, supervisor, manager)']], S.pf.g, 'pfg') + sel('reg', 'Region', REGIONS.map(r => [r, r]), c.reg || 'Europe') +
    '<div class="w sc-g2" data-eng style="' + (S.pf.g === 'eng' ? '' : 'display:none') + '">' + f('base', 'Base (city)', c.base, 'e.g. Geneva') + f('fn', 'FN number', c.fn, 'e.g. FN663777') + f('icao', 'ICAO', c.icao, 'e.g. LSGG') + f('iata', 'IATA', c.iata, 'e.g. GVA') + '</div>' +
    f('ord', 'Order in the lists', c.ord, 'e.g. 12', '', ' inputmode="numeric"') + '<label style="flex-direction:row;align-items:center;gap:8px;text-transform:none;font-size:13px;letter-spacing:0;color:var(--tx);margin-top:18px"><input type="checkbox" data-pf="on"' + (c.on === 0 ? '' : ' checked') + '> Show in the schedule</label></div>' +
    '<div data-eng style="margin-top:16px;' + (S.pf.g === 'eng' ? '' : 'display:none') + '"><h4 class="sc-h4">Licences &amp; aircraft types</h4><p style="font-size:12.5px;color:var(--mut);margin:0 0 8px">Tap B1 and/or B2 under each type the engineer is rated on. They feed the availability matrix, “Find an engineer” and the mail tables.</p>' +
    '<div class="sc-row" style="margin-bottom:8px"><button class="sc-btn" data-a="pfall" data-v="3">All B1+B2</button><button class="sc-btn" data-a="pfall" data-v="1">All B1</button><button class="sc-btn" data-a="pfall" data-v="0">Clear all</button></div>' +
    '<div class="sc-tq">' + TYPES.map(t => { const v = S.pf.q[t] || 0; return '<div data-t="' + t + '" class="' + (v ? 'has' : '') + '">' + t + '<span class="sg"><button data-a="pfq" data-t="' + t + '" data-b="1" class="' + (v & 1 ? 'on' : '') + '">B1</button><button data-a="pfq" data-t="' + t + '" data-b="2" class="' + (v & 2 ? 'on' : '') + '">B2</button></span></div>'; }).join('') + '</div></div>' + opsBlock + '</div>' +
    '<div class="sc-df"><button class="sc-btn" data-a="mdx">Cancel</button><button class="sc-btn p" data-a="pfsave">Save</button></div>', 'md');
}
Oc.pfuid = el => {
  const p = S.roster[el.value]; if (!p) return; const m = $mo(), set = (k, v) => { const i = m.querySelector('[data-pf="' + k + '"]'); if (i && !i.value) i.value = v; };
  set('full', p.name); set('n', shortName(p.name)); const r = m.querySelector('[data-pf="reg"]'); if (r) r.value = p.team === 'FAST ASIA' ? 'Asia' : 'Europe';
  const g = m.querySelector('[data-pf="g"]'); if (g && p.role === 'ops') { g.value = 'ops'; Oc.pfg(g); }
};
Oc.wkn = el => { const n = +el.value || 1, m = $mo(), g = (w, i) => m.querySelector('[data-pf="wk' + (w * 7 + i) + '"]'), d7 = [0, 1, 2, 3, 4, 5, 6];
  for (let w = 1; w < n; w++) if (d7.every(i => g(w, i).value === '-')) d7.forEach(i => { g(w, i).value = g(0, i).value; });          // une nouvelle semaine démarre comme la semaine 1
  m.querySelectorAll('[data-wkw]').forEach(x => { x.style.display = +x.dataset.wkw < n ? '' : 'none'; }); m.querySelectorAll('[data-wkc]').forEach(x => { x.style.display = n > 1 ? '' : 'none'; }); };
Oc.pfg = el => { S.pf.g = el.value === 'ops' ? 'ops' : 'eng'; $mo().querySelectorAll('[data-eng],[data-ops]').forEach(x => { x.style.display = (x.hasAttribute('data-eng') ? S.pf.g === 'eng' : S.pf.g === 'ops') ? '' : 'none'; }); };
A.pfq = el => {
  const t = el.dataset.t, b = +el.dataset.b, v = ((S.pf.q[t] || 0) ^ b); if (v) S.pf.q[t] = v; else delete S.pf.q[t];
  const d = el.closest('[data-t]'); d.classList.toggle('has', !!v); d.querySelectorAll('button').forEach(x => x.classList.toggle('on', !!(v & +x.dataset.b)));
};
A.pfall = el => { const v = +el.dataset.v; S.pf.q = {}; if (v) TYPES.forEach(t => { S.pf.q[t] = v; }); $mo().querySelectorAll('.sc-tq [data-t]').forEach(d => { const x = S.pf.q[d.dataset.t] || 0; d.classList.toggle('has', !!x); d.querySelectorAll('button').forEach(b => b.classList.toggle('on', !!(x & +b.dataset.b))); }); };
A.pfsave = async () => {
  const m = $mo(), val = k => { const i = m.querySelector('[data-pf="' + k + '"]'); return i ? (i.type === 'checkbox' ? i.checked : i.value.trim()) : ''; };
  let uid = S.pf.uid; if (S.pf.isNew) { uid = val('uid'); if (!uid) return toast('Choose a person first', 1); if (uid === '__new') uid = 'ext_' + Date.now().toString(36); }
  const g = val('g') === 'ops' ? 'ops' : 'eng', n = val('n') || shortName(val('full'));
  if (!n) return toast('Give a name first', 1);
  const o = { n: n.slice(0, 40), g, reg: val('reg') || 'Europe', on: val('on') ? 1 : 0 };
  ['full', 'base', 'fn', 'icao', 'iata'].forEach(k => { if (val(k)) o[k] = val(k).slice(0, 60); });
  const ord = parseFloat(val('ord')); if (isFinite(ord)) o.ord = ord; else { const ex = (S.engs[uid] || {}).ord; o.ord = ex != null ? ex : Math.max(0, ...Object.values(S.engs).map(c => c.ord == null ? 0 : c.ord)) + 1; }
  if (g === 'eng' && Object.keys(S.pf.q).length) { o.q = {}; TYPES.forEach(t => { if (S.pf.q[t]) o.q[t] = S.pf.q[t]; }); }
  if (g === 'ops') {                                                      // équipe Ops : nom dans les mails + semaine type (on garde l'historique des semaines types)
    if (val('dn')) o.dn = val('dn').slice(0, 60);
    const wk = Object.assign({}, (S.engs[uid] || {}).wk || {}), f = val('wkf') || today().slice(0, 8) + '01', nw = Math.min(4, Math.max(1, +val('wkn') || 1)), t = Array.from({ length: nw * 7 }, (_, i) => val('wk' + i) || '-').join(' ');
    if (t.replace(/[- ]/g, '')) wk[f] = t; else delete wk[f]; if (Object.keys(wk).length) o.wk = wk;
  }
  try { await D.set(R('schedule/engineers/' + uid), o); closeMd(); toast('Saved'); logIt((S.pf.isNew ? 'Added ' : 'Updated ') + n); } catch (e) { toast(permMsg(e), 1); }
};

// ── Import / sauvegarde du fichier d'équipe ──
const ENG_KEYS = ['n', 'full', 'dn', 'g', 'reg', 'base', 'icao', 'iata', 'fn', 'ord', 'on'];
A.import = () => {
  const i = document.createElement('input'); i.type = 'file'; i.accept = '.json,application/json';
  i.onchange = () => { const f = i.files && i.files[0]; if (!f) return; f.text().then(importPreview).catch(() => toast('Could not read this file', 1)); }; i.click();
};
function importPreview(txt) {
  let j; try { j = JSON.parse(txt); } catch (e) { return toast('This is not a valid engineers file (JSON)', 1); }
  const engs = j && typeof j.engineers === 'object' && j.engineers ? j.engineers : null; if (!engs) return toast('No “engineers” section found in this file', 1);
  S.imp = j; const ids = Object.keys(engs), ne = ids.filter(k => (engs[k] || {}).g !== 'ops').length, upd = ids.filter(k => S.engs[k]).length;
  openMd(dh('Import engineers file') + '<div class="sc-db"><p><b>' + ids.length + '</b> people found (' + ne + ' engineers, ' + (ids.length - ne) + ' in the ops team)' + (j.config ? ' + mail settings and contacts' : '') + '.</p><p style="color:var(--mut);margin-top:6px">' + upd + ' already exist: only the values found in the file are updated, everything else on their card is kept; ' + (ids.length - upd) + ' will be added. Nobody is deleted, and no schedule day is touched.' + (j.config ? ' The mail settings and fixed contacts of the file replace the current ones (⚙ Settings).' : '') + '</p>' +
    '<div style="margin-top:10px;max-height:260px;overflow:auto">' + ids.map(k => '<span class="sc-tg">' + esc((engs[k] || {}).n || k) + '</span>').join('') + '</div></div><div class="sc-df"><button class="sc-btn" data-a="mdx">Cancel</button><button class="sc-btn p" data-a="impgo">Import</button></div>', 'sm');
}
A.impgo = async () => {
  const j = S.imp; if (!j) return; const up = {}, bad = /[.$#\[\]\/]/; let np = 0;
  Object.entries(j.engineers || {}).forEach(([uid, c]) => {
    if (!c || typeof c !== 'object' || bad.test(uid)) return; const o = {};
    ENG_KEYS.forEach(k => { if (c[k] != null && c[k] !== '') o[k] = typeof c[k] === 'string' ? c[k].slice(0, 80) : c[k]; });
    if (c.q && typeof c.q === 'object') { o.q = {}; TYPES.forEach(t => { const v = +c.q[t]; if (v >= 1 && v <= 3) o.q[t] = v; }); }
    if (c.wk && typeof c.wk === 'object') { const w = {}; Object.entries(c.wk).forEach(([k, v]) => { const t = String(v).trim().split(/\s+/); if (/^\d{4}-\d{2}-\d{2}$/.test(k) && t.length % 7 === 0 && t.length <= 28 && t.every(x => x === '-' || /^[A-Z]{1,2}$/.test(x))) w[k] = t.join(' '); }); if (Object.keys(w).length) o.wk = w; }
    if (!o.n && !(S.engs[uid] || {}).n) return; np++;                                                // une fiche inconnue et sans nom n'est pas créée
    Object.entries(o).forEach(([k, v]) => { if (k === 'q' || k === 'wk') Object.entries(v).forEach(([x, y]) => { up['engineers/' + uid + '/' + k + '/' + x] = y; }); else up['engineers/' + uid + '/' + k] = v; });          // champ par champ : ce qui a été ajouté dans l'app (types avion, semaine type, nom…) reste
  });
  if (j.config && typeof j.config === 'object') up.config = mergeCfg(j.config);
  try { await D.update(R('schedule'), up); S.imp = null; closeMd(); toast('Imported ' + np + ' people'); logIt('Imported engineers file'); } catch (e) { toast(permMsg(e), 1); }
};
A.backup = () => {
  const b = new Blob([JSON.stringify({ v: 1, saved: new Date().toISOString(), engineers: S.engs, config: S.cfg }, null, 1)], { type: 'application/json' }), a = document.createElement('a');
  a.href = URL.createObjectURL(b); a.download = 'schedule-engineers-' + today() + '.json'; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
};

// ── « My schedule » : la vue de l'engineer (lecture seule) ──
function viewMe() {
  const uid = S.uid, c = S.engs[uid] || null, m = S.month, t = today();
  if (!c) return '<div class="sc-page"><div class="sc-empty"><h3>You are not in the schedule yet</h3>Ask the Ops team to add you. Your days will appear here as soon as they do.</div></div>';
  const e = eff(uid, t), g = e.g, first = m + '-01', n = diff(first, addM(m, 1) + '-01'), last = addD(first, n - 1), lead = (wd(first) + 6) % 7;
  const run = isDuty(e.fam) ? dutyRun(uid, t) : '', back = isDuty(e.fam) ? '' : backOn(uid, t);
  const hero = '<div class="sc-hero f-' + e.fam + '"><small>Today · ' + fshort(t) + '</small><h2>' + esc(ST[g][e.s][0]) + '</h2><p>' + [esc(label(e)), e.n ? esc(e.n) : '', run ? 'On duty until ' + fdate(run) : back ? 'Back on duty ' + fdate(back) : ''].filter(Boolean).join(' · ') + '</p></div>';
  let cal = '<div class="sc-cal">' + ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(x => '<div class="w">' + x + '</div>').join('') + (lead ? '<div style="grid-column:span ' + lead + '"></div>' : '');
  let eng = 0, off = 0;
  for (let i = 0; i < n; i++) {
    const d = addD(first, i), x = eff(uid, d), st = ST[g][x.s], lab = label(x); if (x.fam === 'eng') eng++; else if (!isDuty(x.fam)) off++;
    cal += '<div class="d f-' + x.fam + (d < t ? ' o' : '') + (d === t ? ' td' : '') + '" title="' + esc(st[0] + (lab ? ' · ' + lab : '') + (x.n ? ' — ' + x.n : '')) + '"><i>' + (+dd(d)) + (x.x ? ' +' : '') + '</i>' + (lab ? '<b>' + esc(lab) + '</b>' : st[2] ? '<b>' + esc(st[2]) + '</b>' : '') + (x.n ? '<span>' + esc(x.n) + '</span>' : '') + '</div>';
  }
  cal += '</div>';
  const s = stats(uid, first, last), up = []; for (let i = 0; i < 30 && up.length < 10; i++) { const d = addD(t, i), x = eff(uid, d); if (!x.plain || !isDuty(x.fam)) up.push([d, x]); }
  const tags = TYPES.filter(k => (c.q || {})[k]).map(k => '<span class="sc-tg b' + c.q[k] + '">' + k + '</span>').join('');
  return '<div class="sc-page"><div class="sc-me"><div><div class="sc-bar2"><div class="sc-nav"><button data-a="mnav" data-v="-1" aria-label="Previous month">‹</button><button data-a="mtoday">Today</button><button data-a="mnav" data-v="1" aria-label="Next month">›</button></div><div class="sc-rng">' + monthName(m) + '</div></div>' + hero + '<div class="sc-card" style="margin-top:12px">' + cal + '</div></div>' +
    '<div><div class="sc-card"><h3>' + monthName(m).split(' ')[0] + ' in numbers</h3><div class="sc-stat"><div><b>' + (Math.round(s.duty * 2) / 2) + '</b><small>Duty days</small></div><div><b>' + eng + '</b><small>Engaged</small></div><div><b>' + off + '</b><small>Off</small></div></div>' +
    (s.plus ? '<p style="margin-top:10px;font-size:13px">Extra work: <b>' + s.plus + '</b> day' + (s.plus > 1 ? 's' : '') + (s.hrs ? ' · <b>' + s.hrs + '</b> h' : '') + '</p>' : '') + '</div>' +
    '<div class="sc-card" style="margin-top:12px"><h3>Coming up</h3>' + (up.length ? '<div class="sc-wk"><span class="h">Day</span><span class="h">Where / what</span><span class="h">Status</span>' + up.map(([d, x]) => '<span>' + fshort(d) + '</span><span>' + (esc(label(x)) || '–') + '</span><span><span class="sc-tg f-' + x.fam + '" style="background:var(--c);color:#1f2937">' + esc(ST[g][x.s][0]) + '</span></span>').join('') + '</div>' : '<p style="color:var(--mut)">Nothing planned in the next 30 days — you are on duty.</p>') + '</div>' +
    '<div class="sc-card" style="margin-top:12px"><h3>Your profile</h3><p style="font-size:13px;margin-bottom:8px">' + esc([c.base, c.fn].filter(Boolean).join(' · ') || '—') + (catOf(c.q) ? ' · <b>' + catOf(c.q) + '</b>' : '') + '</p>' + (tags || '<span style="color:var(--mut);font-size:13px">No aircraft types recorded yet — tell Ops.</span>') + '</div></div></div></div>';
}
A.mnav = el => { S.month = addM(S.month, +el.dataset.v); paint(); };
A.mtoday = () => { S.month = today().slice(0, 7); paint(); };

// ── Chercher un engineer pour un job ──
A.find = () => { S.fd = S.fd || { typ: '', cat: 0, reg: '', from: today(), to: addD(today(), 2) }; S.fd.from = S.fd.from < today() ? today() : S.fd.from; drawFind(); };
function drawFind() {
  const F = S.fd, o = (a, v) => a.map(([x, l]) => '<option value="' + x + '"' + (String(x) === String(v) ? ' selected' : '') + '>' + l + '</option>').join('');
  openMd(dh('Find an engineer') + '<div class="sc-db"><div class="sc-g2"><label>Aircraft type<select data-a="fd" data-k="typ">' + o([['', 'Any type']].concat(TYPES.map(t => [t, t])), F.typ) + '</select></label>' +
    '<label>Licence<select data-a="fd" data-k="cat">' + o([[0, 'B1 or B2'], [1, 'B1'], [2, 'B2']], F.cat) + '</select></label><label>Region<select data-a="fd" data-k="reg">' + o([['', 'Anywhere']].concat(REGIONS.map(r => [r, r])), F.reg) + '</select></label>' +
    '<div class="sc-g2" style="gap:8px"><label>From<input type="date" data-a="fd" data-k="from" value="' + F.from + '"></label><label>To<input type="date" data-a="fd" data-k="to" value="' + F.to + '"></label></div></div><div id="sc-fres" style="margin-top:14px"></div></div>', 'md');
  fillFind();
}
function fillFind() {
  const F = S.fd, el = $mo() && $mo().querySelector('#sc-fres'); if (!el) return; const to = F.to < F.from ? F.from : F.to, days = dayList(F.from, to).slice(0, 31);
  const mask = +F.cat || 3, list = people('eng').filter(p => (!F.reg || regOf(p) === F.reg) && (!F.typ || ((p.q || {})[F.typ] & mask)));
  const rs = list.map(p => { const fam = days.map(d => eff(p.id, d).fam), free = fam.filter(f => f === 'on').length; return { p, fam, free }; }).filter(r => r.free).sort((a, b) => b.free - a.free || ordCmp(a.p, b.p));
  const row = r => '<div class="sc-pr ' + (r.free === days.length ? 'k-av' : 'k-asg') + '" data-a="who" data-u="' + r.p.id + '"><span class="sc-av" style="--h:' + hue(r.p.id) + '">' + esc(inits(r.p.n)) + '</span><div class="sc-nt"><b>' + esc(r.p.n) + '</b><small>' + esc([r.p.base, regOf(r.p), catOf(r.p.q)].filter(Boolean).join(' · ')) + '</small></div><div class="tx">' + (r.free === days.length ? 'Free all ' + days.length + ' day' + (days.length > 1 ? 's' : '') : 'Free ' + r.free + ' of ' + days.length + ' days') +
    '<small style="display:flex;gap:2px;justify-content:flex-end;margin-top:3px">' + r.fam.map(f => '<i style="width:7px;height:12px;border-radius:2px;background:' + FAM[f].c + ';box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)"></i>').join('') + '</small></div></div>';
  const full = rs.filter(r => r.free === days.length), part = rs.filter(r => r.free !== days.length);
  el.innerHTML = (full.length ? '<div class="sc-gl k-av"><i></i>Free for the whole period · ' + full.length + '</div>' + full.map(row).join('') : '<div class="sc-warn" style="margin:0 0 8px">Nobody is free for the whole period.</div>') +
    (part.length ? '<div class="sc-gl k-asg"><i></i>Free part of the period · ' + part.length + '</div>' + part.map(row).join('') : '');
}
Oc.fd = el => { const k = el.dataset.k; S.fd[k] = k === 'cat' ? +el.value : el.value; if (k === 'from' && S.fd.to < S.fd.from) S.fd.to = S.fd.from; if (k === 'from' || k === 'to') { drawFind(); } else fillFind(); };

// ── Conflits et historique ──
A.conf = () => {
  const l = conflicts();
  openMd(dh('Conflicts · ' + l.length) + '<div class="sc-db">' + (l.length ? '<p style="color:var(--mut);margin:0 0 10px;font-size:13px">The Back Office and the schedule disagree. Tap a line to jump to the day.</p>' + l.map(c => '<div class="sc-pr k-asg" data-a="goto" data-u="' + c.uid + '" data-d="' + c.d + '" style="cursor:pointer"><span class="sc-av" style="--h:' + hue(c.uid) + '">' + esc(inits(dn(c.uid))) + '</span><div class="sc-nt"><b>' + esc(dn(c.uid)) + '</b><small>' + fshort(c.d) + '</small></div><div class="tx" style="max-width:62%">' + esc(c.t) + '</div></div>').join('') : '<div class="sc-empty" style="margin:0">No conflict. 👌</div>') + '</div>', 'md');
};
A.goto = el => { closeMd(); S.tab = 'plan'; S.grp = gOf(el.dataset.u); S.start = S.span === 0 ? el.dataset.d : addD(el.dataset.d, -2); S.scrollTo = el.dataset.d; paint(); };
A.log = async () => {
  openMd(dh('History') + '<div class="sc-db" id="sc-lg"><div class="sc-sk">Loading…</div></div>', 'sm');
  try {
    const s = await D.get(R('schedule/log')), a = (s.exists() ? (Array.isArray(s.val()) ? s.val() : Object.values(s.val())) : []).filter(Boolean).reverse(), el = $mo() && $mo().querySelector('#sc-lg'); if (!el) return;
    el.innerHTML = a.length ? a.map(x => { const d = new Date(x.at); return '<div style="padding:8px 0;border-bottom:1px solid var(--line)"><div style="font-size:12px;color:var(--mut)">' + fdate(iso(d)) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + ' · ' + esc(x.by || '') + '</div><div>' + esc(x.t) + '</div></div>'; }).join('') : '<div class="sc-empty" style="margin:0">Nothing recorded yet.</div>';
  } catch (e) { const el = $mo() && $mo().querySelector('#sc-lg'); if (el) el.innerHTML = '<div class="sc-note bad" style="margin:0">' + esc(permMsg(e)) + '</div>'; }
};

// ── Réglages : destinataires, textes, contacts ──
A.cfg = () => { S.cf = JSON.parse(JSON.stringify(S.cfg)); drawCfg(); };
function drawCfg(keep) {
  const c = S.cf, fi = (k, lab, v, ph, cls) => '<label class="' + (cls || 'w') + '">' + lab + '<input data-c="' + k + '" value="' + esc(v || '') + '"' + (ph ? ' placeholder="' + esc(ph) + '"' : '') + ' autocomplete="off"></label>';
  const ta = (k, lab, v, r) => '<label class="w">' + lab + '<textarea data-c="' + k + '" rows="' + (r || 3) + '">' + esc(v || '') + '</textarea></label>';
  openMd(dh('Settings') + '<div class="sc-db"><h4 class="sc-h4">10-day schedule mail</h4><div class="sc-g2">' + fi('sched.to', 'To (comma separated)', c.sched.to) + fi('sched.cc', 'Cc', c.sched.cc) + fi('sched.subject', 'Subject', c.sched.subject, '', 'w') +
    '<p class="w" style="margin:-4px 0 0;font-size:12px;color:var(--mut)">{from} and {to} are replaced by the first and last day of the table.</p>' + ta('sched.intro', 'Opening text', c.sched.intro) + '</div>' +
    '<h4 class="sc-h4">Availability mail</h4><div class="sc-g2">' + fi('avail.to', 'To (comma separated)', c.avail.to) + fi('avail.cc', 'Cc', c.avail.cc) + fi('avail.subject', 'Subject', c.avail.subject) + '<p class="w" style="margin:-4px 0 0;font-size:12px;color:var(--mut)">{date} is replaced by the day, e.g. “7th November”.</p>' +
    ta('avail.intro', 'Opening text', c.avail.intro) + ta('avail.note', 'Note under the table (optional)', c.avail.note, 2) + fi('avail.link', 'Link at the bottom (optional)', c.avail.link, 'https://…') + '</div>' +
    '<h4 class="sc-h4">Contacts table (availability mail)</h4><p style="margin:0 0 8px;font-size:12.5px;color:var(--mut)">Operators, supervisor and managers on duty are filled in <b>automatically</b> from the roster (Schedule › Ops team); phone and e-mail come from the team database. Add below only the people who never change (e.g. the Service Team Manager).</p><div class="sc-g2">' + fi('avail.tel', 'Operations line (shown for operators)', c.avail.tel, '+41 …') + fi('avail.am', 'Morning shift text', c.avail.am, '', 'h') + fi('avail.pm', 'Afternoon shift text', c.avail.pm, '', 'h') + '</div>' +
    '<h5 class="sc-h5">Fixed contacts</h5>' + (c.contacts.length ? '' : '<p style="color:var(--mut);font-size:13px;margin:0 0 8px">No fixed contact yet.</p>') +
    c.contacts.map((x, i) => '<div class="sc-card" style="padding:10px;margin-bottom:8px" data-ci="' + i + '"><div class="sc-g2"><label>Role<input data-cc="role" value="' + esc(x.role || '') + '" placeholder="FAST OPS Supervisor"></label><label>Name<input data-cc="name" value="' + esc(x.name || '') + '"></label>' +
      '<label>When<input data-cc="when" value="' + esc(x.when || '') + '" placeholder="Tuesday to Saturday"></label><label>Email<input data-cc="email" value="' + esc(x.email || '') + '"></label><label class="w">Phone lines (one per line)<textarea data-cc="tel" rows="2">' + esc(x.tel || '') + '</textarea></label></div>' +
      '<button class="sc-btn d" style="margin-top:8px" data-a="ccdel" data-v="' + i + '">Remove</button></div>').join('') + '<button class="sc-btn" data-a="ccadd">' + IC.plus + ' Add a contact</button>' +
    '<h4 class="sc-h4">Engineers data</h4><div class="sc-row"><button class="sc-btn" data-a="import">' + IC.dl + ' Import engineers file</button><button class="sc-btn" data-a="backup">' + IC.dl + ' Download a backup</button></div></div>' +
    '<div class="sc-df"><button class="sc-btn" data-a="mdx">Cancel</button><button class="sc-btn p" data-a="cfgsave">Save</button></div>', 'md');
  if (keep != null) { const b = $mo().querySelector('.sc-db'); if (b) b.scrollTop = keep; }
}
function readCfg() {
  const m = $mo(), o = JSON.parse(JSON.stringify(CFG0)); o.contacts = [];
  m.querySelectorAll('[data-c]').forEach(i => { const [a, b] = i.dataset.c.split('.'); o[a][b] = i.value.trim(); });
  m.querySelectorAll('[data-ci]').forEach(r => { const x = {}; r.querySelectorAll('[data-cc]').forEach(i => { x[i.dataset.cc] = i.value.trim(); }); o.contacts.push(x); });
  return o;
}
A.ccadd = () => { const k = $mo().querySelector('.sc-db').scrollTop; S.cf = readCfg(); S.cf.contacts.push({}); drawCfg(k + 200); };
A.ccdel = el => { const k = $mo().querySelector('.sc-db').scrollTop; S.cf = readCfg(); S.cf.contacts.splice(+el.dataset.v, 1); drawCfg(k); };
A.cfgsave = async () => {
  const c = readCfg(); c.contacts = c.contacts.filter(x => Object.values(x).some(Boolean));
  try { await D.set(R('schedule/config'), c); S.cfg = mergeCfg(c); closeMd(); toast('Settings saved'); } catch (e) { toast(permMsg(e), 1); }
};

// ═══ Les 2 mails : UN modèle de tableau → HTML (Gmail) · copie · PNG · Excel ═══════════════════════
// modèle = { subject, blocks:[ {p:'texte'} | {t:tableau} | {raw:'<html>'} | {gap:px} ] }
// tableau = { w:[largeurs px], grid:[colonnes Excel], rows:[[cellule…]], rh, mt, fs }
// cellule = { l:lignes, bg, fg, b, al:'c'|'l', cs, rs, sz }   ligne = 'texte' | [ 'texte' | ['texte',{b,fg}] … ]
const PAL = { on: FAM.on.c, eng: FAM.eng.c, off: FAM.off.c, un: FAM.un.c, enf: FAM.enf.c }, RED = '#FF0000', LNK = '#1155CC';
const cellLines = c => (Array.isArray(c.l) ? c.l : String(c.l == null ? '' : c.l).split('\n')).map(L => (Array.isArray(L) ? L : [L]).map(r => Array.isArray(r) ? { t: String(r[0]), b: !!(r[1] && r[1].b), fg: r[1] && r[1].fg } : { t: String(r) }));
function placeT(T) {                                                           // positions réelles (colspan / rowspan)
  const occ = [], cells = [];
  T.rows.forEach((row, ri) => {
    let ci = 0; occ[ri] = occ[ri] || [];
    row.forEach(c => {
      while (occ[ri][ci]) ci++; const cs = c.cs || 1, rs = c.rs || 1;
      for (let r = 0; r < rs; r++) { occ[ri + r] = occ[ri + r] || []; for (let k = 0; k < cs; k++) occ[ri + r][ci + k] = 1; }
      cells.push({ c, ri, ci, cs, rs, w: T.w.slice(ci, ci + cs).reduce((a, b) => a + b, 0) }); ci += cs;
    });
  });
  return cells;
}

// ── HTML (mail) ──
const runHtml = (r, c) => { let h = esc(r.t); if (r.b || c.b) h = '<b>' + h + '</b>'; const fg = r.fg || c.fg; return fg ? '<span style="color:' + fg + '">' + h + '</span>' : h; };
function tableHtml(T) {
  const W = T.w.reduce((a, b) => a + b, 0), cells = placeT(T), fs = T.fs || 11; let rows = [];
  cells.forEach(x => { (rows[x.ri] = rows[x.ri] || []).push(x); });
  return '<table cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;table-layout:fixed;width:' + W + 'px;font-family:Arial,Helvetica,sans-serif;font-size:' + fs + 'px;color:#000' + (T.mt ? ';margin-top:' + T.mt + 'px' : '') + '">' +
    rows.map(r => '<tr>' + r.map(x => { const c = x.c, L = cellLines(c);
      return '<td' + (x.cs > 1 ? ' colspan="' + x.cs + '"' : '') + (x.rs > 1 ? ' rowspan="' + x.rs + '"' : '') + ' width="' + x.w + '"' + (c.bg ? ' bgcolor="' + c.bg + '"' : '') + ' style="width:' + x.w + 'px;height:' + (T.rh || 20) + 'px;border:1px solid #000;padding:3px 4px;text-align:' + (c.al === 'l' ? 'left' : 'center') + ';vertical-align:middle;word-wrap:break-word;overflow-wrap:anywhere' +
        (c.bg ? ';background-color:' + c.bg : '') + (c.fg ? ';color:' + c.fg : '') + (c.b ? ';font-weight:bold' : '') + (c.sz ? ';font-size:' + c.sz + 'px' : '') + '">' + (L.map(l => l.map(r => runHtml(r, c)).join('')).join('<br>') || '&nbsp;') + '</td>'; }).join('') + '</tr>').join('') + '</table>';
}
const specHtml = spec => '<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#000;line-height:1.4">' + spec.blocks.map(b =>
  b.p != null ? '<div style="margin:0 0 10px">' + esc(Array.isArray(b.p) ? b.p.join('\n') : b.p).replace(/\n/g, '<br>') + '</div>' : b.t ? tableHtml(b.t) : b.raw != null ? b.raw : b.gap ? '<div style="height:' + b.gap + 'px"></div>' : '').join('') + '</div>';
const specText = spec => spec.blocks.map(b => b.p != null ? (Array.isArray(b.p) ? b.p.join('\n') : b.p) : b.t ? b.t.rows.map(r => r.map(c => cellLines(c).map(l => l.map(x => x.t).join('')).join(' / ')).join('\t')).join('\n') : '').filter(Boolean).join('\n\n');

// ── PNG (dessiné sur un canvas : pas de bibliothèque) ──
function specCanvas(spec) {
  const SC = 2, FS = 11, PX = 5, PY = 4, M = 14, cv = document.createElement('canvas'), cx = cv.getContext('2d'), fnt = (b, s) => (b ? 'bold ' : '') + (s || FS) + 'px Arial, Helvetica, sans-serif';
  const wrapRuns = (runs, maxW, fs, c) => {
    const out = []; let cur = [], w = 0;
    runs.forEach(r => {
      const b = r.b || c.b, fg = r.fg || c.fg; cx.font = fnt(b, fs);
      r.t.split(/(\s+)/).forEach(tk => {
        if (tk === '') return;
        if (/^\s+$/.test(tk)) { if (cur.length) { const sw = cx.measureText(' ').width; cur.push({ t: ' ', b, fg, w: sw }); w += sw; } return; }
        (tk.match(/[^\/]+\/?|\//g) || [tk]).forEach(pc => { const tw = cx.measureText(pc).width; if (w + tw > maxW && cur.length) { out.push(cur); cur = []; w = 0; } cur.push({ t: pc, b, fg, w: tw }); w += tw; });
      });
    });
    out.push(cur); return out;
  };
  const items = []; let y = M, maxW = 600;
  spec.blocks.forEach(b => {
    if (b.gap) { y += b.gap; return; }
    if (b.p != null) { const L = (Array.isArray(b.p) ? b.p.join('\n') : b.p).split('\n'); items.push({ k: 'p', y, L }); y += L.length * 18 + 8; return; }
    if (!b.t) return;
    const T = b.t, cells = placeT(T), nr = T.rows.length, rh = new Array(nr).fill(T.rh || 20), W = T.w.reduce((a, c) => a + c, 0), xs = [0]; T.w.forEach(w => xs.push(xs[xs.length - 1] + w)); maxW = Math.max(maxW, W);
    cells.forEach(x => { const fs = x.c.sz || T.fs || FS; x.fs = fs; x.vl = [].concat(...cellLines(x.c).map(l => wrapRuns(l, x.w - 2 * PX, fs, x.c))); x.ch = x.vl.length * (fs + 3) + 2 * PY; });
    cells.filter(x => x.rs === 1).forEach(x => { rh[x.ri] = Math.max(rh[x.ri], x.ch); });
    cells.filter(x => x.rs > 1).forEach(x => { let s = 0; for (let r = x.ri; r < x.ri + x.rs; r++) s += rh[r]; if (s < x.ch) rh[x.ri + x.rs - 1] += x.ch - s; });
    const ry = []; let yy = y + (T.mt || 0); rh.forEach(h => { ry.push(yy); yy += h; }); items.push({ k: 't', cells, ry, rh, xs }); y = yy;
  });
  const Wc = maxW + 2 * M, Hc = y + M; cv.width = Wc * SC; cv.height = Hc * SC; cx.scale(SC, SC); cx.fillStyle = '#fff'; cx.fillRect(0, 0, Wc, Hc); cx.textBaseline = 'middle';
  items.forEach(it => {
    if (it.k === 'p') { cx.fillStyle = '#000'; cx.font = fnt(0, 13); it.L.forEach((t, i) => cx.fillText(t, M, it.y + 9 + i * 18)); return; }
    it.cells.forEach(x => {
      const X = M + it.xs[x.ci], Y = it.ry[x.ri]; let H = 0; for (let r = x.ri; r < x.ri + x.rs; r++) H += it.rh[r];
      if (x.c.bg) { cx.fillStyle = x.c.bg; cx.fillRect(X, Y, x.w, H); } cx.strokeStyle = '#000'; cx.lineWidth = 1; cx.strokeRect(X + .5, Y + .5, x.w - 1, H - 1);
      const lh = x.fs + 3, n = x.vl.length;
      x.vl.forEach((ln, i) => {
        while (ln.length && ln[ln.length - 1].t === ' ') ln.pop(); const lw = ln.reduce((a, k) => a + k.w, 0); let xx = x.c.al === 'l' ? X + PX : X + (x.w - lw) / 2; const yy = Y + (H - n * lh) / 2 + lh / 2 + i * lh;
        ln.forEach(k => { cx.font = fnt(k.b, x.fs); cx.fillStyle = k.fg || '#000'; cx.fillText(k.t, xx, yy); xx += k.w; });
      });
    });
  });
  return cv;
}

// ── Excel (.xlsx écrit à la main : zip « stored » + CRC32) ──
const crcT = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
const crc32 = u => { let c = 0xFFFFFFFF; for (let i = 0; i < u.length; i++) c = crcT[(c ^ u[i]) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
function zipStore(files) {
  const enc = new TextEncoder(), parts = [], cd = []; let off = 0;
  files.forEach(([name, data]) => {
    const nb = enc.encode(name), db = enc.encode(data), crc = crc32(db), lh = new DataView(new ArrayBuffer(30)), ch = new DataView(new ArrayBuffer(46));
    [[0, 0x04034b50, 4], [4, 20, 2], [6, 0x0800, 2], [8, 0, 2], [10, 0, 2], [12, 0x21, 2], [14, crc, 4], [18, db.length, 4], [22, db.length, 4], [26, nb.length, 2], [28, 0, 2]].forEach(([o, v, n]) => n === 4 ? lh.setUint32(o, v, true) : lh.setUint16(o, v, true));
    [[0, 0x02014b50, 4], [4, 20, 2], [6, 20, 2], [8, 0x0800, 2], [10, 0, 2], [12, 0, 2], [14, 0x21, 2], [16, crc, 4], [20, db.length, 4], [24, db.length, 4], [28, nb.length, 2], [30, 0, 2], [32, 0, 2], [34, 0, 2], [36, 0, 2], [38, 0, 4], [42, off, 4]].forEach(([o, v, n]) => n === 4 ? ch.setUint32(o, v, true) : ch.setUint16(o, v, true));
    parts.push(new Uint8Array(lh.buffer), nb, db); cd.push(new Uint8Array(ch.buffer), nb); off += 30 + nb.length + db.length;
  });
  const cdLen = cd.reduce((a, b) => a + b.length, 0), en = new DataView(new ArrayBuffer(22));
  en.setUint32(0, 0x06054b50, true); en.setUint16(8, files.length, true); en.setUint16(10, files.length, true); en.setUint32(12, cdLen, true); en.setUint32(16, off, true);
  return new Blob([...parts, ...cd, new Uint8Array(en.buffer)], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
}
const colL = n => { let s = ''; for (n++; n > 0; n = Math.floor((n - 1) / 26)) s = String.fromCharCode(65 + (n - 1) % 26) + s; return s; };
function specXlsx(spec, sheetName) {
  const tabs = spec.blocks.filter(b => b.t).map(b => b.t), gridOf = T => T.grid || T.w.map(() => 1), NC = Math.max(1, ...tabs.map(T => gridOf(T).reduce((a, b) => a + b, 0))), wide = tabs.find(T => !T.grid && T.w.length === NC);
  const colW = wide ? wide.w.map(w => Math.round(w / 6.2 * 10) / 10) : new Array(NC).fill(10), fonts = [{ k: 'd', x: '<font><sz val="10"/><name val="Arial"/><family val="2"/></font>' }], fillK = [null, null], xfs = [{ k: 'd', x: '<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>' }];
  const argb = c => 'FF' + String(c || '#000000').replace('#', '').toUpperCase();
  const fontI = (b, fg, sz) => { const k = (b ? 'b' : '') + '|' + (fg || '') + '|' + (sz || 10); let i = fonts.findIndex(f => f.k === k); if (i < 0) { fonts.push({ k, x: '<font>' + (b ? '<b/>' : '') + '<sz val="' + (sz || 10) + '"/><color rgb="' + argb(fg) + '"/><name val="Arial"/><family val="2"/></font>' }); i = fonts.length - 1; } return i; };
  const fillI = bg => { if (!bg) return 0; let i = fillK.indexOf(bg); if (i < 0) { fillK.push(bg); i = fillK.length - 1; } return i; };
  const xfI = c => { const k = [c.bg || '', c.al || 'c', c.b ? 1 : 0, c.fg || '', c.sz || ''].join('|'); let i = xfs.findIndex(x => x.k === k); if (i < 0) { xfs.push({ k, x: '<xf numFmtId="0" fontId="' + fontI(c.b, c.fg, c.sz) + '" fillId="' + fillI(c.bg) + '" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="' + (c.al === 'l' ? 'left' : 'center') + '" vertical="center" wrapText="1"/></xf>' }); i = xfs.length - 1; } return i; };
  const rowsX = [], merges = []; let r = 0;
  const cellX = (c, ref, s) => {
    const L = cellLines(c), rich = L.some(l => l.some(x => x.b || x.fg)); if (!L.some(l => l.some(x => x.t))) return '<c r="' + ref + '" s="' + s + '"/>';
    if (!rich) return '<c r="' + ref + '" s="' + s + '" t="inlineStr"><is><t xml:space="preserve">' + esc(L.map(l => l.map(x => x.t).join('')).join('\n')) + '</t></is></c>';
    const runs = []; L.forEach((l, li) => { l.forEach(x => runs.push('<r><rPr><rFont val="Arial"/>' + (x.b || c.b ? '<b/>' : '') + '<color rgb="' + argb(x.fg || c.fg) + '"/><sz val="' + (c.sz || 10) + '"/></rPr><t xml:space="preserve">' + esc(x.t) + '</t></r>')); if (li < L.length - 1) runs.push('<r><rPr><rFont val="Arial"/><sz val="' + (c.sz || 10) + '"/></rPr><t xml:space="preserve">\n</t></r>'); });
    return '<c r="' + ref + '" s="' + s + '" t="inlineStr"><is>' + runs.join('') + '</is></c>';
  };
  spec.blocks.forEach(b => {
    if (b.gap) { r++; return; }
    if (b.p != null) { (Array.isArray(b.p) ? b.p.join('\n') : b.p).split('\n').forEach(t => { r++; rowsX.push('<row r="' + r + '">' + (t ? '<c r="A' + r + '" t="inlineStr"><is><t xml:space="preserve">' + esc(t) + '</t></is></c>' : '') + '</row>'); }); return; }
    if (!b.t) return;
    const T = b.t, g = gridOf(T), gs = [0]; g.forEach(v => gs.push(gs[gs.length - 1] + v)); const cells = placeT(T), base = r + (T.mt ? 1 : 0), map = {}, ht = {};
    const wch = i => { let w = 0; for (let k = gs[i]; k < gs[i + 1]; k++) w += colW[k] || 10; return w; };
    cells.forEach(x => {
      const c0 = gs[x.ci], c1 = gs[x.ci + x.cs] - 1, r0 = base + x.ri + 1, r1 = r0 + x.rs - 1, s = xfI(x.c);
      for (let rr = r0; rr <= r1; rr++) for (let cc = c0; cc <= c1; cc++) (map[rr] = map[rr] || {})[cc] = rr === r0 && cc === c0 ? cellX(x.c, colL(cc) + rr, s) : '<c r="' + colL(cc) + rr + '" s="' + s + '"/>';
      if (c1 > c0 || r1 > r0) merges.push(colL(c0) + r0 + ':' + colL(c1) + r1);
      if (x.rs === 1) { let w = 0; for (let k = gs[x.ci]; k < gs[x.ci + x.cs]; k++) w += colW[k] || 10; const n = cellLines(x.c).reduce((a, l) => a + Math.max(1, Math.ceil(l.map(q => q.t).join('').length / Math.max(4, w * 1.05))), 0); ht[r0] = Math.max(ht[r0] || 0, n * ((x.c.sz || T.fs || 10) + 3.5) + 4); }
    });
    for (let rr = base + 1; rr <= base + T.rows.length; rr++) rowsX.push('<row r="' + rr + '" ht="' + Math.max(ht[rr] || 0, (T.rh || 20) * .75).toFixed(1) + '" customHeight="1">' + Object.keys(map[rr] || {}).map(Number).sort((a, b2) => a - b2).map(cc => map[rr][cc]).join('') + '</row>');
    r = base + T.rows.length;
  });
  const sheet = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetPr><pageSetUpPr fitToPage="1"/></sheetPr><sheetViews><sheetView workbookViewId="0" showGridLines="0"/></sheetViews><sheetFormatPr defaultRowHeight="15"/><cols>' +
    colW.map((w, i) => '<col min="' + (i + 1) + '" max="' + (i + 1) + '" width="' + w + '" customWidth="1"/>').join('') + '</cols><sheetData>' + rowsX.join('') + '</sheetData>' + (merges.length ? '<mergeCells count="' + merges.length + '">' + merges.map(m => '<mergeCell ref="' + m + '"/>').join('') + '</mergeCells>' : '') +
    '<pageMargins left="0.4" right="0.4" top="0.5" bottom="0.5" header="0.3" footer="0.3"/><pageSetup orientation="landscape" fitToWidth="1" fitToHeight="0"/></worksheet>';
  const bd = '<border><left style="thin"><color rgb="FF000000"/></left><right style="thin"><color rgb="FF000000"/></right><top style="thin"><color rgb="FF000000"/></top><bottom style="thin"><color rgb="FF000000"/></bottom><diagonal/></border>';
  const styles = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="' + fonts.length + '">' + fonts.map(f => f.x).join('') + '</fonts><fills count="' + fillK.length + '"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill>' +
    fillK.slice(2).map(c => '<fill><patternFill patternType="solid"><fgColor rgb="' + argb(c) + '"/><bgColor indexed="64"/></patternFill></fill>').join('') + '</fills><borders count="2"><border><left/><right/><top/><bottom/><diagonal/></border>' + bd + '</borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="' + xfs.length + '">' + xfs.map(x => x.x).join('') +
    '</cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>';
  const X = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
  return zipStore([
    ['[Content_Types].xml', X + '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>'],
    ['_rels/.rels', X + '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>'],
    ['xl/workbook.xml', X + '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="' + esc(sheetName || 'Sheet1') + '" sheetId="1" r:id="rId1"/></sheets></workbook>'],
    ['xl/_rels/workbook.xml.rels', X + '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>'],
    ['xl/styles.xml', styles], ['xl/worksheets/sheet1.xml', sheet]
  ]);
}

// ── Contenu du mail « 10 DAY SCHEDULE » ──
const subjOf = (kind, a, b) => kind === 'sched' ? S.cfg.sched.subject.replace(/\{from\}/g, fdate(a)).replace(/\{to\}/g, fdate(b)) : S.cfg.avail.subject.replace(/\{date\}/g, flong(a));
const sigBlock = () => { let h = ''; try { h = D.signature ? D.signature() : ''; } catch (e) { } return { raw: '<div style="margin-top:14px;font-size:14px">' + (h || 'Best regards,<br>' + esc(S.name)) + '</div>' }; };
function buildSched(from, n) {
  const days = dayList(from, addD(from, n - 1)), ppl = people('eng'), cfg = S.cfg.sched;
  const head = [{ l: 'ENGINEER NAME + BASE', b: 1, al: 'c' }].concat(days.map(d => ({ l: [WD[wd(d)].toUpperCase(), fdm(d)], b: 1, bg: isWE(d) ? '#E7E6E6' : '', al: 'c' })));
  const rows = ppl.map(p => {
    const fg = regOf(p) === 'Asia' ? RED : '', nm = [[[fullUpper(p.full || p.n), { b: 1, fg }], [p.base ? ' (' + p.base + ')' : '', { b: 1, fg }], [' ' + [p.fn, p.icao].filter(Boolean).join(' '), { fg }]]].concat(qualLines(p.q).map(t => [[t, { fg }]]));
    return [{ l: nm, al: 'l' }].concat(days.map(d => { const e = eff(p.id, d), lab = [e.c, projList(e)].filter(Boolean), st = ST[e.g][e.s]; return { l: lab.length ? lab : st[2] || '', bg: PAL[e.fam], al: 'c' }; }));
  });
  const leg = [['on', 'On duty', 110], ['eng', 'Engaged', 110], ['off', 'Off duty', 110], ['un', 'Training / Not reported / Unavailable / Sick', 270], ['enf', 'Enforced off duty', 130]];
  const nl = days.length, la = Math.max(1, Math.round(nl * .2)), lc = Math.max(1, Math.round(nl * .4)), lg = [1, la, la, lc, Math.max(1, nl - 2 * la - lc)]; // légende alignée sur la grille Excel (1 + n colonnes)
  return {
    subject: subjOf('sched', days[0], days[days.length - 1]),
    blocks: [{ p: cfg.intro }, { t: { w: [300].concat(days.map(() => 72)), rh: 38, rows: [head].concat(rows) } }, { t: { w: leg.map(x => x[2]), grid: lg, mt: 10, rows: [leg.map(x => ({ l: x[1], bg: PAL[x[0]], al: 'c', sz: 10 }))] } }, { gap: 6 }, sigBlock()]
  };
}

// ── Contenu du mail « FAST AVAILABILITY STATUS » ──
function buildAvail(date) {
  const M = availModel(date), cfg = S.cfg.avail, bgK = k => k === 'asg' ? PAL.eng : k === 'av' ? PAL.on : PAL.off;
  const mx = [REGIONS.map(r => ({ l: r.toUpperCase(), b: 1, cs: 2, al: 'c' }))];
  MATRIX.forEach(t => mx.push([].concat(...REGIONS.map(r => [1, 2].map(b => ({ l: t + ' B' + b, bg: bgK(M.mx[t + '|' + r + '|' + b].k), al: 'c' }))))));
  const ct = [], cts = contactRows(date).rows; cts.forEach((x, i, a) => {
    const first = i === 0 || a[i - 1].role !== x.role; let rs = 1; if (first) for (let j = i + 1; j < a.length && a[j].role === x.role; j++) rs++;
    const row = []; if (first) row.push({ l: x.role || '', rs, al: 'c' });
    row.push({ l: [x.name || '', x.when || ''].filter(Boolean), al: 'c' });
    row.push({ l: x.lines.concat(x.email ? [[[x.email, { fg: LNK }]]] : []), al: 'c' }); ct.push(row);
  });
  const ro = [['NAME', 'BASE', 'CAT', 'MODELS', 'A/C SUPPORTED'].map(t => ({ l: t, b: 1, al: 'c' }))].concat(M.rows.map(r => {
    const p = r.p, fg = r.reg === 'Asia' ? RED : '', bg = bgK(r.st.k), o = { bg, fg, al: 'c' };
    return [Object.assign({ l: [p.n, p.fn || ''] }, o), Object.assign({ l: [p.base || '', [p.icao, p.iata].filter(Boolean).join('/')] }, o), Object.assign({ l: catOf(p.q) }, o), Object.assign({ l: modelLines(p.q) }, o), Object.assign({ l: [r.st.l1, r.st.l2].filter(Boolean) }, o)];
  }));
  const tl = [['ASSIGNED', PAL.eng], ['AVAILABLE', PAL.on], ['UNAVAILABLE', PAL.off]], bl = [['AVAILABLE', PAL.on, ''], ['ASSIGNED/ENGAGED', PAL.eng, ''], ['OFF DUTY & TRAINING', PAL.off, ''], ['FAST ASIA', '', RED]];
  return {
    subject: subjOf('avail', date),
    blocks: [{ p: cfg.intro }, { t: { w: [120, 120, 120], rh: 18, grid: [4, 4, 4], rows: [tl.map(x => ({ l: x[0], b: 1, bg: x[1], al: 'c', sz: 10 }))] } },
      { t: { w: [120, 120, 120, 120, 120, 120], grid: [2, 2, 2, 2, 2, 2], rh: 19, mt: 6, rows: mx } },
      ct.length ? { t: { w: [180, 180, 360], grid: [3, 3, 6], rh: 30, mt: 12, rows: ct } } : { gap: 0 },
      { t: { w: [120, 120, 60, 240, 180], grid: [2, 2, 1, 4, 3], rh: 34, mt: 12, rows: ro } },
      { t: { w: [120, 120, 120, 120, 240], grid: [2, 2, 2, 2, 4], rh: 18, mt: 4, rows: [bl.map(x => ({ l: x[0], b: 1, bg: x[1], fg: x[2], al: 'c', sz: 10 })).concat([{ l: '', al: 'c' }])] } },
      cfg.note ? { p: cfg.note } : { gap: 0 }, { gap: 4 }, sigBlock()].concat(cfg.link ? [{ raw: '<div style="margin-top:4px;font-size:13px"><a href="' + esc(cfg.link) + '" style="color:' + LNK + '">' + esc(cfg.link) + '</a></div>' }] : [])
  };
}

// ── Fenêtre « Send / Export » ──
const mails = s => String(s || '').split(/[,;\s]+/).filter(x => /@/.test(x));
const dl = (blob, name) => { const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 800); };
A.share = el => { S.sh = shDefaults(el.dataset.v || (S.tab === 'avail' ? 'avail' : 'sched')); drawShare(); };
function shDefaults(kind) {
  const c = S.cfg[kind], H = { kind, to: c.to || '', cc: c.cc || '', se: 0, from: today(), n: 10, date: S.tab === 'avail' ? S.adate : today(), subject: '', confirm: false, busy: false, ready: false, spec: null };
  S.mf = H.from; if (kind === 'avail') S.adate = H.date; return H;
}
function drawShare() {
  const H = S.sh, o = (a, v) => a.map(x => '<option' + (String(x) === String(v) ? ' selected' : '') + '>' + x + '</option>').join(''), inp = (k, lab, v, ph, cls) => '<label class="' + (cls || 'w') + '">' + lab + '<input data-a="sh" data-k="' + k + '" value="' + esc(v) + '"' + (ph ? ' placeholder="' + esc(ph) + '"' : '') + ' autocomplete="off"></label>';
  openMd(dh('Send / Export') + '<div class="sc-db"><div class="sc-seg" style="width:max-content;max-width:100%;margin-bottom:12px"><button data-a="shk" data-v="sched" class="' + (H.kind === 'sched' ? 'on' : '') + '">10-day schedule</button><button data-a="shk" data-v="avail" class="' + (H.kind === 'avail' ? 'on' : '') + '">Availability status</button></div>' +
    '<div class="sc-g2">' + (H.kind === 'sched' ? '<label>First day<input type="date" data-a="sh" data-k="from" value="' + H.from + '"></label><label>Days<select data-a="sh" data-k="n">' + o([7, 10, 14], H.n) + '</select></label>' : '<label>Day<input type="date" data-a="sh" data-k="date" value="' + H.date + '"></label><span></span>') +
    inp('to', 'To (comma separated)', H.to, 'name@company.com') + inp('cc', 'Cc', H.cc) + inp('subject', 'Subject', H.subject) + '</div><div id="sc-prev" class="sc-prev"></div></div><div class="sc-df" id="sc-shf"></div>', 'sh');
  fillPrev();
}
A.shk = el => { S.sh = shDefaults(el.dataset.v); drawShare(); };
Oc.sh = el => {
  const H = S.sh, k = el.dataset.k; if (!H) return; H[k] = k === 'n' ? +el.value : el.value; if (k === 'subject') H.se = 1;
  if (k === 'from') { if (!/^\d{4}-\d\d-\d\d$/.test(el.value)) { H.from = today(); } S.mf = H.from; paint(); }
  if (k === 'date') { if (!/^\d{4}-\d\d-\d\d$/.test(el.value)) { H.date = today(); } S.adate = H.date; paint(); }
  H.confirm = false; fillPrev();
};
function fillPrev() {
  const H = S.sh, m = $mo(), pv = m && m.querySelector('#sc-prev'); if (!H || !pv) return;
  H.ready = (H.kind === 'sched' ? monthsReady(H.from, addD(H.from, H.n)) : monthsReady(H.date, addD(H.date, 125))) && !S.dirB;
  H.spec = H.kind === 'sched' ? buildSched(H.from, H.n) : buildAvail(H.date);
  if (!H.se) { H.subject = H.spec.subject; const si = m.querySelector('[data-k="subject"]'); if (si) si.value = H.subject; }
  const cr = H.kind === 'avail' ? contactRows(H.date) : { miss: [], nc: [] }, ms = cr.miss;
  pv.innerHTML = (H.ready ? '' : '<div class="sc-warn" style="margin:0 0 10px">Loading the schedule data…</div>') + (ms.length ? '<div class="sc-warn" style="margin:0 0 10px">⚠ No ' + ms.join(', no ') + ' on the roster for this day — that line is missing from the contacts table (Schedule › Ops team).</div>' : '') + (cr.nc.length ? '<div class="sc-warn" style="margin:0 0 10px">⚠ No phone or e-mail found in the team database for ' + cr.nc.map(esc).join(', ') + '.</div>' : '') + specHtml(H.spec); fillFoot();
}
function fillFoot() {
  const H = S.sh, ft = $mo() && $mo().querySelector('#sc-shf'); if (!H || !ft) return; const ok = H.ready && !H.busy, n = mails(H.to).length, can = typeof D.sendMail === 'function', dis = ok ? '' : ' disabled';
  ft.innerHTML = '<button class="sc-btn" data-a="shcopy"' + dis + '>Copy</button><button class="sc-btn" data-a="shpng"' + dis + '>PNG</button><button class="sc-btn" data-a="shxls"' + dis + '>Excel</button><span class="sc-sp"></span>' +
    '<button class="sc-btn" data-a="shdraft"' + (ok && can ? '' : ' disabled') + '>Gmail draft</button><button class="sc-btn ' + (H.confirm ? '' : 'p') + '" data-a="shsend"' + (ok && can ? '' : ' disabled') + (H.confirm ? ' style="background:#e11d48;border-color:#e11d48;color:#fff"' : '') + '>' +
    (H.busy ? 'Working…' : H.confirm ? 'Confirm: send to ' + n + ' recipient' + (n === 1 ? '' : 's') : 'Send…') + '</button>';
}
const shName = H => H.kind === 'sched' ? 'schedule-' + H.from : 'availability-' + H.date;
A.shcopy = async () => {
  const H = S.sh, html = specHtml(H.spec), txt = specText(H.spec);
  try { await navigator.clipboard.write([new ClipboardItem({ 'text/html': new Blob([html], { type: 'text/html' }), 'text/plain': new Blob([txt], { type: 'text/plain' }) })]); toast('Copied — paste it in your mail'); }
  catch (e) {
    const d = document.createElement('div'); d.contentEditable = 'true'; d.style.cssText = 'position:fixed;left:-9999px;top:0'; d.innerHTML = html; root.appendChild(d);
    const r = document.createRange(); r.selectNodeContents(d); const s = getSelection(); s.removeAllRanges(); s.addRange(r); let ok = false; try { ok = document.execCommand('copy'); } catch (x) { } s.removeAllRanges(); d.remove();
    toast(ok ? 'Copied — paste it in your mail' : 'Copy failed — select the preview and copy it', !ok);
  }
};
A.shpng = () => {
  const H = S.sh; specCanvas(H.spec).toBlob(b => {
    if (!b) return toast('Could not create the image', 1); const f = new File([b], shName(H) + '.png', { type: 'image/png' });
    if (phone() && navigator.canShare && navigator.canShare({ files: [f] })) navigator.share({ files: [f], title: H.subject }).catch(() => { });
    else dl(b, f.name);
  }, 'image/png');
};
A.shxls = () => { const H = S.sh; try { dl(specXlsx(H.spec, H.kind === 'sched' ? 'Schedule' : 'Availability'), shName(H) + '.xlsx'); } catch (e) { toast('Could not create the Excel file: ' + e.message, 1); } };
A.shdraft = () => deliver(true);
A.shsend = () => {
  const H = S.sh; if (!H.confirm) { H.confirm = true; fillFoot(); clearTimeout(H.ct); H.ct = setTimeout(() => { if (S.sh === H) { H.confirm = false; fillFoot(); } }, 6000); return; }
  H.confirm = false; deliver(false);
};
async function deliver(draft) {
  const H = S.sh, to = mails(H.to), cc = mails(H.cc);
  if (!draft && !to.length) return toast('Add at least one recipient', 1);
  if (typeof D.sendMail !== 'function') return toast('Gmail is not available in this version of the app', 1);
  H.busy = true; fillFoot();
  try {
    await D.sendMail(to, cc, H.subject || H.spec.subject, specHtml(H.spec), { draft });
    toast(draft ? 'Draft created in Gmail' : 'Mail sent to ' + to.length + ' recipient' + (to.length > 1 ? 's' : ''));
    logIt((draft ? 'Gmail draft: ' : 'Mail sent: ') + (H.kind === 'sched' ? '10-day schedule from ' + fdate(H.from) : 'availability ' + fdate(H.date)));
    try { D.update(R('schedule/config/' + H.kind), { to: H.to.trim(), cc: H.cc.trim() }).catch(() => { }); } catch (e) { }          // on retient les destinataires
  } catch (e) { toast((e && e.message) || 'Could not send', 1); }
  H.busy = false; fillFoot();
}

// ═══ Point d'entrée (appelé par index.html : const m = await import('./ops-schedule.js'); m.open(deps)) ═══
export async function open(deps) {
  closeRoot(); D = deps; S = newState(); buildRoot(); renderAll();
  try { await load(); } catch (e) { S.err = (e && e.message) || String(e); S.loading = false; }
  renderAll();
}
export function close() { closeRoot(); S = null; root = null; }
