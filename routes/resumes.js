var _ = require('lodash');
var Resume = require("../schema/resumes");
module.exports = function(app) {

    _resumes = [];

    /** create **/
    app.post('/resume', function(req, res){
       
        var newResume = new Resume(req.body);
        newResume.save(function(err){
            if(err) {
                res.json({info:'error during creating resume',error:err});
            }
            res.json({info:'resume created successfully.'});
        });
    });

    /** read **/
    app.get('/resume', function(req, res){
       Resume.find(function(err,resumes){
            if (err) {
                res.json({info:'Error occur duing reading resume',error:err});
            }
            res.json({info:'Resume found successfully',data:resumes});
        });
    });

    app.get('/resume/:id', function(req, res){
        Resume.findById(req.params.id,function (err, resumes){
            if (err) {
                res.json({info:'Error occur duing reading resume',error:err});
            }
            if (resumes) {
                res.json({info:'Resume found successfully',data:resumes});
            } else {
                res.json({info:'resume not found'});
            }
        });
    });

    /** Update **/
    app.put('/resume/:id', function(req, res){
        Resume.findById(req.params.id, function(err, resume){
            if (err) {
               res.json({info:'Error occur duing updating resume',error:err});
            }
            if (resume) {
                _.merge(resume, req.body);
                resume.save(function(err){
                    if (err) {
                        res.json({info:'Error occur duing updating resume',error:err});
                    }
                    res.json({info : 'resume updated successfully'});
                });
            } else {
                res.json({info:'resume not found'});
            }

        });
    });

    /** Delete **/
    app.delete('/resume/:id', function(req, res){
        Resume.findByIdAndRemove(req.params.id, function (err) {
            if(err) {
                res.json({info:'Error occur duing deleting resume',error:err});
            }
            res.json({info : 'resume deleted successfully'});
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