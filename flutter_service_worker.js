'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b0169f287af7ef746c75ab5092d7ab75",
"index.html": "8394e8202d338435a0eaca86b0a6a754",
"/": "8394e8202d338435a0eaca86b0a6a754",
"CNAME": "754b049f7399139ae4b4bc937df16f60",
"main.dart.js": "5c20ff847a29b671ae812aab761421a0",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "9eb825b28b2f03763887c67089b44001",
"icons/Icon-192.png": "20e8c0021101ca7f8155586764c2ce1d",
"icons/Icon-maskable-192.png": "20e8c0021101ca7f8155586764c2ce1d",
"icons/Icon-maskable-512.png": "2f543fc9eb9959ca3f7ce5b40b94973b",
"icons/Icon-512.png": "2f543fc9eb9959ca3f7ce5b40b94973b",
"manifest.json": "b959fee8a123240f82c854d56cf99bf9",
".git/config": "f23dddc2d12b95d48fc468d64e7ce189",
".git/objects/3e/0e2655c8ad1d735203e19f169854c24fa3d73f": "62c8b3b6b7f7187b89de712b2e38373d",
".git/objects/32/297329510aab8be2049df784b05aa241d6de50": "24e54b86c72ae34215d0ee091eba7417",
".git/objects/32/2bcc1e779a365dc8bfff4c166ff17244b573ec": "1935357f06c7403e6383cbbd05d11b09",
".git/objects/32/efa5b407c7eb09159afaecc72b5ccf3e2ab679": "a8c78f376ca1c3623be184308eafd266",
".git/objects/69/ac4915418f6074d4017764e15b782a0db3f9c7": "0c668436d3e0d2a0edf93d0d174e7dd1",
".git/objects/0e/a8b23bbb4534405229ca709ac29bf2bc819809": "cd1c16f9ba58ffbe6d535fdf6ea90998",
".git/objects/5f/c7fb30d234455baa3ff706691832986a540555": "03c30529d19f53fa5c50a482955a4ea9",
".git/objects/5f/dd3d8e0c9d4fb45aed6fd944a2ec33bb3c5621": "f40ee5e4519454264a13aed07616e6f5",
".git/objects/b2/807c7c9d9ba2f5f7d7f86ae8dff767d51e044c": "e3c1e0cd6ae1afcf3f38fe2c7095693a",
".git/objects/b3/030fa4c437ee2f39f34920b7f8523f66ac9993": "c5f0e03e472a0a2a50e8ab432e8359bf",
".git/objects/df/86d211f79d64cc5f5ffe282e4db83748f4137e": "70ecbbfee69b60617ec81ada256f9cce",
".git/objects/ae/0faf698a8b9c2f10e12a764c8a9ede76e31eab": "3dc425d2bc91c38291dd3bb6d87fef60",
".git/objects/d8/392cd66dfcc69fa9bf8a4565a50c2a0b362592": "dbbe0d545687a9861661dc6522f19675",
".git/objects/e2/0adb752dcd499398e6cc5b0da1429fb1b30d59": "0c24aef94b369c6a2046c95b91128f2c",
".git/objects/e2/90faa2f871f85a3c89d80697f005cfe47fd5ee": "89c32b2d32330199010f5dcd387b50e3",
".git/objects/e2/ed1fe685893e5910b4bd092fb9e5a43849d5a7": "91ddd717402cd422e775fc7f032fc16e",
".git/objects/fc/3d7177f1ec9cec724ebfc9441df876b19ec4f1": "0962a79555e6b00a9c904717891d5bf0",
".git/objects/fc/24ef33002cac0d98f7c542b2d8a76961fbac6b": "50b8f18976a51c928a17808353e5f2c7",
".git/objects/cf/2c2f63a9e2f8ce9020d509715dffe97a9bc498": "3f83e2e336433c86cd20b0c37ed09a60",
".git/objects/c8/7bba8629bd58584651c018738cc5f3c60e1057": "80a83ea23a489bce2984ae40d7560dc6",
".git/objects/c8/1ee61f56277e21130fc8eacc8257b1cf9277c6": "b9b0206511a8b8ee9c03cd14acf63c85",
".git/objects/20/b42d31edd881d0eaaf6188fd08df4e46075411": "7456109527b9b85f6430ee7544a9be97",
".git/objects/pack/pack-b206c4dccb6119a691595af441064d2e2d1eee92.pack": "4e48bb62e512ec688c5284620c7dc9b3",
".git/objects/pack/pack-b206c4dccb6119a691595af441064d2e2d1eee92.idx": "4b42aa921cc82c3289516f5215e5cad7",
".git/objects/29/c8bb931d67a23ffb3ec067741a12d5243416b1": "111db890b69fdd803ca591d2d567ec49",
".git/objects/45/95018d4c69d023ed6dc615e732a92e744f7bcb": "52847cca7c7a4fd4a0b83ba6320292c3",
".git/objects/45/fd6108cc4fb11d5bb3671da7e2e139656ab440": "b80d2153b266e03435bea1a9787b2c74",
".git/objects/28/3f9e555f47f57fc525452d342029dbb9355740": "7e655a36d26bf53ea8812cfa93da30bf",
".git/objects/17/c04ff78154d4411e7a83f4f340a718246c3ff0": "f8042ce3b074c91cff44d28ef1cfe2b4",
".git/objects/19/47cdc5e3b0be140b7e709177dd49e03182356c": "376e8c032a15a25b019e06ca7ddd48f6",
".git/objects/4d/aa7feffb73c82004c07415a86bebef9afc8205": "6c7645a85db9424a86dd12ca4876d8f0",
".git/objects/81/d112b4c3a73cacc1687805c54d03d84929f1c0": "885417a2c7c4f6dc39b833015a0862e1",
".git/objects/88/83336887925dcc184f56b831c8a4cc5e9b1cb7": "c49ffdd5cf55dc62c94baa6d084b5fd1",
".git/objects/9f/0b3d36c4b58df33527757f869c54e536eef8de": "bcf9fe0dc0a7208a83406dc10759d169",
".git/objects/9f/7e24b5cf602351c48ae04266e62cdc896b2665": "a0eb350ee2c33e82e89f940e26947f8f",
".git/objects/09/d4cf968bfe134a6705213a17e75162dfe99535": "c9e49577b445b5d52ad4523ac06dc75f",
".git/objects/53/f3e6b1259a4860cf1b05ed0e78522f01c917cf": "834265a8458641c8d9f3bec1731c8587",
".git/objects/08/81df30737eabd4901eaff04555e1414e5529be": "0319ca4c930bcd0a9ba4ead198a8c099",
".git/objects/06/06b8e5f8f45ed40d239ad2abd16a85c4132ba8": "730a1f17bda1a8d2f03e2906c8d5bf4c",
".git/objects/97/06f5d2b8badf6d80419afe8e5d5e8ccdd7a0ae": "ec2417a05753f5f00f5727fd78731c4f",
".git/objects/b0/256c11d36e18625dee9dd4cc040294cbac1211": "3b031fb4db649dd1a2d2943294ccd64a",
".git/objects/ef/892258792448320a11244e313a7e7e10e37b49": "1ab838e35250281c8fba336ea02ca215",
".git/objects/fa/766209d71a8e4235c592f1dc8c18e80db23440": "290a46feac85356c6ae707fd628f51c8",
".git/objects/f1/09fec0a1211937facd3816243e422b9a56b808": "3ee87f2f87153c66a349fcc43ecbc03e",
".git/objects/ce/f0ecc265ec568c96e51fc690851b09c849a74f": "7d6f579a1f2c44ef07352f345451095b",
".git/objects/e0/aaf85ee604c5c5250e0626f74ea61ed55cd80a": "6ddadf27a86a27899253f93a5d49644d",
".git/objects/46/534d25909993ebd13b7a00b893eb8893d5437d": "55b9699637e5caa0ab76d34c4b3616fc",
".git/objects/2c/7269a7e425952aeaebb8ec40a06ed196e7761e": "dc3157718747f732f0a37783c5cf08b9",
".git/objects/1b/455d3d19259f66e99981c7dd370addef8838bb": "99f21fd861cff30a9b032aa30ad53ddd",
".git/objects/77/0a600f03e02315042b1200c032601fb322a3ee": "39b691cf5cb275f92e27dda3285c7b5e",
".git/objects/70/bfd4ded51f46d60e5006c16b290ce2e0332564": "31d9adaa0692d7d5b4ef81f2f3f6c535",
".git/objects/24/3f25d160480c9d25ade13c36efa0ef65fc8485": "b326dc6f3ea6b101b9ffd6cb5bb0dd8d",
".git/objects/8d/012e282959079efd3148703aba3e3db2a150b9": "6eb0abb152ccca07868b2d969de5b44b",
".git/objects/1d/63633fd176f98fdbcca6fe0e4d2857bad338ed": "44f7eab4414c5bd30b96defff55004c8",
".git/objects/1c/f00d0822fc107ce71d56e6841e0ebc538a09f1": "732badd2713c2119816a52abc4ab1c12",
".git/objects/40/69895320f60d20b34a91805179c278d46a88ff": "ab529e2374829a95a70b0f820dfc2040",
".git/objects/2b/6a36e6fbdda775002fe3eef8a8e834ce0199fc": "327478cd1ac204a1d4b6c94e9d36d1c5",
".git/objects/78/793e3e8e9ab4de83912ff22a8a16018f66ee32": "1ade435ce3947d6023e2186a530acccf",
".git/objects/8b/c8cd6ae44493d69b1d7a244035ff7030897220": "afb32161209b354f618410ece3039f96",
".git/objects/13/e5a80f9710753c5dca77335e29b9ab65d3f885": "011960ab4f557b2fe820247dc5c47951",
".git/objects/7a/bfd0b495e8303f37e56966e6e11dd98cde54f0": "d1cb5693fb23aa279562e306211b60c9",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2a532f857662f4ccd1d03efad5c7ec25",
".git/logs/refs/heads/master": "2a532f857662f4ccd1d03efad5c7ec25",
".git/logs/refs/remotes/origin/master": "62d94bd484dbfda2a71f80463d1dff0e",
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
".git/refs/heads/master": "2843710df045cc4e50c7c9d24aa28ce1",
".git/refs/remotes/origin/master": "2843710df045cc4e50c7c9d24aa28ce1",
".git/index": "88ba589625dfb4c458c08213af53b31d",
".git/COMMIT_EDITMSG": "b96c6a11ff30a8b071ee48872ce8ca4e",
".git/FETCH_HEAD": "42970394f200ad2b62655c5d8cb0d6ad",
"assets/AssetManifest.json": "92b767665da6fdb24c7b48183d877c6d",
"assets/NOTICES": "fab4a632d0ede118ee52c85fec7968c8",
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
"assets/assets/png/black_on_transparent.png": "4b24c67781cbe5c4b0cdc9e96d0343f8",
"assets/assets/png/person_sarp.png": "8bd57127c0c1aeedfe31ad65f1a84ca1",
"assets/assets/png/person_isa.png": "fca8fc9c1b384fb447d26763f00d4d8d",
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
