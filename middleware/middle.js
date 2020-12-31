const app = require('../Routes/app.js');

app.use('/',function(req,res,next){
    next();
});

module.exports = app;
