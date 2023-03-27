

*   [Homepage, search provider, and startup pages](https://developer.chrome.com/docs/extensions/mv3/settings_override/#others)
*   [Customizing values](https://developer.chrome.com/docs/extensions/mv3/settings_override/#customizing)
*   [Reference](https://developer.chrome.com/docs/extensions/mv3/settings_override/#reference)

Overriding Chrome settings
==========================

Published on Friday, February 14, 2014 • Updated on Thursday, December 1, 2022



*   [Homepage, search provider, and startup pages](https://developer.chrome.com/docs/extensions/mv3/settings_override/#others)
*   [Customizing values](https://developer.chrome.com/docs/extensions/mv3/settings_override/#customizing)
*   [Reference](https://developer.chrome.com/docs/extensions/mv3/settings_override/#reference)

Caution

This page was migrated directly from the Manifest V2 documentation set. It has not yet been validated for compliance with Manifest V3.

Settings overrides are a way for extensions to override selected Chrome settings. The API is available on Windows in all current versions of Chrome and is available on Mac in Chrome 56 and later.

[#](https://developer.chrome.com/docs/extensions/mv3/settings_override/#others) Homepage, search provider, and startup pages
----------------------------------------------------------------------------------------------------------------------------

Here is an example how [homepage](https://developer.chrome.com/docs/extensions/mv3/settings_override/#homepage), [search provider](https://developer.chrome.com/docs/extensions/mv3/settings_override/#search_provider), and [startup pages](https://developer.chrome.com/docs/extensions/mv3/settings_override/#startup_pages) can be modified in the [extension manifest](https://developer.chrome.com/docs/extensions/mv3/manifest/). Any domain used in the settings API must be [verified](https://support.google.com/webmasters/answer/35179) (via Google Search Console) by the same developer account publishing the extension. Note that if you verify ownership for a domain (for example, https://example.com) you can use any subdomain or page (for example, https://app.example.com or https://example.com/page.html) within your extension.

Starting in Chrome 107, if an extension only overrides the browser's search provider and provides no other capabilities, the post installation dialog box will not be shown.

    {  "name": "My extension",  ...  "chrome_settings_overrides": {    "homepage": "https://www.homepage.com",    "search_provider": {        "name": "name.__MSG_url_domain__",        "keyword": "keyword.__MSG_url_domain__",        "search_url": "https://www.foo.__MSG_url_domain__/s?q={searchTerms}",        "favicon_url": "https://www.foo.__MSG_url_domain__/favicon.ico",        "suggest_url": "https://www.foo.__MSG_url_domain__/suggest?q={searchTerms}",        "instant_url": "https://www.foo.__MSG_url_domain__/instant?q={searchTerms}",        "image_url": "https://www.foo.__MSG_url_domain__/image?q={searchTerms}",        "search_url_post_params": "search_lang=__MSG_url_domain__",        "suggest_url_post_params": "suggest_lang=__MSG_url_domain__",        "instant_url_post_params": "instant_lang=__MSG_url_domain__",        "image_url_post_params": "image_lang=__MSG_url_domain__",        "alternate_urls": [          "https://www.moo.__MSG_url_domain__/s?q={searchTerms}",          "https://www.noo.__MSG_url_domain__/s?q={searchTerms}"        ],        "encoding": "UTF-8",        "is_default": true    },    "startup_pages": ["https://www.startup.com"]   },   "default_locale": "de",   ...}

[#](https://developer.chrome.com/docs/extensions/mv3/settings_override/#customizing) Customizing values
-------------------------------------------------------------------------------------------------------

Values in the manifest can be customized in the following ways:

*   All values of the `search_provider`, `homepage`, and `startup_pages` properties can be localized using the [`chrome.i18n` API](https://developer.chrome.com/docs/extensions/reference/i18n/).
    
*   For [external extensions](https://developer.chrome.com/docs/extensions/mv3/external_extensions/), the `search_provider`, `homepage` and `startup_pages` URL values can be parametrized using a registry key. Create a new registry entry next to the `"update_url"` key (see instructions [here](https://developer.chrome.com/docs/extensions/mv3/external_extensions/#registry)). The key name is `"install_parameter"`, the value is an arbitrary string:
    
        {  "update_url": "https://clients2.google.com/service/update2/crx",  "install_parameter": "Value"}
    
    All occurrences of the substring `"__PARAM__"` in the manifest URLs will be substituted with the `"install_parameter"` value. If `"install_parameter"` is absent, occurrences of `"__PARAM__"` are removed. Note that `"__PARAM__"` cannot be part of the hostname. It needs to occur after the first '/' in the URL.
    

[#](https://developer.chrome.com/docs/extensions/mv3/settings_override/#reference) Reference
--------------------------------------------------------------------------------------------

An extension can override one or more of the following properties in the manifest:

*   **`homepage` (string)** - optional
    
    New value for the homepage.
    
*   **`search_provider` (object)** - optional
    
    A search engine
    
    Type
    
    Attribute
    
    Description
    
    string
    
    (optional) name
    
    Name of the search engine displayed to user. This may only be omitted if _prepopulated\_id_ is set.
    
    string
    
    (optional) keyword
    
    Omnibox keyword for the search engine. This may only be omitted if _prepopulated\_id_ is set.
    
    string
    
    (optional) favicon\_url
    
    An icon URL for the search engine. This may only be omitted if _prepopulated\_id_ is set.
    
    string
    
    search\_url
    
    A search URL used by the search engine.
    
    string
    
    (optional) encoding
    
    Encoding of the search term. This may only be omitted if _prepopulated\_id_ is set.
    
    string
    
    (optional) suggest\_url
    
    If omitted, this engine does not support suggestions.
    
    string
    
    (optional) image\_url
    
    If omitted, this engine does not support image search.
    
    string
    
    (optional) search\_url\_post\_params
    
    The string of post parameters to search\_url
    
    string
    
    (optional) suggest\_url\_post\_params
    
    The string of post parameters to suggest\_url
    
    string
    
    (optional) image\_url\_post\_params
    
    The string of post parameters to image\_url
    
    array of string
    
    (optional) alternate\_urls
    
    A list of URL patterns that can be used, in addition to _search\_url_.
    
    integer
    
    (optional) prepopulated\_id
    
    An ID of the built-in search engine in Chrome.
    
    boolean
    
    is\_default
    
    Specifies if the search provider should be default.
    
*   **`startup_pages` (array of string)** - optional
    

An array of length one containing a URL to be used as the startup page.

Updated on Thursday, December 1, 2022 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/settings_override/index.md)

