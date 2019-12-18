global.fetch = require('jest-fetch-mock');
global.handlebars = require('handlebars');

const bodyHtml =
'<script id="template" type="text/x-handlebars-template"><div id="error">{{ error }}</div><div id="city">{{ city }}</div><div id="temp">{{ temp }}</div><div id="weath">{{ desc }}</div><div id="press">{{ press }}</div><div id="wind">{{wind}}</div><div id="clouds">{{clouds}}</div></script>'+
'<div id="info"></div>';

Object.defineProperty(document, 'currentScript', {
    value: document.createElement('script'),
});
document.body.innerHTML = bodyHtml;

exports.bodyHtml = bodyHtml;
