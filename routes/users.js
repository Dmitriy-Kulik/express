let express = require('express');
let mysql = require('mysql');
let router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/* GET users listing. */
router.get('/', function(req, res, next) {
	let connection = mysql.createConnection({
	  	host     : 'localhost',
	  	user     : 'root',
	  	password : 'iddqd12345678',
	  	database: "finder"
	});

	connection.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
	});

	connection.query("SELECT * FROM users", function(err, rows, fields) {
  		if (err) throw err;
		rows.forEach(function(item, i, arr) {
			console.log(item);
		});
		res.render('users', { title: 'Users', message: rows});
	});

	connection.end();

});

module.exports = router;
