import{_ as e,o,c as t,a as s}from"./app.f245760f.js";const q=JSON.parse('{"title":"Localization message formats","description":"","frontmatter":{},"headers":[{"level":2,"title":"# Field summary","slug":"field-summary","link":"#field-summary","children":[]},{"level":2,"title":"# Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"# Field details","slug":"field-details","link":"#field-details","children":[{"level":3,"title":"# name","slug":"name","link":"#name","children":[]},{"level":3,"title":"# message","slug":"message","link":"#message","children":[]},{"level":3,"title":"# description","slug":"description","link":"#description","children":[]},{"level":3,"title":"# placeholders","slug":"placeholders","link":"#placeholders","children":[]}]}],"relativePath":"chromedocs/Best practices/Localization message formats - Chrome Developers.md"}'),r={name:"chromedocs/Best practices/Localization message formats - Chrome Developers.md"},a=s(`<ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#overview" target="_blank" rel="noreferrer">Field summary</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#example" target="_blank" rel="noreferrer">Example</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#field_details" target="_blank" rel="noreferrer">Field details</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#name" target="_blank" rel="noreferrer">name</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#message" target="_blank" rel="noreferrer">message</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#description" target="_blank" rel="noreferrer">description</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#placeholders" target="_blank" rel="noreferrer">placeholders</a></li></ul></li></ul><h1 id="localization-message-formats" tabindex="-1">Localization message formats <a class="header-anchor" href="#localization-message-formats" aria-hidden="true">#</a></h1><p>Published on Tuesday, September 18, 2012 \u2022 Updated on Thursday, May 22, 2014</p><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#overview" target="_blank" rel="noreferrer">Field summary</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#example" target="_blank" rel="noreferrer">Example</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#field_details" target="_blank" rel="noreferrer">Field details</a><ul><li><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#name" target="_blank" rel="noreferrer">name</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#message" target="_blank" rel="noreferrer">message</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#description" target="_blank" rel="noreferrer">description</a></li><li><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#placeholders" target="_blank" rel="noreferrer">placeholders</a></li></ul></li></ul><p>Each internationalized extension or app has at least one file named <code>messages.json</code> that provides locale-specific strings. This page describes the format of <code>messages.json</code> files. For information on how to internationalize and localize, see the <a href="https://developer.chrome.com/docs/extensions/reference/i18n/" target="_blank" rel="noreferrer">Internationalization</a> page.</p><h2 id="field-summary" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#overview" target="_blank" rel="noreferrer">#</a> Field summary <a class="header-anchor" href="#field-summary" aria-hidden="true">#</a></h2><p>The following code shows the supported fields for <code>messages.json</code>. Only the &quot;<em>name</em>&quot; and &quot;message&quot; fields are required.</p><pre><code>{  &quot;name&quot;: {    &quot;message&quot;: &quot;Message text, with optional placeholders.&quot;,    &quot;description&quot;: &quot;Translator-aimed description of the message.&quot;,    &quot;placeholders&quot;: {      &quot;placeholder_name&quot;: {        &quot;content&quot;: &quot;A string to be placed within the message.&quot;,        &quot;example&quot;: &quot;Translator-aimed example of the placeholder string.&quot;      },      ...    }  },  ...}
</code></pre><h2 id="example" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#example" target="_blank" rel="noreferrer">#</a> Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><p>Here&#39;s a <code>messages.json</code> file that defines three messages named &quot;prompt_for_name&quot;, &quot;hello&quot;, and &quot;bye&quot;:</p><pre><code>{  &quot;prompt_for_name&quot;: {    &quot;message&quot;: &quot;What&#39;s your name?&quot;,    &quot;description&quot;: &quot;Ask for the user&#39;s name&quot;  },  &quot;hello&quot;: {    &quot;message&quot;: &quot;Hello, $USER$&quot;,    &quot;description&quot;: &quot;Greet the user&quot;,    &quot;placeholders&quot;: {      &quot;user&quot;: {        &quot;content&quot;: &quot;$1&quot;,        &quot;example&quot;: &quot;Cira&quot;      }    }  },  &quot;bye&quot;: {    &quot;message&quot;: &quot;Goodbye, $USER$. Come back to $OUR_SITE$ soon!&quot;,    &quot;description&quot;: &quot;Say goodbye to the user&quot;,    &quot;placeholders&quot;: {      &quot;our_site&quot;: {        &quot;content&quot;: &quot;Example.com&quot;,      },      &quot;user&quot;: {        &quot;content&quot;: &quot;$1&quot;,        &quot;example&quot;: &quot;Cira&quot;      }    }  }}
</code></pre><h2 id="field-details" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#field_details" target="_blank" rel="noreferrer">#</a> Field details <a class="header-anchor" href="#field-details" aria-hidden="true">#</a></h2><p>This section describes each field that can appear in a <code>messages.json</code> file. For details on how the messages file is used\u2014for example, what happens when a locale doesn&#39;t define all the messages\u2014see <a href="https://developer.chrome.com/docs/extensions/reference/i18n/" target="_blank" rel="noreferrer">Internationalization</a>.</p><h3 id="name" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#name" target="_blank" rel="noreferrer">#</a> name <a class="header-anchor" href="#name" aria-hidden="true">#</a></h3><p>Actually, there&#39;s no field called &quot;name&quot;. This field&#39;s name is the name of the message\u2014the same <em>name</em> that you see in <code>__MSG__name___</code> or <code>getMessage(&quot;_name_&quot;)</code>.</p><p>The name is a case-insensitive key that lets you retrieve the localized message text. The name can include the following characters:</p><ul><li>A-Z</li><li>a-z</li><li>0-9</li><li>_ (underscore)</li><li>@</li></ul><p><strong>Note:</strong> Don&#39;t define names that begin with &quot;@@&quot;. Those names are reserved for <a href="https://developer.chrome.com/docs/extensions/reference/i18n#overview-predefined" target="_blank" rel="noreferrer">predefined messages</a>.</p><p>Here are three examples of names, taken from the <a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#example" target="_blank" rel="noreferrer">Example</a> section:</p><pre><code>&quot;prompt_for_name&quot;: {  ...},&quot;hello&quot;: {  ...},&quot;bye&quot;: {  ...}
</code></pre><p>For more examples of using names, see the <a href="https://developer.chrome.com/docs/extensions/reference/i18n/" target="_blank" rel="noreferrer">Internationalization</a> page.</p><h3 id="message" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#message" target="_blank" rel="noreferrer">#</a> message <a class="header-anchor" href="#message" aria-hidden="true">#</a></h3><p>The translated message, in the form of a string that can contain <a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#placeholders" target="_blank" rel="noreferrer">placeholders</a>. Use <code>$_placeholder_name_$</code> (case insensitive) to refer to a particular placeholder. For example, you can refer to a placeholder named &quot;our_site&quot; as <code>$our_site$</code>, <code>$OUR_SITE$</code>, or <code>$oUR_sITe$</code>.</p><p>Here are three examples of messages, taken from the <a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#example" target="_blank" rel="noreferrer">Example</a> section:</p><pre><code>&quot;message&quot;: &quot;What&#39;s your name?&quot;...&quot;message&quot;: &quot;Hello, $USER$&quot;...&quot;message&quot;: &quot;Goodbye, $USER$. Come back to $OUR_SITE$ soon!&quot;
</code></pre><p>To put a dollar sign (<code>$</code>) into the string, use <code>$$</code>. For example, use the following code to specify the message <strong>Amount (in $)</strong>:</p><pre><code>&quot;message&quot;: &quot;Amount (in $$)&quot;
</code></pre><p>Although placeholders such as <code>$USER$</code> are the preferred way of referring to <em>substitution strings</em> (strings specified using the <em>substitutions</em> parameter of <a href="https://developer.chrome.com/docs/extensions/reference/i18n#method-getMessage" target="_blank" rel="noreferrer">i18n.getMessage</a>) you can also refer to substitution strings directly within the message. For example, the following message refers to the first three substitution strings passed into <code>getMessage()</code>:</p><pre><code>&quot;message&quot;: &quot;Params: $1, $2, $3&quot;
</code></pre><p>Despite that example, we recommend that you stick to using placeholders instead of <code>$_n_</code> strings within your messages. Think of placeholders as good variable names. A week after you write your code, you&#39;ll probably forget what <code>$1</code> refers to, but you&#39;ll know what your placeholders refer to. For more information on placeholders and substitution strings, see the <a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#placeholders" target="_blank" rel="noreferrer">placeholders</a> section.</p><h3 id="description" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#description" target="_blank" rel="noreferrer">#</a> description <a class="header-anchor" href="#description" aria-hidden="true">#</a></h3><p><em>Optional.</em> A description of the message, intended to give context or details to help the translator make the best possible translation.</p><p>Here are three examples of descriptions, taken from the <a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#example" target="_blank" rel="noreferrer">Example</a> section:</p><pre><code>&quot;description&quot;: &quot;Ask for the user&#39;s name&quot;...&quot;description&quot;: &quot;Greet the user&quot;...&quot;description&quot;: &quot;Say goodbye to the user&quot;
</code></pre><h3 id="placeholders" tabindex="-1"><a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#placeholders" target="_blank" rel="noreferrer">#</a> placeholders <a class="header-anchor" href="#placeholders" aria-hidden="true">#</a></h3><p><em>Optional.</em> Defines one or more substrings to be used within the message. Here are two reasons you might want to use a placeholder:</p><ul><li>To define the text for a part of your message that shouldn&#39;t be translated. Examples: HTML code, trademarked names, formatting specifiers.</li><li>To refer to a substitution string passed into <code>getMessage()</code>. Example: <code>$1</code>.</li></ul><p>Each placeholder has a name, a &quot;content&quot; item, and an optional &quot;example&quot; item. A placeholder&#39;s name is case-insensitive and can contain the same characters as a <a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#name" target="_blank" rel="noreferrer">message name</a>.</p><p>The &quot;content&quot; item&#39;s value is a string that can refer to substitution strings, which are specified using the <a href="https://developer.chrome.com/docs/extensions/reference/i18n#method-getMessage" target="_blank" rel="noreferrer">i18n.getMessage</a> method&#39;s <em>substitutions</em> parameter. The value of a &quot;content&quot; item is typically something like &quot;<a href="http://Example.com" target="_blank" rel="noreferrer">Example.com</a>&quot; or &quot;$1&quot;. If you refer to a substitution string that doesn&#39;t exist, you get an empty string. The following table shows how <code>$_n_</code> strings correspond to strings specified by the <em>substitutions</em> parameter.</p><p><em>substitutions</em> parameter</p><p>Value of $1</p><p>Value of $2</p><p>Value of $3</p><p><code>userName</code></p><p>value of <code>userName</code></p><p><code>&quot;&quot;</code></p><p><code>&quot;&quot;</code></p><p><code>[&quot;Cira&quot;, &quot;Kathy&quot;]</code></p><p><code>&quot;Cira&quot;</code></p><p><code>&quot;Kathy&quot;</code></p><p><code>&quot;&quot;</code></p><p>The &quot;example&quot; item (optional, but highly recommended) helps translators by showing how the content appears to the end user. For example, a placeholder for a dollar amount should have an example like <code>&quot;$23.45&quot;</code>.</p><p>The following snippet, taken from the <a href="https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#example" target="_blank" rel="noreferrer">Example</a> section, shows a &quot;placeholders&quot; item that contains two placeholders named &quot;our_site&quot; and &quot;user&quot;. The &quot;our_site&quot; placeholder has no &quot;example&quot; item because its value is obvious from the &quot;content&quot; field.</p><pre><code>&quot;placeholders&quot;: {  &quot;our_site&quot;: {    &quot;content&quot;: &quot;Example.com&quot;,  },  &quot;user&quot;: {    &quot;content&quot;: &quot;$1&quot;,    &quot;example&quot;: &quot;Cira&quot;  }}
</code></pre><p>Updated on Thursday, May 22, 2014 \u2022 <a href="https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/i18n-messages/index.md" target="_blank" rel="noreferrer">Improve article</a></p>`,55),n=[a];function i(l,d,m,c,h,u){return o(),t("div",null,n)}const f=e(r,[["render",i]]);export{q as __pageData,f as default};