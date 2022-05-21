'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aebc0d1fa49a2cc958cce4c0419f4ff8",
"index.html": "554fec345cf135676fe3713d412063bd",
"/": "554fec345cf135676fe3713d412063bd",
"CNAME": "754b049f7399139ae4b4bc937df16f60",
"main.dart.js": "b3a2e838f72e6d80d81d329a9099d5bd",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "9eb825b28b2f03763887c67089b44001",
"icons/Icon-192.png": "20e8c0021101ca7f8155586764c2ce1d",
"icons/Icon-maskable-192.png": "20e8c0021101ca7f8155586764c2ce1d",
"icons/Icon-maskable-512.png": "2f543fc9eb9959ca3f7ce5b40b94973b",
"icons/Icon-512.png": "2f543fc9eb9959ca3f7ce5b40b94973b",
"manifest.json": "b959fee8a123240f82c854d56cf99bf9",
".git/config": "35a4ef12ac6b45267e884d43257fb817",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0c/3f9beedf46623dabbd39e050e27c26969b9e40": "2509e81730479c9f3e536c83d9fd1821",
".git/objects/66/8f3b4d5361b4c675a33423ea07acb2c280c286": "6a15a0d946aadf21cc61fdc29c059298",
".git/objects/66/e402939d0ffde561f0b8dfcc531288be91949b": "d3517e24747c0fbaa1709c4584a8604f",
".git/objects/66/656faa78a5261959c10654aa3cf31a0d751145": "966c3e253b9c0b3604a452645a003319",
".git/objects/66/cd7a0862c4cc7c21bbdc7954c8df7f985a1fea": "47adf13a5bfc825e475bc794119e49c5",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/be3bd5d5c5b0bd67d0d716fa976da535912413": "635e26cd98976cfdbb6a7b6a4e9bdc2c",
".git/objects/3b/0bc6b5156b3aa7974b9cd19bb45aecfeb556cb": "f25f2bae2aee2f82c0c2fd3c8165f08c",
".git/objects/3b/bfbf15a22791d71a3be1e9d473312903fea3cf": "d63d1e3a2c78008b943900d26851cda3",
".git/objects/6f/b583301a9ac4e7b515aefa1c8d0eced96592fc": "a422891421ee7187d58e365d21c512d3",
".git/objects/9e/bf8300952d14bdf23c6d37f1720f1c546cf2d6": "4e5f6c061be60fa76ef533695ae6d6fa",
".git/objects/9e/c37603873250c6a2592ca4edcc605331de015a": "a6851b52d46e1d9963425f63cb8d9fce",
".git/objects/04/23219556e56a9152716d04125ab2ea411f641a": "97470f140b684c779823adcd75968ff2",
".git/objects/04/a0c0d089f69c058d550ceaaa9694b9bf4e6ad3": "4ddb6d838a3ef88d286c374301ec4e99",
".git/objects/6a/88f79527c6a4a22700eceb44949b8260073d9c": "a86e33956c2037500abac1bee8fc4123",
".git/objects/32/e874751264f6ebeb9f3d99dcfd7aeaa72629d8": "297b8d2a2172df7a86bc38c0d9ed44d2",
".git/objects/93/15c1be39ef96cc06c5cab2458d5b51d555a863": "0361f723a88d188e98cbd0c5b2214c65",
".git/objects/94/ab765944c8758f1cca3b0297484c43f229f1cc": "6120699f41be45b43a4aa65096d5adfb",
".git/objects/94/afd5380ceed0b9671adac6d7c098042d4639b4": "2f5323ccfc2dbe9ceb2fba7d8a86c539",
".git/objects/0e/7904ecd437d6d02e4d2e6b4cb248f89f6ea798": "d54047c57b26a238b16050618b9ec57f",
".git/objects/5a/6768080eff8c7bb550912abddd166bf9258dfc": "c251111471fc7c448d8ea20e52b6deb6",
".git/objects/33/d53b0a0a0618be501297245763b59c3a6ac68c": "9cabaca7c82af6c988acc4061062c0cf",
".git/objects/9d/a498e55648ad8364868651c2341bd1e3e48fa5": "10e5c02998b4960203b5c6676e53bfec",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/a3/ea37da76809ad598dc991c282e17896d689abc": "fc4afe1027ea8b7ae49c7951bea47fc4",
".git/objects/b2/0f296c765469f886b5d87c4551c657428ea44d": "86926bf8c2cc4a40cad005dd2bc41106",
".git/objects/d9/fcc5a64f7696cdb0c59eb0c541a7db719a4c73": "adf88e45dccb9e28033419cb06cd1eea",
".git/objects/bb/5db3e5cf24c0a01a92fb9d03db489cf70c35b7": "eec7a36c5cd53c4abd16c7428c9c6a46",
".git/objects/d7/dc254ba01dec871eeb67c16e6b25b38c5d8028": "55081df9aacf53284d2984c70182cb11",
".git/objects/d0/4fc2700aa91fc53768faab1c24b19292b3391a": "1c1897f2250cbb7574f4a220aa7c7768",
".git/objects/df/3648c380fded183c52041aa4e866b9b947562b": "a33ff5fc5aa53739a4bfad1fb4122307",
".git/objects/a5/048497608fcf0417a312b691561dfd458f40bf": "baaa5c7c1f72c9e2de91019e020f5932",
".git/objects/bd/d76b49192128e05096c7a4b3bbf138485bf5fa": "695a263ce2483c9c6420126ba0d58ce1",
".git/objects/d1/20fea66b171d30d059a6c4e46c5b9192834012": "8939d2e853d0cea1a3263bbffd52d7da",
".git/objects/bc/940ad10bf018b57c0a8494e3dfebe93aae8fcb": "9833a1c690ba76df8f6acd1397f29977",
".git/objects/ae/9c956f2873d562906c8cdd042f125eadfc1b75": "6022a3030ef0250b25eccfeda6c916d5",
".git/objects/d8/e8e29dc229359449272cddfa65d08098e8e506": "f0e16611b8ae850138dabfec9d8567ef",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/684595fca566f734ff4024a35c450951a1c0ae": "7b3819d90375dd765aea63bbf0bde828",
".git/objects/ee/e66ff718c2fec841dc4686c350cad3b1e6bb93": "5dd52926b8f462336ed7db3b0c167e3b",
".git/objects/e3/8bb96c784825da4cf7e74e13a1928ca50a02cd": "9b3f5e1bfbd52a0eb2488d4fca957ddd",
".git/objects/fe/ec50e21ba812a6ed906e057eff198294c074d4": "c9bacfc8a11f178f8b91403952014eff",
".git/objects/c8/e85589295738a9fd8fd9691e8271c582e12e7b": "25b28906b0999651bc5f4920a041810e",
".git/objects/c6/a2ca332f82412e9b9fb2527edf561299f56dbc": "7b6c0bcd7d0dacf3ceaba7452239fcc2",
".git/objects/c6/d5b1c9109640805165376083cece60c1850a06": "0210e9479af8ba1f04e0489742c5d8ce",
".git/objects/ec/ae37045fe4efb43490e16e720430690934ebcc": "d1f75a3c394622148e13f1adc162b2f5",
".git/objects/ec/921c9d4403de97e78b58d1619a3dca217c3cad": "5b3cd864ecc73bf0825f19d376b77422",
".git/objects/ec/0da1dafd2996406bccbdea92de4708b50e5571": "18486a27fd581cfb6eb9f505d3012d77",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "d47b406b850ce1df0ae8a6dd89727768",
".git/objects/27/41a0db3aafc84993c0ff9e7d8492ad1e6a2173": "1baa863e5b6870d84b99f15c1d2732c8",
".git/objects/7d/fdf1249b11efe8d60bef2b0df61f55d046e7a8": "ef7c95ffb60c1c000cd22fa16e11a745",
".git/objects/29/9fd7db8fccf85930b7255ccd3d8d0053cf4bb6": "44986c9650270a17680c8b8da8c17571",
".git/objects/42/87c5807ad8550c218bb2fd50c72b5cc6677515": "18b456d1716e008f06577d60eb58136b",
".git/objects/87/e6bb5e413443153c3eef951c24f702350ea530": "24a134304d1f8d15fdeb45f872d34c07",
".git/objects/28/b0763d36b27df8e9446dbf9f6f35e01ed8c381": "de9cb3a7c4647c73208d57c2fa27ca38",
".git/objects/7b/bb70d01453c080203c1e123a3055e8fd38216b": "a70bd3e3bffd9f0479b67df48dccd700",
".git/objects/81/89788e47f36329a5b94dd046b1fd7836feeef6": "0082bd62cec1d5ff38f82e5b7a6e9c88",
".git/objects/86/0b3295951068656d4f8e1cbe0552e093c96040": "8a9c0450d581eeaff38c681759e2c850",
".git/objects/2a/81ae885a49832f5c00e264a5131d02feadb169": "7a56fbb2fdfd438c9c4a0b4e70b62c4f",
".git/objects/2a/2b242ba5a111a6185b713a18ddd64035e7342d": "fb10f63c37ff16a5eff0c0be8dac4562",
".git/objects/6e/4709279a24dd21ece5848bc293cebc694608d6": "e734b29803b420165b6688110998cc0d",
".git/objects/36/3218bfba583e277e8aa645d77051f3b1aadaef": "b3dd038f3e3e9664d324618974e207ff",
".git/objects/09/a1d4fd3b451371f816af115fbcbbdd92a16f62": "396758b016f828bf0f219ebddf7b7070",
".git/objects/62/73a0c18147b1f4de938b5289bd1c082b0fc7ad": "ac9d83caf7233d800ed1862827bc54e0",
".git/objects/62/7515c7e971f6b69b9e5a54d93d8b0b00659350": "7bd291adff69260924ffd3a9e993989b",
".git/objects/96/5cc875007dc591c38d00be33524b46ed515ffa": "83cfd2c0f527f2c161fc4e9c06a087de",
".git/objects/54/fdbe8e213326861db03dc6ded9d9dc8a99feaf": "6ccd6bdf767526071b585d37746a0d03",
".git/objects/53/b3422f28c3ff9e9fea281512cb4428b8e50b6a": "959c9765d99507248ecfc994751c3de4",
".git/objects/53/f96318bab3160806fcdf2929e044a8b43adf3d": "8229acac5c26f1e255baed8e6f55bdf5",
".git/objects/53/7d785fc8d79aec1f3c8bead32b96ff42a08449": "7004c36a07642fd9887208419b5a4922",
".git/objects/3f/78cff74b784e244050c674466a706afae264ee": "99f0a869759e3becc115edd5072d2445",
".git/objects/5b/fb802a46ecb1ae05fc504b931be69f11f4fd07": "e0ace348ff747e607d8055d14388f6e1",
".git/objects/01/1cb731931ebd99a2ff6b6e79b07303801bff69": "b1e6c270fb66dc77fd163987f4a9d106",
".git/objects/39/c1debe9979169190bd2588edee626fe8463b4f": "c5b84a2ce77aaac2fb0264cdfde80b00",
".git/objects/52/9107562c2b633b34b6372d4dbfd782a34b5db4": "02c2fa22536e59f0592b8c2bf5e92881",
".git/objects/63/0e1ad974a32e56dcf7e2f8715f3124204af9e8": "daf16dac7cc6d9832c4440fb17ed13a9",
".git/objects/0f/3d7b048c86de8b6902e82651f545b643090d68": "da34286b5bdc82743b44ea449d8c5267",
".git/objects/64/42015dc8d8f7ef4d0c4a903ad20f48524e0cb8": "fbd46b3aa91e7426cd0dd710a678bc25",
".git/objects/64/140d81fe96726b329be82c6106f6901d86ee1a": "c2341f62beb459f28b4cdb6d538c83c2",
".git/objects/d4/a39ba787220eb4606437a7334af70ac9d54ac5": "4024ace3626f80573b1e0c7ce283974c",
".git/objects/a7/a9040ee4d2dcd40e607a9b8dbe700fcb0f3fa3": "2240bd378f137e4519fde355e654338e",
".git/objects/d5/66c6d9fb46823b14b9c5d46c1a079de0d2ff23": "beceeb185692f9f022e71caaaa27885e",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/4f4ae102e7cb2c74c0ad1d35f2a8dbcafb8a8e": "16facdbc69d7d3b45379c762bfe92995",
".git/objects/c3/56a5cab78ed3163772206aa5d7f4f621e830bc": "63d903c8087439489b26558e63dc3db5",
".git/objects/cd/d85250f5f689394b560eb32bb3a04889648537": "f4294c602a1330ef81cb2e0ca2877cd0",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e6/f8b94c604d84b209fd5878f37b7395d9e9a3cb": "dc9326691f4e712b7f2b8ce62406e799",
".git/objects/f0/1296059ab213174bf45a51b710d425ad58e2af": "cb292f35d2233fec25d754f1eca22d34",
".git/objects/e8/a409fd602c3102395cec882dea54ea3f467ca0": "e60c344cc966ec89d6e60fff0bc49e76",
".git/objects/f6/cfdddae8a5ca633bc3611bd61a6489935c7dc0": "5a8c6c0ea8501d2bd4faa7bf089f62c2",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/46/287d35401fc685907296ae2b660cdc56958ad8": "1fb758b044c956c323d0a35c5fbc0a51",
".git/objects/2c/e6a1f65c1202cf707933f1f614765eb4824a1f": "a5a7c7d17f55ca83dc7c5766e19e782f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/a82dfcab2f04f35ba5ee8534713a755700785c": "815bad486a2cea3687612d48a60c4ed5",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/83/847b21709d5d85c5ae4070de8c42aa61b825d8": "c4621d70b8e00e1287d98dc98b782f5f",
".git/objects/77/40123c074d1673a4a3fbc258d55fe10c7377b2": "aa7b84034f9de73fa41e5a6ae61f8d6a",
".git/objects/77/b2b5bc0214a9f522f4d53c7b91f14668c52dbe": "e011549822c99c5a03dc70a2ab5d7a2a",
".git/objects/48/9990d6f1005ef75511f5de5fda6b5d75d8b04c": "a8b491c6c5e766edba967ba9318ee322",
".git/objects/48/b04604917a7361aa428a2b42351f52618c5b4e": "53c4aa1a73e66b69b8eb376a696927b5",
".git/objects/48/4861434fe55df8ecbd1013afec25ba2723336c": "3edfb1378b64125d67c08db2fbfed12f",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/8d/dbba23749101e20679e12b0c2f2d4e2a8729e6": "811c16b25a2e62a80a0de050ed912f86",
".git/objects/15/c9d46fb309b4260b05d6a1c893fbf76f41af4b": "819dc63681028a4e0f9f453ae708f8b4",
".git/objects/8c/0e3601815c4ebe06b250c539ee62f83c1845ff": "e2e63bd9342b7fdbfb9af403b9454388",
".git/objects/8c/7465f5480b9a5d129e25261065634e91874c14": "e545a53d45197350a7f23d3d3f812aed",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/82/3980eb49147d1c6038e9730974bc440a6a3d89": "188b3af5dcb09a59d0d5297fe56d85ff",
".git/objects/49/dbb29a8a07c3fd1d0508641ce9e2b2964046a1": "f3d40c61015e578a0864d7f39cb739aa",
".git/objects/2e/e6d29c7462afb7510593a774f2bf9cf95f72aa": "5079b38f2975bea64c64b7e7590bfa9d",
".git/objects/2b/890a7d80457b668d2bf07ec9694fe3da4ff39d": "f47dda8d2f7baf9439823d89eec0e00b",
".git/objects/2b/1c41e36ac1d7289ee86ad67b3a70d22db56df1": "3bd521a82ed81d6fc90a0edd47c699f3",
".git/objects/2b/f3be225c11a753b4d8324b4d633da649ed2b0f": "5324e6fb485338dc86dee4a8f90dcaac",
".git/objects/78/988135b0b9f1640dafb410a3ba638e39062de2": "8b247e04ee4de749bd00ce3899205fd3",
".git/objects/8b/96e66c1abf666071d805a505366e1e2fe1763f": "efd4a1660a95697785003e8ba7d45c38",
".git/objects/13/6295d4775adda0ab4d890c9dbc979ae17e3414": "ca7fd317a723ce8358a628eb15b76c31",
".git/objects/7a/d9adf73c102f32466555d7c7fdb3d1f98da26f": "2b51dd7b3151d53be8ef131c92303896",
".git/objects/22/c3bd4f0f58b4a92cc53ff51873509c0f42ecd4": "240d75b1b5c054439930b6e9ce19d055",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1219cd1a8a5986ef11dfb3c69c675ff0",
".git/logs/refs/heads/develop": "d82fa3101a08083927b55830dee62c2d",
".git/logs/refs/heads/master": "507999bb59854db3d51df6f6e1f94881",
".git/logs/refs/remotes/origin/master": "0501a15a92e765a905a4ff2b5843d003",
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
".git/refs/heads/develop": "685febec2c3cc5396eb60db0429e1d58",
".git/refs/heads/master": "acf4c94b982b1fc20129e036a8bd7402",
".git/refs/remotes/origin/master": "acf4c94b982b1fc20129e036a8bd7402",
".git/index": "8a8a9aadb772e68606ec4ff91ceac3ee",
".git/COMMIT_EDITMSG": "c8b20a641bca2eb2015a6e51683daade",
".git/FETCH_HEAD": "c28bec4c416d837a3dae9edbd2a873fe",
"assets/AssetManifest.json": "fba89ff6c0ae7bf4df009dc6dd5cb599",
"assets/NOTICES": "1a5f15198bce68fa5c46ac2e87f39f30",
"assets/FontManifest.json": "7b0d147c04ed30c65c2e10c875367e06",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/packages/unicons/icons/UniconsLine.ttf": "b6a7ecc47d2853caf153cc1aa5cf93ec",
"assets/packages/unicons/icons/UniconsSolid.ttf": "630f8bd494e53400fa9cda3a4eb8ec10",
"assets/packages/unicons/icons/UniconsThinline.ttf": "fe40541d1f998ea2122a68d072f8e254",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/svg/roadmap.svg": "a2a0872fa2ef0077477101932a240125",
"assets/assets/svg/welcome.svg": "549c30a14b9d79b6584132dc3f6e37f8",
"assets/assets/svg/construction.svg": "c5888077bb72dd9411e72ca5709e8398",
"assets/assets/png/Icon-192.png": "defbfebb00ec7bd62fec45a0dc4565df",
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
