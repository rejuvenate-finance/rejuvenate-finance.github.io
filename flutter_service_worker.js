'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aebc0d1fa49a2cc958cce4c0419f4ff8",
"index.html": "becabd2cc9a95a86682d6b502d01f0f7",
"/": "becabd2cc9a95a86682d6b502d01f0f7",
"CNAME": "754b049f7399139ae4b4bc937df16f60",
"main.dart.js": "ca8e895a0e2b458499b13f2bd6ad45a3",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "9eb825b28b2f03763887c67089b44001",
"icons/Icon-192.png": "20e8c0021101ca7f8155586764c2ce1d",
"icons/Icon-maskable-192.png": "20e8c0021101ca7f8155586764c2ce1d",
"icons/Icon-maskable-512.png": "2f543fc9eb9959ca3f7ce5b40b94973b",
"icons/Icon-512.png": "2f543fc9eb9959ca3f7ce5b40b94973b",
"manifest.json": "b959fee8a123240f82c854d56cf99bf9",
".git/config": "f23dddc2d12b95d48fc468d64e7ce189",
".git/objects/0d/996db53b30078e03481133c8753aeb5a015536": "98de6723416c58904cc0aafc9e5d0df7",
".git/objects/3b/e869b7a16b90b3d9f9b2f24857b8a6aed76b85": "ee8d8738df41f037bd6c5003addd3014",
".git/objects/05/2cea6086d2ed8c8c2d025007170c3d8a035316": "062034e5987a39b88c92261e474388aa",
".git/objects/9d/a73e147c35cbab282205cdfab5bd469ef8a465": "eb21a5a056e04387265d9d44c906fea3",
".git/objects/a3/466f0ff10de712c8794ecb00565c481fe852dd": "9be3122ef7b18318fa1f5f2d860cae9d",
".git/objects/b2/c39f9f80f29554562da6cfbd525fdbab29a93b": "ec7b3622418bb12f16660032885fd8c8",
".git/objects/bc/936223fbe37148bb5437fe211d4ec84cca769b": "5e6524b57eb1b091eaf9a02833761dc6",
".git/objects/e5/cce216a2ff20ebb5c21bdf679a6b2bd40afde6": "80d7de9864f0ec33f0df30d3fc119c4a",
".git/objects/ee/a884e24a216a249ce8a4d95ab953355301d11e": "3d6005fc22c5d1d991842d982f14faed",
".git/objects/fd/91ca47398b4aa2e1bd99d2750f34c6ce637bc1": "5415d9163988243b2d8240fd4540a86f",
".git/objects/ec/307e8b744d682b305209b1660f3feb0e1e2d1d": "0f1621043cd23891a895c499f6f0ac39",
".git/objects/pack/pack-4c0c71afae84ab98fdd12fcf3e53e0802825c50d.pack": "473acde89bb5f030fc54ae68b1816d9a",
".git/objects/pack/pack-4c0c71afae84ab98fdd12fcf3e53e0802825c50d.idx": "f8fb844fd8f90b8e5d3d8b61f25a4616",
".git/objects/81/6bca92b586c90d48ad39801d01d9540b794f56": "671431f18e0b3b9b3884ca7968d5735f",
".git/objects/36/1a700e1fcc1e981253dc21ca3ae7c359fe9c1d": "2faa3ed2c5ca21b40980c5ff249518a8",
".git/objects/96/39c6ebc24172557c86a58bd62a3c990b9ab6bc": "80aef5b8ccc1f75b090a805f00465854",
".git/objects/3a/9d0794bd7df5e374630fd9d699da63576ae1ee": "47a48eb1526c757f1861af5bf3f0422c",
".git/objects/3f/5bc6d0193a6a0a670b4acd92aaca42df469849": "09adb5dca443aa92af90ab040f6e8bf3",
".git/objects/01/fa4e10068e26fb6a4c06b0e3e0d9ae3496710e": "151cd197934a4c701f89d83d107d0435",
".git/objects/dc/fd6b7cfe40a15ef90f8b55f82d81a7bdf1f2cd": "eca1373f94ffdba00489114a4131646f",
".git/objects/d5/a020b86c1b289cd6c49c3ab2abbacddc74e924": "9d6fb81ce8b77d9fe65d731bde11e8da",
".git/objects/c3/9f5989f212cdb35eb7e642ad23e160f9d34ed4": "fa4b3bd96387ac33dbd21b67036ce7ed",
".git/objects/f1/a7393d1e6ff450dd67049ffa00f5bda9f8e006": "0de99cb1dc6ca04be997e0a67ee78e5c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1b/53ba01a28d0fa274b3f3cce692124d336924b1": "21c5242b17f8e0943ac011844e8c8518",
".git/objects/24/5b709b2eb25da475be7b5c55769dceb8dfa904": "003b36ad62acf4a0d7baaa1aac3f276f",
".git/objects/1c/40a2a263f99ae1d1d08287f1fa8b6c5642b468": "5a39dccd97f414db63e21b400313aee1",
".git/objects/82/fe4231798ac46bbe39655e77673a24422e0f0f": "74dd88de99f5b13975a968f6e44dc419",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a722fe7f08e4d09a1a26b295b469d5d0",
".git/logs/refs/heads/master": "a722fe7f08e4d09a1a26b295b469d5d0",
".git/logs/refs/remotes/origin/master": "f59062b9f54e40e810fa7fb72f19af17",
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
".git/refs/heads/master": "4ca67cb667c760108520485edab2bc70",
".git/refs/remotes/origin/master": "4ca67cb667c760108520485edab2bc70",
".git/index": "8677b1a9d863ad86a801331b20c0e30b",
".git/COMMIT_EDITMSG": "64abc24ca8e7e8b4dbf3e4f2cbe13424",
".git/FETCH_HEAD": "c72f63e57afaa21d818de768602e11ac",
"assets/AssetManifest.json": "e83a0c015fdfa4a0aa7214f38ed9ece6",
"assets/NOTICES": "6d58c8cce4bd941abccdefe76cc207b0",
"assets/FontManifest.json": "e024588c84b5d20cb7869d6f908130e8",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
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
"assets/assets/svg/services.svg": "a2a0872fa2ef0077477101932a240125",
"assets/assets/svg/roadmap.svg": "a2a0872fa2ef0077477101932a240125",
"assets/assets/svg/welcome.svg": "549c30a14b9d79b6584132dc3f6e37f8",
"assets/assets/svg/construction.svg": "c5888077bb72dd9411e72ca5709e8398",
"assets/assets/svg/landing.svg": "549c30a14b9d79b6584132dc3f6e37f8",
"assets/assets/png/Icon-192.png": "defbfebb00ec7bd62fec45a0dc4565df",
"assets/assets/png/secure.png": "fba0e4ac0bb4bcbad95ea2a2bcd9135e",
"assets/assets/png/person_diego.png": "186a4523aa6b71e0d17a91fad2f21f4c",
"assets/assets/png/black_on_transparent.png": "4b24c67781cbe5c4b0cdc9e96d0343f8",
"assets/assets/png/person_sarp.png": "8bd57127c0c1aeedfe31ad65f1a84ca1",
"assets/assets/png/price.png": "e1ea7d2942ef46c72e514830c415d16d",
"assets/assets/png/tree.png": "5ba615977b1fd9d9ffee935c09445086",
"assets/assets/png/person_isa.png": "fca8fc9c1b384fb447d26763f00d4d8d",
"assets/assets/png/person_kevin.png": "774c99c29eb932171592b329300d5c2c",
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
