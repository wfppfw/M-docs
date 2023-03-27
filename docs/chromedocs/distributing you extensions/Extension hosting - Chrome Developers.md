

Extension hosting
=================

Published on Tuesday, September 18, 2012 • Updated on Friday, December 10, 2021

There are multiple ways to install a Chrome extension, but there are only two officially supported distribution mechanisms.

[Chrome Web Store](https://developer.chrome.com/docs/webstore/about_webstore/)

Chrome Web Store is an online marketplace for Chrome extensions and themes. Developers who register with the Chrome Web Store can publish their extensions and make them available to users across the world. Only extensions hosted on and signed by the Chrome Web Store can be directly installed by users. See [Publish in the Chrome Web Store](https://developer.chrome.com/docs/webstore/publish/) and [Enterprise publishing options](https://developer.chrome.com/docs/webstore/cws-enterprise/) for more information about how to publish on Chrome Web Store.

Self-hosting

Self hosting is the practice of hosting an extension outside of the Chrome Web Store. This option is used in managed environments where system administrators control Chrome with [enterprise policies](https://chromeenterprise.google/policies/). See [Linux installation](https://developer.chrome.com/docs/extensions/mv3/linux_hosting/) for information on how to host an extension on your own server.

In both cases, Chrome periodically checks extension hosts for new versions of installed extensions and automatically updates them without user intervention.

[Unpacked extensions](https://developer.chrome.com/docs/extensions/mv3/getstarted#unpacked) should only be used to load trusted code during the development process.

Linux users can manually install packed extensions that are not distributed or signed by Chrome Web Store.

Updated on Friday, December 10, 2021 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/hosting/index.md)

