// the class for query database
const db = require('./db_conf.js');
class DB
{
    constructor(table)
    {
	this.table = table;
    }
    all(callback)
    {
       db.query(`SELECT * FROM ${this.table}`,function(error,result,field){
	  callback(error,result,field);
       });
    }
    custom(query_db,callback)
    {
       db.query(query_db,function(error,result,field){
           callback(error,result,field);
       });
    }

}

module.exports = DB;
