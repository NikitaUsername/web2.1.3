var express = require('express') ;
var path = require('path');
var app = express();


app.use(express.static(path.join(__dirname, '../')));

app.get('/', function(req, res) {
    return res.sendFile(path.resolve(__dirname, '../' + 'index.html')) ;
 });
 app.listen(5000);