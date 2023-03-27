

*   [Update your manifest](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#manifest)
*   [Thinking with events](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#events)
*   [Top-level event listeners](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#event_listeners)
    *   [Persisting state with storage APIs](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#state)
    *   [Moving from timers to alarms](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#alarms)
*   [Working with workers](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#workers)
    *   [Parsing and traversing with XML/HTML](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#documents)
    *   [Audio/video playback and capture](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#audio_vidio)
    *   [Rendering to a canvas](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#canvas)

Migrating from background pages to service workers
==================================================

Published on Wednesday, July 29, 2020 • Updated on Tuesday, October 6, 2020



*   [Update your manifest](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#manifest)
*   [Thinking with events](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#events)
*   [Top-level event listeners](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#event_listeners)
    *   [Persisting state with storage APIs](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#state)
    *   [Moving from timers to alarms](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#alarms)
*   [Working with workers](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#workers)
    *   [Parsing and traversing with XML/HTML](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#documents)
    *   [Audio/video playback and capture](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#audio_vidio)
    *   [Rendering to a canvas](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#canvas)

_Background pages_ have been a fundamental component of the Chrome Extension platform since its introduction. To put it simply, background pages provide extension authors with an environment that lives independent of any other window or tab. This allows extensions to observe and take action in response to events.

In Manifest V3, the Chrome extension platform moves from background pages to _service workers_. As stated in [Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers/), a "service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction." This is the technology that enables native-like experiences such as push notifications, rich offline support, background sync, and "Add to Home Screen" on the open web. Service workers were inspired in part by background pages in Chrome Extensions, but they iterate and improve on this model by tuning it for web-scale.

When migrating to this new background context, you'll need to keep two main things in mind. First, service workers are terminated when not in use and restarted when needed (similar to event pages). Second, service workers don't have access to DOM. We'll explore how to adapt to these challenges in the [Thinking with Events](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#events) and [Working with Workers](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#workers) sections below, respectively.

[#](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#manifest) Update your manifest
-----------------------------------------------------------------------------------------------------------------

Extensions register their background service workers in the [manifest](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#events) under the `"background"` field. This field uses the `"service_worker"` key, which specifies a single JavaScript file. In Manifest V2, this field was called `"scripts"` and allowed multiple scripts.

    {  "name": "Awesome Test Extension",  ...  "background": {    "service_worker": "background.js"  },  ...}

Find out more on the [Manage events with service workers](https://developer.chrome.com/docs/extensions/mv3/background_pages/#manifest) reference page.

[#](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#events) Thinking with events
---------------------------------------------------------------------------------------------------------------

Like event pages, service workers are a special execution environment that are started to handle events they're interested in and are terminated when they're no longer needed. The following sections provide recommendations for writing code in an ephemeral, evented execution context.

Several of these concepts are covered in the Manifest V2 page, [Migrate to Event Driven Background Scripts](https://developer.chrome.com/docs/extensions/mv2/background_migration/).

[#](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#event_listeners) Top-level event listeners
-----------------------------------------------------------------------------------------------------------------------------

In order for Chrome to successfully dispatch events to the appropriate listeners, extensions must register listeners in the first turn of the event loop. The most straightforward way to achieve this is to move event registration to the top-level of your service worker script.

The below snippet shows how an existing extension initializes its browser action listener in a persistent background page.

    // background.jschrome.storage.local.get(["badgeText"], ({ badgeText }) => {  chrome.action.setBadgeText({ text: badgeText });  // Listener is registered asynchronously  // This is NOT guaranteed to work in Manifest V3/service workers! Don't do this!  chrome.action.onClicked.addListener(handleActionClick);});

While this approach works in a persistent background page, it is _not_ guaranteed to work in a service worker due to the asynchronous nature of the [Storage APIs](https://developer.chrome.com/docs/extensions/reference/storage/). When a service worker is terminated, so are the event listeners associated with it. And since events are dispatched when a service worker starts, asynchronously registering events results in them being dropped because there's no listener registered when it is first spun up.

To address this, move the event listener registration to the top level of your script. This ensures that Chrome will be able to immediately find and invoke your action's click handler, even if your extension hasn't finished executing its async startup logic.

    // background.jschrome.storage.local.get(["badgeText"], ({ badgeText }) => {  chrome.action.setBadgeText({ text: badgeText });});// Listener is registered on startupchrome.action.onClicked.addListener(handleActionClick);

Manifest V3 consolidates `chrome.browserAction` and `chrome.pageAction` into a single `chrome.action` API.

### [#](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#state) Persisting state with storage APIs

One of the main things to get used to when adopting service workers is that they are short-lived execution environments. In more practical terms, an extension's service worker will start up, do some work, and get terminated repeatedly throughout a user's browser session. This poses a challenge to extension developers accustomed to long-lived background pages as application data is not immediately available in global variables.

The following Manifest V2 example recieves a name from a content script and persists it for later:

    // background.js// Don't do this! The service worker will be created and destroyed over the lifetime of your// extension, and this variable will be reset.let savedName = undefined;chrome.runtime.onMessage.addListener(({ type, name }) => {  if (type === "set-name") {    savedName = name;  }});chrome.browserAction.onClicked.addListener((tab) => {  chrome.tabs.sendMessage(tab.id, { name: savedName });});

If we port this code directly to Manifest V3, requiring service workers, it's possible that the code will be terminated between when the name is set and the user clicks the browser action. If this happens, the set name will have been lost—and `savedName` will again be `undefined`.

We can fix this bug by treating the [Storage APIs](https://developer.chrome.com/docs/extensions/reference/storage/) as our source of truth:

    // background.jschrome.runtime.onMessage.addListener(({ type, name }) => {  if (type === "set-name") {    chrome.storage.local.set({ name });  }});chrome.action.onClicked.addListener((tab) => {  chrome.storage.local.get(["name"], ({ name }) => {    chrome.tabs.sendMessage(tab.id, { name });  });});

### [#](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#alarms) Moving from timers to alarms

It's common for web developers to perform delayed or periodic operations using the `setTimeout` or `setInterval` methods. These APIs can fail in service workers, though, because the scheduler will cancel the timers when the service worker is terminated.

    // background.js// This worked in Manifest V2.const TIMEOUT = 3 * 60 * 1000; // 3 minutes in millisecondssetTimeout(() => {  chrome.action.setIcon({    path: getRandomIconPath(),  });}, TIMEOUT);

Instead, we can use the [Alarms API](https://developer.chrome.com/docs/extensions/reference/alarms/). Like other listeners, alarm listeners should be registered in the top level of your script.

    // background.jschrome.alarms.create({ delayInMinutes: 3 });chrome.alarms.onAlarm.addListener(() => {  chrome.action.setIcon({    path: getRandomIconPath(),  });});

[#](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#workers) Working with workers
----------------------------------------------------------------------------------------------------------------

[Service workers](https://developers.google.com/web/ilt/pwa/introduction-to-service-worker) are a specialized kind of [web worker](https://developer.mozilla.org/docs/Web/API/Worker), which are quite different from the web pages most web developers are used to working with. On a typical web page (or extension background page), the global execution context for JavaScript is of type [`Window`](https://developer.mozilla.org/docs/Web/API/Window). This object exposes the capabilities that web developers are used to working with: `window`, element, IndexedDB, `cookie`, `localStorage`, etc.

The [global scope for service worker](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope) is significantly more limited and doesn't have many of these features. Most notably, service workers don't have access to the DOM. Workers no longer provide `XMLHttpRequest`, but instead support the more modern [`fetch()`](https://developer.mozilla.org/docs/Web/API/Fetch_API). `URL.createObjectURL` is also not supported for service workers, due to its potential to create memory leaks.

The following sections cover some of the major use cases impacted by the move to service workers and recommendations on how to adapt.

### [#](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#documents) Parsing and traversing with XML/HTML

Since service workers don't have access to DOM, it's not possible for an extension's service worker to access the [`DOMParser`](https://developer.mozilla.org/docs/Web/API/DOMParser) API or create an `<iframe>` to parse and traverse documents. Extension developers have two ways to work around this limitation: create a new tab or use a library. Which you choose will depend on your use case.

Libraries such as [`jsdom`](https://github.com/jsdom/jsdom) can be used to emulate a typical browser window environment, complete with DOMParser, event propagation, and other capabilities like `requestAnimationFrame`. Lighter-weight alternatives like [`undom`](https://github.com/developit/undom) provide just enough DOM to power many frontend frameworks and libraries.

Extensions that need a full native browser environment can use the [`chrome.windows.create()`](https://developer.chrome.com/docs/extensions/reference/windows#method-create) and [`chrome.tabs.create()`](https://developer.chrome.com/docs/extensions/reference/tabs#method-create) APIs from inside a service worker to create a real browser window. Additionally, an extension's popup still provides a full (temporary) window environment.

### [#](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#audio_vidio) Audio/video playback and capture

It's not currently possible to play or capture media directly in a service worker. In order for a Manifest V3 extension to leverage the web's media playback and capture capabilities, the extension will need to create a window environment using either [`chrome.windows.create()`](https://developer.chrome.com/docs/extensions/reference/windows#method-create) or [`chrome.tabs.create()`](https://developer.chrome.com/docs/extensions/reference/tabs#method-create). Once created, the extension can use [message passing](https://developer.chrome.com/docs/extensions/mv3/messaging/) to coordinate between the playback document and service worker.

### [#](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#canvas) Rendering to a canvas

In some cases developers use background pages to render content for display in other contexts or to create and cache assets. While service workers don't have access to DOM and therefore cannot use `<canvas>` elements, service workers do have access to the [OffscreenCanvas API](https://html.spec.whatwg.org/multipage/canvas.html#the-offscreencanvas-interface).

    // background.js// for Manifest V2 background pagesfunction buildCanvas(width, height) {  const canvas = document.createElement("canvas");  canvas.width = width;  canvas.height = height;  return canvas;}

In the above block we're constructing a canvas element. To migrate to offscreen canvas, replace `document.createElement('canvas')` with `new OffscreenCanvas(width, height)`.

    // background.js// for Manifest V3 service workersfunction buildCanvas(width, height) {  const canvas = new OffscreenCanvas(width, height);  return canvas;}

For additional guidance on working with `OffscreenCanvas`, see [OffscreenCanvas—Speed up Your Canvas Operations with a Web Worker](https://developers.google.com/web/updates/2018/08/offscreen-canvas).

Updated on Tuesday, October 6, 2020 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/migrating_to_service_workers/index.md)

