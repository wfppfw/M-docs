

Manifest V2 support timeline
============================

Understand when Manifest V2 will stop working for extensions

Published on Thursday, September 23, 2021 • Updated on Wednesday, November 30, 2022

As Manifest V3 approaches full feature parity with Manifest V2, we'll be progressively phasing out Manifest V2. This page specifies the timetable for this deprecation and describes the meaning of each milestone.

![Summary of the Manifest V2 support timeline.](./Manifest V2 support timeline - Chrome Developers_files/OfabxpaX9YMUoyBWJWMX.png)

Summary of the Manifest V2 support timeline.

Check this page for any updates and for more specific dates as these milestones get closer.

**Chrome Web Store  
behavior changes**

**Chrome Browser  
behavior changes**

**January 17, 2022**

*   Existing Manifest V2 extensions can no longer be changed from “Private” to "Public" or "Unlisted"

_no change_

**June 2022**

*   Chrome Web Store stops accepting new Manifest V2 extensions with visibility set to “Public" or "Unlisted”

_no change_

**January 2023**

*   Manifest V3 will become a prerequisite for the [Featured badge](https://blog.google/products/chrome/find-great-extensions-new-chrome-web-store-badges/).

*   Enterprise policy can let Manifest V2 extensions run on Chrome deployments [within an organization](https://support.google.com/chrome/a/answer/9296680?hl=en).
*   Staring in **Chrome 112**, Chrome may run experiments to turn off support for Manifest V2 extensions in Canary, Dev, and Beta channels.

**June 2023**

*   All existing Manifest V2 items with visibility set to Public at that time will have their visibility changed to Unlisted.

*   Starting in June in **Chrome 115**, Chrome may run experiments to turn off support for Manifest V2 extensions in all channels, including stable channel.

**January 2024**

*   Chrome Web Store stops accepting updates to existing Manifest V2 extensions
*   Following the expiration of the Manifest V2 enterprise policy, the Chrome Web Store will remove all remaining Manifest V2 items from the store.

*   Manifest V2 enterprise policy expires. This means Chrome will stop running Manifest V2 extensions, even ones installed using `ExtensionInstallForcelist`.

Updated on Wednesday, November 30, 2022 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/mv2-sunset/index.md)

