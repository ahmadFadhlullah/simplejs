const DB = require('../database/db_query.js');

class baseController
{

  helloWorld(req,res)
  {
     res.render("index");
  }


}

module.exports = baseController;
