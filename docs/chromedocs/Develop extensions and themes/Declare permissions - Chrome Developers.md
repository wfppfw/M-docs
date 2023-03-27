

Declare permissions
===================

Published on Monday, October 8, 2012 • Updated on Wednesday, May 21, 2014

To use most chrome.\* APIs, your extension must declare its intent in the permissions fields of the [manifest](https://developer.chrome.com/docs/extensions/mv3/manifest/). Extensions can request three categories of permissions, specified using the respective keys in the manifest:

*   **`permissions`** contain items from a list of known strings (such as "geolocation")
*   **`optional_permissions`** are like regular `permissions`, but are granted by the extension's user at runtime, rather than in advance
*   **`host_permissions`** contain one or more [match patterns](https://developer.chrome.com/docs/extensions/mv3/match_patterns/) that give access to one or more hosts

Permissions help to limit damage if your extension is compromised by malware. Some permissions are displayed to users for their consent before installation or at runtime as needed, as detailed in [Permission Warnings](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/).

You should use optional permissions wherever the functionality of your extension permits, to provide users with informed control over access to resources and data. See the [platform vision](https://developer.chrome.com/docs/extensions/mv3/intro/platform-vision/#improved-user-visibility-and-control) to better understand this recommendation.

If an API requires you to declare a permission in the manifest, then its documentation tells you how to do so. For example, the [Storage](https://developer.chrome.com/docs/extensions/reference/storage/) page shows you how to declare the "storage" permission.

Here's an example of the permissions part of a manifest file:

    "permissions": [  "tabs",  "bookmarks",  "unlimitedStorage"],"optional_permissions": [  "unlimitedStorage"],"host_permissions": [  "http://www.blogger.com/",  "http://*.google.com/"],

The following table lists the currently available permissions:

Permission

Description

`"activeTab"`

Requests that the extension be granted permissions according to the [activeTab](https://developer.chrome.com/docs/extensions/mv3/manifest/activeTab/) specification.

`"alarms"`

Gives your extension access to the [chrome.alarms](https://developer.chrome.com/docs/extensions/reference/alarms/) API.

`"background"`

Makes Chrome start up early and shut down late, so that extensions can have a longer life.

When any installed extension has "background" permission, Chrome runs (invisibly) as soon as the user logs into their computer—before the user launches Chrome. The "background" permission also makes Chrome continue running (even after its last window is closed) until the user explicitly quits Chrome.

**Note:** Disabled extensions are treated as if they aren't installed.

You should use the "background" permission with [background scripts](https://developer.chrome.com/docs/extensions/mv3/background_pages/).

`"bookmarks"`

Gives your extension access to the [chrome.bookmarks](https://developer.chrome.com/docs/extensions/reference/bookmarks/) API.

`"browsingData"`

Gives your extension access to the [chrome.browsingData](https://developer.chrome.com/docs/extensions/reference/browsingData/) API.

`"certificateProvider"`

Gives your extension access to the [chrome.certificateProvider](https://developer.chrome.com/docs/extensions/reference/certificateProvider/) API.

`"clipboardRead"`

Required if the extension uses `document.execCommand('paste')`.

`"clipboardWrite"`

Required if the extension uses `document.execCommand('copy')` or `document.execCommand('cut')`.

`"contentSettings"`

Gives your extension access to the [chrome.contentSettings](https://developer.chrome.com/docs/extensions/reference/contentSettings/) API.

`"contextMenus"`

Gives your extension access to the [chrome.contextMenus](https://developer.chrome.com/docs/extensions/reference/contextMenus/) API.

`"cookies"`

Gives your extension access to the [chrome.cookies](https://developer.chrome.com/docs/extensions/reference/cookies/) API.

`"debugger"`

Gives your extension access to the [chrome.debugger](https://developer.chrome.com/docs/extensions/reference/debugger/) API.

`"declarativeContent"`

Gives your extension access to the [chrome.declarativeContent](https://developer.chrome.com/docs/extensions/reference/declarativeContent/) API.

`"declarativeNetRequest"`

Gives your extension access to the [chrome.declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/) API.

`"declarativeNetRequestFeedback"`

Grants the extension access to events and methods within the [chrome.declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/) API which return information on declarative rules matched.

`"declarativeWebRequest"`

Gives your extension access to the [chrome.declarativeWebRequest](https://developer.chrome.com/docs/extensions/reference/declarativeWebRequest/) API.

`"desktopCapture"`

Gives your extension access to the [chrome.desktopCapture](https://developer.chrome.com/docs/extensions/reference/desktopCapture/) API.

`"documentScan"`

Gives your extension access to the [chrome.documentScan](https://developer.chrome.com/docs/extensions/reference/documentScan/) API.

`"downloads"`

Gives your extension access to the [chrome.downloads](https://developer.chrome.com/docs/extensions/reference/downloads/) API.

`"enterprise.deviceAttributes"`

Gives your extension access to the [chrome.enterprise.deviceAttributes](https://developer.chrome.com/docs/extensions/reference/enterprise_deviceAttributes/) API.

`"enterprise.hardwarePlatform"`

Gives your extension access to the [chrome.enterprise.hardwarePlatform](https://developer.chrome.com/docs/extensions/reference/enterprise_hardwarePlatform/) API.

`"enterprise.networkingAttributes"`

Gives your extension access to the [chrome.enterprise.networkingAttributes](https://developer.chrome.com/docs/extensions/reference/enterprise_networkingAttributes/) API.

`"enterprise.platformKeys"`

Gives your extension access to the [chrome.enterprise.platformKeys](https://developer.chrome.com/docs/extensions/reference/enterprise_platformKeys/) API.

`"experimental"`

Required if the extension uses any [chrome.experimental.\* APIs](https://developer.chrome.com/docs/extensions/reference/#experimental_apis/).

`"fileBrowserHandler"`

Gives your extension access to the [chrome.fileBrowserHandler](https://developer.chrome.com/docs/extensions/reference/fileBrowserHandler/) API.

`"fileSystemProvider"`

Gives your extension access to the [chrome.fileSystemProvider](https://developer.chrome.com/docs/extensions/reference/fileSystemProvider/) API.

`"fontSettings"`

Gives your extension access to the [chrome.fontSettings](https://developer.chrome.com/docs/extensions/reference/fontSettings/) API.

`"gcm"`

Gives your extension access to the [chrome.gcm](https://developer.chrome.com/docs/extensions/reference/gcm/) API.

`"geolocation"`

Allows the extension to use the [geolocation API](https://dev.w3.org/geo/api/spec-source.html) without prompting the user for permission.

`"history"`

Gives your extension access to the [chrome.history](https://developer.chrome.com/docs/extensions/reference/history/) API.

`"identity"`

Gives your extension access to the [chrome.identity](https://developer.chrome.com/docs/extensions/reference/identity/) API.

`"idle"`

Gives your extension access to the [chrome.idle](https://developer.chrome.com/docs/extensions/reference/idle/) API.

`"loginState"`

Gives your extension access to the [chrome.loginState](https://developer.chrome.com/docs/extensions/reference/loginState/) API.

`"management"`

Gives your extension access to the [chrome.management](https://developer.chrome.com/docs/extensions/reference/management/) API.

`"nativeMessaging"`

Gives your extension access to the [native messaging API](https://developer.chrome.com/docs/apps/nativeMessaging/).

`"notifications"`

Gives your extension access to the [chrome.notifications](https://developer.chrome.com/docs/extensions/reference/notifications/) API.

`"pageCapture"`

Gives your extension access to the [chrome.pageCapture](https://developer.chrome.com/docs/extensions/reference/pageCapture/) API.

`"platformKeys"`

Gives your extension access to the [chrome.platformKeys](https://developer.chrome.com/docs/extensions/reference/platformKeys/) API.

`"power"`

Gives your extension access to the [chrome.power](https://developer.chrome.com/docs/extensions/reference/power/) API.

`"printerProvider"`

Gives your extension access to the [chrome.printerProvider](https://developer.chrome.com/docs/extensions/reference/printerProvider/) API.

`"printing"`

Gives your extension access to the [chrome.printing](https://developer.chrome.com/docs/extensions/reference/printing/) API.

`"printingMetrics"`

Gives your extension access to the [chrome.printingMetrics](https://developer.chrome.com/docs/extensions/reference/printingMetrics/) API.

`"privacy"`

Gives your extension access to the [chrome.privacy](https://developer.chrome.com/docs/extensions/reference/privacy/) API.

`"processes"`

Gives your extension access to the [chrome.processes](https://developer.chrome.com/docs/extensions/reference/processes/) API.

`"proxy"`

Gives your extension access to the [chrome.proxy](https://developer.chrome.com/docs/extensions/reference/proxy/) API.

`"scripting"`

Gives your extension access to the [chrome.scripting](https://developer.chrome.com/docs/extensions/reference/scripting/) API.

`"search"`

Gives your extension access to the [chrome.search](https://developer.chrome.com/docs/extensions/reference/search/) API.

`"sessions"`

Gives your extension access to the [chrome.sessions](https://developer.chrome.com/docs/extensions/reference/sessions/) API.

`"signedInDevices"`

Gives your extension access to the [chrome.signedInDevices](https://developer.chrome.com/docs/extensions/reference/signedInDevices/) API.

`"storage"`

Gives your extension access to the [chrome.storage](https://developer.chrome.com/docs/extensions/reference/storage/) API.

`"system.cpu"`

Gives your extension access to the [chrome.system.cpu](https://developer.chrome.com/docs/extensions/reference/system_cpu/) API.

`"system.display"`

Gives your extension access to the [chrome.system.display](https://developer.chrome.com/docs/extensions/reference/system_display/) API.

`"system.memory"`

Gives your extension access to the [chrome.system.memory](https://developer.chrome.com/docs/extensions/reference/system_memory/) API.

`"system.storage"`

Gives your extension access to the [chrome.system.storage](https://developer.chrome.com/docs/extensions/reference/system_storage/) API.

`"tabCapture"`

Gives your extension access to the [chrome.tabCapture](https://developer.chrome.com/docs/extensions/reference/tabCapture/) API.

`"tabGroups"`

Gives your extension access to the [chrome.tabGroups](https://developer.chrome.com/docs/extensions/reference/tabGroups/) API.

`"tabs"`

Gives your extension access to privileged fields of the [`Tab`](https://developer.chrome.com/docs/extensions/reference/tabs#type-Tab) objects used by several APIs including [chrome.tabs](https://developer.chrome.com/docs/extensions/reference/tabs/) and [chrome.windows](https://developer.chrome.com/docs/extensions/reference/windows/). In many circumstances your extension will not need to declare the `"tabs"` permission to make use of these APIs.

`"topSites"`

Gives your extension access to the [chrome.topSites](https://developer.chrome.com/docs/extensions/reference/topSites/) API.

`"tts"`

Gives your extension access to the [chrome.tts](https://developer.chrome.com/docs/extensions/reference/tts/) API.

`"ttsEngine"`

Gives your extension access to the [chrome.ttsEngine](https://developer.chrome.com/docs/extensions/reference/ttsEngine/) API.

`"unlimitedStorage"`

Provides an unlimited quota for storing client-side data, such as databases and local storage files. Without this permission, the extension is limited to 5 MB of local storage.

**Note:** This permission applies only to Web SQL Database and application cache (see issue [58985](http://crbug.com/58985)). Also, it doesn't currently work with wildcard subdomains such as `http://*.example.com`.

`"vpnProvider"`

Gives your extension access to the [chrome.vpnProvider](https://developer.chrome.com/docs/extensions/reference/vpnProvider/) API.

`"wallpaper"`

Gives your extension access to the [chrome.wallpaper](https://developer.chrome.com/docs/extensions/reference/wallpaper/) API.

`"webNavigation"`

Gives your extension access to the [chrome.webNavigation](https://developer.chrome.com/docs/extensions/reference/webNavigation/) API.

`"webRequest"`

Gives your extension access to the [chrome.webRequest](https://developer.chrome.com/docs/extensions/reference/webRequest/) API.

`"webRequestBlocking"`

Required if the extension uses the [chrome.webRequest](https://developer.chrome.com/docs/extensions/reference/webRequest/) API in a blocking fashion.

Updated on Wednesday, May 21, 2014 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/declare_permissions/index.md)

