var mongoose = require('mongoose');

var Technical_Skills = mongoose.Schema({
    title : String
});

var Education = mongoose.Schema({
    title : String,
    field : String,
    university : String,
    from : Date,
    to : Date,
    location : text
});

var Experiance = mongoose.Schema({
    title: String,
    company : String,
    from : Date,
    to : Date,
    location : String,
    responsibility: text
});

var Language = mongoose.Schema({
   title : String,
   status : String
});

var Resume = mongoose.Schema({
    full_name : String,
    email : String,
    phone : Number,
    gender : String,
    age : Number,
    address : String,
    profile : Text,
    experiance :[Experiance],
    education : [Education],
    technical_skils : [Technical_Skills],
    language : [Language]
});

var Resume = mongoose.model('Resume', Resume);