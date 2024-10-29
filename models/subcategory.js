'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //subkategori dimiliki oleh kategori dengan foreignKey parent_id
     subCategory.belongsTo(models.category,{
      as:'category',
      foreignKey: 'parent_id'
     })
      //sub kategori memperjelas jenis barang yang berupa turunan dari kategori dengan foreignkey category_id
     subCategory.hasMany(models.products,{
      as:'products',
      foreignKey:'category_id' 
     })
    }
  }
  subCategory.init({
    parent_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'subCategory',
  });
  return subCategory;
};