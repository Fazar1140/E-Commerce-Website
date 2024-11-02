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
      //produk stock yang berisikan detail harga,berat,dll dimiliki oleh products table dengan foreign key product id
      product_stock.belongsTo(models.products,{
        as:'product_more_description',
        foreignKey:'product_id'
      })
      //produk stock yang berupa detail barang berat,harga,dll dimiliki oleh banyak cart_item yang berupa detail barnag keranjang table dengan foreign key product_stock_id
      product_stock.belongsToMany(models.cart_item,{
        as:'cart_item_detail',
        foreignKey:'product_stock_id'
      })
      //produk stock dimiliki berisikan detail harga,berat,dll dimiliki oleh order_item, yang berupa data pemesanan barang dengan foreignKey
      product_stock.belongsTo(models.order_item,{
        as:'order_item_detail',
        foreignKey:'product_stock_id'
      })
    }
  }
  product_stock.init({
    product_id: DataTypes.INTEGER,
    size: DataTypes.DECIMAL,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product_stock',
  });
  return product_stock;
};