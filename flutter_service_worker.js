'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "35cf65dcf143d1ce84aad478e4e3f5dc",
"assets/AssetManifest.bin.json": "7d58cd66918aaf89a42f54396593a15b",
"assets/AssetManifest.json": "53d9332566c3eb9ff31815e649e55636",
"assets/assets/cv/Prajwal.CV.pdf": "7f2e1cf1bc1fbb874941034b91e9e734",
"assets/assets/fonts/amoneon-amoneon-regular-400.ttf": "e043733a92717ff0547a5b0a5682523d",
"assets/assets/fonts/DMSans-Regular.ttf": "916f3ae325c2bcd71bec9b469c6a6aa0",
"assets/assets/fonts/Inter_28pt-Regular.ttf": "fc20e0880f7747bb39b85f2a0722b371",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/10210182191579517842-128.png": "ccb5842595c64d22d33c22a63d0e7870",
"assets/assets/images/11755973651551952107-128.png": "171c861e84fe6fb7d884378cc8b03489",
"assets/assets/images/13691885491579517854-128.png": "1e2065e7b80a38f0e354777cf46072ac",
"assets/assets/images/14178750871552037061-128.png": "eadce6217711ccb2cbc1fb81edc313e9",
"assets/assets/images/17985894551536211770-128.png": "e90bf31c3c99fd28fe3e55fc055f29ce",
"assets/assets/images/19218518301553750371-128.png": "ee9338f4e8e56fdc7b8ce4eca7e06d35",
"assets/assets/images/378554371540553613-128.png": "2e2e2a4641db051e69bddc2c33686b12",
"assets/assets/images/3842828341530103314-128.png": "74fc8ee3f99f00fa5a2b5d46a36fc205",
"assets/assets/images/6247864081536298180-128.png": "ed320961f84f67529fda90f0a6b56761",
"assets/assets/images/632690741557997006-128.png": "dbcfb8a9e6f0cfd5b209b287f1df6145",
"assets/assets/images/8804286661557996995-128.png": "39eb2f31b3ffae2c726324609de779cb",
"assets/assets/images/9374299221540553610-128.png": "65630fe85c0b017b6da2e9da77ee85f6",
"assets/assets/images/android-studio-icon.webp": "c5b30e6c7bd133fcb0788b26c6f3acb9",
"assets/assets/images/app-development_10245981.png": "0305aade56c8d0eb15cd372fe4f23004",
"assets/assets/images/arthomed%2520pung.PNG": "f20af6e5fb0c0b879f9a9a51a1662f5b",
"assets/assets/images/coding_2010990.png": "6c73ade4a8ebd8e571dadca0bb6434c8",
"assets/assets/images/database_11921716.png": "ef2acd36af81da45ff010150b947bf9f",
"assets/assets/images/developer-activity-concept-illustration.png": "7d386f54e395c2ce24aba8c048366fe1",
"assets/assets/images/digital-marketing_7008393.png": "c5fffefe1812a528d9c38f1227a8f448",
"assets/assets/images/github_2504911.png": "3d4c7482f267f5accbb7461766f3f790",
"assets/assets/images/grand%2520desi%2520pratha.PNG": "8066f8fbe129e1f4184625b56ec6470a",
"assets/assets/images/instagram_2111463.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/images/linkedin_2504923.png": "d604727cedcd27fcc981ffdb1f318a66",
"assets/assets/images/RAC.png": "7e969c8bb75807b179ad80cb691b3b12",
"assets/assets/images/world-wide-web_1927656.png": "eef835e665ab4c33e663fc97654bf9b8",
"assets/assets/lottie/Animation%2520-%25201724317668666.json": "0ca30bb038076956c720de0b6e978da6",
"assets/FontManifest.json": "c3adadb6f7a4bd865423a3c91f108b76",
"assets/fonts/MaterialIcons-Regular.otf": "8c9cddd8dbfd5140a19b86006cdbed53",
"assets/NOTICES": "529c2a5df5914dd246ed6331aa75214a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2a1c9978846d5b318eeaf8c3badef438",
"/": "2a1c9978846d5b318eeaf8c3badef438",
"main.dart.js": "cfae52a5c5079a24a3ed6b706ee196ba",
"manifest.json": "75408a975f2ce50d7adf76207ef438ce",
"version.json": "e29fe1ccd939f0b3740f7dc193cfc7ce"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
