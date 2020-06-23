/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fa1db3a7498bf2d4e72dfe509f5800b0"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "44cf46e8d7fcf99599a3d0ceb8cfd754"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "2f5534f0c11a94318898d8e8e67a7ea9"
  },
  {
    "url": "api.html",
    "revision": "01d337609c71bf240026e4113b0d9834"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "5d47fcf7009db7bcbd06ae7bff46863a"
  },
  {
    "url": "assets/css/0.styles.85ce0dc0.css",
    "revision": "a2054df694a5ca826a19c9619756e916"
  },
  {
    "url": "assets/img/detectiongate_setup_1.25bd04bc.png",
    "revision": "25bd04bc742bd3a274b911e27ccbc11d"
  },
  {
    "url": "assets/img/detectiongate_setup_2.ff0bc795.png",
    "revision": "ff0bc7952c0736ce49f89dfcd1afdada"
  },
  {
    "url": "assets/img/levelchecknpc_setup.372c0584.png",
    "revision": "372c0584f661e93786e291d7c481f12e"
  },
  {
    "url": "assets/img/pinconsole_multiple_bankaccounts_en.f6f6dc72.png",
    "revision": "f6f6dc72c4367f42dedc18e6ae0bdf00"
  },
  {
    "url": "assets/img/pinconsole_multiple_bankaccounts_nl.4b88bbec.png",
    "revision": "4b88bbec2fd5ba1942a5a2ab61ccb920"
  },
  {
    "url": "assets/img/pinconsole_setup_en.499d9d4c.png",
    "revision": "499d9d4c9288068bad9e11fca195981b"
  },
  {
    "url": "assets/img/pinconsole_setup_nl.539ed98e.png",
    "revision": "539ed98e626f653025f9c5d3ec64e147"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/teleporter_example.63a4bb1e.png",
    "revision": "63a4bb1eb36299bc9a6bd67b71f5e478"
  },
  {
    "url": "assets/img/teleportercmd_help.e314c659.png",
    "revision": "e314c6591270cd7bb2ded9c18a8b2e27"
  },
  {
    "url": "assets/img/teleportercmd_help.f5d0f6c5.png",
    "revision": "f5d0f6c513b401ee9a12261ec42480c7"
  },
  {
    "url": "assets/js/10.5fb7ed8a.js",
    "revision": "ea4ac8ef7135234e381ff4c0843f3e58"
  },
  {
    "url": "assets/js/11.76c7c7ab.js",
    "revision": "16959c32a7cb0e41bc72ef25a3ba5e73"
  },
  {
    "url": "assets/js/12.b1ec1aa4.js",
    "revision": "830c205d65c986c1d7aeddb48b3a726c"
  },
  {
    "url": "assets/js/13.e52edb0a.js",
    "revision": "79e9e399b6d6b3d1f4145dd1a03c8072"
  },
  {
    "url": "assets/js/14.2d2c26f4.js",
    "revision": "0f076934307dabcc64206be981fa8b5a"
  },
  {
    "url": "assets/js/15.7bef7e8f.js",
    "revision": "567a7d7ac4a6bc985b8594b135b10c2e"
  },
  {
    "url": "assets/js/16.868fd65e.js",
    "revision": "1b2d595d36b32903479e2a65f6b50822"
  },
  {
    "url": "assets/js/17.d46675c5.js",
    "revision": "9fa74a1dc0f360d712269af3d1b4dcf2"
  },
  {
    "url": "assets/js/18.982d725f.js",
    "revision": "baa86994afc6adb4b5259f897e801ccd"
  },
  {
    "url": "assets/js/19.293140f7.js",
    "revision": "ecd7955f8e22a8d76f152f02437baf7b"
  },
  {
    "url": "assets/js/2.446c9011.js",
    "revision": "22e6605bbffc055d3792fc31c54ad87a"
  },
  {
    "url": "assets/js/20.db7e5819.js",
    "revision": "3295dc81db40bb53622dbad8c5c21a15"
  },
  {
    "url": "assets/js/21.1f8e8e03.js",
    "revision": "743146bec25ea94b20932e84d7ccd690"
  },
  {
    "url": "assets/js/22.1e0a274d.js",
    "revision": "509d5182fcdb61737c3edd347aa53c37"
  },
  {
    "url": "assets/js/23.8a8efe44.js",
    "revision": "c845754a87c14e912d165b242b5f1724"
  },
  {
    "url": "assets/js/24.c17eef58.js",
    "revision": "21e134eb8678c2d3bee87fa758b1fe63"
  },
  {
    "url": "assets/js/25.51aaa296.js",
    "revision": "b80918f0aeb006f4fccc317129ebc28d"
  },
  {
    "url": "assets/js/26.a92f8e00.js",
    "revision": "f58ee64e4b29246730cd32ab4b0a70c4"
  },
  {
    "url": "assets/js/27.f46e6472.js",
    "revision": "a9f70ddf8d07f08d0a2ba79d2a4d00d7"
  },
  {
    "url": "assets/js/28.23210516.js",
    "revision": "7ef2a5dcc8b2bf091e646676da5f1d51"
  },
  {
    "url": "assets/js/29.53bbe522.js",
    "revision": "fa3df53cb1a42b7e4a2a109347fd2996"
  },
  {
    "url": "assets/js/3.202c6226.js",
    "revision": "0d24b62a36566d9a418baa3b7ff104dd"
  },
  {
    "url": "assets/js/30.6301705c.js",
    "revision": "57edbfb94333743c6f8491319cbaf50e"
  },
  {
    "url": "assets/js/31.d0d1d3bb.js",
    "revision": "6623448b841a50a668d65bdfac43759a"
  },
  {
    "url": "assets/js/32.3e853c91.js",
    "revision": "40793ffbfaf1764ffca3aa83cfdd4840"
  },
  {
    "url": "assets/js/33.9fb39dc8.js",
    "revision": "472a5ee36f4b7f0e8b7a42cb9645dcb9"
  },
  {
    "url": "assets/js/34.e6cea82b.js",
    "revision": "c746ee69dc82b8bbc2518a8d948b26f3"
  },
  {
    "url": "assets/js/35.1295a082.js",
    "revision": "49e5ef7fdd35443574ea0720b23b01f3"
  },
  {
    "url": "assets/js/36.c3c18db3.js",
    "revision": "51c6e85ee98ec37df541c3bb5326b61d"
  },
  {
    "url": "assets/js/4.90b98835.js",
    "revision": "32b762753969ce5ee7b385082685cbbe"
  },
  {
    "url": "assets/js/5.35468b4d.js",
    "revision": "4c1599d792919269cb5a133be274873f"
  },
  {
    "url": "assets/js/6.13a57ca2.js",
    "revision": "48d9cca980c78b18e5ed8acaa397b00b"
  },
  {
    "url": "assets/js/7.129da5b5.js",
    "revision": "d7bba448567ed66d67b6d706a01d7bca"
  },
  {
    "url": "assets/js/8.d5fae6c6.js",
    "revision": "ce67846026e380430917982b011405f1"
  },
  {
    "url": "assets/js/9.baa54f7a.js",
    "revision": "9e9a5427c9c24249e37eb7504d8908e3"
  },
  {
    "url": "assets/js/app.db03637c.js",
    "revision": "735f597d015e84abf11857995e17a012"
  },
  {
    "url": "bungeecord.html",
    "revision": "89e414ce89f52a0533fa26765f5b9dc1"
  },
  {
    "url": "commands/admin.html",
    "revision": "f316cf8634c7cbbb52fc181f867a0c26"
  },
  {
    "url": "commands/banking.html",
    "revision": "bc60dd2eaa3712ed7c204e304839835f"
  },
  {
    "url": "commands/player.html",
    "revision": "8ad40bb0681841bb50d5a394a563ce3e"
  },
  {
    "url": "en/api.html",
    "revision": "66db27ce93e33b3a9aa579eca824e96e"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "38952ac0df875de63bfcb0606b0dc583"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "62f74bfeced2e336774812723658274d"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "0b6f2529f743a089cc65671e3dcf2d44"
  },
  {
    "url": "en/commands/player.html",
    "revision": "451455bcb9cbf81a2bc5a43df17e270c"
  },
  {
    "url": "en/faq.html",
    "revision": "4ed43f5c78ad597bdb1cc5e5d8d57288"
  },
  {
    "url": "en/index.html",
    "revision": "c9f21a2f4a011ff7e42b368cd796193e"
  },
  {
    "url": "en/permissions.html",
    "revision": "82e2d6e4e9815a149b0842cc6a5c2163"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "a0a2edb1b2f643c1b78d77bd153a6394"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "bd34a5f795fc3efd409a24d6c8429218"
  },
  {
    "url": "en/setup.html",
    "revision": "60ba8b56246a0e732929a9eb8b56ed75"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "2539938d81245dc3323c71990e82caee"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "aaaa9dc5fa843fc3959568fdb34fe49a"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "51dbfae85c41135b916cc985235e36bc"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "4a28eb8b09cfbf4a72016a34b722a028"
  },
  {
    "url": "faq.html",
    "revision": "5fc4eace7ab9abb81d764830ab5664ac"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "00ecb916a548e8be44ec3467e1b66d6b"
  },
  {
    "url": "favicon-194x194.png",
    "revision": "e13db8e5c6827bd04a268948549ca396"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "4e9663215a5f70a874e25ebe5e0ca6c7"
  },
  {
    "url": "index.html",
    "revision": "8c67526cb10710e5d82bef1b91b40e2b"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "a4837080efeeaf06ae40e214e744763f"
  },
  {
    "url": "mstile-310x310.png",
    "revision": "07c1b3f42278810020c6bda24ec48e25"
  },
  {
    "url": "permissions.html",
    "revision": "fdba81040726a3ba75a6e4dd9d181ea6"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "c75d7db089a74a6bcb9a384a9c13f196"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "31ff7ec74282c6b75a7633aa388e03bd"
  },
  {
    "url": "setup.html",
    "revision": "9cb183f04afb016e4af1cc80ab735d68"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "19fd719abcd5175d0f148afd2e4a6fc7"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "2ab2124f3f674a62b673c148c4732a63"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "e61464347dba54f3437865c3d12b7926"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "772452e6324d54aacf39948bf7a53981"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
