'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aebc0d1fa49a2cc958cce4c0419f4ff8",
"index.html": "e3c58630f0fc2debdb5fdf4d9f7388a6",
"/": "e3c58630f0fc2debdb5fdf4d9f7388a6",
"CNAME": "754b049f7399139ae4b4bc937df16f60",
"main.dart.js": "adb6448b8aa638dfa6947c334fff516e",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "9eb825b28b2f03763887c67089b44001",
"icons/Icon-192.png": "20e8c0021101ca7f8155586764c2ce1d",
"icons/Icon-maskable-192.png": "20e8c0021101ca7f8155586764c2ce1d",
"icons/Icon-maskable-512.png": "2f543fc9eb9959ca3f7ce5b40b94973b",
"icons/Icon-512.png": "2f543fc9eb9959ca3f7ce5b40b94973b",
"manifest.json": "b959fee8a123240f82c854d56cf99bf9",
".git/config": "f23dddc2d12b95d48fc468d64e7ce189",
".git/objects/3c/e1fb5d78d2c1ad3495b917373a0ef4087cb50a": "bf30ff5d6d708aef8ab48e3719c07447",
".git/objects/3c/3c541c236a62350c38b4b670c2752ed1f9a96d": "9f421a7fc9ee92df6b613bb832c7cd11",
".git/objects/34/e9856829b5baa2cbd0f0815024592a6a18739b": "64eb3fb60ad2bb784287cd90ee59db73",
".git/objects/a3/e63ffa06a0ce8999b672170fd55e9506364449": "2cce6760aeee43f54c1dbdff0b527411",
".git/objects/b4/7b9986b52dee4aeb2b3cc6245b6f323b3ed0e8": "2993333327c8f0843969a1daa4490ceb",
".git/objects/d1/06a53b410d97de531b0c3b1924e8832a91160e": "e072dd5dcf08ca2d84468ea1a595a4c9",
".git/objects/d1/ce529a5dda8f120b0cec789e71f3d3cded5147": "eb16951d77a093131a7ce29f569899d3",
".git/objects/18/74ec3e9d84e3a2a358201562f8f11b51bdfa49": "b5ec1950cd0e2f5bb53a00e45fb7f829",
".git/objects/pack/pack-a8ef2a6b794cfd5a562d5b59f3d694cd054d7efd.pack": "1d37edf1e6eb1cd63dce74f4bd876c77",
".git/objects/pack/pack-a8ef2a6b794cfd5a562d5b59f3d694cd054d7efd.idx": "d8e43b80f3f046b580d848c4ee5566fe",
".git/objects/7c/aaaa9179d91c9c42c012672c70eea6c0044ded": "b8a62acd33a2579151e89f3477725647",
".git/objects/7c/e9da30f13bd485ae1d95aac012ca3e0bae0304": "4d1a7b730a7e745070f344b1cf791c16",
".git/objects/4d/e19c95ce5937209e19e380c25729618f0ad2d1": "7327af7d040eca3db5d57aea2673782f",
".git/objects/2a/1b4b787873ebb5f852874551cfd3050726abca": "51617041b3ff13d733ba20b0d323802a",
".git/objects/6b/c65093359d2193757a58b076aef93523650e86": "6f96ce6a49f2352d5e8ae1bd2394a41d",
".git/objects/54/05cba627eaad6c90c6329907cbb081a1d67d0f": "e5c1b22beb00b55c4891b966865c2f3a",
".git/objects/6c/6d39787fa698402312f876c6fe138656e873d4": "4e791a5bfb221727fb9296d0deb982e1",
".git/objects/39/92da2bc9ae6023b20b20c3601bcee0ba19fdaa": "dec7bc5659b60b1717f34d0b601e5e76",
".git/objects/bf/64cdf9b2274bba12dbe9af3f8861c360a3aedf": "c23333fbc56724a676348aad3f0c5a79",
".git/objects/d4/51a7372181a289d586b580996abc59655dfdc0": "f901da336e099725a286ea30e990ac6d",
".git/objects/b8/fe45d99149e6ba1a701e7956ebad5284870f5b": "172bc8c2d6e67e2db475776def3e02d2",
".git/objects/b0/c3e8e2fb5ad79decee3d3c13fcfac45b1de226": "333fd6adffd2013db256f81fbfa03ea8",
".git/objects/b0/dbff34251faef591245f90d5c651caaaaf25c6": "3d31940c3087cb238fa07c8021c3f12a",
".git/objects/b9/2c27d41e0644b6c9b7d8e46b549aa08989a7f3": "a5a976b118ee94c77d37efbf11d16981",
".git/objects/c3/cb1abe6aad9ef7dcdf6c2b378745df0debab83": "530bfa4cafecad772751e69fc5f67fb2",
".git/objects/f9/116cd47a64c84c822d21d09e50feaf6a9d0100": "6e9639186b190b20d54482d3d01baf77",
".git/objects/f0/c58b68c7aee0801561e2819954401cea0ad5ed": "852d0d30ebfb7511d609205db08cea5c",
".git/objects/f0/0f4b559a8f66d4c3592fce9d419499d547b4ef": "42994cacccfc42c792b2bd050cea6409",
".git/objects/e8/9ac90d956e959003c03f57368b561e3a377900": "fb3b5bc5462960db205cb20ffec694a7",
".git/objects/49/ada8200c56af5dbfc178ccdf2a95d65d5ea01d": "7209b9561031cc5b6a3c38c06311c4db",
".git/objects/49/3504dd6f79d42ea24afa203b359b719ac6c51c": "e244ea7f6b4248dea2ba481f0ecb76ce",
".git/objects/47/4df07c524aaaed2cd1b11403b4d297e77dd67e": "d733280f82d06224e981eba3818e036b",
".git/objects/14/7347a0a464c1c69e539c3a2ba0ebe968ea7a9b": "951461bfff876a7bf8f461861d6d8fd0",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ebc01d93d99ee353991c2eb85a9c8009",
".git/logs/refs/heads/master": "ebc01d93d99ee353991c2eb85a9c8009",
".git/logs/refs/remotes/origin/master": "c93f01ef1e38b36f11a4ba85463e0644",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "4b1996fffed539d68a3bbd248ea31e41",
".git/refs/remotes/origin/master": "4b1996fffed539d68a3bbd248ea31e41",
".git/index": "032613ea3fa57b0cc4ce78dec5614527",
".git/COMMIT_EDITMSG": "432b464ab75f6d6f88185a1f0d1c050e",
".git/FETCH_HEAD": "baf697e3612a3e97ff64b630f68c1f18",
"assets/AssetManifest.json": "21bd878ea6f9ef6b5c325c1bcbf822eb",
"assets/NOTICES": "3a49d520c2b851aa1246fad8dcd8430a",
"assets/FontManifest.json": "2d774eadd3032330b08dc3b0bdab42ae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/packages/unicons/icons/UniconsLine.ttf": "b6a7ecc47d2853caf153cc1aa5cf93ec",
"assets/packages/unicons/icons/UniconsSolid.ttf": "630f8bd494e53400fa9cda3a4eb8ec10",
"assets/packages/unicons/icons/UniconsThinline.ttf": "fe40541d1f998ea2122a68d072f8e254",
"assets/packages/cryptocoins_icons/webfont/cryptocoins.ttf": "fa16c0d7fa0beccfa8534790552cfc79",
"assets/packages/crypto_font_icons/font/cryptofont-webfont.ttf": "bda334582cf63e3bf621e6a710bd3fd9",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/svg/roadmap.svg": "a2a0872fa2ef0077477101932a240125",
"assets/assets/svg/welcome.svg": "549c30a14b9d79b6584132dc3f6e37f8",
"assets/assets/svg/construction.svg": "c5888077bb72dd9411e72ca5709e8398",
"assets/assets/png/Icon-192.png": "defbfebb00ec7bd62fec45a0dc4565df",
"assets/assets/png/black_on_transparent.png": "4b24c67781cbe5c4b0cdc9e96d0343f8",
"assets/assets/png/person_kevin.png": "5428749584c2669669c56c4f4b04a3ff",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
