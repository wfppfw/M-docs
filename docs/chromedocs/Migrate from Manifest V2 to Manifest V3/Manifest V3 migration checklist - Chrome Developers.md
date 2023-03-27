

*   [API checklist](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api_checklist)
    *   [Do you have host permissions in your manifest?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-host-perms)
    *   [Are you using background pages?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-background-pages)
    *   [Are you using the browser\_action or page\_action property in manifest.json?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-browser-action-manifest)
    *   [Are you using the chrome.browserAction or chrome.pageAction JavaScript API?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-browser-action-js)
    *   [Are you currently using the blocking version of chrome.webRequest?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-blocking)
    *   [Are you using these scripting/CSS methods in the Tabs API?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-tabs)
    *   [Are you executing remote code or arbitrary strings?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-remote-code)
    *   [Are you executing functions that expect an Manifest V2 background context?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-background-context)
*   [Security Checklist](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#security_checklist)
    *   [Are you making CORS requests in content scripts?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#security-cors)
    *   [Are you using a custom content\_security\_policy in manifest.json?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#security-csp)

Manifest V3 migration checklist
===============================

Published on Saturday, November 2, 2019 • Updated on Wednesday, November 11, 2020



*   [API checklist](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api_checklist)
    *   [Do you have host permissions in your manifest?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-host-perms)
    *   [Are you using background pages?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-background-pages)
    *   [Are you using the browser\_action or page\_action property in manifest.json?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-browser-action-manifest)
    *   [Are you using the chrome.browserAction or chrome.pageAction JavaScript API?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-browser-action-js)
    *   [Are you currently using the blocking version of chrome.webRequest?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-blocking)
    *   [Are you using these scripting/CSS methods in the Tabs API?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-tabs)
    *   [Are you executing remote code or arbitrary strings?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-remote-code)
    *   [Are you executing functions that expect an Manifest V2 background context?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-background-context)
*   [Security Checklist](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#security_checklist)
    *   [Are you making CORS requests in content scripts?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#security-cors)
    *   [Are you using a custom content\_security\_policy in manifest.json?](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#security-csp)

This page provides a quick reference to help you identify changes you need to make to a Manifest V2 extension so that it works under Manifest V3. For descriptions of these changes see the [Manifest V3 migration guide](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/).

[#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api_checklist) API checklist
----------------------------------------------------------------------------------------------------------

This section lists changes you may need to make based on changes to the API surface.

### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-host-perms) Do you have host permissions in your manifest?

_Host permissions in Manifest V3 [are a separate element](https://developer.chrome.com/docs/extensions/mv3/mv3-migration#host-permissions); you don't specify them in `permissions` or `optional_permissions`._

*   Move host permissions into the `host_permissions` field in manifest.json.

### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-background-pages) Are you using background pages?

_Background pages are [replaced by service workers](https://developer.chrome.com/docs/extensions/mv3/mv3-migration#background-service-workers) in Manifest V3._

*   Replace `background.page` or `background.scripts` with `background.service_worker` in manifest.json. Note that the `service_worker` field takes a string, not an array of strings.
*   Remove `background.persistent` from manifest.json.
*   Update background scripts to adapt to the service worker execution context.

### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-browser-action-manifest) Are you using the `browser_action` or `page_action` property in manifest.json?

_These properties are [unified into a single property](https://developer.chrome.com/docs/extensions/mv3/mv3-migration#action-api-unification) in Manifest V3._

*   Replace these properties with `action`.

### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-browser-action-js) Are you using the `chrome.browserAction` or `chrome.pageAction` JavaScript API?

_These two equivalent APIs are [unified into a single API](https://developer.chrome.com/docs/extensions/mv3/mv3-migration#action-api-unification) in Manifest V3._

*   Migrate to the [Action API](https://developer.chrome.com/docs/extensions/reference/action/).

### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-blocking) Are you currently using the blocking version of `chrome.webRequest`?

_This API is [replaced by `declarativeNetRequest`](https://developer.chrome.com/docs/extensions/mv3/mv3-migration#modifying-network-requests) in Manifest V3._

This only applies to user-installed extensions. Force installed extensions (extensions distributed using [ExtensionInstallForcelist](https://www.chromium.org/administrators/policy-list-3#ExtensionInstallForcelist) and typically used in an enterprise setting) can still use the blocking version of `chrome.webRequest`.

*   Migrate request modification logic to `chrome.declarativeNetRequest` rules.
*   Replace the `webRequestBlocking` permission with `declarativeNetRequest`.
*   Remove the `webRequest` permission if you no longer need to observe network requests.
*   Remove unnecessary host permissions; blocking a request or upgrading a request's protocol doesn't require host permissions with `declarativeNetRequest`.

### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-tabs) Are you using these scripting/CSS methods in the Tabs API?

_In Manifest V3, several methods move from the [Tabs API](https://developer.chrome.com/docs/extensions/reference/tabs/) to the [Scripting API](https://developer.chrome.com/docs/extensions/reference/scripting/)._

*   Change any of the following Manifest V2 calls to use the correct Manifest V3 API:

Manifest V2

Manifest V3

tabs.executeScript()

scripting.executeScript()

tabs.insertCSS()

scripting.insertCSS()

tabs.removeCSS()

scripting.removeCSS()

### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-remote-code) Are you executing remote code or arbitrary strings?

_You can no longer [execute external logic](https://developer.chrome.com/docs/extensions/mv3/mv3-migration#remotely-hosted-code) using `chrome.scripting.executeScript({code: '...'})`, `eval()`, and `new Function()`._

*   Move all external code (JS, Wasm, CSS) into your extension bundle.
*   Update script and style references to load resources from the extension bundle.
*   Use [`chrome.runtime.getURL()`](https://developer.chrome.com/docs/extensions/reference/runtime/#method-getURL) to build resource URLs at runtime.

### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#api-background-context) Are you executing functions that expect an Manifest V2 background context?

_The [adoption of service workers](https://developer.chrome.com/docs/extensions/mv3/mv3-migration#background-service-workers) in Manifest V3 isn't compatible with methods like `chrome.runtime.getBackgroundPage()`, `chrome.extension.getBackgroundPage()`, `chrome.extension.getExtensionTabs()`, and `chrome.extension.getViews()`._

*   Migrate to a design that [passes messages](https://developer.chrome.com/docs/extensions/mv3/messaging/) between other contexts and the background service worker.

[#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#security_checklist) Security Checklist
--------------------------------------------------------------------------------------------------------------------

There are some changes you may need to make based on changes in security policy. This section lists these changes.

### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#security-cors) Are you making CORS requests in content scripts?

*   Move these requests to the background service worker.

### [#](https://developer.chrome.com/docs/extensions/mv3/mv3-migration-checklist/#security-csp) Are you using a custom `content_security_policy` in manifest.json?

*   Replace `content_security_policy` with `content_security_policy.extension_pages` or `content_security_policy.sandbox` as appropriate.
*   Remove references to external domains in `script-src`, `worker-src`, `object-src`, and `style-src` directives if present.

Updated on Wednesday, November 11, 2020 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/mv3-migration-checklist/index.md)

