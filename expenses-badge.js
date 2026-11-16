/* ═══════════════════════════════════════════════════════════════════════════════
   expenses-badge.js — petit module chargé APRÈS LA CONNEXION, pour tous les profils (≈ 3 Ko)
   · dit si la personne est comptable (expenseConfig/accountants/<uid>) → window.__expAcct
   · montre / cache le bouton Expenses du menu (attribut data-exp-only) selon ROLLOUT ci-dessous
   · pour les contrôleurs (Ops, admins, comptables) : pastille « n notes de frais à contrôler » sur le bouton Expenses du menu
   · profil comptable « uniquement comptabilité » : ouvre l'écran Expenses tout seul à la connexion (une fois par session)
   · canDo() : règle « qui peut faire quel contrôle » — partagée avec expenses.js et expenses-review.js (les VRAIES règles restent celles de Firebase)
   Appelé par index : import('./expenses-badge.js').then(m => m.start(deps))
   ═══════════════════════════════════════════════════════════════════════════════ */
export const OWNER_ID = 'prof_1781832236715';
// QUI VOIT Expenses (réglage unique, lu aussi par expenses.js) : 'owner' = ton profil seulement (test) · 'ops' = + profils Ops et admins · 'all' = tous les engineers. Les comptables y ont toujours accès.
export const ROLLOUT = 'owner';
export const canOpen = (id, ops, acct) => ROLLOUT === 'all' || id === OWNER_ID || (ROLLOUT === 'ops' && !!ops) || !!acct;

// q : entrée de expenseQueue { uid, c, c1, c2 } · n : contrôle visé (1, 2, 3) · who : { me, ops, acct, test }
export function canDo(q, n, who) {
  if (!q || !who || !who.me) return false;
  if (who.test && who.me === OWNER_ID) return n === (q.c || 0) + 1 && n >= 1 && n <= 3;     // mode test : le propriétaire fait les trois contrôles lui-même
  if (q.uid === who.me || n !== (q.c || 0) + 1) return false;
  if (n === 1) return !!who.ops;
  if (n === 2) return !!who.ops && q.c1 !== who.me;
  if (n === 3) return !!who.acct && q.c1 !== who.me && q.c2 !== who.me;
  return false;
}
export const flat = tree => { const o = []; Object.entries(tree || {}).forEach(([uid, rs]) => Object.entries(rs || {}).forEach(([rid, q]) => { if (q && typeof q === 'object') o.push(Object.assign({ uid, rid }, q)); })); return o; };
export const countFor = (tree, who) => flat(tree).filter(q => canDo(q, (q.c || 0) + 1, who)).length;

let offs = [], booted = null, vis = null;
const show = ok => { document.querySelectorAll('[data-exp-only]').forEach(b => { b.style.display = ok ? '' : 'none'; }); };
const paint = n => {
  document.querySelectorAll('[data-exp-only]').forEach(b => {
    let s = b.querySelector('.xp-bdg');
    if (!n) { if (s) s.remove(); return; }
    if (!s) { s = document.createElement('span'); s.className = 'xp-bdg'; s.style.cssText = 'margin-left:8px;min-width:18px;padding:1px 6px;border-radius:99px;background:#dc2626;color:#fff;font:700 11px system-ui;text-align:center'; b.appendChild(s); }
    s.textContent = n > 99 ? '99+' : String(n);
  });
};
export function stop() { offs.forEach(f => { try { f(); } catch (e) { } }); offs = []; booted = null; vis = null; window.__expAcct = false; paint(0); show(false); }

export async function start(deps) {
  const me = deps.me && deps.me(); if (!me || !me.id) return;
  if (booted === me.id) return; stop(); booted = me.id;
  let acct = null;
  try { const s = await deps.get(deps.ref(deps.db, 'expenseConfig/accountants/' + me.id)); acct = s.exists() ? (s.val() || {}) : null; } catch (e) { }
  if (booted !== me.id) return;                                                   // stop() ou un autre profil est passé pendant l'attente : on abandonne
  window.__expAcct = !!acct;
  const ops =!!(deps.isAdmin() || deps.ops() || me.id === OWNER_ID), who = { me: me.id, ops, acct: !!acct, test: false };     // le propriétaire compte comme Ops (règles Firebase)
  vis = canOpen(me.id, ops, !!acct); show(vis); const tm = setInterval(() => show(vis), 2000); offs.push(() => clearInterval(tm));       // le menu peut être redessiné par l'app : on réapplique
  if ((ops || acct) && deps.onValue) {
    try { const t = await deps.get(deps.ref(deps.db, 'expenseConfig/test')); who.test = t.exists() && t.val() === true; } catch (e) { }
    if (booted !== me.id) return;
    try { offs.push(deps.onValue(deps.ref(deps.db, 'expenseQueue'), snap => paint(countFor(snap.val(), who)), () => { })); } catch (e) { }
  }
  if (acct && acct.only) {
    let done = false; try { done = sessionStorage.getItem('xp-auto') === me.id; sessionStorage.setItem('xp-auto', me.id); } catch (e) { }
    if (!done && typeof window.openExpenses === 'function') setTimeout(() => window.openExpenses({ view: 'ac' }), 700);
  }
}
