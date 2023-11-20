const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
  };
  
  self.addEventListener("install", (event) => {
    event.waitUntil(
      addResourcesToCache([
        "/",
        "tuercasyruedas/index.html",
        "tuercasyruedas/css/build.css",
        "tuercasyruedas/src/build.js",
      ]),
    );
  });