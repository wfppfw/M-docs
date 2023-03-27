

*   [Manifest](https://developer.chrome.com/docs/extensions/mv3/themes/#manifest)
    *   [colors](https://developer.chrome.com/docs/extensions/mv3/themes/#colors)
    *   [images](https://developer.chrome.com/docs/extensions/mv3/themes/#images)
    *   [properties](https://developer.chrome.com/docs/extensions/mv3/themes/#properties)
    *   [tints](https://developer.chrome.com/docs/extensions/mv3/themes/#tints)

What are themes?
================

Published on Tuesday, September 18, 2012 • Updated on Thursday, July 14, 2022



*   [Manifest](https://developer.chrome.com/docs/extensions/mv3/themes/#manifest)
    *   [colors](https://developer.chrome.com/docs/extensions/mv3/themes/#colors)
    *   [images](https://developer.chrome.com/docs/extensions/mv3/themes/#images)
    *   [properties](https://developer.chrome.com/docs/extensions/mv3/themes/#properties)
    *   [tints](https://developer.chrome.com/docs/extensions/mv3/themes/#tints)

A _theme_ is a special kind of extension that changes the way the browser looks. Themes are [packaged](https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#packaging) like regular extensions, but they don't contain JavaScript or HTML code.

You can find and try a bunch of themes at the [Chrome Web Store](https://chrome.google.com/webstore/category/themes).

![green plants theme](./What are themes_ - Chrome Developers_files/FKXt2rwf5OUMDbS5jOt1.png) ![love smoke theme](./What are themes_ - Chrome Developers_files/caHFxSZ3Kuvp2v3NTQr0.png) ![jus d'orange theme](./What are themes_ - Chrome Developers_files/zNZx64SGMhM7X1u68OCH.png)

[#](https://developer.chrome.com/docs/extensions/mv3/themes/#manifest) Manifest
-------------------------------------------------------------------------------

Here is an example [`manifest.json`](https://developer.chrome.com/docs/extensions/mv3/manifest/) file for a theme:

    {  "manifest_version": 3,  "version": "2.6",  "name": "camo theme",  "theme": {    "images" : {      "theme_frame" : "images/theme_frame_camo.png",      "theme_frame_overlay" : "images/theme_frame_stripe.png",      "theme_toolbar" : "images/theme_toolbar_camo.png",      "theme_ntp_background" : "images/theme_ntp_background_norepeat.png",      "theme_ntp_attribution" : "images/attribution.png"    },    "colors" : {      "frame" : [71, 105, 91],      "toolbar" : [207, 221, 192],      "ntp_text" : [20, 40, 0],      "ntp_link" : [36, 70, 0],      "ntp_section" : [207, 221, 192],      "button_background" : [255, 255, 255]    },    "tints" : {      "buttons" : [0.33, 0.5, 0.47]    },    "properties" : {      "ntp_background_alignment" : "bottom"    }  }}

### [#](https://developer.chrome.com/docs/extensions/mv3/themes/#colors) colors

Colors are in RGB format. To find the strings you can use within the "colors" field, see [`kOverwritableColorTable`](https://source.chromium.org/search/?q=file:chrome/browser/themes%20symbol:kOverwritableColorTable).

### [#](https://developer.chrome.com/docs/extensions/mv3/themes/#images) images

Image resources use paths relative to the root of the extension. You can override any of the images that are specified by the strings in [`kPersistingImages`](https://source.chromium.org/search/?q=file:chrome/browser/themes%20symbol:kPersistingImages$). All images must be stored in PNG format or they [will not render properly](https://bugs.chromium.org/p/chromium/issues/detail?id=1200459).

### [#](https://developer.chrome.com/docs/extensions/mv3/themes/#properties) properties

This field lets you specify properties such as background alignment, background repeat, and an alternate logo. To see the properties and the values they can have, see [`kDisplayProperties`](https://source.chromium.org/search/?q=file:chrome/browser/themes%20symbol:kDisplayProperties$).

### [#](https://developer.chrome.com/docs/extensions/mv3/themes/#tints) tints

You can specify tints to be applied to parts of the UI such as buttons, the frame, and the background tab. Google Chrome supports tints, not images, because images don't work across platforms and are brittle in the case of adding new buttons. To find the strings you can use within the "tints" field, see [`kTintTable`](https://source.chromium.org/search/?q=file:chrome/browser/themes%20symbol:kTintTable$).

Tints are in Hue-Saturation-Lightness (HSL) format, using floating-point numbers in the range 0 - 1.0:

*   **Hue** is an absolute value, with 0 and 1 being red.
*   **Saturation** is relative to the currently provided image. 0.5 is _no change_, 0 is _totally desaturated_, and 1 is _full saturation_.
*   **Lightness** is also relative, with 0.5 being _no change_, 0 as _all pixels black_, and 1 as _all pixels white_.

You can alternatively use `-1.0` for any of the HSL values to specify _no change_.

Updated on Thursday, July 14, 2022 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/themes/index.md)

