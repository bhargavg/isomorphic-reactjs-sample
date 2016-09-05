var express = require('express');
var app = new express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function() {
  console.log("Started at localhost:3000");
});
