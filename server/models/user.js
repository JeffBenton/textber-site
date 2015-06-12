var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	email: String,
	created_at: String
});
mongoose.model('User', UserSchema);