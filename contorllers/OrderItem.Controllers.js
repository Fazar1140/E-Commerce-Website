const {order_item,users,Sequelize,order_details,payment_detail,products,product_stock} = require('../models')

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
        const {status} = req.body;
        
        const getOrderDetail = await order_details.findAll({include:order_item})
        const getProducts = await products.findAll();
        const getProductStock = await product_stock.findAll();
        const getUser = await users.findAll();

        const patchPaymentDetail = await payment_detail.update(
            {status},{where:{id:id}}
        )
        const getPaymentDetail = await payment_detail.findAll();

        res.redirect('/OrderItem/order-admin')
        
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
exports.OrderItemProvider = async(req,res)=>{
    //const getOrderItem = await order_item.findAll({include:order_details});
    const getOrderDetail = await order_details.findAll({include:[{model:order_item}],where:{user_id:req.user.id}});
    const getPaymentDetail = await payment_detail.findAll();
    const user = req.user;
    const getUser = await users.findByPk(user.id);

    const getProducts = await products.findAll()
    const getProductStock = await product_stock.findAll();
   
    
    //res.send(getOrderDetail)
    res.render('OrderItem',{getUser,getOrderDetail,getProducts,getProductStock,getPaymentDetail});
    //res.render('OrderItem')
}

exports.OrderItemAdminProvider = async(req,res)=>{
    const user = req.user;


    const checkAdmin = await users.findByPk(user.id);

    if(!checkAdmin.isAdmin){
        res.redirect('/')
    }
    const getPaymentDetail = await payment_detail.findAll();
    const getOrderDetail = await order_details.findAll({include:order_item})
    const getProducts = await products.findAll();
    const getProductStock = await product_stock.findAll();
    const getUser = await users.findAll();
    
    res.render('AdminOrder',{getUser,getOrderDetail,getProducts,getProductStock,getPaymentDetail})
}
