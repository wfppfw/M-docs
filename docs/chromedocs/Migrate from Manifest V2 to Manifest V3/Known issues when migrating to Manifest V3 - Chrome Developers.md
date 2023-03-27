

*   [Capabilities](https://developer.chrome.com/docs/extensions/mv3/known-issues/#capabilities)
    *   [webRequest.onAuthRequired events](https://developer.chrome.com/docs/extensions/mv3/known-issues/#webrequest-onauthrequired)
    *   [Offscreen Documents API](https://developer.chrome.com/docs/extensions/mv3/known-issues/#offscreen-documents-api)
    *   [Userscript managers support](https://developer.chrome.com/docs/extensions/mv3/known-issues/#userscript-managers-support)
    *   [Increased quota for session storage in the Storage API](https://developer.chrome.com/docs/extensions/mv3/known-issues/#increased-session-storage-quota)
*   [Bugs](https://developer.chrome.com/docs/extensions/mv3/known-issues/#bugs)
    *   [Service workers are not started in response to webRequest events](https://developer.chrome.com/docs/extensions/mv3/known-issues/#webrequest-in-sw)
    *   [Sandboxed page CSP can't be customized](https://developer.chrome.com/docs/extensions/mv3/known-issues/#sandboxed-csp)

Known issues when migrating to Manifest V3
==========================================

Published on Friday, September 23, 2022



*   [Capabilities](https://developer.chrome.com/docs/extensions/mv3/known-issues/#capabilities)
    *   [webRequest.onAuthRequired events](https://developer.chrome.com/docs/extensions/mv3/known-issues/#webrequest-onauthrequired)
    *   [Offscreen Documents API](https://developer.chrome.com/docs/extensions/mv3/known-issues/#offscreen-documents-api)
    *   [Userscript managers support](https://developer.chrome.com/docs/extensions/mv3/known-issues/#userscript-managers-support)
    *   [Increased quota for session storage in the Storage API](https://developer.chrome.com/docs/extensions/mv3/known-issues/#increased-session-storage-quota)
*   [Bugs](https://developer.chrome.com/docs/extensions/mv3/known-issues/#bugs)
    *   [Service workers are not started in response to webRequest events](https://developer.chrome.com/docs/extensions/mv3/known-issues/#webrequest-in-sw)
    *   [Sandboxed page CSP can't be customized](https://developer.chrome.com/docs/extensions/mv3/known-issues/#sandboxed-csp)

This page lists major known issues that affect developers as they migrate to Manifest V3. Known issues are divided into two primary groups:

*   **Capabilities** – Features that we plan to add to Manifest V3 to facilitate migration efforts.
*   **Bugs** – Significant issues with Manifest V3 platform features that are not working as expected.

These lists are a curated subset of items from the [Chromium issue tracker](https://bugs.chromium.org/p/chromium/issues/list). For a complete list of issues, visit the issue tracker and search for items tagged with the [Platform>Extensions](https://bugs.chromium.org/p/chromium/issues/list?q=component%3APlatform%3EExtensions) component.

When a capability is added to the platform or a bug is addressed, it will be removed from this page at roughly the same time the change lands in Chrome's Stable channel. See [What's New in Chrome Extensions](https://developer.chrome.com/docs/extensions/whatsnew/) for a list of recent updates.

[#](https://developer.chrome.com/docs/extensions/mv3/known-issues/#capabilities) Capabilities
---------------------------------------------------------------------------------------------

This section lists major features that will be added to the Manifest V3 platform in order to aid developers migrating from Manifest V2. Timelines included here are best effort estimates, not hard commitments.

### [#](https://developer.chrome.com/docs/extensions/mv3/known-issues/#webrequest-onauthrequired) webRequest.onAuthRequired events

**Summary:** User-installed Manifest V3 extensions cannot currently intercept `webRequest.onAuthRequired` events, since the `webRequestBlocking` permission is restricted to policy-installed extensions. Chrome provides extensions with a way to supply credentials for authentication requests in Manifest V3.

**Estimated timeline:** Scheduled for Chrome 108.

### [#](https://developer.chrome.com/docs/extensions/mv3/known-issues/#offscreen-documents-api) Offscreen Documents API

**Summary:** Offscreen documents are a new capability that will allow Manifest V3 extensions to create a headless page (no user visible window) in order to call DOM APIs that aren't supported in extension service workers. Extensions will be able to use offscreen documents to interact with the clipboard, play audio, parse HTML, and XML documents, and so on.

**Estimated timeline:** Scheduled for Chrome 109.

### [#](https://developer.chrome.com/docs/extensions/mv3/known-issues/#userscript-managers-support) Userscript managers support

**Summary:** Userscript managers cannot inject scripts that are not included in the extension's package due to platform and policy changes that prevent arbitrary code execution. To address this, the Manifest V3 platform will be expanded to specifically support user-authored scripts and styles.

**Estimated timeline:** Targeting Canary support around December, 2022.

### [#](https://developer.chrome.com/docs/extensions/mv3/known-issues/#increased-session-storage-quota) Increased quota for session storage in the Storage API

**Summary:** When it was introduced, the `session` storage area had an intentionally conservative maximum quota of 1 MB. We are planning to increase this limit, but have not yet settled on a new value.

**Estimated timeline**: Targeting Canary support around November, 2022.

[#](https://developer.chrome.com/docs/extensions/mv3/known-issues/#bugs) Bugs
-----------------------------------------------------------------------------

### [#](https://developer.chrome.com/docs/extensions/mv3/known-issues/#webrequest-in-sw) Service workers are not started in response to webRequest events

**Summary:** Manifest V3 extensions will only receive [Web Request API](https://developer.chrome.com/docs/extensions/reference/webRequest/) events for a short time immediately after installation. After the extension service worker is stopped for the first time, events on this API are no longer dispatched as intended. This prevents Manifest V3 extensions from observing network requests.

**Shipped**: Chrome 107.

### [#](https://developer.chrome.com/docs/extensions/mv3/known-issues/#sandboxed-csp) Sandboxed page CSP can't be customized

**Summary:** Declaring a custom sandboxed page content security policy in the extension's `manifest.json` does not override the default content security policy. This prevents extensions from integrating with services that require their scripts or iframes to be remotely loaded.

**Estimated timeline:** Targeting Canary support before January, 2023.

**Tracking issue:** [1247690](https://bugs.chromium.org/p/chromium/issues/detail?id=1247690)

Updated on Friday, September 23, 2022 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/known-issues/index.md)

