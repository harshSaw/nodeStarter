var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.send('<html><head><link href="/assets/styles.css" rel="stylesheet"/></head><body><h1>All aboard the Hogwarts Express</h1></body></html>')
});

app.get('/api', function(req, res){
    res.json({ firstname : 'Harry', lastname : 'Potter' });
});

app.get('/harry/:id', function(req, res){
    res.send(`<html><head></head><body><h1>Your Gringotts account number is ${req.params.id}</h1></body></html>`)
});

app.listen(port, '127.0.0.1');
