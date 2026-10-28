const CACHE_NAME = 'fast-update-shell-v38';
const APP_SHELL = ['./', './index.html', './ops-board.html', './ops-launcher.js'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

// ── FAST push (step 1) ──
// Affiche la notification reçue du Worker, puis, au clic, ouvre l'appli (ou la ramène au premier plan)
// en lui passant l'intention : { kind, fa, pid, owner, action, ts }.
//
// L'intention voyage par TROIS chemins, parce qu'aucun n'est garanti partout :
//   1) un message vers la fenêtre déjà ouverte ;
//   2) l'adresse « ?fastpush=… » si la fenêtre doit être ouverte (iOS peut ignorer cette adresse) ;
//   3) une copie dans le cache du navigateur, relue par l'appli au démarrage et au retour au premier plan.
// L'appli dédoublonne grâce à `ts`.
// Les données de la notification (event.notification.data) n'arrivent pas toujours au clic sur iPhone : le Worker
// répète donc l'intention dans le « tag » (fast-morning|FA|pid|owner), lu ici en secours.
const FAST_PUSH_STORE_URL = self.registration.scope + '__fastpush__';

self.addEventListener('push', event => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; }
  catch (e) { data = { title: 'FAST Update', body: event.data ? event.data.text() : '' }; }
  event.waitUntil(self.registration.showNotification(data.title || 'FAST Update', {
    body: data.body || '',
    icon: 'icon-192.png',                                          // même icône que dans manifest.json
    tag: data.tag || undefined,
    data: data.data || {},
    actions: Array.isArray(data.actions) ? data.actions : []     // boutons : selon navigateur / appareil (Notification.maxActions) ; absents sur iOS
  }));
});

function fastPushIntentFrom(notification, action) {
  let intent = Object.assign({}, notification.data || {});
  if (!intent.kind) {                                             // secours : lire le tag « fast-morning|FA|pid|owner »
    const p = String(notification.tag || '').split('|');
    if (p[0] === 'fast-morning' && p.length >= 4) {
      try { intent = { kind: 'morning', fa: decodeURIComponent(p[1]), pid: decodeURIComponent(p[2]), owner: decodeURIComponent(p[3]) }; } catch (e) {}
    }
  }
  intent.action = action || '';
  intent.ts = Date.now();
  return intent;
}

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const intent = fastPushIntentFrom(event.notification, event.action);
  event.waitUntil((async () => {
    try {                                                         // chemin 3 : copie durable
      const cache = await caches.open(typeof CACHE_NAME !== 'undefined' ? CACHE_NAME : 'fast-push-intent');
      await cache.put(FAST_PUSH_STORE_URL, new Response(JSON.stringify(intent), { headers: { 'Content-Type': 'application/json' } }));
    } catch (e) {}
    const wins = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const c of wins) {                                       // chemin 1 : fenêtre déjà ouverte
      if ('focus' in c) { c.postMessage({ type: 'fast-push', intent }); return c.focus(); }
    }
    const bytes = new TextEncoder().encode(JSON.stringify(intent));   // chemin 2 : adresse
    let bin = ''; for (const b of bytes) bin += String.fromCharCode(b);
    const enc = btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    return self.clients.openWindow(self.registration.scope + '?fastpush=' + enc);
  })());
});
