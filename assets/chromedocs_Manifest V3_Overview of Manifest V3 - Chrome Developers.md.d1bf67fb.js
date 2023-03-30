import{_ as e,o as r,c as o,a as t}from"./app.8d96fb22.js";const v=JSON.parse('{"title":"Overview of Manifest V3","description":"","frontmatter":{},"headers":[{"level":2,"title":"# Feature summary","slug":"feature-summary","link":"#feature-summary","children":[]},{"level":2,"title":"# Major features","slug":"major-features","link":"#major-features","children":[{"level":3,"title":"# Service workers","slug":"service-workers","link":"#service-workers","children":[]},{"level":3,"title":"# Network request modification","slug":"network-request-modification","link":"#network-request-modification","children":[]},{"level":3,"title":"# Remotely hosted code","slug":"remotely-hosted-code","link":"#remotely-hosted-code","children":[]},{"level":3,"title":"# Promises","slug":"promises","link":"#promises","children":[]}]},{"level":2,"title":"# Other features","slug":"other-features","link":"#other-features","children":[]}],"relativePath":"chromedocs/Manifest V3/Overview of Manifest V3 - Chrome Developers.md","lastUpdated":1679926139000}'),s={name:"chromedocs/Manifest V3/Overview of Manifest V3 - Chrome Developers.md"},a=t('<ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#feature-summary" target="_blank" rel="noreferrer">Feature summary</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#major-features" target="_blank" rel="noreferrer">Major features</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#service-workers" target="_blank" rel="noreferrer">Service workers</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#network-request-modification" target="_blank" rel="noreferrer">Network request modification</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#remotely-hosted-code" target="_blank" rel="noreferrer">Remotely hosted code</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#promises" target="_blank" rel="noreferrer">Promises</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#other-features" target="_blank" rel="noreferrer">Other features</a></li></ul><h1 id="overview-of-manifest-v3" tabindex="-1">Overview of Manifest V3 <a class="header-anchor" href="#overview-of-manifest-v3" aria-hidden="true">#</a></h1><p>Key changes and features of Manifest V3.</p><p>Published on Monday, November 9, 2020 \u2022 Updated on Sunday, October 3, 2021</p><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#feature-summary" target="_blank" rel="noreferrer">Feature summary</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#major-features" target="_blank" rel="noreferrer">Major features</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#service-workers" target="_blank" rel="noreferrer">Service workers</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#network-request-modification" target="_blank" rel="noreferrer">Network request modification</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#remotely-hosted-code" target="_blank" rel="noreferrer">Remotely hosted code</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#promises" target="_blank" rel="noreferrer">Promises</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#other-features" target="_blank" rel="noreferrer">Other features</a></li></ul><p>Manifest V3 (Manifest V3) is a major step forward in steering towards our <a href="https://developer.chrome.com/docs/extensions/mv3/intro/platform-vision/" target="_blank" rel="noreferrer">vision for the extensions platform</a>. Manifest V3 focuses on the three pillars of that vision: privacy, security, and performance, while preserving and improving our foundation of capability and webbiness.</p><p>This article summarizes the features and major changes introduced by Manifest V3. For help migrating Manifest V2 extensions to Manifest V3, or to better understand the architectural impact of these changes, see also the <a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/" target="_blank" rel="noreferrer">Manifest V3 migration guide</a>.</p><p>Manifest V3 is available beginning with Chrome <a href="https://chromiumdash.appspot.com/schedule" target="_blank" rel="noreferrer">88</a>, and the Chrome Web Store begins accepting Manifest V3 extensions in January 2021.</p><p>New features and changes will continue to be added to Manifest V3, just as they have been in earlier manifest versions.</p><h2 id="feature-summary" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#feature-summary" target="_blank" rel="noreferrer">#</a> Feature summary <a class="header-anchor" href="#feature-summary" aria-hidden="true">#</a></h2><p>There are a number of new features and functional changes for extensions using Manifest V3:</p><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#service-workers" target="_blank" rel="noreferrer">Service workers</a> replace background pages.</li><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#network-request-modification" target="_blank" rel="noreferrer">Network request modification</a> is now handled with the new <a href="https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/" target="_blank" rel="noreferrer">declarativeNetRequest</a> API.</li><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#remotely-hosted-code" target="_blank" rel="noreferrer">Remotely hosted code</a> is no longer allowed; an extension can only execute JavaScript that is included within its package.</li><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#promises" target="_blank" rel="noreferrer">Promise</a> support has been added to many methods, though callbacks are still supported as an alternative. (We will eventually support promises on all appropriate methods.)</li><li>A number of other, relatively <a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#other-features" target="_blank" rel="noreferrer">minor feature changes</a> are also introduced in Manifest V3.</li></ul><p>Each of these changes is summarized in the sections below.</p><h2 id="major-features" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#major-features" target="_blank" rel="noreferrer">#</a> Major features <a class="header-anchor" href="#major-features" aria-hidden="true">#</a></h2><p>This section introduces the most important and impactful features of Manifest V3.</p><h3 id="service-workers" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#service-workers" target="_blank" rel="noreferrer">#</a> Service workers <a class="header-anchor" href="#service-workers" aria-hidden="true">#</a></h3><p>Manifest V3 replaces background pages with service workers.</p><p>Like their web page counterparts, extension service workers listen for and respond to events in order to enhance the end user&#39;s experience. For web service workers this typically means managing cache, preloading resources, and enabling offline web pages. While extension service workers can still do all of this, the extension package already contains a bundle of resources that can be accessed offline. As such, extension service workers tend to focus on reacting to relevant browser events exposed by Chrome&#39;s extensions APIs.</p><h3 id="network-request-modification" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#network-request-modification" target="_blank" rel="noreferrer">#</a> Network request modification <a class="header-anchor" href="#network-request-modification" aria-hidden="true">#</a></h3><p>The way that extensions can modify network requests is changing in Manifest V3. There&#39;s a new <a href="https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/" target="_blank" rel="noreferrer">declarativeNetRequest</a> API which lets extensions modify and block network requests in a privacy-preserving and performant way. The essence of this API is:</p><ul><li>Rather than intercepting a request and modifying it procedurally, the extension asks Chrome to evaluate and modify requests on its behalf.</li><li>The extension declares a set of rules: patterns to match requests and actions to perform when matched. The browser then modifies network requests as defined by these rules.</li></ul><p>Using this declarative approach dramatically reduces the need for persistent host permissions.</p><p>Some extensions may still require broad host permissions for certain use cases (such as redirecting requests). See <a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration#declarativenetrequest-conditional-perms" target="_blank" rel="noreferrer">Conditional permissions and declarativeNetRequest</a> for further details.</p><p>The blocking version of the <a href="https://developer.chrome.com/docs/extensions/reference/webRequest/" target="_blank" rel="noreferrer">webRequest</a> API is restricted to force-installed extensions in Manifest V3. This is because of issues with the blocking webRequest approach:</p><ul><li><strong>Privacy</strong>: This requires excessive access to user data, because extensions need to read each network request made for the user.</li><li><strong>Performance</strong>: Serializing &amp; deserializing data across multiple process hops &amp; the C++/JS boundary adds up.</li><li><strong>Compatibility</strong>: Does not work well with event-based background execution as it requires the service worker to be running to handle every request.</li></ul><p>This means that developers can implement many common use cases, such as content blocking functionality, without requiring any host permissions.</p><h3 id="remotely-hosted-code" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#remotely-hosted-code" target="_blank" rel="noreferrer">#</a> Remotely hosted code <a class="header-anchor" href="#remotely-hosted-code" aria-hidden="true">#</a></h3><p>A key security improvement in Manifest V3 is that extensions can&#39;t load remote code like JavaScript or Wasm files. This lets us more reliably and efficiently review the safe behavior of extensions when they&#39;re submitted to the Chrome Web Store. Specifically, all logic must be included in the extension&#39;s package.</p><p>Instead of remote code, we recommend the use of remote configuration files. See the <a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration#remotely-hosted-code" target="_blank" rel="noreferrer">migration guide</a> for more about how to work with this change.</p><h3 id="promises" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#promises" target="_blank" rel="noreferrer">#</a> Promises <a class="header-anchor" href="#promises" aria-hidden="true">#</a></h3><p>Manifest V3 provides first-class support for promises. Many popular APIs support promises now, and we will eventually support promises on all appropriate methods.</p><p>You can use promise chains, as well as async/await. If you provide a callback to an API method, this prevents the promise from being returned. Therefore you can defer this part of your migration until you&#39;re ready, or begin using promises immediately.</p><p>Some scenarios, such as event listeners, will still require callbacks. For information on using promises, see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noreferrer">Promises on MDN</a>. For information on converting callbacks to promises, see <a href="https://developer.chrome.com/docs/extensions/mv3/promises#compare-to-callback" target="_blank" rel="noreferrer">our own article</a>.</p><h2 id="other-features" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#other-features" target="_blank" rel="noreferrer">#</a> Other features <a class="header-anchor" href="#other-features" aria-hidden="true">#</a></h2><p>There are a number of other changes introduced in Manifest V3:</p><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration#action-api-unification" target="_blank" rel="noreferrer">Action API consolidation</a>: The Browser Action and Page Action APIs are unified into a single Action API.</li><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration#web-accessible-resources" target="_blank" rel="noreferrer">Web accessible resources</a>: These resources are now available only to specified sites and extensions.</li><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration#content-security-policy" target="_blank" rel="noreferrer">Content security policy (CSP)</a>: You now specify separate CSP for different execution contexts in a single object, and certain policies are disallowed.</li><li><a href="https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration#executing-arbitrary-strings" target="_blank" rel="noreferrer">executeScript() changes</a>: Extensions can no longer execute arbitrary strings, only script files and functions. This method is also migrating from the Tabs API to the new Scripting API.</li><li><a href="https://developer.chrome.com/docs/extensions/reference/storage/#property-session" target="_blank" rel="noreferrer">A new in-memory StorageArea</a> that can be used to store values in-memory across service worker restarts.</li></ul><p>The following features will be added to Manifest V3 soon:</p><ul><li><strong>Dynamic content scripts:</strong> the new <a href="https://developer.chrome.com/docs/extensions/reference/scripting/" target="_blank" rel="noreferrer">Scripting API</a> lets extensions register and unregister content scripts at runtime.</li><li><strong>New favicon API:</strong> this new JavaScript API replaces &quot;chrome://favicons&quot; and gives developers a way to retrieve websites&#39; favicons.</li></ul><p>Look for announcements of these and other Manifest V3 features as they become available.</p><p>Updated on Sunday, October 3, 2021 \u2022 <a href="https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/intro/mv3-overview/index.md" target="_blank" rel="noreferrer">Improve article</a></p>',40),i=[a];function n(l,c,h,m,d,f){return r(),o("div",null,i)}const u=e(s,[["render",n]]);export{v as __pageData,u as default};
