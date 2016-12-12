# syntax++

A jquery plugin that hightlighta the syntax like notepad++ texteditor for those who love Notepad++

## Getting Started

The syntax++ is very simple syntax highlighter to hightlight the syntax of html code only.

## Initialization

First add the javascript and CSS file to your webpage
```html
<link rel="stylesheet" href="/path/to/styles/syntaxPP.css">
<script src="/path/to/syntaxPP.jquery.js"></script>
```
## How to
Place your code within the pre and code tags on your webpage.

```html
<pre><code>...</code></pre>
```
And place the javascript codes within the script tags

```javascript
$(document).ready(function() {
  $('pre code').syntaxPP({filename:'index.html'});
  });
});
```

## How its Works

Using regularexpression it will find the syntax and add respective classes to that file rest of work is done by css.
