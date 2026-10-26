// Ember Kingdom: a minimal service worker. It only lets the browser offer "Add to Home screen" as an app.
// It caches nothing, so a new version of the game always loads fresh.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request))});
