'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
 
      //cart_item dimiliki oleh cart dengan foreignKey cart_id
      cart_item.belongsTo(models.cart,{
       
        foreignKey:'cart_id'
      })
      //cart_item memiliki banyak produk yang akan kita beli dengan foreignKey products_id
      cart_item.belongsToMany(models.products,{
         
         
        through:'products_cart_id'
      })
      //cart_item memiliki banyak produk stock yang berisikan detail harga,berat,dll dengan foreignKey product_stock_id
      cart_item.belongsToMany(models.product_stock,{
       
        
        through:'product_cart_id'
      })
    }
  }
  cart_item.init({
    cart_id: DataTypes.INTEGER,
    products_id: DataTypes.INTEGER,
    product_stock_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cart_item',
  });
  return cart_item;
};