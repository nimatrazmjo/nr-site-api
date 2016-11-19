var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    fullname : String,
    email : String,
    comment : String,
    created_at : Date
});

var blogSchema = mongoose.Schema({
    title : String,
    body : String,
    user_id : String,
    created_at : Date,
    updated_at : Date,
    comment : [commentSchema]
});
module.exports = mongoose.model('Blog', blogSchema);