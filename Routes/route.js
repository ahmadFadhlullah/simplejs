const app = require('../middleware/middle.js');

// Disini semua konfigurasi Routing

app.route('/').get(function(req,res){
     res.send('Hello World !');
});


module.exports = app;

