/**
 * Create the middle ware that will check the request body is valid or not . . . 
 */
const user_model = require('../models/user.model')
const jwt = require('jsonwebtoken' ) ;
const authConfig = require('../configs/auth.config')
const verifySignUpBody = async (req,res , next) => {
    
    try{
        //check for the name . ..
        if(!req.body.name){
            return res.status(500).send({
                message : "Failed name was not provided . . ."
            })
        }
        //check for the email . . . 
        if(!req.body.email){
            return res.status(500).send({
                message : "Failed email was not provided . . ."})
        }

        //check for the userId 
        if(!req.body.password){
            return res.status(500).send({
                message : "Failed password  was not provided . . ."
            })
        }

        //check for the duplications . . .
        const user = await user_model.findOne({email : req.body.email}) ;
        if(user){
            
            return res.status(500).send({message : "User with same email is already present . . . ."})
        }

    }catch(err){
        console.log("Error while validating the request object")

        res.status(500).send({
            message : "Error while validating the request body . . ." ,
        })
    }

    next() ;
}

const verifySigninBody = async (req,res , next) => {

    if(!req.body.email){
        return res.status(400).send({
            message : 'email is not provided' ,
        })
    }

    if(!req.body.password){
        return res.status(400).send({
            message : 'password is not present ',
        })
    }

    next() ;
    
}

module.exports = {
    verifySignUpBody : verifySignUpBody,
    verifySigninBody : verifySigninBody ,
}