

*   [Field summary](https://developer.chrome.com/docs/extensions/mv3/manifest/#overview)

Manifest file format
====================

Published on Tuesday, September 18, 2012 • Updated on Friday, October 8, 2021



*   [Field summary](https://developer.chrome.com/docs/extensions/mv3/manifest/#overview)

Every extension has a [JSON](https://www.json.org/)\-formatted manifest file, named `manifest.json`, that provides important information.

[#](https://developer.chrome.com/docs/extensions/mv3/manifest/#overview) Field summary
--------------------------------------------------------------------------------------

The following code shows the supported manifest fields for Extensions, with links to the page that discusses each field.

    {
      // Required
      "manifest_version": 3,
      "name": "My Extension",
      "version": "versionString",
    
      // Recommended
      "action": {...},
      "default_locale": "en",
      "description": "A plain text description",
      "icons": {...},
    
      // Optional
      "author": ...,
      "automation": ...,
      "background": {
        // Required
        "service_worker": "background.js",
        // Optional
        "type": ...
      },
      "chrome_settings_overrides": {...},
      "chrome_url_overrides": {...},
      "commands": {...},
      "content_capabilities": ...,
      "content_scripts": [{...}],
      "content_security_policy": {...},
      "converted_from_user_script": ...,
      "cross_origin_embedder_policy": {"value": "require-corp"},
      "cross_origin_opener_policy": {"value": "same-origin"},
      "current_locale": ...,
      "declarative_net_request": ...,
      "devtools_page": "devtools.html",
      "differential_fingerprint": ...,
      "event_rules": [{...}],
      "externally_connectable": {
        "matches": ["*://*.example.com/*"]
      },
      "file_browser_handlers": [...],
      "file_system_provider_capabilities": {
        "configurable": true,
        "multiple_mounts": true,
        "source": "network"
      },
      "homepage_url": "https://path/to/homepage",
      "host_permissions": [...],
      "import": [{"id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}],
      "incognito": "spanning, split, or not_allowed",
      "input_components": ...,
      "key": "publicKey",
      "minimum_chrome_version": "versionString",
      "nacl_modules": [...],
      "natively_connectable": ...,
      "oauth2": ...,
      "offline_enabled": true,
      "omnibox": {
        "keyword": "aString"
      },
      "optional_host_permissions": ["..."],
      "optional_permissions": ["tabs"],
      "options_page": "options.html",
      "options_ui": {
        "page": "options.html"
      },
      "permissions": ["tabs"],
      "platforms": ...,
      "replacement_web_app": ...,
      "requirements": {...},
      "sandbox": [...],
      "short_name": "Short Name",
      "storage": {
        "managed_schema": "schema.json"
      },
      "system_indicator": ...,
      "tts_engine": {...},
      "update_url": "https://path/to/updateInfo.xml",
      "version_name": "aString",
      "web_accessible_resources": [...]
    }

Updated on Friday, October 8, 2021 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/manifest/index.md)

