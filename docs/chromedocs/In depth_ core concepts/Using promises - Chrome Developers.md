

*   [Introduction](https://developer.chrome.com/docs/extensions/mv3/promises/#introduction)
*   [Can I use promises?](https://developer.chrome.com/docs/extensions/mv3/promises/#can-i-use-promises)
*   [How to use promises](https://developer.chrome.com/docs/extensions/mv3/promises/#how-to-use-promises)
    *   [Converting a callback to a promise](https://developer.chrome.com/docs/extensions/mv3/promises/#compare-to-callback)
    *   [Error handling](https://developer.chrome.com/docs/extensions/mv3/promises/#error-handling)
    *   [Using async/await](https://developer.chrome.com/docs/extensions/mv3/promises/#using-asyncawait)

Using promises
==============

Published on Friday, March 26, 2021



*   [Introduction](https://developer.chrome.com/docs/extensions/mv3/promises/#introduction)
*   [Can I use promises?](https://developer.chrome.com/docs/extensions/mv3/promises/#can-i-use-promises)
*   [How to use promises](https://developer.chrome.com/docs/extensions/mv3/promises/#how-to-use-promises)
    *   [Converting a callback to a promise](https://developer.chrome.com/docs/extensions/mv3/promises/#compare-to-callback)
    *   [Error handling](https://developer.chrome.com/docs/extensions/mv3/promises/#error-handling)
    *   [Using async/await](https://developer.chrome.com/docs/extensions/mv3/promises/#using-asyncawait)

With the introduction of Manifest V3, many extension API methods now return promises. This document explains how to use promises.

Key Term

A _promise_ is a JavaScript object that represents the eventual outcome of an asynchronous operation. For more about promises and their use, see the MDN documentation on [using promises](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Using_promises).

[#](https://developer.chrome.com/docs/extensions/mv3/promises/#introduction) Introduction
-----------------------------------------------------------------------------------------

Promises were introduced into Chrome not long after they were included in the ES6 specification. They are an important feature of modern JavaScript, providing benefits such as:

*   Streamlined error handling
*   Coding in a synchronous style for invoking asynchronous functions
*   A simple "fork and join" syntax for invoking concurrent functions

In Manifest V2 extension developers could use libraries to "promisify" Chrome's extensions APIs. With the introduction of Manifest V3 many of Chrome's extensions APIs now return promises. The Chrome team is also progressively adding promise support to additional APIs.

Gotchas

Promises are not returned by extension APIs under Manifest V2, and are not yet available on all methods in Manifest V3.

Promises can and should be used in many circumstances. However, there are times (for example, event listeners) when a promise won't work and a callback is more appropriate. Methods that support promises also support callbacks to provide backwards compatibility.

[#](https://developer.chrome.com/docs/extensions/mv3/promises/#can-i-use-promises) Can I use promises?
------------------------------------------------------------------------------------------------------

You can and should use promises in your extension code, where a promise is available and appropriate to the use case.

Not all methods in extensions APIs support promises. Sometimes that's because we haven't added promise support on the method yet; in many cases it's because using a promise isn't feasible for the method.

You can check whether a method supports promises by checking its API reference page:

![captureVisibleTab is a method that supports promises as demonstrated in the API reference](./Using promises - Chrome Developers_files/AYQVtnh19vNMHoXzxZB1.png)

The example method, `captureVisibleTab()`, can be found in the [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/tabs/#methods) API. This method supports promises because one of the method's signatures returns a promise. To make this easier to see at a glance, the reference docs also display a `Promise` pill below the signatures.

[#](https://developer.chrome.com/docs/extensions/mv3/promises/#how-to-use-promises) How to use promises
-------------------------------------------------------------------------------------------------------

There are many places where using promises will result in cleaner, easier-to-maintain code. You should consider using promises in situations such as the following:

*   Any time that you want to clean up your code by using a more "synchronous" invocation style.
*   Where error handling would be too difficult using callbacks.
*   When you want a more condensed way to invoke several concurrent methods and gather the results into a single thread of code.

### [#](https://developer.chrome.com/docs/extensions/mv3/promises/#compare-to-callback) Converting a callback to a promise

One way to understand how you can use promises in extensions APIs is to compare two equivalent code fragments, one using a callback and one using a promise. The following example shows this comparison:

#### [#](https://developer.chrome.com/docs/extensions/mv3/promises/#standard-callback-implementation) Standard callback implementation

    function openTabOnRight(onComplete) {  chrome.tabs.query(queryOptions, function(tabs) {    if (chrome.runtime.lastError) {      onComplete({error: chrome.runtime.lastError});      return;    }    if (!tabs.length) {      onComplete();      return;    };    chrome.tabs.create({      url: 'https://example.com',      index: tab[0].index + 1,    }, function(tab) {      if (chrome.runtime.lastError) {        onComplete({error: chrome.runtime.lastError});      }      console.log('tab created', tab);      onComplete(tab);    });  });}

#### [#](https://developer.chrome.com/docs/extensions/mv3/promises/#promise-implementation) Promise implementation

    // This sample does not have explicit error handlers because errors// are automatically propagated down the promise chain.function openTabOnRight() {  return chrome.tabs.query(queryOptions)    .then((tabs) => {      if (!tabs.length) return;      return chrome.tabs.create({        url: 'https://example.com',        index: tab[0].index + 1,      });    })    .then(tab => {      if (!tab) return;      console.log('tab created', tab);      return tab;    });}

### [#](https://developer.chrome.com/docs/extensions/mv3/promises/#error-handling) Error handling

Returning errors works differently depending on whether the extension is using a callback or a promise.

#### [#](https://developer.chrome.com/docs/extensions/mv3/promises/#error-handling-with-callbacks) Error handling with callbacks

If using a callback, then `chrome.runtime.lastError` is set for the duration of the execution of the callback. It is not thrown as a JS Error (which would interrupt JS execution), and is not set outside the duration of the callback run (which would result in it being "randomly" set during other execution). The extension would look at the last error like this:

    chrome.tabs.create({...}, (result) => {  if (chrome.runtime.lastError) {    // Handle last error  }});

#### [#](https://developer.chrome.com/docs/extensions/mv3/promises/#error-handling-with-promises) Error handling with promises

Promises are designed to deliver asynchronous results, both success and failure. A failure in a promise (a promise rejection) is handled differently. It might look like this:

    chrome.tabs.create({...})  .then((result) => {    // success case  })  .catch((error) => {    // failure case  });

Extensions APIs don't set `chrome.runtime.lastError` when you use a promise; instead they provide the error as an argument to the function in the `.catch()`.

In simpler cases with a single promise, you can instead supply your error handler as the second parameter to `.then()` instead of chaining to a `.catch()`. For more about this topic, see this [MDN article on chained promises](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises).

Whether you receive the error using `.catch()` or the optional second parameter of `.then()`, this form of error handling helps you write async logic in a more synchronous style.

### [#](https://developer.chrome.com/docs/extensions/mv3/promises/#using-asyncawait) Using async/await

JavaScript also provides async/await as syntactic sugar on top of promises, letting you code in a more imperative style. The following example shows how to implement the [example shown earlier](https://developer.chrome.com/docs/extensions/mv3/promises/#compare-to-callback) using async/await:

    // Async/await implementationasync function openTabOnRight() {  // When not wrapped in try/catch, errors thrown in an async  // function will propagate down the promise chain  let tabs = await chrome.tabs.query(queryOptions);  if (!tabs.length) return;  let tab = await chrome.tabs.create({    url: 'https://example.com',    index: tab[0].index + 1,  });  if (!tab) return;  console.log('tab created', tab);  return tab;}

Note that `await` is only valid in async functions and the top-level bodies of modules. You can load your background service worker as a module by setting `"type": "module"` in the "background" key of your extension's [manifest](https://developer.chrome.com/docs/extensions/mv3/manifest/).

Updated on Friday, March 26, 2021 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/promises/index.md)

