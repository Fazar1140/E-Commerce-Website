'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      //produk dimiliki oleh banyak sub kategori dengan foreignKey category_id
      products.belongsToMany(models.subCategory,{
        as:'specific_category',
        through:'category_id'
      })

      //produk memiliki banyak produk_stock dengan foreignKey product_id, produk_stock disini diartikan sebagai detail produk
      products.hasMany(models.product_stock,{
        as:'product_stock',
        foreignKey:'product_id'
      })
      //produk dimiliki oleh banyak wishlist yang kita ingin belikan 
      products.hasMany(models.wishlist,{
        as:'wishlist',
        foreignKey:'product_wishlist_id'
      })
      //produk yang akan dimasukan ke keranjang banyak jumlahnya, yang kita simpan di cart-item sebagai perantara
      products.hasMany(models.cart_item,{
        as:'cart_product',
        foreignKey:'products_id'
      })
      //berbagai macam produk yang kita beli disimpan dalam order denga foreignKey products_id
      products.hasMany(models.order_item,{
        as:'ordered_product_item',
        foreignKey:'products_id'
      })
      //produk yang dijual akan diberi review maka kita tambahkan foreign_key product id
      products.hasMany(models.review,{
        as:'products_review',
        foreignKey:'product_id'
      })
    }
  }
  products.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    short_description: DataTypes.STRING,
    cover: DataTypes.STRING,
    
    
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};