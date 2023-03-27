

*   [How they look](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#look)
*   [How they behave](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#behave)
*   [How to develop them](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#develop)
    *   [Create basic notification](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#basic)
    *   [Create image notification](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#image)
    *   [Create list notification](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#list)
    *   [Create progress notification](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#progress)
*   [Listening for and responding to events](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#events)

Rich notifications API
======================

Published on Wednesday, June 25, 2014 • Updated on Thursday, April 27, 2017



*   [How they look](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#look)
*   [How they behave](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#behave)
*   [How to develop them](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#develop)
    *   [Create basic notification](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#basic)
    *   [Create image notification](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#image)
    *   [Create list notification](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#list)
    *   [Create progress notification](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#progress)
*   [Listening for and responding to events](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#events)

**Platform difference:** In Chrome version 59, notifications appear differently for Mac OS X users. Instead of Chrome's own notifications, users see native Mac OS X notifications. [Learn more in this article](https://developers.google.com/web/updates/2017/04/native-mac-os-notifications).

The [rich notifications API](https://developer.chrome.com/docs/extensions/reference/notifications/) lets you create notifications using templates and show these notifications to users in the user's system tray:

![Notifications in system user tray](./Rich notifications API - Chrome Developers_files/tAzH8Og2Lql9nAcIRMOA.png)

[#](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#look) How they look
-------------------------------------------------------------------------------------------

Rich notifications come in four different flavors: basic, image, list, and progress. All notifications include a title, message, small icon displayed to the left of the notification message, and a contextMessage field, which is displayed as a 3rd text field in a lighter color font.

A basic notification:

![Basic notification](./Rich notifications API - Chrome Developers_files/ZNTfa7vVa0sor219W0dk.png)

List notifications display any number of list items:

![List notification](./Rich notifications API - Chrome Developers_files/vFV3s1EW9gAPTog3khPE.png)

Image notifications include an image preview:

![Image notification](./Rich notifications API - Chrome Developers_files/vtc3JD29GPhnAZSjxljc.png)

Progress notifications show a progress bar:

![Progress notification](./Rich notifications API - Chrome Developers_files/cKPXPoLP0vqqenR88z9M.png)

[#](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#behave) How they behave
-----------------------------------------------------------------------------------------------

On ChromeOS, notifications show up in a user's system tray, and stay in the system tray until the user dismisses them. The system tray keeps a count of all new notifications. Once a users sees the notifications in the system tray, the count is reset to zero.

Notifications can be assigned a priority between -2 to 2. Priorities < 0 are shown in the ChromeOS notification center, and produce an error on other platforms. Priority 0 is the default priority. Priorities > 0 are shown for increasing duration and more high priority notifications can be displayed in the system tray.

**Platform difference:** The `code` priority does not affect the order of notifications in Chrome version 59+ on macOS.

In addition to displaying information, all notification types can include up to two action items. When users click on an action item, your extension can respond with the appropriate action. For example, when the user clicks on "Reply", the email app opens and the user can complete the reply:

![Action in notification](./Rich notifications API - Chrome Developers_files/CozjuLjsi01Ch9KNBoAY.png)

[#](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#develop) How to develop them
----------------------------------------------------------------------------------------------------

To use this API, call the [notifications.create](https://developer.chrome.com/docs/extensions/reference/notifications#method-create) method, passing in the notification details via the `options` parameter:

    chrome.notifications.create(id, options, creationCallback);

The [notifications.NotificationOptions](https://developer.chrome.com/docs/extensions/reference/notifications#type-NotificationOptions) must include a [notifications.TemplateType](https://developer.chrome.com/docs/extensions/reference/notifications#type-TemplateType), which defines available notification details and how those details are displayed.

**Consider integrating with GCM!**

[Keep your users informed](https://developer.chrome.com/docs/extensions/reference/gcm/) all the time, even when your extension isn't opened. The [gcm-notifications sample](https://github.com/GoogleChrome/chrome-extensions-samples/tree/master/apps/samples/gcm-notifications) shows a simple integration between GCM and Rich Notifications API.

### [#](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#basic) Create basic notification

All template types (`basic`, `image`, `list` and `progress`) must include a notification `title` and `message`, as well as an `iconUrl`, which is a link to a small icon that is displayed to the left of the notification message.

Here's an example of a `basic` template:

    var opt = {  type: "basic",  title: "Primary Title",  message: "Primary message to display",  iconUrl: "url_to_small_icon"}

### [#](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#image) Create image notification

The `image` template type also includes an `imageUrl`, which is a link to an image that is previewed within the notification:

**Platform difference:** Images will not be display to users using Chrome version 59+ on Mac OS X.

    var opt = {  type: "image",  title: "Primary Title",  message: "Primary message to display",  iconUrl: "url_to_small_icon",  imageUrl: "url_to_preview_image"}

### [#](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#list) Create list notification

The `list` template displays `items` in a list format:

**Platform difference:** Only the first list item is displayed to users in Chrome version 59+ on Mac OS X.

    var opt = {  type: "list",  title: "Primary Title",  message: "Primary message to display",  iconUrl: "url_to_small_icon",  items: [{ title: "Item1", message: "This is item 1."},          { title: "Item2", message: "This is item 2."},          { title: "Item3", message: "This is item 3."}]}

### [#](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#progress) Create progress notification

The `progress` template displays a progress bar where current progress ranges from 0 to 100:

**Platform difference:** In Chrome version 59+ on Mac OS X, the progress bar displays as a percentage value in the title of the notification instead of displaying a progress bar.

    var opt = {  type: "progress",  title: "Primary Title",  message: "Primary message to display",  iconUrl: "url_to_small_icon",  progress: 42}

[#](https://developer.chrome.com/docs/extensions/mv3/richNotifications/#events) Listening for and responding to events
----------------------------------------------------------------------------------------------------------------------

All notifications can include event listeners and event handlers that respond to user actions (see [chrome.events](https://developer.chrome.com/docs/extensions/reference/events/)). For example, you can write an event handler to respond to an [notifications.onButtonClicked](https://developer.chrome.com/docs/extensions/reference/notifications#event-onButtonClicked) event.

Event listener:

    chrome.notifications.onButtonClicked.addListener(replyBtnClick);

Event handler:

    function replyBtnClick {	//Write function to respond to user action.}

Consider including event listeners and handlers within the [event page](https://developer.chrome.com/docs/apps/app_lifecycle#create_event_page), so that notifications can pop-up even when the extension isn't running.

Updated on Thursday, April 27, 2017 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/richNotifications/index.md)

