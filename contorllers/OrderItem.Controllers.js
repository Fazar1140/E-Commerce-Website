const {order_item,Sequelize} = require('../models')

exports.getOrderItem = async(req,res)=>{
    const getOrderItem = await order_item.findAll();
    res.status(201).send(getOrderItem)
}

exports.createOrderItem = async(req,res)=>{
    const {order_id,products_id,products_stock_id,quantity} = req.body

    const createOrderItem = await order_item.create({
        order_id,
        products_id,
        products_stock_id,
        quantity
    })
    res.status(201).send(createOrderItem)
}
exports.updateOrderItem = async(req,res)=>{
    try{
        const id = req.params.id
        const {order_id,products_id,products_stock_id,quantity} = req.body
    
        const patchOrderItem = await order_item.update(
            {order_id,products_id,products_stock_id,quantity},{where:{id:id}}
        )
        if(patchOrderItem == 1){
            res.status(200).send('order items updated successfully')
        }else{
            res.status(400).send('order items failed! try checking the input')
        }
        
    }catch(Err){
        console.log(Err)
        res.status(500).send('Error something wrong with updating order item,try again later!')
    }
     
}
exports.deleteOrderItem = async(req,res)=>{
    try{
        const id = req.params.id
        
        const deleteOrderItem = await order_item.destroy(
            {where:{id:id}}
        )
        if(deleteOrderItem == 1){
            res.status(200).send('order items deleted successfully')
        }else{
            res.status(400).send('order items failed to remove!')
        }
        
    }catch(Err){
        console.log(Err)
        res.status(500).send('Error something wrong with deleting order item,try again later!')
    }
}