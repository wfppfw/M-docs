

*   [API conventions](https://developer.chrome.com/docs/extensions/reference/#api-conventions)
*   [Stable APIs](https://developer.chrome.com/docs/extensions/reference/#stable_apis)
*   [Beta APIs](https://developer.chrome.com/docs/extensions/reference/#beta_apis)
*   [Dev APIs](https://developer.chrome.com/docs/extensions/reference/#dev_apis)
*   [Platform Apps APIs](https://developer.chrome.com/docs/extensions/reference/#platform_apps_apis)

API reference
=============



*   [API conventions](https://developer.chrome.com/docs/extensions/reference/#api-conventions)
*   [Stable APIs](https://developer.chrome.com/docs/extensions/reference/#stable_apis)
*   [Beta APIs](https://developer.chrome.com/docs/extensions/reference/#beta_apis)
*   [Dev APIs](https://developer.chrome.com/docs/extensions/reference/#dev_apis)
*   [Platform Apps APIs](https://developer.chrome.com/docs/extensions/reference/#platform_apps_apis)

Chrome provides extensions with many special-purpose APIs such as `chrome.alarms` and `chrome.action`. Many APIs consist of a namespace and its related manifest fields. These fields are frequently permissions, but not always. For example, `chrome.alarms` requires only the `alarms` permission, while `chrome.action` requires an action object in the `manifest.json` file.

[#](https://developer.chrome.com/docs/extensions/reference/#api-conventions) API conventions
--------------------------------------------------------------------------------------------

Unless stated otherwise, methods in the `chrome.*` APIs are **asynchronous**: they return immediately, without waiting for the operation to finish. If you need to know the result of calling such methods, use the returned promise or pass a callback function into the method. For more information, see [Asynchronous methods](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#async-sync).

Stable APIs
-----------

Release information is not available for APIs before Chrome 42, which was released in early 2015.

Name

Description

[accessibilityFeatures](https://developer.chrome.com/docs/extensions/reference/accessibilityFeatures)

Use the `chrome.accessibilityFeatures` API to manage Chrome's accessibility features. This API relies on the [ChromeSetting prototype of the type API](https://developer.chrome.com/docs/extensions/reference/types/#ChromeSetting) for getting and setting individual accessibility features. In order to get feature states the extension must request `accessibilityFeatures.read` permission. For modifying feature state, the extension needs `accessibilityFeatures.modify` permission. Note that `accessibilityFeatures.modify` does not imply `accessibilityFeatures.read` permission.

[action](https://developer.chrome.com/docs/extensions/reference/action)

Chrome 88+ MV3+

Use the `chrome.action` API to control the extension's icon in the Google Chrome toolbar.

[alarms](https://developer.chrome.com/docs/extensions/reference/alarms)

Use the `chrome.alarms` API to schedule code to run periodically or at a specified time in the future.

[audio](https://developer.chrome.com/docs/extensions/reference/audio)

Chrome 59+

The `chrome.audio` API is provided to allow users to get information about and control the audio devices attached to the system. This API is currently only available in kiosk mode for ChromeOS.

[bookmarks](https://developer.chrome.com/docs/extensions/reference/bookmarks)

Use the `chrome.bookmarks` API to create, organize, and otherwise manipulate bookmarks. Also see [Override Pages](https://developer.chrome.com/docs/extensions/override), which you can use to create a custom Bookmark Manager page.

[browserAction](https://developer.chrome.com/docs/extensions/reference/browserAction)

≤MV2

Use browser actions to put icons in the main Google Chrome toolbar, to the right of the address bar. In addition to its [icon](https://developer.chrome.com/docs/extensions/reference/browserAction/#icon), a browser action can have a [tooltip](https://developer.chrome.com/docs/extensions/reference/browserAction/#tooltip), a [badge](https://developer.chrome.com/docs/extensions/reference/browserAction/#badge), and a [popup](https://developer.chrome.com/docs/extensions/reference/browserAction/#popups).

[browsingData](https://developer.chrome.com/docs/extensions/reference/browsingData)

Use the `chrome.browsingData` API to remove browsing data from a user's local profile.

[certificateProvider](https://developer.chrome.com/docs/extensions/reference/certificateProvider)

Chrome 46+

Use this API to expose certificates to the platform which can use these certificates for TLS authentications.

[commands](https://developer.chrome.com/docs/extensions/reference/commands)

Use the commands API to add keyboard shortcuts that trigger actions in your extension, for example, an action to open the browser action or send a command to the extension.

[contentSettings](https://developer.chrome.com/docs/extensions/reference/contentSettings)

Use the `chrome.contentSettings` API to change settings that control whether websites can use features such as cookies, JavaScript, and plugins. More generally speaking, content settings allow you to customize Chrome's behavior on a per-site basis instead of globally.

[contextMenus](https://developer.chrome.com/docs/extensions/reference/contextMenus)

Use the `chrome.contextMenus` API to add items to Google Chrome's context menu. You can choose what types of objects your context menu additions apply to, such as images, hyperlinks, and pages.

[cookies](https://developer.chrome.com/docs/extensions/reference/cookies)

Use the `chrome.cookies` API to query and modify cookies, and to be notified when they change.

[debugger](https://developer.chrome.com/docs/extensions/reference/debugger)

The `chrome.debugger` API serves as an alternate transport for Chrome's [remote debugging protocol](https://developer.chrome.com/devtools/docs/debugger-protocol). Use `chrome.debugger` to attach to one or more tabs to instrument network interaction, debug JavaScript, mutate the DOM and CSS, etc. Use the Debuggee `tabId` to target tabs with sendCommand and route events by `tabId` from onEvent callbacks.

[declarativeContent](https://developer.chrome.com/docs/extensions/reference/declarativeContent)

Use the `chrome.declarativeContent` API to take actions depending on the content of a page, without requiring permission to read the page's content.

[declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest)

Chrome 84+

The `chrome.declarativeNetRequest` API is used to block or modify network requests by specifying declarative rules. This lets extensions modify network requests without intercepting them and viewing their content, thus providing more privacy.

[desktopCapture](https://developer.chrome.com/docs/extensions/reference/desktopCapture)

Desktop Capture API that can be used to capture content of screen, individual windows or tabs.

[devtools.inspectedWindow](https://developer.chrome.com/docs/extensions/reference/devtools_inspectedWindow)

Use the `chrome.devtools.inspectedWindow` API to interact with the inspected window: obtain the tab ID for the inspected page, evaluate the code in the context of the inspected window, reload the page, or obtain the list of resources within the page.

[devtools.network](https://developer.chrome.com/docs/extensions/reference/devtools_network)

Use the `chrome.devtools.network` API to retrieve the information about network requests displayed by the Developer Tools in the Network panel.

[devtools.panels](https://developer.chrome.com/docs/extensions/reference/devtools_panels)

Use the `chrome.devtools.panels` API to integrate your extension into Developer Tools window UI: create your own panels, access existing panels, and add sidebars.

[devtools.recorder](https://developer.chrome.com/docs/extensions/reference/devtools_recorder)

Chrome 105+

Use the `chrome.devtools.recorder` API to customize the Recorder panel in DevTools.

[documentScan](https://developer.chrome.com/docs/extensions/reference/documentScan)

Chrome 44+

Use the `chrome.documentScan` API to discover and retrieve images from attached paper document scanners.

[dom](https://developer.chrome.com/docs/extensions/reference/dom)

Chrome 88+

Use the `chrome.dom` API to access special DOM APIs for Extensions

[downloads](https://developer.chrome.com/docs/extensions/reference/downloads)

Use the `chrome.downloads` API to programmatically initiate, monitor, manipulate, and search for downloads.

[enterprise.deviceAttributes](https://developer.chrome.com/docs/extensions/reference/enterprise_deviceAttributes)

Chrome 46+

Use the `chrome.enterprise.deviceAttributes` API to read device attributes. Note: This API is only available to extensions force-installed by enterprise policy.

[enterprise.hardwarePlatform](https://developer.chrome.com/docs/extensions/reference/enterprise_hardwarePlatform)

Chrome 71+

Use the `chrome.enterprise.hardwarePlatform` API to get the manufacturer and model of the hardware platform where the browser runs. Note: This API is only available to extensions installed by enterprise policy.

[enterprise.networkingAttributes](https://developer.chrome.com/docs/extensions/reference/enterprise_networkingAttributes)

Chrome 85+

Use the `chrome.enterprise.networkingAttributes` API to read information about your current network. Note: This API is only available to extensions force-installed by enterprise policy.

[enterprise.platformKeys](https://developer.chrome.com/docs/extensions/reference/enterprise_platformKeys)

Use the `chrome.enterprise.platformKeys` API to generate keys and install certificates for these keys. The certificates will be managed by the platform and can be used for TLS authentication, network access or by other extension through {@link platformKeys chrome.platformKeys}.

[events](https://developer.chrome.com/docs/extensions/reference/events)

The `chrome.events` namespace contains common types used by APIs dispatching events to notify you when something interesting happens.

[extension](https://developer.chrome.com/docs/extensions/reference/extension)

The `chrome.extension` API has utilities that can be used by any extension page. It includes support for exchanging messages between an extension and its content scripts or between extensions, as described in detail in [Message Passing](https://developer.chrome.com/docs/extensions/messaging).

[extensionTypes](https://developer.chrome.com/docs/extensions/reference/extensionTypes)

The `chrome.extensionTypes` API contains type declarations for Chrome extensions.

[fileBrowserHandler](https://developer.chrome.com/docs/extensions/reference/fileBrowserHandler)

Foreground only

Use the `chrome.fileBrowserHandler` API to extend the Chrome OS file browser. For example, you can use this API to enable users to upload files to your website.

[fileSystemProvider](https://developer.chrome.com/docs/extensions/reference/fileSystemProvider)

Use the `chrome.fileSystemProvider` API to create file systems, that can be accessible from the file manager on Chrome OS.

[fontSettings](https://developer.chrome.com/docs/extensions/reference/fontSettings)

Use the `chrome.fontSettings` API to manage Chrome's font settings.

[gcm](https://developer.chrome.com/docs/extensions/reference/gcm)

Use `chrome.gcm` to enable apps and extensions to send and receive messages through [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging/) (FCM).

[history](https://developer.chrome.com/docs/extensions/reference/history)

Use the `chrome.history` API to interact with the browser's record of visited pages. You can add, remove, and query for URLs in the browser's history. To override the history page with your own version, see [Override Pages](https://developer.chrome.com/docs/extensions/override).

[i18n](https://developer.chrome.com/docs/extensions/reference/i18n)

Use the `chrome.i18n` infrastructure to implement internationalization across your whole app or extension.

[identity](https://developer.chrome.com/docs/extensions/reference/identity)

Use the `chrome.identity` API to get OAuth2 access tokens.

[idle](https://developer.chrome.com/docs/extensions/reference/idle)

Use the `chrome.idle` API to detect when the machine's idle state changes.

[input.ime](https://developer.chrome.com/docs/extensions/reference/input_ime)

Use the `chrome.input.ime` API to implement a custom IME for Chrome OS. This allows your extension to handle keystrokes, set the composition, and manage the candidate window.

[instanceID](https://developer.chrome.com/docs/extensions/reference/instanceID)

Chrome 44+

Use `chrome.instanceID` to access the Instance ID service.

[loginState](https://developer.chrome.com/docs/extensions/reference/loginState)

Chrome 78+

Use the `chrome.loginState` API to read and monitor the login state.

[management](https://developer.chrome.com/docs/extensions/reference/management)

The `chrome.management` API provides ways to manage the list of extensions/apps that are installed and running. It is particularly useful for extensions that [override](https://developer.chrome.com/docs/extensions/override) the built-in New Tab page.

[notifications](https://developer.chrome.com/docs/extensions/reference/notifications)

Use the `chrome.notifications` API to create rich notifications using templates and show these notifications to users in the system tray.

[omnibox](https://developer.chrome.com/docs/extensions/reference/omnibox)

The omnibox API allows you to register a keyword with Google Chrome's address bar, which is also known as the omnibox.

[pageAction](https://developer.chrome.com/docs/extensions/reference/pageAction)

≤MV2

Use the `chrome.pageAction` API to put icons in the main Google Chrome toolbar, to the right of the address bar. Page actions represent actions that can be taken on the current page, but that aren't applicable to all pages. Page actions appear grayed out when inactive.

[pageCapture](https://developer.chrome.com/docs/extensions/reference/pageCapture)

Use the `chrome.pageCapture` API to save a tab as MHTML.

[permissions](https://developer.chrome.com/docs/extensions/reference/permissions)

Use the `chrome.permissions` API to request [declared optional permissions](https://developer.chrome.com/docs/extensions/reference/permissions/#manifest) at run time rather than install time, so users understand why the permissions are needed and grant only those that are necessary.

[platformKeys](https://developer.chrome.com/docs/extensions/reference/platformKeys)

Chrome 45+

Use the `chrome.platformKeys` API to access client certificates managed by the platform. If the user or policy grants the permission, an extension can use such a certficate in its custom authentication protocol. E.g. this allows usage of platform managed certificates in third party VPNs (see {@link vpnProvider chrome.vpnProvider}).

[power](https://developer.chrome.com/docs/extensions/reference/power)

Use the `chrome.power` API to override the system's power management features.

[printerProvider](https://developer.chrome.com/docs/extensions/reference/printerProvider)

Chrome 44+

The `chrome.printerProvider` API exposes events used by print manager to query printers controlled by extensions, to query their capabilities and to submit print jobs to these printers.

[printing](https://developer.chrome.com/docs/extensions/reference/printing)

Chrome 81+

Use the `chrome.printing` API to send print jobs to printers installed on Chromebook.

[printingMetrics](https://developer.chrome.com/docs/extensions/reference/printingMetrics)

Chrome 79+

Use the `chrome.printingMetrics` API to fetch data about printing usage.

[privacy](https://developer.chrome.com/docs/extensions/reference/privacy)

Use the `chrome.privacy` API to control usage of the features in Chrome that can affect a user's privacy. This API relies on the [ChromeSetting prototype of the type API](https://developer.chrome.com/docs/extensions/reference/types/#ChromeSetting) for getting and setting Chrome's configuration.

[proxy](https://developer.chrome.com/docs/extensions/reference/proxy)

Use the `chrome.proxy` API to manage Chrome's proxy settings. This API relies on the [ChromeSetting prototype of the type API](https://developer.chrome.com/docs/extensions/reference/types/#ChromeSetting) for getting and setting the proxy configuration.

[runtime](https://developer.chrome.com/docs/extensions/reference/runtime)

Use the `chrome.runtime` API to retrieve the background page, return details about the manifest, and listen for and respond to events in the app or extension lifecycle. You can also use this API to convert the relative path of URLs to fully-qualified URLs.

[scripting](https://developer.chrome.com/docs/extensions/reference/scripting)

Chrome 88+ MV3+

Use the `chrome.scripting` API to execute script in different contexts.

[search](https://developer.chrome.com/docs/extensions/reference/search)

Chrome 87+

Use the `chrome.search` API to search via the default provider.

[sessions](https://developer.chrome.com/docs/extensions/reference/sessions)

Use the `chrome.sessions` API to query and restore tabs and windows from a browsing session.

[storage](https://developer.chrome.com/docs/extensions/reference/storage)

Use the `chrome.storage` API to store, retrieve, and track changes to user data.

[system.cpu](https://developer.chrome.com/docs/extensions/reference/system_cpu)

Use the `system.cpu` API to query CPU metadata.

[system.display](https://developer.chrome.com/docs/extensions/reference/system_display)

Use the `system.display` API to query display metadata.

[system.memory](https://developer.chrome.com/docs/extensions/reference/system_memory)

The `chrome.system.memory` API.

[system.storage](https://developer.chrome.com/docs/extensions/reference/system_storage)

Use the `chrome.system.storage` API to query storage device information and be notified when a removable storage device is attached and detached.

[tabCapture](https://developer.chrome.com/docs/extensions/reference/tabCapture)

Foreground only

Use the `chrome.tabCapture` API to interact with tab media streams.

[tabGroups](https://developer.chrome.com/docs/extensions/reference/tabGroups)

Chrome 89+ MV3+

Use the `chrome.tabGroups` API to interact with the browser's tab grouping system. You can use this API to modify and rearrange tab groups in the browser. To group and ungroup tabs, or to query what tabs are in groups, use the `chrome.tabs` API.

[tabs](https://developer.chrome.com/docs/extensions/reference/tabs)

Use the `chrome.tabs` API to interact with the browser's tab system. You can use this API to create, modify, and rearrange tabs in the browser.

[topSites](https://developer.chrome.com/docs/extensions/reference/topSites)

Use the `chrome.topSites` API to access the top sites (i.e. most visited sites) that are displayed on the new tab page. These do not include shortcuts customized by the user.

[tts](https://developer.chrome.com/docs/extensions/reference/tts)

Use the `chrome.tts` API to play synthesized text-to-speech (TTS). See also the related {@link ttsEngine} API, which allows an extension to implement a speech engine.

[ttsEngine](https://developer.chrome.com/docs/extensions/reference/ttsEngine)

Use the `chrome.ttsEngine` API to implement a text-to-speech(TTS) engine using an extension. If your extension registers using this API, it will receive events containing an utterance to be spoken and other parameters when any extension or Chrome App uses the {@link tts} API to generate speech. Your extension can then use any available web technology to synthesize and output the speech, and send events back to the calling function to report the status.

[types](https://developer.chrome.com/docs/extensions/reference/types)

The `chrome.types` API contains type declarations for Chrome.

[vpnProvider](https://developer.chrome.com/docs/extensions/reference/vpnProvider)

Chrome 43+

Use the `chrome.vpnProvider` API to implement a VPN client.

[wallpaper](https://developer.chrome.com/docs/extensions/reference/wallpaper)

Chrome 43+

Use the `chrome.wallpaper` API to change the ChromeOS wallpaper.

[webNavigation](https://developer.chrome.com/docs/extensions/reference/webNavigation)

Use the `chrome.webNavigation` API to receive notifications about the status of navigation requests in-flight.

[webRequest](https://developer.chrome.com/docs/extensions/reference/webRequest)

Use the `chrome.webRequest` API to observe and analyze traffic and to intercept, block, or modify requests in-flight.

[windows](https://developer.chrome.com/docs/extensions/reference/windows)

Use the `chrome.windows` API to interact with browser windows. You can use this API to create, modify, and rearrange windows in the browser.

Beta APIs
---------

These APIs are only available in the Chrome Beta and Dev channels:

Name

Description

[declarativeWebRequest](https://developer.chrome.com/docs/extensions/reference/declarativeWebRequest)

Beta channel ≤MV2

_**Note:** this API is deprecated. Check out the {@link declarativeNetRequest} API instead._ Use the `chrome.declarativeWebRequest` API to intercept, block, or modify requests in-flight. It is significantly faster than the {@link webRequest `chrome.webRequest` API} because you can register rules that are evaluated in the browser rather than the JavaScript engine, which reduces roundtrip latencies and allows higher efficiency.

Dev APIs
--------

These APIs are only available in the Chrome Dev channel:

Name

Description

[automation](https://developer.chrome.com/docs/extensions/reference/automation)

Dev channel Foreground only

The `chrome.automation` API allows developers to access the automation (accessibility) tree for the browser. The tree resembles the DOM tree, but only exposes the _semantic_ structure of a page. It can be used to programmatically interact with a page by examining names, roles, and states, listening for events, and performing actions on nodes.

[processes](https://developer.chrome.com/docs/extensions/reference/processes)

Dev channel

Use the `chrome.processes` API to interact with the browser's processes.

Platform Apps APIs
------------------

These APIs support Chrome Apps on all platforms.

These APIs are deprecated. Chrome will be removing support for Chrome Apps on all platforms. Learn more about [migrating your app](https://developer.chrome.com/docs/apps/migration/).

Name

Description

[app.runtime](https://developer.chrome.com/docs/extensions/reference/app_runtime)

Use the `chrome.app.runtime` API to manage the app lifecycle. The app runtime manages app installation, controls the event page, and can shut down the app at anytime.

[app.window](https://developer.chrome.com/docs/extensions/reference/app_window)

Use the `chrome.app.window` API to create windows. Windows have an optional frame with title bar and size controls. They are not associated with any Chrome browser windows. See the [Window State Sample](https://github.com/GoogleChrome/chrome-app-samples/tree/master/samples/window-state) for a demonstration of these options.

[appviewTag](https://developer.chrome.com/docs/extensions/reference/appviewTag)

Chrome 43+

Use the `appview` tag to embed other Chrome Apps within your Chrome App. (see [Usage](https://developer.chrome.com/docs/extensions/reference/#usage)).

[bluetooth](https://developer.chrome.com/docs/extensions/reference/bluetooth)

Use the `chrome.bluetooth` API to connect to a Bluetooth device. All functions report failures via chrome.runtime.lastError.

[bluetoothLowEnergy](https://developer.chrome.com/docs/extensions/reference/bluetoothLowEnergy)

The `chrome.bluetoothLowEnergy` API is used to communicate with Bluetooth Smart (Low Energy) devices using the [Generic Attribute Profile (GATT)](https://developer.bluetooth.org/TechnologyOverview/Pages/GATT.aspx).

[bluetoothSocket](https://developer.chrome.com/docs/extensions/reference/bluetoothSocket)

Use the `chrome.bluetoothSocket` API to send and receive data to Bluetooth devices using RFCOMM and L2CAP connections.

[browser](https://developer.chrome.com/docs/extensions/reference/browser)

Use the `chrome.browser` API to interact with the Chrome browser associated with the current application and Chrome profile.

[clipboard](https://developer.chrome.com/docs/extensions/reference/clipboard)

Dev channel

The `chrome.clipboard` API is provided to allow users to access data of the clipboard. This is a temporary solution for chromeos platform apps until open-web alternative is available. It will be deprecated once open-web solution is available, which could be in 2017 Q4.

[fileSystem](https://developer.chrome.com/docs/extensions/reference/fileSystem)

Foreground only

Use the `chrome.fileSystem` API to create, read, navigate, and write to the user's local file system. With this API, Chrome Apps can read and write to a user-selected location. For example, a text editor app can use the API to read and write local documents. All failures are notified via chrome.runtime.lastError.

[hid](https://developer.chrome.com/docs/extensions/reference/hid)

Use the `chrome.hid` API to interact with connected HID devices. This API provides access to HID operations from within the context of an app. Using this API, apps can function as drivers for hardware devices. Errors generated by this API are reported by setting {@link runtime.lastError} and executing the function's regular callback. The callback's regular parameters will be undefined in this case.

[mdns](https://developer.chrome.com/docs/extensions/reference/mdns)

Chrome 43+

Use the `chrome.mdns` API to discover services over mDNS. This comprises a subset of the features of the NSD spec: http://www.w3.org/TR/discovery-api/

[mediaGalleries](https://developer.chrome.com/docs/extensions/reference/mediaGalleries)

Use the `chrome.mediaGalleries` API to access media files (audio, images, video) from the user's local disks (with the user's consent).

[networking.onc](https://developer.chrome.com/docs/extensions/reference/networking_onc)

Chrome 59+

The `chrome.networking.onc` API is used for configuring network connections (Cellular, Ethernet, VPN or WiFi). This API is available in auto-launched Chrome OS kiosk sessions.

[serial](https://developer.chrome.com/docs/extensions/reference/serial)

Use the `chrome.serial` API to read from and write to a device connected to a serial port.

[socket](https://developer.chrome.com/docs/extensions/reference/socket)

Use the `chrome.socket` API to send and receive data over the network using TCP and UDP connections. **Note:** Starting with Chrome 33, this API is deprecated in favor of the {@link sockets.udp}, {@link sockets.tcp} and {@link sockets.tcpServer} APIs.

[sockets.tcp](https://developer.chrome.com/docs/extensions/reference/sockets_tcp)

Use the `chrome.sockets.tcp` API to send and receive data over the network using TCP connections. This API supersedes the TCP functionality previously found in the `chrome.socket` API.

[sockets.tcpServer](https://developer.chrome.com/docs/extensions/reference/sockets_tcpServer)

Use the `chrome.sockets.tcpServer` API to create server applications using TCP connections. This API supersedes the TCP functionality previously found in the `chrome.socket` API.

[sockets.udp](https://developer.chrome.com/docs/extensions/reference/sockets_udp)

Use the `chrome.sockets.udp` API to send and receive data over the network using UDP connections. This API supersedes the UDP functionality previously found in the "socket" API.

[syncFileSystem](https://developer.chrome.com/docs/extensions/reference/syncFileSystem)

Use the `chrome.syncFileSystem` API to save and synchronize data on Google Drive. This API is NOT for accessing arbitrary user docs stored in Google Drive. It provides app-specific syncable storage for offline and caching usage so that the same data can be available across different clients. Read [Manage Data](https://developer.chrome.com/docs/extensions/app_storage) for more on using this API.

[system.network](https://developer.chrome.com/docs/extensions/reference/system_network)

Use the `chrome.system.network` API.

[usb](https://developer.chrome.com/docs/extensions/reference/usb)

Use the `chrome.usb` API to interact with connected USB devices. This API provides access to USB operations from within the context of an app. Using this API, apps can function as drivers for hardware devices. Errors generated by this API are reported by setting {@link runtime.lastError} and executing the function's regular callback. The callback's regular parameters will be undefined in this case.

[virtualKeyboard](https://developer.chrome.com/docs/extensions/reference/virtualKeyboard)

Chrome 58+ ChromeOS only

The `chrome.virtualKeyboard` API is a kiosk only API used to configure virtual keyboard layout and behavior in kiosk sessions.

[webviewTag](https://developer.chrome.com/docs/extensions/reference/webviewTag)

Use the `webview` tag to actively load live content from the web over the network and embed it in your Chrome App. Your app can control the appearance of the `webview` and interact with the web content, initiate navigations in an embedded web page, react to error events that happen within it, and more (see [Usage](https://developer.chrome.com/docs/extensions/reference/webviewTag/#usage)).

