

*   [Architecture](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#arch)
    *   [The manifest](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#manifest)
    *   [Toolbar icon](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#icons)
    *   [Service worker](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#background_script)
    *   [Content scripts](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#contentScripts)
    *   [UI elements](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#pages)
    *   [Options page](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#optionsPage)
    *   [Additional HTML files](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#html-files)
*   [Extension files](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#files)
    *   [Referencing extension files](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#ref-files)
    *   [Web-accesible resources](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#web-resources)
*   [Using Chrome APIs](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#apis)
    *   [Asynchronous methods](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#async-sync)
*   [Communication between pages](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#pageComm)
*   [Saving data](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#data)
*   [Incognito mode](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#incognito)
*   [Take the next step](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#next-steps)

Architecture overview
=====================

A high-level explanation of the components and structure of a Chrome Extension.

Published on Tuesday, September 18, 2012 • Updated on Wednesday, November 2, 2022



*   [Architecture](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#arch)
    *   [The manifest](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#manifest)
    *   [Toolbar icon](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#icons)
    *   [Service worker](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#background_script)
    *   [Content scripts](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#contentScripts)
    *   [UI elements](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#pages)
    *   [Options page](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#optionsPage)
    *   [Additional HTML files](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#html-files)
*   [Extension files](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#files)
    *   [Referencing extension files](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#ref-files)
    *   [Web-accesible resources](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#web-resources)
*   [Using Chrome APIs](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#apis)
    *   [Asynchronous methods](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#async-sync)
*   [Communication between pages](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#pageComm)
*   [Saving data](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#data)
*   [Incognito mode](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#incognito)
*   [Take the next step](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#next-steps)

Extensions are zipped bundles of HTML, CSS, JavaScript, images, and other files used in the web platform. Extensions can modify web content that users see and interact with. They can also extend and change the behavior of the browser itself.

This page briefly describes the files that could form part of an extension, how to access these files, how to use Chrome APIs, how extension files communicate, and how to store data.

[#](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#arch) Architecture
----------------------------------------------------------------------------------------------

An extension's architecture will depend on its functionality, but all extensions must have a [manifest](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#manifest). The following are other components an extension can include:

*   [Service worker](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#background_script)
*   [Toolbar icon](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#icons)
*   [UI elements](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#pages)
*   [Content script](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#contentScripts)
*   [Options page](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#optionsPage)

### [#](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#manifest) The manifest

The manifest file, titled `manifest.json`, gives the browser information about the extension, such as the most important files and the capabilities the extension might use.

    {  "name": "My Extension",  "description": "A nice little demo extension.",  "version": "2.1",  "manifest_version": 3,  "icons": {    "16": "icon_16.png",    "48": "icon_48.png",    "128": "icon_128.png"  },  "background": {    "service_worker": "background.js"  },  "permissions": ["storage"],  "host_permissions": ["*://*.example.com/*"],  "action": {    "default_icon": "icon_16.png",    "default_popup": "popup.html"  }}

### [#](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#icons) Toolbar icon

Extensions must have an icon that sits in the browser toolbar. Toolbar icons allow easy access and keep users aware of which extensions are installed. Most users will interact with an extension that uses a [popup](https://developer.chrome.com/docs/extensions/mv3/user_interface#popup) by clicking the icon, like in the [getting started example](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/tutorials/getting-started).

![Getting started popup](./Architecture overview - Chrome Developers_files/ku5Z8MMssgw6MKctpJVI.png)

### [#](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#background_script) Service worker

The extension service worker is the extension's event handler; it contains listeners for browser events that are important to the extension. It lies dormant until an event is fired then performs the instructed logic; it is only loaded when it is needed and unloaded when it goes idle. The service worker has access to all the [Chrome APIs](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#apis), as long as it declares the required permissions in the `manifest.json`.

An extension can only have a single service worker. To import further code, the service worker can be declared as an [ES Module](https://web.dev/es-modules-in-sw/#static-imports-only) by specifying `"type": "module"` in the manifest `"background"`.

See [Manage events with service workers](https://developer.chrome.com/docs/extensions/mv3/service_workers/) to learn more.

### [#](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#contentScripts) Content scripts

Content scripts allow extensions to inject logic into a page in order to read and modify its contents. A content script contains JavaScript that executes in the context of a page that has been loaded into the browser.

Content scripts can communicate with their parent extension by exchanging [messages](https://developer.chrome.com/docs/extensions/mv3/messaging/) and storing values using the [storage](https://developer.chrome.com/docs/extensions/reference/storage/) API.

![Shows a communication path between the content script and the parent extension](./Architecture overview - Chrome Developers_files/466ftDp0EXB4E1XeaGh0.png)

See [Understanding content scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/) to learn more.

### [#](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#pages) UI elements

An extension's user interface should be purposeful and minimal. The UI should customize or enhance the browsing experience without distracting from it.

The following is a list of the most common UI examples:

*   An [action click](https://developer.chrome.com/docs/extensions/mv3/user_interface/#click-event) event.
*   A [popup](https://developer.chrome.com/docs/extensions/mv3/user_interface#popup).
*   A [context menu](https://developer.chrome.com/docs/extensions/mv3/user_interface/#context_menu).
*   An [omnibox](https://developer.chrome.com/docs/extensions/mv3/user_interface/#omnibox).
*   A [keyboard shortcut](https://developer.chrome.com/docs/extensions/mv3/user_interface/#commands).
*   Desktop [notifications](https://developer.chrome.com/docs/extensions/reference/notifications/).
*   [Text-to-speech](https://developer.chrome.com/docs/extensions/reference/tts/).
*   A custom UI injected [into a page](https://developer.chrome.com/docs/extensions/mv3/content_scripts/).

See [Design the UI of a Chrome extension](https://developer.chrome.com/docs/extensions/mv3/user_interface/), to learn more.

### [#](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#optionsPage) Options page

Just as extensions allow users to customize the Chrome browser, the options page enables customization of the extension. Options can be used to enable features and allow users to choose what functionality is relevant to their needs.

Users can access the options page via [direct link](https://developer.chrome.com/docs/extensions/mv3/options/#linking) or in the context menu of the extension toolbar. The following is an example of the Google Dictionary extension.

![Options page link in the UI](./Architecture overview - Chrome Developers_files/Mz7GV76tFkzxRlb7Pq6e.png)

Link to the Options page.

![Context Menu Options page](./Architecture overview - Chrome Developers_files/BM11QeGCThsUNTlsZbAe.png)

Options page in the extension's context menu.

See [Give users options](https://developer.chrome.com/docs/extensions/mv3/options/) to learn more.

### [#](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#html-files) Additional HTML files

An extension can also have other HTML files that are not declared in the manifest. All extension HTML files can access the [Chrome APIs](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#apis) and can use script tags including Javascript files, but cannot declare inline JavaScript.

You can open these pages using the web api [window.open()](https://developer.mozilla.org/docs/Web/API/Window/open), the Chrome APIs [windows.create()](https://developer.chrome.com/docs/extensions/reference/windows/#method-create), or [tabs.create()](https://developer.chrome.com/docs/extensions/reference/tabs#method-create).

[#](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#files) Extension files
--------------------------------------------------------------------------------------------------

### [#](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#ref-files) Referencing extension files

Just as HTML pages on the web can include files on the same site with _relative URLs_, **extension pages** can also reference extension assets using relative paths.

    <img src="images/my_image.png">

To access an extension file from a **content script**, you can call [`chrome.runtime.getURL()`](https://developer.chrome.com/docs/extensions/reference/runtime#method-getURL) to get the _absolute URL_ of your extension asset.

    let image = chrome.runtime.getURL("images/my_image.png")

To access an extension file from a **website**, you will have to construct the URL as follows:

    chrome-extension://EXTENSION_ID/RELATIVE_PATH

You can find the `EXTENSION_ID` in the Extension management page **chrome://extensions**. The `RELATIVE_PATH` is the file path relative to the extension's top folder.

Key Term

The **extension ID** is a 32-character alpha string that identifies an extension in the browser and on the Chrome Web Store.

During development, a new ID is generated when an [_unpacked extension_](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked) is loaded, unless the `"key"` property is [set in the manifest](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#keep-consistent-id).

Caution

All assets that content scripts and websites want to access must be declared under [`web_accessible_resources`](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#web-resources) key in the manifest.

### [#](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#web-resources) Web-accesible resources

Web-accessible resources are files (images, HTML, CSS, Javascript) inside an extension that can be accessed by a content script, web pages, or other extensions.

You can declare which resources are exposed and to what origins in the manifest:

    {  ...  "web_accessible_resources": [    {      "resources": [ "images/*.png" ],      "matches": [ "https://example.com/*" ]    }  ],  ...}

See [Web-accesible resources](https://developer.chrome.com/docs/extensions/mv3/manifest/web_accessible_resources/) for usage information.

[#](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#apis) Using Chrome APIs
---------------------------------------------------------------------------------------------------

In addition to having access to the same [web APIs](https://developer.mozilla.org/docs/Web/API) as web pages, extensions can also use [extension-specific APIs](https://developer.chrome.com/docs/extensions/reference/) that create tight integration with the browser. For example, both extensions and webpages can access the standard [`window.open()`](https://developer.mozilla.org/docs/Web/API/Window/open) method to open a URL, but extensions can specify which window that URL should be displayed in by using [chrome.tabs.create()](https://developer.chrome.com/docs/extensions/reference/tabs#method-create) instead.

For more information, explore the [Chrome API reference docs](https://developer.chrome.com/docs/extensions/reference/).

### [#](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#async-sync) Asynchronous methods

Most Chrome API methods are asynchronous; they return immediately without waiting for the operation to finish. If an extension needs to know the outcome of an asynchronous operation, there are two choices:

*   Use the returned promise.
*   Pass a callback function into the method.

Note that these choices are mutually exclusive. If you pass a callback to a method, no promise will be returned. If you use the returned promise, do not pass a callback.

Generally, you should prefer promises to callbacks. Not all methods in extensions APIs support promises, but newer methods do. You can verify whether a method supports promises by checking its API reference page. If you need to support both promises and callbacks for the same function (because your users have older browsers), you can test whether the method returns a promise using `typeof` and [optional chaining](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Optional_chaining). For example:

    typeof chrome.contextMenus.removeAll()?.then()

#### [#](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#async) Promises

Both methods of handling promises are supported. See [Using promises](https://developer.chrome.com/docs/extensions/mv3/promises/) to learn more.

    // Promisechrome.tabs.query(queryOptions).then((tabs) => {  chrome.tabs.update(tabs[0].id, {url: newUrl});  someOtherFunction();});// async-awaitasync function queryTab() {  let tabs = await chrome.tabs.query(queryOptions);  chrome.tabs.update(tabs[0].id, {url: newUrl});  someOtherFunction();}

#### [#](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#callbacks) Callbacks

A method is asynchronous when the callback parameter is available in its signature.

    // Signatures for an asynchronous methodchrome.tabs.query(object queryInfo, function callback)

[#](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#pageComm) Communication between pages
-----------------------------------------------------------------------------------------------------------------

Different components in an extension can communicate with each other using [message passing](https://developer.chrome.com/docs/extensions/mv3/messaging/). Either side can listen for messages sent from the other end, and respond on the same channel.

[#](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#data) Saving data
---------------------------------------------------------------------------------------------

The chrome storage API has been optimized to meet the specific storage needs of extensions. For example, whenever data is updated, you can use the `onChanged()` event to track these changes. All extension components have access to this API. An extension can also store data using the web API [indexedDB](https://developer.mozilla.org/docs/Web/API/IndexedDB_API).

See [storage API](https://developer.chrome.com/docs/extensions/reference/storage/) for usage and examples.

[#](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#incognito) Incognito mode
-----------------------------------------------------------------------------------------------------

Extensions don't run in incognito windows unless the user manually allows it in the extension's settings page. By default, normal and incognito windows run in a single shared process. However, extensions can run incognito windows in their own separate process or not support incognito windows at all. You can specify this behavior in the ["incognito"](https://developer.chrome.com/docs/extensions/mv3/manifest/incognito/) key in the manifest.

See [Saving data in incognito mode](https://developer.chrome.com/docs/extensions/mv3/user_privacy/#data-incognito) to understand how to protect user privacy.

[#](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#next-steps) Take the next step
----------------------------------------------------------------------------------------------------------

After reading the overview and completing the [Getting started](https://developer.chrome.com/docs/extensions/mv3/getstarted/) tutorial, you should be ready to start writing your own extensions! Dive deeper into the world of custom Chrome with the following resources:

*   Learn how to debug Extensions in the [debugging tutorial](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/).
*   Chrome Extensions have access to powerful APIs above and beyond what's available on the open web. The [chrome APIs documentation](https://developer.chrome.com/docs/extensions/reference/) will walk through each API.
*   The [developer's guide](https://developer.chrome.com/docs/extensions/mv3/devguide/) has dozens of additional links to pieces of documentation relevant to advanced extension creation.

Updated on Wednesday, November 2, 2022 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/architecture-overview/index.md)

