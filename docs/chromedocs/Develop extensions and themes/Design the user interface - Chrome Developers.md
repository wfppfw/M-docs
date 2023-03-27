

*   [The extension action](https://developer.chrome.com/docs/extensions/mv3/user_interface/#action)
    *   [Register the action](https://developer.chrome.com/docs/extensions/mv3/user_interface/#browser)
    *   [Activate the action conditionally](https://developer.chrome.com/docs/extensions/mv3/user_interface/#activate_pages)
*   [Provide the extension icons](https://developer.chrome.com/docs/extensions/mv3/user_interface/#provide-the-extension-icons)
    *   [Designate action icons](https://developer.chrome.com/docs/extensions/mv3/user_interface/#icons)
    *   [Create and register additional icons](https://developer.chrome.com/docs/extensions/mv3/user_interface/#icon_size)
*   [Additional UI features](https://developer.chrome.com/docs/extensions/mv3/user_interface/#additional_features)
    *   [Action badge](https://developer.chrome.com/docs/extensions/mv3/user_interface/#badge)
    *   [Popup](https://developer.chrome.com/docs/extensions/mv3/user_interface/#popup)
    *   [Tooltip](https://developer.chrome.com/docs/extensions/mv3/user_interface/#tooltip)
    *   [Click Event](https://developer.chrome.com/docs/extensions/mv3/user_interface/#click)
    *   [Omnibox](https://developer.chrome.com/docs/extensions/mv3/user_interface/#omnibox)
    *   [Context menu](https://developer.chrome.com/docs/extensions/mv3/user_interface/#context_menu)
    *   [Commands](https://developer.chrome.com/docs/extensions/mv3/user_interface/#commands)
    *   [Override pages](https://developer.chrome.com/docs/extensions/mv3/user_interface/#override)
    *   [Notifications](https://developer.chrome.com/docs/extensions/mv3/user_interface/#notifications)
*   [Internationalize the UI](https://developer.chrome.com/docs/extensions/mv3/user_interface/#localize)
*   [Continue exploring](https://developer.chrome.com/docs/extensions/mv3/user_interface/#next)

Design the user interface
=========================

Published on Friday, March 16, 2018 • Updated on Wednesday, April 27, 2022



*   [The extension action](https://developer.chrome.com/docs/extensions/mv3/user_interface/#action)
    *   [Register the action](https://developer.chrome.com/docs/extensions/mv3/user_interface/#browser)
    *   [Activate the action conditionally](https://developer.chrome.com/docs/extensions/mv3/user_interface/#activate_pages)
*   [Provide the extension icons](https://developer.chrome.com/docs/extensions/mv3/user_interface/#provide-the-extension-icons)
    *   [Designate action icons](https://developer.chrome.com/docs/extensions/mv3/user_interface/#icons)
    *   [Create and register additional icons](https://developer.chrome.com/docs/extensions/mv3/user_interface/#icon_size)
*   [Additional UI features](https://developer.chrome.com/docs/extensions/mv3/user_interface/#additional_features)
    *   [Action badge](https://developer.chrome.com/docs/extensions/mv3/user_interface/#badge)
    *   [Popup](https://developer.chrome.com/docs/extensions/mv3/user_interface/#popup)
    *   [Tooltip](https://developer.chrome.com/docs/extensions/mv3/user_interface/#tooltip)
    *   [Click Event](https://developer.chrome.com/docs/extensions/mv3/user_interface/#click)
    *   [Omnibox](https://developer.chrome.com/docs/extensions/mv3/user_interface/#omnibox)
    *   [Context menu](https://developer.chrome.com/docs/extensions/mv3/user_interface/#context_menu)
    *   [Commands](https://developer.chrome.com/docs/extensions/mv3/user_interface/#commands)
    *   [Override pages](https://developer.chrome.com/docs/extensions/mv3/user_interface/#override)
    *   [Notifications](https://developer.chrome.com/docs/extensions/mv3/user_interface/#notifications)
*   [Internationalize the UI](https://developer.chrome.com/docs/extensions/mv3/user_interface/#localize)
*   [Continue exploring](https://developer.chrome.com/docs/extensions/mv3/user_interface/#next)

Like Chrome's user interface (UI), an extension UI should be purposeful and minimal. Extensions should allow users to customize or enhance the user's browsing experience without distracting from it.

This guide explores required and optional user interface features. Use it to understand how and when to implement different UI elements within an extension.

[#](https://developer.chrome.com/docs/extensions/mv3/user_interface/#action) The extension action
-------------------------------------------------------------------------------------------------

The [Action API](https://developer.chrome.com/docs/extensions/reference/action/) controls the extension's action (toolbar icon). It can either open a [popup](https://developer.chrome.com/docs/extensions/mv3/user_interface/#popup) or trigger some functionality when it's [clicked](https://developer.chrome.com/docs/extensions/mv3/user_interface/#click).

Users can trigger an extension's action by expanding the extension menu and selecting the desired extension.

To make it easier to access an extension, the user may choose to pin the extension's action to the toolbar. Once pinned, the extension's action will appear to the left of the extension menu. Users can rearrange their pinned extensions by dragging and dropping their action icons to the desired order.

![Unpinned extension](./Design the user interface - Chrome Developers_files/iouvm1a3lsQWGyg6fSMS.png)

**Unpinned extension**

![Pinned extension](./Design the user interface - Chrome Developers_files/KS09fVoCj3YWuIoH5EFn.png)

**Pinned extension**

### [#](https://developer.chrome.com/docs/extensions/mv3/user_interface/#browser) Register the action

To use the Action API, the extension's [manifest](https://developer.chrome.com/docs/extensions/mv3/manifest/) must contain an `"action"` key. This informs the browser that the extension will customize the action.

    {  "name": "My Awesome action MV3 Extension",  ...  "action": {    ...  }  ...}

See the [manifest section](https://developer.chrome.com/docs/extensions/reference/action/#manifest) of the Action API docs for a full description on the optional properties of this field.

### [#](https://developer.chrome.com/docs/extensions/mv3/user_interface/#activate_pages) Activate the action conditionally

The [DeclarativeContent API](https://developer.chrome.com/docs/extensions/reference/declarativeContent/) allows you to enable the extension's action based on the page URL or if the CSS selectors match the elements on the page.

When an extension is disabled, the icon is grayed out. If the user clicks the disabled extension, the extension's context menu will appear.

![Clicked Disabled extension](./Design the user interface - Chrome Developers_files/hlYsQJPFsF7WBAjJZ6DS.png)

Disabled extension.

[#](https://developer.chrome.com/docs/extensions/mv3/user_interface/#provide-the-extension-icons) Provide the extension icons
-----------------------------------------------------------------------------------------------------------------------------

An extension requires at least one icon to represent it. Provide icons in PNG format for the best visual results, although any raster format supported by Blink including BMP, GIF, ICO, and JPEG is accepted.

Caution

SVG files are not supported for any icons declared in the manifest.

Ensure your icon follows the [extension icon best practices](https://developer.chrome.com/docs/webstore/images/#icons).

### [#](https://developer.chrome.com/docs/extensions/mv3/user_interface/#icons) Designate action icons

Icons specific to the toolbar are registered in the `"default_icon"` field under [`action`](https://developer.chrome.com/docs/extensions/reference/action/) in the manifest. Including multiple sizes is encouraged to scale for the 16-dip space. At minimum, 16x16 and 32x32 sizes are recommended.

    {  "name": "My Awesome Extension",  ...  "action": {    "default_icon": {      "16": "extension_toolbar_icon16.png",      "32": "extension_toolbar_icon32.png"    }  }  ...}

All icons should be square or they may be distorted. If no icons are supplied, Chrome will add a generic one to the toolbar with the first letter of the extension name.

### [#](https://developer.chrome.com/docs/extensions/mv3/user_interface/#icon_size) Create and register additional icons

Include additional icons in the following sizes for uses outside of the toolbar.

Icon Size

Icon Use

16x16

Favicon on the extension's pages and context menu icon.

32x32

Windows computers often require this size.

48x48

Displays on the extension management page.

128x128

Displays on installation and in the Chrome Web Store.

Register icons in the manifest under the `"icons"` field.

    {  "name": "My Awesome Extension",  ...  "icons": {    "16": "extension_icon16.png",    "32": "extension_icon32.png",    "48": "extension_icon48.png",    "128": "extension_icon128.png"  }  ...}

[#](https://developer.chrome.com/docs/extensions/mv3/user_interface/#additional_features) Additional UI features
----------------------------------------------------------------------------------------------------------------

### [#](https://developer.chrome.com/docs/extensions/mv3/user_interface/#badge) Action badge

Badges display a colored banner on top of the action icon. They can only be used when the `"action"` is declared in the manifest.

Use badges to indicate the state of the extension. The [Drink Water](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/examples/water_alarm_notification) sample extension displays a badge with "ON" to show the user they have successfully set an alarm and displays nothing when the extension is idle. Badges can contain up to 4 characters.

![Badge On](./Design the user interface - Chrome Developers_files/nXwAHSWLBEgT8099ITT0.png)

![Badge Off](./Design the user interface - Chrome Developers_files/pNz8UgfTBMmcf7fE9wja.png)

You can set the text of the badge by calling [`chrome.action.setBadgeText()`](https://developer.chrome.com/docs/extensions/reference/action#method-setBadgeText) and the banner color by calling [`chrome.action.setBadgeBackgroundColor()`](https://developer.chrome.com/docs/extensions/reference/action#method-setBadgeBackgroundColor).

    chrome.action.setBadgeText({text: 'ON'});chrome.action.setBadgeBackgroundColor({color: '#4688F1'});

### [#](https://developer.chrome.com/docs/extensions/mv3/user_interface/#popup) Popup

A popup is an HTML file that is displayed in a special window when the user clicks the action icon. A popup works very similarly to a web page; it can contain links to stylesheets and script tags, but does not allow inline JavaScript.

The [Drink Water Event](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/examples/water_alarm_notification) example popup displays available timer options. Users set an alarm by clicking one of the provided buttons.

![Popup sample screenshot](./Design the user interface - Chrome Developers_files/JVduBMXnyUorfNjFZmue.png)

    <html>  <head>    <title>Water Popup</title>  </head>  <body>      <img src="./stay_hydrated.png" id="hydrateImage">      <button id="sampleSecond" value="0.1">Sample Second</button>      <button id="min15" value="15">15 Minutes</button>      <button id="min30" value="30">30 Minutes</button>      <button id="cancelAlarm">Cancel Alarm</button>    <script src="popup.js"></script>  </body></html>

The popup is registered in the manifest under the `"action"` key.

    {  "name": "Drink Water Event",  ...  "action": {    "default_popup": "popup.html"  }  ...}

Popups can also be set dynamically by calling [`action.setPopup`](https://developer.chrome.com/docs/extensions/reference/action#method-setPopup).

    chrome.storage.local.get('signed_in', (data) => {  if (data.signed_in) {    chrome.action.setPopup({popup: 'popup.html'});  } else {    chrome.action.setPopup({popup: 'popup_sign_in.html'});  }});

### [#](https://developer.chrome.com/docs/extensions/mv3/user_interface/#tooltip) Tooltip

Use a tooltip to give short descriptions or instructions to users when hovering over the action icon. By default, the tootip displays the name of the extension.

![A screenshot of an example tooltip](./Design the user interface - Chrome Developers_files/Go8aQg0vd0f2hkOFElLK.png)

Tooltips are registered in the `"default_title"` field under the `"action"` key in the manifest.

    {  "name": "Tab Flipper",  ...  "action": {    "default_title": "Press Ctrl(Win)/Command(Mac)+Shift+Right/Left to flip tabs"  }...}

Tooltips can also be set or updated by calling [`action.setTitle`](https://developer.chrome.com/docs/extensions/reference/action#method-setTitle).

### [#](https://developer.chrome.com/docs/extensions/mv3/user_interface/#click) Click Event

It's possible to register an [OnClicked handler](https://developer.chrome.com/docs/extensions/reference/action/#event-onClicked) for when the user clicks the action item. However, this won't fire if the action has a popup (default or otherwise).

    chrome.action.onClicked.addListener(function(tab) {  chrome.action.setTitle({tabId: tab.id, title: "You are on tab:" + tab.id});});

### [#](https://developer.chrome.com/docs/extensions/mv3/user_interface/#omnibox) Omnibox

Users can invoke extension functionality through the [Omnibox API](https://developer.chrome.com/docs/extensions/reference/omnibox/). Include the `"omnibox"` field in the manifest and designate a keyword. The [Omnibox New Tab Search](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/api/omnibox/new-tab-search) sample extension uses nt as the keyword.

    {  "name": "Omnibox New Tab Search",  ...  "omnibox": { "keyword" : "nt" },  "default_icon": {    "16": "newtab_search16.png",    "32": "newtab_search32.png"  }  ...}

When the user types "nt" into the omnibox, it activates the extension. To signal this to the user, it grayscales the provided 16x16 icon and includes it in the omnibox next to the extension name.

![Active Omnibox Extension](./Design the user interface - Chrome Developers_files/T0jCZDUVfuEANigPV6bY.png)

The extension listens to the [`omnibox.onInputEntered`](https://developer.chrome.com/docs/extensions/reference/omnibox#event-onInputEntered) event. After it's triggered, the extension opens a new tab containing a Google search for the user's entry.

    chrome.omnibox.onInputEntered.addListener(function(text) {  // Encode user input for special characters , / ? : @ & = + $ #  const newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);  chrome.tabs.create({ url: newURL });});

### [#](https://developer.chrome.com/docs/extensions/mv3/user_interface/#context_menu) Context menu

You can use the [ContextMenus API](https://developer.chrome.com/docs/extensions/reference/contextMenus/) by granting the `"contextMenus"` permission in the manifest.

    {  "name": "Global Google Search",  ...  "permissions": [    "contextMenus",    "storage"  ],  "icons": {    "16": "globalGoogle16.png",    "48": "globalGoogle48.png",    "128": "globalGoogle128.png"  }  ...}

The 16x16 icon is displayed next to the new menu entry.

![Context Menu Icon](./Design the user interface - Chrome Developers_files/jpA0DLCg2sEnwIf4FkLp.png)

Create a context menu by calling [`contextMenus.create()`](https://developer.chrome.com/docs/extensions/reference/contextMenus#method-create) in the background script. This should be done under the [`runtime.onInstalled`](https://developer.chrome.com/docs/extensions/reference/runtime#event-onInstalled) listener event.

    // background.jschrome.runtime.onInstalled.addListener(async () => {  for (let [tld, locale] of Object.entries(tldLocales)) {    chrome.contextMenus.create({      id: tld,      title: locale,      type: 'normal',      contexts: ['selection'],    });  }});

    const tldLocales = {  'com.au': 'Australia',  'com.br': 'Brazil',  'ca': 'Canada',  'cn': 'China',  'fr': 'France',  'it': 'Italy',  'co.in': 'India',  'co.jp': 'Japan',  'com.ms': 'Mexico',  'ru': 'Russia',  'co.za': 'South Africa',  'co.uk': 'United Kingdom'};

The [Global Google Search context menu example](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/api/contextMenus/global_context_search) creates multiple options from the list in `locales.js`. When an extension contains more than one context menu, Chrome automatically collapses them into a single parent menu.

![Multiple Context Menus will Collapse](./Design the user interface - Chrome Developers_files/LhrliaEhN82maJmeNp7f.png)

### [#](https://developer.chrome.com/docs/extensions/mv3/user_interface/#commands) Commands

Extensions can define specific [Commands API](https://developer.chrome.com/docs/extensions/reference/commands/) and bind them to a key combination. Register one or more shortcuts in the manifest under the `"commands"` key.

    {  "name": "Tab Flipper",  ...  "commands": {    "flip-tabs-forward": {      "suggested_key": {        "default": "Ctrl+Shift+Right",        "mac": "Command+Shift+Right"      },      "description": "Flip tabs forward"    },    "flip-tabs-backwards": {      "suggested_key": {        "default": "Ctrl+Shift+Left",        "mac": "Command+Shift+Left"      },      "description": "Flip tabs backwards"    }  }  ...}

Commands can be used to provide new or alternative browser shortcuts. The [Tab Flipper](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/api/default_command_override) sample extension listens to the [`commands.onCommand`](https://developer.chrome.com/docs/extensions/reference/commands#event-onCommand) event in the [background script](https://developer.chrome.com/docs/extensions/mv3/background_pages/) and defines functionality for each registered combination.

    // background.js chrome.commands.onCommand.addListener(command => {  // command will be "flip-tabs-forward" or "flip-tabs-backwards"  chrome.tabs.query({currentWindow: true}, tabs => {    // Sort tabs according to their index in the window.    tabs.sort((a, b) => a.index - b.index);    const activeIndex = tabs.findIndex((tab) => tab.active);    const lastTab = tabs.length - 1;    let newIndex = -1;    if (command === 'flip-tabs-forward') {      newIndex = activeIndex === 0 ? lastTab : activeIndex - 1;    } else {  // 'flip-tabs-backwards'      newIndex = activeIndex === lastTab ? 0 : activeIndex + 1;    }    chrome.tabs.update(tabs[newIndex].id, {active: true, highlighted: true});  });});

### [#](https://developer.chrome.com/docs/extensions/mv3/user_interface/#override) Override pages

An extension can [override](https://developer.chrome.com/docs/extensions/mv3/override/) and replace the History, New Tab, or Bookmarks page with a custom HTML file. Like a [popup](https://developer.chrome.com/docs/extensions/mv3/user_interface/#popup), it can include specialized logic and style, but does not allow inline JavaScript.

A single extension is limited to overriding **only one** of the three possible pages.

Register an override page in the manifest under the `"chrome_url_overrides"` field.

    {  "name": "Awesome Override Extension",  ...  "chrome_url_overrides" : {    "newtab": "override_page.html"  },  ...}

The `"newtab"` field should be replaced with `"bookmarks"` or `"history"` when overriding those pages.

    <html>  <head>  <title>New Tab</title>  </head>  <body>    <h1>Hello World</h1>    <script src="logic.js"></script>  </body></html>

### [#](https://developer.chrome.com/docs/extensions/mv3/user_interface/#notifications) Notifications

You can communicate relevant information to users by displaying notifications directly in their system tray.

To use the [Notifications API](https://developer.chrome.com/docs/extensions/reference/notifications/), you must declare the `"notifications"` permission in the manifest.

    // manifest.json{   "name": "Drink Water Event Popup",...  "permissions": [    "alarms",    "notifications",    "storage"  ], ...}

Once the permission is declared, you can display a notification by calling [`notifications.create()`](https://developer.chrome.com/docs/extensions/reference/notifications#method-create).

    // background.jsfunction showStayHydratedNotification() {  chrome.notifications.create({    type: 'basic',    iconUrl: 'stay_hydrated.png',    title: 'Time to Hydrate',    message: 'Everyday I\'m Guzzlin\'!',    buttons: [      { title: 'Keep it Flowing.' }    ],    priority: 0  });}

![Mac OS notification](./Design the user interface - Chrome Developers_files/e5S112AtwfnA5o64JrGg.png)

Notification in Mac OS

[#](https://developer.chrome.com/docs/extensions/mv3/user_interface/#localize) Internationalize the UI
------------------------------------------------------------------------------------------------------

You can use the [I18n API](https://developer.chrome.com/docs/extensions/reference/i18n/) to internationalize your extension. Create directories to house language specific messages within a folder called `_locales/`, like this:

*   `_locales/en/messages.json`
*   `_locales/es/messages.json`

[Format messages](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/) inside of each language's `messages.json`. For example, the following code localizes the tooltip:

Located in `_locales/en/messages.json`:

    {  "__MSG_tooltip__": {    "message": "Hello!",    "description": "Tooltip"  }}

Located in `_locales/es/messages.json`:

    {  "__MSG_tooltip__": {    "message": "Hola!",    "description": "Tooltip"  }}

Specify the name of the message in the `"default_title"` field of the manifest. The `"default_locale"` field must be defined.

    // manifest.json{  "name": "Tab Flipper",  ...  "action": {    "default_title": "__MSG_tooltip__"  },  "default_locale": "en"  ...}

[#](https://developer.chrome.com/docs/extensions/mv3/user_interface/#next) Continue exploring
---------------------------------------------------------------------------------------------

See the [Action API example](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/api/action) for a complete demonstration of the action APIs capabilities.

Updated on Wednesday, April 27, 2022 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/user_interface/index.md)

