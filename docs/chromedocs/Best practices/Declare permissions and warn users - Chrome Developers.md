

*   [Organize permissions](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#declare_manifest)
*   [Identify required permissions](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#required_permissions)
*   [Trigger optional permissions with events](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#optional_events)
*   [Substitute the activeTab permission](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#activeTab_permission)
*   [Allowing access](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#allow_access)
*   [Understanding permissions](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#understanding-permissions)
*   [Viewing warnings](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#view_warnings)
    *   [Permissions with warnings](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#permissions_with_warnings)
*   [Update permissions](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#update_permissions)

Declare permissions and warn users
==================================

Published on Tuesday, September 18, 2012 • Updated on Wednesday, October 10, 2018



*   [Organize permissions](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#declare_manifest)
*   [Identify required permissions](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#required_permissions)
*   [Trigger optional permissions with events](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#optional_events)
*   [Substitute the activeTab permission](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#activeTab_permission)
*   [Allowing access](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#allow_access)
*   [Understanding permissions](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#understanding-permissions)
*   [Viewing warnings](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#view_warnings)
    *   [Permissions with warnings](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#permissions_with_warnings)
*   [Update permissions](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#update_permissions)

An extension's ability to access websites and most Chrome APIs is determined by its declared [permissions](https://developer.chrome.com/docs/extensions/mv3/declare_permissions/). Permissions should be restricted to only what is needed for its functionality. Limiting permissions establishes an extension's capabilities and reduces possible incursion to data if the extension is compromised by an attacker. Protect extensions and their users by implementing explicit, minimal and optional permissions.

[#](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#declare_manifest) Organize permissions
----------------------------------------------------------------------------------------------------------------

Permissions are known strings that refer to a Chrome API or [match patterns](https://developer.chrome.com/docs/extensions/mv3/match_patterns/) that grant access to one or more hosts. They are listed in the manifest and specified as required permissions or [optional permissions](https://developer.chrome.com/docs/extensions/reference/permissions#step-2-declare-optional-permissions-in-the-manifest).

    {  "name": "Permissions Extension",  ...  // required permissions  "permissions": [    "activeTab",    "contextMenus",    "storage"  ],  // optional permissions  "optional_permissions": [    "topSites",  ],  "host_permissions": [    "https://www.developer.chrome.com/*"  ],  ...  "manifest_version": 3}

Limit required permissions to only what is needed for the extension's core functionality. An extension should not request more permissions than it currently needs; do not future proof by requesting permissions that may be needed with updates.

Permissions needed for optional features should be registered as [optional permissions](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#optional_events). This allows users to decide how much access they are willing to provide an extension and which features are desired.

[#](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#required_permissions) Identify required permissions
-----------------------------------------------------------------------------------------------------------------------------

A simple extension may need to request multiple permissions, and many permissions display [warnings](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#permissions_with_warnings) on installation. Users are more likely to trust an extension with limited warnings or when permissions are explained to them.

![Extension permission warnings on installation](./Declare permissions and warn users - Chrome Developers_files/VVyazEJTquUP7aa6OZn0.png)

Identify the core functionality of an extension and what permissions are required for it. Consider making features optional if they require permissions with warnings.

[#](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#optional_events) Trigger optional permissions with events
-----------------------------------------------------------------------------------------------------------------------------------

The [optional permissions sample extension's](https://developer.chrome.com/docs/extensions/mv3/samples#search:optional) core functionality is overriding the new tab page. One feature is displaying the user's goal of the day. This feature only requires the [storage](https://developer.chrome.com/docs/extensions/reference/storage/) permission, which does not include a warning.

![Extension button that enables additional features](./Declare permissions and warn users - Chrome Developers_files/wtbjayBDYDyKZe2x580P.png)

The extension has an additional feature; displaying the user's top sites. This feature requires the [topSites](https://developer.chrome.com/docs/extensions/reference/topSites/) permission, which has a warning.

![Extension warning for topSites API](./Declare permissions and warn users - Chrome Developers_files/5edHzqeUOJ8V6XHkjNBM.png)

Developing features that rely on permissions with warnings as optional and introducing those features organically gives users a risk free introduction to the extension. Additionally, this allows users to further customize their experience with an extension and creates opportunity to explain warnings.

[#](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#activeTab_permission) Substitute the activeTab permission
-----------------------------------------------------------------------------------------------------------------------------------

The `activeTab` permission grants temporary access to the site the user is on and allows the extension to use the [`"tabs"`](https://developer.chrome.com/docs/extensions/reference/tabs/) permission on the current tab. It replaces the need for `"<all_urls>"` in many cases and displays no warning on installation.

Without activeTab:

![Permissions UI without activeTab](./Declare permissions and warn users - Chrome Developers_files/jb7SZPwm4zPoOT7BVMw3.png)

With activeTab:

![Permissions UI with activeTab](./Declare permissions and warn users - Chrome Developers_files/2QKcJJSz35suMsGSWXM4.png)

The `activeTab` permission grants an extension temporary access to the currently active tab when the [user invokes](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#p_activeTab_gestures) the extension. If the extension is compromised, the attacker would need to wait for the user to invoke the extension before obtaining access, and that access would only last until the tab is navigated or closed.

While the `activeTab` permission is enabled for a tab, an extension can:

*   Call [`scripting.insertCSS`](https://developer.chrome.com/docs/extensions/reference/scripting#method-insertCSS) on that tab.
*   Get the URL, title, and favicon for that tab via an API that returns a [`tabs.Tab`](https://developer.chrome.com/docs/extensions/reference/tabs#type-Tab) object.
*   Intercept network requests in the tab to the tab's main frame origin using the [webRequest](https://developer.chrome.com/docs/extensions/reference/webRequest/) API. The extension temporarily gets host permissions for the tab's main frame origin.

The following user gestures enable `activeTab`:

*   Executing a [browser action](https://developer.chrome.com/docs/extensions/reference/browserAction/)
*   Executing a [page action](https://developer.chrome.com/docs/extensions/reference/pageAction/)
*   Executing a [context menu item](https://developer.chrome.com/docs/extensions/reference/contextMenus/)
*   Executing a keyboard shortcut from the [commands API](https://developer.chrome.com/docs/extensions/reference/commands/)
*   Accepting a suggestion from the [omnibox API](https://developer.chrome.com/docs/extensions/reference/omnibox/)

[#](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#allow_access) Allowing access
-------------------------------------------------------------------------------------------------------

If an extension needs to access `file://` URLs or operate in incognito mode, users will need to enable access for those features inside the extension's detail page at chrome://extensions.

![Allow file urls and incognito mode on the extension detial page](./Declare permissions and warn users - Chrome Developers_files/CXSHPxG4giUkzfGR67mY.png)

An extension can detect if it is enabled in incognito mode by calling [`extension.isAllowedIncognitoAccess()`](https://developer.chrome.com/docs/extensions/reference/extension#method-isAllowedIncognitoAccess) or able run on `file://` URLs with [`extension.isAllowedFileSchemeAccess()`](https://developer.chrome.com/docs/extensions/reference/extension#method-isAllowedFileSchemeAccess) .

[#](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#understanding-permissions) Understanding permissions
------------------------------------------------------------------------------------------------------------------------------

Permission warnings exist to describe the capabilities granted by an API to extension users, but some of these warnings may not be obvious at first. For instance, adding the [`"tabs"`](https://developer.chrome.com/docs/extensions/reference/tabs/) permission results in a seemingly unrelated warning: the extension can **Read your browsing activity**. Although the `chrome.tabs` API might be used to only open new tabs, it can also be used to see the URL that is associated with every newly opened tab by using their [tabs.Tab](https://developer.chrome.com/docs/extensions/reference/tabs#type-Tab) objects.

When possible, implement [optional permissions](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#optional_events) or a less powerful API to avoid alarming warnings.

[#](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#view_warnings) Viewing warnings
---------------------------------------------------------------------------------------------------------

No permission warnings will be displayed if an extension is loaded as an unpacked file. To view an extension's permission warnings, navigate to `chrome://extensions`, ensure developer mode is enabled and click **PACK EXTENSION**.

![Developer Mode is Checked then Click Pack Extension](./Declare permissions and warn users - Chrome Developers_files/Jvm8mGpe3j0j0aydcRnR.png)

Specify the path to the extension's folder in the Extension root directory field then click the **Pack Extension** button. Ignore the **Private key** field for a first-time package.

![Specify Extension Path then Click Pack Extension](./Declare permissions and warn users - Chrome Developers_files/vVw89rdJOdXFYxvgM9Sj.png)

Chrome will create two files, a `.crx` file and a `.pem` file, which contains the extension's private key.

![Packaged Extension Files](./Declare permissions and warn users - Chrome Developers_files/GLrVd51VTUF86K8gUxu8.png)

**Do not lose the private key!** Keep the `.pem` file in a secret and secure place; it will be needed to [update](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#update_permissions) the extension.

Install the `.crx` file by dropping it into the Chrome Extension's Management page.

![Drop File to Install](./Declare permissions and warn users - Chrome Developers_files/KXm9vTnv5VRNZJ9e2AJt.png)

After dropping the `.crx` file the browser will ask if the extension can be added and display warnings.

![Warning for New Tab Extension](./Declare permissions and warn users - Chrome Developers_files/4vOB4X8ZNbdk321eAzKS.png)

### [#](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#permissions_with_warnings) Permissions with warnings

**Note:** Permission tables are updated on a best-effort basis and may contain slight discrepancies with the [current warnings](https://chromium.googlesource.com/chromium/src/+/main/chrome/common/extensions/permissions/chrome_permission_message_rules.cc#:~:text=chromepermissionmessagerule%3A%3Agetallrules()). Additionally, some permissions may not display warnings when paired with other permissions. For example, the [`"tabs"`](https://developer.chrome.com/docs/extensions/reference/tabs/) warning will not show if the extension also requests `"<all_urls>"`. To verify the most recent warnings shown for extension permissions, follow the steps in [Viewing Warnings](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#view_warnings).

Permission

Description

Warning

*   `"http://*/*"`
*   `"https://*/*"`
*   `"*://*/*"`
*   `"<all_urls>"`

Grants the extension access to all hosts. It may be possible to avoid declaring any host permissions by using the [activeTab](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#activeTab_permission) permission.

**Read and change all your data on the websites you visit**

`"https://HostName.com/"`

Grants the extension access to `"https://HostName.com/"`. It may be possible to avoid declaring any host permissions by using the [activeTab](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#activeTab_permission) permission.

**Read and change your data on `HostName.com`**

`"bookmarks"`

Grants your extension access to the [chrome.bookmarks](https://developer.chrome.com/docs/extensions/reference/bookmarks/) API.

**Read and change your bookmarks**

`"clipboardRead"`

Required if the extension uses `document.execCommand('paste')`.

**Read data you copy and paste**

`"clipboardWrite"`

Indicates the extension uses `document.execCommand('copy')` or `document.execCommand('cut')`.

**Modify data you copy and paste**

`"contentSettings"`

Grants your extension access to the [chrome.contentSettings](https://developer.chrome.com/docs/extensions/reference/contentSettings/) API.

**Change your settings that control websites' access to features such as cookies, JavaScript, plugins, geolocation, microphone, camera etc.**

`"debugger"`

Grants your extension access to the [chrome.debugger](https://developer.chrome.com/docs/extensions/reference/debugger/) API.

*   **Access the page debugger backend**
*   **Read and change all your data on the websites you visit**

`"declarativeNetRequest"`

Grants your extension access to the [chrome.declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/) API.

**Block page content**

`"desktopCapture"`

Grants your extension access to the [chrome.desktopCapture](https://developer.chrome.com/docs/extensions/reference/desktopCapture/) API.

**Capture content of your screen**

`"downloads"`

Grants your extension access to the [chrome.downloads](https://developer.chrome.com/docs/extensions/reference/downloads/) API.

**Manage your downloads**

`"favicon"`

Allows the extension to use the Favicon API.

**Read the icons of the websites you visit.**

`"geolocation"`

Allows the extension to use the HTML5 [geolocation API](https://dev.w3.org/geo/api/spec-source.html) without prompting the user for permission.

**Detect your physical location**

`"history"`

Grants your extension access to the [chrome.history](https://developer.chrome.com/docs/extensions/reference/history/) API.

**Read and change your browsing history**

`"management"`

Grants the extension access to the [chrome.management](https://developer.chrome.com/docs/extensions/reference/management/) API.

**Manage your apps, extensions, and themes**

`"nativeMessaging"`

Gives the extension access to the [native messaging API](https://developer.chrome.com/docs/extensions/mv3/messaging#native-messaging).

**Communicate with cooperating native applications**

`"notifications"`

Grants your extension access to the [chrome.notifications](https://developer.chrome.com/docs/extensions/reference/notifications/) API.

**Display notifications**

`"pageCapture"`

Grants the extension access to the [chrome.pageCapture](https://developer.chrome.com/docs/extensions/reference/pageCapture/) API.

**Read and change all your data on the websites you visit**

`"privacy"`

Gives the extension access to the [chrome.privacy](https://developer.chrome.com/docs/extensions/reference/privacy/) API.

**Change your privacy-related settings**

`"proxy"`

Grants the extension access to the [chrome.proxy](https://developer.chrome.com/docs/extensions/reference/proxy/) API.

**Read and change all your data on the websites you visit**

`"system.storage"`

Grants the extension access to the [chrome.system.storage](https://developer.chrome.com/docs/extensions/reference/system.storage) API.

**Identify and eject storage devices**

`"tabCapture"`

Grants the extensions access to the [chrome.tabCapture](https://developer.chrome.com/docs/extensions/reference/tabCapture/) API.

**Read and change all your data on the websites you visit**

`"tabs"`

Grants the extension access to privileged fields of the [`Tab`](https://developer.chrome.com/extensions/tabs#type-Tab) objects used by several APIs including [chrome.tabs](https://developer.chrome.com/extensions/tabs/) and [chrome.windows](https://developer.chrome.com/docs/extensions/reference/windows/). In many circumstances the extension will not need to declare the `"tabs"` permission to make use of these APIs.

**Read your browsing history**

`"topSites"`

Grants the extension access to the [chrome.topSites](https://developer.chrome.com/docs/extensions/reference/topSites/) API.

**Read a list of your most frequently visited websites**

`"ttsEngine"`

Grants the extension access to the [chrome.ttsEngine](https://developer.chrome.com/docs/extensions/reference/ttsEngine/) API.

**Read all text spoken using synthesized speech**

`"webNavigation"`

Grants the extension access to the [chrome.webNavigation](https://developer.chrome.com/docs/extensions/reference/webNavigation/) API.

**Read your browsing history**

[#](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#update_permissions) Update permissions
----------------------------------------------------------------------------------------------------------------

Updating an extension with additional permissions may temporarily disable it. The user will have to re-enable it after agreeing to any new warnings.

If the user manually updates an extension that now includes the [tabs](https://developer.chrome.com/docs/extensions/reference/tabs/) permission, they will get a warning on the management page.

![Adding tabs Permission](./Declare permissions and warn users - Chrome Developers_files/gotD9HeWU8LsFdacTQkq.png)

If the extension is updated automatically it will be disabled until the user agrees to the new permissions.

![Extension has been disabled](./Declare permissions and warn users - Chrome Developers_files/usZSh31pGiJxhhuKmM8B.png) ![Agree to permissions](./Declare permissions and warn users - Chrome Developers_files/ZxRaaibQJSuZ6MZBvmmo.png)

This can be avoided by making the new feature optional and adding new permission updates to [`optional_permissions`](https://developer.chrome.com/docs/extensions/reference/permissions#step-2-declare-optional-permissions-in-the-manifest) in the [manifest](https://developer.chrome.com/docs/extensions/mv3/manifest/).

Updated on Wednesday, October 10, 2018 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/permission_warnings/index.md)

