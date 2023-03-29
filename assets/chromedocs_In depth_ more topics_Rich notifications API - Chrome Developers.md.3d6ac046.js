import{_ as e,o as t,c as o,a as i}from"./app.f245760f.js";const g=JSON.parse('{"title":"Rich notifications API","description":"","frontmatter":{},"headers":[{"level":2,"title":"# How they look","slug":"how-they-look","link":"#how-they-look","children":[]},{"level":2,"title":"# How they behave","slug":"how-they-behave","link":"#how-they-behave","children":[]},{"level":2,"title":"# How to develop them","slug":"how-to-develop-them","link":"#how-to-develop-them","children":[{"level":3,"title":"# Create basic notification","slug":"create-basic-notification","link":"#create-basic-notification","children":[]},{"level":3,"title":"# Create image notification","slug":"create-image-notification","link":"#create-image-notification","children":[]},{"level":3,"title":"# Create list notification","slug":"create-list-notification","link":"#create-list-notification","children":[]},{"level":3,"title":"# Create progress notification","slug":"create-progress-notification","link":"#create-progress-notification","children":[]}]},{"level":2,"title":"# Listening for and responding to events","slug":"listening-for-and-responding-to-events","link":"#listening-for-and-responding-to-events","children":[]}],"relativePath":"chromedocs/In depth_ more topics/Rich notifications API - Chrome Developers.md"}'),r={name:"chromedocs/In depth_ more topics/Rich notifications API - Chrome Developers.md"},n=i(`<ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#look" target="_blank" rel="noreferrer">How they look</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#behave" target="_blank" rel="noreferrer">How they behave</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#develop" target="_blank" rel="noreferrer">How to develop them</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#basic" target="_blank" rel="noreferrer">Create basic notification</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#image" target="_blank" rel="noreferrer">Create image notification</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#list" target="_blank" rel="noreferrer">Create list notification</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#progress" target="_blank" rel="noreferrer">Create progress notification</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#events" target="_blank" rel="noreferrer">Listening for and responding to events</a></li></ul><h1 id="rich-notifications-api" tabindex="-1">Rich notifications API <a class="header-anchor" href="#rich-notifications-api" aria-hidden="true">#</a></h1><p>Published on Wednesday, June 25, 2014 \u2022 Updated on Thursday, April 27, 2017</p><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#look" target="_blank" rel="noreferrer">How they look</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#behave" target="_blank" rel="noreferrer">How they behave</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#develop" target="_blank" rel="noreferrer">How to develop them</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#basic" target="_blank" rel="noreferrer">Create basic notification</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#image" target="_blank" rel="noreferrer">Create image notification</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#list" target="_blank" rel="noreferrer">Create list notification</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#progress" target="_blank" rel="noreferrer">Create progress notification</a></li></ul></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#events" target="_blank" rel="noreferrer">Listening for and responding to events</a></li></ul><p><strong>Platform difference:</strong> In Chrome version 59, notifications appear differently for Mac OS X users. Instead of Chrome&#39;s own notifications, users see native Mac OS X notifications. <a href="https://developers.google.com/web/updates/2017/04/native-mac-os-notifications" target="_blank" rel="noreferrer">Learn more in this article</a>.</p><p>The <a href="https://developer.chrome.com/docs/extensions/reference/notifications/" target="_blank" rel="noreferrer">rich notifications API</a> lets you create notifications using templates and show these notifications to users in the user&#39;s system tray:</p><p>![Notifications in system user tray](./Rich notifications API - Chrome Developers_files/tAzH8Og2Lql9nAcIRMOA.png)</p><h2 id="how-they-look" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#look" target="_blank" rel="noreferrer">#</a> How they look <a class="header-anchor" href="#how-they-look" aria-hidden="true">#</a></h2><p>Rich notifications come in four different flavors: basic, image, list, and progress. All notifications include a title, message, small icon displayed to the left of the notification message, and a contextMessage field, which is displayed as a 3rd text field in a lighter color font.</p><p>A basic notification:</p><p>![Basic notification](./Rich notifications API - Chrome Developers_files/ZNTfa7vVa0sor219W0dk.png)</p><p>List notifications display any number of list items:</p><p>![List notification](./Rich notifications API - Chrome Developers_files/vFV3s1EW9gAPTog3khPE.png)</p><p>Image notifications include an image preview:</p><p>![Image notification](./Rich notifications API - Chrome Developers_files/vtc3JD29GPhnAZSjxljc.png)</p><p>Progress notifications show a progress bar:</p><p>![Progress notification](./Rich notifications API - Chrome Developers_files/cKPXPoLP0vqqenR88z9M.png)</p><h2 id="how-they-behave" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#behave" target="_blank" rel="noreferrer">#</a> How they behave <a class="header-anchor" href="#how-they-behave" aria-hidden="true">#</a></h2><p>On ChromeOS, notifications show up in a user&#39;s system tray, and stay in the system tray until the user dismisses them. The system tray keeps a count of all new notifications. Once a users sees the notifications in the system tray, the count is reset to zero.</p><p>Notifications can be assigned a priority between -2 to 2. Priorities &lt; 0 are shown in the ChromeOS notification center, and produce an error on other platforms. Priority 0 is the default priority. Priorities &gt; 0 are shown for increasing duration and more high priority notifications can be displayed in the system tray.</p><p><strong>Platform difference:</strong> The <code>code</code> priority does not affect the order of notifications in Chrome version 59+ on macOS.</p><p>In addition to displaying information, all notification types can include up to two action items. When users click on an action item, your extension can respond with the appropriate action. For example, when the user clicks on &quot;Reply&quot;, the email app opens and the user can complete the reply:</p><p>![Action in notification](./Rich notifications API - Chrome Developers_files/CozjuLjsi01Ch9KNBoAY.png)</p><h2 id="how-to-develop-them" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#develop" target="_blank" rel="noreferrer">#</a> How to develop them <a class="header-anchor" href="#how-to-develop-them" aria-hidden="true">#</a></h2><p>To use this API, call the <a href="https://developer.chrome.com/docs/extensions/reference/notifications#method-create" target="_blank" rel="noreferrer">notifications.create</a> method, passing in the notification details via the <code>options</code> parameter:</p><pre><code>chrome.notifications.create(id, options, creationCallback);
</code></pre><p>The <a href="https://developer.chrome.com/docs/extensions/reference/notifications#type-NotificationOptions" target="_blank" rel="noreferrer">notifications.NotificationOptions</a> must include a <a href="https://developer.chrome.com/docs/extensions/reference/notifications#type-TemplateType" target="_blank" rel="noreferrer">notifications.TemplateType</a>, which defines available notification details and how those details are displayed.</p><p><strong>Consider integrating with GCM!</strong></p><p><a href="https://developer.chrome.com/docs/extensions/reference/gcm/" target="_blank" rel="noreferrer">Keep your users informed</a> all the time, even when your extension isn&#39;t opened. The <a href="https://github.com/GoogleChrome/chrome-extensions-samples/tree/master/apps/samples/gcm-notifications" target="_blank" rel="noreferrer">gcm-notifications sample</a> shows a simple integration between GCM and Rich Notifications API.</p><h3 id="create-basic-notification" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#basic" target="_blank" rel="noreferrer">#</a> Create basic notification <a class="header-anchor" href="#create-basic-notification" aria-hidden="true">#</a></h3><p>All template types (<code>basic</code>, <code>image</code>, <code>list</code> and <code>progress</code>) must include a notification <code>title</code> and <code>message</code>, as well as an <code>iconUrl</code>, which is a link to a small icon that is displayed to the left of the notification message.</p><p>Here&#39;s an example of a <code>basic</code> template:</p><pre><code>var opt = {  type: &quot;basic&quot;,  title: &quot;Primary Title&quot;,  message: &quot;Primary message to display&quot;,  iconUrl: &quot;url_to_small_icon&quot;}
</code></pre><h3 id="create-image-notification" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#image" target="_blank" rel="noreferrer">#</a> Create image notification <a class="header-anchor" href="#create-image-notification" aria-hidden="true">#</a></h3><p>The <code>image</code> template type also includes an <code>imageUrl</code>, which is a link to an image that is previewed within the notification:</p><p><strong>Platform difference:</strong> Images will not be display to users using Chrome version 59+ on Mac OS X.</p><pre><code>var opt = {  type: &quot;image&quot;,  title: &quot;Primary Title&quot;,  message: &quot;Primary message to display&quot;,  iconUrl: &quot;url_to_small_icon&quot;,  imageUrl: &quot;url_to_preview_image&quot;}
</code></pre><h3 id="create-list-notification" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#list" target="_blank" rel="noreferrer">#</a> Create list notification <a class="header-anchor" href="#create-list-notification" aria-hidden="true">#</a></h3><p>The <code>list</code> template displays <code>items</code> in a list format:</p><p><strong>Platform difference:</strong> Only the first list item is displayed to users in Chrome version 59+ on Mac OS X.</p><pre><code>var opt = {  type: &quot;list&quot;,  title: &quot;Primary Title&quot;,  message: &quot;Primary message to display&quot;,  iconUrl: &quot;url_to_small_icon&quot;,  items: [{ title: &quot;Item1&quot;, message: &quot;This is item 1.&quot;},          { title: &quot;Item2&quot;, message: &quot;This is item 2.&quot;},          { title: &quot;Item3&quot;, message: &quot;This is item 3.&quot;}]}
</code></pre><h3 id="create-progress-notification" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#progress" target="_blank" rel="noreferrer">#</a> Create progress notification <a class="header-anchor" href="#create-progress-notification" aria-hidden="true">#</a></h3><p>The <code>progress</code> template displays a progress bar where current progress ranges from 0 to 100:</p><p><strong>Platform difference:</strong> In Chrome version 59+ on Mac OS X, the progress bar displays as a percentage value in the title of the notification instead of displaying a progress bar.</p><pre><code>var opt = {  type: &quot;progress&quot;,  title: &quot;Primary Title&quot;,  message: &quot;Primary message to display&quot;,  iconUrl: &quot;url_to_small_icon&quot;,  progress: 42}
</code></pre><h2 id="listening-for-and-responding-to-events" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/richNotifications/#events" target="_blank" rel="noreferrer">#</a> Listening for and responding to events <a class="header-anchor" href="#listening-for-and-responding-to-events" aria-hidden="true">#</a></h2><p>All notifications can include event listeners and event handlers that respond to user actions (see <a href="https://developer.chrome.com/docs/extensions/reference/events/" target="_blank" rel="noreferrer">chrome.events</a>). For example, you can write an event handler to respond to an <a href="https://developer.chrome.com/docs/extensions/reference/notifications#event-onButtonClicked" target="_blank" rel="noreferrer">notifications.onButtonClicked</a> event.</p><p>Event listener:</p><pre><code>chrome.notifications.onButtonClicked.addListener(replyBtnClick);
</code></pre><p>Event handler:</p><pre><code>function replyBtnClick {	//Write function to respond to user action.}
</code></pre><p>Consider including event listeners and handlers within the <a href="https://developer.chrome.com/docs/apps/app_lifecycle#create_event_page" target="_blank" rel="noreferrer">event page</a>, so that notifications can pop-up even when the extension isn&#39;t running.</p><p>Updated on Thursday, April 27, 2017 \u2022 <a href="https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/richNotifications/index.md" target="_blank" rel="noreferrer">Improve article</a></p>`,53),a=[n];function s(c,l,h,p,d,f){return t(),o("div",null,a)}const v=e(r,[["render",s]]);export{g as __pageData,v as default};
