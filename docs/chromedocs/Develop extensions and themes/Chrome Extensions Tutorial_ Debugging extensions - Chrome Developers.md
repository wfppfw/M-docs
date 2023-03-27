

*   [Locate the logs](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#locate_logs)
    *   [Background script](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#debug_bg)
    *   [Popup](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#debug_popup)
    *   [Content script](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#debug_cs)
    *   [Extension tabs](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#extension_tabs)
*   [Monitor network requests](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#network_requests)
*   [Declare permissions](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#declare_permission)
*   [Next steps](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#next)

Debugging extensions
====================

Published on Tuesday, September 18, 2012 • Updated on Friday, September 17, 2021



*   [Locate the logs](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#locate_logs)
    *   [Background script](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#debug_bg)
    *   [Popup](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#debug_popup)
    *   [Content script](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#debug_cs)
    *   [Extension tabs](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#extension_tabs)
*   [Monitor network requests](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#network_requests)
*   [Declare permissions](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#declare_permission)
*   [Next steps](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#next)

Extensions are able to leverage the same debugging benefits [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/) provides for web pages, but they carry unique behavior properties. Becoming a master extension debugger requires an understanding of these behaviors, how extension components work with each other, and where to corner bugs. This tutorial gives developers a basic understanding of debugging extensions.

[#](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#locate_logs) Locate the logs
------------------------------------------------------------------------------------------------

Extensions are made of many different components, and these components have individual responsibilities. Download a broken extension [here](https://github.com/GoogleChrome/chrome-extensions-samples/tree/e716678b67fd30a5876a552b9665e9f847d6d84b/mv2-archive/tutorials/broken_background_color) to begin locating error logs for different extension components.

### [#](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#debug_bg) Background script

Navigate to the chrome extensions management page at `chrome://extensions` and ensure developer mode is on. Click the **Load Unpacked** button and select the broken extension directory. After the extension is loaded, it should have three buttons: **Details**, **Remove** and **Errors** in red letters.

![Image displaying error button on extension management page](./Chrome Extensions Tutorial_ Debugging extensions - Chrome Developers_files/NPUXnZrLSG6T6zTCmbxj.png)

Click the **Errors** button to view the error log. The extensions system has found an issue in the background script.

`Uncaught TypeError: Cannot read property 'addListener' of undefined`

![Extensions Management Page displaying background script error](./Chrome Extensions Tutorial_ Debugging extensions - Chrome Developers_files/5UNQ4gp40qQZIwOLTzxA.png)

Additionally, the Chrome DevTools panel can be opened for the background script by selecting the blue link next to **Inspect views**.

![DevTools displaying background script error](./Chrome Extensions Tutorial_ Debugging extensions - Chrome Developers_files/GvIXA3o7JvOxUg9BV12z.png)

Return to the code.

    chrome.runtime.oninstalled.addListener(function() {  chrome.storage.sync.set({color: '#3aa757'}, function() {    console.log('The color is green.');  });  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {    chrome.declarativeContent.onPageChanged.addRules([{      conditions: [new chrome.declarativeContent.PageStateMatcher({        pageUrl: {hostEquals: 'developer.chrome.com'},      })],      actions: [new chrome.declarativeContent.ShowPageAction()]    }]);  });});

The background script is attempting to listen for the [`onInstalled`](https://developer.chrome.com/docs/extensions/reference/runtime#event-onInstalled) event, but the property name requires an upper case "I". Update the code to reflect the correct call, click the **Clear all** button in the upper right hand corner, then reload the extension.

### [#](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#debug_popup) Popup

Now that the extension initializes correctly, other components can be tested. Refresh this page, or open a new tab and navigate to any page on developer.chrome.com, open the popup and click the green square. And... nothing happens.

Navigate back to the Extensions Management Page, the **Errors** button has reappeared. Click it to view the new log.

`Uncaught ReferenceError: tabs is not defined`

![Extensions Management Page displaying popup error](./Chrome Extensions Tutorial_ Debugging extensions - Chrome Developers_files/ygCnLz4Dst4mktOQhj4S.png)

Popup errors can also be viewed by inspecting the popup.

![DevTools displaying popup error](./Chrome Extensions Tutorial_ Debugging extensions - Chrome Developers_files/PTfS6FEsE6vkbtDVMcsM.png)

The error, `tabs is undefined`, says the extension doesn't know where to inject the content script. This can be corrected by calling the [`tabs.query()`](https://developer.chrome.com/docs/extensions/reference/tabs#method-query) method, then selecting the active tab.

      let changeColor = document.getElementById('changeColor');  chrome.storage.sync.get(['color'], ({color}) => {    changeColor.style.backgroundColor = color;    changeColor.setAttribute('value', color);  });  changeColor.addEventListener('click', () =>    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {      chrome.scripting.executeScript(          tabs[0].id,          { function: setColor });    });  );    async function setColor() {    let {color} = await chrome.storage.sync.get(['color']);    document.body.style.backgroundColor = color;  };

Update the code, click the **Clear all** button in the upper right hand corner, and then reload the extension.

### [#](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#debug_cs) Content script

Refresh the page, open the popup and click the green box. And... nope, the background still hasn't changed colors! Navigate back to the Extensions Management Page and... there is no **Errors** button. The likely culprit is the content script, which runs inside the web page.

Open the DevTools panel of the web page the extension is trying to alter.

![Extension error displayed in web page console](./Chrome Extensions Tutorial_ Debugging extensions - Chrome Developers_files/q6cdFK0h7JEfaQKUMDg0.png)

Only runtime errors, `console.warning` and `console.error` will be recorded on the Extensions Management Page.

To use DevTools from within the content script, click the dropdown arrow next to **top** and select the extension.

![Uncaught ReferenceError: tabs is not defined](./Chrome Extensions Tutorial_ Debugging extensions - Chrome Developers_files/uo8osbvVkG5HcJS00bAR.png)

The error says `color` is not defined. The extension must not be passing the variable correctly. Correct the injected script to pass the color variable into the code.

      document.body.style.backgroundColor = "' + color + '";

### [#](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#extension_tabs) Extension tabs

Logs for extension pages displayed as a tab, such as [override pages](https://developer.chrome.com/docs/extensions/mv3/override/) and [full-page options](https://developer.chrome.com/docs/extensions/mv3/options#full_page), can be found in the web page console and on the extensions management page.

[#](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#network_requests) Monitor network requests
--------------------------------------------------------------------------------------------------------------

The popup will often make all of the required network requests before even the speediest of developers can open DevTools. To view these requests, refresh from inside the network panel. It will reload the popup without closing the DevTools panel.

![Refresh inside the network panel to view popup network requests](./Chrome Extensions Tutorial_ Debugging extensions - Chrome Developers_files/x8knWvTA11f4j1wVoNY8.gif)

[#](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#declare_permission) Declare permissions
-----------------------------------------------------------------------------------------------------------

While extensions have similar capabilities as web pages they often need permission to use certain features, such as [cookies](https://developer.chrome.com/docs/extensions/reference/cookies/), [storage](https://developer.chrome.com/docs/extensions/reference/storage/) and [Cross-Origin XMLHttpRequests](https://developer.chrome.com/docs/extensions/mv3/xhr/). Refer to the [permissions article](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/) and the available [Chrome APIs](https://developer.chrome.com/docs/extensions/reference/) to ensure an extension is requesting the correct permissions in its [manifest](https://developer.chrome.com/docs/extensions/reference/tabs/).

      {    "name": "Broken Background Color",    "version": "1.0",    "description": "Fix an Extension!",    "permissions": [      "activeTab",      "declarativeContent",      "storage"    ],    "options_page": "options.html",    "background": {      "service_worker": "background.js"    },    "action": {      "default_popup": "popup.html",      "default_icon": {        "16": "images/get_started16.png",        "32": "images/get_started32.png",        "48": "images/get_started48.png",        "128": "images/get_started128.png"      }    },    "icons": {      "16": "images/get_started16.png",      "32": "images/get_started32.png",      "48": "images/get_started48.png",      "128": "images/get_started128.png"    },    "manifest_version": 3  }

[#](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/#next) Next steps
------------------------------------------------------------------------------------

For further information on debugging extensions, watch [Developing and Debugging](http://www.youtube.com/watch?v=IP0nMv_NI1s&feature=PlayList&p=CA101D6A85FE9D4B&index=5). Learn more about [Chrome Devtools](https://developers.google.com/web/tools/chrome-devtools/) by reading the documentation.

Updated on Friday, September 17, 2021 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/tut_debugging/index.md)

