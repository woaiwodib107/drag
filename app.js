var express = require('express')
var app = express();
var http = require('http').Server(app);
app.use(express.static(__dirname));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
http.listen(8888, function() {
    console.log('listening on *:8888');
});