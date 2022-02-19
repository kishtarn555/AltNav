const staticAltNav = "alt-nav-site";
const assets = [
]

self.addEventListener("install", installEvent=> {
  installEvent.waitUntil(
    caches.open(staticAltNav).then((cache)=> {
      cache.addAll(assets)
    })
   )
  
})
