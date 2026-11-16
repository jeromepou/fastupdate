/* ═══════════════════════════════════════════════════════════════════════════════
   expenses-mail.js — mails des Expenses (calcul PUR : aucune dépendance DOM ni Firebase)
   · buildMime(...)        : message RFC 822 multipart AVEC pièces jointes (Excel + PDF du relevé mensuel)
   · confirmMail(...)      : mail de confirmation reçu par l'engineer quand il envoie une note de frais
   · returnMail(...)       : mail envoyé à l'engineer quand un contrôleur renvoie sa note de frais
   · inviteMail(...)       : invitation d'une personne au profil comptable (Thalia ou un futur employé)
   · le mail mensuel (« Attached your Mar. 26 cash expenses… ») est dans expenses-stmt.js (mailBody)
   L'envoi lui-même passe par deps.sendRaw (Gmail de la personne connectée) ou deps.sendMail (HTML seul).
   ═══════════════════════════════════════════════════════════════════════════════ */

const H = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const enc = new TextEncoder();
const b64 = u8 => { let s = ''; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s); };
const wrap76 = s => s.replace(/.{1,76}/g, m => m + '\r\n');
const hdr = s => /^[\x20-\x7e]*$/.test(s) ? s : '=?UTF-8?B?' + b64(enc.encode(s)) + '?=';                // objet / noms non ASCII (RFC 2047)
const fname = s => String(s).replace(/[\r\n"\\]/g, '_');
const first = n => { const w = String(n || '').trim().split(/\s+/).filter(Boolean)[0]; return w ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : 'colleague'; };
export const addrs = a => (Array.isArray(a) ? a : String(a || '').split(/[;,]/)).map(x => String(x).trim()).filter(x => /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(x) || /<[^\s@<>]+@[^\s@<>]+>$/.test(x));

// to, cc : tableaux d'adresses · attachments : [{ name, type, bytes: Uint8Array }] → Uint8Array (message prêt pour Gmail : upload « message/rfc822 »)
export function buildMime({ to, cc, subject, html, attachments }) {
  const T = addrs(to), C = addrs(cc), at = attachments || [], bd = '=_has_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
  if (!T.length) throw new Error('No valid recipient address.');
  const L = [];
  L.push('To: ' + T.join(', ')); if (C.length) L.push('Cc: ' + C.join(', '));
  L.push('Subject: ' + hdr(String(subject || '')), 'MIME-Version: 1.0');
  if (!at.length) {
    L.push('Content-Type: text/html; charset=UTF-8', 'Content-Transfer-Encoding: base64', '', wrap76(b64(enc.encode(String(html || '')))).replace(/\r\n$/, ''));
    return enc.encode(L.join('\r\n') + '\r\n');
  }
  L.push('Content-Type: multipart/mixed; boundary="' + bd + '"', '', '--' + bd, 'Content-Type: text/html; charset=UTF-8', 'Content-Transfer-Encoding: base64', '', wrap76(b64(enc.encode(String(html || '')))).replace(/\r\n$/, ''));
  at.forEach(a => {
    L.push('--' + bd, 'Content-Type: ' + (a.type || 'application/octet-stream') + '; name="' + fname(a.name) + '"', 'Content-Disposition: attachment; filename="' + fname(a.name) + '"', 'Content-Transfer-Encoding: base64', '', wrap76(b64(a.bytes)).replace(/\r\n$/, ''));
  });
  L.push('--' + bd + '--', '');
  return enc.encode(L.join('\r\n'));
}

const money = (n, c) => (c ? c + ' ' : '') + (Math.round(n * 100) / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const sums = ls => { const t = {}; ls.forEach(l => { t[l.currency] = (t[l.currency] || 0) + (parseFloat(l.amount) || 0); }); return Object.entries(t).map(([c, v]) => money(v, c)).join(' · ') || '—'; };
const wrapHtml = (body, signature) => '<div style="font:14px/1.5 Arial,sans-serif;color:#1b2430">' + body + (signature || '<p>Best regards</p>') + '</div>';
const when = at => new Date(at || Date.now()).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

// r : rapport envoyé · v : version envoyée { at, note, lines } · me : { name }
export function confirmMail(r, v, me, o) {
  o = o || {}; const ls = Object.values((v && v.lines) || r.lines || {}), ref = r.kind === 'ewt' ? 'EWT ' + (r.etype || '') + (r.category ? ' ' + r.category : '') : (r.wo || 'No work order'), miss = ls.filter(l => !l.np).length;
  const html = wrapHtml('<p>Hello ' + H(first(me && me.name)) + ',</p><p>Your expense report <b>' + H(ref) + '</b> was sent to the BackOffice (version ' + H(r.ver || 1) + ') on ' + H(when(v && v.at)) + '.</p>' +
    '<p>' + ls.length + ' expense' + (ls.length > 1 ? 's' : '') + ' · ' + H(sums(ls)) + (miss ? '<br>' + miss + ' without a receipt photo' : '') + (v && v.note ? '<br>Your note: ' + H(v.note) : '') + '</p>' +
    '<p>Next steps: two checks by the Ops team, then the accounting check. You can recall it with “Back to edit” in the app until accounting has approved it.</p>', o.signature);
  return { subject: 'Expenses sent — ' + ref + ' (v' + (r.ver || 1) + ')', html };
}

// ret : { by, name, at, note, lines: { ligneId: remarque } } · lineName(id) → libellé de la ligne
export function returnMail(r, ret, who, o) {
  o = o || {}; const ref = r.kind === 'ewt' ? 'EWT ' + (r.etype || '') : (r.wo || 'No work order'), fl = Object.entries((ret && ret.lines) || {});
  const html = wrapHtml('<p>Hello ' + H(first(who && who.name)) + ',</p><p>Your expense report <b>' + H(ref) + '</b> (version ' + H(r.ver || 1) + ') was returned by ' + H((ret && ret.name) || 'the BackOffice') + '.</p>' +
    (ret && ret.note ? '<p><b>Note:</b> ' + H(ret.note).replace(/\n/g, '<br>') + '</p>' : '') +
    (fl.length ? '<p><b>Expenses to fix:</b></p><ul>' + fl.map(([id, n]) => '<li>' + H(o.lineName ? o.lineName(id) : id) + (n ? ' — ' + H(n) : '') + '</li>').join('') + '</ul>' : '') +
    '<p>Open Expenses in the app, press “Back to edit”, fix it and send it again.</p>', o.signature);
  return { subject: 'Expenses returned — ' + ref + ' (v' + (r.ver || 1) + ')', html };
}

export function inviteMail(person, url, o) {
  o = o || {};
  const html = wrapHtml('<p>Hello ' + H(first(person && person.name)) + ',</p><p>You now have access to the <b>Accounting</b> area of the FAST app (expense reports).</p>' +
    '<ol><li>Open <a href="' + H(url) + '">' + H(url) + '</a></li><li>Choose your profile <b>' + H((person && person.name) || '') + '</b> and enter your PIN.</li><li>The Accounting screen opens by itself.</li></ol>' +
    '<p>You will find there: the final check of expense reports (check 3), the monthly statements (Excel + receipts PDF, sent by mail from your own mailbox), the exchange rates and the people who have access.</p><p>If you cannot sign in, simply reply to this mail.</p>', o.signature);
  return { subject: 'FAST — your Accounting access', html };
}
