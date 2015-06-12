module.exports = function(app){
	var users = require('./../server/controllers/users.js');
	app.post('/add', function(req, res){
		users.addUser(req, res);
	});
}