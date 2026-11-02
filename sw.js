// Pelet dnevnik: drži aplikaciju u memoriji mobitela da se otvara i bez interneta.
// Podaci NISU ovdje (oni su u IndexedDB i na GitHubu). Ovo je samo kod aplikacije.
const V="pelet-app-v1";
const SHELL=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=="GET"||u.origin!==location.origin)return; // GitHub API ide direktno, nikad iz cachea
  e.respondWith(caches.open(V).then(async c=>{
    const hit=await c.match(e.request,{ignoreSearch:true});
    const net=fetch(e.request).then(r=>{if(r&&r.ok)c.put(e.request,r.clone());return r;}).catch(()=>null);
    if(hit){e.waitUntil(net);return hit;}
    return (await net)||(await c.match("./index.html"))||Response.error();
  }));
});
