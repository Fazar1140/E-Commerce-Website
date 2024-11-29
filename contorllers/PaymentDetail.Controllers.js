const {payment_detail,Sequelize,products,product_stock,order_item,order_details,cart,cart_item} = require('../models')


const paypal = require("@paypal/checkout-server-sdk")
const Environment =
  process.env.NODE_ENV === "production"
    ? paypal.core.LiveEnvironment
    : paypal.core.SandboxEnvironment
const paypalClient = new paypal.core.PayPalHttpClient(
  new Environment(
    process.env.PAYPAL_CLIENT_ID,
    process.env.PAYPAL_CLIENT_SECRET
  )
)

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
    const {payment_mode} = req.body;
    const id = req.params.id;
    const users = req.user;
    
    const Cart = await cart.findAll({include:[{model:cart_item,where:{id:id}}],where:{user_id:users.id}})
    const getProductId = Cart[0].cart_items[0].products_id;
    const getProductStock = await product_stock.findByPk(getProductId)

    const createPaymentDetail = await payment_detail.create(
        {amount:Cart[0].total * getProductStock.price,
        status:'PENDING',
        payment_mode:payment_mode,
        provider:'NON'
        }
    )

    const createOrderItem = await order_item.create(
        {
            products_id:getProductId,
            products_stock_id:getProductId,
            quantity:Cart[0].total
        }
    )
    const createOrderDetail = await order_details.create(
        {
            user_id:users.id,
            total: Cart[0].total * getProductStock.price
        }
    )
    const cartDestroy = await cart.destroy({where:{id:id}})
    const cartItem = await cart.destroy({where:{id:id}})
    const updateProductStock = await product_stock.update({quantity:getProductStock.quantity - Cart[0].total},{where:{id:getProductId}})

    res.redirect('/')
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

exports.paymentDetailProvider = async(req,res)=>{
  
    
    const id = req.params.id;
    const users = req.user;
    const Cart = await cart.findAll({include:[{model:cart_item,where:{id:id}}],where:{user_id:users.id}})
    const getProductId = Cart[0].cart_items[0].products_id;
    const getProducts = await products.findByPk(getProductId,{include:product_stock})
    const paypalClientId = process.env.PAYPAL_CLIENT_ID;
    //res.send(Cart)
    
   res.render('payment',{getProducts,users,Cart,paypalClientId})
   
        
    
} 
  
exports.createOrder = async (req, res) => {

    const getProductStock = await product_stock.findByPk(req.body.items[0].id);
    const getProducts = await products.findByPk(req.body.items[0].id);
    
    const request = new paypal.orders.OrdersCreateRequest()
    console.log(req.body.items[0].id)
    const total = req.body.items.reduce((sum, item) => {
      
        console.log(getProductStock)
        let id = item.id;
       
        return sum + getProductStock.price * item.total
      
    }, 0)
    //console.log(total);
    request.prefer("return=representation")
    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: total,
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: total,
              },
            },
          },
          items: req.body.items.map(item => {
            const product = getProducts
                    const productStock = getProductStock
                    return{
                        name : product.name,
                        unit_amount: {
                            currency_code:'USD',
                            value:productStock.price
                        },
                        quantity:item.total
                    }
          }),
        },
      ],
    })
  
    try {
      const order = await paypalClient.execute(request)
      res.json({ id: order.result.id })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
   
    const {payment_mode} = req.body;
    const id = req.params.id;
    const users = req.user;
    
    const Cart = await cart.findAll({include:[{model:cart_item,where:{id:id}}],where:{user_id:users.id}})
    const getProductId = Cart[0].cart_items[0].products_id;

    const createPaymentDetail = await payment_detail.create(
        {amount:Cart[0].total * getProductStock.price,
        status:'PENDING',
        payment_mode:payment_mode,
        provider:'PAYPAL'
        }
    )

    const createOrderItem = await order_item.create(
        {
            products_id:getProductId,
            products_stock_id:getProductId,
            quantity:Cart[0].total
        }
    )
    const createOrderDetail = await order_details.create(
        {
            user_id:users.id,
            total: Cart[0].total * getProductStock.price
        }
    )
    const cartDestroy = await cart.destroy({where:{id:id}})
    const cartItem = await cart.destroy({where:{id:id}})
    const updateProductStock = await product_stock.update({quantity:getProductStock.quantity - Cart[0].total},{where:{id:getProductId}})

    res.redirect('/')
  }