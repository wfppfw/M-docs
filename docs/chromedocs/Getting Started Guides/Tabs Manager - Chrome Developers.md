- [Overview](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#overview)
- [Before you start](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#prereq)
- [Build the extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#build)
  - [Step 1: Add the extension data and icons](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#step-1)
  - [Step 2: Create and style the popup](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#step-2)
  - [Step 3: Manage the tabs](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#step-3)
- [Test that it works](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#try-out)
  - [Load your extension locally](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#locally)
  - [Open a few documentation pages](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#open-sites)
- [🎯 Potential enhancements](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#challenge)
- [Keep building!](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#continue)
- [Continue exploring](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#continue-exploring)

# Tabs Manager

Build your first tabs manager.

<small>Published on Tuesday, October 4, 2022</small>

- [Overview](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#overview)
- [Before you start](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#prereq)
- [Build the extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#build)
  - [Step 1: Add the extension data and icons](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#step-1)
  - [Step 2: Create and style the popup](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#step-2)
  - [Step 3: Manage the tabs](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#step-3)
- [Test that it works](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#try-out)
  - [Load your extension locally](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#locally)
  - [Open a few documentation pages](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#open-sites)
- [🎯 Potential enhancements](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#challenge)
- [Keep building!](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#continue)
- [Continue exploring](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#continue-exploring)

## [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#overview) Overview

This tutorial builds a tabs manager to organize your Chrome extension and Chrome Web store documentation tabs.

![Tabs Manager extension popup](./Tabs Manager - Chrome Developers_files/8q5ps3dqw4p2BOZRpIJT.png)

Tabs Manager extension

In this guide, we’re going to explain how to do the following:

- Create an extension popup using the [Action](https://developer.chrome.com/docs/extensions/reference/action/) API.
- Query for specific tabs using the [Tabs](https://developer.chrome.com/docs/extensions/reference/tabs/) API.
- Preserve user privacy through narrow host permissions.
- Change the focus of the tab.
- Move tabs to the same window and group them.
- Rename tab groups using the [TabGroups](https://developer.chrome.com/docs/extensions/reference/tabGroups/) API.

## [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#prereq) Before you start

This guide assumes that you have basic web development experience. We recommend checking out [Development Basics](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/) for an introduction to the extension development workflow.

## [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#build) Build the extension

To start, create a new directory called `tabs-manager` to hold the extension's files. If you prefer, you can download the complete source code on [GitHub](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/tutorials/tabs-manager).

### [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#step-1) Step 1: Add the extension data and icons

Create a file called `manifest.json` and add the following code:

```json
{
  "manifest_version": 3,
  "name": "Tab Manager for Chrome Dev Docs",
  "version": "1.0",
  "icons": {
    "16": "images/icon-16.png",
    "32": "images/icon-32.png",
    "48": "images/icon-48.png",
    "128": "images/icon-128.png"
  }
}
```

To learn more about these manifest keys, check out the Reading time tutorial that explains the extension's [metadata](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-reading-time#step-1) and [icons](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-reading-time#step-2) in more detail.

Create an `images` folder then [download the icons](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/tutorials/tabs-manager/images) into it.

### [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#step-2) Step 2: Create and style the popup

The [Action](https://developer.chrome.com/docs/extensions/reference/action/) API controls the extension action (toolbar icon). When the user clicks on the extension action, it will either run some code or open a popup, like in this case. Start by declaring the popup in the `manifest.json`:

```json
    {
        ...
     "action": {    "default_popup": "popup.html"  },
        ...
    }
```

A popup is similar to a web page with one exception: it can't run inline JavaScript. Create a `popup.html` file and add the following code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./popup.css" />
  </head>
  <body>
    <template id="li_template">
      <li>
        <a>
          <h3 class="title">Tab Title</h3>
          <p class="pathname">Tab Pathname</p>
        </a>
      </li>
    </template>
    <h1>Google Dev Docs</h1>
    <button>Group Tabs</button>
    <ul></ul>
    <script src="./popup.js" type="module"></script>
  </body>
</html>
```

💡 **TIP**: You can use [top level await](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/await#top_level_await) by adding `type="module”` to the script tag.

Next, let's style the popup. Create a `popup.css` file and add the following code:

```css
body {
  width: 20rem;
}
ul {
  list-style-type: none;
  padding-inline-start: 0;
  margin: 1rem 0;
}
li {
  padding: 0.25rem;
}
li:nth-child(odd) {
  background: #80808030;
}
li:nth-child(even) {
  background: #ffffff;
}
h3,
p {
  margin: 0;
}
```

### [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#step-3) Step 3: Manage the tabs

The [Tabs API](https://developer.chrome.com/docs/extensions/reference/tabs/) allows an extension to create, query, modify, and rearrange tabs in the browser.

#### [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#narrow) Request permission

Many methods in the Tabs API can be used without requesting any permission. However, we need access to the `title` and the `URL` of the tabs; these sensitive properties require permission. We could request `"tabs"` permission, but this would give access to the sensitive properties of **all** tabs. Since we are only managing tabs of a specific site, we will request narrow host permissions.

Narrow [host permissions](https://developer.chrome.com/docs/extensions/mv3/match_patterns/) allow us to protect user privacy by granting elevated permission to **specific sites**. This will grant access to the `title`, and `URL` properties, as well as additional capabilities. Add the highlighted code to the `manifest.json` file:

```json
    {
        ...
        "host_permissions": [    "https://developer.chrome.com/*"  ],
         ...
    }
```

💡 **What are the main differences between the tabs permission and host permissions?**

Both the `"tabs"` permission and host permissions have drawbacks.

The `"tabs"` permission grants an extension the ability to read sensitive data on all tabs. Over time, this information could be used to collect a user's browsing history. As such, if you request this permission Chrome will display the following warning message at install time:

![Tabs permission warning dialog](./Tabs Manager - Chrome Developers_files/Zq5KIiqzVbKyoc1sa3vN.png)

Host permissions allow an extension to read and query a matching tab's sensitive properties, plus inject scripts on these tabs. Users will see the following warning message at install time:

![Host permission warning dialog](./Tabs Manager - Chrome Developers_files/KeXXloMAS8HfX7F2spTv.png)

These warning can be alarming for users. For a better onboarding experience, we recommend implementing [optional permissions](https://developer.chrome.com/docs/extensions/reference/permissions/).

#### [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#query) Query the tabs

You can retrieve the tabs from specific URLs using the `tabs.query()` method. Create a `popup.js` file and add the following code:

```js
    const tabs = await chrome.tabs.query({  url: [    "https://developer.chrome.com/docs/webstore/*",    "https://developer.chrome.com/docs/extensions/*",  ],});...
```

💡 **Can I use Chrome APIs directly in the popup?**

A popup and other extension pages can call any [Chrome API](https://developer.chrome.com/docs/extensions/reference/) because they are served from the chrome schema. For example `chrome-extension://EXTENSION_ID/popup.html`.

#### [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#focus) Focus on a tab

First, the extension will sort tab names (the titles of the contained HTML pages) alphabetically. Then, when a list item is clicked, it will focus on that tab using `tabs.update()` and bring the window to the front using `windows.update()`. Add the following code to the `popup.js` file:

```js
const collator = new Intl.Collator();
tabs.sort((a, b) => collator.compare(a.title, b.title));
const template = document.getElementById('li_template');
const elements = new Set();
for (const tab of tabs) {
  const element = template.content.firstElementChild.cloneNode(true);
  const title = tab.title.split('-')[0].trim();
  const pathname = new URL(tab.url).pathname.slice('/docs'.length);
  element.querySelector('.title').textContent = title;
  element.querySelector('.pathname').textContent = pathname;
  element.querySelector('a').addEventListener('click', async () => {
    // need to focus window as well as the active tab
    await chrome.tabs.update(tab.id, { active: true });
    await chrome.windows.update(tab.windowId, { focused: true });
  });
  elements.add(element);
}
document.querySelector('ul').append(...elements);
```

💡 **Interesting JavaScript used in this code**

- The [Collator](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) used to sort the tabs array by the user's preferred language.
- The [template tag](https://web.dev/webcomponents-template/) used to define an HTML element that can be cloned instead of using `document.createElement()` to create each item.
- The [URL constructor](https://developer.mozilla.org/docs/Web/API/URL/URL) used to create and parse URLs.
- The [Spread syntax](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax) used to convert the Set of elements into arguments in the `append()` call.

#### [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#group) Group the tabs

The [TabGroups](https://developer.chrome.com/docs/extensions/reference/tabGroups/) API allows the extension to name the group and choose a background color. Add the `“tabGroups”` permission to the manifest by adding the highlighted code:

```json
    {  ...  "permissions": [    "tabGroups"  ]}
```

In `popup.js`, add the following code to create a button that will group all the tabs using [`tabs.group()`](https://developer.chrome.com/docs/extensions/reference/tabGroups/) and move them into the current window.

```js
const button = document.querySelector('button');
button.addEventListener('click', async () => {
  const tabIds = tabs.map(({ id }) => id);
  const group = await chrome.tabs.group({ tabIds });
  await chrome.tabGroups.update(group, { title: 'DOCS' });
});
```

## [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#try-out) Test that it works

Verify that the file structure of your project matches the following directory tree:

![The contents of the tabs manager folder: manifest.json, popup.js, popup.css, popup.html, and images folder.](./Tabs Manager - Chrome Developers_files/JpuMfgSxQL9Y7XLymf1r.png)

### [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#locally) Load your extension locally

To load an unpacked extension in developer mode, follow the steps in [Development Basics](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics#load-unpacked).

### [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#open-sites) Open a few documentation pages

Open the following docs in different windows:

- [Design the user interface](https://developer.chrome.com/docs/extensions/mv3/user_interface/)
- [Discovery on the Chrome Web Store](https://developer.chrome.com/docs/webstore/discovery/)
- [Extension development overview](https://developer.chrome.com/docs/extensions/mv3/devguide/)
- [Manifest file format](https://developer.chrome.com/docs/extensions/mv3/manifest/)
- [Publish in the Chrome Web Store](https://developer.chrome.com/docs/webstore/publish/)
- [Welcome to Chrome Extension Development](https://developer.chrome.com/docs/extensions/mv3/)

Click on the popup. It should look like this:

![Tabs Manager extension popup](./Tabs Manager - Chrome Developers_files/8q5ps3dqw4p2BOZRpIJT.png)

Tabs Manager extension popup

Click on the "Group tabs" button. It should look like this:

![Tabs Manager Grouped tabs](./Tabs Manager - Chrome Developers_files/Cqi828zTxJUQnXtBzM62.png)

Grouped tabs using the Tabs Manager extension

## [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#challenge) 🎯 Potential enhancements

Based on what you’ve learned today, try to implement any of the following:

- Customize the popup stylesheet.
- Change the color and title of the tab group.
- Manage the tabs of another documentation site.
- Add support for ungrouping the grouped tabs.

## [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#continue) Keep building!

Congratulations on finishing this tutorial 🎉. Continue developing your skills by completing other tutorials on this series:

Extension

What you will learn

[Reading time](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-reading-time/)

To insert an element on every page automatically.

[Focus Mode](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/)

To run code on the current page after clicking on the extension action.

## [#](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/#continue-exploring) Continue exploring

We hope you enjoyed building this Chrome extension and are excited to continue your Chrome development learning journey. We recommend the following learning path:

- The [Chrome Extension Architecture](https://developer.chrome.com/docs/extensions/mv3/architecture-overview/) backs up a bit and fills in a lot of detail about the Extensions architecture in general.
- The [developer's guide](https://developer.chrome.com/docs/extensions/mv3/devguide/) has dozens of additional links to pieces of documentation relevant to advanced extension creation.
- Extensions have access to powerful APIs beyond what's available on the open web. The [Chrome APIs documentation](https://developer.chrome.com/docs/extensions/reference/) walks through each API.

<small> Updated on Tuesday, October 4, 2022 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/getstarted/tut-tabs-manager/index.md)</small>
