

*   [Feature summary](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#feature-summary)
*   [Updating the manifest.json file](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#updating-manifest-dot-json)
    *   [Manifest version](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#manifest-version)
    *   [Service worker](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#man-sw)
    *   [Host permissions](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#host-permissions)
    *   [Content security policy](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#content-security-policy)
    *   [Action API unification](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#action-api-unification)
    *   [Web-accessible resources](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#web-accessible-resources)
*   [Code execution](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#code-execution)
    *   [Remotely hosted code restrictions](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#remotely-hosted-code)
    *   [Executing arbitrary strings](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#executing-arbitrary-strings)
*   [Service workers](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#background-service-workers)
*   [Modifying network requests](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#modifying-network-requests)
    *   [Can Manifest V3 extensions use blocking Web Request?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#when-use-blocking-webrequest)
    *   [How do you use declarativeNetRequest?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#how-use-declarativenetrequest)
    *   [Conditional permissions and declarativeNetRequest](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#declarativenetrequest-conditional-perms)
*   [Sunset for deprecated APIs](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#sunset-deprecated-apis)

Migrating to Manifest V3
========================

Getting you headed in the right direction.

Published on Monday, November 9, 2020 • Updated on Monday, June 13, 2022



*   [Feature summary](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#feature-summary)
*   [Updating the manifest.json file](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#updating-manifest-dot-json)
    *   [Manifest version](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#manifest-version)
    *   [Service worker](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#man-sw)
    *   [Host permissions](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#host-permissions)
    *   [Content security policy](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#content-security-policy)
    *   [Action API unification](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#action-api-unification)
    *   [Web-accessible resources](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#web-accessible-resources)
*   [Code execution](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#code-execution)
    *   [Remotely hosted code restrictions](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#remotely-hosted-code)
    *   [Executing arbitrary strings](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#executing-arbitrary-strings)
*   [Service workers](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#background-service-workers)
*   [Modifying network requests](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#modifying-network-requests)
    *   [Can Manifest V3 extensions use blocking Web Request?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#when-use-blocking-webrequest)
    *   [How do you use declarativeNetRequest?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#how-use-declarativenetrequest)
    *   [Conditional permissions and declarativeNetRequest](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#declarativenetrequest-conditional-perms)
*   [Sunset for deprecated APIs](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#sunset-deprecated-apis)

This guide provides you with the information needed to migrate an extension from Manifest V2 to Manifest V3. Some extensions require very little change to make them Manifest V3 compliant, while others need to be redesigned to some degree. For a quick reference guide see the [migration checklist](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/).

Follow [What's new in Chrome Extensions](https://developer.chrome.com/docs/extensions/whatsnew/) to read about new Manifest V3 features as they become available.

[#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#feature-summary) Feature summary
----------------------------------------------------------------------------------------------------

There are a number of new features and functional changes for extensions using Manifest V3:

*   [Service workers](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview#service-workers) replace background pages.
*   [Network request modification](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview#network-request-modification) is now handled with the new [declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/) API.
*   [Remotely hosted code](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview#remotely-hosted-code) is no longer allowed; an extension can only execute JavaScript that is included within its package.
*   [Promise](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview#promises) support has been added to many methods, though callbacks are still supported as an alternative. (We will eventually support promises on all appropriate methods.)
*   A number of other, relatively [minor feature changes](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview#other-features) are also introduced in Manifest V3.

For a fuller description of these changes, see the [Manifest V3 Overview](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/).

[#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#updating-manifest-dot-json) Updating the manifest.json file
-------------------------------------------------------------------------------------------------------------------------------

To use the features of Manifest V3, you need to update your [manifest file](https://developer.chrome.com/docs/extensions/mv3/manifest/). Naturally, you'll need to change the manifest version, but there are other changes that require manifest updates. Each of these is explained further on in this document.

*   [service worker](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#man-sw)
*   [host permissions](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#host-permissions)
*   [content security policy](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#content-security-policy)
*   [action declarations](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#action-api-unification)
*   [web-accessible resources](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#web-accessible-resources)

### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#manifest-version) Manifest version

Changing the value of the `"manifest_version"` element is the key to upgrading your extension. This determines whether you're using the Manifest V2 or Manifest V3 feature set:

    // Manifest V2{  ...  "manifest_version": 2  ...}

    // Manifest V3{  ...  "manifest_version": 3  ...}

### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#man-sw) Service worker

Manifest V3, replaces background pages with a single [_extension service workers_](https://developer.mozilla.org/docs/Web/API/Service_Worker_API). Register the service worker under the `"background"` field, which uses the `"service_worker"` key, which specifies a single JavaScript file.

Even though Manifest V3, does not support multiple background scripts, you can optionally declare the service worker as an [ES Module](https://web.dev/es-modules-in-sw/#static-imports-only) by specifying `"type": "module"`, which allows you to import further code.

    // Manifest V2{  ...  "background": {    "scripts": [      "backgroundContextMenus.js",      "backgroundOauth.js"    ],    "persistent": false  },  ...}

    // Manifest V3{  ...  "background": {    "service_worker": "background.js",    "type": "module" //optional  }  ...}

Multiple background scripts are not supported in Manifest V3 and only one `service_worker` can be specified. You can optionally declare the service worker as an [ES Module](https://web.dev/es-modules-in-sw/#static-imports-only) by specifying `"type": "module"`, which allows you to import further code.

### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#host-permissions) Host permissions

In Manifest V3, you'll need to specify host permissions and optional host permissions separately from other permissions.

    // Manifest V2{  ...  "permissions": [    "tabs",    "bookmarks",    "http://www.blogger.com/",  ],  "optional_permissions": [    "unlimitedStorage",    "*://*/*",  ]  ...}

    // Manifest V3{  ...  "permissions": [    "tabs",    "bookmarks"  ],  "optional_permissions": [    "unlimitedStorage"  ],  "host_permissions": [    "http://www.blogger.com/",  ],  "optional_host_permissions": [    "*://*/*",  ]  ...}

Caution

Moving the match patterns to `"host_permissions"` does not affect [content scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#static-declarative). Content script match patterns remain under `"content_scripts.matches"`.

### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#content-security-policy) Content security policy

An extension's [content security policy](https://content-security-policy.com/) (CSP) was specified in Manifest V2 as a string; in Manifest V3 it is an object with members representing alternative CSP contexts:

    // Manifest V2{  ...  "content_security_policy": "..."  ...}

    // Manifest V3{  ...  "content_security_policy": {    "extension_pages": "...",    "sandbox": "..."  }  ...}

**`extension_pages`**: This policy covers pages in your extension, including html files and service workers.

These page types are served from the `chrome-extension://` protocol. For instance, a page in your extension is `chrome-extension://EXTENSION_ID/foo.html`.

**`sandbox`**: This policy covers any [sandboxed extension pages](https://developer.chrome.com/docs/extensions/mv3/manifest/sandbox/) that your extension uses.

In addition, Manifest V3 disallows certain CSP modifications for `extension_pages` that were permitted in Manifest V2. The `script-src,` `object-src`, and `worker-src` directives may only have the following values:

*   `self`
*   `none`
*   Any localhost source, (`http://localhost`, `http://127.0.0.1`, or any port on those domains)

CSP modifications for `sandbox` have no such new restrictions.

Starting in Chrome 102, Manifest V3 extensions can include `wasm-unsafe-eval` in the CSP to use WebAssembly files bundled as part of the extension.

### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#action-api-unification) Action API unification

In Manifest V2, there were two different APIs to implement actions: `"browser_action"` and `"page_action"`. These APIs filled distinct roles when they were introduced, but over time they've become redundant so in Manifest V3 we are unifying them into as single `"action"` API:

    // Manifest V2// manifest.json{  ...  "browser_action": { ... },  "page_action": { ... }  ...}// background.jschrome.browserAction.onClicked.addListener(tab => { ... });chrome.pageAction.onClicked.addListener(tab => { ... });

    // Manifest V3// manifest.json{  ...  "action": { ... }  ...}// background.jschrome.action.onClicked.addListener(tab => { ... });

### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#web-accessible-resources) Web-accessible resources

This change limits access to extension resources to specific sites/extensions. Instead of providing a list of files, you now provide an **array of objects**, each of which can map to a set of resources to a set of URLs or extension IDs:

    // Manifest V2{  ...  "web_accessible_resources": [    RESOURCE_PATHS  ]  ...}

    // Manifest V3{  ...  "web_accessible_resources": [{    "resources": [RESOURCE_PATHS],    "matches": [MATCH_PATTERNS],    "extension_ids": [EXTENSION_IDS],    "use_dynamic_url": boolean //optional  }]  ...}

Replace the following:

*   `RESOURCE_PATHS`: A list of strings, each containing a relative path to a given resource from the extension's root directory.
*   `MATCH_PATTERNS`: A list of strings, each containing a [match pattern](https://developer.chrome.com/docs/extensions/mv3/match_patterns/) that specifies which sites can access this set of resources.
*   `EXTENSION_IDS`: A list of strings, each containing the ID of a given extension.

Previously, the list of web accessible resources applied to all websites and extensions. This created opportunities for fingerprinting or unintentional resource access. The updated API lets extensions more tightly control what other sites or extensions can access extension resources.

See the [web accessible resources](https://developer.chrome.com/docs/extensions/mv3/manifest/web_accessible_resources/) documentation for usage information.

[#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#code-execution) Code execution
--------------------------------------------------------------------------------------------------

Manifest V3 imposes new restrictions that limit an extension's ability to execute unreviewed JavaScript through a combination of platform changes and policy limitations.

Many extensions are unaffected by this change. However, if your Manifest V2 extension executes remotely hosted scripts, injects code strings into pages, or eval strings at runtime, you'll need to update your code execution strategies when migrating to Manifest V3.

### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#remotely-hosted-code) Remotely hosted code restrictions

_Remotely hosted code_ refers to any code that is **not** included in an extension's package as a loadable resource. For example, the following are considered remotely hosted code:

*   JavaScript files pulled from the developer's server.
*   Any library hosted on a [CDN](https://developer.mozilla.org/docs/Glossary/CDN).
*   a code string passed into [`eval()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/eval) at runtime

In Manifest V3, all of your extension's logic must be included in the extension. You can no longer load and execute a remotely hosted file. A number of alternative approaches are available, depending on your use case and the reason for remote hosting. Here are approaches to consider:

Configuration-driven features and logic

In this approach, your extension loads a remote configuration (for example a JSON file) at runtime and caches the configuration locally. The extension then uses this cached configuration to decide which features to enable.

Externalize logic with a remote service

Consider migrating application logic from the extension to a remote web service that your extension can call. (Essentially a form of message passing.) This provides you the ability to keep code private and change the code on demand while avoiding the extra overhead of resubmitting to the Chrome Web Store.

Bundle third-party libraries

If you are using a popular framework like [React](https://reactjs.org/docs/cdn-links.html) or [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/), you can download the minified files, add them to your project and import them locally. For example:

    // Manifest V2// popup.html...<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">...

    // Manifest V3// popup.html...<script src="./react-dom.production.min.js"></script><link href="./bootstrap.min.css" rel="stylesheet">...

To include a library in a service worker, you have two options:

*   For standard service workers, use `importScripts()`.
*   To use static import statements, set the `"background.type"` to `"module"` in the manifest.

### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#executing-arbitrary-strings) Executing arbitrary strings

In Manifest V2, it was possible to execute an arbitrary string of code using [`tabs.executeScript()`](https://developer.chrome.com/docs/extensions/reference/tabs/#method-executeScript) and the `code` property on the options object. Manifest V3 does not allow arbitrary code execution. In order to adapt to this requirement, extension developers can use the [`scripting.executeScript()`](https://developer.chrome.com/docs/extensions/reference/scripting/#method-executeScript) method to either inject a static file or a function.

To use the [Scripting API](https://developer.chrome.com/docs/extensions/reference/scripting/), you need to include the `"scripting"` permission in your manifest file. This API does not [trigger a permission warning](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/).

    {  "manifest_version": 3,  "permissions": ["scripting"],  ...}

#### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#cs-static-file) Injecting a static file

Static file injection with `scripting.executeScript()` is almost identical to how it used to work in the Tabs API. While the old method only took a single file, the new method now takes an array of files.

    // Manifest V2// background.js...chrome.tabs.executeScript({  file: 'content-script.js'});...// content-script.js...alert('File test alert');...

    // Manifest V3// background.js...async function getCurrentTab() {/* ... */}let tab = await getCurrentTab();chrome.scripting.executeScript({  target: {tabId: tab.id},  files: ['content-script.js']});...// content-script.js...alert('File test alert');...

To include an external library, save the file locally and add it to the files array:

    // background.js...chrome.scripting.executeScript({  target: {tabId: tab.id},  files: ['jquery-min.js', 'content-script.js']});...

#### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#cs-func) Injecting a function

If you need more dynamism, the new `func` property allows you to inject a function as a content script and pass variables using the `args` property. Note that the function is not run as if it was located within the content script; rather, its source is sent to the target tab and it is run there.

    // Manifest V2// background.js...let name = 'World!';chrome.tabs.executeScript({  code: `alert('Hello, ${name}!')`});...

    // Manifest V3// background.js...async function getCurrentTab() {/* ... */}let tab = await getCurrentTab();function showAlert(givenName) {  alert(`Hello, ${givenName}`);}let name = 'World';chrome.scripting.executeScript({  target: {tabId: tab.id},  func: showAlert,  args: [name],});...

A functional version of the Manifest V3 snippets in this section can be found in the [chrome-extensions-samples](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/reference/mv3/intro/mv3-migration/content-scripts) repository. See the [Tabs API examples](https://developer.chrome.com/docs/extensions/reference/tabs/#get-the-current-tab) for an implementation of `getCurrentTab()`.

[#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#background-service-workers) Service workers
---------------------------------------------------------------------------------------------------------------

Background pages in Manifest V2 are replaced by [service workers](https://developers.google.com/web/fundamentals/primers/service-workers) in Manifest V3; this is a foundational change that affects most extensions. The following are some notable differences:

MV2 - Background page

MV3 - Service worker

Can use a persistent page.

Terminates when not in use.

Has access to the DOM.

Doesn't have access to the DOM.

Can use `XMLHttpRequest()`.

Must use [`fetch()`](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch) to make requests.

See [Migrating from Background Pages to Service Workers](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/) to explore how to adapt to these and other challenges.

To aid with the migration process, Manifest V2 extensions can use service workers as of Chrome 87.

[#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#modifying-network-requests) Modifying network requests
--------------------------------------------------------------------------------------------------------------------------

Extensions that modify network requests will need to transition from the blocking version of the [Web Request API](https://developer.chrome.com/docs/extensions/reference/webRequest/) to the new [Declarative Net Request API](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/). This new API was designed to work well with the event-based execution model of service workers and to maximize an extension's ability to block network requests without requiring the extension to have permissions.

### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#when-use-blocking-webrequest) Can Manifest V3 extensions use blocking Web Request?

The blocking version of the [Web Request API](https://developer.chrome.com/docs/extensions/reference/webRequest/) exists in Manifest V3, but it can only be used by extensions that are force-installed using Chrome's enterprise policies: [ExtensionSettings](https://cloud.google.com/docs/chrome-enterprise/policies/?policy=ExtensionSettings), [ExtensionInstallForcelist](https://cloud.google.com/docs/chrome-enterprise/policies/?policy=ExtensionInstallForcelist).

Extensions meant to be used by the general public must now use [Declarative Net Request](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/) for network request modification. Here 'used by the general public' means any extension published to the Chrome Web Store except those deployed to a given domain or to trusted testers.

### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#how-use-declarativenetrequest) How do you use declarativeNetRequest?

Instead of reading the request and programmatically altering it, your extension specifies a number of [rules](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/#example). Each rule contains a set of actions to perform when a given set of conditions are matched. For example, you could define a rule that removes "cookie" headers when a request is sent to a specific domain. See the [declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/) reference documentation for a more detailed description of rules

This feature allows content blockers and other request-modifying extensions to implement their use cases without requiring host permissions, and without needing to read the actual requests.

### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#declarativenetrequest-conditional-perms) Conditional permissions and declarativeNetRequest

Most use cases for `declarativeNetRequest` don't require any host permissions at all. However, some do.

Caution

Host permissions are still required if the extension wants to _redirect_ a request or modify its headers. The `declarativeNetRequestWithHostAccess` permission always requires host permissions to the request URL and it's initiator to act on a request.

When extensions require host permissions for these use cases, we recommend a "tiered" permissions strategy. This means implementing the extension's core functionality without using these permissions; putting the more advanced use cases behind an `"optional_host_permissions"` pattern.

This approach allows privacy-conscious users to withhold those permissions and still use much of the extension's functionality. This means that developers can implement many common use cases, such as content-blocking functionality, without requiring any host permissions.

[#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#sunset-deprecated-apis) Sunset for deprecated APIs
----------------------------------------------------------------------------------------------------------------------

There are a number of APIs that have long been deprecated. Manifest V3 finally removes support for the following deprecated methods and properties:

*   chrome.extension.getExtensionTabs()
*   chrome.extension.getURL()
*   chrome.extension.lastError
*   chrome.extension.onRequest
*   chrome.extension.onRequestExternal
*   chrome.extension.sendRequest()
*   chrome.tabs.getAllInWindow()
*   chrome.tabs.getSelected()
*   chrome.tabs.onActiveChanged
*   chrome.tabs.onHighlightChanged
*   chrome.tabs.onSelectionChanged
*   chrome.tabs.sendRequest()
*   chrome.tabs.Tab.selected

As well as the undocumented:

*   chrome.extension.connect()
*   chrome.extension.onConnect
*   chrome.extension.onMessage
*   chrome.extension.sendMessage()

If your extensions use any of these deprecated APIs, you'll need to make the appropriate changes when you migrate to Manifest V3.

Updated on Monday, June 13, 2022 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/mv3-migration/index.md)

