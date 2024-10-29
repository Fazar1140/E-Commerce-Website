'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //order_item memiliki products_stock berupa detail barang berat,harga. barang yang kita ingin pesan dengan foreignKey products_stock_id
      order_item.hasOne(models.product_stock,{
        as:'order_product_stock',
        foreignKey:'products_stock_id'
      })
      //order_item dimiliki oleh order Details, yang menjelaskan detail barang dengan foreignKey order_id
      order_item.belongsTo(models.order_details,{
        as:'order_item_details',
        foreignKey:'order_id'
      })
      //order_item memiliki payment_details, memberikan rincian detail pembelian dengan foreignKey order_id
      order_item.hasOne(models.payment_details,{
        as:'order_payment',
        foreignKey:'order_id'
      })
      //order_item dimiliki oleh products dengan foreignKey products_id
      order_item.belongsTo(models.products,{
        as:'products_ordered',
        foreignKey:'products_id'
      })
    }
  }
  order_item.init({
    order_id: DataTypes.INTEGER,
    products_id: DataTypes.INTEGER,
    products_stock_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order_item',
  });
  return order_item;
};