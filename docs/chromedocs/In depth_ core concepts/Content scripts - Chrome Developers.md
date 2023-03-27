

*   [Understand content script capabilities](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#capabilities)
*   [Work in isolated worlds](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#isolated_world)
*   [Inject scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#functionality)
    *   [Inject with static declarations](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#static-declarative)
    *   [Inject programmatically](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#programmatic)
    *   [Exclude matches and globs](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#matchAndGlob)
    *   [Run time](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#run_time)
    *   [Specify frames](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#frames)
    *   [Injecting in related frames](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#injecting-in-related-frames)
*   [Communication with the embedding page](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#host-page-communication)
*   [Stay secure](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#security)

Content scripts
===============

Published on Monday, September 17, 2012 • Updated on Monday, August 2, 2021



*   [Understand content script capabilities](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#capabilities)
*   [Work in isolated worlds](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#isolated_world)
*   [Inject scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#functionality)
    *   [Inject with static declarations](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#static-declarative)
    *   [Inject programmatically](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#programmatic)
    *   [Exclude matches and globs](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#matchAndGlob)
    *   [Run time](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#run_time)
    *   [Specify frames](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#frames)
    *   [Injecting in related frames](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#injecting-in-related-frames)
*   [Communication with the embedding page](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#host-page-communication)
*   [Stay secure](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#security)

Content scripts are files that run in the context of web pages. By using the standard [Document Object Model](https://www.w3.org/TR/DOM-Level-2-HTML/) (DOM), they are able to read details of the web pages the browser visits, make changes to them, and pass information to their parent extension.

[#](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#capabilities) Understand content script capabilities
--------------------------------------------------------------------------------------------------------------------------

Content scripts can access Chrome APIs used by their parent extension by exchanging [messages](https://developer.chrome.com/docs/extensions/mv3/messaging/) with the extension. They can also access the URL of an extension's file with `chrome.runtime.getURL()` and use the result the same as other URLs.

    // Code for displaying EXTENSION_DIR/images/myimage.png:var imgURL = chrome.runtime.getURL("images/myimage.png");document.getElementById("someImage").src = imgURL;

Additionally, content scripts can access the following chrome APIs directly:

*   [i18n](https://developer.chrome.com/docs/extensions/reference/i18n/)
*   [storage](https://developer.chrome.com/docs/extensions/reference/storage/)
*   [runtime](https://developer.chrome.com/docs/extensions/reference/runtime/):
    *   [connect](https://developer.chrome.com/docs/extensions/reference/runtime#method-connect)
    *   [getManifest](https://developer.chrome.com/docs/extensions/reference/runtime#method-getManifest)
    *   [getURL](https://developer.chrome.com/docs/extensions/reference/runtime#method-getURL)
    *   [id](https://developer.chrome.com/docs/extensions/reference/runtime#property-id)
    *   [onConnect](https://developer.chrome.com/docs/extensions/reference/runtime#event-onConnect)
    *   [onMessage](https://developer.chrome.com/docs/extensions/reference/runtime#event-onMessage)
    *   [sendMessage](https://developer.chrome.com/docs/extensions/reference/runtime#method-sendMessage)

Content scripts are unable to access other APIs directly.

[#](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#isolated_world) Work in isolated worlds
-------------------------------------------------------------------------------------------------------------

Content scripts live in an isolated world, allowing a content script to make changes to its JavaScript environment without conflicting with the page or other extensions' content scripts.

An _isolated world_ is a private execution environment that isn't accessible to the page or other extensions. A practical consequence of this isolation is that JavaScript variables in an extension's content scripts are not visible to the host page or other extensions' content scripts. The concept was originally introduced with the initial launch of Chrome, providing isolation for browser tabs.

An extension may run in a web page with code similar to the example below.

    <html>  <button id="mybutton">click me</button>  <script>    var greeting = "hello, ";    var button = document.getElementById("mybutton");    button.person_name = "Bob";    button.addEventListener("click", () =>      alert(greeting + button.person_name + ".")    , false);  </script></html>

That extension could inject the following content script using one of the techniques outlined in the [Inject scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#functionality) section.

    var greeting = "hola, ";var button = document.getElementById("mybutton");button.person_name = "Roberto";button.addEventListener("click", () =>  alert(greeting + button.person_name + "."), false);

With this change, both alerts appear in sequence when the button is clicked.

Not only does each extension run in its own isolated world, but content scripts and the web page do too. This means that none of these (web page, content scripts, and any running extensions) can access the context and variables of the others.

[#](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#functionality) Inject scripts
---------------------------------------------------------------------------------------------------

Content scripts can be [declared statically](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#static-declarative) or [programmatically injected](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#programmatic).

### [#](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#static-declarative) Inject with static declarations

Use static content script declarations in manifest.json for scripts that should be automatically run on a well known set of pages.

Statically declared scripts are registered in the manifest under the `"content_scripts"` field. They can include JavaScript files, CSS files, or both. All auto-run content scripts must specify [match patterns](https://developer.chrome.com/docs/extensions/mv3/match_patterns/).

    { "name": "My extension", ... "content_scripts": [   {     "matches": ["https://*.nytimes.com/*"],     "css": ["my-styles.css"],     "js": ["content-script.js"]   } ], ...}

Name

Type

Description

`matches`

array of strings

_Required._ Specifies which pages this content script will be injected into. See [Match Patterns](https://developer.chrome.com/docs/extensions/mv3/match_patterns/) for more details on the syntax of these strings and [Match patterns and globs](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#matchAndGlob) for information on how to exclude URLs.

`css`

array of strings

_Optional._ The list of CSS files to be injected into matching pages. These are injected in the order they appear in this array, before any DOM is constructed or displayed for the page.

`js`

array of strings

_Optional._ The list of JavaScript files to be injected into matching pages. These are injected in the order they appear in this array.

`match_about_blank`

boolean

_Optional._ Whether the script should inject into an `about:blank` frame where the parent or opener frame matches one of the patterns declared in `matches`. Defaults to false.

`match_origin_as_fallback`

boolean

_Optional._ Whether the script should inject in frames that were created by a matching origin, but whose URL or origin may not directly match the pattern. These include frames with different schemes, such as `about:`, `data:`, `blob:`, and `filesystem:`. See also [Injecting in related frames](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#injecting-in-related-frames).

### [#](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#programmatic) Inject programmatically

Use programmatic injection for content scripts that need to run in response to events or on specific occasions.

To inject a content script programmatically, your extension needs host permissions for the page it's trying to inject scripts into. Host permissions can either be granted by requesting them as part of your extension's manifest (see [`host_permissions`](https://developer.chrome.com/docs/extensions/reference/permissions/)) or temporarily via [activeTab](https://developer.chrome.com/activeTab/).

Below we'll look at different versions of an activeTab-based extension.

manifest.json:

    {  "name": "My extension",  ...  "permissions": [    "activeTab"  ],  "background": {    "service_worker": "background.js"  }}

Content scripts can be injected as files…

content-script.js:

    document.body.style.backgroundColor = 'orange';

background.js:

    chrome.action.onClicked.addListener((tab) => {  chrome.scripting.executeScript({    target: { tabId: tab.id },    files: ['content-script.js']  });});

…or a function body can be injected and executed as a content script.

background.js:

    function injectedFunction() {  document.body.style.backgroundColor = 'orange';}chrome.action.onClicked.addListener((tab) => {  chrome.scripting.executeScript({    target: { tabId: tab.id },    func: injectedFunction  });});

Be aware that the injected function is a copy of the function referenced in the `chrome.scripting.executeScript` call, not the original function itself. As a result, the function's body must be self contained; references to variables outside of the function will cause the content script to throw a [`ReferenceError`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError).

### [#](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#matchAndGlob) Exclude matches and globs

Specified page matching is customizable by including the following fields in a declarative registration.

Name

Type

Description

`exclude_matches`

array of strings

_Optional._ Excludes pages that this content script would otherwise be injected into. See [Match Patterns](https://developer.chrome.com/docs/extensions/mv3/content_scripts/match_patterns) for more details on the syntax of these strings.

`include_globs`

array of strings

_Optional._ Applied after `matches` to include only those URLs that also match this glob. Intended to emulate the [`@include`](https://wiki.greasespot.net/Metadata_Block#.40include) Greasemonkey keyword.

`exclude_globs`

array of string

_Optional._ Applied after `matches` to exclude URLs that match this glob. Intended to emulate the [`@exclude`](https://wiki.greasespot.net/Metadata_Block#.40exclude) Greasemonkey keyword.

The content script will be injected into a page if both of the following are true:

*   Its URL matches any `matches` pattern and any `include_globs` pattern
*   The URL doesn't also match an `exclude_matches` or `exclude_globs` pattern. Because the `matches` property is required, `exclude_matches`, `include_globs`, and `exclude_globs` can only be used to limit which pages will be affected.

The following extension injects the content script into **https://www.nytimes.com/ health** but not into **https://www.nytimes.com/ business** .

    {  "name": "My extension",  ...  "content_scripts": [    {      "matches": ["https://*.nytimes.com/*"],      "exclude_matches": ["*://*/*business*"],      "js": ["contentScript.js"]    }  ],  ...}

    chrome.scripting.registerContentScript({  id: 1,  matches: ["https://*.nytimes.com/*"],  exclude_matches: ["*://*/*business*"],  js: ["contentScript.js"]});

Glob properties follow a different, more flexible syntax than [match patterns](https://developer.chrome.com/docs/extensions/mv3/match_patterns/). Acceptable glob strings are URLs that may contain "wildcard" asterisks and question marks. The asterisk **\*** matches any string of any length, including the empty string, while the question mark **?** matches any single character.

For example, the glob **https://???.example.com/foo/\*** matches any of the following:

*   **https://www.example.com/foo/bar**
*   **https://the.example.com/foo/**

However, it does _not_ match the following:

*   **https://my.example.com/foo/bar**
*   **https://example.com/foo/**
*   **https://www.example.com/foo**

This extension injects the content script into **https://www.nytimes.com/arts/index.html** and **https://www.nytimes.com/jobs/index.html**, but not into **https://www.nytimes.com/sports/index.html**:

    {  "name": "My extension",  ...  "content_scripts": [    {      "matches": ["https://*.nytimes.com/*"],      "include_globs": ["*nytimes.com/???s/*"],      "js": ["contentScript.js"]    }  ],  ...}

    chrome.scripting.registerContentScript({  id: 1,  matches: ['https://*.nytimes.com/*'],  include_globs: ['*nytimes.com/???s/*'],  js: ['contentScript.js']});

This extension injects the content script into **https://history.nytimes.com** and **https://.nytimes.com/history**, but not into **https://science.nytimes.com** or **https://www.nytimes.com/science**:

    {  "name": "My extension",  ...  "content_scripts": [    {      "matches": ["https://*.nytimes.com/*"],      "exclude_globs": ["*science*"],      "js": ["contentScript.js"]    }  ],  ...}

    chrome.scripting.registerContentScript({  id: 1,  matches: ['https://*.nytimes.com/*'],  exclude_globs: ['*science*'],  js: ['contentScript.js']});

One, all, or some of these can be included to achieve the correct scope.

    {  "name": "My extension",  ...  "content_scripts": [    {      "matches": ["https://*.nytimes.com/*"],      "exclude_matches": ["*://*/*business*"],      "include_globs": ["*nytimes.com/???s/*"],      "exclude_globs": ["*science*"],      "js": ["contentScript.js"]    }  ],  ...}

    chrome.scripting.registerContentScript({  matches: ['https://*.nytimes.com/*'],  exclude_matches: ['*://*/*business*'],  include_globs: ['*nytimes.com/???s/*'],  exclude_globs: ['*science*'],  js: ['contentScript.js']});

### [#](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#run_time) Run time

The `run_at` field controls when JavaScript files are injected into the web page. The preferred and default value is `"document_idle"`, but you can also specify `"document_start"` or `"document_end"` if needed.

    {  "name": "My extension",  ...  "content_scripts": [    {      "matches": ["https://*.nytimes.com/*"],      "run_at": "document_idle",      "js": ["contentScript.js"]    }  ],  ...}

    chrome.scripting.registerContentScript({  matches: ['https://*.nytimes.com/*'],  run_at: 'document_idle',  js: ['contentScript.js']});

Name

Type

Description

`document_idle`

string

_Preferred._ Use `"document_idle"` whenever possible.  
  
The browser chooses a time to inject scripts between `"document_end"` and immediately after the [`window.onload`](https://www.whatwg.org/specs/web-apps/current-work/#handler-onload) event fires. The exact moment of injection depends on how complex the document is and how long it is taking to load, and is optimized for page load speed.  
  
Content scripts running at `"document_idle"` do not need to listen for the `window.onload` event, they are guaranteed to run after the DOM is complete. If a script definitely needs to run after `window.onload`, the extension can check if `onload` has already fired by using the [`document.readyState`](https://www.whatwg.org/specs/web-apps/current-work/#dom-document-readystate) property.

`document_start`

string

Scripts are injected after any files from `css`, but before any other DOM is constructed or any other script is run.

`document_end`

string

Scripts are injected immediately after the DOM is complete, but before subresources like images and frames have loaded.

### [#](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#frames) Specify frames

The `"all_frames"` field allows the extension to specify if JavaScript and CSS files should be injected into all frames matching the specified URL requirements or only into the topmost frame in a tab.

    {  "name": "My extension",  ...  "content_scripts": [    {      "matches": ["https://*.nytimes.com/*"],      "all_frames": true,      "js": ["contentScript.js"]    }  ],  ...}

    chrome.scripting.registerContentScript({  matches: ['https://*.nytimes.com/*'],  all_frames: true,  js: ['contentScript.js']});

Name

Type

Description

`all_frames`

boolean

_Optional._ Defaults to `false`, meaning that only the top frame is matched.  
  
If specified `true`, it will inject into all frames, even if the frame is not the topmost frame in the tab. Each frame is checked independently for URL requirements, it won't inject into child frames if the URL requirements are not met.

### [#](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#injecting-in-related-frames) Injecting in related frames

Extensions may want to run scripts in frames that are related to a matching frame, but don't themselves match. A common scenario when this is the case is for frames with URLs that were created by a matching frame, but whose URLs don't themselves match the script's specified patterns.

This is the case when an extension wants to inject in frames with URLs that have `about:`, `data:`, `blob:`, and `filesystem:` schemes. In these cases, the URL will not match the content script's pattern (and, in the case of `about:` and `data:`, do not even include the parent URL or origin in the URL at all, as in `about:blank` or `data:text/html,<html>Hello, World!</html>`). However, these frames can still be associated with the creating frame.

To inject into these frames, extensions can specify the `"match_origin_as_fallback"` property on a content script specification in the manifest.

    {  "name": "My extension",  ...  "content_scripts": [    {      "matches": ["https://*.google.com/*"],      "match_origin_as_fallback": true,      "js": ["contentScript.js"]    }  ],  ...}

When specified and set to `true`, Chrome will look at the origin of the initiator of the frame to determine whether the frame matches, rather than at the URL of the frame itself. Note that this might also be different than the target frame's _origin_ (e.g., `data:` URLs have a null origin).

The initiator of the frame is the frame that created or navigated the target frame. While this is commonly the direct parent or opener, it may not be (as in the case of a frame navigating an iframe within an iframe).

Because this compares the _origin_ of the initiator frame, the initiator frame could be on at any path from that origin. To make this implication clear, Chrome requires any content scripts specified with `"match_origin_as_fallback"` set to `true` to also specify a path of `*`.

When both `"match_origin_as_fallback"` and `"match_about_blank"` are specified, `"match_origin_as_fallback"` takes priority.

This property is only available in extensions running manifest version 3 or higher.

[#](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#host-page-communication) Communication with the embedding page
------------------------------------------------------------------------------------------------------------------------------------

Although the execution environments of content scripts and the pages that host them are isolated from each other, they share access to the page's DOM. If the page wishes to communicate with the content script, or with the extension via the content script, it must do so through the shared DOM.

An example can be accomplished using [`window.postMessage`](https://developer.mozilla.org/docs/Web/API/Window/postMessage):

    var port = chrome.runtime.connect();window.addEventListener("message", (event) => {  // We only accept messages from ourselves  if (event.source != window) {    return;  }  if (event.data.type && (event.data.type == "FROM_PAGE")) {    console.log("Content script received: " + event.data.text);    port.postMessage(event.data.text);  }}, false);

    document.getElementById("theButton").addEventListener("click", () => {  window.postMessage({ type: "FROM_PAGE", text: "Hello from the webpage!" }, "*");}, false);

The non-extension page, example.html, posts messages to itself. This message is intercepted and inspected by the content script and then posted to the extension process. In this way, the page establishes a line of communication to the extension process. The reverse is possible through similar means.

[#](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#security) Stay secure
-------------------------------------------------------------------------------------------

While isolated worlds provide a layer of protection, using content scripts can create vulnerabilities in an extension and the web page. If the content script receives content from a separate website, such as making an [`XMLHttpRequest`](https://developer.chrome.com/docs/extensions/mv3/xhr/), be careful to filter content [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks before injecting it. Only communicate over HTTPS in order to avoid ["man-in-the-middle"](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) attacks.

Be sure to filter for malicious web pages. For example, the following patterns are dangerous, and disallowed in Manifest V3:

Don't

    const data = document.getElementById("json-data")// WARNING! Might be evaluating an evil script!const parsed = eval("(" + data + ")")

Don't

    const elmt_id = ...// WARNING! elmt_id might be "); ... evil script ... //"!window.setTimeout("animate(" + elmt_id + ")", 200);

Instead, prefer safer APIs that do not run scripts:

Do

    const data = document.getElementById("json-data")// JSON.parse does not evaluate the attacker's scripts.const parsed = JSON.parse(data);

Do

    const elmt_id = ...// The closure form of setTimeout does not evaluate scripts.window.setTimeout(() => animate(elmt_id), 200);

Updated on Monday, August 2, 2021 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/content_scripts/index.md)

