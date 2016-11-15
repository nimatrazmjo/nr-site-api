var mongoose = require('mongoose');
var Comment = mongoose.Schema({
	fullname : String,
	email : String,
	comment : String,
	created_at : Date
});

var Blog = mongoose.Schema({
	title : String,
	body : String,
	user_id : String,
	created_at : Date,
	updated_at : Date,
	comment : [Comment]
});

var Blog = mongoose.model('Blog', Blog);