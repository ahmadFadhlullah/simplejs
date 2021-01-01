const app = require('../middleware/middle.js');
const baseController = require("../Controllers/baseController.js");
// Disini semua konfigurasi Routing
// initiate
const base = new baseController;

app.route('/').get(function(req,res){
	base.helloWorld(req,res);
});


module.exports = app;

