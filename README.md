# appendStyleCss

insert a string of css into the `<head>` or custom element

# example

``` js
    var appendStyleCss = require('append-style-css');
    var styleElement = appendStyleCss('body { background:blue; }');
```

# api

``` js
    var appendStyleCss = require('append-style-css');
```

## var styleElement = appendStyleCss(css, opts);

Insert some CSS into the page.

* `opts.container` - Which HTMLElement to use as the base mounting point, defaults to
`document.querySelector('head')`.

* `opts.prepend` - Add the CSS at the top level of the container instead of at the bottom level (default).

Sometimes you may want to put the default CSS in front of you so that it can be easily overridden by user styles

* `opts.id` - Set the attribute of id for container

* `opts.isClear` - Whether to clear the added css string

# development

## example

``` sh
npm run example
```
