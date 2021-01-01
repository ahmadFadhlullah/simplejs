const express = require('express');
const app = express();

app.set('views','./Views');
app.set('view engine','pug');

app.use('/public',express.static('public'));

module.exports = app;
