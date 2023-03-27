

*   [Why sandbox?](https://developer.chrome.com/docs/extensions/mv3/sandboxingEval/#why_sandbox)
*   [Creating and using a sandbox.](https://developer.chrome.com/docs/extensions/mv3/sandboxingEval/#creating_and_using)
    *   [List files in manifest](https://developer.chrome.com/docs/extensions/mv3/sandboxingEval/#list_files)
    *   [Load the sandboxed file](https://developer.chrome.com/docs/extensions/mv3/sandboxingEval/#load_file)
    *   [Do something dangerous](https://developer.chrome.com/docs/extensions/mv3/sandboxingEval/#do_something)
    *   [Pass the result back](https://developer.chrome.com/docs/extensions/mv3/sandboxingEval/#pass_result)

Using eval in Chrome extensions
===============================

Published on Tuesday, September 18, 2012 • Updated on Thursday, May 22, 2014



*   [Why sandbox?](https://developer.chrome.com/docs/extensions/mv3/sandboxingEval/#why_sandbox)
*   [Creating and using a sandbox.](https://developer.chrome.com/docs/extensions/mv3/sandboxingEval/#creating_and_using)
    *   [List files in manifest](https://developer.chrome.com/docs/extensions/mv3/sandboxingEval/#list_files)
    *   [Load the sandboxed file](https://developer.chrome.com/docs/extensions/mv3/sandboxingEval/#load_file)
    *   [Do something dangerous](https://developer.chrome.com/docs/extensions/mv3/sandboxingEval/#do_something)
    *   [Pass the result back](https://developer.chrome.com/docs/extensions/mv3/sandboxingEval/#pass_result)

Caution

This page was migrated directly from the Manifest V2 documentation set. It has not yet been validated for compliance with Manifest V3.

Chrome's extension system enforces a fairly strict default [**Content Security Policy (CSP)**](https://developer.chrome.com/docs/extensions/mv3/contentSecurityPolicy/). The policy restrictions are straightforward: script must be moved out-of-line into separate JavaScript files, inline event handlers must be converted to use `addEventListener`, and `eval()` is disabled.

We recognize, however, that a variety of libraries use `eval()` and `eval`\-like constructs such as `new Function()` for performance optimization and ease of expression. Templating libraries are especially prone to this style of implementation. While some (like [Angular.js](https://angularjs.org/)) support CSP out of the box, many popular frameworks haven't yet updated to a mechanism that is compatible with extensions' `eval`\-less world. Removing support for that functionality has therefore proven [more problematic than expected](https://crbug.com/107538) for developers.

This document introduces sandboxing as a safe mechanism to include these libraries in your projects without compromising on security.

[#](https://developer.chrome.com/docs/extensions/mv3/sandboxingEval/#why_sandbox) Why sandbox?
----------------------------------------------------------------------------------------------

`eval` is dangerous inside an extension because the code it executes has access to everything in the extension's high-permission environment. A slew of powerful `chrome.*` APIs are available that could severely impact a user's security and privacy; simple data exfiltration is the least of our worries. The solution on offer is a sandbox in which `eval` can execute code without access either to the extension's data or the extension's high-value APIs. No data, no APIs, no problem.

We accomplish this by listing specific HTML files inside the extension package as being sandboxed. Whenever a sandboxed page is loaded, it will be moved to a [unique origin](https://www.whatwg.org/specs/web-apps/current-work/multipage/origin-0.html#sandboxed-origin-browsing-context-flag), and will be denied access to `chrome.*` APIs. If we load this sandboxed page into our extension via an `iframe`, we can pass it messages, let it act upon those messages in some way, and wait for it to pass us back a result. This simple messaging mechanism gives us everything we need to safely include `eval`\-driven code in our extension's workflow.

[#](https://developer.chrome.com/docs/extensions/mv3/sandboxingEval/#creating_and_using) Creating and using a sandbox.
----------------------------------------------------------------------------------------------------------------------

If you'd like to dive straight into code, please grab the [sandboxing sample extension and take off](https://developer.chrome.com/docs/extensions/mv3/samples#sandboxed-frame). It's a working example of a tiny messaging API built on top of the [Handlebars](https://handlebarsjs.com/) templating library, and it should give you everything you need to get going. For those of you who'd like a little more explanation, let's walk through that sample together here.

### [#](https://developer.chrome.com/docs/extensions/mv3/sandboxingEval/#list_files) List files in manifest

Each file that ought to be run inside a sandbox must be listed in the extension manifest by adding a `sandbox` property. This is a critical step, and it's easy to forget, so please double check that your sandboxed file is listed in the manifest. In this sample, we're sandboxing the file cleverly named "sandbox.html". The manifest entry looks like this:

    {  ...,  "sandbox": {     "pages": ["sandbox.html"]  },  ...}

### [#](https://developer.chrome.com/docs/extensions/mv3/sandboxingEval/#load_file) Load the sandboxed file

In order to do something interesting with the sandboxed file, we need to load it in a context where it can be addressed by the extension's code. Here, [sandbox.html](https://developer.chrome.com/docs/extensions/examples/howto/sandbox/sandbox.html) has been loaded into the extension's [Event Page](https://developer.chrome.com/docs/extensions/mv3/event_pages/) ([eventpage.html](https://developer.chrome.com/docs/extensions/examples/howto/sandbox/eventpage.html)) via an `iframe`. [eventpage.js](https://developer.chrome.com/docs/extensions/examples/howto/sandbox/eventpage.js) contains code that sends a message into the sandbox whenever the browser action is clicked by finding the `iframe` on the page, and executing the `postMessage` method on its `contentWindow`. The message is an object containing two properties: `context` and `command`. We'll dive into both in a moment.

    chrome.browserAction.onClicked.addListener(function() { var iframe = document.getElementById('theFrame'); var message = {   command: 'render',   context: {thing: 'world'} }; iframe.contentWindow.postMessage(message, '*');});

For general information about the `postMessage` API, take a look at the [`postMessage` documentation on MDN](https://developer.mozilla.org/en/DOM/window.postMessage) . It's quite complete and worth reading. In particular, note that data can only be passed back and forth if it's serializable. Functions, for instance, are not.

### [#](https://developer.chrome.com/docs/extensions/mv3/sandboxingEval/#do_something) Do something dangerous

When `sandbox.html` is loaded, it loads the Handlebars library, and creates and compiles an inline template in the way Handlebars suggests:

    <script src="handlebars-1.0.0.beta.6.js"></script><script id="hello-world-template" type="text/x-handlebars-template">  <div class="entry">    <h1>Hello, !</h1>  </div></script><script>  var templates = [];  var source = document.getElementById('hello-world-template').innerHTML;  templates['hello'] = Handlebars.compile(source);</script>

This doesn't fail! Even though `Handlebars.compile` ends up using `new Function`, things work exactly as expected, and we end up with a compiled template in `templates['hello']`.

### [#](https://developer.chrome.com/docs/extensions/mv3/sandboxingEval/#pass_result) Pass the result back

We'll make this template available for use by setting up a message listener that accepts commands from the Event Page. We'll use the `command` passed in to determine what ought to be done (you could imagine doing more than simply rendering; perhaps creating templates? Perhaps managing them in some way?), and the `context` will be passed into the template directly for rendering. The rendered HTML will be passed back to the Event Page so the extension can do something useful with it later on:

    <script>  window.addEventListener('message', function(event) {    var command = event.data.command;    var name = event.data.name || 'hello';    switch(command) {      case 'render':        event.source.postMessage({          name: name,          html: templates[name](event.data.context)        }, event.origin);        break;      // case 'somethingElse':      //   ...    }  });</script>

Back in the Event Page, we'll receive this message, and do something interesting with the `html` data we've been passed. In this case, we'll just echo it out via a [Desktop Notification](https://developer.chrome.com/docs/extensions/mv3/desktop_notifications/), but it's entirely possible to use this HTML safely as part of the extension's UI. Inserting it via `innerHTML` doesn't pose a significant security risk, as even a complete compromise of the sandboxed code through some clever attack would be unable to inject dangerous script or plugin content into the high-permission extension context.

This mechanism makes templating straightforward, but it of course isn't limited to templating. Any code that doesn't work out of the box under a strict Content Security Policy can be sandboxed; in fact, it's often useful to sandbox components of your extensions that _would_ run correctly in order to restrict each piece of your program to the smallest set of privileges necessary for it to properly execute. The [Writing Secure Web Apps and Chrome Extensions](https://www.youtube.com/watch?v=GBxv8SaX0gg) presentation from Google I/O 2012 gives some good examples of these technique in action, and is worth 56 minutes of your time.

Updated on Thursday, May 22, 2014 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/sandboxingEval/index.md)

