const {subCategory,Sequelize} = require('../models')


exports.getAllSubcategories = async (req,res)=>{
    const result = await subCategory.findAll()
    res.status(200).json(result)

}
exports.createSubcategories = async (req,res)=>{
    const {parent_id,name,description} = req.body;
    const createdCategory = await subCategory.create({
        parent_id,
        name,
        description
    })
    res.status(200).json(createdCategory)
}