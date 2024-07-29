/**
 * This is the model of the user collection. . . 
 */

const mongoose = require('mongoose') ;

const userSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true , 
    },
    
    password : {
        type : String ,
        required : true , 

    } ,
    email : {
        type : String ,
        required : true , 
        lowercase : true , 
        minLength : 10 , 
        unique : true , 
    } ,
    resetPasswordToken: String,
    resetPasswordExpires: Date , 


} , {timestamps : true , versionKey : false}) ; 

module.exports = mongoose.model('User' , userSchema) ; 
