import{_ as o,o as t,c as e,a as n}from"./app.04ed3e28.js";const _=JSON.parse('{"title":"Manifest file format","description":"","frontmatter":{},"headers":[{"level":2,"title":"# Field summary","slug":"field-summary","link":"#field-summary","children":[]}],"relativePath":"chromedocs/Develop extensions and themes/Manifest file format - Chrome Developers.md","lastUpdated":1679926139000}'),u={name:"chromedocs/Develop extensions and themes/Manifest file format - Chrome Developers.md"},a=n(`<ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/manifest/#overview" target="_blank" rel="noreferrer">Field summary</a></li></ul><h1 id="manifest-file-format" tabindex="-1">Manifest file format <a class="header-anchor" href="#manifest-file-format" aria-hidden="true">#</a></h1><p>Published on Tuesday, September 18, 2012 \u2022 Updated on Friday, October 8, 2021</p><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/manifest/#overview" target="_blank" rel="noreferrer">Field summary</a></li></ul><p>Every extension has a <a href="https://www.json.org/" target="_blank" rel="noreferrer">JSON</a>-formatted manifest file, named <code>manifest.json</code>, that provides important information.</p><h2 id="field-summary" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/manifest/#overview" target="_blank" rel="noreferrer">#</a> Field summary <a class="header-anchor" href="#field-summary" aria-hidden="true">#</a></h2><p>The following code shows the supported manifest fields for Extensions, with links to the page that discusses each field.</p><pre><code>{
  // Required
  &quot;manifest_version&quot;: 3,
  &quot;name&quot;: &quot;My Extension&quot;,
  &quot;version&quot;: &quot;versionString&quot;,

  // Recommended
  &quot;action&quot;: {...},
  &quot;default_locale&quot;: &quot;en&quot;,
  &quot;description&quot;: &quot;A plain text description&quot;,
  &quot;icons&quot;: {...},

  // Optional
  &quot;author&quot;: ...,
  &quot;automation&quot;: ...,
  &quot;background&quot;: {
    // Required
    &quot;service_worker&quot;: &quot;background.js&quot;,
    // Optional
    &quot;type&quot;: ...
  },
  &quot;chrome_settings_overrides&quot;: {...},
  &quot;chrome_url_overrides&quot;: {...},
  &quot;commands&quot;: {...},
  &quot;content_capabilities&quot;: ...,
  &quot;content_scripts&quot;: [{...}],
  &quot;content_security_policy&quot;: {...},
  &quot;converted_from_user_script&quot;: ...,
  &quot;cross_origin_embedder_policy&quot;: {&quot;value&quot;: &quot;require-corp&quot;},
  &quot;cross_origin_opener_policy&quot;: {&quot;value&quot;: &quot;same-origin&quot;},
  &quot;current_locale&quot;: ...,
  &quot;declarative_net_request&quot;: ...,
  &quot;devtools_page&quot;: &quot;devtools.html&quot;,
  &quot;differential_fingerprint&quot;: ...,
  &quot;event_rules&quot;: [{...}],
  &quot;externally_connectable&quot;: {
    &quot;matches&quot;: [&quot;*://*.example.com/*&quot;]
  },
  &quot;file_browser_handlers&quot;: [...],
  &quot;file_system_provider_capabilities&quot;: {
    &quot;configurable&quot;: true,
    &quot;multiple_mounts&quot;: true,
    &quot;source&quot;: &quot;network&quot;
  },
  &quot;homepage_url&quot;: &quot;https://path/to/homepage&quot;,
  &quot;host_permissions&quot;: [...],
  &quot;import&quot;: [{&quot;id&quot;: &quot;aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&quot;}],
  &quot;incognito&quot;: &quot;spanning, split, or not_allowed&quot;,
  &quot;input_components&quot;: ...,
  &quot;key&quot;: &quot;publicKey&quot;,
  &quot;minimum_chrome_version&quot;: &quot;versionString&quot;,
  &quot;nacl_modules&quot;: [...],
  &quot;natively_connectable&quot;: ...,
  &quot;oauth2&quot;: ...,
  &quot;offline_enabled&quot;: true,
  &quot;omnibox&quot;: {
    &quot;keyword&quot;: &quot;aString&quot;
  },
  &quot;optional_host_permissions&quot;: [&quot;...&quot;],
  &quot;optional_permissions&quot;: [&quot;tabs&quot;],
  &quot;options_page&quot;: &quot;options.html&quot;,
  &quot;options_ui&quot;: {
    &quot;page&quot;: &quot;options.html&quot;
  },
  &quot;permissions&quot;: [&quot;tabs&quot;],
  &quot;platforms&quot;: ...,
  &quot;replacement_web_app&quot;: ...,
  &quot;requirements&quot;: {...},
  &quot;sandbox&quot;: [...],
  &quot;short_name&quot;: &quot;Short Name&quot;,
  &quot;storage&quot;: {
    &quot;managed_schema&quot;: &quot;schema.json&quot;
  },
  &quot;system_indicator&quot;: ...,
  &quot;tts_engine&quot;: {...},
  &quot;update_url&quot;: &quot;https://path/to/updateInfo.xml&quot;,
  &quot;version_name&quot;: &quot;aString&quot;,
  &quot;web_accessible_resources&quot;: [...]
}
</code></pre><p>Updated on Friday, October 8, 2021 \u2022 <a href="https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/manifest/index.md" target="_blank" rel="noreferrer">Improve article</a></p>`,9),r=[a];function q(s,i,l,m,c,d){return t(),e("div",null,r)}const h=o(u,[["render",q]]);export{_ as __pageData,h as default};
