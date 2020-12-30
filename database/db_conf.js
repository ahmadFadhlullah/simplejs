// Konfigurasi dasar database
// module mysql
const mysql = require('mysql');
// untuk koneksi database
const db = mysql.createConnection({
	   host : "localhost",
	   user : "root",
	   password : "",
	   database : ""
	});

module.exports = db;
