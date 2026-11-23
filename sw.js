// 讓手機可以「安裝到主畫面」用的最小 service worker：不存任何快取，每次都從網路拿最新資料
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { if (e.request.method === 'GET') e.respondWith(fetch(e.request)); });
