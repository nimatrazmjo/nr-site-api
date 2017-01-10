var resume = require('./controller/resume')
var blog = require('./controller/blog')
module.exports = function (app) {
  /** Resume **/
  app.post('/resume', resume.create)
  app.get('/resume', resume.list)
  app.get('/resume/:id', resume.view)
  app.put('/resume/:id', resume.update)
  app.delete('/resume/:id', resume.delete)
  /** Resume skills */
  app.post('/skill/:id/', resume.addSkill)
  app.put('/skill/:id', resume.editSkill)
  app.delete('skill/:id', resume.deleteSkill)
  /** Resume Education */
  app.post('/education/:id', resume.addEducation)
  app.put('/education/:id', resume.editEducation)
  app.delete('/education/:id', resume.deleteEducation)
  /** Resume Experience */
  app.post('/experience/:id/', resume.addExperience)
  app.put('/experience/:id', resume.editExperience)
  app.delete('experience/:id', resume.deleteExperience)
  /** Resume Language */
  app.post('/language/:id', resume.addLanguage)
  app.put('/language/:id', resume.editLanguage)
  app.delete('/language/:id', resume.deleteLanguage)

  /** Blog */
  app.post('/blog', blog.create)
  app.get('/blog', blog.list)
  app.get('/blog/:id', blog.read)
  app.put('/blog/:id', blog.update)
  app.delete('/blog/:id', blog.delete)

  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
  })
}

// var express = require('express')
// var router = express.Router()
// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.send('Hello world')
// })
// module.exports = router
