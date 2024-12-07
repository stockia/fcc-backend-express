let express = require('express');
let app = express();

const absolutePath = __dirname + '/views/index.html';
const absolutePathStatic = __dirname + '/public';

app.use('/public', express.static(absolutePathStatic));

app.get('/', function(req, res) {
    res.sendFile(absolutePath);
});

app.get('/json', function(req, res) {
    res.json({
        message: 'Hello json'
    });
})



































 module.exports = app;
