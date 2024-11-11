const {users,Seqeulize} = require('../models')

exports.getAllUser = async(req,res)=>{
    const getAllUser = await users.findAll({attributes:{exclude:'password'}});
    res.status(201).send(getAllUser)
}

exports.getUserById = async(req,res)=>{
    const id = req.params.id
    const getUserById = await users.findByPk(id,{attributes:{exclude:'password'}})
    res.status(200).send(getUserById)
}
exports.patchUser = async(req,res)=>{
    try{
        const id = req.params.id
        const {avatar,username,password,telephone,isAdmin,isVerified} = req.body;
        const patchUser = await users.update({
            avatar,username,password,telephone,isAdmin,isVerified
        },{where:{id:id}})
        if(patchUser == 1){
            res.status(200).send(patchUser);
        }
    }catch(err){

    }
}