import{_ as e,o,c as t,a as n}from"./app.f245760f.js";const u=JSON.parse('{"title":"Give users options","description":"","frontmatter":{},"headers":[{"level":2,"title":"# Write the options page","slug":"write-the-options-page","link":"#write-the-options-page","children":[]},{"level":2,"title":"# Declare options page behavior","slug":"declare-options-page-behavior","link":"#declare-options-page-behavior","children":[{"level":3,"title":"# Full page options","slug":"full-page-options","link":"#full-page-options","children":[]},{"level":3,"title":"# Embedded options","slug":"embedded-options","link":"#embedded-options","children":[]}]},{"level":2,"title":"# Consider the differences","slug":"consider-the-differences","link":"#consider-the-differences","children":[{"level":3,"title":"# Linking to the options page","slug":"linking-to-the-options-page","link":"#linking-to-the-options-page","children":[]},{"level":3,"title":"# Tabs API","slug":"tabs-api","link":"#tabs-api","children":[]},{"level":3,"title":"# Messaging APIs","slug":"messaging-apis","link":"#messaging-apis","children":[]},{"level":3,"title":"# Sizing","slug":"sizing","link":"#sizing","children":[]}]}],"relativePath":"chromedocs/Best practices/Give users options - Chrome Developers.md"}'),r={name:"chromedocs/Best practices/Give users options - Chrome Developers.md"},s=n(`<ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/options/#write_page" target="_blank" rel="noreferrer">Write the options page</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/options/#declare_options" target="_blank" rel="noreferrer">Declare options page behavior</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/options/#full_page" target="_blank" rel="noreferrer">Full page options</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/options/#embedded_options" target="_blank" rel="noreferrer">Embedded options</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/options/#considerations" target="_blank" rel="noreferrer">Consider the differences</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/options/#linking" target="_blank" rel="noreferrer">Linking to the options page</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/options/#tabs-api" target="_blank" rel="noreferrer">Tabs API</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/options/#messaging-api" target="_blank" rel="noreferrer">Messaging APIs</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/options/#sizing" target="_blank" rel="noreferrer">Sizing</a></li></ul></li></ul><h1 id="give-users-options" tabindex="-1">Give users options <a class="header-anchor" href="#give-users-options" aria-hidden="true">#</a></h1><p>Published on Tuesday, September 18, 2012 \u2022 Updated on Sunday, April 29, 2018</p><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/options/#write_page" target="_blank" rel="noreferrer">Write the options page</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/options/#declare_options" target="_blank" rel="noreferrer">Declare options page behavior</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/options/#full_page" target="_blank" rel="noreferrer">Full page options</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/options/#embedded_options" target="_blank" rel="noreferrer">Embedded options</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/options/#considerations" target="_blank" rel="noreferrer">Consider the differences</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/options/#linking" target="_blank" rel="noreferrer">Linking to the options page</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/options/#tabs-api" target="_blank" rel="noreferrer">Tabs API</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/options/#messaging-api" target="_blank" rel="noreferrer">Messaging APIs</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/options/#sizing" target="_blank" rel="noreferrer">Sizing</a></li></ul></li></ul><p>Allow users to customise the behavior of an extension by providing an options page. A user can view an extension&#39;s options by right-clicking the extension icon in the toolbar then selecting options or by navigating to the extension management page at <code>chrome://extensions</code>, locating the desired extension, clicking <strong>Details</strong>, then selection the options link.</p><h2 id="write-the-options-page" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/options/#write_page" target="_blank" rel="noreferrer">#</a> Write the options page <a class="header-anchor" href="#write-the-options-page" aria-hidden="true">#</a></h2><p>Below is an example options page.</p><pre><code>&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;title&gt;My Test Extension Options&lt;/title&gt;&lt;/head&gt;&lt;body&gt;Favorite color:&lt;select id=&quot;color&quot;&gt; &lt;option value=&quot;red&quot;&gt;red&lt;/option&gt; &lt;option value=&quot;green&quot;&gt;green&lt;/option&gt; &lt;option value=&quot;blue&quot;&gt;blue&lt;/option&gt; &lt;option value=&quot;yellow&quot;&gt;yellow&lt;/option&gt;&lt;/select&gt;&lt;label&gt;  &lt;input type=&quot;checkbox&quot; id=&quot;like&quot;&gt;  I like colors.&lt;/label&gt;&lt;div id=&quot;status&quot;&gt;&lt;/div&gt;&lt;button id=&quot;save&quot;&gt;Save&lt;/button&gt;&lt;script src=&quot;options.js&quot;&gt;&lt;/script&gt;&lt;/body&gt;&lt;/html&gt;
</code></pre><p>Save a user&#39;s preferred options across devices by using the <a href="https://developer.chrome.com/docs/extensions/reference/storage#property-sync" target="_blank" rel="noreferrer">storage.sync</a> API.</p><pre><code>// Saves options to chrome.storagefunction save_options() {  var color = document.getElementById(&#39;color&#39;).value;  var likesColor = document.getElementById(&#39;like&#39;).checked;  chrome.storage.sync.set({    favoriteColor: color,    likesColor: likesColor  }, function() {    // Update status to let user know options were saved.    var status = document.getElementById(&#39;status&#39;);    status.textContent = &#39;Options saved.&#39;;    setTimeout(function() {      status.textContent = &#39;&#39;;    }, 750);  });}// Restores select box and checkbox state using the preferences// stored in chrome.storage.function restore_options() {  // Use default value color = &#39;red&#39; and likesColor = true.  chrome.storage.sync.get({    favoriteColor: &#39;red&#39;,    likesColor: true  }, function(items) {    document.getElementById(&#39;color&#39;).value = items.favoriteColor;    document.getElementById(&#39;like&#39;).checked = items.likesColor;  });}document.addEventListener(&#39;DOMContentLoaded&#39;, restore_options);document.getElementById(&#39;save&#39;).addEventListener(&#39;click&#39;,    save_options);
</code></pre><p>Finally, add the <code>&quot;storage&quot;</code> permission to the extension&#39;s <code>manifest.json</code>:</p><pre><code>{  &quot;name&quot;: &quot;My extension&quot;,  ...  &quot;permissions&quot;: [    &quot;storage&quot;  ]  ...}
</code></pre><h2 id="declare-options-page-behavior" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/options/#declare_options" target="_blank" rel="noreferrer">#</a> Declare options page behavior <a class="header-anchor" href="#declare-options-page-behavior" aria-hidden="true">#</a></h2><p>There are two available types of extension options pages, <a href="https://developer.chrome.com/docs/extensions/mv3/options/#full_page" target="_blank" rel="noreferrer">full page</a> and <a href="https://developer.chrome.com/docs/extensions/mv3/options/#embedded_options" target="_blank" rel="noreferrer">embedded</a>. The type of options is determined by how it is declared in the manifest.</p><h3 id="full-page-options" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/options/#full_page" target="_blank" rel="noreferrer">#</a> Full page options <a class="header-anchor" href="#full-page-options" aria-hidden="true">#</a></h3><p>An extension&#39;s options page will be displayed in a new tab. The options HTML file is listed registered under the <code>options_page</code> field.</p><pre><code>{  &quot;name&quot;: &quot;My extension&quot;,  ...  &quot;options_page&quot;: &quot;options.html&quot;,  ...}
</code></pre><p>![Full page options](./Give users options - Chrome Developers_files/Ej3H0FMApR7srtGbZfBZ.png)</p><h3 id="embedded-options" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/options/#embedded_options" target="_blank" rel="noreferrer">#</a> Embedded options <a class="header-anchor" href="#embedded-options" aria-hidden="true">#</a></h3><p>Embedded options allows users to adjust extension options without navigating away from the extensions management page inside an embedded box. To declare an embedded options, register the HTML file under the <code>options_ui</code> field in the extension manifest, with the <code>open_in_tab</code> key set to false.</p><pre><code>{  &quot;name&quot;: &quot;My extension&quot;,  ...  &quot;options_ui&quot;: {    &quot;page&quot;: &quot;options.html&quot;,    &quot;open_in_tab&quot;: false  },  ...}
</code></pre><p>![Embedded options](./Give users options - Chrome Developers_files/AW1YkMTrWYUNmtTaRM0q.png)</p><ul><li><p><strong><code>page</code> (string)</strong></p><p>Path to the options page, relative to the extension&#39;s root.</p></li><li><p><strong><code>open_in_tab</code> (boolean)</strong></p><p>Specify as <code>false</code> to declare an embedded options page. If <code>true</code>, the extension&#39;s options page will be opened in a new tab rather than embedded in <em>chrome://extensions</em>.</p></li></ul><h2 id="consider-the-differences" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/options/#considerations" target="_blank" rel="noreferrer">#</a> Consider the differences <a class="header-anchor" href="#consider-the-differences" aria-hidden="true">#</a></h2><p>Options pages embedded inside <em>chrome://extensions</em> have some subtle behavior differences related to not being hosted inside their own tabs.</p><h3 id="linking-to-the-options-page" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/options/#linking" target="_blank" rel="noreferrer">#</a> Linking to the options page <a class="header-anchor" href="#linking-to-the-options-page" aria-hidden="true">#</a></h3><p>An extension can link directly to the options page by calling <a href="https://developer.chrome.com/runtime#method-openOptionsPage" target="_blank" rel="noreferrer"><code>chrome.runtime.openOptionsPage()</code></a> .</p><pre><code>&lt;button id=&quot;go-to-options&quot;&gt;Go to options&lt;/button&gt;

document.querySelector(&#39;#go-to-options&#39;).addEventListener(&#39;click&#39;, function() {  if (chrome.runtime.openOptionsPage) {    chrome.runtime.openOptionsPage();  } else {    window.open(chrome.runtime.getURL(&#39;options.html&#39;));  }});
</code></pre><h3 id="tabs-api" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/options/#tabs-api" target="_blank" rel="noreferrer">#</a> Tabs API <a class="header-anchor" href="#tabs-api" aria-hidden="true">#</a></h3><p>Extension embedded options page code is not hosted inside a tab, affecting how the <a href="https://developer.chrome.com/docs/extensions/reference/tabs/" target="_blank" rel="noreferrer">Tabs API</a> can be used:</p><ul><li><a href="https://developer.chrome.com/docs/extensions/reference/tabs#method-query" target="_blank" rel="noreferrer">tabs.query</a> will never find a tab within an extension&#39;s options page URL.</li><li><a href="https://developer.chrome.com/docs/extensions/reference/tabs#event-onCreated" target="_blank" rel="noreferrer">tabs.onCreated</a> will not fire when the options page is opened.</li><li><a href="https://developer.chrome.com/docs/extensions/reference/tabs#event-onUpdated" target="_blank" rel="noreferrer">tabs.onUpdated</a> will not fire when the options page load state changes.</li><li><a href="https://developer.chrome.com/docs/extensions/reference/tabs#method-connect" target="_blank" rel="noreferrer">tabs.connect</a> or <a href="https://developer.chrome.com/docs/extensions/reference/tabs#method-sendMessage" target="_blank" rel="noreferrer">tabs.sendMessage</a> cannot be used to communicate with the options page.</li></ul><p>Using <a href="https://developer.chrome.com/docs/extensions/runtime#method-connect" target="_blank" rel="noreferrer">runtime.connect</a> and <a href="https://developer.chrome.com/docs/extensions/runtime#method-sendMessage" target="_blank" rel="noreferrer">runtime.sendMessage</a> is a work around to these restrictions, if the options page does need to manipulate the containing tab.</p><h3 id="messaging-apis" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/options/#messaging-api" target="_blank" rel="noreferrer">#</a> Messaging APIs <a class="header-anchor" href="#messaging-apis" aria-hidden="true">#</a></h3><p>If an extension&#39;s options page sends a message using <a href="https://developer.chrome.com/docs/extensions/runtime#method-connect" target="_blank" rel="noreferrer">runtime.connect</a> or <a href="https://developer.chrome.com/docs/extensions/runtime#method-sendMessage" target="_blank" rel="noreferrer">runtime.sendMessage</a>, the <a href="https://developer.chrome.com/docs/extensions/runtime#property-MessageSender-tab" target="_blank" rel="noreferrer">Sender&#39;s tab</a> will not be set, and the <a href="https://developer.chrome.com/docs/extensions/runtime#property-MessageSender-url" target="_blank" rel="noreferrer">Sender&#39;s URL</a> will be the options page URL.</p><h3 id="sizing" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/options/#sizing" target="_blank" rel="noreferrer">#</a> Sizing <a class="header-anchor" href="#sizing" aria-hidden="true">#</a></h3><p>The embedded options should automatically determine its own size based on the page content. However, the embedded box may not find a good size for some types of content. This problem is most common for options pages that adjust their content shape based on window size.</p><p>If this is an issue, provide fixed minimum dimensions for the options page to ensure that the embedded page will find an appropriate size.</p><p>Updated on Sunday, April 29, 2018 \u2022 <a href="https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/options/index.md" target="_blank" rel="noreferrer">Improve article</a></p>`,38),i=[s];function a(l,p,d,c,h,g){return o(),t("div",null,i)}const f=e(r,[["render",a]]);export{u as __pageData,f as default};
