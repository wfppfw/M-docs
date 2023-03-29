import{_ as e,o,c as r,a as t}from"./app.f245760f.js";const f=JSON.parse('{"title":"Declare permissions","description":"","frontmatter":{},"headers":[],"relativePath":"chromedocs/Develop extensions and themes/Declare permissions - Chrome Developers.md"}'),s={name:"chromedocs/Develop extensions and themes/Declare permissions - Chrome Developers.md"},n=t(`<h1 id="declare-permissions" tabindex="-1">Declare permissions <a class="header-anchor" href="#declare-permissions" aria-hidden="true">#</a></h1><p>Published on Monday, October 8, 2012 \u2022 Updated on Wednesday, May 21, 2014</p><p>To use most chrome.* APIs, your extension must declare its intent in the permissions fields of the <a href="https://developer.chrome.com/docs/extensions/mv3/manifest/" target="_blank" rel="noreferrer">manifest</a>. Extensions can request three categories of permissions, specified using the respective keys in the manifest:</p><ul><li><strong><code>permissions</code></strong> contain items from a list of known strings (such as &quot;geolocation&quot;)</li><li><strong><code>optional_permissions</code></strong> are like regular <code>permissions</code>, but are granted by the extension&#39;s user at runtime, rather than in advance</li><li><strong><code>host_permissions</code></strong> contain one or more <a href="https://developer.chrome.com/docs/extensions/mv3/match_patterns/" target="_blank" rel="noreferrer">match patterns</a> that give access to one or more hosts</li></ul><p>Permissions help to limit damage if your extension is compromised by malware. Some permissions are displayed to users for their consent before installation or at runtime as needed, as detailed in <a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/" target="_blank" rel="noreferrer">Permission Warnings</a>.</p><p>You should use optional permissions wherever the functionality of your extension permits, to provide users with informed control over access to resources and data. See the <a href="https://developer.chrome.com/docs/extensions/mv3/intro/platform-vision/#improved-user-visibility-and-control" target="_blank" rel="noreferrer">platform vision</a> to better understand this recommendation.</p><p>If an API requires you to declare a permission in the manifest, then its documentation tells you how to do so. For example, the <a href="https://developer.chrome.com/docs/extensions/reference/storage/" target="_blank" rel="noreferrer">Storage</a> page shows you how to declare the &quot;storage&quot; permission.</p><p>Here&#39;s an example of the permissions part of a manifest file:</p><pre><code>&quot;permissions&quot;: [  &quot;tabs&quot;,  &quot;bookmarks&quot;,  &quot;unlimitedStorage&quot;],&quot;optional_permissions&quot;: [  &quot;unlimitedStorage&quot;],&quot;host_permissions&quot;: [  &quot;http://www.blogger.com/&quot;,  &quot;http://*.google.com/&quot;],
</code></pre><p>The following table lists the currently available permissions:</p><p>Permission</p><p>Description</p><p><code>&quot;activeTab&quot;</code></p><p>Requests that the extension be granted permissions according to the <a href="https://developer.chrome.com/docs/extensions/mv3/manifest/activeTab/" target="_blank" rel="noreferrer">activeTab</a> specification.</p><p><code>&quot;alarms&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/alarms/" target="_blank" rel="noreferrer">chrome.alarms</a> API.</p><p><code>&quot;background&quot;</code></p><p>Makes Chrome start up early and shut down late, so that extensions can have a longer life.</p><p>When any installed extension has &quot;background&quot; permission, Chrome runs (invisibly) as soon as the user logs into their computer\u2014before the user launches Chrome. The &quot;background&quot; permission also makes Chrome continue running (even after its last window is closed) until the user explicitly quits Chrome.</p><p><strong>Note:</strong> Disabled extensions are treated as if they aren&#39;t installed.</p><p>You should use the &quot;background&quot; permission with <a href="https://developer.chrome.com/docs/extensions/mv3/background_pages/" target="_blank" rel="noreferrer">background scripts</a>.</p><p><code>&quot;bookmarks&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/bookmarks/" target="_blank" rel="noreferrer">chrome.bookmarks</a> API.</p><p><code>&quot;browsingData&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/browsingData/" target="_blank" rel="noreferrer">chrome.browsingData</a> API.</p><p><code>&quot;certificateProvider&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/certificateProvider/" target="_blank" rel="noreferrer">chrome.certificateProvider</a> API.</p><p><code>&quot;clipboardRead&quot;</code></p><p>Required if the extension uses <code>document.execCommand(&#39;paste&#39;)</code>.</p><p><code>&quot;clipboardWrite&quot;</code></p><p>Required if the extension uses <code>document.execCommand(&#39;copy&#39;)</code> or <code>document.execCommand(&#39;cut&#39;)</code>.</p><p><code>&quot;contentSettings&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/contentSettings/" target="_blank" rel="noreferrer">chrome.contentSettings</a> API.</p><p><code>&quot;contextMenus&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/contextMenus/" target="_blank" rel="noreferrer">chrome.contextMenus</a> API.</p><p><code>&quot;cookies&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/cookies/" target="_blank" rel="noreferrer">chrome.cookies</a> API.</p><p><code>&quot;debugger&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/debugger/" target="_blank" rel="noreferrer">chrome.debugger</a> API.</p><p><code>&quot;declarativeContent&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/declarativeContent/" target="_blank" rel="noreferrer">chrome.declarativeContent</a> API.</p><p><code>&quot;declarativeNetRequest&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/" target="_blank" rel="noreferrer">chrome.declarativeNetRequest</a> API.</p><p><code>&quot;declarativeNetRequestFeedback&quot;</code></p><p>Grants the extension access to events and methods within the <a href="https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/" target="_blank" rel="noreferrer">chrome.declarativeNetRequest</a> API which return information on declarative rules matched.</p><p><code>&quot;declarativeWebRequest&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/declarativeWebRequest/" target="_blank" rel="noreferrer">chrome.declarativeWebRequest</a> API.</p><p><code>&quot;desktopCapture&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/desktopCapture/" target="_blank" rel="noreferrer">chrome.desktopCapture</a> API.</p><p><code>&quot;documentScan&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/documentScan/" target="_blank" rel="noreferrer">chrome.documentScan</a> API.</p><p><code>&quot;downloads&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/downloads/" target="_blank" rel="noreferrer">chrome.downloads</a> API.</p><p><code>&quot;enterprise.deviceAttributes&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/enterprise_deviceAttributes/" target="_blank" rel="noreferrer">chrome.enterprise.deviceAttributes</a> API.</p><p><code>&quot;enterprise.hardwarePlatform&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/enterprise_hardwarePlatform/" target="_blank" rel="noreferrer">chrome.enterprise.hardwarePlatform</a> API.</p><p><code>&quot;enterprise.networkingAttributes&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/enterprise_networkingAttributes/" target="_blank" rel="noreferrer">chrome.enterprise.networkingAttributes</a> API.</p><p><code>&quot;enterprise.platformKeys&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/enterprise_platformKeys/" target="_blank" rel="noreferrer">chrome.enterprise.platformKeys</a> API.</p><p><code>&quot;experimental&quot;</code></p><p>Required if the extension uses any <a href="https://developer.chrome.com/docs/extensions/reference/#experimental_apis/" target="_blank" rel="noreferrer">chrome.experimental.* APIs</a>.</p><p><code>&quot;fileBrowserHandler&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/fileBrowserHandler/" target="_blank" rel="noreferrer">chrome.fileBrowserHandler</a> API.</p><p><code>&quot;fileSystemProvider&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/fileSystemProvider/" target="_blank" rel="noreferrer">chrome.fileSystemProvider</a> API.</p><p><code>&quot;fontSettings&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/fontSettings/" target="_blank" rel="noreferrer">chrome.fontSettings</a> API.</p><p><code>&quot;gcm&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/gcm/" target="_blank" rel="noreferrer">chrome.gcm</a> API.</p><p><code>&quot;geolocation&quot;</code></p><p>Allows the extension to use the <a href="https://dev.w3.org/geo/api/spec-source.html" target="_blank" rel="noreferrer">geolocation API</a> without prompting the user for permission.</p><p><code>&quot;history&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/history/" target="_blank" rel="noreferrer">chrome.history</a> API.</p><p><code>&quot;identity&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/identity/" target="_blank" rel="noreferrer">chrome.identity</a> API.</p><p><code>&quot;idle&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/idle/" target="_blank" rel="noreferrer">chrome.idle</a> API.</p><p><code>&quot;loginState&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/loginState/" target="_blank" rel="noreferrer">chrome.loginState</a> API.</p><p><code>&quot;management&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/management/" target="_blank" rel="noreferrer">chrome.management</a> API.</p><p><code>&quot;nativeMessaging&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/apps/nativeMessaging/" target="_blank" rel="noreferrer">native messaging API</a>.</p><p><code>&quot;notifications&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/notifications/" target="_blank" rel="noreferrer">chrome.notifications</a> API.</p><p><code>&quot;pageCapture&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/pageCapture/" target="_blank" rel="noreferrer">chrome.pageCapture</a> API.</p><p><code>&quot;platformKeys&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/platformKeys/" target="_blank" rel="noreferrer">chrome.platformKeys</a> API.</p><p><code>&quot;power&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/power/" target="_blank" rel="noreferrer">chrome.power</a> API.</p><p><code>&quot;printerProvider&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/printerProvider/" target="_blank" rel="noreferrer">chrome.printerProvider</a> API.</p><p><code>&quot;printing&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/printing/" target="_blank" rel="noreferrer">chrome.printing</a> API.</p><p><code>&quot;printingMetrics&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/printingMetrics/" target="_blank" rel="noreferrer">chrome.printingMetrics</a> API.</p><p><code>&quot;privacy&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/privacy/" target="_blank" rel="noreferrer">chrome.privacy</a> API.</p><p><code>&quot;processes&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/processes/" target="_blank" rel="noreferrer">chrome.processes</a> API.</p><p><code>&quot;proxy&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/proxy/" target="_blank" rel="noreferrer">chrome.proxy</a> API.</p><p><code>&quot;scripting&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/scripting/" target="_blank" rel="noreferrer">chrome.scripting</a> API.</p><p><code>&quot;search&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/search/" target="_blank" rel="noreferrer">chrome.search</a> API.</p><p><code>&quot;sessions&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/sessions/" target="_blank" rel="noreferrer">chrome.sessions</a> API.</p><p><code>&quot;signedInDevices&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/signedInDevices/" target="_blank" rel="noreferrer">chrome.signedInDevices</a> API.</p><p><code>&quot;storage&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/storage/" target="_blank" rel="noreferrer">chrome.storage</a> API.</p><p><code>&quot;system.cpu&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/system_cpu/" target="_blank" rel="noreferrer">chrome.system.cpu</a> API.</p><p><code>&quot;system.display&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/system_display/" target="_blank" rel="noreferrer">chrome.system.display</a> API.</p><p><code>&quot;system.memory&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/system_memory/" target="_blank" rel="noreferrer">chrome.system.memory</a> API.</p><p><code>&quot;system.storage&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/system_storage/" target="_blank" rel="noreferrer">chrome.system.storage</a> API.</p><p><code>&quot;tabCapture&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/tabCapture/" target="_blank" rel="noreferrer">chrome.tabCapture</a> API.</p><p><code>&quot;tabGroups&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/tabGroups/" target="_blank" rel="noreferrer">chrome.tabGroups</a> API.</p><p><code>&quot;tabs&quot;</code></p><p>Gives your extension access to privileged fields of the <a href="https://developer.chrome.com/docs/extensions/reference/tabs#type-Tab" target="_blank" rel="noreferrer"><code>Tab</code></a> objects used by several APIs including <a href="https://developer.chrome.com/docs/extensions/reference/tabs/" target="_blank" rel="noreferrer">chrome.tabs</a> and <a href="https://developer.chrome.com/docs/extensions/reference/windows/" target="_blank" rel="noreferrer">chrome.windows</a>. In many circumstances your extension will not need to declare the <code>&quot;tabs&quot;</code> permission to make use of these APIs.</p><p><code>&quot;topSites&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/topSites/" target="_blank" rel="noreferrer">chrome.topSites</a> API.</p><p><code>&quot;tts&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/tts/" target="_blank" rel="noreferrer">chrome.tts</a> API.</p><p><code>&quot;ttsEngine&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/ttsEngine/" target="_blank" rel="noreferrer">chrome.ttsEngine</a> API.</p><p><code>&quot;unlimitedStorage&quot;</code></p><p>Provides an unlimited quota for storing client-side data, such as databases and local storage files. Without this permission, the extension is limited to 5 MB of local storage.</p><p><strong>Note:</strong> This permission applies only to Web SQL Database and application cache (see issue <a href="http://crbug.com/58985" target="_blank" rel="noreferrer">58985</a>). Also, it doesn&#39;t currently work with wildcard subdomains such as <code>http://*.example.com</code>.</p><p><code>&quot;vpnProvider&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/vpnProvider/" target="_blank" rel="noreferrer">chrome.vpnProvider</a> API.</p><p><code>&quot;wallpaper&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/wallpaper/" target="_blank" rel="noreferrer">chrome.wallpaper</a> API.</p><p><code>&quot;webNavigation&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/webNavigation/" target="_blank" rel="noreferrer">chrome.webNavigation</a> API.</p><p><code>&quot;webRequest&quot;</code></p><p>Gives your extension access to the <a href="https://developer.chrome.com/docs/extensions/reference/webRequest/" target="_blank" rel="noreferrer">chrome.webRequest</a> API.</p><p><code>&quot;webRequestBlocking&quot;</code></p><p>Required if the extension uses the <a href="https://developer.chrome.com/docs/extensions/reference/webRequest/" target="_blank" rel="noreferrer">chrome.webRequest</a> API in a blocking fashion.</p><p>Updated on Wednesday, May 21, 2014 \u2022 <a href="https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/declare_permissions/index.md" target="_blank" rel="noreferrer">Improve article</a></p>`,149),c=[n];function a(i,p,d,h,l,m){return o(),r("div",null,c)}const v=e(s,[["render",a]]);export{f as __pageData,v as default};
