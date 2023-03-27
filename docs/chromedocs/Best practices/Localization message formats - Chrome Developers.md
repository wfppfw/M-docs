

*   [Field summary](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#overview)
*   [Example](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#example)
*   [Field details](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#field_details)
    *   [name](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#name)
    *   [message](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#message)
    *   [description](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#description)
    *   [placeholders](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#placeholders)

Localization message formats
============================

Published on Tuesday, September 18, 2012 • Updated on Thursday, May 22, 2014



*   [Field summary](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#overview)
*   [Example](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#example)
*   [Field details](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#field_details)
    *   [name](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#name)
    *   [message](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#message)
    *   [description](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#description)
    *   [placeholders](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#placeholders)

Each internationalized extension or app has at least one file named `messages.json` that provides locale-specific strings. This page describes the format of `messages.json` files. For information on how to internationalize and localize, see the [Internationalization](https://developer.chrome.com/docs/extensions/reference/i18n/) page.

[#](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#overview) Field summary
-------------------------------------------------------------------------------------------

The following code shows the supported fields for `messages.json`. Only the "_name_" and "message" fields are required.

    {  "name": {    "message": "Message text, with optional placeholders.",    "description": "Translator-aimed description of the message.",    "placeholders": {      "placeholder_name": {        "content": "A string to be placed within the message.",        "example": "Translator-aimed example of the placeholder string."      },      ...    }  },  ...}

[#](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#example) Example
------------------------------------------------------------------------------------

Here's a `messages.json` file that defines three messages named "prompt\_for\_name", "hello", and "bye":

    {  "prompt_for_name": {    "message": "What's your name?",    "description": "Ask for the user's name"  },  "hello": {    "message": "Hello, $USER$",    "description": "Greet the user",    "placeholders": {      "user": {        "content": "$1",        "example": "Cira"      }    }  },  "bye": {    "message": "Goodbye, $USER$. Come back to $OUR_SITE$ soon!",    "description": "Say goodbye to the user",    "placeholders": {      "our_site": {        "content": "Example.com",      },      "user": {        "content": "$1",        "example": "Cira"      }    }  }}

[#](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#field_details) Field details
------------------------------------------------------------------------------------------------

This section describes each field that can appear in a `messages.json` file. For details on how the messages file is used—for example, what happens when a locale doesn't define all the messages—see [Internationalization](https://developer.chrome.com/docs/extensions/reference/i18n/).

### [#](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#name) name

Actually, there's no field called "name". This field's name is the name of the message—the same _name_ that you see in `__MSG__name___` or `getMessage("_name_")`.

The name is a case-insensitive key that lets you retrieve the localized message text. The name can include the following characters:

*   A-Z
*   a-z
*   0-9
*   \_ (underscore)
*   @

**Note:** Don't define names that begin with "@@". Those names are reserved for [predefined messages](https://developer.chrome.com/docs/extensions/reference/i18n#overview-predefined).

Here are three examples of names, taken from the [Example](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#example) section:

    "prompt_for_name": {  ...},"hello": {  ...},"bye": {  ...}

For more examples of using names, see the [Internationalization](https://developer.chrome.com/docs/extensions/reference/i18n/) page.

### [#](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#message) message

The translated message, in the form of a string that can contain [placeholders](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#placeholders). Use `$_placeholder_name_$` (case insensitive) to refer to a particular placeholder. For example, you can refer to a placeholder named "our\_site" as `$our_site$`, `$OUR_SITE$`, or `$oUR_sITe$`.

Here are three examples of messages, taken from the [Example](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#example) section:

    "message": "What's your name?"..."message": "Hello, $USER$"..."message": "Goodbye, $USER$. Come back to $OUR_SITE$ soon!"

To put a dollar sign (`$`) into the string, use `$$`. For example, use the following code to specify the message **Amount (in $)**:

    "message": "Amount (in $$)"

Although placeholders such as `$USER$` are the preferred way of referring to _substitution strings_ (strings specified using the _substitutions_ parameter of [i18n.getMessage](https://developer.chrome.com/docs/extensions/reference/i18n#method-getMessage)) you can also refer to substitution strings directly within the message. For example, the following message refers to the first three substitution strings passed into `getMessage()`:

    "message": "Params: $1, $2, $3"

Despite that example, we recommend that you stick to using placeholders instead of `$_n_` strings within your messages. Think of placeholders as good variable names. A week after you write your code, you'll probably forget what `$1` refers to, but you'll know what your placeholders refer to. For more information on placeholders and substitution strings, see the [placeholders](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#placeholders) section.

### [#](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#description) description

_Optional._ A description of the message, intended to give context or details to help the translator make the best possible translation.

Here are three examples of descriptions, taken from the [Example](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#example) section:

    "description": "Ask for the user's name"..."description": "Greet the user"..."description": "Say goodbye to the user"

### [#](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#placeholders) placeholders

_Optional._ Defines one or more substrings to be used within the message. Here are two reasons you might want to use a placeholder:

*   To define the text for a part of your message that shouldn't be translated. Examples: HTML code, trademarked names, formatting specifiers.
*   To refer to a substitution string passed into `getMessage()`. Example: `$1`.

Each placeholder has a name, a "content" item, and an optional "example" item. A placeholder's name is case-insensitive and can contain the same characters as a [message name](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#name).

The "content" item's value is a string that can refer to substitution strings, which are specified using the [i18n.getMessage](https://developer.chrome.com/docs/extensions/reference/i18n#method-getMessage) method's _substitutions_ parameter. The value of a "content" item is typically something like "Example.com" or "$1". If you refer to a substitution string that doesn't exist, you get an empty string. The following table shows how `$_n_` strings correspond to strings specified by the _substitutions_ parameter.

_substitutions_ parameter

Value of $1

Value of $2

Value of $3

`userName`

value of `userName`

`""`

`""`

`["Cira", "Kathy"]`

`"Cira"`

`"Kathy"`

`""`

The "example" item (optional, but highly recommended) helps translators by showing how the content appears to the end user. For example, a placeholder for a dollar amount should have an example like `"$23.45"`.

The following snippet, taken from the [Example](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/#example) section, shows a "placeholders" item that contains two placeholders named "our\_site" and "user". The "our\_site" placeholder has no "example" item because its value is obvious from the "content" field.

    "placeholders": {  "our_site": {    "content": "Example.com",  },  "user": {    "content": "$1",    "example": "Cira"  }}

Updated on Thursday, May 22, 2014 • [Improve article](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/extensions/mv3/i18n-messages/index.md)

