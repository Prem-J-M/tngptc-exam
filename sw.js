/* TNGPTC service worker: no caching of pages or API calls (always fresh).
   Only shows offline.html when the network is down on page open. */
var V = "tngptc-v1";
var OFFLINE = "offline.html";

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(V)
      .then(function (c) { return c.addAll([OFFLINE, "icon-192.png"]); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (ks) {
        return Promise.all(ks.filter(function (k) { return k !== V; })
          .map(function (k) { return caches.delete(k); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var r = e.request;
  if (r.mode === "navigate") {
    e.respondWith(fetch(r).catch(function () { return caches.match(OFFLINE); }));
  }
});
