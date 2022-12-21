self.addEventListener('install', e => console.log('pwa installed.'));
self.addEventListener('fetch', event => {});

const CACHE ='Music-Player-App'
const FILES = ['/images/faded.png', '/images/fallingdown.jpg','/images/favicon.ico ','/images/ratherbe.jpg','/images/stay.png','/music/Faded.mp3','/music/fallingdown.mp3','/music/Rather Be.mp3','/music/stay.mp3', 'index.html','manifest.json','script.js','style.css','sw.js']
function installCB(e) {
  e.waitUntil(
    caches.open(CACHE)
    .then(cache => cache.addAll(FILES))
    .catch(console.log)
  )
}
self.addEventListener('install', installCB)
