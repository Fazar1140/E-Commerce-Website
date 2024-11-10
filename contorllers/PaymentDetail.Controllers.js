const {payment_detail,Sequelize} = require('../models')

exports.getAllPaymentDetail = async(req,res)=>{
    const getAllPaymentDetails = await payment_detail.findAll();
    res.status(201).send(getAllPaymentDetails)
}

exports.getPaymentDetailId = async(req,res)=>{
    const id = req.params.id;
    const getPaymentDetailId = await payment_detail.findByPk(id)

    res.status(201).send(getPaymentDetailId)
}

exports.createPaymentDetail = async(req,res)=>{
    try{ 
    const {order_id,amount,provider,status,payment_mode} = req.body

    const createPaymentDetail = await payment_detail.create(
        {order_id,amount,provider,status,payment_mode}
    )
        res.status(200).send(createPaymentDetail)
    }catch(err){
        console.log(err)
        res.status(500).send('something wrong with creating payment detail try again later!')
    }
}
exports.patchPaymentDetail = async(req,res)=>{
    try{
        const id = req.params.id
        const {order_id,amount,provider,status,payment_mode} = req.body

        const patchPaymentDetail = await payment_detail.update(
            {order_id,amount,provider,status,payment_mode},{where:{id:id}}
        )
            if(patchPaymentDetail == 1){
                res.status(201).send('payment detail updated successfully')
            }else{
                res.status(400).send('payment detail failed to update!')
            }
    }catch(err){
        console.log(err)
        res.status(500).send('something wrong with patching payment detail try again later!')
    }
}

exports.deletePaymentDetail = async(req,res)=>{
    try{
        const id = req.params.id


        const deletePaymentDetail = await payment_detail.destroy(
            {where:{id:id}}
        )
            if(deletePaymentDetail == 1){
                res.status(201).send('payment detail deleted successfully')
            }else{
                res.status(400).send('payment detail failed to delete!')
            }
    }catch(err){
        console.log(err)
        res.status(500).send('something wrong with deleting payment detail try again later!')
    }
}