import{_ as e,o,c as r,a as s}from"./app.8d96fb22.js";const h=JSON.parse('{"title":"Cross-origin isolation","description":"","frontmatter":{},"headers":[],"relativePath":"chromedocs/In depth_ core concepts/Cross-origin isolation - Chrome Developers.md","lastUpdated":1679926139000}'),i={name:"chromedocs/In depth_ core concepts/Cross-origin isolation - Chrome Developers.md"},t=s(`<h1 id="cross-origin-isolation" tabindex="-1">Cross-origin isolation <a class="header-anchor" href="#cross-origin-isolation" aria-hidden="true">#</a></h1><p>Published on Tuesday, August 3, 2021 \u2022 Updated on Wednesday, November 10, 2021</p><p><a href="https://web.dev/cross-origin-isolation-guide/" target="_blank" rel="noreferrer">Cross-origin isolation</a> enables a web page to use powerful features such as <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer" target="_blank" rel="noreferrer"><code>SharedArrayBuffer</code></a>. An extension can opt into cross-origin isolation by specifying the appropriate values for the <a href="https://developer.chrome.com/docs/extensions/mv3/manifest/cross_origin_embedder_policy/" target="_blank" rel="noreferrer"><code>cross_origin_embedder_policy</code></a> and <a href="https://developer.chrome.com/docs/extensions/mv3/manifest/cross_origin_opener_policy/" target="_blank" rel="noreferrer"><code>cross_origin_opener_policy</code></a> manifest keys. For example, a manifest like the one below will opt the extension&#39;s origin into cross-origin isolation.</p><pre><code>{  &quot;name&quot;: &quot;CrossOriginIsolation example&quot;,  &quot;manifest_version&quot;: 3,  &quot;version&quot;: &quot;1.1&quot;,  &quot;cross_origin_embedder_policy&quot;: {    &quot;value&quot;: &quot;require-corp&quot;  },  &quot;cross_origin_opener_policy&quot;: {    &quot;value&quot;: &quot;same-origin&quot;  },  ...}
</code></pre><p>Opting into cross-origin isolation allows the extension to use powerful APIs like SharedArrayBuffers in its cross-origin isolated contexts. However, it does also come with certain side-effects. See <a href="https://web.dev/coop-coep/" target="_blank" rel="noreferrer">Making your website &quot;cross-origin isolated&quot; using COOP and COEP</a> for more information on this.</p><p>Caution</p><p>Even if an extension opts into cross-origin isolation, not all extension contexts will be cross-origin isolated. For example, cross-origin isolation <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=1131404" target="_blank" rel="noreferrer">is not fully implemented</a>) for service and shared workers currently. Similarly, a cross-origin isolated extension&#39;s web-accessible subframe on a regular web page is not considered cross-origin isolated currently.</p><p>Updated on Wednesday, November 10, 2021 \u2022 <a href="https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/cross-origin-isolation/index.md" target="_blank" rel="noreferrer">Improve article</a></p>`,8),n=[t];function a(c,l,d,p,u,_){return o(),r("div",null,n)}const g=e(i,[["render",a]]);export{h as __pageData,g as default};
