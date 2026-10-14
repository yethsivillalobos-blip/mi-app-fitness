const CACHE_NAME = 'fittrack-cache-v1';
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    './1001275074.jpg',
    './1001275075.jpg',
    './1001275076.jpg',
    './1001275077.jpg',
    './1001275078.jpg',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
    'https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Devuelve el archivo desde la caché local o lo busca en internet si no está
                return response || fetch(event.request);
            })
    );
});
