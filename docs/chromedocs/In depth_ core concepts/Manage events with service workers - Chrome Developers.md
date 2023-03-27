

*   [Register the service worker](https://developer.chrome.com/docs/extensions/mv3/service_workers/#manifest)
*   [Initialize the extension](https://developer.chrome.com/docs/extensions/mv3/service_workers/#initialization)
*   [Set up listeners](https://developer.chrome.com/docs/extensions/mv3/service_workers/#listeners)
*   [Filter events](https://developer.chrome.com/docs/extensions/mv3/service_workers/#filters)
*   [React to listeners](https://developer.chrome.com/docs/extensions/mv3/service_workers/#react)
*   [Unload background scripts](https://developer.chrome.com/docs/extensions/mv3/service_workers/#unloading)

Manage events with service workers
==================================

Published on Monday, September 17, 2012 • Updated on Tuesday, May 1, 2018



*   [Register the service worker](https://developer.chrome.com/docs/extensions/mv3/service_workers/#manifest)
*   [Initialize the extension](https://developer.chrome.com/docs/extensions/mv3/service_workers/#initialization)
*   [Set up listeners](https://developer.chrome.com/docs/extensions/mv3/service_workers/#listeners)
*   [Filter events](https://developer.chrome.com/docs/extensions/mv3/service_workers/#filters)
*   [React to listeners](https://developer.chrome.com/docs/extensions/mv3/service_workers/#react)
*   [Unload background scripts](https://developer.chrome.com/docs/extensions/mv3/service_workers/#unloading)

Extensions are event-based programs used to modify or enhance the Chrome browsing experience. Events are browser triggers, such as navigating to a new page, removing a bookmark, or closing a tab. Extensions monitor these events using scripts in their background [service worker](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/), which then react with specified instructions.

A background service worker is loaded when it is needed, and unloaded when it goes idle. Some examples include:

*   The extension is first installed or updated to a new version.
*   The background page was listening for an event, and the event is dispatched.
*   A content script or other extension [sends a message.](https://developer.chrome.com/docs/extensions/mv3/messaging/)
*   Another view in the extension, such as a popup, calls [`runtime.getBackgroundPage`](https://developer.chrome.com/docs/extensions/runtime#method-getBackgroundPage).

Once it has been loaded, an extension's service worker generally keeps running as long as it is performing an action, such as calling a Chrome API or issuing a network request.

Opening a view doesn't cause the service worker to load, but only prevents it from closing once loaded.

Effective background scripts stay dormant until an event they are listening for fires, react with specified instructions, then unload.

[#](https://developer.chrome.com/docs/extensions/mv3/service_workers/#manifest) Register the service worker
-----------------------------------------------------------------------------------------------------------

Extensions register their service worker in the [manifest](https://developer.chrome.com/docs/extensions/mv3/manifest/) under the `"background"` field. This field uses the `"service_worker"` key, which specifies a single JavaScript file.

    {  "name": "Awesome Test Extension",  ...  "background": {    "service_worker": "background.js"  },  ...}

You can optionally specify an extra field of `"type": "module"` to include the service worker as an ES Module, which allows you to `import` further code. See [ES modules in service workers](https://web.dev/es-modules-in-sw/) for more information. For example:

      "background": {    "service_worker": "background.js",    "type": "module"  }

[#](https://developer.chrome.com/docs/extensions/mv3/service_workers/#initialization) Initialize the extension
--------------------------------------------------------------------------------------------------------------

Listen to the [`runtime.onInstalled`](https://developer.chrome.com/docs/extensions/reference/runtime#event-onInstalled) event to initialize an extension on installation. Use this event to set a state or for one-time initialization, such as a [context menu](https://developer.chrome.com/docs/extensions/reference/contextMenus/).

    chrome.runtime.onInstalled.addListener(() => {  chrome.contextMenus.create({    "id": "sampleContextMenu",    "title": "Sample Context Menu",    "contexts": ["selection"]  });});

[#](https://developer.chrome.com/docs/extensions/mv3/service_workers/#listeners) Set up listeners
-------------------------------------------------------------------------------------------------

Structure background scripts around events the extension depends on. Defining functionally relevant events allows background scripts to lie dormant until those events are fired and prevents the extension from missing important triggers.

Listeners must be registered synchronously from the start of the page.

    chrome.runtime.onInstalled.addListener(() => {  chrome.contextMenus.create({    "id": "sampleContextMenu",    "title": "Sample Context Menu",    "contexts": ["selection"],  });});// This will run when a bookmark is created.chrome.bookmarks.onCreated.addListener(() => {  // do something});

Do not register listeners asynchronously, as they will not be properly triggered.

    chrome.runtime.onInstalled.addListener(() => {  // ERROR! Events must be registered synchronously from the start of  // the page.  chrome.bookmarks.onCreated.addListener(() => {    // do something  });});

Extensions can remove listeners from their background scripts by calling `removeListener`. If all listeners for an event are removed, Chrome will no longer load the extension's background script for that event.

    chrome.runtime.onMessage.addListener((message, sender, reply) => {  chrome.runtime.onMessage.removeListener(event);});

[#](https://developer.chrome.com/docs/extensions/mv3/service_workers/#filters) Filter events
--------------------------------------------------------------------------------------------

Use APIs that support [event filters](https://developer.chrome.com/docs/extensions/reference/events#filtered) to restrict listeners to the cases the extension cares about. If an extension is listening for the [`tabs.onUpdated`](https://developer.chrome.com/docs/extensions/reference/extensions/tabs#event-onUpdated) event, try using the [`webNavigation.onCompleted`](https://developer.chrome.com/docs/extensions/reference/webNavigation#event-onCompleted) event with filters instead, as the tabs API does not support filters.

    const filter = {  url: [    {      urlMatches: 'https://www.google.com/',    },  ],};chrome.webNavigation.onCompleted.addListener(() => {  console.info("The user has loaded my favorite website!");}, filter);

[#](https://developer.chrome.com/docs/extensions/mv3/service_workers/#react) React to listeners
-----------------------------------------------------------------------------------------------

Listeners exist to trigger functionality once an event has fired. To react to an event, structure the desired reaction inside of the listener event.

    chrome.runtime.onMessage.addListener((message, callback) => {  const tabId = getForegroundTabId();  if (message.data === "setAlarm") {    chrome.alarms.create({delayInMinutes: 5})  } else if (message.data === "runLogic") {    chrome.scripting.executeScript({file: 'logic.js', tabId});  } else if (message.data === "changeColor") {    chrome.scripting.executeScript(        {func: () => document.body.style.backgroundColor="orange", tabId});  };});

[#](https://developer.chrome.com/docs/extensions/mv3/service_workers/#unloading) Unload background scripts
----------------------------------------------------------------------------------------------------------

Unlike [event pages in Manifest V2](https://developer.chrome.com/docs/extensions/mv2/background_pages/), extension service workers do not receive a `runtime.onSuspend` event before they are stopped. This is because documents have [`unload`](https://developer.mozilla.org/en-US/docs/Web/API/Window/unload_event) and [`beforeUnload`](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) events, but web workers (and by extension service workers) do not have an equivalent event.

Updated on Tuesday, May 1, 2018 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/service_workers/index.md)

