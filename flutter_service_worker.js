'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "aa55a4fa4f4b8f3faabda42975f5eb3e",
"assets/AssetManifest.bin.json": "bf324b6562d29a6347daa818f95dd88e",
"assets/AssetManifest.json": "4d7e06ce4931ca8140a46762f6ef5aa6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "28e4d9ba5da3042d273341c53417e010",
"assets/lib/images/abura.jpg": "bf9e63368ba6978e3fbf69f35e3ee8e0",
"assets/lib/images/acajou.jpg": "f70def40fc76d5fa905c7dec8f0f3120",
"assets/lib/images/andoung.jpg": "8a5b7ab38403cb2ca32371dcd5fea801",
"assets/lib/images/awoura.jpg": "87e180530722a7ac97e86f524a6a8cf7",
"assets/lib/images/azobe.jpg": "10b820d49da59c9969d33dc83a119cde",
"assets/lib/images/beli.jpg": "9ff7012825553601cf6836cd6a5b9b07",
"assets/lib/images/bilinga.jpg": "69cc491fa14d1aad4f29db92518ac9a5",
"assets/lib/images/bosse_clair.jpg": "e7a22b678d0847df9c94406610dfcae1",
"assets/lib/images/dabema.jpg": "946db5f52294ab7f8b13796800480458",
"assets/lib/images/dibetou.jpg": "b1ce550506fed63be028085633765d4a",
"assets/lib/images/doussie.jpg": "5785ab04c2918dbf27378eccca2c23c2",
"assets/lib/images/fond.jpg": "c5289de902e3dcd6460bf02523fb56fb",
"assets/lib/images/fond2.jpg": "1f6dcdece9b7d4ef8765ece00dda486a",
"assets/lib/images/fond3.jpg": "6d7137ec3d3f3851451ec078d6c714a8",
"assets/lib/images/fond4.jpg": "f2b8811c8c20b50e6b2a65b586766ce9",
"assets/lib/images/fond5.jpg": "541b98281e69a735e7c6dc0e1cb780e1",
"assets/lib/images/iroko.jpg": "fe24e508682ed6c3db47360752e63ed6",
"assets/lib/images/izombe.jpg": "7f34ae95a4345c7a96b9360cab087a0f",
"assets/lib/images/kevazingo.jpg": "cde29cc254c7c3615d747c3dd7d60848",
"assets/lib/images/kosipo.jpg": "3903d9ff1819ab812773c42f8e0c1777",
"assets/lib/images/movingui.jpg": "906183c3e381694d8baca555e9c997c4",
"assets/lib/images/niove.jpg": "c0a9877213d097244738272d747e4215",
"assets/lib/images/okan.jpg": "7fea2cc64c009dc1e824f6ca43ee07a7",
"assets/lib/images/okoume.jpg": "c7165849af028fb931dc0a02418db4c6",
"assets/lib/images/ovengkol.jpg": "0a76cd11beb32d7d80452fa3674f0eeb",
"assets/lib/images/padouk.jpg": "c21206d39ecf7656e6ac01e99ef63a11",
"assets/lib/images/sapelli.jpg": "3ff3b27788c57aca4f646c1787e6fe17",
"assets/lib/images/tali.jpg": "9f31c0a00b1dc057b0517eddeb2ac3a4",
"assets/lib/images/tola.jpg": "851e5d0448c409297c20521a47aeff89",
"assets/lib/images/zingana.jpg": "804636a5a05c9a1b19ffa1b88958b85d",
"assets/NOTICES": "7f673730900047942f728fe9f06d3f75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "51abbef5d0578e095465a129dc9b0377",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "65ddbf6c2949e9a86ba17f3f3148a735",
"/": "65ddbf6c2949e9a86ba17f3f3148a735",
"main.dart.js": "7f5c590e1752e2eab2d7c8f3e47e63c1",
"manifest.json": "4a52c75c12ec5cefe489c563bcc9b006",
"version.json": "1b5561aa8a65dd89ed39504b91465911"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
