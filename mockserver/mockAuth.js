var express = require('express')
var app = express();

// enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// test url
app.get('/', function(req, res) {
    res.send('Mock APIs are running');
});

// mock server - Username Validator 
// https://www.joshmorony.com/advanced-forms-validation-in-ionic-2
app.get('/auth/validate-username/:username', function(req, res) {
    console.log('validate-username was called')
    console.log('url: ' + req.url)
    console.log('params: ' + JSON.stringify(req.params))
    console.log('body: ' + JSON.stringify(req.body))

    if (req.params.username == "greg")
        res.status(401).send('{"ok": false}')
    else
        res.status(200).send('{"ok": true}')
});

var port = 4567;
app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});