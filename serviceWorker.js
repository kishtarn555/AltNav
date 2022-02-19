const staticAltNav = "alt-nav-site";
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/logo/48x48.png",
  "/logo/72x72.png",
  "/logo/96x96.png",
  "/logo/AltNav512.png"
]

self.addEventListener("install", installEvent=> {
  installEvent.waitUntil(
    caches.open(staticAltNav).then((cache)=> {
      cache.addAll(assets)
    })
   )
  
})
