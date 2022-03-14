// Workbox
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.routing.registerRoute(
    /\.(?:js|mjs|css|html|json|js\?v=\d+)$/i,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'solution-navigator',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                // expiration in 1 week
                maxAgeSeconds: 60 * 60 * 24 * 7, 
            })
        ]
    })
);

self.addEventListener('activate', () => {
    clients.claim();
});