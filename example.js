var on = require('dom-event')
var appendStyleCss = require('./')

document.querySelector('body').innerHTML =
  '<h1>insert-css example</h1><button id="blue">blue</button><button id="red">red</button><div id="box"></div>'

on(document.querySelector('#blue'), 'click', function () {
  appendStyleCss('body{background: #6495ED}')
})

on(document.querySelector('#red'), 'click', function () {
  appendStyleCss('body{background: red}')
})
