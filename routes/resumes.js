var _ = require('lodash')

module.exports = function(app) {

    _resumes = [];

    /** create **/
    app.post('/resume', function(req, res){
        _resumes.push(req.body);
        res.json({info:'resume successfully inserted'});
    });

    /** read **/
    app.get('/resume', function(req, res){
        res.json(_resumes);
    });

    app.get('/resume/:id', function(req, res){
        res.send(
            _.find(
                _resumes,
                {
                    name:req.params.id
                }
            )
        )
    });

    /** Update **/
    app.put('/resume/:id', function(req, res){
        var index = _.findIndex(
            _resumes,
            {
                name: req.params.id
            }
        );
        _.merge(_resumes[index],req.body);
        res.json({info:'resume successfully undated'});
    });

    /** Delete **/
    app.delete('/resume:id', function(req, res){
        _.remove(_resumes,function(resume){
            return resume.name = req.params.id;
        });
        res.json({info : 'resume successfully deleted'});
    });
}