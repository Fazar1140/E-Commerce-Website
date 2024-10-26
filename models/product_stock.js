'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product_stock.init({
    proudct_id: DataTypes.INTEGER,
    size: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product_stock',
  });
  return product_stock;
};