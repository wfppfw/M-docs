

*   [Get started](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#set_up)
    *   [manifest.json](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#manifest)
    *   [background.js](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#background)
    *   [index.html](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#index)
*   [Keep a consistent extension ID](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#keep-consistent-id)
    *   [Upload extension to the developer dashboard](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#upload_to_dashboard)
    *   [Compare IDs](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#extension_management)
*   [Create OAuth client ID](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#oauth_client)
*   [Register OAuth in manifest](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#oauth_registration)
*   [Initiate first OAuth flow](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#identity_permission)
*   [Enable the Google People API](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#enable_people)
*   [Create first API request](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#create_call)
*   [Block faces](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#block_faces)

OAuth2: Authenticate users with Google
======================================

Published on Tuesday, September 18, 2012 • Updated on Monday, November 8, 2021



*   [Get started](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#set_up)
    *   [manifest.json](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#manifest)
    *   [background.js](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#background)
    *   [index.html](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#index)
*   [Keep a consistent extension ID](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#keep-consistent-id)
    *   [Upload extension to the developer dashboard](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#upload_to_dashboard)
    *   [Compare IDs](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#extension_management)
*   [Create OAuth client ID](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#oauth_client)
*   [Register OAuth in manifest](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#oauth_registration)
*   [Initiate first OAuth flow](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#identity_permission)
*   [Enable the Google People API](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#enable_people)
*   [Create first API request](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#create_call)
*   [Block faces](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#block_faces)

Caution

This page was migrated directly from the Manifest V2 documentation set. It has not yet been validated for compliance with Manifest V3.

[OAuth2](https://oauth.net/2/) is the industry-standard protocol for authorization. It provides a mechanism for users to grant web and desktop applications access to private information without sharing their username, password and other private credentials.

This tutorial builds an extension that accesses a user's Google contacts using the [Google People API](https://developers.google.com/people/) and the [Chrome Identity API](https://developer.chrome.com/docs/extensions/reference/identity/). Because extensions don't load over HTTPS, can't perform redirects or set cookies, they rely on the Chrome Identity API to use OAuth2.

[#](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#set_up) Get started
-----------------------------------------------------------------------------------

Begin by creating a directory and the following starter files.

### [#](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#manifest) manifest.json

Add the manifest by creating a file called `manifest.json` and include the following code.

    {  "name": "OAuth Tutorial FriendBlock",  "version": "1.0",  "description": "Uses OAuth to connect to Google's People API and display contacts photos.",  "manifest_version": 3,  "action": {    "default_title": "FriendBlock, friends face's in a block."  },  "background": {    "service_worker": "background.js"  }}

### [#](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#background) background.js

Add the background service worker by creating a file called `background.js` and include the following code.

    chrome.action.onClicked.addListener(function() {  chrome.tabs.create({url: 'index.html'});});

### [#](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#index) index.html

Add an HTML file called `index.html` and include the following code.

    <html>  <head>    <title>FriendBlock</title>    <style>      button {        padding: 10px;        background-color: #3C79F8;        display: inline-block;      }    </style>  </head>  <body>    <button>FriendBlock Contacts</button>    <div id="friendDiv"></div>  </body></html>

[#](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#keep-consistent-id) Keep a consistent extension ID
------------------------------------------------------------------------------------------------------------------

Preserving a single ID is essential during development. To keep a consistent ID, follow these steps:

### [#](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#upload_to_dashboard) Upload extension to the developer dashboard

Package the extension directory into a `.zip` file and upload it to the [Chrome Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard) without publishing it:

1.  On the Developer Dashboard, click **Add new item**.
2.  Click **Browse files**, select the extension's zip file, and upload it.
3.  Go to the **Package** tab and click **View public key**.

![Developer Dashboard Package tab](./Chrome Extensions Tutorial_ OAuth2 - Authenticate users with Google - Chrome Developers_files/8j12N4AyvHyjCZaFghv8.png)

When the popup is open, follow these steps:

1.  Copy the code in between `-----BEGIN PUBLIC KEY-----` and `-----END PUBLIC KEY-----`.
2.  Remove the newlines in order to make it a single line of text.

![Public key popup](./Chrome Extensions Tutorial_ OAuth2 - Authenticate users with Google - Chrome Developers_files/iOF372HS2DNkv5gLc1AA.png)

Add the code to the `manifest.json` under the [`"key"`](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/%5B/docs/extensions/mv3/manifest/key/) field. This way the extension will use the same ID.

    { // manifest.json   "manifest_version": 3,...  "key": "ThisKeyIsGoingToBeVeryLong/go8GGC2u3UD9WI3MkmBgyiDPP2OreImEQhPvwpliioUMJmERZK3zPAx72z8MDvGp7Fx7ZlzuZpL4yyp4zXBI+MUhFGoqEh32oYnm4qkS4JpjWva5Ktn4YpAWxd4pSCVs8I4MZms20+yx5OlnlmWQEwQiiIwPPwG1e1jRw0Ak5duPpE3uysVGZXkGhC5FyOFM+oVXwc1kMqrrKnQiMJ3lgh59LjkX4z1cDNX3MomyUMJ+I+DaWC2VdHggB74BNANSd+zkPQeNKg3o7FetlDJya1bk8ofdNBARxHFMBtMXu/ONfCT3Q2kCY9gZDRktmNRiHG/1cXhkIcN1RWrbsCkwIDAQAB",}

### [#](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#extension_management) Compare IDs

Open the Extensions Management page at `chrome://extensions`, ensure **Developer mode** is enabled, and upload the unpackaged extension directory. Compare the extension ID on the extensions management page to the Item ID in the Developer Dashboard. They should match.

![The ID of the extension match](./Chrome Extensions Tutorial_ OAuth2 - Authenticate users with Google - Chrome Developers_files/AGorME3hdXd2YeKot5Nc.png)

[#](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#oauth_client) Create OAuth client ID
----------------------------------------------------------------------------------------------------

Navigate to the [Google API console](https://console.developers.google.com/apis) and create a new project. Once ready, select **Credentials** in the sidebar, click **Create credentials** and choose **OAuth client ID**.

![Create credentials for extension](./Chrome Extensions Tutorial_ OAuth2 - Authenticate users with Google - Chrome Developers_files/iC6LC1PYreTxndYmLEWN.png)

On the Create client ID page, select **Chrome App**. Fill out the name of the extension and place the extension ID at the end of the URL in the Application ID field.

![Fill out extension information](./Chrome Extensions Tutorial_ OAuth2 - Authenticate users with Google - Chrome Developers_files/CwgbnssSgeRtqHGxRbpd.png)

Finish by clicking create. The console will provide an OAuth client ID.

[#](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#oauth_registration) Register OAuth in manifest
--------------------------------------------------------------------------------------------------------------

Include the `"oauth2"` field in the extension manifest. Place the generated OAuth client ID under `"client_id"`. Include an empty string in `"scopes"` for now.

    {  "name": "OAuth Tutorial FriendBlock",  ...  "oauth2": {    "client_id": "yourExtensionOAuthClientIDWillGoHere.apps.googleusercontent.com",    "scopes":[""]  },  ...}

[#](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#identity_permission) Initiate first OAuth flow
--------------------------------------------------------------------------------------------------------------

Register the [`identity`](https://developer.chrome.com/docs/extensions/reference/identity/) permission in the manifest.

    {  "name": "OAuth Tutorial FriendBlock",  ...  "permissions": [    "identity"  ],  ...}

Create a file to manage the OAuth flow called `oauth.js` and include the following code.

    window.onload = function() {  document.querySelector('button').addEventListener('click', function() {    chrome.identity.getAuthToken({interactive: true}, function(token) {      console.log(token);    });  });};

Place a script tag for `oauth.js` in the head of `index.html`.

    ...  <head>    <title>FriendBlock</title>    ...    <script type="text/javascript" src="oauth.js"></script>  </head>...

Reload the extension and click on the browser icon to open `index.html`. Open the console and click on the "FriendBlock Contacts" button. An OAuth token will appear in the console.

![View the token in the console](./Chrome Extensions Tutorial_ OAuth2 - Authenticate users with Google - Chrome Developers_files/aXVIN7YRfBnDc3ItHVJ2.png)

[#](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#enable_people) Enable the Google People API
-----------------------------------------------------------------------------------------------------------

Return to the Google API console and select **Library** from the sidebar. Search for "Google People API", click on the correct result and enable it.

![Enable the People API](./Chrome Extensions Tutorial_ OAuth2 - Authenticate users with Google - Chrome Developers_files/AQbJX735qIGEJUephhXf.png)

Add the [Google People API](https://developers.google.com/people/) client library to `"scopes"` in the extension manifest.

    {  "name": "OAuth Tutorial FriendBlock",  ...  "oauth2": {    "client_id": "yourExtensionOAuthClientIDWillGoHere.apps.googleusercontent.com",    "scopes": [      "https://www.googleapis.com/auth/contacts.readonly"    ]  },  ...}

Return to the Google API console and navigate back to credentials. Click "Create credentials" and select "API key" from the dropdown.

![Create People API credentials](./Chrome Extensions Tutorial_ OAuth2 - Authenticate users with Google - Chrome Developers_files/c8Fpzw5f3fihBgx1RbIr.png)

Keep the generated API key for later use.

[#](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#create_call) Create first API request
-----------------------------------------------------------------------------------------------------

Now that the extension has proper permissions, credentials, and can authorize a Google user, it can request data through the People API. Update the code in `oauth.js` to match below.

    window.onload = function() {  document.querySelector('button').addEventListener('click', function() {    chrome.identity.getAuthToken({interactive: true}, function(token) {      let init = {        method: 'GET',        async: true,        headers: {          Authorization: 'Bearer ' + token,          'Content-Type': 'application/json'        },        'contentType': 'json'      };      fetch(          'https://people.googleapis.com/v1/contactGroups/all?maxMembers=20&key=API_KEY',          init)          .then((response) => response.json())          .then(function(data) {            console.log(data)          });    });  });};

Replace API\_KEY with the API key generated from the Google API console. The extension should log a JSON object that includes an array of `people/account_id`s under the `memberResourceNames` field.

[#](https://developer.chrome.com/docs/extensions/mv3/tut_oauth/#block_faces) Block faces
----------------------------------------------------------------------------------------

Now that the extension is returning a list of the user's contacts, it can make additional requests to [retrieve those contact's profiles and information](https://developers.google.com/people/api/rest/v1/contactGroups/get) . The extension will use the `memberResourceNames` to retrieve the photo information of user contacts. Update `oauth.js` to include the following code.

    window.onload = function() {  document.querySelector('button').addEventListener('click', function() {    chrome.identity.getAuthToken({interactive: true}, function(token) {      let init = {        method: 'GET',        async: true,        headers: {          Authorization: 'Bearer ' + token,          'Content-Type': 'application/json'        },        'contentType': 'json'      };      fetch(          'https://people.googleapis.com/v1/contactGroups/all?maxMembers=20&key=<API_Key_Here>',          init)          .then((response) => response.json())          .then(function(data) {            let photoDiv = document.querySelector('#friendDiv');            let returnedContacts = data.memberResourceNames;            for (let i = 0; i < returnedContacts.length; i++) {              fetch(                  'https://people.googleapis.com/v1/' + returnedContacts[i] +                      '?personFields=photos&key=API_KEY',                  init)                  .then((response) => response.json())                  .then(function(data) {                    let profileImg = document.createElement('img');                    profileImg.src = data.photos[0].url;                    photoDiv.appendChild(profileImg);                  });            };          });    });  });};

Reload and return to the extension. Click the FriendBlock button and ta-da! Enjoy contact's faces in a block.

![Contact faces in a block](./Chrome Extensions Tutorial_ OAuth2 - Authenticate users with Google - Chrome Developers_files/EQkrpv2o5kKIWPYHVhXn.png)

Updated on Monday, November 8, 2021 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/tut_oauth/index.md)

