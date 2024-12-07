let express = require('express');
let app = express();

const absolutePath = __dirname + '/views/index.html';
const absolutePathStatic = __dirname + ''

app.use('/public', express.static(absolutePathStatic));

app.get('/', function(req, res) {
    res.sendFile(absolutePath);
});



































 module.exports = app;
