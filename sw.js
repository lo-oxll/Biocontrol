// ============================================================
// رَصَد — Service Worker بسيط (تخزين مؤقت للواجهة الثابتة فقط)
// ============================================================
// هذا لا يخزّن بيانات Supabase (البلاغات/الفيديوهات) — تلك تُدار
// عبر قائمة الانتظار المحلية (offline queue) في app.js. هدف هذا
// الملف فقط: يخلّي الصفحة والتصميم والخريطة الأساسية تفتح حتى بدون
// إنترنت، بدل شاشة بيضاء أو خطأ متصفح.
// ============================================================

const CACHE_NAME = 'rasad-shell-v1';
const APP_SHELL = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './config.js',
  'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Tajawal:wght@300;400;500;700;900&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.5.3/MarkerCluster.css',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.5.3/MarkerCluster.Default.css',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.5.3/leaflet.markercluster.js',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'
];

self.addEventListener('install', (event)=>{
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache=>
      // كل رابط بمفرده حتى لا يفشل التثبيت كله إذا تعذّر رابط واحد فقط (مثلاً CDN مؤقتاً غير متاح)
      Promise.allSettled(APP_SHELL.map(url=>cache.add(url)))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event)=>{
  event.waitUntil(
    caches.keys().then(keys=>
      Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event)=>{
  const req = event.request;
  if(req.method !== 'GET') return; // لا نتدخل بطلبات POST لـ Supabase مثلاً

  // بيانات Supabase الحيّة: شبكة أولاً دائماً (بدون تخزين مؤقت) حتى تظل محدَّثة
  if(req.url.includes('supabase.co') && req.url.includes('/rest/')) return;

  event.respondWith(
    caches.match(req).then(cached=>{
      const network = fetch(req).then(res=>{
        if(res && res.ok){
          const resClone = res.clone();
          caches.open(CACHE_NAME).then(cache=>cache.put(req, resClone));
        }
        return res;
      }).catch(()=>cached); // بدون إنترنت: استخدم النسخة المخزّنة إن توفرت
      return cached || network;
    })
  );
});
