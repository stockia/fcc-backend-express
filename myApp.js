let express = require('express');
let app = express();

function get(req, res) {
    res.send('Hello Express');
}

app.get('/', get);


































 module.exports = app;
