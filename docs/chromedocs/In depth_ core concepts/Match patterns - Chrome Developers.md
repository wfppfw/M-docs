

Match patterns
==============

Published on Tuesday, September 18, 2012 • Updated on Saturday, October 28, 2017

[Host permissions](https://developer.chrome.com/docs/extensions/mv3/declare_permissions#host-permissions) and [content script](https://developer.chrome.com/docs/extensions/mv3/content_scripts/) matching are based on a set of URLs defined by match patterns. A match pattern is essentially a URL that begins with a permitted scheme (`http`, `https`, `file`, or `ftp`, and that can contain '`*`' characters. The special pattern `<all_urls>` matches any URL that starts with a permitted scheme. Each match pattern has 3 parts:

*   _scheme_—for example, `http` or `file` or `*`
    
    Access to `file` URLs isn't automatic. The user must visit the extensions management page and opt in to `file` access for each extension that requests it.
    
*   _host_—for example, `www.google.com` or `*.google.com` or `*`; if the scheme is `file`, there is no _host_ part
    
*   _path_—for example, `/*`, `/foo*`, or `/foo/bar`. The path must be present in a host permission, but is always treated as `/*`.
    

Here's the basic syntax:

    <url-pattern> := <scheme>://<host><path><scheme> := '*' | 'http' | 'https' | 'file' | 'ftp' | 'urn'<host> := '*' | '*.' <any char except '/' and '*'>+<path> := '/' <any chars>

The meaning of '`*`' depends on whether it's in the _scheme_, _host_, or _path_ part. If the _scheme_ is `*`, then it matches either `http` or `https`, and **not** `file`, `ftp`, or `urn`. If the _host_ is just `*`, then it matches any host. If the _host_ is `*._hostname_`, then it matches the specified host or any of its subdomains. In the _path_ section, each '`*`' matches 0 or more characters. The following table shows some valid patterns.

Note: `urn` scheme is available since Chrome 91.

Pattern

What it does

Examples of matching URLs

`https://*/*`

Matches any URL that uses the `https` scheme

https://www.google.com/  
https://example.org/foo/bar.html

`https://*/foo*`

Matches any URL that uses the `https` scheme, on any host, as long as the path starts with `/foo`

https://example.com/foo/bar.html  
https://www.google.com/foo

`https://*.google.com/foo*bar`

Matches any URL that uses the `https` scheme, is on a google.com host (such as www.google.com, docs.google.com, or google.com), as long as the path starts with `/foo` and ends with `bar`

https://www.google.com/foo/baz/bar  
https://docs.google.com/foobar

`https://example.org/foo/bar.html`

Matches the specified URL

https://example.org/foo/bar.html

`file:///foo*`

Matches any local file whose path starts with `/foo`

file:///foo/bar.html  
file:///foo

`http://127.0.0.1/*`

Matches any URL that uses the `http` scheme and is on the host 127.0.0.1

http://127.0.0.1/  
http://127.0.0.1/foo/bar.html

`*://mail.google.com/*`

Matches any URL that starts with `http://mail.google.com` or `https://mail.google.com`.

http://mail.google.com/foo/baz/bar  
https://mail.google.com/foobar

`urn:*`

Matches any URL that starts with `urn:`.

urn:uuid:54723bea-c94e-480e-80c8-a69846c3f582  
urn:uuid:cfa40aff-07df-45b2-9f95-e023bcf4a6da

`<all_urls>`

Matches any URL that uses a permitted scheme. (See the beginning of this section for the list of permitted schemes.)

http://example.org/foo/bar.html  
file:///bar/baz.html

Here are some examples of _invalid_ pattern matches:

Bad pattern

Why it's bad

`https://www.google.com`

No _path_

`https://*foo/bar`

'\*' in the _host_ can be followed only by a '.' or '/'

`https://foo.*.bar/baz `

If '\*' is in the _host_, it must be the first character

`http:/bar`

Missing _scheme_ separator ("/" should be "//")

`foo://*`

Invalid _scheme_

Some schemes are not supported in all contexts.

Updated on Saturday, October 28, 2017 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/match_patterns/index.md)

