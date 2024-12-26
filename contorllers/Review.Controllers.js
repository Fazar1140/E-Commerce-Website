const {review,Sequelize} = require('../models');

exports.getAllReviews = async(req,res)=>{
    const getAllReviews = await review.findAll()
    res.status(201).send(getAllReviews)
}

exports.createComment = async(req,res)=>{
    const user_id = req.user.id;
    const id = req.params.id;
    const {rating,comment} = req.body;

    const findReview = await review.findOne({where:{user_id,product_id:id}});

    if(findReview){
        return res.status(400).json({'error':'you already commented!'})
    }

    const createReview = await review.create({
        user_id,product_id:id,rating,comment
    })


    res.redirect(`/${id}`)
}