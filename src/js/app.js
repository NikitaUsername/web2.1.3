var express = require('express') ;
var path = require('path');
var app = express();


app.use(express.static(path.join(__dirname, '../')));

app.get('/', function(req, res) {
    return res.sendFile(path.resolve(__dirname, '../' + 'index.html')) ;
 });
 //app.get('/tests', function(req, res ){
 //   return res.sendFile(path.resolve(__dirname, './tests/'+ 'tests.html'));
// });
 app.listen(5000);