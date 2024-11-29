'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //order_details berupa detail produk memiliki banyak order_item yang kita pesan dengan foreignKey order_id,
      order_details.hasMany(models.order_item,{
        
        foreignKey:'order_id'
      })
    }
  }
  order_details.init({
    user_id: DataTypes.INTEGER,
    payment_id: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order_details',
  });
  return order_details;
};