import{_ as e,o,c as t,a as r}from"./app.f245760f.js";const g=JSON.parse('{"title":"What are extensions?","description":"","frontmatter":{},"headers":[{"level":2,"title":"# About extensions","slug":"about-extensions","link":"#about-extensions","children":[{"level":3,"title":"# How do extensions work?","slug":"how-do-extensions-work","link":"#how-do-extensions-work","children":[]},{"level":3,"title":"# How do users get extensions?","slug":"how-do-users-get-extensions","link":"#how-do-users-get-extensions","children":[]},{"level":3,"title":"# A note about extensions policy","slug":"a-note-about-extensions-policy","link":"#a-note-about-extensions-policy","children":[]}]},{"level":2,"title":"# Hello extensions","slug":"hello-extensions","link":"#hello-extensions","children":[]},{"level":2,"title":"# What next?","slug":"what-next","link":"#what-next","children":[]}],"relativePath":"chromedocs/Overview/What are extensions_ - Chrome Developers.md"}'),n={name:"chromedocs/Overview/What are extensions_ - Chrome Developers.md"},s=r(`<ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/overview/#intro" target="_blank" rel="noreferrer">About extensions</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/overview/#basics" target="_blank" rel="noreferrer">How do extensions work?</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/overview/#getting-extensions" target="_blank" rel="noreferrer">How do users get extensions?</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/overview/#policy" target="_blank" rel="noreferrer">A note about extensions policy</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/overview/#hello-extensions" target="_blank" rel="noreferrer">Hello extensions</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/overview/#How-do-I-start" target="_blank" rel="noreferrer">What next?</a></li></ul><h1 id="what-are-extensions" tabindex="-1">What are extensions? <a class="header-anchor" href="#what-are-extensions" aria-hidden="true">#</a></h1><p>Published on Thursday, February 21, 2013 \u2022 Updated on Friday, March 12, 2021</p><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/overview/#intro" target="_blank" rel="noreferrer">About extensions</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/overview/#basics" target="_blank" rel="noreferrer">How do extensions work?</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/overview/#getting-extensions" target="_blank" rel="noreferrer">How do users get extensions?</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/overview/#policy" target="_blank" rel="noreferrer">A note about extensions policy</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/overview/#hello-extensions" target="_blank" rel="noreferrer">Hello extensions</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/overview/#How-do-I-start" target="_blank" rel="noreferrer">What next?</a></li></ul><p>This page provides a brief introduction to Chrome extensions and walks through the creation of a &quot;Hello, World!&quot; extension.</p><h2 id="about-extensions" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/overview/#intro" target="_blank" rel="noreferrer">#</a> About extensions <a class="header-anchor" href="#about-extensions" aria-hidden="true">#</a></h2><p>Extensions are small software programs that customize the browsing experience. They let users tailor Chrome functionality and behavior in many ways, providing things like:</p><ul><li>Productivity tools</li><li>Web page content enrichment</li><li>Information aggregation</li><li>Fun and games</li></ul><p>These are just a few examples of the many things that extensions can do. See the <a href="https://chrome.google.com/webstore" target="_blank" rel="noreferrer">Chrome Web Store</a> to see thousands of different examples of published extensions.</p><h3 id="how-do-extensions-work" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/overview/#basics" target="_blank" rel="noreferrer">#</a> How do extensions work? <a class="header-anchor" href="#how-do-extensions-work" aria-hidden="true">#</a></h3><p>Extensions are built on web technologies such as HTML, JavaScript, and CSS. They run in a separate, sandboxed execution environment and interact with the Chrome browser.</p><p>Extensions let you &quot;extend&quot; the browser by using APIs to modify browser behavior and access web content. Extensions operate by means of an end-user UI and a developer API:</p><p>The extensions user interface</p><p>Provides a consistent way for users to manage their extensions.</p><p>Extensions APIs</p><p>Allow the extension&#39;s code to access features of the browser itself: activating tabs, modifying net requests, and so on.</p><p>To create an extension, you assemble some resources -- a manifest, JavaScript and HTML files, images, and others -- that constitute the extension. For development and testing, you can load these &quot;unpacked&quot; into Chrome using <a href="https://developer.chrome.com/docs/extensions/mv3/getstarted/#manifest" target="_blank" rel="noreferrer">extension developer mode</a>. Once you are happy with your extension, you can <a href="https://developer.chrome.com/docs/webstore/publish/" target="_blank" rel="noreferrer">package it and distribute it to users</a>.</p><h3 id="how-do-users-get-extensions" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/overview/#getting-extensions" target="_blank" rel="noreferrer">#</a> How do users get extensions? <a class="header-anchor" href="#how-do-users-get-extensions" aria-hidden="true">#</a></h3><p>Most Chrome users get extensions from the <a href="https://chrome.google.com/webstore" target="_blank" rel="noreferrer">Chrome Web Store</a>. Developers across the globe publish their extensions in the Chrome Web Store where they are reviewed and made available to end users.</p><p>Some organizations use <a href="https://cloud.google.com/docs/chrome-enterprise/policies/" target="_blank" rel="noreferrer">enterprise policies</a> to install extensions on their user&#39;s devices. These extensions may either be fetched from the Chrome Web Store or hosted on the organization&#39;s web servers.</p><p>You can distribute your extensions through the <a href="https://chrome.google.com/webstore/devconsole" target="_blank" rel="noreferrer">Chrome Developer Dashboard</a>, publishing them to the <a href="https://chrome.google.com/webstore" target="_blank" rel="noreferrer">Chrome Web Store</a>. For more information, see the Chrome Web Store <a href="https://developer.chrome.com/docs/webstore/" target="_blank" rel="noreferrer">developer documentation</a>.</p><h3 id="a-note-about-extensions-policy" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/overview/#policy" target="_blank" rel="noreferrer">#</a> A note about extensions policy <a class="header-anchor" href="#a-note-about-extensions-policy" aria-hidden="true">#</a></h3><p>Extensions on the Chrome Web Store must adhere to the <a href="https://developer.chrome.com/docs/webstore/program-policies/" target="_blank" rel="noreferrer">Chrome Web Store policies</a>. Here are some things to keep in mind as you begin:</p><ul><li>An extension must fulfill a <a href="https://developer.chrome.com/docs/extensions/mv3/single_purpose/" target="_blank" rel="noreferrer">single purpose</a> that is narrowly defined and easy to understand. A single extension can include multiple components and a range of functionality, as long as everything contributes towards a common purpose.</li></ul><p>![Screenshot of AMP validator extension pinned](./What are extensions_ - Chrome Developers_files/XniXB3snAeMvLwI1am3O.png)</p><ul><li>User interfaces should be minimal and have intent. They can range from a simple icon, such as the <a href="https://chrome.google.com/webstore/detail/amp-validator/nmoffdblmcmgeicmolmhobpoocbbmknc" target="_blank" rel="noreferrer">AMP validator</a> extension shown above, to opening a new window with a form, like the <a href="https://chrome.google.com/webstore/detail/google-similar-pages/pjnfggphgdjblhfjaphkjhfpiiekbbej" target="_blank" rel="noreferrer">Google Similar Pages</a> extension shown below.</li></ul><p>![Screenshot of Google Similar Pages extension](./What are extensions_ - Chrome Developers_files/oR9iCEgY2889Z3mHHLll.png)</p><h2 id="hello-extensions" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/overview/#hello-extensions" target="_blank" rel="noreferrer">#</a> Hello extensions <a class="header-anchor" href="#hello-extensions" aria-hidden="true">#</a></h2><p>Take a small step into extensions with this quick Hello Extensions example. Start by creating a new directory to store the extension&#39;s files, or download them from the <a href="https://developer.chrome.com/docs/extensions/mv3/samples#search:hello" target="_blank" rel="noreferrer">sample page</a>.</p><p>Next, add a file called <code>manifest.json</code> and include the following code:</p><pre><code>{  &quot;name&quot;: &quot;Hello Extensions&quot;,  &quot;description&quot;: &quot;Base Level Extension&quot;,  &quot;version&quot;: &quot;1.0&quot;,  &quot;manifest_version&quot;: 3}
</code></pre><p>Every extension requires a manifest, though most extensions will not do much with just the manifest. For this quick start, the extension has a popup file and icon declared under the <a href="https://developer.chrome.com/docs/extensions/reference/action/" target="_blank" rel="noreferrer"><code>action</code></a> field:</p><pre><code>{  &quot;name&quot;: &quot;Hello Extensions&quot;,  &quot;description&quot;: &quot;Base Level Extension&quot;,  &quot;version&quot;: &quot;1.0&quot;,  &quot;manifest_version&quot;: 3,  &quot;action&quot;: {    &quot;default_popup&quot;: &quot;hello.html&quot;,    &quot;default_icon&quot;: &quot;hello_extensions.png&quot;  }}
</code></pre><p>Download <a href="https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/gmKIT88Ha1z8VBMJFOOH.png" target="_blank" rel="noreferrer"><code>hello_extensions.png</code> here</a> and then create a file titled <code>hello.html</code>:</p><pre><code>&lt;html&gt;  &lt;body&gt;    &lt;h1&gt;Hello Extensions&lt;/h1&gt;  &lt;/body&gt;&lt;/html&gt;
</code></pre><p>The extension now displays <code>hello.html</code> when the icon is clicked. The next step is to include a command in the <code>manifest.json</code> that enables a keyboard shortcut. This step is fun, but not necessary:</p><pre><code>{  &quot;name&quot;: &quot;Hello Extensions&quot;,  &quot;description&quot;: &quot;Base Level Extension&quot;,  &quot;version&quot;: &quot;1.0&quot;,  &quot;manifest_version&quot;: 3,  &quot;action&quot;: {    &quot;default_popup&quot;: &quot;hello.html&quot;,    &quot;default_icon&quot;: &quot;hello_extensions.png&quot;  },  &quot;commands&quot;: {    &quot;_execute_action&quot;: {      &quot;suggested_key&quot;: {        &quot;default&quot;: &quot;Ctrl+Shift+F&quot;,        &quot;mac&quot;: &quot;MacCtrl+Shift+F&quot;      },      &quot;description&quot;: &quot;Opens hello.html&quot;    }  }}
</code></pre><p>The last step is to install the extension on your local machine.</p><ol><li>Navigate to <code>chrome://extensions</code> in your browser. You can also access this page by clicking on the Chrome menu on the top right side of the Omnibox, hovering over <strong>More Tools</strong> and selecting <strong>Extensions</strong>.</li><li>Check the box next to <strong>Developer Mode</strong>.</li><li>Click <strong>Load Unpacked Extension</strong> and select the directory for your &quot;Hello Extensions&quot; extension.</li></ol><p>Congratulations! You can now use your popup-based extension by clicking the <code>hello_world.png</code> icon or by pressing <code>Ctrl+Shift+F</code> on your keyboard.</p><h2 id="what-next" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/overview/#How-do-I-start" target="_blank" rel="noreferrer">#</a> What next? <a class="header-anchor" href="#what-next" aria-hidden="true">#</a></h2><ol><li>Follow the <a href="https://developer.chrome.com/docs/extensions/mv3/getstarted/" target="_blank" rel="noreferrer">Getting Started tutorial</a></li><li>Explore the <a href="https://github.com/GoogleChrome/chrome-extensions-samples" target="_blank" rel="noreferrer">extension samples</a></li><li>Subscribe to the <a href="http://groups.google.com/a/chromium.org/group/chromium-extensions" target="_blank" rel="noreferrer">chromium-extensions Google group</a></li></ol><p>Updated on Friday, March 12, 2021 \u2022 <a href="https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/overview/index.md" target="_blank" rel="noreferrer">Improve article</a></p>`,43),a=[s];function i(l,h,c,d,p,u){return o(),t("div",null,a)}const x=e(n,[["render",i]]);export{g as __pageData,x as default};
