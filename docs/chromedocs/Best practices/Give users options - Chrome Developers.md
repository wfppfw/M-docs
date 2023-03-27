

*   [Write the options page](https://developer.chrome.com/docs/extensions/mv3/options/#write_page)
*   [Declare options page behavior](https://developer.chrome.com/docs/extensions/mv3/options/#declare_options)
    *   [Full page options](https://developer.chrome.com/docs/extensions/mv3/options/#full_page)
    *   [Embedded options](https://developer.chrome.com/docs/extensions/mv3/options/#embedded_options)
*   [Consider the differences](https://developer.chrome.com/docs/extensions/mv3/options/#considerations)
    *   [Linking to the options page](https://developer.chrome.com/docs/extensions/mv3/options/#linking)
    *   [Tabs API](https://developer.chrome.com/docs/extensions/mv3/options/#tabs-api)
    *   [Messaging APIs](https://developer.chrome.com/docs/extensions/mv3/options/#messaging-api)
    *   [Sizing](https://developer.chrome.com/docs/extensions/mv3/options/#sizing)

Give users options
==================

Published on Tuesday, September 18, 2012 • Updated on Sunday, April 29, 2018



*   [Write the options page](https://developer.chrome.com/docs/extensions/mv3/options/#write_page)
*   [Declare options page behavior](https://developer.chrome.com/docs/extensions/mv3/options/#declare_options)
    *   [Full page options](https://developer.chrome.com/docs/extensions/mv3/options/#full_page)
    *   [Embedded options](https://developer.chrome.com/docs/extensions/mv3/options/#embedded_options)
*   [Consider the differences](https://developer.chrome.com/docs/extensions/mv3/options/#considerations)
    *   [Linking to the options page](https://developer.chrome.com/docs/extensions/mv3/options/#linking)
    *   [Tabs API](https://developer.chrome.com/docs/extensions/mv3/options/#tabs-api)
    *   [Messaging APIs](https://developer.chrome.com/docs/extensions/mv3/options/#messaging-api)
    *   [Sizing](https://developer.chrome.com/docs/extensions/mv3/options/#sizing)

Allow users to customise the behavior of an extension by providing an options page. A user can view an extension's options by right-clicking the extension icon in the toolbar then selecting options or by navigating to the extension management page at `chrome://extensions`, locating the desired extension, clicking **Details**, then selection the options link.

[#](https://developer.chrome.com/docs/extensions/mv3/options/#write_page) Write the options page
------------------------------------------------------------------------------------------------

Below is an example options page.

    <!DOCTYPE html><html><head><title>My Test Extension Options</title></head><body>Favorite color:<select id="color"> <option value="red">red</option> <option value="green">green</option> <option value="blue">blue</option> <option value="yellow">yellow</option></select><label>  <input type="checkbox" id="like">  I like colors.</label><div id="status"></div><button id="save">Save</button><script src="options.js"></script></body></html>

Save a user's preferred options across devices by using the [storage.sync](https://developer.chrome.com/docs/extensions/reference/storage#property-sync) API.

    // Saves options to chrome.storagefunction save_options() {  var color = document.getElementById('color').value;  var likesColor = document.getElementById('like').checked;  chrome.storage.sync.set({    favoriteColor: color,    likesColor: likesColor  }, function() {    // Update status to let user know options were saved.    var status = document.getElementById('status');    status.textContent = 'Options saved.';    setTimeout(function() {      status.textContent = '';    }, 750);  });}// Restores select box and checkbox state using the preferences// stored in chrome.storage.function restore_options() {  // Use default value color = 'red' and likesColor = true.  chrome.storage.sync.get({    favoriteColor: 'red',    likesColor: true  }, function(items) {    document.getElementById('color').value = items.favoriteColor;    document.getElementById('like').checked = items.likesColor;  });}document.addEventListener('DOMContentLoaded', restore_options);document.getElementById('save').addEventListener('click',    save_options);

Finally, add the `"storage"` permission to the extension's `manifest.json`:

    {  "name": "My extension",  ...  "permissions": [    "storage"  ]  ...}

[#](https://developer.chrome.com/docs/extensions/mv3/options/#declare_options) Declare options page behavior
------------------------------------------------------------------------------------------------------------

There are two available types of extension options pages, [full page](https://developer.chrome.com/docs/extensions/mv3/options/#full_page) and [embedded](https://developer.chrome.com/docs/extensions/mv3/options/#embedded_options). The type of options is determined by how it is declared in the manifest.

### [#](https://developer.chrome.com/docs/extensions/mv3/options/#full_page) Full page options

An extension's options page will be displayed in a new tab. The options HTML file is listed registered under the `options_page` field.

    {  "name": "My extension",  ...  "options_page": "options.html",  ...}

![Full page options](./Give users options - Chrome Developers_files/Ej3H0FMApR7srtGbZfBZ.png)

### [#](https://developer.chrome.com/docs/extensions/mv3/options/#embedded_options) Embedded options

Embedded options allows users to adjust extension options without navigating away from the extensions management page inside an embedded box. To declare an embedded options, register the HTML file under the `options_ui` field in the extension manifest, with the `open_in_tab` key set to false.

    {  "name": "My extension",  ...  "options_ui": {    "page": "options.html",    "open_in_tab": false  },  ...}

![Embedded options](./Give users options - Chrome Developers_files/AW1YkMTrWYUNmtTaRM0q.png)

*   **`page` (string)**
    
    Path to the options page, relative to the extension's root.
    
*   **`open_in_tab` (boolean)**
    
    Specify as `false` to declare an embedded options page. If `true`, the extension's options page will be opened in a new tab rather than embedded in _chrome://extensions_.
    

[#](https://developer.chrome.com/docs/extensions/mv3/options/#considerations) Consider the differences
------------------------------------------------------------------------------------------------------

Options pages embedded inside _chrome://extensions_ have some subtle behavior differences related to not being hosted inside their own tabs.

### [#](https://developer.chrome.com/docs/extensions/mv3/options/#linking) Linking to the options page

An extension can link directly to the options page by calling [`chrome.runtime.openOptionsPage()`](https://developer.chrome.com/runtime#method-openOptionsPage) .

    <button id="go-to-options">Go to options</button>

    document.querySelector('#go-to-options').addEventListener('click', function() {  if (chrome.runtime.openOptionsPage) {    chrome.runtime.openOptionsPage();  } else {    window.open(chrome.runtime.getURL('options.html'));  }});

### [#](https://developer.chrome.com/docs/extensions/mv3/options/#tabs-api) Tabs API

Extension embedded options page code is not hosted inside a tab, affecting how the [Tabs API](https://developer.chrome.com/docs/extensions/reference/tabs/) can be used:

*   [tabs.query](https://developer.chrome.com/docs/extensions/reference/tabs#method-query) will never find a tab within an extension's options page URL.
*   [tabs.onCreated](https://developer.chrome.com/docs/extensions/reference/tabs#event-onCreated) will not fire when the options page is opened.
*   [tabs.onUpdated](https://developer.chrome.com/docs/extensions/reference/tabs#event-onUpdated) will not fire when the options page load state changes.
*   [tabs.connect](https://developer.chrome.com/docs/extensions/reference/tabs#method-connect) or [tabs.sendMessage](https://developer.chrome.com/docs/extensions/reference/tabs#method-sendMessage) cannot be used to communicate with the options page.

Using [runtime.connect](https://developer.chrome.com/docs/extensions/runtime#method-connect) and [runtime.sendMessage](https://developer.chrome.com/docs/extensions/runtime#method-sendMessage) is a work around to these restrictions, if the options page does need to manipulate the containing tab.

### [#](https://developer.chrome.com/docs/extensions/mv3/options/#messaging-api) Messaging APIs

If an extension's options page sends a message using [runtime.connect](https://developer.chrome.com/docs/extensions/runtime#method-connect) or [runtime.sendMessage](https://developer.chrome.com/docs/extensions/runtime#method-sendMessage), the [Sender's tab](https://developer.chrome.com/docs/extensions/runtime#property-MessageSender-tab) will not be set, and the [Sender's URL](https://developer.chrome.com/docs/extensions/runtime#property-MessageSender-url) will be the options page URL.

### [#](https://developer.chrome.com/docs/extensions/mv3/options/#sizing) Sizing

The embedded options should automatically determine its own size based on the page content. However, the embedded box may not find a good size for some types of content. This problem is most common for options pages that adjust their content shape based on window size.

If this is an issue, provide fixed minimum dimensions for the options page to ensure that the embedded page will find an appropriate size.

Updated on Sunday, April 29, 2018 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/options/index.md)

