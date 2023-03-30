import{_ as e,o as r,c as t,a as o}from"./app.8d96fb22.js";const v=JSON.parse('{"title":"Migrating from background pages to service workers","description":"","frontmatter":{},"headers":[{"level":2,"title":"# Update your manifest","slug":"update-your-manifest","link":"#update-your-manifest","children":[]},{"level":2,"title":"# Thinking with events","slug":"thinking-with-events","link":"#thinking-with-events","children":[]},{"level":2,"title":"# Top-level event listeners","slug":"top-level-event-listeners","link":"#top-level-event-listeners","children":[{"level":3,"title":"# Persisting state with storage APIs","slug":"persisting-state-with-storage-apis","link":"#persisting-state-with-storage-apis","children":[]},{"level":3,"title":"# Moving from timers to alarms","slug":"moving-from-timers-to-alarms","link":"#moving-from-timers-to-alarms","children":[]}]},{"level":2,"title":"# Working with workers","slug":"working-with-workers","link":"#working-with-workers","children":[{"level":3,"title":"# Parsing and traversing with XML/HTML","slug":"parsing-and-traversing-with-xml-html","link":"#parsing-and-traversing-with-xml-html","children":[]},{"level":3,"title":"# Audio/video playback and capture","slug":"audio-video-playback-and-capture","link":"#audio-video-playback-and-capture","children":[]},{"level":3,"title":"# Rendering to a canvas","slug":"rendering-to-a-canvas","link":"#rendering-to-a-canvas","children":[]}]}],"relativePath":"chromedocs/Migrate from Manifest V2 to Manifest V3/Migrating from background pages to service workers - Chrome Developers.md","lastUpdated":1679926139000}'),a={name:"chromedocs/Migrate from Manifest V2 to Manifest V3/Migrating from background pages to service workers - Chrome Developers.md"},s=o(`<ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#manifest" target="_blank" rel="noreferrer">Update your manifest</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#events" target="_blank" rel="noreferrer">Thinking with events</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#event_listeners" target="_blank" rel="noreferrer">Top-level event listeners</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#state" target="_blank" rel="noreferrer">Persisting state with storage APIs</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#alarms" target="_blank" rel="noreferrer">Moving from timers to alarms</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#workers" target="_blank" rel="noreferrer">Working with workers</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#documents" target="_blank" rel="noreferrer">Parsing and traversing with XML/HTML</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#audio_vidio" target="_blank" rel="noreferrer">Audio/video playback and capture</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#canvas" target="_blank" rel="noreferrer">Rendering to a canvas</a></li></ul></li></ul><h1 id="migrating-from-background-pages-to-service-workers" tabindex="-1">Migrating from background pages to service workers <a class="header-anchor" href="#migrating-from-background-pages-to-service-workers" aria-hidden="true">#</a></h1><p>Published on Wednesday, July 29, 2020 \u2022 Updated on Tuesday, October 6, 2020</p><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#manifest" target="_blank" rel="noreferrer">Update your manifest</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#events" target="_blank" rel="noreferrer">Thinking with events</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#event_listeners" target="_blank" rel="noreferrer">Top-level event listeners</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#state" target="_blank" rel="noreferrer">Persisting state with storage APIs</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#alarms" target="_blank" rel="noreferrer">Moving from timers to alarms</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#workers" target="_blank" rel="noreferrer">Working with workers</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#documents" target="_blank" rel="noreferrer">Parsing and traversing with XML/HTML</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#audio_vidio" target="_blank" rel="noreferrer">Audio/video playback and capture</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#canvas" target="_blank" rel="noreferrer">Rendering to a canvas</a></li></ul></li></ul><p><em>Background pages</em> have been a fundamental component of the Chrome Extension platform since its introduction. To put it simply, background pages provide extension authors with an environment that lives independent of any other window or tab. This allows extensions to observe and take action in response to events.</p><p>In Manifest V3, the Chrome extension platform moves from background pages to <em>service workers</em>. As stated in <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank" rel="noreferrer">Service Workers: an Introduction</a>, a &quot;service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don&#39;t need a web page or user interaction.&quot; This is the technology that enables native-like experiences such as push notifications, rich offline support, background sync, and &quot;Add to Home Screen&quot; on the open web. Service workers were inspired in part by background pages in Chrome Extensions, but they iterate and improve on this model by tuning it for web-scale.</p><p>When migrating to this new background context, you&#39;ll need to keep two main things in mind. First, service workers are terminated when not in use and restarted when needed (similar to event pages). Second, service workers don&#39;t have access to DOM. We&#39;ll explore how to adapt to these challenges in the <a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#events" target="_blank" rel="noreferrer">Thinking with Events</a> and <a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#workers" target="_blank" rel="noreferrer">Working with Workers</a> sections below, respectively.</p><h2 id="update-your-manifest" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#manifest" target="_blank" rel="noreferrer">#</a> Update your manifest <a class="header-anchor" href="#update-your-manifest" aria-hidden="true">#</a></h2><p>Extensions register their background service workers in the <a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#events" target="_blank" rel="noreferrer">manifest</a> under the <code>&quot;background&quot;</code> field. This field uses the <code>&quot;service_worker&quot;</code> key, which specifies a single JavaScript file. In Manifest V2, this field was called <code>&quot;scripts&quot;</code> and allowed multiple scripts.</p><pre><code>{  &quot;name&quot;: &quot;Awesome Test Extension&quot;,  ...  &quot;background&quot;: {    &quot;service_worker&quot;: &quot;background.js&quot;  },  ...}
</code></pre><p>Find out more on the <a href="https://developer.chrome.com/docs/extensions/mv3/background_pages/#manifest" target="_blank" rel="noreferrer">Manage events with service workers</a> reference page.</p><h2 id="thinking-with-events" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#events" target="_blank" rel="noreferrer">#</a> Thinking with events <a class="header-anchor" href="#thinking-with-events" aria-hidden="true">#</a></h2><p>Like event pages, service workers are a special execution environment that are started to handle events they&#39;re interested in and are terminated when they&#39;re no longer needed. The following sections provide recommendations for writing code in an ephemeral, evented execution context.</p><p>Several of these concepts are covered in the Manifest V2 page, <a href="https://developer.chrome.com/docs/extensions/mv2/background_migration/" target="_blank" rel="noreferrer">Migrate to Event Driven Background Scripts</a>.</p><h2 id="top-level-event-listeners" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#event_listeners" target="_blank" rel="noreferrer">#</a> Top-level event listeners <a class="header-anchor" href="#top-level-event-listeners" aria-hidden="true">#</a></h2><p>In order for Chrome to successfully dispatch events to the appropriate listeners, extensions must register listeners in the first turn of the event loop. The most straightforward way to achieve this is to move event registration to the top-level of your service worker script.</p><p>The below snippet shows how an existing extension initializes its browser action listener in a persistent background page.</p><pre><code>// background.jschrome.storage.local.get([&quot;badgeText&quot;], ({ badgeText }) =&gt; {  chrome.action.setBadgeText({ text: badgeText });  // Listener is registered asynchronously  // This is NOT guaranteed to work in Manifest V3/service workers! Don&#39;t do this!  chrome.action.onClicked.addListener(handleActionClick);});
</code></pre><p>While this approach works in a persistent background page, it is <em>not</em> guaranteed to work in a service worker due to the asynchronous nature of the <a href="https://developer.chrome.com/docs/extensions/reference/storage/" target="_blank" rel="noreferrer">Storage APIs</a>. When a service worker is terminated, so are the event listeners associated with it. And since events are dispatched when a service worker starts, asynchronously registering events results in them being dropped because there&#39;s no listener registered when it is first spun up.</p><p>To address this, move the event listener registration to the top level of your script. This ensures that Chrome will be able to immediately find and invoke your action&#39;s click handler, even if your extension hasn&#39;t finished executing its async startup logic.</p><pre><code>// background.jschrome.storage.local.get([&quot;badgeText&quot;], ({ badgeText }) =&gt; {  chrome.action.setBadgeText({ text: badgeText });});// Listener is registered on startupchrome.action.onClicked.addListener(handleActionClick);
</code></pre><p>Manifest V3 consolidates <code>chrome.browserAction</code> and <code>chrome.pageAction</code> into a single <code>chrome.action</code> API.</p><h3 id="persisting-state-with-storage-apis" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#state" target="_blank" rel="noreferrer">#</a> Persisting state with storage APIs <a class="header-anchor" href="#persisting-state-with-storage-apis" aria-hidden="true">#</a></h3><p>One of the main things to get used to when adopting service workers is that they are short-lived execution environments. In more practical terms, an extension&#39;s service worker will start up, do some work, and get terminated repeatedly throughout a user&#39;s browser session. This poses a challenge to extension developers accustomed to long-lived background pages as application data is not immediately available in global variables.</p><p>The following Manifest V2 example recieves a name from a content script and persists it for later:</p><pre><code>// background.js// Don&#39;t do this! The service worker will be created and destroyed over the lifetime of your// extension, and this variable will be reset.let savedName = undefined;chrome.runtime.onMessage.addListener(({ type, name }) =&gt; {  if (type === &quot;set-name&quot;) {    savedName = name;  }});chrome.browserAction.onClicked.addListener((tab) =&gt; {  chrome.tabs.sendMessage(tab.id, { name: savedName });});
</code></pre><p>If we port this code directly to Manifest V3, requiring service workers, it&#39;s possible that the code will be terminated between when the name is set and the user clicks the browser action. If this happens, the set name will have been lost\u2014and <code>savedName</code> will again be <code>undefined</code>.</p><p>We can fix this bug by treating the <a href="https://developer.chrome.com/docs/extensions/reference/storage/" target="_blank" rel="noreferrer">Storage APIs</a> as our source of truth:</p><pre><code>// background.jschrome.runtime.onMessage.addListener(({ type, name }) =&gt; {  if (type === &quot;set-name&quot;) {    chrome.storage.local.set({ name });  }});chrome.action.onClicked.addListener((tab) =&gt; {  chrome.storage.local.get([&quot;name&quot;], ({ name }) =&gt; {    chrome.tabs.sendMessage(tab.id, { name });  });});
</code></pre><h3 id="moving-from-timers-to-alarms" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#alarms" target="_blank" rel="noreferrer">#</a> Moving from timers to alarms <a class="header-anchor" href="#moving-from-timers-to-alarms" aria-hidden="true">#</a></h3><p>It&#39;s common for web developers to perform delayed or periodic operations using the <code>setTimeout</code> or <code>setInterval</code> methods. These APIs can fail in service workers, though, because the scheduler will cancel the timers when the service worker is terminated.</p><pre><code>// background.js// This worked in Manifest V2.const TIMEOUT = 3 * 60 * 1000; // 3 minutes in millisecondssetTimeout(() =&gt; {  chrome.action.setIcon({    path: getRandomIconPath(),  });}, TIMEOUT);
</code></pre><p>Instead, we can use the <a href="https://developer.chrome.com/docs/extensions/reference/alarms/" target="_blank" rel="noreferrer">Alarms API</a>. Like other listeners, alarm listeners should be registered in the top level of your script.</p><pre><code>// background.jschrome.alarms.create({ delayInMinutes: 3 });chrome.alarms.onAlarm.addListener(() =&gt; {  chrome.action.setIcon({    path: getRandomIconPath(),  });});
</code></pre><h2 id="working-with-workers" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#workers" target="_blank" rel="noreferrer">#</a> Working with workers <a class="header-anchor" href="#working-with-workers" aria-hidden="true">#</a></h2><p><a href="https://developers.google.com/web/ilt/pwa/introduction-to-service-worker" target="_blank" rel="noreferrer">Service workers</a> are a specialized kind of <a href="https://developer.mozilla.org/docs/Web/API/Worker" target="_blank" rel="noreferrer">web worker</a>, which are quite different from the web pages most web developers are used to working with. On a typical web page (or extension background page), the global execution context for JavaScript is of type <a href="https://developer.mozilla.org/docs/Web/API/Window" target="_blank" rel="noreferrer"><code>Window</code></a>. This object exposes the capabilities that web developers are used to working with: <code>window</code>, element, IndexedDB, <code>cookie</code>, <code>localStorage</code>, etc.</p><p>The <a href="https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope" target="_blank" rel="noreferrer">global scope for service worker</a> is significantly more limited and doesn&#39;t have many of these features. Most notably, service workers don&#39;t have access to the DOM. Workers no longer provide <code>XMLHttpRequest</code>, but instead support the more modern <a href="https://developer.mozilla.org/docs/Web/API/Fetch_API" target="_blank" rel="noreferrer"><code>fetch()</code></a>. <code>URL.createObjectURL</code> is also not supported for service workers, due to its potential to create memory leaks.</p><p>The following sections cover some of the major use cases impacted by the move to service workers and recommendations on how to adapt.</p><h3 id="parsing-and-traversing-with-xml-html" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#documents" target="_blank" rel="noreferrer">#</a> Parsing and traversing with XML/HTML <a class="header-anchor" href="#parsing-and-traversing-with-xml-html" aria-hidden="true">#</a></h3><p>Since service workers don&#39;t have access to DOM, it&#39;s not possible for an extension&#39;s service worker to access the <a href="https://developer.mozilla.org/docs/Web/API/DOMParser" target="_blank" rel="noreferrer"><code>DOMParser</code></a> API or create an <code>&lt;iframe&gt;</code> to parse and traverse documents. Extension developers have two ways to work around this limitation: create a new tab or use a library. Which you choose will depend on your use case.</p><p>Libraries such as <a href="https://github.com/jsdom/jsdom" target="_blank" rel="noreferrer"><code>jsdom</code></a> can be used to emulate a typical browser window environment, complete with DOMParser, event propagation, and other capabilities like <code>requestAnimationFrame</code>. Lighter-weight alternatives like <a href="https://github.com/developit/undom" target="_blank" rel="noreferrer"><code>undom</code></a> provide just enough DOM to power many frontend frameworks and libraries.</p><p>Extensions that need a full native browser environment can use the <a href="https://developer.chrome.com/docs/extensions/reference/windows#method-create" target="_blank" rel="noreferrer"><code>chrome.windows.create()</code></a> and <a href="https://developer.chrome.com/docs/extensions/reference/tabs#method-create" target="_blank" rel="noreferrer"><code>chrome.tabs.create()</code></a> APIs from inside a service worker to create a real browser window. Additionally, an extension&#39;s popup still provides a full (temporary) window environment.</p><h3 id="audio-video-playback-and-capture" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#audio_vidio" target="_blank" rel="noreferrer">#</a> Audio/video playback and capture <a class="header-anchor" href="#audio-video-playback-and-capture" aria-hidden="true">#</a></h3><p>It&#39;s not currently possible to play or capture media directly in a service worker. In order for a Manifest V3 extension to leverage the web&#39;s media playback and capture capabilities, the extension will need to create a window environment using either <a href="https://developer.chrome.com/docs/extensions/reference/windows#method-create" target="_blank" rel="noreferrer"><code>chrome.windows.create()</code></a> or <a href="https://developer.chrome.com/docs/extensions/reference/tabs#method-create" target="_blank" rel="noreferrer"><code>chrome.tabs.create()</code></a>. Once created, the extension can use <a href="https://developer.chrome.com/docs/extensions/mv3/messaging/" target="_blank" rel="noreferrer">message passing</a> to coordinate between the playback document and service worker.</p><h3 id="rendering-to-a-canvas" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#canvas" target="_blank" rel="noreferrer">#</a> Rendering to a canvas <a class="header-anchor" href="#rendering-to-a-canvas" aria-hidden="true">#</a></h3><p>In some cases developers use background pages to render content for display in other contexts or to create and cache assets. While service workers don&#39;t have access to DOM and therefore cannot use <code>&lt;canvas&gt;</code> elements, service workers do have access to the <a href="https://html.spec.whatwg.org/multipage/canvas.html#the-offscreencanvas-interface" target="_blank" rel="noreferrer">OffscreenCanvas API</a>.</p><pre><code>// background.js// for Manifest V2 background pagesfunction buildCanvas(width, height) {  const canvas = document.createElement(&quot;canvas&quot;);  canvas.width = width;  canvas.height = height;  return canvas;}
</code></pre><p>In the above block we&#39;re constructing a canvas element. To migrate to offscreen canvas, replace <code>document.createElement(&#39;canvas&#39;)</code> with <code>new OffscreenCanvas(width, height)</code>.</p><pre><code>// background.js// for Manifest V3 service workersfunction buildCanvas(width, height) {  const canvas = new OffscreenCanvas(width, height);  return canvas;}
</code></pre><p>For additional guidance on working with <code>OffscreenCanvas</code>, see <a href="https://developers.google.com/web/updates/2018/08/offscreen-canvas" target="_blank" rel="noreferrer">OffscreenCanvas\u2014Speed up Your Canvas Operations with a Web Worker</a>.</p><p>Updated on Tuesday, October 6, 2020 \u2022 <a href="https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/migrating_to_service_workers/index.md" target="_blank" rel="noreferrer">Improve article</a></p>`,51),n=[s];function i(c,d,l,h,m,p){return r(),t("div",null,n)}const u=e(a,[["render",i]]);export{v as __pageData,u as default};