
const {users,Sequelize,products,product_stock} = require('../models');

const bcrypt = require('bcryptjs');
const {getInfoProtected} = require('../middleware/getInfoProtected');
const {generateToken} = require('../middleware/generateToken')

exports.signIn = async(req,res)=>{
    res.render('signin');
}
exports.signUp = async(req,res)=>{
    res.render('signup')
}
exports.signup = async (req,res)=>{
try{
    const {username,email,telephone,password} = req.body;
    //cek apabila ada user yang sama 
    const CheckUsernameInput = await users.findOne({where:{email}})

    if(CheckUsernameInput){
        return res.status(400).json({'error':'email are already exist!'})
    }
   

    const createdUser = await users.create({
        avatar:'views/uploads/default.jpg',
        username,
        email,
        telephone,
        isAdmin:false,
        isVerified:false,
        password : await bcrypt.hash(password,10)
    })
    // const userInfo = getInfoProtected(createdUser)

    // const token = generateToken(userInfo)

    // res.cookie('token',token,{
    //     sameSite:process.env.PRODUCTION==='true'?"None":'Lax',
    //     maxAge:new Date(Date.now() + (parseInt(process.env.COOKIE_EXPIRATION_DAYS * 24 * 60 * 60 * 1000))),
    //     httpOnly:true,
    //     secure:process.env.PRODUCTION==='true'?true:false
    // })

    res.redirect('/')
   
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Error occured during signup,try again later"})
    }
}
     
exports.signin = async (req,res)=>{
    try{
        const {email,password} = req.body;

        const existingUser = await users.findOne({where:{email:email}}) 
   

        const verifyPassword = await bcrypt.compare(password,existingUser.password)

        if(existingUser && verifyPassword){
            const userInfo = getInfoProtected(existingUser)

            const token = generateToken(userInfo)

            res.cookie('token',token,{
                sameSite:process.env.PRODUCTION==='true'?"None":'Lax',
                maxAge:new Date(Date.now() + (parseInt(process.env.COOKIE_EXPIRATION_DAYS * 24 * 60 * 60 * 1000))),
                httpOnly:true,
                secure:process.env.PRODUCTION==='true'?true:false
            })
        }
         console.log(res.cookie)
        res.redirect('/')
      

    }catch(err){
        console.log(err)
        res.status(404).json({message:'Error occured while login , try again later'})
    }
}

exports.logout = async(req,res)=>{
    try{
       res.clearCookie('token')
        //res.status(200).json({message:'logout successfull'})
        res.redirect('/')

    }catch(err){
        console.log(err);
    }
}

exports.checkAuth = async(req,res)=>{
    try{ 
       
    if(req.user){
        const user = await users.findByPk(req.user.id)
        return res.status(200).json(getInfoProtected(user))
    }
    res.sendStatus(401)
    }catch(err){
        console.log(err);
        res.sendStatus(500)
    }
}