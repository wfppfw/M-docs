import{_ as e,o as t,c as o,a as n}from"./app.8d96fb22.js";const f=JSON.parse('{"title":"Design the user interface","description":"","frontmatter":{},"headers":[{"level":2,"title":"# The extension action","slug":"the-extension-action","link":"#the-extension-action","children":[{"level":3,"title":"# Register the action","slug":"register-the-action","link":"#register-the-action","children":[]},{"level":3,"title":"# Activate the action conditionally","slug":"activate-the-action-conditionally","link":"#activate-the-action-conditionally","children":[]}]},{"level":2,"title":"# Provide the extension icons","slug":"provide-the-extension-icons","link":"#provide-the-extension-icons","children":[{"level":3,"title":"# Designate action icons","slug":"designate-action-icons","link":"#designate-action-icons","children":[]},{"level":3,"title":"# Create and register additional icons","slug":"create-and-register-additional-icons","link":"#create-and-register-additional-icons","children":[]}]},{"level":2,"title":"# Additional UI features","slug":"additional-ui-features","link":"#additional-ui-features","children":[{"level":3,"title":"# Action badge","slug":"action-badge","link":"#action-badge","children":[]},{"level":3,"title":"# Popup","slug":"popup","link":"#popup","children":[]},{"level":3,"title":"# Tooltip","slug":"tooltip","link":"#tooltip","children":[]},{"level":3,"title":"# Click Event","slug":"click-event","link":"#click-event","children":[]},{"level":3,"title":"# Omnibox","slug":"omnibox","link":"#omnibox","children":[]},{"level":3,"title":"# Context menu","slug":"context-menu","link":"#context-menu","children":[]},{"level":3,"title":"# Commands","slug":"commands","link":"#commands","children":[]},{"level":3,"title":"# Override pages","slug":"override-pages","link":"#override-pages","children":[]},{"level":3,"title":"# Notifications","slug":"notifications","link":"#notifications","children":[]}]},{"level":2,"title":"# Internationalize the UI","slug":"internationalize-the-ui","link":"#internationalize-the-ui","children":[]},{"level":2,"title":"# Continue exploring","slug":"continue-exploring","link":"#continue-exploring","children":[]}],"relativePath":"chromedocs/Develop extensions and themes/Design the user interface - Chrome Developers.md","lastUpdated":1679926139000}'),r={name:"chromedocs/Develop extensions and themes/Design the user interface - Chrome Developers.md"},a=n(`<ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#action" target="_blank" rel="noreferrer">The extension action</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#browser" target="_blank" rel="noreferrer">Register the action</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#activate_pages" target="_blank" rel="noreferrer">Activate the action conditionally</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#provide-the-extension-icons" target="_blank" rel="noreferrer">Provide the extension icons</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#icons" target="_blank" rel="noreferrer">Designate action icons</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#icon_size" target="_blank" rel="noreferrer">Create and register additional icons</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#additional_features" target="_blank" rel="noreferrer">Additional UI features</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#badge" target="_blank" rel="noreferrer">Action badge</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#popup" target="_blank" rel="noreferrer">Popup</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#tooltip" target="_blank" rel="noreferrer">Tooltip</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#click" target="_blank" rel="noreferrer">Click Event</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#omnibox" target="_blank" rel="noreferrer">Omnibox</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#context_menu" target="_blank" rel="noreferrer">Context menu</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#commands" target="_blank" rel="noreferrer">Commands</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#override" target="_blank" rel="noreferrer">Override pages</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#notifications" target="_blank" rel="noreferrer">Notifications</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#localize" target="_blank" rel="noreferrer">Internationalize the UI</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#next" target="_blank" rel="noreferrer">Continue exploring</a></li></ul><h1 id="design-the-user-interface" tabindex="-1">Design the user interface <a class="header-anchor" href="#design-the-user-interface" aria-hidden="true">#</a></h1><p>Published on Friday, March 16, 2018 \u2022 Updated on Wednesday, April 27, 2022</p><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#action" target="_blank" rel="noreferrer">The extension action</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#browser" target="_blank" rel="noreferrer">Register the action</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#activate_pages" target="_blank" rel="noreferrer">Activate the action conditionally</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#provide-the-extension-icons" target="_blank" rel="noreferrer">Provide the extension icons</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#icons" target="_blank" rel="noreferrer">Designate action icons</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#icon_size" target="_blank" rel="noreferrer">Create and register additional icons</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#additional_features" target="_blank" rel="noreferrer">Additional UI features</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#badge" target="_blank" rel="noreferrer">Action badge</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#popup" target="_blank" rel="noreferrer">Popup</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#tooltip" target="_blank" rel="noreferrer">Tooltip</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#click" target="_blank" rel="noreferrer">Click Event</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#omnibox" target="_blank" rel="noreferrer">Omnibox</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#context_menu" target="_blank" rel="noreferrer">Context menu</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#commands" target="_blank" rel="noreferrer">Commands</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#override" target="_blank" rel="noreferrer">Override pages</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#notifications" target="_blank" rel="noreferrer">Notifications</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#localize" target="_blank" rel="noreferrer">Internationalize the UI</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#next" target="_blank" rel="noreferrer">Continue exploring</a></li></ul><p>Like Chrome&#39;s user interface (UI), an extension UI should be purposeful and minimal. Extensions should allow users to customize or enhance the user&#39;s browsing experience without distracting from it.</p><p>This guide explores required and optional user interface features. Use it to understand how and when to implement different UI elements within an extension.</p><h2 id="the-extension-action" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#action" target="_blank" rel="noreferrer">#</a> The extension action <a class="header-anchor" href="#the-extension-action" aria-hidden="true">#</a></h2><p>The <a href="https://developer.chrome.com/docs/extensions/reference/action/" target="_blank" rel="noreferrer">Action API</a> controls the extension&#39;s action (toolbar icon). It can either open a <a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#popup" target="_blank" rel="noreferrer">popup</a> or trigger some functionality when it&#39;s <a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#click" target="_blank" rel="noreferrer">clicked</a>.</p><p>Users can trigger an extension&#39;s action by expanding the extension menu and selecting the desired extension.</p><p>To make it easier to access an extension, the user may choose to pin the extension&#39;s action to the toolbar. Once pinned, the extension&#39;s action will appear to the left of the extension menu. Users can rearrange their pinned extensions by dragging and dropping their action icons to the desired order.</p><p>![Unpinned extension](./Design the user interface - Chrome Developers_files/iouvm1a3lsQWGyg6fSMS.png)</p><p><strong>Unpinned extension</strong></p><p>![Pinned extension](./Design the user interface - Chrome Developers_files/KS09fVoCj3YWuIoH5EFn.png)</p><p><strong>Pinned extension</strong></p><h3 id="register-the-action" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#browser" target="_blank" rel="noreferrer">#</a> Register the action <a class="header-anchor" href="#register-the-action" aria-hidden="true">#</a></h3><p>To use the Action API, the extension&#39;s <a href="https://developer.chrome.com/docs/extensions/mv3/manifest/" target="_blank" rel="noreferrer">manifest</a> must contain an <code>&quot;action&quot;</code> key. This informs the browser that the extension will customize the action.</p><pre><code>{  &quot;name&quot;: &quot;My Awesome action MV3 Extension&quot;,  ...  &quot;action&quot;: {    ...  }  ...}
</code></pre><p>See the <a href="https://developer.chrome.com/docs/extensions/reference/action/#manifest" target="_blank" rel="noreferrer">manifest section</a> of the Action API docs for a full description on the optional properties of this field.</p><h3 id="activate-the-action-conditionally" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#activate_pages" target="_blank" rel="noreferrer">#</a> Activate the action conditionally <a class="header-anchor" href="#activate-the-action-conditionally" aria-hidden="true">#</a></h3><p>The <a href="https://developer.chrome.com/docs/extensions/reference/declarativeContent/" target="_blank" rel="noreferrer">DeclarativeContent API</a> allows you to enable the extension&#39;s action based on the page URL or if the CSS selectors match the elements on the page.</p><p>When an extension is disabled, the icon is grayed out. If the user clicks the disabled extension, the extension&#39;s context menu will appear.</p><p>![Clicked Disabled extension](./Design the user interface - Chrome Developers_files/hlYsQJPFsF7WBAjJZ6DS.png)</p><p>Disabled extension.</p><h2 id="provide-the-extension-icons" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#provide-the-extension-icons" target="_blank" rel="noreferrer">#</a> Provide the extension icons <a class="header-anchor" href="#provide-the-extension-icons" aria-hidden="true">#</a></h2><p>An extension requires at least one icon to represent it. Provide icons in PNG format for the best visual results, although any raster format supported by Blink including BMP, GIF, ICO, and JPEG is accepted.</p><p>Caution</p><p>SVG files are not supported for any icons declared in the manifest.</p><p>Ensure your icon follows the <a href="https://developer.chrome.com/docs/webstore/images/#icons" target="_blank" rel="noreferrer">extension icon best practices</a>.</p><h3 id="designate-action-icons" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#icons" target="_blank" rel="noreferrer">#</a> Designate action icons <a class="header-anchor" href="#designate-action-icons" aria-hidden="true">#</a></h3><p>Icons specific to the toolbar are registered in the <code>&quot;default_icon&quot;</code> field under <a href="https://developer.chrome.com/docs/extensions/reference/action/" target="_blank" rel="noreferrer"><code>action</code></a> in the manifest. Including multiple sizes is encouraged to scale for the 16-dip space. At minimum, 16x16 and 32x32 sizes are recommended.</p><pre><code>{  &quot;name&quot;: &quot;My Awesome Extension&quot;,  ...  &quot;action&quot;: {    &quot;default_icon&quot;: {      &quot;16&quot;: &quot;extension_toolbar_icon16.png&quot;,      &quot;32&quot;: &quot;extension_toolbar_icon32.png&quot;    }  }  ...}
</code></pre><p>All icons should be square or they may be distorted. If no icons are supplied, Chrome will add a generic one to the toolbar with the first letter of the extension name.</p><h3 id="create-and-register-additional-icons" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#icon_size" target="_blank" rel="noreferrer">#</a> Create and register additional icons <a class="header-anchor" href="#create-and-register-additional-icons" aria-hidden="true">#</a></h3><p>Include additional icons in the following sizes for uses outside of the toolbar.</p><p>Icon Size</p><p>Icon Use</p><p>16x16</p><p>Favicon on the extension&#39;s pages and context menu icon.</p><p>32x32</p><p>Windows computers often require this size.</p><p>48x48</p><p>Displays on the extension management page.</p><p>128x128</p><p>Displays on installation and in the Chrome Web Store.</p><p>Register icons in the manifest under the <code>&quot;icons&quot;</code> field.</p><pre><code>{  &quot;name&quot;: &quot;My Awesome Extension&quot;,  ...  &quot;icons&quot;: {    &quot;16&quot;: &quot;extension_icon16.png&quot;,    &quot;32&quot;: &quot;extension_icon32.png&quot;,    &quot;48&quot;: &quot;extension_icon48.png&quot;,    &quot;128&quot;: &quot;extension_icon128.png&quot;  }  ...}
</code></pre><h2 id="additional-ui-features" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#additional_features" target="_blank" rel="noreferrer">#</a> Additional UI features <a class="header-anchor" href="#additional-ui-features" aria-hidden="true">#</a></h2><h3 id="action-badge" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#badge" target="_blank" rel="noreferrer">#</a> Action badge <a class="header-anchor" href="#action-badge" aria-hidden="true">#</a></h3><p>Badges display a colored banner on top of the action icon. They can only be used when the <code>&quot;action&quot;</code> is declared in the manifest.</p><p>Use badges to indicate the state of the extension. The <a href="https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/examples/water_alarm_notification" target="_blank" rel="noreferrer">Drink Water</a> sample extension displays a badge with &quot;ON&quot; to show the user they have successfully set an alarm and displays nothing when the extension is idle. Badges can contain up to 4 characters.</p><p>![Badge On](./Design the user interface - Chrome Developers_files/nXwAHSWLBEgT8099ITT0.png)</p><p>![Badge Off](./Design the user interface - Chrome Developers_files/pNz8UgfTBMmcf7fE9wja.png)</p><p>You can set the text of the badge by calling <a href="https://developer.chrome.com/docs/extensions/reference/action#method-setBadgeText" target="_blank" rel="noreferrer"><code>chrome.action.setBadgeText()</code></a> and the banner color by calling <a href="https://developer.chrome.com/docs/extensions/reference/action#method-setBadgeBackgroundColor" target="_blank" rel="noreferrer"><code>chrome.action.setBadgeBackgroundColor()</code></a>.</p><pre><code>chrome.action.setBadgeText({text: &#39;ON&#39;});chrome.action.setBadgeBackgroundColor({color: &#39;#4688F1&#39;});
</code></pre><h3 id="popup" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#popup" target="_blank" rel="noreferrer">#</a> Popup <a class="header-anchor" href="#popup" aria-hidden="true">#</a></h3><p>A popup is an HTML file that is displayed in a special window when the user clicks the action icon. A popup works very similarly to a web page; it can contain links to stylesheets and script tags, but does not allow inline JavaScript.</p><p>The <a href="https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/examples/water_alarm_notification" target="_blank" rel="noreferrer">Drink Water Event</a> example popup displays available timer options. Users set an alarm by clicking one of the provided buttons.</p><p>![Popup sample screenshot](./Design the user interface - Chrome Developers_files/JVduBMXnyUorfNjFZmue.png)</p><pre><code>&lt;html&gt;  &lt;head&gt;    &lt;title&gt;Water Popup&lt;/title&gt;  &lt;/head&gt;  &lt;body&gt;      &lt;img src=&quot;./stay_hydrated.png&quot; id=&quot;hydrateImage&quot;&gt;      &lt;button id=&quot;sampleSecond&quot; value=&quot;0.1&quot;&gt;Sample Second&lt;/button&gt;      &lt;button id=&quot;min15&quot; value=&quot;15&quot;&gt;15 Minutes&lt;/button&gt;      &lt;button id=&quot;min30&quot; value=&quot;30&quot;&gt;30 Minutes&lt;/button&gt;      &lt;button id=&quot;cancelAlarm&quot;&gt;Cancel Alarm&lt;/button&gt;    &lt;script src=&quot;popup.js&quot;&gt;&lt;/script&gt;  &lt;/body&gt;&lt;/html&gt;
</code></pre><p>The popup is registered in the manifest under the <code>&quot;action&quot;</code> key.</p><pre><code>{  &quot;name&quot;: &quot;Drink Water Event&quot;,  ...  &quot;action&quot;: {    &quot;default_popup&quot;: &quot;popup.html&quot;  }  ...}
</code></pre><p>Popups can also be set dynamically by calling <a href="https://developer.chrome.com/docs/extensions/reference/action#method-setPopup" target="_blank" rel="noreferrer"><code>action.setPopup</code></a>.</p><pre><code>chrome.storage.local.get(&#39;signed_in&#39;, (data) =&gt; {  if (data.signed_in) {    chrome.action.setPopup({popup: &#39;popup.html&#39;});  } else {    chrome.action.setPopup({popup: &#39;popup_sign_in.html&#39;});  }});
</code></pre><h3 id="tooltip" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#tooltip" target="_blank" rel="noreferrer">#</a> Tooltip <a class="header-anchor" href="#tooltip" aria-hidden="true">#</a></h3><p>Use a tooltip to give short descriptions or instructions to users when hovering over the action icon. By default, the tootip displays the name of the extension.</p><p>![A screenshot of an example tooltip](./Design the user interface - Chrome Developers_files/Go8aQg0vd0f2hkOFElLK.png)</p><p>Tooltips are registered in the <code>&quot;default_title&quot;</code> field under the <code>&quot;action&quot;</code> key in the manifest.</p><pre><code>{  &quot;name&quot;: &quot;Tab Flipper&quot;,  ...  &quot;action&quot;: {    &quot;default_title&quot;: &quot;Press Ctrl(Win)/Command(Mac)+Shift+Right/Left to flip tabs&quot;  }...}
</code></pre><p>Tooltips can also be set or updated by calling <a href="https://developer.chrome.com/docs/extensions/reference/action#method-setTitle" target="_blank" rel="noreferrer"><code>action.setTitle</code></a>.</p><h3 id="click-event" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#click" target="_blank" rel="noreferrer">#</a> Click Event <a class="header-anchor" href="#click-event" aria-hidden="true">#</a></h3><p>It&#39;s possible to register an <a href="https://developer.chrome.com/docs/extensions/reference/action/#event-onClicked" target="_blank" rel="noreferrer">OnClicked handler</a> for when the user clicks the action item. However, this won&#39;t fire if the action has a popup (default or otherwise).</p><pre><code>chrome.action.onClicked.addListener(function(tab) {  chrome.action.setTitle({tabId: tab.id, title: &quot;You are on tab:&quot; + tab.id});});
</code></pre><h3 id="omnibox" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#omnibox" target="_blank" rel="noreferrer">#</a> Omnibox <a class="header-anchor" href="#omnibox" aria-hidden="true">#</a></h3><p>Users can invoke extension functionality through the <a href="https://developer.chrome.com/docs/extensions/reference/omnibox/" target="_blank" rel="noreferrer">Omnibox API</a>. Include the <code>&quot;omnibox&quot;</code> field in the manifest and designate a keyword. The <a href="https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/api/omnibox/new-tab-search" target="_blank" rel="noreferrer">Omnibox New Tab Search</a> sample extension uses nt as the keyword.</p><pre><code>{  &quot;name&quot;: &quot;Omnibox New Tab Search&quot;,  ...  &quot;omnibox&quot;: { &quot;keyword&quot; : &quot;nt&quot; },  &quot;default_icon&quot;: {    &quot;16&quot;: &quot;newtab_search16.png&quot;,    &quot;32&quot;: &quot;newtab_search32.png&quot;  }  ...}
</code></pre><p>When the user types &quot;nt&quot; into the omnibox, it activates the extension. To signal this to the user, it grayscales the provided 16x16 icon and includes it in the omnibox next to the extension name.</p><p>![Active Omnibox Extension](./Design the user interface - Chrome Developers_files/T0jCZDUVfuEANigPV6bY.png)</p><p>The extension listens to the <a href="https://developer.chrome.com/docs/extensions/reference/omnibox#event-onInputEntered" target="_blank" rel="noreferrer"><code>omnibox.onInputEntered</code></a> event. After it&#39;s triggered, the extension opens a new tab containing a Google search for the user&#39;s entry.</p><pre><code>chrome.omnibox.onInputEntered.addListener(function(text) {  // Encode user input for special characters , / ? : @ &amp; = + $ #  const newURL = &#39;https://www.google.com/search?q=&#39; + encodeURIComponent(text);  chrome.tabs.create({ url: newURL });});
</code></pre><h3 id="context-menu" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#context_menu" target="_blank" rel="noreferrer">#</a> Context menu <a class="header-anchor" href="#context-menu" aria-hidden="true">#</a></h3><p>You can use the <a href="https://developer.chrome.com/docs/extensions/reference/contextMenus/" target="_blank" rel="noreferrer">ContextMenus API</a> by granting the <code>&quot;contextMenus&quot;</code> permission in the manifest.</p><pre><code>{  &quot;name&quot;: &quot;Global Google Search&quot;,  ...  &quot;permissions&quot;: [    &quot;contextMenus&quot;,    &quot;storage&quot;  ],  &quot;icons&quot;: {    &quot;16&quot;: &quot;globalGoogle16.png&quot;,    &quot;48&quot;: &quot;globalGoogle48.png&quot;,    &quot;128&quot;: &quot;globalGoogle128.png&quot;  }  ...}
</code></pre><p>The 16x16 icon is displayed next to the new menu entry.</p><p>![Context Menu Icon](./Design the user interface - Chrome Developers_files/jpA0DLCg2sEnwIf4FkLp.png)</p><p>Create a context menu by calling <a href="https://developer.chrome.com/docs/extensions/reference/contextMenus#method-create" target="_blank" rel="noreferrer"><code>contextMenus.create()</code></a> in the background script. This should be done under the <a href="https://developer.chrome.com/docs/extensions/reference/runtime#event-onInstalled" target="_blank" rel="noreferrer"><code>runtime.onInstalled</code></a> listener event.</p><pre><code>// background.jschrome.runtime.onInstalled.addListener(async () =&gt; {  for (let [tld, locale] of Object.entries(tldLocales)) {    chrome.contextMenus.create({      id: tld,      title: locale,      type: &#39;normal&#39;,      contexts: [&#39;selection&#39;],    });  }});

const tldLocales = {  &#39;com.au&#39;: &#39;Australia&#39;,  &#39;com.br&#39;: &#39;Brazil&#39;,  &#39;ca&#39;: &#39;Canada&#39;,  &#39;cn&#39;: &#39;China&#39;,  &#39;fr&#39;: &#39;France&#39;,  &#39;it&#39;: &#39;Italy&#39;,  &#39;co.in&#39;: &#39;India&#39;,  &#39;co.jp&#39;: &#39;Japan&#39;,  &#39;com.ms&#39;: &#39;Mexico&#39;,  &#39;ru&#39;: &#39;Russia&#39;,  &#39;co.za&#39;: &#39;South Africa&#39;,  &#39;co.uk&#39;: &#39;United Kingdom&#39;};
</code></pre><p>The <a href="https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/api/contextMenus/global_context_search" target="_blank" rel="noreferrer">Global Google Search context menu example</a> creates multiple options from the list in <code>locales.js</code>. When an extension contains more than one context menu, Chrome automatically collapses them into a single parent menu.</p><p>![Multiple Context Menus will Collapse](./Design the user interface - Chrome Developers_files/LhrliaEhN82maJmeNp7f.png)</p><h3 id="commands" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#commands" target="_blank" rel="noreferrer">#</a> Commands <a class="header-anchor" href="#commands" aria-hidden="true">#</a></h3><p>Extensions can define specific <a href="https://developer.chrome.com/docs/extensions/reference/commands/" target="_blank" rel="noreferrer">Commands API</a> and bind them to a key combination. Register one or more shortcuts in the manifest under the <code>&quot;commands&quot;</code> key.</p><pre><code>{  &quot;name&quot;: &quot;Tab Flipper&quot;,  ...  &quot;commands&quot;: {    &quot;flip-tabs-forward&quot;: {      &quot;suggested_key&quot;: {        &quot;default&quot;: &quot;Ctrl+Shift+Right&quot;,        &quot;mac&quot;: &quot;Command+Shift+Right&quot;      },      &quot;description&quot;: &quot;Flip tabs forward&quot;    },    &quot;flip-tabs-backwards&quot;: {      &quot;suggested_key&quot;: {        &quot;default&quot;: &quot;Ctrl+Shift+Left&quot;,        &quot;mac&quot;: &quot;Command+Shift+Left&quot;      },      &quot;description&quot;: &quot;Flip tabs backwards&quot;    }  }  ...}
</code></pre><p>Commands can be used to provide new or alternative browser shortcuts. The <a href="https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/api/default_command_override" target="_blank" rel="noreferrer">Tab Flipper</a> sample extension listens to the <a href="https://developer.chrome.com/docs/extensions/reference/commands#event-onCommand" target="_blank" rel="noreferrer"><code>commands.onCommand</code></a> event in the <a href="https://developer.chrome.com/docs/extensions/mv3/background_pages/" target="_blank" rel="noreferrer">background script</a> and defines functionality for each registered combination.</p><pre><code>// background.js chrome.commands.onCommand.addListener(command =&gt; {  // command will be &quot;flip-tabs-forward&quot; or &quot;flip-tabs-backwards&quot;  chrome.tabs.query({currentWindow: true}, tabs =&gt; {    // Sort tabs according to their index in the window.    tabs.sort((a, b) =&gt; a.index - b.index);    const activeIndex = tabs.findIndex((tab) =&gt; tab.active);    const lastTab = tabs.length - 1;    let newIndex = -1;    if (command === &#39;flip-tabs-forward&#39;) {      newIndex = activeIndex === 0 ? lastTab : activeIndex - 1;    } else {  // &#39;flip-tabs-backwards&#39;      newIndex = activeIndex === lastTab ? 0 : activeIndex + 1;    }    chrome.tabs.update(tabs[newIndex].id, {active: true, highlighted: true});  });});
</code></pre><h3 id="override-pages" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#override" target="_blank" rel="noreferrer">#</a> Override pages <a class="header-anchor" href="#override-pages" aria-hidden="true">#</a></h3><p>An extension can <a href="https://developer.chrome.com/docs/extensions/mv3/override/" target="_blank" rel="noreferrer">override</a> and replace the History, New Tab, or Bookmarks page with a custom HTML file. Like a <a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#popup" target="_blank" rel="noreferrer">popup</a>, it can include specialized logic and style, but does not allow inline JavaScript.</p><p>A single extension is limited to overriding <strong>only one</strong> of the three possible pages.</p><p>Register an override page in the manifest under the <code>&quot;chrome_url_overrides&quot;</code> field.</p><pre><code>{  &quot;name&quot;: &quot;Awesome Override Extension&quot;,  ...  &quot;chrome_url_overrides&quot; : {    &quot;newtab&quot;: &quot;override_page.html&quot;  },  ...}
</code></pre><p>The <code>&quot;newtab&quot;</code> field should be replaced with <code>&quot;bookmarks&quot;</code> or <code>&quot;history&quot;</code> when overriding those pages.</p><pre><code>&lt;html&gt;  &lt;head&gt;  &lt;title&gt;New Tab&lt;/title&gt;  &lt;/head&gt;  &lt;body&gt;    &lt;h1&gt;Hello World&lt;/h1&gt;    &lt;script src=&quot;logic.js&quot;&gt;&lt;/script&gt;  &lt;/body&gt;&lt;/html&gt;
</code></pre><h3 id="notifications" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#notifications" target="_blank" rel="noreferrer">#</a> Notifications <a class="header-anchor" href="#notifications" aria-hidden="true">#</a></h3><p>You can communicate relevant information to users by displaying notifications directly in their system tray.</p><p>To use the <a href="https://developer.chrome.com/docs/extensions/reference/notifications/" target="_blank" rel="noreferrer">Notifications API</a>, you must declare the <code>&quot;notifications&quot;</code> permission in the manifest.</p><pre><code>// manifest.json{   &quot;name&quot;: &quot;Drink Water Event Popup&quot;,...  &quot;permissions&quot;: [    &quot;alarms&quot;,    &quot;notifications&quot;,    &quot;storage&quot;  ], ...}
</code></pre><p>Once the permission is declared, you can display a notification by calling <a href="https://developer.chrome.com/docs/extensions/reference/notifications#method-create" target="_blank" rel="noreferrer"><code>notifications.create()</code></a>.</p><pre><code>// background.jsfunction showStayHydratedNotification() {  chrome.notifications.create({    type: &#39;basic&#39;,    iconUrl: &#39;stay_hydrated.png&#39;,    title: &#39;Time to Hydrate&#39;,    message: &#39;Everyday I\\&#39;m Guzzlin\\&#39;!&#39;,    buttons: [      { title: &#39;Keep it Flowing.&#39; }    ],    priority: 0  });}
</code></pre><p>![Mac OS notification](./Design the user interface - Chrome Developers_files/e5S112AtwfnA5o64JrGg.png)</p><p>Notification in Mac OS</p><h2 id="internationalize-the-ui" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#localize" target="_blank" rel="noreferrer">#</a> Internationalize the UI <a class="header-anchor" href="#internationalize-the-ui" aria-hidden="true">#</a></h2><p>You can use the <a href="https://developer.chrome.com/docs/extensions/reference/i18n/" target="_blank" rel="noreferrer">I18n API</a> to internationalize your extension. Create directories to house language specific messages within a folder called <code>_locales/</code>, like this:</p><ul><li><code>_locales/en/messages.json</code></li><li><code>_locales/es/messages.json</code></li></ul><p><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/" target="_blank" rel="noreferrer">Format messages</a> inside of each language&#39;s <code>messages.json</code>. For example, the following code localizes the tooltip:</p><p>Located in <code>_locales/en/messages.json</code>:</p><pre><code>{  &quot;__MSG_tooltip__&quot;: {    &quot;message&quot;: &quot;Hello!&quot;,    &quot;description&quot;: &quot;Tooltip&quot;  }}
</code></pre><p>Located in <code>_locales/es/messages.json</code>:</p><pre><code>{  &quot;__MSG_tooltip__&quot;: {    &quot;message&quot;: &quot;Hola!&quot;,    &quot;description&quot;: &quot;Tooltip&quot;  }}
</code></pre><p>Specify the name of the message in the <code>&quot;default_title&quot;</code> field of the manifest. The <code>&quot;default_locale&quot;</code> field must be defined.</p><pre><code>// manifest.json{  &quot;name&quot;: &quot;Tab Flipper&quot;,  ...  &quot;action&quot;: {    &quot;default_title&quot;: &quot;__MSG_tooltip__&quot;  },  &quot;default_locale&quot;: &quot;en&quot;  ...}
</code></pre><h2 id="continue-exploring" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/user_interface/#next" target="_blank" rel="noreferrer">#</a> Continue exploring <a class="header-anchor" href="#continue-exploring" aria-hidden="true">#</a></h2><p>See the <a href="https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/api/action" target="_blank" rel="noreferrer">Action API example</a> for a complete demonstration of the action APIs capabilities.</p><p>Updated on Wednesday, April 27, 2022 \u2022 <a href="https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/user_interface/index.md" target="_blank" rel="noreferrer">Improve article</a></p>`,121),i=[a];function s(c,l,d,h,p,u){return t(),o("div",null,i)}const g=e(r,[["render",s]]);export{f as __pageData,g as default};