// Service Worker for 33/66/99 Days Challenge
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

// Handle notification click → open the challenge page
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: 'window' }).then(clients => {
      for (const client of clients) {
        if (client.url.includes('challenge') && 'focus' in client) return client.focus();
      }
      return self.clients.openWindow('./');
    })
  );
});
