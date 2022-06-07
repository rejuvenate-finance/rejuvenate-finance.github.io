'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aebc0d1fa49a2cc958cce4c0419f4ff8",
"index.html": "0c260c292d6001919ff755c17acb72cb",
"/": "0c260c292d6001919ff755c17acb72cb",
"CNAME": "754b049f7399139ae4b4bc937df16f60",
"main.dart.js": "9da9dca6c937fee2cf4083fdffbf0d9a",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "d6d5164201a3192eb756ebc904dea54d",
"icons/Icon-192.png": "719099d31666a185b0f51ad1e74708ff",
"icons/Icon-maskable-192.png": "719099d31666a185b0f51ad1e74708ff",
"icons/Icon-maskable-512.png": "7166b89a5917a594e4c7618106b9c9cf",
"icons/Icon-512.png": "7166b89a5917a594e4c7618106b9c9cf",
"manifest.json": "b959fee8a123240f82c854d56cf99bf9",
".git/config": "f23dddc2d12b95d48fc468d64e7ce189",
".git/objects/0d/996db53b30078e03481133c8753aeb5a015536": "98de6723416c58904cc0aafc9e5d0df7",
".git/objects/3e/750b2213c0b7b3171abe8e125a4a6026578f9c": "486f27e8df7d8ac22ee0c6ba47180a7f",
".git/objects/50/2b3600f97909df2c383f3d9cbc44770b8e1d4b": "d35842a10dbb2d938f124a89a207943e",
".git/objects/68/a28958aaca8a53670e573c8127d1f4526ee2be": "196309602b4e607f3ef65185b419c553",
".git/objects/3b/e869b7a16b90b3d9f9b2f24857b8a6aed76b85": "ee8d8738df41f037bd6c5003addd3014",
".git/objects/9b/985627d6110fc33fbef7cad0942a9d640db03a": "81444151ddf1709b130dce006ff77479",
".git/objects/32/6411c935a3add01cdf8f7b3d2228664b08a481": "0f456102d599eed2b5022e1fb31514a3",
".git/objects/32/884ae1d4e85783f50b5425f3794fb57a671e97": "f49929cdc0c37d424081747724b6331a",
".git/objects/58/d9300ec5baeb721094005e7def67c77dd40d4d": "2b25e64ebb673b5e03bb9f636961d41e",
".git/objects/94/7707413a205212be8221dc26c0f849b7ccc3ac": "e06c5866a129a4e8c0401f5b6d03b6cf",
".git/objects/0e/df54bb7070869c680278406935b75039fe1096": "3f2c229d5c7895e6bf6efd2e1fdcf800",
".git/objects/34/6430b9ae67dff80d291b4e2b24cdd90a124fd6": "11c0b45270e2ccbf52652b7428ef15c6",
".git/objects/05/2cea6086d2ed8c8c2d025007170c3d8a035316": "062034e5987a39b88c92261e474388aa",
".git/objects/9d/a73e147c35cbab282205cdfab5bd469ef8a465": "eb21a5a056e04387265d9d44c906fea3",
".git/objects/a3/466f0ff10de712c8794ecb00565c481fe852dd": "9be3122ef7b18318fa1f5f2d860cae9d",
".git/objects/b2/c39f9f80f29554562da6cfbd525fdbab29a93b": "ec7b3622418bb12f16660032885fd8c8",
".git/objects/bb/32be8a32fb0c8a1770fa25664d7502c9cb4ff7": "8dd0303985fb59c52c83a72be5cb8aa2",
".git/objects/b3/f9dac557df759ffdccd66dfe300c5534beee18": "76529a6ef3c65cc74022cb90ae516ed2",
".git/objects/df/fba4f5f8c854252f70a4698b7d5cd52f35a6fd": "31c5000312073a752553208a0aa39a51",
".git/objects/da/2e297963cf04928830cd2a49be238af216bf9e": "654def16db85510821dad57538f8df9b",
".git/objects/a2/2fb74ee2334d742107833778c986ed200619bb": "47a54b28c243a673ab0e9592915d4de1",
".git/objects/d1/d97a5b8e46018c5c2b4f68703f790f2584b4b5": "1d8560d5ca8859d5cae7f8779a54fe42",
".git/objects/d1/fb2f1bb8de55a7f28a3417b4c9df2d37344127": "a9791e84fb5f6c7a5503c427f7ce8dda",
".git/objects/d6/5698ddf6e386eb87306e83f88f3b5c868a9536": "bd14028b17c10b869873d661aca4b3e6",
".git/objects/bc/936223fbe37148bb5437fe211d4ec84cca769b": "5e6524b57eb1b091eaf9a02833761dc6",
".git/objects/ae/d2358fc2d090eefd7a4ab235b4c79aedda6bf4": "4854b2ad131c5d835426a7e8ea94ce45",
".git/objects/d8/362bfa1c5b43871681114e3c7324c858b01824": "48d42c105d918a5a8eb637e6ed748c5f",
".git/objects/e5/cce216a2ff20ebb5c21bdf679a6b2bd40afde6": "80d7de9864f0ec33f0df30d3fc119c4a",
".git/objects/c7/db78f66fe69c3b0328fae2d627eab8958f7093": "500488c872b860a518b2fc1070780e84",
".git/objects/ee/a884e24a216a249ce8a4d95ab953355301d11e": "3d6005fc22c5d1d991842d982f14faed",
".git/objects/fd/91ca47398b4aa2e1bd99d2750f34c6ce637bc1": "5415d9163988243b2d8240fd4540a86f",
".git/objects/f2/ae66575782f71e950f5b9100478d9efb6ead38": "24a807a897106b3338f56212e738a840",
".git/objects/f5/f49e7843b4230a695ab579f41db10542756e75": "0e9a7c5e5c51b0100ec93743a7ed0a50",
".git/objects/fb/067f7f90736056bbb644bd05222e7ebd2b7b52": "ea03ee9db95056804709bb5d0293b733",
".git/objects/ec/e42a1a6118e2d41312ce1544c9183aa6839b55": "9287af105c41a3b17cd983ec57e93247",
".git/objects/ec/307e8b744d682b305209b1660f3feb0e1e2d1d": "0f1621043cd23891a895c499f6f0ac39",
".git/objects/4e/940f7394b96179d77f74190d5869fd7cce8dda": "41db97e23c3b325918f8f96d8f2e76fc",
".git/objects/pack/pack-4c0c71afae84ab98fdd12fcf3e53e0802825c50d.pack": "473acde89bb5f030fc54ae68b1816d9a",
".git/objects/pack/pack-4c0c71afae84ab98fdd12fcf3e53e0802825c50d.idx": "f8fb844fd8f90b8e5d3d8b61f25a4616",
".git/objects/11/b3085aab020c4548cbe99f7c4b0bbfecfecff1": "051156e6633e49073b59ff547e46b482",
".git/objects/7d/8e4cec406aa2f4809697f94a9b6b4806265884": "304f328b19d4952cc4fb558604e85a9c",
".git/objects/7d/0ee0e4eea52abc93b0bdd08ea6a8f013ec5a2b": "367d09ce31ef44fdc754d9756f4e95ad",
".git/objects/29/107ce4011913920d531cc1d5575bc33223eba9": "937664a1efb0c9f50d04ece653fad458",
".git/objects/16/2f6232f5d5a1ba7e50789f12e3467e9192ece1": "4a8f4712f3566de92c6483c62dd45fa5",
".git/objects/42/cb1f3158eb514517741c5f845ce87b1ac4403d": "ec1180e4acb3251617ed00107d18ea34",
".git/objects/42/647fcb587c781274a0867e9a779c648c258c05": "233c58a3a4c4816006a8d69bc48ba9e5",
".git/objects/42/373d6b80d6dead56f601d21855486c81b799d6": "4d3d88eb8ca0327ea88816f9248cceb9",
".git/objects/28/487f87e42cdb77b0337101f807a787f164b002": "9be780bacfceeda155c79395491c034b",
".git/objects/17/223673c58c98a347418cdafa8dbe594b292852": "9dda3b2b27c46bd15a66aa335281b044",
".git/objects/7b/5d5815f929221c3bb3d9a496c4dee5e5f91939": "9833e7802eed298a59dc0d05ee42264d",
".git/objects/7e/85617536d3b371ab222138a2368e90991ea554": "4fa7527765d03cef67646b623780d108",
".git/objects/4c/d79514ca59eae7de053cb556fdfb6303382fa1": "1146f03303bae0ac37ccf1ad9456f33a",
".git/objects/4c/275eb79ad86d323bfb9f46a65da647930e76f4": "73ab4ead843bed14f221155558812ae4",
".git/objects/4d/51f76880ca9faef6b66a3fee4bb3f90757927e": "93a0ab36e229f94793b36ce602b6a8ae",
".git/objects/81/6bca92b586c90d48ad39801d01d9540b794f56": "671431f18e0b3b9b3884ca7968d5735f",
".git/objects/44/4166be1b7699072415e60ee1c2e23d956732c2": "780ff7d654c63343db329a5d16402d8f",
".git/objects/38/e004e87777e9dffaf653933ccd23f0d3434f5d": "0482d4ff857996e73b261646ee0b5a36",
".git/objects/6e/07c346c4e952ffdc1af30174d6c14262305e10": "0cd7c2c8d8242d653b600d5af7c11656",
".git/objects/36/1a700e1fcc1e981253dc21ca3ae7c359fe9c1d": "2faa3ed2c5ca21b40980c5ff249518a8",
".git/objects/5c/ed3d6482c28926d39986505c51e1e5a91d6a49": "cd9e5f0bcdd4b612165a381915dc5f02",
".git/objects/5d/160154199da4bd1874538654e9d86d9fdccb11": "d011b9bfd65cd38fd93f1af23d191933",
".git/objects/31/bc0ae62f9702fa34676357b2926357f69c9f00": "d3efa6fb77a83588a813787bb04756e4",
".git/objects/91/fa02d381c3eacadf1a8f179a1881fe56251fe0": "c39fef376d0d615c2015ef34eabe38eb",
".git/objects/96/39c6ebc24172557c86a58bd62a3c990b9ab6bc": "80aef5b8ccc1f75b090a805f00465854",
".git/objects/3a/9d0794bd7df5e374630fd9d699da63576ae1ee": "47a48eb1526c757f1861af5bf3f0422c",
".git/objects/3f/5bc6d0193a6a0a670b4acd92aaca42df469849": "09adb5dca443aa92af90ab040f6e8bf3",
".git/objects/30/5f874556ced7cd3880810f7f8ff34963f67537": "3598032d9f6e319776f0724036a07e2d",
".git/objects/5e/d76c3efec8fde7d1b83a6d372e5530cbdea553": "2d47796930419b378b9fb8f8cddd9a30",
".git/objects/01/fa4e10068e26fb6a4c06b0e3e0d9ae3496710e": "151cd197934a4c701f89d83d107d0435",
".git/objects/06/46868b5cc0377faf411a51a32c01d0f3d08936": "de36120e8d7d68294d6363f8ea8b35b7",
".git/objects/06/cc754ba21a40705c02abd8488cd467e5c23102": "8c502492f0c919f0a024b7d86c675661",
".git/objects/99/d18824dc1e2cfbcae60ae4a375384a60a4147f": "a8317dfea490ff5a3a1775f04267cef2",
".git/objects/63/13e8ae9089450ca9b68d0f00ab8bfacdd7e166": "82b0ee56363adc768b6fd1332e619621",
".git/objects/0a/0f78e9ab7edd4698fcc6f63a1176afb1b1098c": "b87504936b8498d5a952066c9c9626a6",
".git/objects/90/69c6cdeac8cfcc55788d84541bb0452d2f8f39": "839480cf0295398ae74f33f96fdc9632",
".git/objects/d4/d9257beeb00dc1188e492149e24ef44f8a1c64": "cb26c97e3c607f0db860ee52b7c6bcd1",
".git/objects/dc/0ad7d7b7f63d18b8af529f5d7f7b542d68dcc4": "aee0d82119dd58c1e0f2ec956ec703e2",
".git/objects/dc/fd6b7cfe40a15ef90f8b55f82d81a7bdf1f2cd": "eca1373f94ffdba00489114a4131646f",
".git/objects/d5/a020b86c1b289cd6c49c3ab2abbacddc74e924": "9d6fb81ce8b77d9fe65d731bde11e8da",
".git/objects/de/b142d898b7a7b19f68a6e07cea77e125d0ef99": "24f08b7fce2c2c10e2ce1ac18e557ad9",
".git/objects/b0/96826b8092ead7731680c3de2e889d5075a970": "97f0133bf5060e67956978f349ad7f05",
".git/objects/c3/9f5989f212cdb35eb7e642ad23e160f9d34ed4": "fa4b3bd96387ac33dbd21b67036ce7ed",
".git/objects/ea/3710ba44949a03495b10484317975a14dcfcbe": "f9f815c55f406b71289b273c40867d0d",
".git/objects/e6/4cf0c2139a3b44fa3f8938abcfc1cea09494be": "14011e5e5801f23471be0d027d2d3b6a",
".git/objects/c5/dc3fb6798d73fa5cc9b9b4a003666f8233d89f": "e3ef1f558a97b2324a4e947e646480bf",
".git/objects/c2/aafea5426612ca5c88320813949c21a1b0ee1d": "20d345fa99a407cc976d3d042d0ce51f",
".git/objects/f1/a7393d1e6ff450dd67049ffa00f5bda9f8e006": "0de99cb1dc6ca04be997e0a67ee78e5c",
".git/objects/f1/2c8d184ea106deb6bee73880272dfd7807e264": "d57e71336433a34c864cbdfbfcb104cb",
".git/objects/cb/736a4c44c1392e8ac997610ec3a06aed9662d7": "5abe79915025de1f6b99a0a28b217c56",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/1214ed1e22e4b784ac5905d4808b05d2ef3839": "2ec6bf1eb33817997f3c070ee06c818a",
".git/objects/1b/53ba01a28d0fa274b3f3cce692124d336924b1": "21c5242b17f8e0943ac011844e8c8518",
".git/objects/1e/095640459233ff8304ff5fb66e96172b68cab3": "06c608c2bb162fd3c3625a44f541bf6f",
".git/objects/4a/7fc5760746b4a1c06b2e14af86ec54069607d4": "e936e029b0fecbffaa18bf9bbf9ddc84",
".git/objects/24/5b709b2eb25da475be7b5c55769dceb8dfa904": "003b36ad62acf4a0d7baaa1aac3f276f",
".git/objects/8c/6da710995b9a2e25921a5336b0951e348d0876": "994e46a6a94f927fe21af697bd870ece",
".git/objects/85/f4181ad982799e66b56ad68b8ee0d7203ebc83": "6446ffcf17d0486d7f2cc876da0dc635",
".git/objects/1d/fc34acb9f67e4b01abd1c33ffa5a6eae7b1de4": "c02e3f48b40b0e13ddf3dbf28910afe3",
".git/objects/1d/faa077a7fbb4972ee311833d2fd801f10956d2": "6089e9bb0fd33834ef39901f2b229f90",
".git/objects/1c/40a2a263f99ae1d1d08287f1fa8b6c5642b468": "5a39dccd97f414db63e21b400313aee1",
".git/objects/82/fe4231798ac46bbe39655e77673a24422e0f0f": "74dd88de99f5b13975a968f6e44dc419",
".git/objects/8e/23e982340aa806614d2ddc0945306903814f4d": "362e308f4a2fd657716ee477a732fbf7",
".git/objects/22/6d75de40c25ab5bb6fcf9620acc6bbc6886ce7": "f8c66ff02259b8fe995781f19d84d00e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1dbc633fb7724f05dbb1b164ec32aca2",
".git/logs/refs/heads/master": "1dbc633fb7724f05dbb1b164ec32aca2",
".git/logs/refs/remotes/origin/master": "ead6e841bf42593e524513feca31de9e",
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
".git/refs/heads/master": "e19b89a5368bfca02834bd60a8c832b4",
".git/refs/remotes/origin/master": "e19b89a5368bfca02834bd60a8c832b4",
".git/index": "5f4a45963b8ecebb83915fd6f3a75983",
".git/COMMIT_EDITMSG": "0f1d4b1395e58e67e79cf044be14039c",
".git/FETCH_HEAD": "c72f63e57afaa21d818de768602e11ac",
"assets/AssetManifest.json": "f77a3949bbe20cd8c9dce4446542c5a1",
"assets/NOTICES": "2d21dae6b122cd57b4b107a62a707489",
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
"assets/assets/png/team.png": "4c37cbf8e5a51419b6379449810ca752",
"assets/assets/png/secure_iso.png": "4b27045a27da509125d5df1772f9075f",
"assets/assets/png/card_iso.png": "32d139d1d52cae69ed968187d08a9a28",
"assets/assets/png/Icon-192.png": "defbfebb00ec7bd62fec45a0dc4565df",
"assets/assets/png/secure.png": "fba0e4ac0bb4bcbad95ea2a2bcd9135e",
"assets/assets/png/black_on_transparent.png": "4b24c67781cbe5c4b0cdc9e96d0343f8",
"assets/assets/png/online_iso.png": "db811851c5b20ae74401bbd06981508c",
"assets/assets/png/protection_iso.png": "ba2e0440768ea3984fb9078a9e8842b1",
"assets/assets/png/piechart_iso.png": "477eb990d6f79f856ffff1faf829b62c",
"assets/assets/png/person_sarp.png": "8bd57127c0c1aeedfe31ad65f1a84ca1",
"assets/assets/png/price.png": "e1ea7d2942ef46c72e514830c415d16d",
"assets/assets/png/transfer_iso.png": "aab5cfc5e52505631373bbc2932fce19",
"assets/assets/png/person_rey.png": "31b71d6158823e46a996e183c20304a9",
"assets/assets/png/tree.png": "5ba615977b1fd9d9ffee935c09445086",
"assets/assets/png/person_chris.png": "e3355f98b235f0be0a8bf3406a5c7614",
"assets/assets/png/person_isa.png": "9674e1dfe59ea6b88db34f6c32b8e6cd",
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
