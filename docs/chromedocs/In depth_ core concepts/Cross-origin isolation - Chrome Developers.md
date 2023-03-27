

Cross-origin isolation
======================

Published on Tuesday, August 3, 2021 • Updated on Wednesday, November 10, 2021

[Cross-origin isolation](https://web.dev/cross-origin-isolation-guide/) enables a web page to use powerful features such as [`SharedArrayBuffer`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer). An extension can opt into cross-origin isolation by specifying the appropriate values for the [`cross_origin_embedder_policy`](https://developer.chrome.com/docs/extensions/mv3/manifest/cross_origin_embedder_policy/) and [`cross_origin_opener_policy`](https://developer.chrome.com/docs/extensions/mv3/manifest/cross_origin_opener_policy/) manifest keys. For example, a manifest like the one below will opt the extension's origin into cross-origin isolation.

    {  "name": "CrossOriginIsolation example",  "manifest_version": 3,  "version": "1.1",  "cross_origin_embedder_policy": {    "value": "require-corp"  },  "cross_origin_opener_policy": {    "value": "same-origin"  },  ...}

Opting into cross-origin isolation allows the extension to use powerful APIs like SharedArrayBuffers in its cross-origin isolated contexts. However, it does also come with certain side-effects. See [Making your website "cross-origin isolated" using COOP and COEP](https://web.dev/coop-coep/) for more information on this.

Caution

Even if an extension opts into cross-origin isolation, not all extension contexts will be cross-origin isolated. For example, cross-origin isolation [is not fully implemented](https://bugs.chromium.org/p/chromium/issues/detail?id=1131404)) for service and shared workers currently. Similarly, a cross-origin isolated extension's web-accessible subframe on a regular web page is not considered cross-origin isolated currently.

Updated on Wednesday, November 10, 2021 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/cross-origin-isolation/index.md)

