const {address,Sequelize,users} = require('../models');

exports.create = async (req,res)=>{
    try{
        const {user_id,title,address_line,country,city,postal_code,landmark,phone_number} = req.body
            //const user = await users.findByPk(req.user.id)
            
            const createdAddress =  await address.create({
                user_id,
                title,
                address_line,
                country,
                city,
                postal_code,
                landmark,
                phone_number,
             
            })

            res.status(201).json(createdAddress)
 
    }catch(err){
        console.log(err)
        return res.status(500).json({message:'Error in adding the address'})
    }
}

exports.getByUserId = async(req,res)=>{
    try{
        const id = req.params.id
        const result = await address.findByPk(id)
        console.log(id)
        res.status(200).json(result)

    }catch(err){
        console.log(err)
        res.status(500).json({message:'Error in fetching the address,try again later!'})
    }
}

exports.updateById = async(req,res)=>{
    try{

        const id = req.params.id
        const {user_id,title,address_line,country,city,postal_code,landmark,phone_number} = req.body

        const update = await address.update({
            user_id,
            title,
            address_line,
            country,
            city,
            postal_code,
            landmark,
            phone_number,
             
        },{where:{id:id}})

        if(update == 1){
            res.send({
                message:'address was updated successfully'
            });
        }else{
            res.send({
                message:`cannot update address, something is wrong with inputing address`
            })
        }
    }catch(err){
        console.log(err)
        res.status(500).json({message:'error in updating address,try again later'})
    }
}

exports.deleteById = async(req,res)=>{
    try{
        const id = req.params.id
        const deleted = await address.destroy({where:{id:id}})
        
        if(deleted==1){
            res.status(200).json('the address was deleted successfully')
        }else{
            res.status(400).json('cant delete the address')
        }
    }catch(err){
        console.log(err)
        res.status(500).json({message:'error in deleting address,try again later!'})
    }
}
exports.addressProvider = async(req,res)=>{
    const id = req.user.id;

    const userAddress = await address.findOne({where:{user_id:id}})
     
    res.render('Address',{userAddress});
}

exports.addressEdit = async(req,res)=>{
    const id = req.user.id;
    const {title,address_line,country,city,postal_code,landmark,phone_number} = req.body
    const editAddress = await address.update({
        title,address_line,country,city,postal_code,landmark,phone_number
    },{where:{user_id:id}})

    res.redirect('/')
    
}