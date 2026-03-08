'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "71f15b0661454109af2ea544a186bb9c",
"index.html": "005471332e1a590b0c4bee140bb36962",
"/": "005471332e1a590b0c4bee140bb36962",
"main.dart.js": "f6346f1f16105c72270a3a21a0d01471",
"version.json": "89431ee5c5b9b4902eefbd10ae099811",
"assets/assets/fonts/Rubik-Italic-VariableFont_wght.ttf": "638f8444cc627365565c0991b43bdc24",
"assets/assets/fonts/Rubik-VariableFont_wght.ttf": "afc324d8b8ab76eb8dd2f42bcb1aff4e",
"assets/assets/sounds/universfield-alert.mp3": "ae352cf254958fb401c6f1c47e95568a",
"assets/assets/sounds/universfield-message.mp3": "4aa59148256eea4f788c347057859011",
"assets/assets/TalLogo.png": "76ad4187814a27f86a58d68235424f67",
"assets/assets/TalIcon.png": "7277755b7f039d24bd400a3a8eaa4efe",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "dd5b0a86d1f3ebb7f162c05307d59a90",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "5a5624d43630e811aff6d07b23ad94ef",
"assets/AssetManifest.bin.json": "e3aff7137c149d1daa6e9b88bb420f2e",
"assets/FontManifest.json": "a872b0fc5621a59b9d605755dba48164",
"assets/NOTICES": "2ef096a73fb2530ae65c883b722f7f9a",
"icons/Icon-192.png": "a5c1e41d39f549f66375b2c8497fe8f1",
"icons/Icon-512.png": "dc69d289c909896005f6c429ba902e77",
"icons/Icon-maskable-192.png": "a5c1e41d39f549f66375b2c8497fe8f1",
"icons/Icon-maskable-512.png": "dc69d289c909896005f6c429ba902e77",
"favicon.png": "74b493e2743fc4d9fee03cd7039201e9",
"manifest.json": "14fa2e127be40e7a43b857f219402621",
".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/pre-commit.sample": "3e3b74d84228df7679307b963c138758",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/sendemail-validate.sample": "c4c26785acacb2553117cf802723d09f",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "912bc363a2f2647ea3b7e838e3a5d1cb",
".git/refs/remotes/origin/main": "912bc363a2f2647ea3b7e838e3a5d1cb",
".git/objects/62/4868ce1faea883429e42c5f1b7d4985eca2f03": "1df0bc4af0c2eab5085e44686e1558af",
".git/objects/ae/ac288a91b17f13eac8cf3a920369ae0f57e5f8": "c6b9d13db89d276786f3dde2602773cd",
".git/objects/cc/20b830bf6756b967b5b1ce311d2144b06efca1": "4aaf57886037b9d7117b36dcec1ea524",
".git/objects/86/972bb028a4a5f839fb4db2e4e002ad5ed56f6b": "ee8025d86150e88a73fd4c48ec816240",
".git/objects/86/0d39886623bc2f70dcf4839b762697251c7df4": "51f1e4bb710d8b9c79d2aef11eaedbfe",
".git/objects/53/a3ac484d0b6d6f0d439e339dc6d87b1c35c712": "0f6b489e504b25bb0d36e953c4e20d70",
".git/objects/b7/bfa073cf002138c35da8fa3ae979c2a37643eb": "82f6681f00553ec3a3ce8a8a27b53431",
".git/objects/84/7a80fa83dd0b46899f6d05d9a58678d81cb481": "4a3106bccfc0b48d961277c4ad419d73",
".git/objects/a5/d54e9480622417f0daf29228c5141d2cd80504": "96045c4c121365b00267d44aeae3b4f6",
".git/objects/98/576f31cb9d3c8a833006409f421137efc3d8ea": "1889a22134619a5cef6a57773b14bfd7",
".git/objects/fa/86cb115a47693c648d0d1eef9dbd31e98b5122": "91b9925eaf09cf36b87739621a14951e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "d862eed1843551d333d5acea76f3e853",
".git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "37a5bb35296506c819ce3f50e79b0d88",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "c61efd0b2feea66b7e3396ea660bc62b",
".git/objects/d4/c9141c523b169ca8465f3677c471c9d86c432c": "49d45502848cce417d96982bd7605c66",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "69afd4b962e0df31c4808f90a5905662",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "5703cee65ffd72da5ce16b50d6931b46",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "a77589943e807640f147da43977d0472",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "6e3237df155cf58d6d07b7cf51990ae3",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "3ce3e8dc00a3236ad4c514f404a75c88",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "5e1f4b4b3f4258485c4573dcff0b2e97",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "04d24f54e6859ad99c96b44405e99d16",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "e8000de857bd1885bea7b022c8b86f0a",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "4b1606e59bfa020d7b0916c74f83bd00",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "2fd0ccde586c0b4ac5993b47595145ba",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "c85dc847f173c55dcc8c9e99dcd9bc23",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "3a7aee9483e834494df99b773929fcb5",
".git/objects/f6/464d4c59e7636a1fbe67a7b9916557ed938993": "3259a4b0b6ce8d84f29daba931e62a79",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "fbc4b01fe3285832945ab21c31598d32",
".git/objects/4f/bc066ca160f97633e29cc745ec2f42bcab282d": "2833d90fee8803cfd49c0423e3d2d031",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "f589947af57edf0934577d63ecaabc0e",
".git/objects/ad/53f7a797c7b554baa9855af1b2dc5101939fb4": "7910879f6332f7d33fff427041dc00d5",
".git/objects/9a/cb62900dcf7f8a2d2e974d9bebae14df36ceec": "6e9e9bb0014e811d6a7ce9b0ec6335ac",
".git/objects/91/dd7f1613c449ad7ab6d457efc47c7d1078a07b": "676ab5e7d2f03318b13eac1a50528bfd",
".git/objects/91/d4b8a4335bfe39fe0b266043db72ba05b6f1fd": "8e2002a75a0fad301e7bee8a604796e6",
".git/objects/91/296e54b95e51794fb8d2b43fd92555b149a9ba": "9899b12c7ff4f6611e869f2527956607",
".git/objects/9e/e1271aff7423024ba1db7e35c27a2fdf72dc9d": "2231ec25e82b2587fbc265df23ccb649",
".git/objects/dc/93dd367fbc95aa033af1f8bc159ee11d1f89c8": "8c4c0051812ce93f86edde78c75e2907",
".git/objects/57/b1134d0725e9eded1b0f1a68cc018869de342f": "3306818dcabb8a98b3d78086ed3c925d",
".git/objects/3c/8430d6a9a86f23452ed592b886aef3446df030": "b85ec294632228557d480a9f73472383",
".git/objects/b5/e094cd16a6940d29165dc70b1b09edb07def13": "edc9f4323a00517039a15f004c1241c5",
".git/objects/28/dd278a3ec1b0387b6f6a51355b41774427785d": "d0239177bc8e1ba75989f827ccefe1b5",
".git/objects/28/6710c61bdbeae28ec80b8d15f549dfbb00956e": "adc056f83a79a5cb23a46feab9871732",
".git/objects/28/7511da8662757d15ab887083afabc82d504b1b": "5147f6b74c40e407e86ed3830b514670",
".git/objects/09/f24900568ac8047279ef8f0165129c5a75cc66": "3fbb610f74bc60a43ef99075f8c26402",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "c86893109644c17e9714c1db6ccfdcce",
".git/objects/fe/76b9b6652182db66b320eb26b3d2931fb77235": "29150685495cb94de37edf052f3d0a74",
".git/objects/7a/c08c8c7510096074e9736b3b2bbdf2f8c6be0c": "b7fcce0de61493986dd5aef379cf5148",
".git/objects/42/9f7909979b2e083b4c726a1a48703bacaa1434": "3a2ed6669f5e2827a9f50a84c323d839",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/93/cda364d97266945460baaf4b7d363119578ec4": "e60916cd7860210029faa77734fd242e",
".git/objects/be/d7468a2afde25e0159e2a0486bc6483516013b": "9ca581876be3795a81f37a1c7e390583",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "ecbb217cd77bebe8c7d8cb5658a9bc71",
".git/objects/a3/31ba6f0c0defbeca7686e8c99bfd6a2719c872": "02306ea223c97fb589a2c76f004b7d1f",
".git/objects/a3/c6e61439e476da3b7ca1962c91844da3848d95": "0c0c32ea7eb00c2fbd1e10093429156c",
".git/objects/1e/f0b2a4a2887734428bd3a6b5d3ac29977a973b": "d3b0a99dce553bada7b7d7bf634895d1",
".git/objects/1e/9a2f7fd4985c967d8ed2f89840b97d8f90b4ff": "6b42284a742a3dabb14a812f630c5438",
".git/objects/16/153e3e3c1cb49a7ca7c84e6b0c4c2605829d41": "69e6b1583d7b8c55594d722909cef465",
".git/objects/21/7e92c4e1a9a8776e17c1904d0e1122f6fbff88": "0fc3a211d946023681d2af910ff34269",
".git/objects/49/8c094521b8f5853470435808a39d87ce3f3ed8": "a45f31dadd488b3977241cc7873326fd",
".git/objects/49/aad5bf81871473eabc23963818110f72e98316": "35f257abef2177e1d882a79ff629735d",
".git/objects/f9/692c03328db0028b0bf38705f7e8019ed0264c": "34fa5cdcaf457cf47dd3df9599409c0e",
".git/objects/0c/d69936f2cb839a83d1dd30a6c732701004c584": "3c25bdc0fb69bb9b9845a4e6cf453428",
".git/objects/9c/008954d038916696b81c0f344bf44ca527f07a": "17dc14e521542312d6ccac86e628b3d7",
".git/objects/11/9ab75e66d48e440eefe145769025de49d704d6": "e35a2176956259239a196dfb398ebaec",
".git/objects/11/0ea848ea565760582cfdc3da2f305b74c71f7b": "c6240ac6a82f9de571db84ce33f4ee8d",
".git/objects/52/9537de3b38b78d579aa5638cbd0715cab369ad": "d5864d65fceacdbe041209bef8ffac98",
".git/objects/56/6368bb221b93c00f6e640b1f139dc8f4914022": "12bf3960cd42ab5a1c63654b81e18256",
".git/objects/b2/64a3bf89e83bea64e0aef2102247efdaa64597": "cc3221201570cc4774ea3e933d04f3b9",
".git/objects/9f/da598f0389925274a83b3054514ba543810905": "ab7e2277a1a680190722315e56888a21",
".git/objects/17/2ecf7a9abeda2b7b97f273fddabe5e51cd4ac0": "a35ff4e71f34a768d16959819d893723",
".git/objects/74/659cf1acf3b618da6deebc958905ed1bf81164": "5db8ecda3ce88efecddecadc46b56be8",
".git/objects/a1/9cfd304e713bf3d812f265b590dbc3752073ad": "7f7ff5889378c1675cd3c697e67aff35",
".git/objects/63/454ff0f0ca58906f666fdf7ed0e7e517be8a5a": "6c5cdb79a0f1bd33bb798a57e072a8b1",
".git/objects/2b/6b16239abf97a1ad8a7ee79e202248b6aa3520": "b7d41e0d6c7612f7271f1a5dfa33c57d",
".git/objects/3d/356a0f09e10abaa6a7ff3577e85f9e9823c1fb": "43bb95251d29a25b54b52fab6a9f1b5e",
".git/objects/e0/194cb1c1ca0e4aa3172006a7d407c758de5e27": "f78de3773b7e99caeee1625f8eb10cbd",
".git/objects/77/6395b7d8564b70c66cf23dd2ae19e8f9b8966c": "96e7c23c8c9cb4cbd8d64709c3229d5e",
".git/objects/81/8feae5dc24f76aa8f1cdb30e8f2b40e2c35d01": "2ec55663de40d4b045edead03fddb79b",
".git/objects/bb/66be86d30dd7d7fc7a4006d633f93f9fa6595b": "df85bf4ed52f87150ec1628239da6c38",
".git/objects/f2/053e3d482cafd314873bbbaba0d1be90cca1d4": "9d662de40ce6d16b7a2ea3b6cdb2c3c8",
".git/objects/94/2191b0e34f9caa09979897a93738592edbbbb6": "6ac68f610b20a98851dd06fd9f7236f5",
".git/objects/e1/88fb1451a627d36a2916b04e4aaf9998937612": "821c88712b62b7cc2ea87f7433bfa358",
".git/objects/1d/9479a2f5d6a2748cc152f9b2322d0808fdc263": "5b54bab9a3401c85e0273bf220077742",
".git/objects/37/fb1764df64ef99645cc28b11f9ea5eb10205c6": "7e27ae45f71ac912aac10ecf6fd0c429",
".git/objects/23/5574e44a4088b4439d0b7349eceb14840332d1": "d716f14081b364500064e0e340d5ba0b",
".git/COMMIT_EDITMSG": "c6c97bf49be6e05e8d4a6c49cbe465b7",
".git/logs/HEAD": "15e6e77e836ab99223068fe022026bfe",
".git/logs/refs/heads/main": "f1315d1a62988eb7cb344cb911302d8c",
".git/logs/refs/remotes/origin/main": "f8e1777e0ac9eb1ce7539f457fa84baf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "464c78432a6cb665efcad03b909bf45d",
".git/index": "3e2529e043954ef0e3da889541a15c32",
".dart_tool/lib/libsqlite3.so": "3f9ebb26d4548f55ba9514347e2a83a4",
".dart_tool/native_assets.yaml": "62ff14dba6d87870a25787dbe2918fb1"};
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
