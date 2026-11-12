/* ═══════════════════════════════════════════════════════════════════════════════
   mydocs.js — My documents (remplace la page Profile de l'ancien site, Change City inclus)
   ───────────────────────────────────────────────────────────────────────────────
   Chargé À LA DEMANDE par index :   const m = await import('./mydocs.js'); m.open(deps);
   Firebase (réservé au propriétaire du profil, voir les règles) :
     profileDocs/<uid>/info             = fiche personnelle (nom, téléphone, contacts d'urgence, lieu de travail, adresse…)
     profileDocs/<uid>/sec/<clé>/<id>   = une ligne d'un document (visa, passeport, licence…) avec dates d'émission / d'expiration
     profileDocs/<uid>/log/<id>         = journal des modifications { at, by, info } : une ligne par champ modifié, JAMAIS les valeurs
     profileFiles/<uid>/<clé>/<id>      = pièces jointes d'une rubrique { name, type, size, at, data } (photo JPEG compressée ou PDF < 700 Ko)
   Réutilise le style de expenses.js (même barre du haut, mêmes boutons).
   ═══════════════════════════════════════════════════════════════════════════════ */
import { CSS as XP_CSS } from './expenses.js';

const OWNERS = ['prof_1781832236715'];               // module en test : utilisable seulement par ces profils (mets null pour l'ouvrir à tous)
const SOON = 90;                                      // « Expiring » = échéance dans moins de 90 jours
const PDFMAX = 700 * 1024;
const D2 = [['issued', 'Issued at', 'date'], ['expires', 'Expires at', 'date']];
const SECS = [
  { k: 'visas', t: 'Visas', f: [['number', 'Passport number'], ['country', 'Country'], ['issuedCountry', 'Issued country'], ...D2] },
  { k: 'passport', t: 'Passport', f: [['number', 'Passport number'], ['nationality', 'Nationality'], ...D2] },
  { k: 'license', t: 'License', f: [['type', 'License type'], ...D2] },
  { k: 'part135', t: 'Part 135', files: 1, note: 'Training, Authorization, License & ERT records' },
  { k: 'authorization', t: 'Authorization', f: [['type', 'Authorization type'], ...D2] },
  { k: 'training', t: 'Regulatory Training', f: [['type', 'Training type'], ...D2] },
  { k: 'typerating', t: 'Certificate Type Rating', f: [['type', 'Certificate type rating'], ['issued', 'Issued at', 'date']] },
  { k: 'ert', t: 'Certificate ERT', f: [['type', 'Certificate ERT type'], ...D2] },
  { k: 'crew', t: 'Crew Card', f: [['type', 'Crew card type'], ...D2] },
  { k: 'apec', t: 'Apec', f: [['number', 'Card number'], ...D2], note: 'Apec card is accepted in: Australia, Brunei Darussalam, Canada, Chile, Republic of China, Hong Kong, Indonesia, Japan, Republic of Korea, Malaysia, Mexico, New Zealand, Papua New Guinea, Peru, the Philippines, Russia, Singapore, Chinese Taipei, Thailand, the United States, Viet Nam.' },
  { k: 'criminal', t: 'Criminal Record', files: 1 }
];
const INFO = [['name', 'First name'], ['middle', 'Middle name'], ['surname', 'Surname'], ['tel', 'Telephone'], ['emName', 'Emergency contact 1'], ['emPhone', 'Emergency phone 1'], ['emName2', 'Emergency contact 2'], ['emPhone2', 'Emergency phone 2'], ['emName3', 'Emergency contact 3'], ['emPhone3', 'Emergency phone 3']];
const MGD = [['commenced', 'Date of commencement', 'date'], ['base1', 'First base'], ['base2', 'Second base'], ['country', 'Workplace country'], ['region', 'Workplace region'], ['city', 'Workplace city'], ['officialRegion', 'Official region'], ['address', 'Address'], ['birthCountry', 'Country of birth'], ['certType', 'Type of certificate'], ['agreement', 'Agreement info'], ['amex', 'Amex card (holder or last 4 digits only)']];

let D, root, S;
const A = {};
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const $ = q => root.querySelector(q);
const R = p => D.ref(D.db, p);
const uid = () => D.me().id;
const fmt = d => d ? new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';
const kb = e => Math.max(1, Math.round((e.size || 0) * 0.75 / 1024)) + ' KB';
const rowsOf = k => Object.values((S.d.sec || {})[k] || {}).sort((a, b) => (a.expires || a.issued || '').localeCompare(b.expires || b.issued || ''));
const st = d => { if (!d) return ''; const n = Math.round((new Date(d + 'T00:00:00') - new Date(new Date().toDateString())) / 864e5); return n < 0 ? 'expired' : n <= SOON ? 'soon' : 'ok'; };
const chip = s => s === 'expired' ? '<span class="xd-c bad">Expired</span>' : s === 'soon' ? '<span class="xd-c warn">Expiring</span>' : s === 'ok' ? '<span class="xd-c ok">Valid</span>' : '';
const worst = rs => rs.reduce((w, r) => { const x = st(r.expires); return x === 'expired' ? 'expired' : (x === 'soon' && w !== 'expired') ? 'soon' : w; }, rs.some(r => r.expires) ? 'ok' : '');

const toast = (m, bad) => {
  if (!root) return;
  root.querySelectorAll('.xp-toast').forEach(x => x.remove());
  const t = document.createElement('div'); t.className = 'xp-toast' + (bad ? ' bad' : ''); t.textContent = m; root.appendChild(t);
  setTimeout(() => t.remove(), bad ? 6000 : 2600);
};
const fail = e => { console.error('My documents:', e); const m = String((e && e.message) || e); toast(/permission/i.test(m) ? 'Firebase refused this (permission denied) — publish the profileDocs / profileFiles rules first.' : m, 1); };
const log = async info => {
  const id = 'g_' + Date.now() + Math.random().toString(36).slice(2, 5), e = { at: Date.now(), by: (D.me() || {}).name || '', info };
  S.d.log[id] = e; await D.set(R('profileDocs/' + uid() + '/log/' + id), e);
};

// ── Fichiers : photos compressées dans le navigateur, PDF petits seulement ────
const readURL = f => new Promise((ok, ko) => { const r = new FileReader(); r.onload = () => ok(r.result); r.onerror = () => ko(r.error); r.readAsDataURL(f); });
const loadImg = src => new Promise((ok, ko) => { const im = new Image(); im.onload = () => ok(im); im.onerror = () => ko(new Error('This file is not an image.')); im.src = src; });
async function shrink(file, max) {
  const u = URL.createObjectURL(file);
  try {
    const im = await loadImg(u), c = document.createElement('canvas');
    let s = Math.min(1, max / Math.max(im.width, im.height)), q = 0.72, out = '';
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
const putFile = async (k, id, f, max) => {
  const pdf = f.type === 'application/pdf';
  if (!pdf && !/^image\//.test(f.type)) throw new Error('Only photos and PDF files are accepted.');
  if (pdf && f.size > PDFMAX) throw new Error('This PDF is larger than 700 KB: compress it or send it as photos.');
  const data = pdf ? await readURL(f) : await shrink(f, max);
  const e = { name: f.name, type: pdf ? 'application/pdf' : 'image/jpeg', size: data.length, at: Date.now(), data };
  await D.set(R('profileFiles/' + uid() + '/' + k + '/' + id), e); return e;
};

// ── Vues ──────────────────────────────────────────────────────────────────────
const homeV = () => {
  const bad = {}, soon = {};
  SECS.forEach(s => rowsOf(s.k).forEach(r => { const x = st(r.expires); if (x === 'expired') bad[s.t] = (bad[s.t] || 0) + 1; else if (x === 'soon') soon[s.t] = (soon[s.t] || 0) + 1; }));
  const lst = o => Object.entries(o).map(([t, n]) => esc(t) + ': ' + n).join(' · ');
  return '<div class="xp-h"><div><h1>My documents</h1><div class="xp-m">Personal information and documents with their expiry dates</div></div></div>' +
    '<section class="xp-c"><h2>Expiring / expired documents</h2>' + (Object.keys(bad).length ? '<div class="xp-ck"><span class="xd-c bad">Expired</span> ' + lst(bad) + '</div>' : '') +
    (Object.keys(soon).length ? '<div class="xp-ck"><span class="xd-c warn">Expiring within ' + SOON + ' days</span> ' + lst(soon) + '</div>' : '') +
    (Object.keys(bad).length || Object.keys(soon).length ? '' : '<div class="xp-m">Nothing expires within ' + SOON + ' days.</div>') + '</section>' +
    '<div class="xd-grid"><button class="xd-card" data-a="info"><b>Personal information</b><span class="xp-m">Name, contacts, workplace, change log</span></button>' +
    SECS.map(s => { const rs = rowsOf(s.k); return '<button class="xd-card" data-a="sec" data-k="' + s.k + '"><b>' + esc(s.t) + '</b><span class="xp-m">' + (s.f ? rs.length + (rs.length === 1 ? ' item' : ' items') : 'Files') + '</span>' + chip(worst(rs)) + '</button>'; }).join('') + '</div>';
};

const infoV = () => {
  const i = S.d.info || {}, log = Object.values(S.d.log || {}).sort((a, b) => b.at - a.at).slice(0, 30);
  const f = ([k, lab, ty], ro) => '<div class="xp-f"><label for="i_' + k + '">' + lab + '</label><input id="i_' + k + '" type="' + (ty || 'text') + '" value="' + esc(i[k]) + '"' + (ro ? ' disabled' : '') + '></div>';
  return '<div class="xp-h"><h1>Personal information</h1><button class="xp-btn xp-pri" data-a="saveInfo">Save</button></div>' +
    '<section class="xp-c"><div class="xd-ph">' + (S.photo ? '<img src="' + S.photo + '" alt="Profile photo">' : '<div class="xd-ph0">No photo</div>') + '<label class="xp-dz">Change photo<input id="d_photo" type="file" accept="image/*" hidden></label></div>' +
    '<div class="xp-r2">' + INFO.map(x => f(x)).join('') + '</div></section>' +
    '<section class="xp-c"><h2>Workplace and administrative information</h2>' + (S.mgd ? '' : '<div class="xp-m" style="margin-bottom:10px">Managed by the BackOffice: you can read these fields but not change them.</div>') + '<div class="xp-r2">' + MGD.map(x => f(x, !S.mgd)).join('') + '</div></section>' +
    '<section class="xp-c"><h2>Change log</h2>' + (log.length ? log.map(e => '<div class="xd-f"><span>' + esc(new Date(e.at).toLocaleString('en-GB')) + ' · ' + esc(e.by) + '</span><span>' + esc(e.info) + '</span></div>').join('') : '<div class="xp-m">No change yet.</div>') + '</section>';
};

const secV = () => {
  const s = SECS.find(x => x.k === S.k), rs = rowsOf(s.k), e = (S.edit && (S.d.sec[s.k] || {})[S.edit]) || {}, files = Object.entries(S.files).sort((a, b) => a[1].at - b[1].at);
  const cols = s.f ? 'repeat(' + s.f.length + ',1fr) 90px 120px' : '';
  const inp = ([f, lab, ty]) => '<div class="xp-f"><label for="d_' + f + '">' + lab + '</label><input id="d_' + f + '" type="' + (ty || 'text') + '" value="' + esc(e[f]) + '"></div>';
  return '<div class="xp-h"><h1>' + esc(s.t) + '</h1></div>' + (s.note ? '<div class="xp-m" style="margin-bottom:12px">' + esc(s.note) + '</div>' : '') +
    (s.f ? '<section class="xp-c">' + (rs.length ? '<div class="xp-t hd" style="--c:' + cols + '">' + s.f.map(f => '<span>' + f[1] + '</span>').join('') + '<span>Status</span><span></span></div>' +
      rs.map(r => '<div class="xp-t" style="--c:' + cols + '">' + s.f.map(([f, , ty]) => '<span>' + (ty === 'date' ? fmt(r[f]) : esc(r[f] || '—')) + '</span>').join('') + '<span>' + chip(st(r.expires)) + '</span><span class="xp-ac"><button class="xp-lk" data-a="editRow" data-id="' + r.id + '">Edit</button><button class="xp-lk" data-a="delRow" data-id="' + r.id + '">Delete</button></span></div>').join('') : '<div class="xp-m">Nothing yet.</div>') + '</section>' +
      '<section class="xp-c"><h2>' + (S.edit ? 'Edit' : 'Add') + '</h2><div class="xp-r4">' + s.f.map(inp).join('') + '</div><button class="xp-btn xp-pri" data-a="saveRow">Save</button>' + (S.edit ? ' <button class="xp-btn" data-a="cancelRow">Cancel</button>' : '') + '</section>' : '') +
    '<section class="xp-c"><h2>Files</h2>' + (S.fl ? '<label class="xp-dz">Add a photo or a PDF (max 700 KB)<input id="d_file" type="file" accept="image/*,application/pdf" hidden></label>' +
      files.map(([id, x]) => '<div class="xd-f"><span>' + esc(x.name) + ' · ' + kb(x) + '</span><span><button class="xp-lk" data-a="fileView" data-id="' + id + '">View</button><button class="xp-lk" data-a="fileDel" data-id="' + id + '">Delete</button></span></div>').join('') : '<div class="xp-m">Loading files…</div>') + '</section>';
};

const render = () => {
  if (!root) return;
  $('#xp-v').innerHTML = ({ home: homeV, info: infoV, sec: secV })[S.v]();
  $('#xp-back').textContent = S.v === 'home' ? '← Menu' : '← My documents';
};

// ── Actions ───────────────────────────────────────────────────────────────────
A.close = () => { if (root) { root.remove(); root = null; } };
A.back = () => { if (S.v === 'home') return A.close(); S.v = 'home'; S.edit = null; render(); };
A.info = async () => {
  S.v = 'info'; render();
  if (S.photo == null) { const p = await D.get(R('profileFiles/' + uid() + '/photo/p')); S.photo = p.exists() ? p.val().data : ''; if (S.v === 'info') render(); }
};
A.sec = async d => {
  S.k = d.k; S.v = 'sec'; S.edit = null; S.files = {}; S.fl = false; render();
  const s = await D.get(R('profileFiles/' + uid() + '/' + d.k)); S.files = s.exists() ? s.val() : {}; S.fl = true;
  if (S.v === 'sec' && S.k === d.k) render();
};
A.saveInfo = async () => {
  const old = S.d.info || {}, now = {}, ch = [];
  [...INFO, ...MGD].forEach(([k, lab]) => {
    const e = $('#i_' + k); if (!e || e.disabled) { if (old[k] != null) now[k] = old[k]; return; }
    const v = e.value.trim(); if (v) now[k] = v; if ((old[k] || '') !== v) ch.push('Changed ' + lab);
  });
  if (!ch.length) return toast('Nothing changed.');
  await D.set(R('profileDocs/' + uid() + '/info'), now); S.d.info = now;
  for (const c of ch) await log(c);
  render(); toast('Saved.');
};
A.saveRow = async () => {
  const s = SECS.find(x => x.k === S.k), id = S.edit || 'd_' + Date.now(), row = { id };
  s.f.forEach(([f]) => { const v = ($('#d_' + f).value || '').trim(); if (v) row[f] = v; });
  if (!s.f.some(([f]) => row[f])) return toast('Fill in at least one field.', 1);
  if (row.issued && row.expires && row.expires < row.issued) return toast('The expiry date is before the issue date.', 1);
  await D.set(R('profileDocs/' + uid() + '/sec/' + s.k + '/' + id), row);
  (S.d.sec[s.k] = S.d.sec[s.k] || {})[id] = row; await log((S.edit ? 'Changed ' : 'Added ') + s.t); S.edit = null; render();
};
A.editRow = d => { S.edit = d.id; render(); };
A.cancelRow = () => { S.edit = null; render(); };
A.delRow = async d => {
  if (!confirm('Delete this item?')) return;
  const s = SECS.find(x => x.k === S.k);
  await D.remove(R('profileDocs/' + uid() + '/sec/' + s.k + '/' + d.id)); delete S.d.sec[s.k][d.id]; await log('Deleted ' + s.t); render();
};
A.fileView = d => { const x = S.files[d.id], w = window.open('', '_blank'); if (w) w.document.write(x.type === 'application/pdf' ? '<iframe src="' + x.data + '" style="border:0;width:100%;height:100vh"></iframe>' : '<img src="' + x.data + '" style="max-width:100%">'); };
A.fileDel = async d => { if (!confirm('Delete this file?')) return; await D.remove(R('profileFiles/' + uid() + '/' + S.k + '/' + d.id)); delete S.files[d.id]; await log('Deleted a file in ' + SECS.find(x => x.k === S.k).t); render(); };

// ── Style : celui d'expenses.js + quelques classes pour les cartes ───────────
const CSS = '.xd-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:12px}.xd-card{display:flex;flex-direction:column;gap:6px;align-items:flex-start;text-align:left;font:inherit;border:1px solid #e3e7ec;border-radius:12px;background:#fff;padding:14px 16px;cursor:pointer;min-height:92px}.xd-card:hover{border-color:#4338ca;background:#f1f0ff}.xd-c{display:inline-block;font-size:12px;font-weight:600;border-radius:99px;padding:2px 9px}.xd-c.ok{background:#e4f4e4;color:#1f5a1f}.xd-c.warn{background:#fef3d6;color:#7a5a00}.xd-c.bad{background:#fde4e1;color:#b42318}.xd-ph{display:flex;align-items:center;gap:14px;margin-bottom:14px}.xd-ph img,.xd-ph0{width:84px;height:104px;border-radius:10px;object-fit:cover;border:1px solid #e3e7ec;background:#eef0f4;display:grid;place-items:center;color:#5b6675;font-size:12px}.xd-f{display:flex;justify-content:space-between;gap:10px;padding:8px 0;border-top:1px solid #edf0f3}';

export async function open(deps) {
  D = deps; A.close();
  const me = D.me && D.me();
  if (!me || !me.id) { alert('Sign in with your engineer profile first.'); return; }
  if (OWNERS && !OWNERS.includes(me.id)) { alert('My documents is not available yet.'); return; }
  S = { v: 'home', k: null, d: { info: {}, sec: {}, log: {} }, files: {}, fl: false, edit: null, photo: null, mgd: !!(D.isAdmin() || D.ops()) };
  if (!document.getElementById('xp-css')) { const s = document.createElement('style'); s.id = 'xp-css'; s.textContent = XP_CSS; document.head.appendChild(s); }
  if (!document.getElementById('xd-css')) { const s = document.createElement('style'); s.id = 'xd-css'; s.textContent = CSS; document.head.appendChild(s); }
  root = document.createElement('div'); root.className = 'xp';
  root.innerHTML = '<div class="xp-top"><button id="xp-back" data-a="back">← Menu</button><b>My documents</b><span class="xp-sp"></span><button data-a="close" aria-label="Close">✕</button></div><div class="xp-b"><div class="xp-w" id="xp-v"><div class="xp-m">Loading…</div></div></div>';
  root.addEventListener('click', e => { const b = e.target.closest('[data-a]'); if (!b || !A[b.dataset.a]) return; Promise.resolve().then(() => A[b.dataset.a](b.dataset, b)).catch(fail); });
  root.addEventListener('change', e => {
    const t = e.target, f = t.files && t.files[0]; if (!f) return;
    if (t.id === 'd_file') { const id = 'f_' + Date.now(), k = S.k; putFile(k, id, f, 1600).then(async x => { S.files[id] = x; await log('Added a file in ' + SECS.find(s => s.k === k).t); render(); toast('File saved.'); }).catch(fail); }
    else if (t.id === 'd_photo') putFile('photo', 'p', f, 480).then(x => { S.photo = x.data; return log('Changed photo'); }).then(() => render()).catch(fail);
  });
  document.body.appendChild(root);
  try { const s = await D.get(R('profileDocs/' + uid())); if (s.exists()) { S.d = s.val(); S.d.info = S.d.info || {}; S.d.sec = S.d.sec || {}; S.d.log = S.d.log || {}; } } catch (e) { fail(e); }
  render();
}
