require('dotenv').config()
const jwt = require('jsonwebtoken');

exports.generateToken = (payload,passwordReset=false)=>{
    return jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:'24H'})
}