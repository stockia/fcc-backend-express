let express = require('express');
let app = express();
// let process = require('dotenv');

const absolutePath = __dirname + '/views/index.html';
const absolutePathStatic = __dirname + '/public';

app.use('/public', express.static(absolutePathStatic));

app.get('/', function(req, res) {
    res.sendFile(absolutePath);
});

app.get('/json', function(req, res) {
    let message = "Hello json";
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        message.toUpperCase()
    } 
    
    res.json({
        message: message
    });
})



































 module.exports = app;
