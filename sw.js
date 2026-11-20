const CACHE='wp-shifts-v10.1';
const ASSETS=['./','./index.html','./manifest.json','./firebase-config.js','./icons/icon-192.png','./vendor/firebase/firebase-app-compat.js','./vendor/firebase/firebase-auth-compat.js','./vendor/firebase/firebase-firestore-compat.js','./fonts/rubik-he.woff2','./fonts/rubik-lat.woff2','./fonts/suez-he.woff2','./fonts/suez-lat.woff2'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.origin!==location.origin)return; // Firebase/Fonts — לא נוגעים
  // רשת קודם, מטמון כגיבוי — כך עדכונים מגיעים מיד
  e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(m=>m||caches.match('./index.html'))));
});
