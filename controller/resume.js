var _ = require('lodash')
var Resume = require('../schema/resumes')
_resumes = []
/** List all resume */
module.exports.list = function (req, res) {
  Resume.find(function (err, resumes) {
    if (err) {
      return res.json({info: 'Error occur duing reading resume',error: err})
    }
    return res.json({info: 'Resume found successfully',data: resumes})
  })
}

/** View a resume */
module.exports.view = function (req, res) {
  Resume.findById(req.params.id, function (err, resumes) {
    if (err) {
      return res.json({info: 'Error occur duing reading resume details ',error: err})
    }
    if (resumes) {
      return res.json({info: 'Resume details found successfully',data: resumes})
    } else {
      return res.json({info: 'resume not found'})
    }
  })
}

/** Create Resume */
module.exports.create = function (req, res) {
  var newResume = new Resume(req.body)
  newResume.save(function (err) {
    if (err) {
      res.json({info: 'error during creating resume',error: err})
    }
    res.json({info: 'resume created successfully.'})
  })
}

/** Update Resume */
module.exports.update = function (req, res) {
  Resume.findById(req.params.id, function (err, resume) {
    if (err) {
      res.json({info: 'Error occur duing updating resume',error: err})
    }
    if (resume) {
      _.merge(resume, req.body)
      resume.save(function (err) {
        if (err) {
          res.json({info: 'Error occur duing updating resume',error: err})
        }
        res.json({info: 'resume updated successfully'})
      })
    } else {
      res.json({info: 'resume not found'})
    }
  })
}

/** Delete resumes */
module.exports.delete = function (req, res) {
  Resume.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.json({info: 'Error occur duing deleting resume',error: err})
    }
    res.json({info: 'resume deleted successfully'})
  })
}

/**Add Skill */
module.exports.addSkill = function (req, res) {
  Resume.findById(req.params.id, function (err, resume) {
    if (err) {
      res.json({info: 'Resume not found to add skill'})
    }
    if (resume) {
      _.merge(resume, req.body)
      resume.save(function (err) {
        if (err) {
          res.json({info: 'Skills are not added to resume'})
        }
        res.json({info: 'Skills are added to resume'})
      })
    }
  })
}

/** Edit Skill */
module.exports.editSkill = function (req, res) {
  Resume.findById(req.params.id, function (err, resume) {})
}

/** Delete Skill */
module.exports.deleteSkill = function (req, res) {
  Resume.findById(req.params.id, function (err, resume) {})
}

/**Add Experience */
module.exports.addEducation = function (req, res) {
  Resume.findById(req.params.id, function (err, resume) {
    if (err) {
      res.json({info: 'Resume not found to add skill'})
    }
    if (resume) {
      _.merge(resume, req.body)
      resume.save(function (err) {
        if (err) {
          res.json({info: 'Educations are not added to resume'})
        }
        res.json({info: 'Educations are added to resume'})
      })
    }
  })
}

/** Edit Experience */
module.exports.editEducation = function (req, res) {
  Resume.findById(req.params.id, function (err, resume) {})
}

/** Delete Experience */
module.exports.deleteEducation = function (req, res) {
  Resume.findById(req.params.id, function (err, resume) {})
}

/**Add Experience */
module.exports.addExperience = function (req, res) {
  Resume.findById(req.params.id, function (err, resume) {
    if (err) {
      res.json({info: 'Resume not found to add skill'})
    }
    if (resume) {
      _.merge(resume, req.body)
      resume.save(function (err) {
        if (err) {
          res.json({info: 'Experiences are not added to resume'})
        }
        res.json({info: 'Experiences are added to resume'})
      })
    }
  })
}

/** Edit Experience */
module.exports.editExperience = function (req, res) {
  Resume.findById(req.params.id, function (err, resume) {})
}

/** Delete Experience */
module.exports.deleteExperience = function (req, res) {
  Resume.findById(req.params.id, function (err, resume) {})
}

/**Add Language */
module.exports.addLanguage = function (req, res) {
  Resume.findById(req.params.id, function (err, resume) {
    if (err) {
      res.json({info: 'Resume not found to add skill'})
    }
    if (resume) {
      _.merge(resume, req.body)
      resume.save(function (err) {
        if (err) {
          res.json({info: 'Languages are not added to resume'})
        }
        res.json({info: 'Languages are added to resume'})
      })
    }
  })
}

/** Edit Language */
module.exports.editLanguage = function (req, res) {
  Resume.findById(req.params.id, function (err, resume) {})
}

/** Delete Language */
module.exports.deleteLanguage = function (req, res) {
  Resume.findById(req.params.id, function (err, resume) {})
}

function now () {
  return new Date()
}
function getPosted (data) {
  var data = data
  data.created_at = now()
  data.updated_at = now()
  return data
}

function updatePost (data) {
  var data = data
  data.updated_at = now()
  return data
}
