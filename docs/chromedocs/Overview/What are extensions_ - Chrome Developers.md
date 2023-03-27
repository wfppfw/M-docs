

*   [About extensions](https://developer.chrome.com/docs/extensions/mv3/overview/#intro)
    *   [How do extensions work?](https://developer.chrome.com/docs/extensions/mv3/overview/#basics)
    *   [How do users get extensions?](https://developer.chrome.com/docs/extensions/mv3/overview/#getting-extensions)
    *   [A note about extensions policy](https://developer.chrome.com/docs/extensions/mv3/overview/#policy)
*   [Hello extensions](https://developer.chrome.com/docs/extensions/mv3/overview/#hello-extensions)
*   [What next?](https://developer.chrome.com/docs/extensions/mv3/overview/#How-do-I-start)

What are extensions?
====================

Published on Thursday, February 21, 2013 • Updated on Friday, March 12, 2021



*   [About extensions](https://developer.chrome.com/docs/extensions/mv3/overview/#intro)
    *   [How do extensions work?](https://developer.chrome.com/docs/extensions/mv3/overview/#basics)
    *   [How do users get extensions?](https://developer.chrome.com/docs/extensions/mv3/overview/#getting-extensions)
    *   [A note about extensions policy](https://developer.chrome.com/docs/extensions/mv3/overview/#policy)
*   [Hello extensions](https://developer.chrome.com/docs/extensions/mv3/overview/#hello-extensions)
*   [What next?](https://developer.chrome.com/docs/extensions/mv3/overview/#How-do-I-start)

This page provides a brief introduction to Chrome extensions and walks through the creation of a "Hello, World!" extension.

[#](https://developer.chrome.com/docs/extensions/mv3/overview/#intro) About extensions
--------------------------------------------------------------------------------------

Extensions are small software programs that customize the browsing experience. They let users tailor Chrome functionality and behavior in many ways, providing things like:

*   Productivity tools
*   Web page content enrichment
*   Information aggregation
*   Fun and games

These are just a few examples of the many things that extensions can do. See the [Chrome Web Store](https://chrome.google.com/webstore) to see thousands of different examples of published extensions.

### [#](https://developer.chrome.com/docs/extensions/mv3/overview/#basics) How do extensions work?

Extensions are built on web technologies such as HTML, JavaScript, and CSS. They run in a separate, sandboxed execution environment and interact with the Chrome browser.

Extensions let you "extend" the browser by using APIs to modify browser behavior and access web content. Extensions operate by means of an end-user UI and a developer API:

The extensions user interface

Provides a consistent way for users to manage their extensions.

Extensions APIs

Allow the extension's code to access features of the browser itself: activating tabs, modifying net requests, and so on.

To create an extension, you assemble some resources -- a manifest, JavaScript and HTML files, images, and others -- that constitute the extension. For development and testing, you can load these "unpacked" into Chrome using [extension developer mode](https://developer.chrome.com/docs/extensions/mv3/getstarted/#manifest). Once you are happy with your extension, you can [package it and distribute it to users](https://developer.chrome.com/docs/webstore/publish/).

### [#](https://developer.chrome.com/docs/extensions/mv3/overview/#getting-extensions) How do users get extensions?

Most Chrome users get extensions from the [Chrome Web Store](https://chrome.google.com/webstore). Developers across the globe publish their extensions in the Chrome Web Store where they are reviewed and made available to end users.

Some organizations use [enterprise policies](https://cloud.google.com/docs/chrome-enterprise/policies/) to install extensions on their user's devices. These extensions may either be fetched from the Chrome Web Store or hosted on the organization's web servers.

You can distribute your extensions through the [Chrome Developer Dashboard](https://chrome.google.com/webstore/devconsole), publishing them to the [Chrome Web Store](https://chrome.google.com/webstore). For more information, see the Chrome Web Store [developer documentation](https://developer.chrome.com/docs/webstore/).

### [#](https://developer.chrome.com/docs/extensions/mv3/overview/#policy) A note about extensions policy

Extensions on the Chrome Web Store must adhere to the [Chrome Web Store policies](https://developer.chrome.com/docs/webstore/program-policies/). Here are some things to keep in mind as you begin:

*   An extension must fulfill a [single purpose](https://developer.chrome.com/docs/extensions/mv3/single_purpose/) that is narrowly defined and easy to understand. A single extension can include multiple components and a range of functionality, as long as everything contributes towards a common purpose.

![Screenshot of AMP validator extension pinned](./What are extensions_ - Chrome Developers_files/XniXB3snAeMvLwI1am3O.png)

*   User interfaces should be minimal and have intent. They can range from a simple icon, such as the [AMP validator](https://chrome.google.com/webstore/detail/amp-validator/nmoffdblmcmgeicmolmhobpoocbbmknc) extension shown above, to opening a new window with a form, like the [Google Similar Pages](https://chrome.google.com/webstore/detail/google-similar-pages/pjnfggphgdjblhfjaphkjhfpiiekbbej) extension shown below.

![Screenshot of Google Similar Pages extension](./What are extensions_ - Chrome Developers_files/oR9iCEgY2889Z3mHHLll.png)

[#](https://developer.chrome.com/docs/extensions/mv3/overview/#hello-extensions) Hello extensions
-------------------------------------------------------------------------------------------------

Take a small step into extensions with this quick Hello Extensions example. Start by creating a new directory to store the extension's files, or download them from the [sample page](https://developer.chrome.com/docs/extensions/mv3/samples#search:hello).

Next, add a file called `manifest.json` and include the following code:

    {  "name": "Hello Extensions",  "description": "Base Level Extension",  "version": "1.0",  "manifest_version": 3}

Every extension requires a manifest, though most extensions will not do much with just the manifest. For this quick start, the extension has a popup file and icon declared under the [`action`](https://developer.chrome.com/docs/extensions/reference/action/) field:

    {  "name": "Hello Extensions",  "description": "Base Level Extension",  "version": "1.0",  "manifest_version": 3,  "action": {    "default_popup": "hello.html",    "default_icon": "hello_extensions.png"  }}

Download [`hello_extensions.png` here](https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/gmKIT88Ha1z8VBMJFOOH.png) and then create a file titled `hello.html`:

    <html>  <body>    <h1>Hello Extensions</h1>  </body></html>

The extension now displays `hello.html` when the icon is clicked. The next step is to include a command in the `manifest.json` that enables a keyboard shortcut. This step is fun, but not necessary:

    {  "name": "Hello Extensions",  "description": "Base Level Extension",  "version": "1.0",  "manifest_version": 3,  "action": {    "default_popup": "hello.html",    "default_icon": "hello_extensions.png"  },  "commands": {    "_execute_action": {      "suggested_key": {        "default": "Ctrl+Shift+F",        "mac": "MacCtrl+Shift+F"      },      "description": "Opens hello.html"    }  }}

The last step is to install the extension on your local machine.

1.  Navigate to `chrome://extensions` in your browser. You can also access this page by clicking on the Chrome menu on the top right side of the Omnibox, hovering over **More Tools** and selecting **Extensions**.
2.  Check the box next to **Developer Mode**.
3.  Click **Load Unpacked Extension** and select the directory for your "Hello Extensions" extension.

Congratulations! You can now use your popup-based extension by clicking the `hello_world.png` icon or by pressing `Ctrl+Shift+F` on your keyboard.

[#](https://developer.chrome.com/docs/extensions/mv3/overview/#How-do-I-start) What next?
-----------------------------------------------------------------------------------------

1.  Follow the [Getting Started tutorial](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
2.  Explore the [extension samples](https://github.com/GoogleChrome/chrome-extensions-samples)
3.  Subscribe to the [chromium-extensions Google group](http://groups.google.com/a/chromium.org/group/chromium-extensions)

Updated on Friday, March 12, 2021 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/overview/index.md)

