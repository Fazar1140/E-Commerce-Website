'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      //cart atau keranjang dimiliki oleh masing masing user dengan foreignKey user_id
      cart.belongsTo(models.users,{
        
        foreignKey:'user_id'
      })
      //cart memiliki cart)item sebagai table untuk menghubungkan product_stock dan products dengan foreignKey cart_id
      cart.hasMany(models.cart_item,{
 
        foreignKey:'cart_id'
      })
      
    }
  }
  cart.init({
    user_id: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cart',
  });
  return cart;
};