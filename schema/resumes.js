var mongoose = require('mongoose');

var technicalSkillSchema = mongoose.Schema({
    title : String
});

var educationSchema = mongoose.Schema({
    title : String,
    field : String,
    university : String,
    from : Date,
    to : Date,
    location : String
});

var experianceSchema = mongoose.Schema({
    title: String,
    company : String,
    from : Date,
    to : Date,
    location : String,
    responsibility: String
});

var languageSchema = mongoose.Schema({
   title : String,
   status : String
});

var resumeSchema = mongoose.Schema({
    full_name : String,
    email : String,
    phone : Number,
    gender : String,
    age : Number,
    address : String,
    profile : String,
    experiance :[experianceSchema],
    education : [educationSchema],
    technical_skils : [technicalSkillSchema],
    language : [languageSchema],
    created_at : Date,
    updated_at : Date
});

module.exports = mongoose.model('Resume', resumeSchema);
