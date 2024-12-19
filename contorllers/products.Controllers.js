const jwt = require('jsonwebtoken');
const {products,Sequelze,product_stock,subCategory,category} = require('../models');
const {Op} = require('sequelize');
const fs = require('fs');

const subcategory = require('../models/subcategory');
 

exports.getAllProducts = async(req,res)=>{
    try{ 
          
        const {token} = req.cookies;
        console.log(req.cookies)
        if(!token){
            const user = {}
            const getProducts = await products.findAll({include:product_stock});
    
            res.render('products',{getProducts,user})
        }else{
            const decodeInfo = jwt.verify(token,process.env.SECRET_KEY)


            if(decodeInfo && decodeInfo.id && decodeInfo.email){
                req.user=decodeInfo
                
            }
            else{
                return res.status(401).json({message:'invalid token,please log in again!'})
            }
             
            
            
            const user = req.user
            console.log(user)
            const getProducts = await products.findAll({include:product_stock});
         
            res.render('products',{getProducts:getProducts,user})
            
        }
    
         
        }catch(err){
            console.log(err);
            res.sendStatus(500)
        }
                    
}
 
exports.getById = async(req,res)=>{
    
    const {token} = req.cookies;
    console.log(req.cookies)
    if(!token){

        const id = req.params.id;
        const user = {}
        const getProducts = await products.findByPk(id,{include:product_stock});
        //res.status(200).send(getProducts)
        const getSubcategory = await subCategory.findByPk(getProducts.category_id);
        const getCategory = await category.findByPk(getSubcategory.parent_id)
        
        res.render('product_details',{getProducts,user,getSubcategory,getCategory})
      
    }else{
       const decodeInfo = jwt.verify(token,process.env.SECRET_KEY)


        if(decodeInfo && decodeInfo.id && decodeInfo.email){
            req.user=decodeInfo
            
        }
        else{
            return res.status(401).json({message:'invalid token,please log in again!'})
        }
    
        const id = req.params.id;
        const user = req.user
        console.log(req.user)
        const getProducts = await products.findByPk(id,{include:product_stock});
        
        const getSubcategory = await subCategory.findByPk(getProducts.category_id);
        const getCategory = await category.findByPk(getSubcategory.parent_id)
        
        res.render('product_details',{getProducts,user,getSubcategory,getCategory})
    }

}
exports.createProduct = async(req,res)=>{
    const {name,description,short_description,category_id,price,size,quantity} = req.body;
    let newPath = null;

    if(req.file){
        const {originalname,path} = req.file
        console.log(path)
        const parts = originalname.split('.')
        const ext = parts[parts.length - 1]
        newPath = path+'.'+ext
        console.log(newPath)
        fs.renameSync(path,newPath)
    }


    const aPath = newPath.substring(0,13)
    const fixedPath = newPath.substring(aPath.length,newPath.length)
    console.log(fixedPath);
    const makeProduct = await products.create({
        
        name,
        description,
        short_description,
        cover:fixedPath,
        category_id,     
    })

    const makeProductStock = await product_stock.create({
        price,
        size,
        quantity
    })
    //res.status(201).send(makeProduct)
    res.redirect('/')
}
exports.createProductProvider = async(req,res)=>{
    const user = req.user;
    const subcategory = await subCategory.findAll();
    res.render('createProduct',{user,subcategory})
}
exports.patchProduct = async(req,res)=>{
    
        try{
    
            const id = req.params.id
            const {name,description,short_description,cover,category_id} = req.body
    
            const update = await products.update({
                name,description,short_description,cover,category_id
            },{where:{id:id}})
            const user = req.user

            const getProducts = await products.findByPk(req.params.id,{include:product_stock})
            if(update == 1){
                    res.render('product_details',{getProducts,user})
            }else{
                res.send({
                    message:`cannot update products, something is wrong with inputing products`
                })
            }
        }catch(err){
            console.log(err)
            res.status(500).json({message:'error in updating products,try again later'})
        }
}
exports.getProductId = async(req,res)=>{
    const getProducts = await products.findByPk(req.params.id)
    const user = req.user 
    res.render('editProductDetails',{getProducts,user})
}
exports.deleteProduct = async(req,res)=>{
    try{
        const id = req.params.id
        const deleted = await products.destroy({where:{id:id}})
        
        if(deleted==1){
            res.status(200).json('the products was deleted successfully')
        }else{
            res.status(400).json('cant delete the products')
        }
    }catch(err){
        console.log(err)
        res.status(500).json({message:'error in deleting products,try again later!'})
    }
}

exports.searchProduct = async(req,res)=>{
       
    const {token} = req.cookies;
    console.log(req.cookies)
    if(!token){
        const user = {}
        const getProducts = await products.findAll({include:product_stock,
            where:{
                name:{
                    [Op.substring]:req.body.search
                }
            }
        })
        res.render('products',{getProducts:getProducts,user})
    }else{
        const decodeInfo = jwt.verify(token,process.env.SECRET_KEY)


        if(decodeInfo && decodeInfo.id && decodeInfo.email){
            req.user=decodeInfo
            
        }
        else{
            return res.status(401).json({message:'invalid token,please log in again!'})
        }
        console.log(req.user)
        const user = req.user
        const getProducts = await products.findAll({include:product_stock,
            where:{
                name:{
                    [Op.substring]:req.body.search
                }
            }
        })
        res.render('products',{getProducts:getProducts,user})
        
    }
}