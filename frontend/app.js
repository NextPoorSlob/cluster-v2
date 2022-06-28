var express = require('express');
var app = express();
var stringReplace = require('string-replace-middleware');

var KC_URL = process.env.REACT_APP_KC_URL || "http://localhost:8080/auth";
var SERVICE_URL = process.env.REACT_APP_SERVICE_URL || "http://localhost:3000/secured";

console.log("KC_URL: " + KC_URL);
console.log("SERVICE_URL: " + SERVICE_URL);

app.use(stringReplace({
   'SERVICE_URL': SERVICE_URL,
   'KC_URL': KC_URL
}));
app.use(express.static('.'))

app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/client.js', function(req, res) {
    res.render('client.js');
});

app.listen(8000);
