import{_ as e,o as t,c as o,a as r}from"./app.f245760f.js";const u=JSON.parse('{"title":"Alternative extension installation methods","description":"","frontmatter":{},"headers":[{"level":2,"title":"# Before you begin","slug":"before-you-begin","link":"#before-you-begin","children":[{"level":3,"title":"# Installing from the Chrome Web Store","slug":"installing-from-the-chrome-web-store","link":"#installing-from-the-chrome-web-store","children":[]},{"level":3,"title":"# Installing from Local CRX file","slug":"installing-from-local-crx-file","link":"#installing-from-local-crx-file","children":[]},{"level":3,"title":"# Installing from a personal server","slug":"installing-from-a-personal-server","link":"#installing-from-a-personal-server","children":[]}]},{"level":2,"title":"# Using a preferences file","slug":"using-a-preferences-file","link":"#using-a-preferences-file","children":[{"level":3,"title":"# macOS","slug":"macos","link":"#macos","children":[]},{"level":3,"title":"# Linux","slug":"linux","link":"#linux","children":[]},{"level":3,"title":"# Supported Locales","slug":"supported-locales","link":"#supported-locales","children":[]}]},{"level":2,"title":"# Using the Windows registry","slug":"using-the-windows-registry","link":"#using-the-windows-registry","children":[]},{"level":2,"title":"# Updating and uninstalling","slug":"updating-and-uninstalling","link":"#updating-and-uninstalling","children":[]},{"level":2,"title":"# FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"# Is \\"pre-install\\" still supported by Google Chrome?","slug":"is-pre-install-still-supported-by-google-chrome","link":"#is-pre-install-still-supported-by-google-chrome","children":[]},{"level":3,"title":"# What are some common mistakes when installing with the preferences file?","slug":"what-are-some-common-mistakes-when-installing-with-the-preferences-file","link":"#what-are-some-common-mistakes-when-installing-with-the-preferences-file","children":[]},{"level":3,"title":"# What are some common mistakes when installing with the registry?","slug":"what-are-some-common-mistakes-when-installing-with-the-registry","link":"#what-are-some-common-mistakes-when-installing-with-the-registry","children":[]},{"level":3,"title":"# What if the user uninstalls the extension?","slug":"what-if-the-user-uninstalls-the-extension","link":"#what-if-the-user-uninstalls-the-extension","children":[]},{"level":3,"title":"# How do I get off the blocklist?","slug":"how-do-i-get-off-the-blocklist","link":"#how-do-i-get-off-the-blocklist","children":[]}]}],"relativePath":"chromedocs/distributing you extensions/Alternative Chrome extension installation methods - Chrome Developers.md"}'),n={name:"chromedocs/distributing you extensions/Alternative Chrome extension installation methods - Chrome Developers.md"},s=r(`<ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#prereqs" target="_blank" rel="noreferrer">Before you begin</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#prereq-cws" target="_blank" rel="noreferrer">Installing from the Chrome Web Store</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#prereq-crx" target="_blank" rel="noreferrer">Installing from Local CRX file</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#prereq-server" target="_blank" rel="noreferrer">Installing from a personal server</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#preferences" target="_blank" rel="noreferrer">Using a preferences file</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#preference-mac" target="_blank" rel="noreferrer">macOS</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#preference-linux" target="_blank" rel="noreferrer">Linux</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#preference-locales" target="_blank" rel="noreferrer">Supported Locales</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#registry" target="_blank" rel="noreferrer">Using the Windows registry</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#updating" target="_blank" rel="noreferrer">Updating and uninstalling</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#faq" target="_blank" rel="noreferrer">FAQ</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#is-pre-install-still-supported-by-google-chrome" target="_blank" rel="noreferrer">Is &quot;pre-install&quot; still supported by Google Chrome?</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#faq-preference" target="_blank" rel="noreferrer">What are some common mistakes when installing with the preferences file?</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#faq-registry" target="_blank" rel="noreferrer">What are some common mistakes when installing with the registry?</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#faq-uninstalls" target="_blank" rel="noreferrer">What if the user uninstalls the extension?</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#faq-blocklist" target="_blank" rel="noreferrer">How do I get off the blocklist?</a></li></ul></li></ul><h1 id="alternative-extension-installation-methods" tabindex="-1">Alternative extension installation methods <a class="header-anchor" href="#alternative-extension-installation-methods" aria-hidden="true">#</a></h1><p>Published on Monday, September 17, 2012 \u2022 Updated on Friday, January 28, 2022</p><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#prereqs" target="_blank" rel="noreferrer">Before you begin</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#prereq-cws" target="_blank" rel="noreferrer">Installing from the Chrome Web Store</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#prereq-crx" target="_blank" rel="noreferrer">Installing from Local CRX file</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#prereq-server" target="_blank" rel="noreferrer">Installing from a personal server</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#preferences" target="_blank" rel="noreferrer">Using a preferences file</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#preference-mac" target="_blank" rel="noreferrer">macOS</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#preference-linux" target="_blank" rel="noreferrer">Linux</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#preference-locales" target="_blank" rel="noreferrer">Supported Locales</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#registry" target="_blank" rel="noreferrer">Using the Windows registry</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#updating" target="_blank" rel="noreferrer">Updating and uninstalling</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#faq" target="_blank" rel="noreferrer">FAQ</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#is-pre-install-still-supported-by-google-chrome" target="_blank" rel="noreferrer">Is &quot;pre-install&quot; still supported by Google Chrome?</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#faq-preference" target="_blank" rel="noreferrer">What are some common mistakes when installing with the preferences file?</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#faq-registry" target="_blank" rel="noreferrer">What are some common mistakes when installing with the registry?</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#faq-uninstalls" target="_blank" rel="noreferrer">What if the user uninstalls the extension?</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#faq-blocklist" target="_blank" rel="noreferrer">How do I get off the blocklist?</a></li></ul></li></ul><p>Typically Chrome users install extensions by visiting an extension&#39;s listing in the Chrome Web Store and installing the extension directly from that page. In some cases, though, other installation flows may be more appropriate. For example:</p><ul><li>An extension is associated with some other software, and the extension should be installed whenever the user installs that other software.</li><li>A network admin wants to install the same extensions throughout their organization.</li></ul><p>Administrators can also use enterprise policies to manage extension installation. To learn more, see <a href="https://support.google.com/chrome/a/answer/7666985" target="_blank" rel="noreferrer">Extension Enterprise policies</a>.</p><p>For the previous cases, Google Chrome supports the following extension installation methods:</p><ul><li>Using a <a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#preferences" target="_blank" rel="noreferrer">preferences JSON</a> file (for macOS X and Linux only)</li><li>Using the <a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#registry" target="_blank" rel="noreferrer">Windows registry</a> (for Windows only)</li></ul><p>Both ways support installing an extension hosted at an <code>update_URL</code>. On Windows and macOS, the <code>update_URL</code> must point to the Chrome Web Store. When an extension is installed via these methods, Windows and macOS users will have to enable the extension using the following confirmation dialog:</p><p>![External extension warning](./Alternative Chrome extension installation methods - Chrome Developers_files/JccWJKfl22SMXSE712oz.png)</p><p>On Linux, the preferences file can point to a Chrome Web Store extension, an <a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/" target="_blank" rel="noreferrer">externally hosted extension</a> or a CRX extension file on the user&#39;s computer. Linux users will not be prompted to enable the extension; it is installed automatically.</p><p>Warning</p><p><strong>Windows and Mac installs must come from Chrome Web Store:</strong> As of Chrome 33, no external installs are allowed from a path to a local CRX file on Windows (see <a href="http://blog.chromium.org/2013/11/protecting-windows-users-from-malicious.html" target="_blank" rel="noreferrer">Protecting Windows users from malicious extensions</a>). As of Chrome 44, no external installs are allowed from a path to a local CRX file on Mac OS (see <a href="http://blog.chromium.org/2015/05/continuing-to-protect-chrome-users-from.html" target="_blank" rel="noreferrer">Continuing to protect Chrome users from malicious extensions</a>).</p><h2 id="before-you-begin" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#prereqs" target="_blank" rel="noreferrer">#</a> Before you begin <a class="header-anchor" href="#before-you-begin" aria-hidden="true">#</a></h2><h3 id="installing-from-the-chrome-web-store" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#prereq-cws" target="_blank" rel="noreferrer">#</a> Installing from the Chrome Web Store <a class="header-anchor" href="#installing-from-the-chrome-web-store" aria-hidden="true">#</a></h3><p>If you are distributing an extension hosted in the Chrome Web Store, you must first <a href="https://developer.chrome.com/docs/webstore/publish/" target="_blank" rel="noreferrer">publish the extension</a>. Then, make a note of the following:</p><ul><li>The <strong>update URL</strong>\u2014 <code>https://clients2.google.com/service/update2/crx</code>. This url points to the Chrome Web Store.</li><li>The <strong>extension&#39;s ID</strong>\u2014 This can be found in the Chrome Web Store URL of the extension.</li></ul><p>![Chrome Web Store item id](./Alternative Chrome extension installation methods - Chrome Developers_files/85JMcIqgG9TLiJCZnAXE.png)</p><h3 id="installing-from-local-crx-file" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#prereq-crx" target="_blank" rel="noreferrer">#</a> Installing from Local CRX file <a class="header-anchor" href="#installing-from-local-crx-file" aria-hidden="true">#</a></h3><p>If you are distributing to Linux users from a local file, you will need to <a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#packaging" target="_blank" rel="noreferrer">package a CRX file</a> and note the following information:</p><ul><li><p>The <strong>extension ID</strong>\u2014 This can be found in the extension management page <code>chrome://extensions</code>.</p></li><li><p>The <strong>extension version</strong>\u2014 This appears in the extension management page <code>chrome://extensions</code> or in the manifest JSON file.</p></li></ul><p>![How to find extension id and version](./Alternative Chrome extension installation methods - Chrome Developers_files/HC0GSBfirjLtbB7nFhPH.png)</p><ul><li>The <strong>location of the CRX file</strong>\u2014 This can either be a local directory or a network share. Make sure the file is available to the machine you want to install the extension on.</li></ul><h3 id="installing-from-a-personal-server" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#prereq-server" target="_blank" rel="noreferrer">#</a> Installing from a personal server <a class="header-anchor" href="#installing-from-a-personal-server" aria-hidden="true">#</a></h3><p>If you are distributing an extension hosted on a personal server for Linux users, you will need to follow the instructions for <a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/" target="_blank" rel="noreferrer">Installing extensions on Linux</a> and note the following information:</p><ul><li><p>The <strong>extension ID</strong>\u2014 This can be found in the extension management page <code>chrome://extensions</code>.</p></li><li><p>The <strong>update_url XML file path</strong>\u2014 This has to match the file path of the <a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#update_url" target="_blank" rel="noreferrer"><code>update_url</code></a> field declared in the manifest JSON file.</p></li></ul><p>The following examples assume the version is 1.0 and the extension ID is aaabbbcccdddeeefff.</p><h2 id="using-a-preferences-file" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#preferences" target="_blank" rel="noreferrer">#</a> Using a preferences file <a class="header-anchor" href="#using-a-preferences-file" aria-hidden="true">#</a></h2><p><strong>MacOS X and Linux only:</strong> Do not use the preferences file for Windows. Use <a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#registry" target="_blank" rel="noreferrer">Windows registry</a> instead.</p><h3 id="macos" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#preference-mac" target="_blank" rel="noreferrer">#</a> macOS <a class="header-anchor" href="#macos" aria-hidden="true">#</a></h3><ol><li><p>Create a JSON file with the name of the extension ID. For example: <code>aaabbbcccdddeeefff.json</code></p></li><li><p>Place it in one of the folders listed below:</p><p>For a specific user</p><p><code>~USERNAME/Library/Application Support/Google/Chrome/External Extensions/</code></p><p>For all users</p><p><code>/Library/Application Support/Google/Chrome/External Extensions/</code></p></li><li><p>Specify the update URL with the field name &quot;external_update_url&quot;. For example:</p><pre><code>{  &quot;external_update_url&quot;: &quot;https://clients2.google.com/service/update2/crx&quot;}
</code></pre></li><li><p>Save the JSON file.</p></li><li><p>Launch Google Chrome and go to <strong>chrome://extensions</strong>; you should see the extension listed.</p></li></ol><p>The external extension file for all users is read only if every directory in the path is owned by the user <code>root</code>, has the group <code>admin</code> or <code>wheel</code>, and is not world writable. The path must also be free of symbolic links. These restrictions prevent an unprivileged user from causing extensions to be installed for all users. See <a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#troubleshooting" target="_blank" rel="noreferrer">Troubleshooting permission problems</a>.</p><h4 id="troubleshooting-mac-os-permissions-problems" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#troubleshooting" target="_blank" rel="noreferrer">#</a> Troubleshooting Mac OS permissions problems <a class="header-anchor" href="#troubleshooting-mac-os-permissions-problems" aria-hidden="true">#</a></h4><p>On macOS, the external extensions files for all users are only read if file system permissions prevent unprivileged users from changing it. If you do not see external extensions installed when Chrome is launched, there may be a permissions problem with the external extensions preferences files. To see if this is the problem, follow these steps:</p><ol><li>Launch the Console program. You can find it under /Applications/Utilities/Console.</li><li>If the leftmost icon in the Console says &quot;Show Log List&quot;, click that icon. A second column appears at the left.</li><li>Click &quot;Console Messages&quot; in the left pane.</li><li>Search for the string <strong>Can not read external extensions</strong>. If there is a problem reading the external extensions files, you will see an error message. Look for another error message directly above it, which should explain the issue. For example, if you see the following error: &quot;Path /Library/Application Support/Google/Chrome is owned by the wrong group&quot;, you need to use <code>chgrp</code> or the Finder&#39;s Get Info dialog to change the directory&#39;s group owner to the Administrator group.</li><li>After fixing the issue, relaunch Chrome. Test that the external extension is now installed. It is possible that one permissions error keeps Chrome from detecting a second error. If the external extension was not installed, repeat these steps until you do not see an error in the Console application.</li></ol><h3 id="linux" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#preference-linux" target="_blank" rel="noreferrer">#</a> Linux <a class="header-anchor" href="#linux" aria-hidden="true">#</a></h3><ol><li><p>Create a JSON file with the name of the extension ID. For example: <code>aaabbbcccdddeeefff.json</code>.</p></li><li><p>Place it in one of the folders listed below:</p><ul><li><code>/opt/google/chrome/extensions/</code></li><li><code>/usr/share/google-chrome/extensions/</code></li></ul></li><li><p>The following list describes extension installation from the Chrome Web Store, a CRX file or a personal server:</p><ul><li><p>To install a <strong>Chrome Web Store</strong> extension, specify the update URL with the field name &quot;external_update_url&quot;. For example:</p><pre><code>{  &quot;external_update_url&quot;: &quot;https://clients2.google.com/service/update2/crx&quot;}
</code></pre></li><li><p>To install the extension from a <strong>CRX file</strong>, specify the location in &quot;external_crx&quot; and the version in &quot;external_version&quot;. For example:</p><pre><code>{  &quot;external_crx&quot;: &quot;/home/share/extension.crx&quot;,  &quot;external_version&quot;: &quot;1.0&quot;}
</code></pre></li><li><p>To install the extension <strong><a href="https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#update_url" target="_blank" rel="noreferrer">hosted on a personal server</a></strong>, the &quot;external_update_url&quot; field has to point to the xml file, like in the following example:</p><pre><code>{  &quot;external_update_url&quot;: &quot;http://myhost.com/mytestextension/updates.xml&quot;}
</code></pre></li></ul></li><li><p>Save the JSON file.</p></li><li><p>Launch Google Chrome and go to <strong>chrome://extensions</strong>; you should see the extension listed.</p></li></ol><p>Use <code>chmod</code> if necessary to make sure that the <code>aaabbbcccdddeeefff.json</code> files are world-readable. Check the <a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#faq-preference" target="_blank" rel="noreferrer">preference file common mistakes FAQ</a> for additional help.</p><h3 id="supported-locales" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#preference-locales" target="_blank" rel="noreferrer">#</a> Supported Locales <a class="header-anchor" href="#supported-locales" aria-hidden="true">#</a></h3><p>If you would like to install extension only for some browser locales, you can list supported locales in field name &quot;supported_locales&quot;. Locale may specify parent locale like &quot;en&quot;, in this case the extension will be installed for all English locales like &quot;en-US&quot;, &quot;en-GB&quot;, etc. If another browser locale is selected that is not supported by the extension, the external extensions will be uninstalled. If &quot;supported_locales&quot; list is missing, the extension will be installed for any locale. For example:</p><pre><code>{  &quot;external_update_url&quot;: &quot;https://clients2.google.com/service/update2/crx&quot;,  &quot;supported_locales&quot;: [ &quot;en&quot;, &quot;fr&quot;, &quot;de&quot; ]}
</code></pre><h2 id="using-the-windows-registry" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#registry" target="_blank" rel="noreferrer">#</a> Using the Windows registry <a class="header-anchor" href="#using-the-windows-registry" aria-hidden="true">#</a></h2><ol><li><p>Find or create the following key in the registry:</p><p>32-bit Windows</p><p><code>HKEY_LOCAL_MACHINE\\Software\\Google\\Chrome\\Extensions</code></p><p>64-bit Windows</p><p><code>HKEY_LOCAL_MACHINE\\Software\\Wow6432Node\\Google\\Chrome\\Extensions</code></p></li><li><p>Create a new key (folder) under the <strong>Extensions</strong> key with the same name as the ID of your extension. For example: <code>aaabbbcccdddeeefff</code>.</p></li><li><p>In your extension key, create an &quot;update_url&quot; property and set it to the following value:</p><pre><code>{  &quot;update_url&quot;: &quot;https://clients2.google.com/service/update2/crx&quot;}
</code></pre></li><li><p>Launch Chrome.</p></li><li><p>Go to <strong>chrome://extensions</strong>; you should see the extension listed.</p></li></ol><p>Check the <a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#faq-registry" target="_blank" rel="noreferrer">Windows registry common mistakes</a> for additional help.</p><h2 id="updating-and-uninstalling" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#updating" target="_blank" rel="noreferrer">#</a> Updating and uninstalling <a class="header-anchor" href="#updating-and-uninstalling" aria-hidden="true">#</a></h2><p>Google Chrome scans the metadata entries in the preferences and registry each time the browser starts, and makes any necessary changes to the installed external extensions hosted in the Chrome Web Store.</p><p>To update a local CRX file extension to a new version, update the file, and then update the version in the preferences json file.</p><p>To uninstall your extension (for example, if your software is uninstalled), remove your preference file (for example, <code>aaabbbcccdddeeefff.json</code>) or the metadata from the registry.</p><h2 id="faq" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#faq" target="_blank" rel="noreferrer">#</a> FAQ <a class="header-anchor" href="#faq" aria-hidden="true">#</a></h2><p>This section answers common questions about external extensions.</p><h3 id="is-pre-install-still-supported-by-google-chrome" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#is-pre-install-still-supported-by-google-chrome" target="_blank" rel="noreferrer">#</a> Is &quot;pre-install&quot; still supported by Google Chrome? <a class="header-anchor" href="#is-pre-install-still-supported-by-google-chrome" aria-hidden="true">#</a></h3><p>Yes, but only as an install from a Chrome Web Store <code>update_url</code>, not from a local CRX file path. For more information, see <a href="https://support.google.com/chrome/a/answer/7666985?hl=en" target="_blank" rel="noreferrer">App and Extension policies</a>.</p><h3 id="what-are-some-common-mistakes-when-installing-with-the-preferences-file" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#faq-preference" target="_blank" rel="noreferrer">#</a> What are some common mistakes when installing with the preferences file? <a class="header-anchor" href="#what-are-some-common-mistakes-when-installing-with-the-preferences-file" aria-hidden="true">#</a></h3><ul><li>Not specifying the same id/version as the one listed in the CRX file.</li><li>The JSON file (for example, <code>aaabbbcccdddeeefff.json</code>) is in the wrong location or the ID specified does not match the extension ID.</li><li>Syntax error in JSON file (forgetting to separate entries with comma or leaving a trailing comma somewhere).</li><li>JSON file entry points to the wrong path to the CRX file (or path specified but no filename)</li><li>Backslashes in UNC path are not escaped. For example, <code>&quot;\\\\server\\share\\file&quot;</code> is wrong; it should be <code>&quot;\\\\\\\\server\\\\share\\\\extension&quot;</code>.</li><li>Permissions problems on a network share.</li></ul><h3 id="what-are-some-common-mistakes-when-installing-with-the-registry" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#faq-registry" target="_blank" rel="noreferrer">#</a> What are some common mistakes when installing with the registry? <a class="header-anchor" href="#what-are-some-common-mistakes-when-installing-with-the-registry" aria-hidden="true">#</a></h3><ul><li>Not specifying the same id as the one listed in the Chrome Web Store.</li><li>Key created in the wrong location in the registry.</li><li>Registry entry points to the wrong path to the CRX file in the Chrome Web Store.</li><li>Permissions problems on a network share.</li><li>Not all instances of Chrome are closed. Try rebooting your computer after setting the registry.</li></ul><h3 id="what-if-the-user-uninstalls-the-extension" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#faq-uninstalls" target="_blank" rel="noreferrer">#</a> What if the user uninstalls the extension? <a class="header-anchor" href="#what-if-the-user-uninstalls-the-extension" aria-hidden="true">#</a></h3><p>If the user uninstalls the extension through the UI, it will no longer be installed or updated on each startup. In other words, the external extension is blocklisted.</p><h3 id="how-do-i-get-off-the-blocklist" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/external_extensions/#faq-blocklist" target="_blank" rel="noreferrer">#</a> How do I get off the blocklist? <a class="header-anchor" href="#how-do-i-get-off-the-blocklist" aria-hidden="true">#</a></h3><p>If the user uninstalls your extension, you should respect that decision. However, if you (the developer) accidentally uninstalled your extension through the UI, you can remove the blocklist tag by installing the extension normally through the UI, and then uninstalling it.</p><p>Updated on Friday, January 28, 2022 \u2022 <a href="https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/external_extensions/index.md" target="_blank" rel="noreferrer">Improve article</a></p>`,62),i=[s];function l(a,h,c,d,p,m){return t(),o("div",null,i)}const g=e(n,[["render",l]]);export{u as __pageData,g as default};
