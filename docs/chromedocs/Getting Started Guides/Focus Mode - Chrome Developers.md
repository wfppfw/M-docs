

*   [Overview](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#overview)
*   [Before you start](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#prereq)
*   [Build the extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#build)
    *   [Step 1: Add the extension data and icons](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#step-1)
    *   [Step 2: Initialize the extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#step-2)
    *   [Step 3: Enable the extension action](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#step-3)
    *   [Step 4: Track the state of the current tab](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#step-4)
    *   [Step 5: Add or remove the stylesheet](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#step-5)
    *   [Optional: Assign a keyboard shortcut](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#step-6)
*   [Test that it works](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#try-out)
    *   [Load your extension locally](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#locally)
    *   [Test the extension on a documentation page](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#open-sites)
*   [🎯 Potential enhancements](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#challenge)
*   [Keep building!](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#continue)
*   [Continue exploring](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#continue-exploring)

Focus Mode
==========

Simplify the styling of the current page by clicking the extension toolbar icon.

Published on Tuesday, October 4, 2022



*   [Overview](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#overview)
*   [Before you start](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#prereq)
*   [Build the extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#build)
    *   [Step 1: Add the extension data and icons](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#step-1)
    *   [Step 2: Initialize the extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#step-2)
    *   [Step 3: Enable the extension action](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#step-3)
    *   [Step 4: Track the state of the current tab](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#step-4)
    *   [Step 5: Add or remove the stylesheet](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#step-5)
    *   [Optional: Assign a keyboard shortcut](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#step-6)
*   [Test that it works](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#try-out)
    *   [Load your extension locally](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#locally)
    *   [Test the extension on a documentation page](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#open-sites)
*   [🎯 Potential enhancements](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#challenge)
*   [Keep building!](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#continue)
*   [Continue exploring](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#continue-exploring)

[#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#overview) Overview
--------------------------------------------------------------------------------------------------

This tutorial builds an extension that simplifies the styling of the Chrome extension and Web store documentation pages so that they are easier to read.

In this guide, we’re going to explain how to do the following:

*   Use the extension service worker as the event coordinator.
*   Preserve user privacy through the `activeTab` permission.
*   Run code when the user clicks the extension toolbar icon.
*   Insert and remove a stylesheet using the [Scripting](https://developer.chrome.com/docs/extensions/reference/scripting/) API.
*   Use a keyboard shortcut to execute code.

[#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#prereq) Before you start
--------------------------------------------------------------------------------------------------------

This guide assumes that you have basic web development experience. We recommend checking out [Development Basics](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/) for an introduction to the extension development workflow.

[#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#build) Build the extension
----------------------------------------------------------------------------------------------------------

To start, create a new directory called `focus-mode` that will hold the extension's files. If you prefer, you can download the complete source code on [GitHub](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/tutorials/focus-mode).

### [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#step-1) Step 1: Add the extension data and icons

Create a file called `manifest.json` and include the following code.

    {  "manifest_version": 3,  "name": "Focus Mode",  "description": "Enable reading mode on Chrome's official Extensions and Chrome Web Store documentation.",  "version": "1.0",  "icons": {    "16": "images/icon-16.png",    "32": "images/icon-32.png",    "48": "images/icon-48.png",    "128": "images/icon-128.png"  }}

To learn more about these manifest keys, check out the Reading time tutorial that explains the extension's [metadata](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-reading-time#step-1) and [icons](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-reading-time#step-2) in more detail.

Create an `images` folder then [download the icons](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/tutorials/focus-mode/images) into it.

### [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#step-2) Step 2: Initialize the extension

Extensions can monitor browser events in the background using the [extension's service worker](https://developer.chrome.com/docs/extensions/mv3/service_workers/). Service workers are special JavaScript environments that are loaded to handle events and terminated when they're no longer needed.

Start by registering the service worker in the `manifest.json` file:

    {  ...  "background": {    "service_worker": "background.js"  },  ...}

Create a file called `background.js` and add the following code:

    chrome.runtime.onInstalled.addListener(() => {  chrome.action.setBadgeText({    text: "OFF",  });});

The first event our service worker will listen for is [`runtime.onInstalled()`](https://developer.chrome.com/docs/extensions/reference/runtime#event-onInstalled). This method allows the extension to set an initial state or complete some tasks on installation. Extensions can use the [Storage API](https://developer.chrome.com/docs/extensions/reference/storage/) and [IndexedDB](https://developer.mozilla.org/docs/Web/API/IndexedDB_API) to store the application state. In this case, though, since we're only handling two states, we will use the the _action's badge_ text itself to track whether the extension is 'ON' or 'OFF'.

Key Term

The [action's badge](https://developer.chrome.com/docs/extensions/reference/action/#badge) is a colored banner on top of the extension action (toolbar icon).

### [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#step-3) Step 3: Enable the extension action

The _extension action_ controls the extension’s toolbar icon. So whenever the user clicks on the extension action, it will either run some code (like in this example) or display a popup. Add the following code to declare the extension action in the `manifest.json` file:

    {  ...  "action": {    "default_icon": {      "16": "images/icon-16.png",      "32": "images/icon-32.png",      "48": "images/icon-48.png",      "128": "images/icon-128.png"    }  },  ...}

#### [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#active-tab) Use the activeTab permission to protect user privacy

The [`activeTab`](https://developer.chrome.com/docs/extensions/mv3/manifest/activeTab/) permission grants the extension _temporary_ ability to execute code on the currently active tab. It also allows access to [sensitive properties](https://developer.chrome.com/docs/extensions/mv3/manifest/activeTab/#what-activeTab-allows) of the current tab.

This permission is enabled when the user **_invokes_** the extension. In this case, the user invokes the extension by clicking on the extension action.

💡 **What other user interactions enable the activeTab permission in my own extension?**

*   Pressing a keyboard shortcut combination.
*   Selecting a context menu item.
*   Accepting a suggestion from the omnibox.
*   Opening an extension popup.

The `activeTab` permission allows users to _purposefully_ choose to run the extension on the focused tab; this way, it protects the user’s privacy. Another benefit is that it does not trigger a [permission warning](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#required_permissions).

To use the `activeTab` permission, add it to the manifest's permission array:

    {  ...  "permissions": ["activeTab"],  ...}

### [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#step-4) Step 4: Track the state of the current tab

After the user clicks on the extension action, the extension will check if the URL matches a documentation page. Next, it will check the state of the current tab and set the next state. Add the following code to `background.js`:

    const extensions = 'https://developer.chrome.com/docs/extensions'const webstore = 'https://developer.chrome.com/docs/webstore'chrome.action.onClicked.addListener(async (tab) => {  if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });    // Next state will always be the opposite    const nextState = prevState === 'ON' ? 'OFF' : 'ON'    // Set the action badge to the next state    await chrome.action.setBadgeText({      tabId: tab.id,      text: nextState,    });...

### [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#step-5) Step 5: Add or remove the stylesheet

Now it's time to change the layout of the page. Create a file named `focus-mode.css` and include the following code:

    body > .scaffold > :is(top-nav, navigation-rail, side-nav, footer),main > :not(:last-child),main > :last-child > navigation-tree,main .toc-container {  display: none;}main > :last-child {  margin-top: min(10vmax, 10rem);  margin-bottom: min(10vmax, 10rem);}

Let's insert or remove the stylesheet using the [Scripting](https://developer.chrome.com/docs/extensions/reference/scripting/) API. Start by declaring the `"scripting"` permission in the manifest:

    {  ...  "permissions": ["activeTab", "scripting"],  ...}

Success

The Scripting API does not trigger a [permission warning](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#required_permissions).

Finally, in `background.js` add the following code to change the layout of the page:

      ...    if (nextState === "ON") {      // Insert the CSS file when the user turns the extension on      await chrome.scripting.insertCSS({        files: ["focus-mode.css"],        target: { tabId: tab.id },      });    } else if (nextState === "OFF") {      // Remove the CSS file when the user turns the extension off      await chrome.scripting.removeCSS({        files: ["focus-mode.css"],        target: { tabId: tab.id },      });    }  }});

💡 **Can I use the Scripting API to inject code instead of a stylesheet?**

Yes! You can use [`scripting.executeScript()`](https://developer.chrome.com/docs/extensions/reference/scripting/#injected-code) to inject JavaScript.

### [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#step-6) _Optional: Assign a keyboard shortcut_

Just for fun, let's add a shortcut to make it easier to enable or disable focus mode. Add the `"commands"` key to the manifest.

    {  ...  "commands": {    "_execute_action": {      "suggested_key": {        "default": "Ctrl+U",        "mac": "Command+U"      }    }  }}

The `"_execute_action"` key runs the same code as the `action.onClicked()` event, so no additional code is needed!

[#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#try-out) Test that it works
-----------------------------------------------------------------------------------------------------------

Verify that the file structure of your project looks like the following:

![The contents of the focus mode folder: manifest.json, background.js,  focus-mode.css, and images folder.](./Focus Mode - Chrome Developers_files/S86ooJMjFm5uvf906u9a.png)

### [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#locally) Load your extension locally

To load an unpacked extension in developer mode, follow the steps in [Development Basics](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics#load-unpacked).

### [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#open-sites) Test the extension on a documentation page

First, open any of the following pages:

*   [Welcome to the Chrome Extension documentation](https://developer.chrome.com/docs/extensions/mv3/)
*   [Publish in the Chrome Web Store](https://developer.chrome.com/docs/webstore/publish/)
*   [Scripting API](https://developer.chrome.com/docs/extensions/reference/scripting/)

Then, click on the extension action. If you set up a keyboard shortcut (link), you can test it by pressing `Ctrl + U` or `Cmd + U`.

It should go from this:

![Focus Mode extension OFF](./Focus Mode - Chrome Developers_files/q9DOiy5Y6m8eTp182PgP.png)

Focus Mode extension off

To this:

![Focus Mode extension ON](./Focus Mode - Chrome Developers_files/e7y4UD1rjmk1yqiVmnoP.png)

Focus Mode extension on

[#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#challenge) 🎯 Potential enhancements
--------------------------------------------------------------------------------------------------------------------

Based on what you’ve learned today, try to accomplish any of the following:

*   Improve the CSS stylesheet.
*   Assign a different keyboard shortcut.
*   Change the layout of your favorite blog or documentation site.

[#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#continue) Keep building!
--------------------------------------------------------------------------------------------------------

Congratulations on finishing this tutorial 🎉. Continue leveling up your skills by completing other tutorials on this series:

Extension

What you will learn

[Reading time](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-reading-time/)

To insert an element on a specific set of pages automatically.

[Tabs Manager](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/)

To create a popup that manages browser tabs.

[#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/#continue-exploring) Continue exploring
----------------------------------------------------------------------------------------------------------------------

We hope you enjoyed building this Chrome extension and are excited to continue your Chrome development learning journey. We recommend the following learning paths:

*   The [Chrome Extension Architecture](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/) backs up a bit and fills in a lot of detail about the Extensions architecture in general.
*   The [developer's guide](https://developer.chrome.com/docs/extensions/mv3/devguide/) has dozens of additional links to pieces of documentation relevant to advanced extension creation.
*   Extensions have access to powerful APIs beyond what's available on the open web. The [Chrome APIs documentation](https://developer.chrome.com/docs/extensions/reference/) walks through each API.

Updated on Tuesday, October 4, 2022 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/getstarted/tut-focus-mode/index.md)

