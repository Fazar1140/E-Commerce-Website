'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    static associate(models) {
      //kategori memiliki banyak subkategori dengan foreignKey parent_id, untuk memecahkan kategori lebih detil
      category.hasMany(models.subCategory,{
        as:'subCategory',
        foreignKey:'parent_id',
      })
    }
  }
  category.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};