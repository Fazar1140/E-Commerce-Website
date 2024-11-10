const {category,Sequelize} = require('../models')
exports.getAllCategories = async (req,res)=>{
    const result = await category.findAll()
    res.status(200).json(result)

}
exports.createCategories = async (req,res)=>{
    const {name,description} = req.body;
    const createdCategory = await category.create({
        name,
        description
    })
    res.status(200).json(createdCategory)
}