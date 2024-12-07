let express = require('express');
let app = express();

function get(req, res) {
    res.sendFile(__dirname + '/views/index.html');
}

app.get('/', get);


































 module.exports = app;
