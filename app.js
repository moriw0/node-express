var path = require('path');
var http = require('http');
var express = require('express');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get("/", (req, res, next) => {
  return res.render('index', {title: 'ウンコまん'});
});

app.get("/hoge", (req, res, next) => {
  return res.send('Hoge');
});

var server = http.createServer(app);
server.listen('3000');
