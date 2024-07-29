/**
 * I need to write the controller , logic for register a user . . . 
 */
const bcrypt = require('bcryptjs') ;
const user_model = require('../models/user.model')
const jwt = require('jsonwebtoken') ;
const secret = require('../configs/auth.config')
const crypto = require('crypto');
const nodemailer = require('nodemailer');

exports.signup = async (req , res) => {
    /**
     * Logic to create the user . . . 
     */

    //1.Read the request body . 
    //2.Insert the data into the users collection . . .
    //3.return the response back to the user . . . 

    const reqest_body = req.body ; 
    console.log(reqest_body) ;
    const userObj = {
        name : reqest_body.name ,
        email : reqest_body.email ,
        password : bcrypt.hashSync(reqest_body.password , 8) ,
    }

    try{
        const user_created = await user_model.create(userObj) ; 

        /**
         * return the user created . . . 
        */
        

        return res.status(201).send({message : user_created}) ;
    }catch(err){
        console.log('Error while registering  the user . . . ') ;
        return res.status(500).send({message : 'Internal Server Error . . . '}) ;
    }
}

/**
 * Logic to login . . . 
*/

exports.login = async (req , res) => {

    //1.check if the userId is present in the system ...
    const user = await user_model.findOne({email : req.body.email}) ;
    if(user === null){
        return res.status(404).send({
            message : 'Invalid credentials . . . ',
        })
    }
    //2.check if password is correct . . . 
    const isPasswordValid = bcrypt.compareSync(req.body.password , user.password) ; 

    if(isPasswordValid === false){
        return res.status(401).send({message : 'Wrong Passworrd Passed . . . '}) ;
    }

    //using jwt we will create the access token with a given TTL and return  . . .

    const token = jwt.sign({id : user._id} , secret.secret , {expiresIn : "1d"})

    res.status(200).send({
        name : user.name , 
        email : user.email ,
        accessToken : token ,
    })


}


exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
    const user = await user_model.findOne({ email });
  
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
  
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpires = Date.now() + 3600000; 
  
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = resetTokenExpires;
    await user.save();
  
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });
  
    const mailOptions = {
      to: user.email,
      from: process.env.GMAIL_USER,
      subject: 'Password Reset',
      text: `Please click on the following link, or paste it into your browser to complete the process: 
      http://localhost:5173/reset-password/${resetToken}`
    };
  
    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        return res.status(500).send({ message: 'Error sending email' });
      }
      res.status(200).send({ message: 'Password reset link sent' });
    });
  };


exports.resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;
    const user = await user_model.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });
  
    if (!user) {
      return res.status(400).send({ message: 'Invalid or expired token' });
    }
  
    user.password = bcrypt.hashSync(newPassword, 8);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();
  
    res.status(200).send({ message: 'Password has been reset' });
  };
  