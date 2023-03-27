

*   [Overview](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#overview)
*   [Hello Extensions](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#build)
*   [Loading an unpacked extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked)
*   [Pinning the extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#pin)
*   [Reloading the extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#reload)
*   [Finding console logs and errors](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#logs)
    *   [Console logs](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#console)
    *   [Error logs](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#errors)
*   [Structuring an extension project](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#structure)
*   [Using Typescript](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#types)
*   [🚀 Ready to start building?](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#building)

Development basics
==================

Learn the basics of Chrome extension development.

Published on Tuesday, October 4, 2022



*   [Overview](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#overview)
*   [Hello Extensions](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#build)
*   [Loading an unpacked extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked)
*   [Pinning the extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#pin)
*   [Reloading the extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#reload)
*   [Finding console logs and errors](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#logs)
    *   [Console logs](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#console)
    *   [Error logs](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#errors)
*   [Structuring an extension project](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#structure)
*   [Using Typescript](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#types)
*   [🚀 Ready to start building?](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#building)

[#](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#overview) Overview
------------------------------------------------------------------------------------------------------

This page describes the extension development workflow. We will create a "Hello, Extensions" example, load the extension locally, locate logs, and explore other recommendations.

[#](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#build) Hello Extensions
-----------------------------------------------------------------------------------------------------------

This extension will display “Hello Extensions” when the user clicks on the extension toolbar icon.

![Hello extension](./Development basics - Chrome Developers_files/xjKRmWMgwMm7Kdf72bkj.png)

Hello Extension popup

Start by creating a new directory to store extension files. If you prefer, you can download the full source code from [GitHub](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/tutorials/hello-world).

Next, create a new file in this directory called `manifest.json` and add the following code:

    {  "manifest_version": 3,  "name": "Hello Extensions",  "description": "Base Level Extension",  "version": "1.0",  "action": {    "default_popup": "hello.html",    "default_icon": "hello_extensions.png"  }}

This JSON object describes the extension's capabilities and configuration. For example, the `"action"` key declares the image Chrome should use as the action's icon and the HTML page to show in a popup when the action is clicked. [Download the icon](https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/gmKIT88Ha1z8VBMJFOOH.png) to your directory, and be sure to change its name to match what's in the `"default_icon"` key.

For the popup, create a file named `hello.html`, and add the following code:

    <html>  <body>    <h1>Hello Extensions</h1>  </body></html>

The extension now displays a popup when the extension action (toolbar icon) is clicked. Let's test it in Chrome by loading it locally. Ensure all files are saved.

[#](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked) Loading an unpacked extension
--------------------------------------------------------------------------------------------------------------------------------

To load an unpacked extension in developer mode:

1.  Go to the Extensions page by entering `chrome://extensions` in a new tab. (By design `chrome://` URLs are not linkable.)
    
    *   Alternatively, click on the Extensions menu puzzle button and select **Manage Extensions** at the bottom of the menu.
    *   Or, click the Chrome menu, hover over **More Tools,** then select **Extensions**.
2.  Enable Developer Mode by clicking the toggle switch next to **Developer mode**.
    
3.  Click the **Load unpacked** button and select the extension directory.
    
    ![Extensions page](./Development basics - Chrome Developers_files/BzVElZpUtNE4dueVPSp3.png)
    
    Extensions page (chrome://extensions)
    

Ta-da! The extension has been successfully installed. Because no extension icons were included in the manifest, a generic icon will be created for the extension.

[#](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#pin) Pinning the extension
--------------------------------------------------------------------------------------------------------------

By default, when you load your extension locally, it will appear in the extensions menu ![Puzzle](./Development basics - Chrome Developers_files/f5i7AgfauCfoQJxnn3kU.png). Pin your extension to the toolbar to quickly access your extension during development.

![Pinning the extension](./Development basics - Chrome Developers_files/LahIugYHQW3QpHM0z1qZ.png)

Pinning the extension

Click on the extension’s action (toolbar icon); you should see a popup.

![hello world extension](./Development basics - Chrome Developers_files/xjKRmWMgwMm7Kdf72bkj.png)

Hello World extension

[#](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#reload) Reloading the extension
-------------------------------------------------------------------------------------------------------------------

Let’s go back to the code and change the name of the extension to "Hello Extensions of the world!" in the manifest.

    {  "manifest_version": 3,  "name": "Hello Extensions of the world!",  ...}

After saving the file, to see this change in the browser you also have to refresh the extension. Go to the Extensions page and click the refresh icon next to the **on/off** toggle:

![Reload an extension](./Development basics - Chrome Developers_files/4Ph3qL9aUyswxmhauRFB.png)

💡 **Do I always have to refresh the extension to see my changes?**

Not all components need to be reloaded to see changes made, as shown in the following table:

Extension component

Requires extension reload

The manifest

Yes

Service worker

Yes

Content Scripts

Yes (plus the host page)

The popup

No

Options page

No

Other extension HTML pages

No

[#](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#logs) Finding console logs and errors
-------------------------------------------------------------------------------------------------------------------------

### [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#console) Console logs

During development, you can debug your code by accessing the browser console logs. In this case, we will locate the logs for the popup. Start by adding a script tag to `hello.html`.

    <html>  <body>    <h1>Hello Extensions</h1>    <script src="popup.js"></script>  </body></html>

Create a `popup.js` file and add the following code:

    console.log("This is a popup!")

To see this message logged in the Console:

1.  Refresh the extension.
2.  Open the popup.
3.  Right-click on the popup.
4.  Select **Inspect**.
    
    ![Inspecting the popup](./Development basics - Chrome Developers_files/vHGHW1o4J0kZgUkAteRQ.png)
    
    Inspecting a popup
    
5.  In the [DevTools](https://developer.chrome.com/docs/devtools/), navigate to the **Console** panel.

![DevTools Code Panel](./Development basics - Chrome Developers_files/1ZrcBEYcbMxW1c9UvBy9.png)

DevTools Console Panel

### [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#errors) Error logs

Now let's break the extension. We can do so by removing the closing quote in `popup.js`:

    console.log("This is a popup!) // ❌ broken code

Go to the Extensions page and open the popup. An **Errors** button will appear.

![Extensions page with error button](./Development basics - Chrome Developers_files/a9lAHCJZZrebOSKrkPRD.png)

Click the **Errors** button to learn more about the error:

![Extension error details](./Development basics - Chrome Developers_files/GrorLyaC6nRAyqc1qULC.png)

To learn more about debugging the service worker, options page, and content scripts, see [Debugging extensions](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/).

[#](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#structure) Structuring an extension project
-------------------------------------------------------------------------------------------------------------------------------

There are many ways to structure an extension project; however, you must place the manifest.json file in the extension's **root directory**. The following is a structure example:

![The contents of an extension folder: manifest.json, background.js, scripts folder, popup folder, and images folder.](./Development basics - Chrome Developers_files/hjccQNanPjTDpIajkhPU.png)

[#](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#types) Using Typescript
-----------------------------------------------------------------------------------------------------------

If you are developing using a [code editor](https://developer.mozilla.org/docs/Glossary/IDE) such as VSCode or Atom, you can use the npm package [chrome-types](https://www.npmjs.com/package/chrome-types) to take advantage of auto-completion for the [Chrome API](https://developer.chrome.com/docs/extensions/reference/). This npm package is updated automatically when the Chromium source code changes.

Gotchas

Upgrade this npm package frequently to work with the latest Chromium version.

[#](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#building) 🚀 Ready to start building?
-------------------------------------------------------------------------------------------------------------------------

Choose any of the following tutorials to begin your extension learning journey.

Extension

What you will learn

[Reading time](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-reading-time/)

To insert an element on every page automatically.

[Focus Mode](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/)

To run code on the current page after clicking on the extension action.

[Tabs Manager](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/)

To create a popup that manages browser tabs.

As a bonus, these tutorials were designed to improve your experience when reading the Chrome extension and Chrome Web store documentation:

*   Reading time adds the expected reading time to each documentation articles.
*   Focus mode changes the style of the page to help you concentrate on the documentation content.
*   Tabs manager allows you to organize your extension documentation tabs.

Updated on Tuesday, October 4, 2022 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/getstarted/development-basics/index.md)

