

*   [Extension origin](https://developer.chrome.com/docs/extensions/mv3/xhr/#extension-origin)
*   [Requesting cross-origin permissions](https://developer.chrome.com/docs/extensions/mv3/xhr/#requesting-permission)
*   [Security considerations](https://developer.chrome.com/docs/extensions/mv3/xhr/#security-considerations)
    *   [Avoiding cross-site scripting vulnerabilities](https://developer.chrome.com/docs/extensions/mv3/xhr/#xss)
    *   [Limiting content script access to cross-origin requests](https://developer.chrome.com/docs/extensions/mv3/xhr/#xhr-vs-content-scripts)
    *   [Preferring HTTPS over HTTP](https://developer.chrome.com/docs/extensions/mv3/xhr/#http-man-in-the-middle)
    *   [Adjusting the content security policy](https://developer.chrome.com/docs/extensions/mv3/xhr/#interaction-with-csp)

Cross-origin XMLHttpRequest
===========================

Published on Tuesday, September 18, 2012 • Updated on Monday, March 9, 2020



*   [Extension origin](https://developer.chrome.com/docs/extensions/mv3/xhr/#extension-origin)
*   [Requesting cross-origin permissions](https://developer.chrome.com/docs/extensions/mv3/xhr/#requesting-permission)
*   [Security considerations](https://developer.chrome.com/docs/extensions/mv3/xhr/#security-considerations)
    *   [Avoiding cross-site scripting vulnerabilities](https://developer.chrome.com/docs/extensions/mv3/xhr/#xss)
    *   [Limiting content script access to cross-origin requests](https://developer.chrome.com/docs/extensions/mv3/xhr/#xhr-vs-content-scripts)
    *   [Preferring HTTPS over HTTP](https://developer.chrome.com/docs/extensions/mv3/xhr/#http-man-in-the-middle)
    *   [Adjusting the content security policy](https://developer.chrome.com/docs/extensions/mv3/xhr/#interaction-with-csp)

Warning

In Manifest V3, `XMLHttpRequest` is not supported in background pages (provided by Service Workers). Please consider using its modern replacement, `fetch()`.

Regular web pages can use the [`XMLHttpRequest`](https://www.w3.org/TR/XMLHttpRequest/) object to send and receive data from remote servers, but they're limited by the [same origin policy](https://en.wikipedia.org/wiki/Same_origin_policy). [Content scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/) initiate requests on behalf of the web origin that the content script has been injected into and therefore content scripts are also subject to the [same origin policy](https://en.wikipedia.org/wiki/Same_origin_policy). (Content scripts have been subject to [CORB since Chrome 73 and CORS since Chrome 83](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches).) Extension origins aren't so limited - a script executing in an extension's background page or foreground tab can talk to remote servers outside of its origin, as long as the extension requests cross-origin permissions.

[#](https://developer.chrome.com/docs/extensions/mv3/xhr/#extension-origin) Extension origin
--------------------------------------------------------------------------------------------

Each running extension exists within its own separate security origin. Without requesting additional privileges, the extension can use `XMLHttpRequest` to get resources within its installation. For example, if an extension contains a JSON configuration file called `config.json`, in a `config_resources` folder, the extension can retrieve the file's contents like this:

    var xhr = new XMLHttpRequest();xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.xhr.open("GET", chrome.extension.getURL('/config_resources/config.json'), true);xhr.send();

If the extension attempts to use a security origin other than itself, say https://www.google.com, the browser disallows it unless the extension has requested the appropriate cross-origin permissions.

[#](https://developer.chrome.com/docs/extensions/mv3/xhr/#requesting-permission) Requesting cross-origin permissions
--------------------------------------------------------------------------------------------------------------------

By adding hosts or host match patterns (or both) to the [host\_permissions](https://developer.chrome.com/docs/extensions/mv3/declare_permissions/) section of the [manifest](https://developer.chrome.com/docs/extensions/mv3/manifest/) file, the extension can request access to remote servers outside of its origin.

    {  "name": "My extension",  ...  "host_permissions": [    "https://www.google.com/"  ],  ...}

Cross-origin permission values can be fully qualified host names, like these:

*   "https://www.google.com/"
*   "https://www.gmail.com/"

Or they can be match patterns, like these:

*   "https://\*.google.com/"
*   "https://\*/"

A match pattern of "https://\*/" allows HTTPS access to all reachable domains. Note that here, match patterns are similar to [content script match patterns](https://developer.chrome.com/docs/extensions/mv3/match_patterns/), but any path information following the host is ignored.

Also note that access is granted both by host and by scheme. If an extension wants both secure and non-secure HTTP access to a given host or set of hosts, it must declare the permissions separately:

    "host_permissions": [  "http://www.google.com/",  "https://www.google.com/"]

[#](https://developer.chrome.com/docs/extensions/mv3/xhr/#security-considerations) Security considerations
----------------------------------------------------------------------------------------------------------

### [#](https://developer.chrome.com/docs/extensions/mv3/xhr/#xss) Avoiding cross-site scripting vulnerabilities

When using resources retrieved via `XMLHttpRequest`, your background page should be careful not to fall victim to [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting). Specifically, avoid using dangerous APIs such as the below:

    var xhr = new XMLHttpRequest();xhr.open("GET", "https://api.example.com/data.json", true);xhr.onreadystatechange = function() {  if (xhr.readyState == 4) {    // WARNING! Might be evaluating an evil script!    var resp = eval("(" + xhr.responseText + ")");    ...  }}xhr.send();

    var xhr = new XMLHttpRequest();xhr.open("GET", "https://api.example.com/data.json", true);xhr.onreadystatechange = function() {  if (xhr.readyState == 4) {    // WARNING! Might be injecting a malicious script!    document.getElementById("resp").innerHTML = xhr.responseText;    ...  }}xhr.send();

Instead, prefer safer APIs that do not run scripts:

    var xhr = new XMLHttpRequest();xhr.open("GET", "https://api.example.com/data.json", true);xhr.onreadystatechange = function() {  if (xhr.readyState == 4) {    // JSON.parse does not evaluate the attacker's scripts.    var resp = JSON.parse(xhr.responseText);  }}xhr.send();

    var xhr = new XMLHttpRequest();xhr.open("GET", "https://api.example.com/data.json", true);xhr.onreadystatechange = function() {  if (xhr.readyState == 4) {    // textContent does not let the attacker inject HTML elements.    document.getElementById("resp").textContent = xhr.responseText;  }}xhr.send();

### [#](https://developer.chrome.com/docs/extensions/mv3/xhr/#xhr-vs-content-scripts) Limiting content script access to cross-origin requests

When performing cross-origin requests on behalf of a content script, be careful to [guard against malicious web pages](https://developer.chrome.com/docs/extensions/mv3/security#content_scripts) that might try to impersonate a content script. In particular, do not allow content scripts to request an arbitrary URL.

Consider an example where an extension performs a cross-origin request to let a content script discover the price of an item. One (insecure) approach would be to have the content script specify the exact resource to be fetched by the background page.

    chrome.runtime.onMessage.addListener(    function(request, sender, sendResponse) {      if (request.contentScriptQuery == 'fetchUrl') {        // WARNING: SECURITY PROBLEM - a malicious web page may abuse        // the message handler to get access to arbitrary cross-origin        // resources.        fetch(request.url)            .then(response => response.text())            .then(text => sendResponse(text))            .catch(error => ...)        return true;  // Will respond asynchronously.      }    });

    chrome.runtime.sendMessage(    {contentScriptQuery: 'fetchUrl',     url: 'https://another-site.com/price-query?itemId=' +              encodeURIComponent(request.itemId)},    response => parsePrice(response.text()));

In the approach above, the content script can ask the extension to fetch any URL that the extension has access to. A malicious web page may be able to forge such messages and trick the extension into giving access to cross-origin resources.

Instead, design message handlers that limit the resources that can be fetched. Below, only the `itemId` is provided by the content script, and not the full URL.

    chrome.runtime.onMessage.addListener(    function(request, sender, sendResponse) {      if (request.contentScriptQuery == 'queryPrice') {        var url = 'https://another-site.com/price-query?itemId=' +            encodeURIComponent(request.itemId);        fetch(url)            .then(response => response.text())            .then(text => parsePrice(text))            .then(price => sendResponse(price))            .catch(error => ...)        return true;  // Will respond asynchronously.      }    });

    chrome.runtime.sendMessage(    {contentScriptQuery: 'queryPrice', itemId: 12345},    price => ...);

### [#](https://developer.chrome.com/docs/extensions/mv3/xhr/#http-man-in-the-middle) Preferring HTTPS over HTTP

Additionally, be especially careful of resources retrieved via HTTP. If your extension is used on a hostile network, an network attacker (aka a ["man-in-the-middle"](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)) could modify the response and, potentially, attack your extension. Instead, prefer HTTPS whenever possible.

### [#](https://developer.chrome.com/docs/extensions/mv3/xhr/#interaction-with-csp) Adjusting the content security policy

If you modify the default [Content Security Policy](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/#content-security-policy) for your extension by adding a `content_security_policy` attribute to your manifest, you'll need to ensure that any hosts to which you'd like to connect are allowed. While the default policy doesn't restrict connections to hosts, be careful when explicitly adding either the `connect-src` or `default-src` directives.

Updated on Monday, March 9, 2020 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/xhr/index.md)

