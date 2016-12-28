var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    fullname : String,
    email : String,
    comment : String,
    created_at : String
});

var blogSchema = mongoose.Schema({
    title : String,
    body : String,
    user_id : String,
    created_at : String,
    updated_at : String,
    comment : [commentSchema]
});
module.exports = mongoose.model('Blog', blogSchema);