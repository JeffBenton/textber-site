var mongoose = require('mongoose');
var User = mongoose.model('User');
var validate = require('validate.js');
var moment = require('moment');
module.exports = (function() {
	return {
		addUser: function(req, res){
			var contraints = {
				first_name: {
					presence: true
				},
				last_name: {
					presence: true
				},
				email: {
					presence: true,
					email: true
				}
			}
			var errors = validate(req.body, contraints);
			if(errors !== undefined) {
				errors.errors = true;
				res.json(errors);
			}
			else{
				var temp = req.body;
				temp.created_at = moment().format();
				temp.first_name = temp.first_name[0].toUpperCase() + temp.first_name.substr(1);
				temp.last_name = temp.last_name[0].toUpperCase() + temp.last_name.substr(1);
				var user = new User(req.body);
				user.save(function(err, saveResults){
					if(err){
						console.log(err);
					}
					else{
						res.json(saveResults);
					}
				});
			}
		}
	}
}) ()