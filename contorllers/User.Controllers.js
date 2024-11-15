const {users,Seqeulize} = require('../models')

const bcrypt = require('bcryptjs');
const fs = require('fs');


exports.getAllUser = async(req,res)=>{
    const getAllUser = await users.findAll({attributes:{exclude:'password'}});
    res.status(201).send(getAllUser)
    
}

exports.getUserById = async(req,res)=>{
    const id = req.params.id
    const getUserById = await users.findByPk(id,{attributes:{exclude:'password'}})
    res.status(200).send(getUserById)
}
exports.getPutUser = async(req,res)=>{
    const User = await users.findByPk(req.user.id)
    res.render('editUser',{User})
    
    
}
exports.patchUser = async(req,res)=>{
    
    try{
        if(req.file){
            const {originalname,path} = req.file
            console.log(path)
            const parts = originalname.split('.')
            const ext = parts[parts.length - 1]
            newPath = path+'.'+ext
            console.log(newPath)
            fs.renameSync(path,newPath)
        }
         
        const id = req.params.id
        const {username,password,telephone} = req.body;
        const patchUser = await users.update({
            avatar:newPath,
            username,
            telephone,
            password:await bcrypt.hash(password,10)
        },{where:{id:id}})
        
        console.log(patchUser)
        res.clearCookie('token')
        res.redirect('/')
        
        
    }catch(err){
        console.log(err)
    }
}
