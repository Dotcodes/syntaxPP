# syntax++

A jquery plugin that hightlight the syntax like notepad++ editor for who those love Notepad++

## Getting Started

The syntax++ is very simple syntax high lighter to hightlight the syntax of html code only.

## Initialization

First adding the javascript and css file to your webpage
```html
<link rel="stylesheet" href="/path/to/styles/syntaxPP.css">
<script src="/path/to/syntaxPP.jquery.js"></script>
```
## How to
Place your code within the pre,code tags on your webpage.

```html
<pre><code>...</code></pre>
```
And place the javaascript codes within the sccript tags

```javascript
$(document).ready(function() {
  $('pre code').syntaxPP({filename:'index.html'});
  });
});
```

## How its Works

Using regularexpression it will find the syntax and add respective class to that file rest of works is done by css.
