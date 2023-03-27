# What's new in Chrome extensions

<small>Published on Thursday, February 25, 2021 • Updated on Wednesday, September 28, 2022</small>

Check this page often to learn about changes to the Chrome extensions platform, its documentation, and related policy or other changes.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#blog-mv3-transition-details) Blog post: More details on the transition to Manifest V3

September 28, 2022

We have [clarified the Manifest V2 deprecation timeline](https://developer.chrome.com/blog/more-mv2-transition/). The [Manifest V2 support timeline](https://developer.chrome.com/docs/extensions/mv3/mv2-sunset/) has also been updated to reflect this information.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#known-issues) Docs update: Known issues when migrating to Manifest V3

September 28, 2022

We've put together a list of [major features currently in development and open bugs](https://developer.chrome.com/docs/extensions/mv3/known-issues/). Our goal with this page is to help developers better understand the current state of the platform and what features they can target as they prepare for the future.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#cws-large-promo-tile) Chrome Web Store: "large promo tile" image upload removed

August 17, 2022

Chrome Web Store has removed the "large promo tile" upload UI from the item Store Listing tab in the developer dashboard. This change does not affect the end user experience as these images were not used in the consumer UI. See this chromium-extensions post for additional details.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m106-file-pages) Chrome 106: Allow pages on file:// urls to access web accessible resources

August 15, 2022

Opaque origins such as sandboxed iframes and dynamic import should also be able to access web accessible resources, according to [crbug.com/1219825#c11](https://crbug.com/1219825#c11).

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m106-async-arg-fix) Chrome 106: Fixed bug allowing incorrect final arguments on some async API functions

August 8, 2022

Previously, Manifest V3 calling async APIs could provide an invalid final argument and Chrome would not error. With this fix Chrome will now correctly error and report that there was no matching signature. Developers are encouraged to check their extensions on Canary for any errors in case they accidentally using incorrect signature for an API call that will be broken by this bug fix.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#cws-analytics-revamp) Blog post: Chrome Web Store analytics revamp

July 28, 2022

Chrome Web Store has a revamped item analytics experience for the Chrome Web Store Developer Dashboard. The new dashboard is easier to understand at a glance and consolidates the most useful information up front. [Read the blog post](https://developer.chrome.com/blog/cws-analytics-revamp/) for more information.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m105-identity-promise) Chrome 105: promises for the Identity API

July 15, 2022

Functions on the [Identity API](https://developer.chrome.com/docs/extensions/reference/identity/#method-getAuthToken) now support promise based calls. This comes with a slight change to the surface for [`identity.getAuthToken()`](https://developer.chrome.com/docs/extensions/reference/identity/#method-getAuthToken), where the asynchronous return set to a promise based call will have "token" and "grantedScopes" as parameters on a single object (as opposed to the callback version receiving them as separate arguments to the callback).

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m104-favicon-api) Chrome 104: New favicons API for Manifest V3

June 08, 2022

Manifest V3 extensions can now access favicons using a new URL pattern: `chrome-extension://<id>/_favicon/`, where is the ID of your extension. This replaces the Manifest V2 platform's `chrome://favicons` API. See the Favicon API docs for more information.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#cws-trader-disclosure-doc) Docs update: Developer trader/non-trader disclosure

May 26, 2022

Added the [trader/non-trader developer identification](https://developer.chrome.com/docs/webstore/trader-disclosure/) that informs developers to accurately self-declare their trader/non-trader status.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m103-wasm-csp) Chrome 103: Wasm in Manifest V3 requires wasm-unsafe-eval

May 12, 2022

Chrome no longer grants extensions `script-src: wasm-unsafe-eval` by default. Extensions that use WebAssembly must now explicitly add this directive and value to `extension_pages` in their `content_security_policy` declarations.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m103-keyboard-shortcut) Chrome 103: Changing MV3 shortcuts take effect immediately

April 28, 2022

When changing a Manifest V3 extension's keyboard shortcut on `chrome://extensions/shortcuts`, updates are now applied immediately. Previously the extension would have to be reloaded before the change would take effect.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m102-registercontentscripts-main-world) Chrome 102: Dynamic content scripts in main world

April 14, 2022

Dynamically registered content scripts can now specify the [world](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#isolated_world) that assets will be injected into. See [`scripting.registerContentScripts()`](https://developer.chrome.com/docs/extensions/reference/scripting/#method-registerContentScripts) for details.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m102-optional-host-permissions) Chrome 102: New manifest field "optional_host_permissions"

April 4, 2022

Manifest V3 extensions can now specify the `optional_host_permissions` key in manifest.json. This allows Manifest V3 extensions to declare optional match patterns for hosts just as Manifest V2 extensions could using the `optional_permissions` key.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m102-injectimmediately) Chrome 102: injectImmediately property in scripting.executeScript()

April 4, 2022

`chrome.scripting.executeScript()` now accepts an optional `injectImmediately` property on it's `injection` argument. If present and set to true, the script will inject into the target as soon as possible, rather than waiting for `document_idle`. Note that this is not a guarantee the script will inject before the page is loaded since the page continues to load while the API call is being made.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m102-omnibox) Chrome 102: Omnibox API support in Manifest V3

March 31, 2022

The [Omnibox API](https://developer.chrome.com/docs/extensions/reference/omnibox/) can now be used in service worker-based extensions. Previously, some of this API's methods would throw on invocation due to internal dependencies on DOM capabilities.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m102-wasm) Chrome 102: wasm-unsafe-eval allowed in Manifest V3 CSP

March 22, 2022

Manifest V3 extensions can now include `wasm-unsafe-eval` in their `content_security_policy` declarations. This change allows Manifest V3 extensions to use WebAssembly.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#cws-discovery-doc) Docs update: Chrome Web Store item discovery

March 21, 2022

[Discovery on Chrome Web Store](https://developer.chrome.com/docs/webstore/discovery/) gives an overview of how users find items on the Chrome Web Store and how our editors select items to feature.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m101-dnr-conditions) Chrome 101: Improved declarativeNetRequest domain conditions

March 9, 2022

[declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/) rule conditions have been updated to allow extensions to better target requests based on the request's "request" and "initiator" domains. The relevant condition properties are `initiatorDomains`, `excludedInitiatorDomains`, `requestDomains`, and `excludedRequestDomains`. See also this [chromium-extensions thread](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/4971ZS9cI7E).

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m100-executescript-bugfix) Chrome 100: Resolved issue with scripting.executeScript() on newly created tabs

Fixed a longstanding issue where calling `scripting.executeScript()` on a newly created tab or window could fail.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m100-native-msg-lifetime) Chrome 100: native messaging port keeps service worker alive

February 9, 2022

Warning

This change did not fully address the underlying issue. We will share another update when we are confident that native messaging ports are behaving as intended.

Connecting to a native messaging host using `chrome.runtime.connectNative()` in an extension's service worker should keep the service worker alive as long as the port is open.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m100-omnibox-setdefault) Chrome 100: omnibox.setDefaultSuggestion() supports promises and callbacks

February 8, 2022

The [`omnibox.setDefaultSuggestion()`](https://developer.chrome.com/docs/extensions/reference/omnibox/#method-setDefaultSuggestion) method now returns a promise or accepts a callback to allow developers to determine when the suggestion has been properly set.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m100-i18n-getmessage) Chrome 100: i18n.getMessage() support in extension service workers

January 27, 2022

The [`chrome.i18n.getMessage()`](https://developer.chrome.com/docs/extensions/reference/i18n/#method-getMessage) API is now supported in extension service worker contexts.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#canary-match-origin-as-fallback) Chrome 99: match_origin_as_fallback in Canary

January 5, 2022

Content scripts can now specify the `match_origin_as_fallback` key to inject into frames that are related to a matching frame, including frames with `about:`, `data:`, `blob:`, and `filesystem:` URLs. See the [content scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#injecting-in-related-frames) documentation for details.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#canary-file-access) Chrome 99: extension service worker support for file: schemes in Canary

December 30, 2021

Service worker-based Manifest V2 and Manifest V3 extensions can now use the Fetch API to request `file:`\-scheme URLs. Access to `file:`\-scheme URLs still requires that the user enable 'Allow access to File URLs' for the extension in the `chrome://extensions` page.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#canary-message-promise-support) Chrome 99: promise support for messaging APIs in Canary

December 28, 2021

Promise support has been added to [`tabs.sendMessage`](https://developer.chrome.com/docs/extensions/reference/tabs/#method-sendMessage), [`runtime.sendMessage`](https://developer.chrome.com/docs/extensions/reference/runtime/#method-sendMessage), and [`runtime.sendNativeMessage`](https://developer.chrome.com/docs/extensions/reference/runtime/#method-sendNativeMessage) for extensions built for Manifest V3.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#cws-review-doc) Docs update: Chrome Web Store review documentation

December 10, 2021

Added [a new reference page](https://developer.chrome.com/docs/webstore/review-process/) that provides an overview of the Chrome Web Store review process and explains how [developer program policy](https://developer.chrome.com/docs/webstore/program-policies/) enforcement is handled.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m98-execute-multiple-files) Chrome 98: scripting.executeScript() and scripting.insertCSS() accept multiple files

November 9, 2021

The Scripting API's [`executeScript()`](https://developer.chrome.com/docs/extensions/reference/scripting/#method-executeScript) and [`insertCSS()`](https://developer.chrome.com/docs/extensions/reference/scripting/#method-insertCSS) methods now accept multiple files. Previously these methods required an array with a single file entry.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#2021-10-27-reivew-troubleshooting) Docs update: review violation troubleshooting updates

October 27, 2021

The [Troubleshooting Chrome Web Store violations](https://developer.chrome.com/docs/webstore/troubleshooting/) page has been updated to provide developers with more detailed guidance for common reasons for rejection.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m96-promise-support) Chrome 96: expanded promise support to 27 more APIs

October 1, 2021

This release contains significantly more promise updates than any previous release. Updates include both general and ChromeOS-specific extensions APIs. Expand the following sections for details.

Extensions APIs

A number of APIs now support promises in Manifest V3.

- [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/browsingData/)
- [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/commands/)
- [`chrome.contentSettings`](https://developer.chrome.com/docs/extensions/reference/contentSettings/)
- [`chrome.debugger`](https://developer.chrome.com/docs/extensions/reference/debugger/)
- [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/downloads/)
- [`chrome.enterprise.hardwarePlatform`](https://developer.chrome.com/docs/extensions/reference/enterprise_hardwarePlatform/)
- [`chrome.fontSettings`](https://developer.chrome.com/docs/extensions/reference/fontSettings/)
- [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/history/)
- [`chrome.instanceID`](https://developer.chrome.com/docs/extensions/reference/instanceID/)
- [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/permissions/)
- [`chrome.processes`](https://developer.chrome.com/docs/extensions/reference/processes/)
- [`chrome.search`](https://developer.chrome.com/docs/extensions/reference/search/)
- [`chrome.sessions`](https://developer.chrome.com/docs/extensions/reference/sessions/)
- [`chrome.signedInDevices`](https://developer.chrome.com/docs/extensions/reference/signedInDevices/)
- [`chrome.topSites`](https://developer.chrome.com/docs/extensions/reference/topSites/)

Also, APIs that use the [`ChromeSetting`](https://developer.chrome.com/docs/extensions/reference/types/#type-ChromeSetting) prototype now also support promises. The following APIs are affected by this change.

- [`chrome.privacy`](https://developer.chrome.com/docs/extensions/reference/privacy/)
- [`chrome.accessibilityFeatures`](https://developer.chrome.com/docs/extensions/reference/accessibilityFeatures/)
- [`chrome.proxy`](https://developer.chrome.com/docs/extensions/reference/proxy/)

ChromeOS APIs

- [`chrome.certificateProvider`](https://developer.chrome.com/docs/extensions/reference/certificateProvider/)
- [`chrome.documentScan`](https://developer.chrome.com/docs/extensions/reference/documentScan/)
- [`chrome.enterprise.deviceAttributes`](https://developer.chrome.com/docs/extensions/reference/enterprise_deviceAttributes/)
- [`chrome.enterprise.networkingAttributes`](https://developer.chrome.com/docs/extensions/reference/enterprise_networkingAttributes/)
- [`chrome.fileBrowserHandler`](https://developer.chrome.com/docs/extensions/reference/fileBrowserHandler/)
- [`chrome.fileSystemProvider`](https://developer.chrome.com/docs/extensions/reference/fileSystemProvider/)
- [`chrome.loginState`](https://developer.chrome.com/docs/extensions/reference/loginState/)
- [`chrome.printingMetrics`](https://developer.chrome.com/docs/extensions/reference/printingMetrics/)
- [`chrome.wallpaper`](https://developer.chrome.com/docs/extensions/reference/wallpaper/)

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m96-dynamic-content-scripts) Chrome 96: dynamic content scripts

September 24, 2021

The [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/scripting/) API now supports [registering](https://developer.chrome.com/docs/extensions/reference/scripting/#method-registerContentScripts), [updating](https://developer.chrome.com/docs/extensions/reference/scripting/#method-updateContentScripts), [unregistering](https://developer.chrome.com/docs/extensions/reference/scripting/#method-unregisterContentScripts), and [getting a list](https://developer.chrome.com/docs/extensions/reference/scripting/#method-getRegisteredContentScripts) of content scripts at runtime. Previously, content scripts could only be statically declared in an extension's manifest.json or programmatically injected at runtime with [`chrome.scripting.executeScript()`](https://developer.chrome.com/docs/extensions/reference/scripting/#method-executeScript).

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#manifest-v2-support-timeline) Docs update: Manifest V2 support timeline

September 23, 2021

The Manifest V2 to V3 transition timeline was [announced in this blog post](https://developer.chrome.com/blog/mv2-transition/) and a more detailed [timeline page](https://developer.chrome.com/docs/extensions/mv3/mv2-sunset/) was published.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#chrome-96-declarativenetrequestwithhostaccess-permission) Chrome 96: declarativeNetRequestWithHostAccess permission

September 20, 2021

The new `declarativeNetRequestWithHostAccess` permission allows extensions to use the [`chrome.declarativeNetRequest`](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/) API on sites the extension has host permissions for. This also enables existing Manifest V2 extensions that use `webRequest`, `webRequestBlocking`, and site-specific host permission to migrate to the [`chrome.declarativeNetRequest`](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/) API without requiring the user to approve new permissions.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m95-page-script-injection) Chrome 95: inject scripts directly into pages

September 2, 2021

The [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/scripting/) API's [`executeScript()`](https://developer.chrome.com/docs/extensions/reference/scripting/#method-executeScript) method can now inject scripts directly into a page's main world. Previously, extensions could only inject directly into the extension's isolated world. For more information on isolated worlds, see the documentation on [content scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#isolated_world).

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m95-storage-promise-support) Chrome 95: promise support for Storage API

August 30, 2021

Methods on the Manifest V3 version of the [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/storage/) API now return promises.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#two-step-verification-enforcement) Policy update: two step verification enforcement

August 4, 2021

The [policy update blog post](https://developer.chrome.com/blog/policy-update-2sv/) published on June 29, 2021 has been updated to correct the two step verification deployment timeline.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#chrome-94-declarative-net-request-static-ruleset-changes) Chrome 94: declarative net request static ruleset changes

July 28, 2021

The [`chrome.declarativeNetRequest`](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/) now supports specifying up to 50 static rulesets ([MAX_NUMBER_OF_STATIC_RULESETS](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/#property-MAX_NUMBER_OF_STATIC_RULESETS)) and enabling up to 10 rulesets ([MAX_NUMBER_OF_ENABLED_STATIC_RULESETS](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/#property-MAX_NUMBER_OF_ENABLED_STATIC_RULESETS)) at a time.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#chrome-93-cross-origin-isolation-support) Chrome 93: cross origin isolation support

July 12, 2021

Both [Manifest V2](https://developer.chrome.com/docs/extensions/mv2/cross-origin-isolation/) and [Manifest V3](https://developer.chrome.com/docs/extensions/mv3/cross-origin-isolation/) extensions can now opt into [cross origin isolation](https://web.dev/cross-origin-isolation-guide/). This feature limits which cross-origin resources can load an extension's pages and enables the use of low level web platform features like [`SharedArrayBuffer`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer). Opt in will be required starting in Chrome 95.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#developer-program-policies-updated) Policy update: developer program policies updated

June 29, 2021

The Chrome Web Store [Developer Program Policies](https://developer.chrome.com/docs/webstore/program-policies/) have been updated with clarifications to the deceptive installation tactics, spam, and repetitive content policies. This update also includes a new two step verification requirement to publish on the Chrome Web Store. [Read the blog post](https://developer.chrome.com/blog/policy-update-2sv/) for more information.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#new-blog-post-extension-actions-in-manifest-v3) Blog post: extension actions in Manifest V3

June 23, 2021

Chrome extensions had `chrome.browserAction` and `chrome.pageActions` APIs for years, but Manifest V3 replaced both with a generic [`chrome.actions`](https://developer.chrome.com/docs/extensions/reference/action/) API. This post explores the history of these APIs and what has changed in Manifest V3. [Read the post](https://developer.chrome.com/blog/mv3-actions/).

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#new-blog-post-introducing-chromescripting) Blog post: introducing chrome.scripting

June 8, 2021

The [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/scripting/) API is a new Manifest V3 API focused on, well, scripting. In this post we dig into the motivations for this change and take a closer look at it's new capabilities. [Read the post](https://developer.chrome.com/blog/crx-scripting-api/).

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#es-modules-for-service-workers) Chrome 92: module service worker support

April 13, 2021

Chrome now supports JavaScript modules in service workers. To specify a module a module in your manifest:

    "background": {  "service_worker": "script.js",  "type": "module"}

This loads the worker script as an ES module, which lets you use the `import` keyword in the worker's script to import other modules.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#chromeactiongetusersettings-available) Chrome 91: chrome.action.getUserSettings()

April 2, 2021

The new [`chrome.action.getUserSettings()`](https://developer.chrome.com/docs/extensions/reference/action/#method-getUserSettings) method allows extensions to determine if the user has pinned the extension to the main toolbar.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#chromescriptingremovecss-available) Chrome 90: chrome.scripting.removeCSS()

February 10, 2021

The new [`chrome.scripting.removeCSS()`](https://developer.chrome.com/docs/extensions/reference/scripting/#method-removeCSS) method allows extensions to remove CSS that was previously inserted via [`chrome.scripting.insertCSS()`](https://developer.chrome.com/docs/extensions/reference/scripting/#method-insertCSS). It replaces [`chrome.tabs.removeCSS()`](https://developer.chrome.com/docs/extensions/reference/tabs/#method-removeCSS).

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#m96-execute-script) Chrome 90: returning promises from scripting.executeScript()

February 24, 2021

[`chrome.scripting.executeScript()`](https://developer.chrome.com/docs/extensions/reference/scripting/#method-executeScript) now supports returning promises. If the resulting value of the script execution is a promise, Chrome will wait for the promise to settle and return its resulting value.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#) Chrome 90: chrome.scripting.executeScript() results include frameId

January 27, 2021

Results returned from [`chrome.scripting.executeScript()`](https://developer.chrome.com/docs/extensions/reference/scripting/#method-executeScript) now include the [frameId](https://developer.chrome.com/docs/extensions/reference/webNavigation/#a-note-about-frame-ids). The `frameId` property indicates the frame that the result is from, letting extensions easily associate results with the individual frames when injecting in multiple frames.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#new-api-for-tab-groups-mv3-only) Chrome 89: new API for managing tab groups

January 14, 2021

The new [`chrome.tabGroups`](https://developer.chrome.com/docs/extensions/reference/tabGroups/) API and new capabilities in [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/tabs/) let extensions read and manipulate tab groups. Requires Manifest V3.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#customizable-permissions-for-mv3-web-accessible-resources) Chrome 89: customizable permissions for web accessible resources

December 23, 2020

[Web accessible resources](https://developer.chrome.com/docs/extensions/mv3/manifest/web_accessible_resources/) definitions in Manifest V3 have changed to let extensions restrict resource access based on the requester's origin or extension ID.

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#extension-manifest-converter) Blog post: Extension Manifest Converter

April 28, 2021

The Chrome Extensions team has open sourced "Extension Manifest Converter", a Python tool that automates some of the mechanical aspects of converting extensions to Manifest V3. See the [announcement blog post](https://developer.chrome.com/blog/extension-manifest-converter/) and [get it from GitHub](https://github.com/GoogleChromeLabs/extension-manifest-converter).

### [#](https://developer.chrome.com/docs/extensions/whatsnew/#manifest-v3-general-availability) Chrome 88: Manifest V3 general availability

January 19, 2021

Manifest V3 is a major update to the extensions platform; see [Overview of Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/) for a summary of new and changed features. Extensions may continue to use Manifest V2 for now, but this will be phased out in the near future. We strongly recommend that you use Manifest V3 for any new extensions, and begin migrating existing extensions to Manifest V3 as soon as possible.

Updated on Wednesday, September 28, 2022 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/whatsnew/index.md)
