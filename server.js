var express = require('express');
// var session = require('express-session');
var serverStatic = require('serve-static');
var app = express();
const port = 8080;

app.use(serverStatic(__dirname + '/public'));

app.listen(port, () => console.log(`Server listening on port ${port}!`))

