var on = require('dom-event');
var appendCss = require('./');

document.querySelector('head').innerHTML = '<style id="demo">body{color:#356}</style>'

document.querySelector('body').innerHTML = '<h1>insert-css example</h1><button id="blue">blue</button><button id="red">red</button><div id="box"></div>';

on(document.querySelector('#blue'), 'click', function() {
  // document.getElementById('demo').remove()
  appendCss('body{background: #6495ED}');
});

on(document.querySelector('#red'), 'click', function() {
  appendCss('body{background: red}');
});
