var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    if(req.url === '/') {
        // res.writeHead(200, { 'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/json') {
        res.writeHead(200, { 'Content-Type' : 'application/json'});
        var obj = {
            "firstname": "Harry",
            "lastname": "Potter"
        };
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(400);
        res.end();
    }
    
});

server.listen(1337, '127.0.0.1');
console.log("I'm listening to you @1337");
