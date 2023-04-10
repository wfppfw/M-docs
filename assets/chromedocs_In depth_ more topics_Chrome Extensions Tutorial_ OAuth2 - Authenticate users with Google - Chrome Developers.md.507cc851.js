import{_ as e,o as t,c as o,a as r}from"./app.4ab4139b.js";const g=JSON.parse('{"title":"OAuth2: Authenticate users with Google","description":"","frontmatter":{},"headers":[{"level":2,"title":"# Get started","slug":"get-started","link":"#get-started","children":[{"level":3,"title":"# manifest.json","slug":"manifest-json","link":"#manifest-json","children":[]},{"level":3,"title":"# background.js","slug":"background-js","link":"#background-js","children":[]},{"level":3,"title":"# index.html","slug":"index-html","link":"#index-html","children":[]}]},{"level":2,"title":"# Keep a consistent extension ID","slug":"keep-a-consistent-extension-id","link":"#keep-a-consistent-extension-id","children":[{"level":3,"title":"# Upload extension to the developer dashboard","slug":"upload-extension-to-the-developer-dashboard","link":"#upload-extension-to-the-developer-dashboard","children":[]},{"level":3,"title":"# Compare IDs","slug":"compare-ids","link":"#compare-ids","children":[]}]},{"level":2,"title":"# Create OAuth client ID","slug":"create-oauth-client-id","link":"#create-oauth-client-id","children":[]},{"level":2,"title":"# Register OAuth in manifest","slug":"register-oauth-in-manifest","link":"#register-oauth-in-manifest","children":[]},{"level":2,"title":"# Initiate first OAuth flow","slug":"initiate-first-oauth-flow","link":"#initiate-first-oauth-flow","children":[]},{"level":2,"title":"# Enable the Google People API","slug":"enable-the-google-people-api","link":"#enable-the-google-people-api","children":[]},{"level":2,"title":"# Create first API request","slug":"create-first-api-request","link":"#create-first-api-request","children":[]},{"level":2,"title":"# Block faces","slug":"block-faces","link":"#block-faces","children":[]}],"relativePath":"chromedocs/In depth_ more topics/Chrome Extensions Tutorial_ OAuth2 - Authenticate users with Google - Chrome Developers.md","lastUpdated":1679926139000}'),n={name:"chromedocs/In depth_ more topics/Chrome Extensions Tutorial_ OAuth2 - Authenticate users with Google - Chrome Developers.md"},a=r(`<ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#set_up" target="_blank" rel="noreferrer">Get started</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#manifest" target="_blank" rel="noreferrer">manifest.json</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#background" target="_blank" rel="noreferrer">background.js</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#index" target="_blank" rel="noreferrer">index.html</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#keep-consistent-id" target="_blank" rel="noreferrer">Keep a consistent extension ID</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#upload_to_dashboard" target="_blank" rel="noreferrer">Upload extension to the developer dashboard</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#extension_management" target="_blank" rel="noreferrer">Compare IDs</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#oauth_client" target="_blank" rel="noreferrer">Create OAuth client ID</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#oauth_registration" target="_blank" rel="noreferrer">Register OAuth in manifest</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#identity_permission" target="_blank" rel="noreferrer">Initiate first OAuth flow</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#enable_people" target="_blank" rel="noreferrer">Enable the Google People API</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#create_call" target="_blank" rel="noreferrer">Create first API request</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#block_faces" target="_blank" rel="noreferrer">Block faces</a></li></ul><h1 id="oauth2-authenticate-users-with-google" tabindex="-1">OAuth2: Authenticate users with Google <a class="header-anchor" href="#oauth2-authenticate-users-with-google" aria-hidden="true">#</a></h1><p>Published on Tuesday, September 18, 2012 \u2022 Updated on Monday, November 8, 2021</p><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#set_up" target="_blank" rel="noreferrer">Get started</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#manifest" target="_blank" rel="noreferrer">manifest.json</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#background" target="_blank" rel="noreferrer">background.js</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#index" target="_blank" rel="noreferrer">index.html</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#keep-consistent-id" target="_blank" rel="noreferrer">Keep a consistent extension ID</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#upload_to_dashboard" target="_blank" rel="noreferrer">Upload extension to the developer dashboard</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#extension_management" target="_blank" rel="noreferrer">Compare IDs</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#oauth_client" target="_blank" rel="noreferrer">Create OAuth client ID</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#oauth_registration" target="_blank" rel="noreferrer">Register OAuth in manifest</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#identity_permission" target="_blank" rel="noreferrer">Initiate first OAuth flow</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#enable_people" target="_blank" rel="noreferrer">Enable the Google People API</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#create_call" target="_blank" rel="noreferrer">Create first API request</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#block_faces" target="_blank" rel="noreferrer">Block faces</a></li></ul><p>Caution</p><p>This page was migrated directly from the Manifest V2 documentation set. It has not yet been validated for compliance with Manifest V3.</p><p><a href="https://oauth.net/2/" target="_blank" rel="noreferrer">OAuth2</a> is the industry-standard protocol for authorization. It provides a mechanism for users to grant web and desktop applications access to private information without sharing their username, password and other private credentials.</p><p>This tutorial builds an extension that accesses a user&#39;s Google contacts using the <a href="https://developers.google.com/people/" target="_blank" rel="noreferrer">Google People API</a> and the <a href="https://developer.chrome.com/docs/extensions/reference/identity/" target="_blank" rel="noreferrer">Chrome Identity API</a>. Because extensions don&#39;t load over HTTPS, can&#39;t perform redirects or set cookies, they rely on the Chrome Identity API to use OAuth2.</p><h2 id="get-started" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#set_up" target="_blank" rel="noreferrer">#</a> Get started <a class="header-anchor" href="#get-started" aria-hidden="true">#</a></h2><p>Begin by creating a directory and the following starter files.</p><h3 id="manifest-json" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#manifest" target="_blank" rel="noreferrer">#</a> manifest.json <a class="header-anchor" href="#manifest-json" aria-hidden="true">#</a></h3><p>Add the manifest by creating a file called <code>manifest.json</code> and include the following code.</p><pre><code>{  &quot;name&quot;: &quot;OAuth Tutorial FriendBlock&quot;,  &quot;version&quot;: &quot;1.0&quot;,  &quot;description&quot;: &quot;Uses OAuth to connect to Google&#39;s People API and display contacts photos.&quot;,  &quot;manifest_version&quot;: 3,  &quot;action&quot;: {    &quot;default_title&quot;: &quot;FriendBlock, friends face&#39;s in a block.&quot;  },  &quot;background&quot;: {    &quot;service_worker&quot;: &quot;background.js&quot;  }}
</code></pre><h3 id="background-js" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#background" target="_blank" rel="noreferrer">#</a> background.js <a class="header-anchor" href="#background-js" aria-hidden="true">#</a></h3><p>Add the background service worker by creating a file called <code>background.js</code> and include the following code.</p><pre><code>chrome.action.onClicked.addListener(function() {  chrome.tabs.create({url: &#39;index.html&#39;});});
</code></pre><h3 id="index-html" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#index" target="_blank" rel="noreferrer">#</a> index.html <a class="header-anchor" href="#index-html" aria-hidden="true">#</a></h3><p>Add an HTML file called <code>index.html</code> and include the following code.</p><pre><code>&lt;html&gt;  &lt;head&gt;    &lt;title&gt;FriendBlock&lt;/title&gt;    &lt;style&gt;      button {        padding: 10px;        background-color: #3C79F8;        display: inline-block;      }    &lt;/style&gt;  &lt;/head&gt;  &lt;body&gt;    &lt;button&gt;FriendBlock Contacts&lt;/button&gt;    &lt;div id=&quot;friendDiv&quot;&gt;&lt;/div&gt;  &lt;/body&gt;&lt;/html&gt;
</code></pre><h2 id="keep-a-consistent-extension-id" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#keep-consistent-id" target="_blank" rel="noreferrer">#</a> Keep a consistent extension ID <a class="header-anchor" href="#keep-a-consistent-extension-id" aria-hidden="true">#</a></h2><p>Preserving a single ID is essential during development. To keep a consistent ID, follow these steps:</p><h3 id="upload-extension-to-the-developer-dashboard" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#upload_to_dashboard" target="_blank" rel="noreferrer">#</a> Upload extension to the developer dashboard <a class="header-anchor" href="#upload-extension-to-the-developer-dashboard" aria-hidden="true">#</a></h3><p>Package the extension directory into a <code>.zip</code> file and upload it to the <a href="https://chrome.google.com/webstore/developer/dashboard" target="_blank" rel="noreferrer">Chrome Developer Dashboard</a> without publishing it:</p><ol><li>On the Developer Dashboard, click <strong>Add new item</strong>.</li><li>Click <strong>Browse files</strong>, select the extension&#39;s zip file, and upload it.</li><li>Go to the <strong>Package</strong> tab and click <strong>View public key</strong>.</li></ol><p>![Developer Dashboard Package tab](./Chrome Extensions Tutorial_ OAuth2 - Authenticate users with Google - Chrome Developers_files/8j12N4AyvHyjCZaFghv8.png)</p><p>When the popup is open, follow these steps:</p><ol><li>Copy the code in between <code>-----BEGIN PUBLIC KEY-----</code> and <code>-----END PUBLIC KEY-----</code>.</li><li>Remove the newlines in order to make it a single line of text.</li></ol><p>![Public key popup](./Chrome Extensions Tutorial_ OAuth2 - Authenticate users with Google - Chrome Developers_files/iOF372HS2DNkv5gLc1AA.png)</p><p>Add the code to the <code>manifest.json</code> under the <a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/%5B/docs/extensions/mv3/manifest/key/" target="_blank" rel="noreferrer"><code>&quot;key&quot;</code></a> field. This way the extension will use the same ID.</p><pre><code>{ // manifest.json   &quot;manifest_version&quot;: 3,...  &quot;key&quot;: &quot;ThisKeyIsGoingToBeVeryLong/go8GGC2u3UD9WI3MkmBgyiDPP2OreImEQhPvwpliioUMJmERZK3zPAx72z8MDvGp7Fx7ZlzuZpL4yyp4zXBI+MUhFGoqEh32oYnm4qkS4JpjWva5Ktn4YpAWxd4pSCVs8I4MZms20+yx5OlnlmWQEwQiiIwPPwG1e1jRw0Ak5duPpE3uysVGZXkGhC5FyOFM+oVXwc1kMqrrKnQiMJ3lgh59LjkX4z1cDNX3MomyUMJ+I+DaWC2VdHggB74BNANSd+zkPQeNKg3o7FetlDJya1bk8ofdNBARxHFMBtMXu/ONfCT3Q2kCY9gZDRktmNRiHG/1cXhkIcN1RWrbsCkwIDAQAB&quot;,}
</code></pre><h3 id="compare-ids" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#extension_management" target="_blank" rel="noreferrer">#</a> Compare IDs <a class="header-anchor" href="#compare-ids" aria-hidden="true">#</a></h3><p>Open the Extensions Management page at <code>chrome://extensions</code>, ensure <strong>Developer mode</strong> is enabled, and upload the unpackaged extension directory. Compare the extension ID on the extensions management page to the Item ID in the Developer Dashboard. They should match.</p><p>![The ID of the extension match](./Chrome Extensions Tutorial_ OAuth2 - Authenticate users with Google - Chrome Developers_files/AGorME3hdXd2YeKot5Nc.png)</p><h2 id="create-oauth-client-id" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#oauth_client" target="_blank" rel="noreferrer">#</a> Create OAuth client ID <a class="header-anchor" href="#create-oauth-client-id" aria-hidden="true">#</a></h2><p>Navigate to the <a href="https://console.developers.google.com/apis" target="_blank" rel="noreferrer">Google API console</a> and create a new project. Once ready, select <strong>Credentials</strong> in the sidebar, click <strong>Create credentials</strong> and choose <strong>OAuth client ID</strong>.</p><p>![Create credentials for extension](./Chrome Extensions Tutorial_ OAuth2 - Authenticate users with Google - Chrome Developers_files/iC6LC1PYreTxndYmLEWN.png)</p><p>On the Create client ID page, select <strong>Chrome App</strong>. Fill out the name of the extension and place the extension ID at the end of the URL in the Application ID field.</p><p>![Fill out extension information](./Chrome Extensions Tutorial_ OAuth2 - Authenticate users with Google - Chrome Developers_files/CwgbnssSgeRtqHGxRbpd.png)</p><p>Finish by clicking create. The console will provide an OAuth client ID.</p><h2 id="register-oauth-in-manifest" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#oauth_registration" target="_blank" rel="noreferrer">#</a> Register OAuth in manifest <a class="header-anchor" href="#register-oauth-in-manifest" aria-hidden="true">#</a></h2><p>Include the <code>&quot;oauth2&quot;</code> field in the extension manifest. Place the generated OAuth client ID under <code>&quot;client_id&quot;</code>. Include an empty string in <code>&quot;scopes&quot;</code> for now.</p><pre><code>{  &quot;name&quot;: &quot;OAuth Tutorial FriendBlock&quot;,  ...  &quot;oauth2&quot;: {    &quot;client_id&quot;: &quot;yourExtensionOAuthClientIDWillGoHere.apps.googleusercontent.com&quot;,    &quot;scopes&quot;:[&quot;&quot;]  },  ...}
</code></pre><h2 id="initiate-first-oauth-flow" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#identity_permission" target="_blank" rel="noreferrer">#</a> Initiate first OAuth flow <a class="header-anchor" href="#initiate-first-oauth-flow" aria-hidden="true">#</a></h2><p>Register the <a href="https://developer.chrome.com/docs/extensions/reference/identity/" target="_blank" rel="noreferrer"><code>identity</code></a> permission in the manifest.</p><pre><code>{  &quot;name&quot;: &quot;OAuth Tutorial FriendBlock&quot;,  ...  &quot;permissions&quot;: [    &quot;identity&quot;  ],  ...}
</code></pre><p>Create a file to manage the OAuth flow called <code>oauth.js</code> and include the following code.</p><pre><code>window.onload = function() {  document.querySelector(&#39;button&#39;).addEventListener(&#39;click&#39;, function() {    chrome.identity.getAuthToken({interactive: true}, function(token) {      console.log(token);    });  });};
</code></pre><p>Place a script tag for <code>oauth.js</code> in the head of <code>index.html</code>.</p><pre><code>...  &lt;head&gt;    &lt;title&gt;FriendBlock&lt;/title&gt;    ...    &lt;script type=&quot;text/javascript&quot; src=&quot;oauth.js&quot;&gt;&lt;/script&gt;  &lt;/head&gt;...
</code></pre><p>Reload the extension and click on the browser icon to open <code>index.html</code>. Open the console and click on the &quot;FriendBlock Contacts&quot; button. An OAuth token will appear in the console.</p><p>![View the token in the console](./Chrome Extensions Tutorial_ OAuth2 - Authenticate users with Google - Chrome Developers_files/aXVIN7YRfBnDc3ItHVJ2.png)</p><h2 id="enable-the-google-people-api" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#enable_people" target="_blank" rel="noreferrer">#</a> Enable the Google People API <a class="header-anchor" href="#enable-the-google-people-api" aria-hidden="true">#</a></h2><p>Return to the Google API console and select <strong>Library</strong> from the sidebar. Search for &quot;Google People API&quot;, click on the correct result and enable it.</p><p>![Enable the People API](./Chrome Extensions Tutorial_ OAuth2 - Authenticate users with Google - Chrome Developers_files/AQbJX735qIGEJUephhXf.png)</p><p>Add the <a href="https://developers.google.com/people/" target="_blank" rel="noreferrer">Google People API</a> client library to <code>&quot;scopes&quot;</code> in the extension manifest.</p><pre><code>{  &quot;name&quot;: &quot;OAuth Tutorial FriendBlock&quot;,  ...  &quot;oauth2&quot;: {    &quot;client_id&quot;: &quot;yourExtensionOAuthClientIDWillGoHere.apps.googleusercontent.com&quot;,    &quot;scopes&quot;: [      &quot;https://www.googleapis.com/auth/contacts.readonly&quot;    ]  },  ...}
</code></pre><p>Return to the Google API console and navigate back to credentials. Click &quot;Create credentials&quot; and select &quot;API key&quot; from the dropdown.</p><p>![Create People API credentials](./Chrome Extensions Tutorial_ OAuth2 - Authenticate users with Google - Chrome Developers_files/c8Fpzw5f3fihBgx1RbIr.png)</p><p>Keep the generated API key for later use.</p><h2 id="create-first-api-request" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#create_call" target="_blank" rel="noreferrer">#</a> Create first API request <a class="header-anchor" href="#create-first-api-request" aria-hidden="true">#</a></h2><p>Now that the extension has proper permissions, credentials, and can authorize a Google user, it can request data through the People API. Update the code in <code>oauth.js</code> to match below.</p><pre><code>window.onload = function() {  document.querySelector(&#39;button&#39;).addEventListener(&#39;click&#39;, function() {    chrome.identity.getAuthToken({interactive: true}, function(token) {      let init = {        method: &#39;GET&#39;,        async: true,        headers: {          Authorization: &#39;Bearer &#39; + token,          &#39;Content-Type&#39;: &#39;application/json&#39;        },        &#39;contentType&#39;: &#39;json&#39;      };      fetch(          &#39;https://people.googleapis.com/v1/contactGroups/all?maxMembers=20&amp;key=API_KEY&#39;,          init)          .then((response) =&gt; response.json())          .then(function(data) {            console.log(data)          });    });  });};
</code></pre><p>Replace API_KEY with the API key generated from the Google API console. The extension should log a JSON object that includes an array of <code>people/account_id</code>s under the <code>memberResourceNames</code> field.</p><h2 id="block-faces" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#block_faces" target="_blank" rel="noreferrer">#</a> Block faces <a class="header-anchor" href="#block-faces" aria-hidden="true">#</a></h2><p>Now that the extension is returning a list of the user&#39;s contacts, it can make additional requests to <a href="https://developers.google.com/people/api/rest/v1/contactGroups/get" target="_blank" rel="noreferrer">retrieve those contact&#39;s profiles and information</a> . The extension will use the <code>memberResourceNames</code> to retrieve the photo information of user contacts. Update <code>oauth.js</code> to include the following code.</p><pre><code>window.onload = function() {  document.querySelector(&#39;button&#39;).addEventListener(&#39;click&#39;, function() {    chrome.identity.getAuthToken({interactive: true}, function(token) {      let init = {        method: &#39;GET&#39;,        async: true,        headers: {          Authorization: &#39;Bearer &#39; + token,          &#39;Content-Type&#39;: &#39;application/json&#39;        },        &#39;contentType&#39;: &#39;json&#39;      };      fetch(          &#39;https://people.googleapis.com/v1/contactGroups/all?maxMembers=20&amp;key=&lt;API_Key_Here&gt;&#39;,          init)          .then((response) =&gt; response.json())          .then(function(data) {            let photoDiv = document.querySelector(&#39;#friendDiv&#39;);            let returnedContacts = data.memberResourceNames;            for (let i = 0; i &lt; returnedContacts.length; i++) {              fetch(                  &#39;https://people.googleapis.com/v1/&#39; + returnedContacts[i] +                      &#39;?personFields=photos&amp;key=API_KEY&#39;,                  init)                  .then((response) =&gt; response.json())                  .then(function(data) {                    let profileImg = document.createElement(&#39;img&#39;);                    profileImg.src = data.photos[0].url;                    photoDiv.appendChild(profileImg);                  });            };          });    });  });};
</code></pre><p>Reload and return to the extension. Click the FriendBlock button and ta-da! Enjoy contact&#39;s faces in a block.</p><p>![Contact faces in a block](./Chrome Extensions Tutorial_ OAuth2 - Authenticate users with Google - Chrome Developers_files/EQkrpv2o5kKIWPYHVhXn.png)</p><p>Updated on Monday, November 8, 2021 \u2022 <a href="https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/tut_oauth/index.md" target="_blank" rel="noreferrer">Improve article</a></p>`,69),i=[a];function s(l,h,c,d,u,p){return t(),o("div",null,i)}const f=e(n,[["render",s]]);export{g as __pageData,f as default};