var _ = require('lodash');

var Blog = require('../schema/blogs');

module.exports = function(app) {

    /** Create **/
    app.post('/blog',function(req, res){
        var newBlog= new Blog(getPosted(req.body));
        newBlog.save(function(err){
            if (err) {
                res.json({info:'error during creating blog',error:err});
            }
            res.json({info:'blog created successfully.'});
        });
    });

    /** Read **/
    app.get('/blog', function(req, res) {
        Blog.find(function(err,blogs){
            if (err) {
                res.json({info:'Error occur duing reading blog',error:err});
            }
            res.json({info:'blogs found successfully',data:blogs});
        });
    });

    app.get('/blog/:id', function (req, res) {
        Blog.findById(req.params.id,function (err, blogs){
            if (err) {
                res.json({info:'Error occur duing reading blog',error:err});
            }
            if (blogs) {
                res.json({info:'blog found successfully',data:blogs});
            } else {
                res.json({info:'Blog not found'});
            }
        });
    });

    /** Update **/
    app.put('/blog/:id', function(req, res){
        Blog.findById(req.params.id, function(err, blog){
            if (err) {
               res.json({info:'Error occur duing updating blog',error:err});
            }
            if (blog) {
                _.merge(blog, updatePost(req.body));
                blog.save(function(err){
                    if (err) {
                        res.json({info:'Error occur duing updating blog',error:err});
                    }
                    res.json({info : 'blog updated successfully'});
                });
            } else {
                res.json({info:'Blog not found'});
            }

        });
    });

    /** Delete **/
    app.delete('/blog/:id', function (req, res) {
        Blog.findByIdAndRemove(req.params.id, function (err) {
            if(err) {
                res.json({info:'Error occur duing deleting blog',error:err});
            }
            res.json({info : 'blog deleted successfully'});
        });
    });
}
function now() {
    return new Date();
}
function getPosted(data)
{
    var data = data;
    data.created_at = now();
    data.updated_at = now();
    return data;
}

function updatePost(data)
{
    var data = data;
    data.updated_at = now();
    return data;
}