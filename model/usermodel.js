var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
});

module.exports = mongoose.model('user',userschema);