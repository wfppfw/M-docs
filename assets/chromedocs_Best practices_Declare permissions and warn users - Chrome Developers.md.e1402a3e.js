import{_ as e,o as s,c as r,a as o}from"./app.f245760f.js";const u=JSON.parse('{"title":"Declare permissions and warn users","description":"","frontmatter":{},"headers":[{"level":2,"title":"# Organize permissions","slug":"organize-permissions","link":"#organize-permissions","children":[]},{"level":2,"title":"# Identify required permissions","slug":"identify-required-permissions","link":"#identify-required-permissions","children":[]},{"level":2,"title":"# Trigger optional permissions with events","slug":"trigger-optional-permissions-with-events","link":"#trigger-optional-permissions-with-events","children":[]},{"level":2,"title":"# Substitute the activeTab permission","slug":"substitute-the-activetab-permission","link":"#substitute-the-activetab-permission","children":[]},{"level":2,"title":"# Allowing access","slug":"allowing-access","link":"#allowing-access","children":[]},{"level":2,"title":"# Understanding permissions","slug":"understanding-permissions","link":"#understanding-permissions","children":[]},{"level":2,"title":"# Viewing warnings","slug":"viewing-warnings","link":"#viewing-warnings","children":[{"level":3,"title":"# Permissions with warnings","slug":"permissions-with-warnings","link":"#permissions-with-warnings","children":[]}]},{"level":2,"title":"# Update permissions","slug":"update-permissions","link":"#update-permissions","children":[]}],"relativePath":"chromedocs/Best practices/Declare permissions and warn users - Chrome Developers.md"}'),n={name:"chromedocs/Best practices/Declare permissions and warn users - Chrome Developers.md"},t=o(`<ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#declare_manifest" target="_blank" rel="noreferrer">Organize permissions</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#required_permissions" target="_blank" rel="noreferrer">Identify required permissions</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#optional_events" target="_blank" rel="noreferrer">Trigger optional permissions with events</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#activeTab_permission" target="_blank" rel="noreferrer">Substitute the activeTab permission</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#allow_access" target="_blank" rel="noreferrer">Allowing access</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#understanding-permissions" target="_blank" rel="noreferrer">Understanding permissions</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#view_warnings" target="_blank" rel="noreferrer">Viewing warnings</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#permissions_with_warnings" target="_blank" rel="noreferrer">Permissions with warnings</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#update_permissions" target="_blank" rel="noreferrer">Update permissions</a></li></ul><h1 id="declare-permissions-and-warn-users" tabindex="-1">Declare permissions and warn users <a class="header-anchor" href="#declare-permissions-and-warn-users" aria-hidden="true">#</a></h1><p>Published on Tuesday, September 18, 2012 \u2022 Updated on Wednesday, October 10, 2018</p><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#declare_manifest" target="_blank" rel="noreferrer">Organize permissions</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#required_permissions" target="_blank" rel="noreferrer">Identify required permissions</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#optional_events" target="_blank" rel="noreferrer">Trigger optional permissions with events</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#activeTab_permission" target="_blank" rel="noreferrer">Substitute the activeTab permission</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#allow_access" target="_blank" rel="noreferrer">Allowing access</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#understanding-permissions" target="_blank" rel="noreferrer">Understanding permissions</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#view_warnings" target="_blank" rel="noreferrer">Viewing warnings</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#permissions_with_warnings" target="_blank" rel="noreferrer">Permissions with warnings</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#update_permissions" target="_blank" rel="noreferrer">Update permissions</a></li></ul><p>An extension&#39;s ability to access websites and most Chrome APIs is determined by its declared <a href="https://developer.chrome.com/docs/extensions/mv3/declare_permissions/" target="_blank" rel="noreferrer">permissions</a>. Permissions should be restricted to only what is needed for its functionality. Limiting permissions establishes an extension&#39;s capabilities and reduces possible incursion to data if the extension is compromised by an attacker. Protect extensions and their users by implementing explicit, minimal and optional permissions.</p><h2 id="organize-permissions" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#declare_manifest" target="_blank" rel="noreferrer">#</a> Organize permissions <a class="header-anchor" href="#organize-permissions" aria-hidden="true">#</a></h2><p>Permissions are known strings that refer to a Chrome API or <a href="https://developer.chrome.com/docs/extensions/mv3/match_patterns/" target="_blank" rel="noreferrer">match patterns</a> that grant access to one or more hosts. They are listed in the manifest and specified as required permissions or <a href="https://developer.chrome.com/docs/extensions/reference/permissions#step-2-declare-optional-permissions-in-the-manifest" target="_blank" rel="noreferrer">optional permissions</a>.</p><pre><code>{  &quot;name&quot;: &quot;Permissions Extension&quot;,  ...  // required permissions  &quot;permissions&quot;: [    &quot;activeTab&quot;,    &quot;contextMenus&quot;,    &quot;storage&quot;  ],  // optional permissions  &quot;optional_permissions&quot;: [    &quot;topSites&quot;,  ],  &quot;host_permissions&quot;: [    &quot;https://www.developer.chrome.com/*&quot;  ],  ...  &quot;manifest_version&quot;: 3}
</code></pre><p>Limit required permissions to only what is needed for the extension&#39;s core functionality. An extension should not request more permissions than it currently needs; do not future proof by requesting permissions that may be needed with updates.</p><p>Permissions needed for optional features should be registered as <a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#optional_events" target="_blank" rel="noreferrer">optional permissions</a>. This allows users to decide how much access they are willing to provide an extension and which features are desired.</p><h2 id="identify-required-permissions" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#required_permissions" target="_blank" rel="noreferrer">#</a> Identify required permissions <a class="header-anchor" href="#identify-required-permissions" aria-hidden="true">#</a></h2><p>A simple extension may need to request multiple permissions, and many permissions display <a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#permissions_with_warnings" target="_blank" rel="noreferrer">warnings</a> on installation. Users are more likely to trust an extension with limited warnings or when permissions are explained to them.</p><p>![Extension permission warnings on installation](./Declare permissions and warn users - Chrome Developers_files/VVyazEJTquUP7aa6OZn0.png)</p><p>Identify the core functionality of an extension and what permissions are required for it. Consider making features optional if they require permissions with warnings.</p><h2 id="trigger-optional-permissions-with-events" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#optional_events" target="_blank" rel="noreferrer">#</a> Trigger optional permissions with events <a class="header-anchor" href="#trigger-optional-permissions-with-events" aria-hidden="true">#</a></h2><p>The <a href="https://developer.chrome.com/docs/extensions/mv3/samples#search:optional" target="_blank" rel="noreferrer">optional permissions sample extension&#39;s</a> core functionality is overriding the new tab page. One feature is displaying the user&#39;s goal of the day. This feature only requires the <a href="https://developer.chrome.com/docs/extensions/reference/storage/" target="_blank" rel="noreferrer">storage</a> permission, which does not include a warning.</p><p>![Extension button that enables additional features](./Declare permissions and warn users - Chrome Developers_files/wtbjayBDYDyKZe2x580P.png)</p><p>The extension has an additional feature; displaying the user&#39;s top sites. This feature requires the <a href="https://developer.chrome.com/docs/extensions/reference/topSites/" target="_blank" rel="noreferrer">topSites</a> permission, which has a warning.</p><p>![Extension warning for topSites API](./Declare permissions and warn users - Chrome Developers_files/5edHzqeUOJ8V6XHkjNBM.png)</p><p>Developing features that rely on permissions with warnings as optional and introducing those features organically gives users a risk free introduction to the extension. Additionally, this allows users to further customize their experience with an extension and creates opportunity to explain warnings.</p><h2 id="substitute-the-activetab-permission" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#activeTab_permission" target="_blank" rel="noreferrer">#</a> Substitute the activeTab permission <a class="header-anchor" href="#substitute-the-activetab-permission" aria-hidden="true">#</a></h2><p>The <code>activeTab</code> permission grants temporary access to the site the user is on and allows the extension to use the <a href="https://developer.chrome.com/docs/extensions/reference/tabs/" target="_blank" rel="noreferrer"><code>&quot;tabs&quot;</code></a> permission on the current tab. It replaces the need for <code>&quot;&lt;all_urls&gt;&quot;</code> in many cases and displays no warning on installation.</p><p>Without activeTab:</p><p>![Permissions UI without activeTab](./Declare permissions and warn users - Chrome Developers_files/jb7SZPwm4zPoOT7BVMw3.png)</p><p>With activeTab:</p><p>![Permissions UI with activeTab](./Declare permissions and warn users - Chrome Developers_files/2QKcJJSz35suMsGSWXM4.png)</p><p>The <code>activeTab</code> permission grants an extension temporary access to the currently active tab when the <a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#p_activeTab_gestures" target="_blank" rel="noreferrer">user invokes</a> the extension. If the extension is compromised, the attacker would need to wait for the user to invoke the extension before obtaining access, and that access would only last until the tab is navigated or closed.</p><p>While the <code>activeTab</code> permission is enabled for a tab, an extension can:</p><ul><li>Call <a href="https://developer.chrome.com/docs/extensions/reference/scripting#method-insertCSS" target="_blank" rel="noreferrer"><code>scripting.insertCSS</code></a> on that tab.</li><li>Get the URL, title, and favicon for that tab via an API that returns a <a href="https://developer.chrome.com/docs/extensions/reference/tabs#type-Tab" target="_blank" rel="noreferrer"><code>tabs.Tab</code></a> object.</li><li>Intercept network requests in the tab to the tab&#39;s main frame origin using the <a href="https://developer.chrome.com/docs/extensions/reference/webRequest/" target="_blank" rel="noreferrer">webRequest</a> API. The extension temporarily gets host permissions for the tab&#39;s main frame origin.</li></ul><p>The following user gestures enable <code>activeTab</code>:</p><ul><li>Executing a <a href="https://developer.chrome.com/docs/extensions/reference/browserAction/" target="_blank" rel="noreferrer">browser action</a></li><li>Executing a <a href="https://developer.chrome.com/docs/extensions/reference/pageAction/" target="_blank" rel="noreferrer">page action</a></li><li>Executing a <a href="https://developer.chrome.com/docs/extensions/reference/contextMenus/" target="_blank" rel="noreferrer">context menu item</a></li><li>Executing a keyboard shortcut from the <a href="https://developer.chrome.com/docs/extensions/reference/commands/" target="_blank" rel="noreferrer">commands API</a></li><li>Accepting a suggestion from the <a href="https://developer.chrome.com/docs/extensions/reference/omnibox/" target="_blank" rel="noreferrer">omnibox API</a></li></ul><h2 id="allowing-access" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#allow_access" target="_blank" rel="noreferrer">#</a> Allowing access <a class="header-anchor" href="#allowing-access" aria-hidden="true">#</a></h2><p>If an extension needs to access <code>file://</code> URLs or operate in incognito mode, users will need to enable access for those features inside the extension&#39;s detail page at chrome://extensions.</p><p>![Allow file urls and incognito mode on the extension detial page](./Declare permissions and warn users - Chrome Developers_files/CXSHPxG4giUkzfGR67mY.png)</p><p>An extension can detect if it is enabled in incognito mode by calling <a href="https://developer.chrome.com/docs/extensions/reference/extension#method-isAllowedIncognitoAccess" target="_blank" rel="noreferrer"><code>extension.isAllowedIncognitoAccess()</code></a> or able run on <code>file://</code> URLs with <a href="https://developer.chrome.com/docs/extensions/reference/extension#method-isAllowedFileSchemeAccess" target="_blank" rel="noreferrer"><code>extension.isAllowedFileSchemeAccess()</code></a> .</p><h2 id="understanding-permissions" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#understanding-permissions" target="_blank" rel="noreferrer">#</a> Understanding permissions <a class="header-anchor" href="#understanding-permissions" aria-hidden="true">#</a></h2><p>Permission warnings exist to describe the capabilities granted by an API to extension users, but some of these warnings may not be obvious at first. For instance, adding the <a href="https://developer.chrome.com/docs/extensions/reference/tabs/" target="_blank" rel="noreferrer"><code>&quot;tabs&quot;</code></a> permission results in a seemingly unrelated warning: the extension can <strong>Read your browsing activity</strong>. Although the <code>chrome.tabs</code> API might be used to only open new tabs, it can also be used to see the URL that is associated with every newly opened tab by using their <a href="https://developer.chrome.com/docs/extensions/reference/tabs#type-Tab" target="_blank" rel="noreferrer">tabs.Tab</a> objects.</p><p>When possible, implement <a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#optional_events" target="_blank" rel="noreferrer">optional permissions</a> or a less powerful API to avoid alarming warnings.</p><h2 id="viewing-warnings" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#view_warnings" target="_blank" rel="noreferrer">#</a> Viewing warnings <a class="header-anchor" href="#viewing-warnings" aria-hidden="true">#</a></h2><p>No permission warnings will be displayed if an extension is loaded as an unpacked file. To view an extension&#39;s permission warnings, navigate to <code>chrome://extensions</code>, ensure developer mode is enabled and click <strong>PACK EXTENSION</strong>.</p><p>![Developer Mode is Checked then Click Pack Extension](./Declare permissions and warn users - Chrome Developers_files/Jvm8mGpe3j0j0aydcRnR.png)</p><p>Specify the path to the extension&#39;s folder in the Extension root directory field then click the <strong>Pack Extension</strong> button. Ignore the <strong>Private key</strong> field for a first-time package.</p><p>![Specify Extension Path then Click Pack Extension](./Declare permissions and warn users - Chrome Developers_files/vVw89rdJOdXFYxvgM9Sj.png)</p><p>Chrome will create two files, a <code>.crx</code> file and a <code>.pem</code> file, which contains the extension&#39;s private key.</p><p>![Packaged Extension Files](./Declare permissions and warn users - Chrome Developers_files/GLrVd51VTUF86K8gUxu8.png)</p><p><strong>Do not lose the private key!</strong> Keep the <code>.pem</code> file in a secret and secure place; it will be needed to <a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#update_permissions" target="_blank" rel="noreferrer">update</a> the extension.</p><p>Install the <code>.crx</code> file by dropping it into the Chrome Extension&#39;s Management page.</p><p>![Drop File to Install](./Declare permissions and warn users - Chrome Developers_files/KXm9vTnv5VRNZJ9e2AJt.png)</p><p>After dropping the <code>.crx</code> file the browser will ask if the extension can be added and display warnings.</p><p>![Warning for New Tab Extension](./Declare permissions and warn users - Chrome Developers_files/4vOB4X8ZNbdk321eAzKS.png)</p><h3 id="permissions-with-warnings" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#permissions_with_warnings" target="_blank" rel="noreferrer">#</a> Permissions with warnings <a class="header-anchor" href="#permissions-with-warnings" aria-hidden="true">#</a></h3><p><strong>Note:</strong> Permission tables are updated on a best-effort basis and may contain slight discrepancies with the <a href="https://chromium.googlesource.com/chromium/src/+/main/chrome/common/extensions/permissions/chrome_permission_message_rules.cc#:~:text=chromepermissionmessagerule%3A%3Agetallrules()" target="_blank" rel="noreferrer">current warnings</a>. Additionally, some permissions may not display warnings when paired with other permissions. For example, the <a href="https://developer.chrome.com/docs/extensions/reference/tabs/" target="_blank" rel="noreferrer"><code>&quot;tabs&quot;</code></a> warning will not show if the extension also requests <code>&quot;&lt;all_urls&gt;&quot;</code>. To verify the most recent warnings shown for extension permissions, follow the steps in <a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#view_warnings" target="_blank" rel="noreferrer">Viewing Warnings</a>.</p><p>Permission</p><p>Description</p><p>Warning</p><ul><li><code>&quot;http://*/*&quot;</code></li><li><code>&quot;https://*/*&quot;</code></li><li><code>&quot;*://*/*&quot;</code></li><li><code>&quot;&lt;all_urls&gt;&quot;</code></li></ul><p>Grants the extension access to all hosts. It may be possible to avoid declaring any host permissions by using the <a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#activeTab_permission" target="_blank" rel="noreferrer">activeTab</a> permission.</p><p><strong>Read and change all your data on the websites you visit</strong></p><p><code>&quot;https://HostName.com/&quot;</code></p><p>Grants the extension access to <code>&quot;https://HostName.com/&quot;</code>. It may be possible to avoid declaring any host permissions by using the <a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#activeTab_permission" target="_blank" rel="noreferrer">activeTab</a> permission.</p><p><strong>Read and change your data on <code>HostName.com</code></strong></p><p><code>&quot;bookmarks&quot;</code></p><p>Grants your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/bookmarks/" target="_blank" rel="noreferrer">chrome.bookmarks</a> API.</p><p><strong>Read and change your bookmarks</strong></p><p><code>&quot;clipboardRead&quot;</code></p><p>Required if the extension uses <code>document.execCommand(&#39;paste&#39;)</code>.</p><p><strong>Read data you copy and paste</strong></p><p><code>&quot;clipboardWrite&quot;</code></p><p>Indicates the extension uses <code>document.execCommand(&#39;copy&#39;)</code> or <code>document.execCommand(&#39;cut&#39;)</code>.</p><p><strong>Modify data you copy and paste</strong></p><p><code>&quot;contentSettings&quot;</code></p><p>Grants your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/contentSettings/" target="_blank" rel="noreferrer">chrome.contentSettings</a> API.</p><p><strong>Change your settings that control websites&#39; access to features such as cookies, JavaScript, plugins, geolocation, microphone, camera etc.</strong></p><p><code>&quot;debugger&quot;</code></p><p>Grants your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/debugger/" target="_blank" rel="noreferrer">chrome.debugger</a> API.</p><ul><li><strong>Access the page debugger backend</strong></li><li><strong>Read and change all your data on the websites you visit</strong></li></ul><p><code>&quot;declarativeNetRequest&quot;</code></p><p>Grants your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/" target="_blank" rel="noreferrer">chrome.declarativeNetRequest</a> API.</p><p><strong>Block page content</strong></p><p><code>&quot;desktopCapture&quot;</code></p><p>Grants your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/desktopCapture/" target="_blank" rel="noreferrer">chrome.desktopCapture</a> API.</p><p><strong>Capture content of your screen</strong></p><p><code>&quot;downloads&quot;</code></p><p>Grants your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/downloads/" target="_blank" rel="noreferrer">chrome.downloads</a> API.</p><p><strong>Manage your downloads</strong></p><p><code>&quot;favicon&quot;</code></p><p>Allows the extension to use the Favicon API.</p><p><strong>Read the icons of the websites you visit.</strong></p><p><code>&quot;geolocation&quot;</code></p><p>Allows the extension to use the HTML5 <a href="https://dev.w3.org/geo/api/spec-source.html" target="_blank" rel="noreferrer">geolocation API</a> without prompting the user for permission.</p><p><strong>Detect your physical location</strong></p><p><code>&quot;history&quot;</code></p><p>Grants your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/history/" target="_blank" rel="noreferrer">chrome.history</a> API.</p><p><strong>Read and change your browsing history</strong></p><p><code>&quot;management&quot;</code></p><p>Grants the extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/management/" target="_blank" rel="noreferrer">chrome.management</a> API.</p><p><strong>Manage your apps, extensions, and themes</strong></p><p><code>&quot;nativeMessaging&quot;</code></p><p>Gives the extension access to the <a href="https://developer.chrome.com/docs/extensions/mv3/messaging#native-messaging" target="_blank" rel="noreferrer">native messaging API</a>.</p><p><strong>Communicate with cooperating native applications</strong></p><p><code>&quot;notifications&quot;</code></p><p>Grants your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/notifications/" target="_blank" rel="noreferrer">chrome.notifications</a> API.</p><p><strong>Display notifications</strong></p><p><code>&quot;pageCapture&quot;</code></p><p>Grants the extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/pageCapture/" target="_blank" rel="noreferrer">chrome.pageCapture</a> API.</p><p><strong>Read and change all your data on the websites you visit</strong></p><p><code>&quot;privacy&quot;</code></p><p>Gives the extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/privacy/" target="_blank" rel="noreferrer">chrome.privacy</a> API.</p><p><strong>Change your privacy-related settings</strong></p><p><code>&quot;proxy&quot;</code></p><p>Grants the extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/proxy/" target="_blank" rel="noreferrer">chrome.proxy</a> API.</p><p><strong>Read and change all your data on the websites you visit</strong></p><p><code>&quot;system.storage&quot;</code></p><p>Grants the extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/system.storage" target="_blank" rel="noreferrer">chrome.system.storage</a> API.</p><p><strong>Identify and eject storage devices</strong></p><p><code>&quot;tabCapture&quot;</code></p><p>Grants the extensions access to the <a href="https://developer.chrome.com/docs/extensions/reference/tabCapture/" target="_blank" rel="noreferrer">chrome.tabCapture</a> API.</p><p><strong>Read and change all your data on the websites you visit</strong></p><p><code>&quot;tabs&quot;</code></p><p>Grants the extension access to privileged fields of the <a href="https://developer.chrome.com/extensions/tabs#type-Tab" target="_blank" rel="noreferrer"><code>Tab</code></a> objects used by several APIs including <a href="https://developer.chrome.com/extensions/tabs/" target="_blank" rel="noreferrer">chrome.tabs</a> and <a href="https://developer.chrome.com/docs/extensions/reference/windows/" target="_blank" rel="noreferrer">chrome.windows</a>. In many circumstances the extension will not need to declare the <code>&quot;tabs&quot;</code> permission to make use of these APIs.</p><p><strong>Read your browsing history</strong></p><p><code>&quot;topSites&quot;</code></p><p>Grants the extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/topSites/" target="_blank" rel="noreferrer">chrome.topSites</a> API.</p><p><strong>Read a list of your most frequently visited websites</strong></p><p><code>&quot;ttsEngine&quot;</code></p><p>Grants the extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/ttsEngine/" target="_blank" rel="noreferrer">chrome.ttsEngine</a> API.</p><p><strong>Read all text spoken using synthesized speech</strong></p><p><code>&quot;webNavigation&quot;</code></p><p>Grants the extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/webNavigation/" target="_blank" rel="noreferrer">chrome.webNavigation</a> API.</p><p><strong>Read your browsing history</strong></p><h2 id="update-permissions" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#update_permissions" target="_blank" rel="noreferrer">#</a> Update permissions <a class="header-anchor" href="#update-permissions" aria-hidden="true">#</a></h2><p>Updating an extension with additional permissions may temporarily disable it. The user will have to re-enable it after agreeing to any new warnings.</p><p>If the user manually updates an extension that now includes the <a href="https://developer.chrome.com/docs/extensions/reference/tabs/" target="_blank" rel="noreferrer">tabs</a> permission, they will get a warning on the management page.</p><p>![Adding tabs Permission](./Declare permissions and warn users - Chrome Developers_files/gotD9HeWU8LsFdacTQkq.png)</p><p>If the extension is updated automatically it will be disabled until the user agrees to the new permissions.</p><p>![Extension has been disabled](./Declare permissions and warn users - Chrome Developers_files/usZSh31pGiJxhhuKmM8B.png) ![Agree to permissions](./Declare permissions and warn users - Chrome Developers_files/ZxRaaibQJSuZ6MZBvmmo.png)</p><p>This can be avoided by making the new feature optional and adding new permission updates to <a href="https://developer.chrome.com/docs/extensions/reference/permissions#step-2-declare-optional-permissions-in-the-manifest" target="_blank" rel="noreferrer"><code>optional_permissions</code></a> in the <a href="https://developer.chrome.com/docs/extensions/mv3/manifest/" target="_blank" rel="noreferrer">manifest</a>.</p><p>Updated on Wednesday, October 10, 2018 \u2022 <a href="https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/permission_warnings/index.md" target="_blank" rel="noreferrer">Improve article</a></p>`,138),i=[t];function a(p,c,l,d,h,m){return s(),r("div",null,i)}const f=e(n,[["render",a]]);export{u as __pageData,f as default};
