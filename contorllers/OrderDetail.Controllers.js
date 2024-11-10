const {order_details,Sequelize} = require('../models')

exports.getOrderDetail = async(req,res)=>{
    const getOrderDetail = await order_details.findAll()
    res.status(201).send(getOrderDetail)
}
exports.getOrderDetailId = async(req,res)=>{
    const id = req.params.id;
    const getOrderDetailId = await order_details.findByPk(id)
    res.status(201).send(getOrderDetailId)
}
exports.createOrderDetail = async(req,res)=>{
    const {user_id,payment_id,total} = req.body;

    const createOrderDetail = await order_details.create(
        {user_id,payment_id,total}
    )
    res.status(201).send(createOrderDetail)
}
exports.updateOrderDetail = async(req,res)=>{
    try{
        const id = req.params.id
        const {user_id,payment_id,total} = req.body;

        const updateOrderDetail = await order_details.update({
            user_id,payment_id,total
        },{where:{id,id}})
        if(updateOrderDetail == 1){
            res.status(201).send('Order details updated succesfully')
        }else{
            res.status(400).send('something when wrong with updating order details');
        }
    }catch(err){
        console.log(err)
        res.status(500).send('Error with order details try again later!');
    }
}


exports.deleteOrderDetail = async(req,res)=>{
    try{
        const id = req.params.id
        

        const updateOrderDetail = await order_details.destroy({where:{id,id}})

        if(updateOrderDetail == 1){
            res.status(201).send('Order details deleted succesfully')
        }else{
            res.status(400).send('something when wrong with deleting order details');
        }
    }catch(err){
        console.log(err)
        res.status(500).send('Error with order details try again later!');
    }
}
