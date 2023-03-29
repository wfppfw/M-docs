import{_ as e,o as t,c as o,a}from"./app.f245760f.js";const g=JSON.parse('{"title":"Installing extensions on Linux","description":"","frontmatter":{},"headers":[{"level":2,"title":"# Packaging","slug":"packaging","link":"#packaging","children":[{"level":3,"title":"# Download .crx from the Chrome Web Store","slug":"download-crx-from-the-chrome-web-store","link":"#download-crx-from-the-chrome-web-store","children":[]},{"level":3,"title":"# Create .crx locally","slug":"create-crx-locally","link":"#create-crx-locally","children":[]},{"level":3,"title":"# Update a .crx package","slug":"update-a-crx-package","link":"#update-a-crx-package","children":[]},{"level":3,"title":"# Package through command line","slug":"package-through-command-line","link":"#package-through-command-line","children":[]}]},{"level":2,"title":"# Hosting","slug":"hosting","link":"#hosting","children":[]},{"level":2,"title":"# Updating","slug":"updating","link":"#updating","children":[{"level":3,"title":"# Update URL","slug":"update-url","link":"#update-url","children":[]},{"level":3,"title":"# Update manifest","slug":"update-manifest","link":"#update-manifest","children":[]},{"level":3,"title":"# Testing","slug":"testing","link":"#testing","children":[]},{"level":3,"title":"# Advanced usage: request parameters","slug":"advanced-usage-request-parameters","link":"#advanced-usage-request-parameters","children":[]},{"level":3,"title":"# Advanced usage: minimum browser version","slug":"advanced-usage-minimum-browser-version","link":"#advanced-usage-minimum-browser-version","children":[]}]}],"relativePath":"chromedocs/distributing you extensions/Installing extensions on Linux - Chrome Developers.md"}'),n={name:"chromedocs/distributing you extensions/Installing extensions on Linux - Chrome Developers.md"},r=a(`<ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#packaging" target="_blank" rel="noreferrer">Packaging</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#download-crx-from-the-chrome-web-store" target="_blank" rel="noreferrer">Download .crx from the Chrome Web Store</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#create" target="_blank" rel="noreferrer">Create .crx locally</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#update-a-crx-package" target="_blank" rel="noreferrer">Update a .crx package</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#package-through-command-line" target="_blank" rel="noreferrer">Package through command line</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#hosting" target="_blank" rel="noreferrer">Hosting</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#update" target="_blank" rel="noreferrer">Updating</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#update_url" target="_blank" rel="noreferrer">Update URL</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#update_manifest" target="_blank" rel="noreferrer">Update manifest</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#testing" target="_blank" rel="noreferrer">Testing</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#request_parameters" target="_blank" rel="noreferrer">Advanced usage: request parameters</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#minimum_browser_version" target="_blank" rel="noreferrer">Advanced usage: minimum browser version</a></li></ul></li></ul><h1 id="installing-extensions-on-linux" tabindex="-1">Installing extensions on Linux <a class="header-anchor" href="#installing-extensions-on-linux" aria-hidden="true">#</a></h1><p>Published on Thursday, December 14, 2017 \u2022 Updated on Friday, March 23, 2018</p><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#packaging" target="_blank" rel="noreferrer">Packaging</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#download-crx-from-the-chrome-web-store" target="_blank" rel="noreferrer">Download .crx from the Chrome Web Store</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#create" target="_blank" rel="noreferrer">Create .crx locally</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#update-a-crx-package" target="_blank" rel="noreferrer">Update a .crx package</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#package-through-command-line" target="_blank" rel="noreferrer">Package through command line</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#hosting" target="_blank" rel="noreferrer">Hosting</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#update" target="_blank" rel="noreferrer">Updating</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#update_url" target="_blank" rel="noreferrer">Update URL</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#update_manifest" target="_blank" rel="noreferrer">Update manifest</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#testing" target="_blank" rel="noreferrer">Testing</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#request_parameters" target="_blank" rel="noreferrer">Advanced usage: request parameters</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#minimum_browser_version" target="_blank" rel="noreferrer">Advanced usage: minimum browser version</a></li></ul></li></ul><p>Caution</p><p>This page was migrated directly from the Manifest V2 documentation set. It has not yet been validated for compliance with Manifest V3.</p><p>Linux is the only platform where Chrome users can install extensions that are hosted outside of the <a href="http://chrome.google.com/webstore" target="_blank" rel="noreferrer">Chrome Web Store</a>. This article describes how to package, host, and update <code>crx</code> files from a general purpose web server. If you are distributing an extension or theme solely through the <a href="http://chrome.google.com/webstore" target="_blank" rel="noreferrer">Chrome Web Store</a>, consult <a href="https://developer.chrome.com/docs/extensions/mv3/hosting/" target="_blank" rel="noreferrer">Webstore hosting and updating</a>.</p><h2 id="packaging" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#packaging" target="_blank" rel="noreferrer">#</a> Packaging <a class="header-anchor" href="#packaging" aria-hidden="true">#</a></h2><p>Extensions and themes are served as <code>.crx</code> files. When uploading through the <a href="https://chrome.google.com/webstore/developer/dashboard" target="_blank" rel="noreferrer">Chrome Developer Dashboard</a>, the dashboard creates the <code>crx</code> file automatically. If published on a personal server, the <code>crx</code> file will need to be created locally or downloaded from the Chrome Web Store.</p><h3 id="download-crx-from-the-chrome-web-store" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#download-crx-from-the-chrome-web-store" target="_blank" rel="noreferrer">#</a> Download .crx from the Chrome Web Store <a class="header-anchor" href="#download-crx-from-the-chrome-web-store" aria-hidden="true">#</a></h3><p>If an extension is hosted on the Chrome Web Store, the <code>.crx</code> file can be downloaded from the Developer Dashboard. Locate the extension under &quot;Your Listings&quot; and click on &quot;More info&quot;. In the popup window, click the blue <code>main.crx</code> link to download it.</p><p>![Download .crx from the Developer Dashboard](./Installing extensions on Linux - Chrome Developers_files/ympE762hCQc9EH6ZIB9W.png)</p><p>The downloaded file can be hosted on a personal server. This is the most secure way to host an extension locally as the contents of the extension will be signed by the Chrome Web Store. This helps detect potential attacks and tampering.</p><p>Read more about the <a href="https://developer.chrome.com/docs/extensions/mv2/hosting_changes/" target="_blank" rel="noreferrer">hosting policy</a>.</p><h3 id="create-crx-locally" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#create" target="_blank" rel="noreferrer">#</a> Create .crx locally <a class="header-anchor" href="#create-crx-locally" aria-hidden="true">#</a></h3><p>Extension directories are converted to <code>.crx</code> files at the Extensions Management Page. Navigate to <code>chrome://extensions/</code> in the omnibox, or click on the Chrome menu, hover over &quot;More Tools&quot; then select &quot;Extensions&quot;.</p><p>On the Extensions Management Page, enable Developer Mode by clicking the toggle switch next to <strong>Developer mode</strong>. Then select the <strong>PACK EXTENSION</strong> button.</p><p>![Developer Mode is Checked then Click Pack Extension](./Installing extensions on Linux - Chrome Developers_files/uO9oti7LStDokrnq6d0Q.png)</p><p>Specify the path to the extension&#39;s folder in the Extension root directory field then click the <strong>PACK EXTENSION</strong> button. Ignore the <strong>Private key</strong> field for a first-time package.</p><p>![Specify Extension Path then Click Pack Extension](./Installing extensions on Linux - Chrome Developers_files/a0iFUqr8SpjTcIjtXy44.png)</p><p>Chrome will create two files, a <code>.crx</code> file and a <code>.pem</code> file, which contains the extension&#39;s private key.</p><p>![Packaged Extension Files](./Installing extensions on Linux - Chrome Developers_files/sECV1ZYWjipkhNiwwMJv.png)</p><p><strong>Do not lose the private key!</strong> Keep the <code>.pem</code> file in a secret and secure place; it will be needed to <a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#update" target="_blank" rel="noreferrer">update</a> the extension.</p><h3 id="update-a-crx-package" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#update-a-crx-package" target="_blank" rel="noreferrer">#</a> Update a .crx package <a class="header-anchor" href="#update-a-crx-package" aria-hidden="true">#</a></h3><p>Update an extension&#39;s <code>.crx</code> file by increasing the version number in <code>manifest.json</code>.</p><pre><code>{  ...  &quot;version&quot;: &quot;1.5&quot;,  ...  }}

{  ...  &quot;version&quot;: &quot;1.6&quot;,  ...  }}
</code></pre><p>Return to the <a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#create" target="_blank" rel="noreferrer">Extensions Management Page</a> and click the <strong>PACK EXTENSION</strong> button. Specify the path to the extensions directory and the location of private key.</p><p>![Updating Extension Files](./Installing extensions on Linux - Chrome Developers_files/gcvNd3qR9hU7Pp0fQvhZ.png)</p><p>The page will provide the path for the updated packaged extension.</p><p>![Updating Extension Files](./Installing extensions on Linux - Chrome Developers_files/sECV1ZYWjipkhNiwwMJv.png)</p><h3 id="package-through-command-line" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#package-through-command-line" target="_blank" rel="noreferrer">#</a> Package through command line <a class="header-anchor" href="#package-through-command-line" aria-hidden="true">#</a></h3><p>Package extensions in the command line by invoking <a href="https://www.chromium.org/developers/how-tos/run-chromium-with-flags" target="_blank" rel="noreferrer"><code>chrome.exe</code></a>. Use the <code>--pack-extension</code> flag to specify the location of the extension&#39;s folder and the <code>--pack-extension-key</code> flag to specify the location of the extension&#39;s private key file.</p><pre><code>chrome.exe --pack-extension=C:\\myext --pack-extension-key=C:\\myext.pem
</code></pre><h2 id="hosting" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#hosting" target="_blank" rel="noreferrer">#</a> Hosting <a class="header-anchor" href="#hosting" aria-hidden="true">#</a></h2><p>A server that hosts <code>.crx</code> files must use appropriate HTTP headers to allow users to install the extension by clicking a link.</p><p>Google Chrome considers a file to be installable if <strong>either</strong> of the following is true:</p><ul><li>The file has the content type <code>application/x-chrome-extension</code></li><li>The file suffix is <code>.crx</code> and <strong>both</strong> of the following are true: <ul><li>The file <strong>is not</strong> served with the HTTP header <code>X-Content-Type-Options: nosniff</code></li><li>The file <strong>is</strong> served with one of the following content types: <ul><li>empty string</li><li>&quot;text/plain&quot;</li><li>&quot;application/octet-stream&quot;</li><li>&quot;unknown/unknown&quot;</li><li>&quot;application/unknown&quot;</li><li>&quot;*/*&quot;</li></ul></li></ul></li></ul><p>The most common reason for failing to recognize an installable file is that the server sends the header <code>X-Content-Type-Options: nosniff</code>. The second most common reason is that the server sends an unknown content type\u2014one that isn&#39;t in the previous list. To fix an HTTP header issue, either change the configuration of the server or try hosting the <code>.crx</code> file at another server.</p><h2 id="updating" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#update" target="_blank" rel="noreferrer">#</a> Updating <a class="header-anchor" href="#updating" aria-hidden="true">#</a></h2><p>Every few hours, the browser checks installed extensions for an update URL. For each one, it makes a request to that URL looking for an update manifest XML file.</p><ul><li>The content returned by an update check is an <em>update manifest</em> XML document listing the latest version of an extension.</li></ul><p>If the update manifest mentions a version that is more recent than what is installed, the browser downloads and installs the new version. As with manual updates, the new <code>.crx</code> file must be signed with the same private key as the currently installed version.</p><p><strong>Note:</strong> In order to maintain user privacy, Google Chrome does not send any Cookie headers with autoupdate manifest requests, and ignores any Set-Cookie headers in the responses to those requests.</p><h3 id="update-url" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#update_url" target="_blank" rel="noreferrer">#</a> Update URL <a class="header-anchor" href="#update-url" aria-hidden="true">#</a></h3><p>Extensions hosted on servers outside of the Chrome Webstore must include the <code>update_url</code> field in their <a href="https://developer.chrome.com/docs/extensions/mv3/manifest/" target="_blank" rel="noreferrer"><code>manifest.json</code></a> file.</p><pre><code>{  &quot;name&quot;: &quot;My extension&quot;,  ...  &quot;update_url&quot;: &quot;https://myhost.com/mytestextension/updates.xml&quot;,  ...}
</code></pre><h3 id="update-manifest" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#update_manifest" target="_blank" rel="noreferrer">#</a> Update manifest <a class="header-anchor" href="#update-manifest" aria-hidden="true">#</a></h3><p>The update manifest returned by the server should be an XML document.</p><pre><code>&lt;?xml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;?&gt;&lt;gupdate xmlns=&#39;http://www.google.com/update2/response&#39; protocol=&#39;2.0&#39;&gt;  &lt;app appid=&#39;aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&#39;&gt;    &lt;updatecheck codebase=&#39;https://myhost.com/mytestextension/mte_v2.crx&#39; version=&#39;2.0&#39; /&gt;  &lt;/app&gt;&lt;/gupdate&gt;
</code></pre><p>This XML format is borrowed from that used by <a href="https://github.com/google/omaha" target="_blank" rel="noreferrer">Omaha</a>, Google&#39;s update infrastructure. The extensions system uses the following attributes for the <code>&lt;app&gt;</code> and <code>&lt;updatecheck&gt;</code> elements of the update manifest:</p><p>appid</p><p>The extension ID is generated based on a hash of the public key, as described in <a href="https://developer.chrome.com/linux_hosting#packaging" target="_blank" rel="noreferrer">packaging</a>. An extension&#39;s ID is displayed on the <a href="https://developer.chrome.com/linux_hosting#extension_management" target="_blank" rel="noreferrer">Extensions Managment Page</a></p><p>codebase</p><p>An HTTPS URL to the <code>.crx</code> file.</p><p>version</p><p>Used by the client to determine whether it should download the <code>.crx</code> file specified by <code>codebase</code>. It should match the value of &quot;version&quot; in the <code>.crx</code> file&#39;s <code>manifest.json</code> file.</p><p>The update manifest XML file may contain information about multiple extensions by including multiple elements.</p><h3 id="testing" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#testing" target="_blank" rel="noreferrer">#</a> Testing <a class="header-anchor" href="#testing" aria-hidden="true">#</a></h3><p>The default update check frequency is several hours, but an update can be forced using the <strong>Update extensions now</strong> button on the Extensions Management Page.</p><p>![Update Extensions Now](./Installing extensions on Linux - Chrome Developers_files/VoSOLJm03H8uwWTQJP7w.png)</p><p>This will start checks for all installed extensions.</p><h3 id="advanced-usage-request-parameters" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#request_parameters" target="_blank" rel="noreferrer">#</a> Advanced usage: request parameters <a class="header-anchor" href="#advanced-usage-request-parameters" aria-hidden="true">#</a></h3><p>The basic autoupdate mechanism is designed to make the server-side work as easy as just dropping a static XML file onto any plain web server, such as Apache, and updating that XML file as new extension versions are released.</p><p>Developers hosting multiple extensions may check request parameters, which indicate the extension ID and version in the update request. Including these paramaters allow extensions to update from the same URL running dynamic server-side code instead of a static XML file.</p><p>The format of the request parameters is:</p><p><code>?x=EXTENSION_DATA</code></p><p>Where <code>EXTENSION_DATA</code> is a URL-encoded string of the format:</p><p><code>id=EXTENSION_ID&amp;v=EXTENSION_VERSION</code></p><p>For example, two extensions point to the same update URL (<code>https://test.com/extension_updates.php</code>):</p><ul><li>Extension 1 <ul><li>ID: &quot;aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&quot;</li><li>Version: &quot;1.1&quot;</li></ul></li><li>Extension 2 <ul><li>ID: &quot;bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb&quot;</li><li>Version: &quot;0.4&quot;</li></ul></li></ul><p>The request to update each individual extension would be,</p><pre><code>https://test.com/extension_updates.php?x=id%3Daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa%26v%3D1.1
</code></pre><p>and</p><pre><code>https://test.com/extension_updates.php?x=id%3Dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb%26v%3D0.4
</code></pre><p>Multiple extensions can be listed in a single request for each unique update URL. For the above example, if a user has both of the extensions installed, then the two requests are merged into a single request:</p><pre><code>https://test.com/extension_updates.php?x=id%3Daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa%26v%3D1.1&amp;x=id%3Dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb%26v%3D0.4
</code></pre><p>If the number of installed extensions using the same update URL is large enough that a GET request URL is too long (over 2000 characters or so), the update check issues additional GET requests as necessary.</p><h3 id="advanced-usage-minimum-browser-version" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#minimum_browser_version" target="_blank" rel="noreferrer">#</a> Advanced usage: minimum browser version <a class="header-anchor" href="#advanced-usage-minimum-browser-version" aria-hidden="true">#</a></h3><p>As more APIs are added to the extensions system, an updated version of an extension that will work only with newer versions of the browser may be released. While Google Chrome itself is autoupdated, it can take a few days before the majority of the user base has updated to any given new release. To ensure that a given update will apply only to Google Chrome versions at or higher than a specific version, add the &quot;prodversionmin&quot; attribute to the element in the update response.</p><pre><code>&lt;?xml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;?&gt;&lt;gupdate xmlns=&#39;http://www.google.com/update2/response&#39; protocol=&#39;2.0&#39;&gt;  &lt;app appid=&#39;aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&#39;&gt;    &lt;updatecheck codebase=&#39;http://myhost.com/mytestextension/mte_v2.crx&#39; version=&#39;2.0&#39; prodversionmin=&#39;3.0.193.0&#39;/&gt;  &lt;/app&gt;&lt;/gupdate&gt;
</code></pre><p>This would ensure that users would autoupdate to version 2 only if they are running Google Chrome 3.0.193.0 or greater.</p><p>Updated on Friday, March 23, 2018 \u2022 <a href="https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/linux_hosting/index.md" target="_blank" rel="noreferrer">Improve article</a></p>`,82),s=[r];function i(l,h,d,c,p,m){return t(),o("div",null,s)}const f=e(n,[["render",i]]);export{g as __pageData,f as default};
