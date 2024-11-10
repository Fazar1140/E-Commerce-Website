const {review,Sequelize} = require('../models');

exports.getAllReviews = async(req,res)=>{
    const getAllReviews = await review.findAll()
    res.status(201).send(getAllReviews)
}