self.addEventListener('fetch', (event) => {
  console.log('fetch', event.request.url);
  event.respondWith(fetch(event.request));
});
