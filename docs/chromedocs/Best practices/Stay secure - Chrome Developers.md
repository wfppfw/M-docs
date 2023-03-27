- [Protect developer accounts](https://developer.chrome.com/docs/extensions/mv3/security/#PDA)
  - [Keep groups selective](https://developer.chrome.com/docs/extensions/mv3/security/#group_publishing)
- [Never use HTTP, Ever](https://developer.chrome.com/docs/extensions/mv3/security/#https)
- [Request minimal permissions](https://developer.chrome.com/docs/extensions/mv3/security/#permissions)
  - [Cross-origin XMLHttpRequest](https://developer.chrome.com/docs/extensions/mv3/security/#xhr)
- [Limit manifest fields](https://developer.chrome.com/docs/extensions/mv3/security/#manifest_fields)
  - [Externally connectable](https://developer.chrome.com/docs/extensions/mv3/security/#externally_connectable)
  - [Web-accessible resources](https://developer.chrome.com/docs/extensions/mv3/security/#web_accessible_resources)
- [Include an explicit content security policy](https://developer.chrome.com/docs/extensions/mv3/security/#content_security_policy)
- [Avoid executable APIs](https://developer.chrome.com/docs/extensions/mv3/security/#avoid)
  - [document.write() and innerHTML](https://developer.chrome.com/docs/extensions/mv3/security/#document_write)
  - [eval()](https://developer.chrome.com/docs/extensions/mv3/security/#eval)
- [Use content scripts carefully](https://developer.chrome.com/docs/extensions/mv3/security/#content_scripts)
- [Register and sanitize inputs](https://developer.chrome.com/docs/extensions/mv3/security/#sanitize)

# Stay secure

Published on Tuesday, March 6, 2018 • Updated on Wednesday, July 17, 2019

- [Protect developer accounts](https://developer.chrome.com/docs/extensions/mv3/security/#PDA)
  - [Keep groups selective](https://developer.chrome.com/docs/extensions/mv3/security/#group_publishing)
- [Never use HTTP, Ever](https://developer.chrome.com/docs/extensions/mv3/security/#https)
- [Request minimal permissions](https://developer.chrome.com/docs/extensions/mv3/security/#permissions)
  - [Cross-origin XMLHttpRequest](https://developer.chrome.com/docs/extensions/mv3/security/#xhr)
- [Limit manifest fields](https://developer.chrome.com/docs/extensions/mv3/security/#manifest_fields)
  - [Externally connectable](https://developer.chrome.com/docs/extensions/mv3/security/#externally_connectable)
  - [Web-accessible resources](https://developer.chrome.com/docs/extensions/mv3/security/#web_accessible_resources)
- [Include an explicit content security policy](https://developer.chrome.com/docs/extensions/mv3/security/#content_security_policy)
- [Avoid executable APIs](https://developer.chrome.com/docs/extensions/mv3/security/#avoid)
  - [document.write() and innerHTML](https://developer.chrome.com/docs/extensions/mv3/security/#document_write)
  - [eval()](https://developer.chrome.com/docs/extensions/mv3/security/#eval)
- [Use content scripts carefully](https://developer.chrome.com/docs/extensions/mv3/security/#content_scripts)
- [Register and sanitize inputs](https://developer.chrome.com/docs/extensions/mv3/security/#sanitize)

Extensions have access to special privileges within the browser, making them an appealing target for attackers. If an extension is compromised, _every_ user of that extension becomes vulnerable to malicious and unwanted intrusion. Keep an extension secure and its users protected by incorporating these practices.

## [#](https://developer.chrome.com/docs/extensions/mv3/security/#PDA) Protect developer accounts

Extension code is uploaded and updated through Google accounts. If developers' accounts are compromised, an attacker could push malicious code directly to all users. Protect these accounts by creating specifically developer accounts and enabling [two-factor authentication](https://support.google.com/accounts/answer/185839?hl=en) , preferably with a [security key](https://support.google.com/accounts/answer/6103523) .

### [#](https://developer.chrome.com/docs/extensions/mv3/security/#group_publishing) Keep groups selective

If using [group publishing](https://developer.chrome.com/docs/webstore/group-publishers/), keep the group confined to trusted developers. Do not accept membership requests from unknown persons.

## [#](https://developer.chrome.com/docs/extensions/mv3/security/#https) Never use HTTP, Ever

When requesting or sending data, avoid an HTTP connection. Assume that any HTTP connections will have eavesdroppers or contain modifications. HTTPS should always be preferred, as it has built-in security circumventing most [man-in-the-middle attacks](https://www.owasp.org/index.php/Man-in-the-middle_attack).

## [#](https://developer.chrome.com/docs/extensions/mv3/security/#permissions) Request minimal permissions

The Chrome browser limits an extension's access to privileges that have been explicitly requested in the [manifest](https://developer.chrome.com/docs/extensions/mv3/manifest/). Extensions should minimize their permissions by only registering APIs and websites they depend on. Arbitrary code should be kept to a minimum.

Limiting an extensions privileges limits what a potential attacker can exploit.

### [#](https://developer.chrome.com/docs/extensions/mv3/security/#xhr) Cross-origin XMLHttpRequest

An extension can only use [XMLHttpRequest](https://developer.chrome.com/docs/extensions/mv3/xhr/) to get resources from itself and from domains specified in the permissions.

    {  "name": "Very Secure Extension",  "version": "1.0",  "description": "Example of a Secure Extension",  "permissions": [    "https://developer.chrome.com/*",    "https://*.google.com/*"  ],  "manifest_version": 2}

This extension requests access to anything on developer.chrome.com and subdomains of Google by listing `"https://developer.chrome.com/*"` and `"https://*.google.com/*"` in the permissions. If the extension were compromised, it would still only have permission to interact with websites that meet the [match pattern](https://developer.chrome.com/docs/extensions/mv3/match_patterns/). The attacker would not be able to access `"https://user_bank_info.com"` or interact with `"https://malicious_website.com"`.

## [#](https://developer.chrome.com/docs/extensions/mv3/security/#manifest_fields) Limit manifest fields

Including unnecessary registrations in the manifest creates vulnerabilities and makes an extension more visible. Limit manifest fields to those the extension relies on and give specific field registration.

### [#](https://developer.chrome.com/docs/extensions/mv3/security/#externally_connectable) Externally connectable

Use the [`externally_connectable`](https://developer.chrome.com/docs/extensions/mv3/manifest/externally_connectable/) field to declare which external extensions and web pages the extension will exchange information with. Restrict who the extension can externally connect with to trusted sources.

    {  "name": "Super Safe Extension",  "externally_connectable": {    "ids": [      "iamafriendlyextensionhereisdatas"    ],    "matches": [      "https://developer.chrome.com/*",      "https://*.google.com/*"    ],    "accepts_tls_channel_id": false  },  ...}

### [#](https://developer.chrome.com/docs/extensions/mv3/security/#web_accessible_resources) Web-accessible resources

Making resources accessible by the web, under the [`web_accessible_resources`](https://developer.chrome.com/docs/extensions/mv3/manifest/web_accessible_resources/) will make an extension detectable by websites and attackers.

    {  ...  "web_accessible_resources": [    "images/*.png",    "style/secure_extension.css",    "script/secure_extension.js"  ],  ...}

The more web accessible resources available, the more avenues a potential attacker can exploit. Keep these files to a minimum.

## [#](https://developer.chrome.com/docs/extensions/mv3/security/#content_security_policy) Include an explicit content security policy

Include a [content security policy](https://developer.chrome.com/docs/apps/contentSecurityPolicy/) for the extension in the manifest to prevent cross-site scripting attacks. If the extension only loads resources from itself register the following:

    {  "name": "Very Secure Extension",  "version": "1.0",  "description": "Example of a Secure Extension",  "content_security_policy": "default-src 'self'; frame-ancestors 'none';",  "manifest_version": 2}

If the extension needs to include scripts from specific hosts, they can be included:

    {  "name": "Very Secure Extension",  "version": "1.0",  "description": "Example of a Secure Extension",  "content_security_policy": "default-src 'self' https://extension.resource.com; frame-ancestors 'none';",  "manifest_version": 2}

## [#](https://developer.chrome.com/docs/extensions/mv3/security/#avoid) Avoid executable APIs

APIs that execute code should be replaced with safer alternatives.

### [#](https://developer.chrome.com/docs/extensions/mv3/security/#document_write) document.write() and innerHTML

While it may be simpler to dynamically create HTML elements with `document.write()` and `innerHTML`, it leaves the extension, and web pages the extension depends on, open to attackers inserting malicious scripts. Instead, manually create DOM nodes and use `innerText` to insert dynamic content.

    function constructDOM() {  let newTitle = document.createElement('h1');  newTitle.innerText = host;  document.appendChild(newTitle);}

### [#](https://developer.chrome.com/docs/extensions/mv3/security/#eval) eval()

Avoid using `eval()` whenever possible to prevent attacks, as `eval()` will execute any code passed into it, which may be malicious.

    var xhr = new XMLHttpRequest();xhr.open("GET", "https://api.example.com/data.json", true);xhr.onreadystatechange = function() {  if (xhr.readyState == 4) {    // WARNING! Might be evaluating an evil script!    var resp = eval("(" + xhr.responseText + ")");    ...  }}xhr.send();

Instead, prefer safer, and faster, methods such as `JSON.parse()`

    var xhr = new XMLHttpRequest();xhr.open("GET", "https://api.example.com/data.json", true);xhr.onreadystatechange = function() {  if (xhr.readyState == 4) {    // JSON.parse does not evaluate the attacker's scripts.    var resp = JSON.parse(xhr.responseText);  }}xhr.send();

## [#](https://developer.chrome.com/docs/extensions/mv3/security/#content_scripts) Use content scripts carefully

While [content scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/) live in an [isolated world](https://developer.chrome.com/docs/extensions/mv3/content_scripts#isolated_world), they are not immune from attacks:

- Content scripts are the only part of an extension that interacts directly with the web page. Because of this, hostile web pages may manipulate parts of the DOM the content script depends on, or exploit surprising web standard behavior, such as [named items](https://html.spec.whatwg.org/#dom-window-nameditem).
- To interact with DOM of web pages, content scripts need to execute in the same renderer process as the web page. This makes content scripts vulnerable to leaking data via side channel attacks (e.g., [Spectre](https://spectreattack.com/)), and to being taken over by an attacker if a malicious web page compromises the renderer process.

Sensitive work should be performed in a dedicated process, such as the extension's [background script](https://developer.chrome.com/docs/extensions/mv3/background_pages/). Avoid accidentally exposing extension privileges to content scripts:

- Assume that [messages from a content script](https://developer.chrome.com/docs/extensions/mv3/messaging#content-scripts-are-less-trustworthy) might have been crafted by an attacker (e.g. [validate and sanitize](https://developer.chrome.com/docs/extensions/mv3/security/#sanitize) all input and protect your scripts from [cross-site scripting](https://developer.chrome.com/docs/extensions/mv3/messaging#cross-site-scripting)).
- Assume any data sent to the content script might leak to the web page. Do not send sensitive data (e.g. secrets from the extension, data from other web origins, browsing history) to content scripts.
- Limit the scope of privileged actions that can be triggered by content scripts. Do not allow content scripts to [trigger requests to arbitrary URLs](https://developer.chrome.com/docs/extensions/mv3/xhr#xhr-vs-content-scripts) or pass arbitrary arguments to extension APIs (e.g., do not allow passing arbitrary URLs to [`fetch`](https://developer.mozilla.org/docs/Web/API/Fetch_API) or [`chrome.tabs.create`](https://developer.chrome.com/docs/extensions/reference/tabs#method-create) API).

## [#](https://developer.chrome.com/docs/extensions/mv3/security/#sanitize) Register and sanitize inputs

Safeguard an extension from malicious scripts by limiting listeners to only what the extension is expecting, validating the senders of incoming data, and sanitizing all inputs.

An extension should only register for [`runtime.onRequestExternal`](https://developer.chrome.com/docs/extensions/reference/runtime#event-onMessageExternal), if it is expecting communication from an external website or extension. Always validate that the sender matches a trusted source.

    // The ID of an external extensionconst kFriendlyExtensionId = "iamafriendlyextensionhereisdatas";chrome.runtime.onMessageExternal.addListener(  function(request, sender, sendResponse) {    if (sender.id === kFriendlyExtensionId)      doSomething();});

Even messages via [runtime.onMessage](https://developer.chrome.com/docs/extensions/reference/runtime#event-onMessage) event from the extension itself should be scrutinized to ensure the [MessageSender](https://developer.chrome.com/docs/extensions/reference/runtime#type-MessageSender) is not from a compromised [content script](https://developer.chrome.com/docs/extensions/mv3/content_scripts/).

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {  if (request.allowedAction)    console.log("This is an allowed action.");});

Prevent an extension from executing an attacker's script by sanitizing user inputs and incoming data, even from the extension itself and approved sources. [Avoid executable APIs](https://developer.chrome.com/docs/extensions/mv3/security#avoid).

    function sanitizeInput(input) {    return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');}

Updated on Wednesday, July 17, 2019 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/security/index.md)
