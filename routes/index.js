var express = require('express');
var mongoose
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('index', { title: 'Express' });
});

router.get('/blog', function(req, res, next){
  res.json({
    username:'Nimatullah Razmjo',
    title :'Programming Lanuage',
    content:'THis is about programming language<br>I wanna be the one'

  });
});
module.exports = router;
