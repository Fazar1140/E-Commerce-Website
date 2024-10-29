'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wishlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //wishlist dimiliki oleh banyak user dengan foreignKey user_id
      wishlist.belongsToMany(models.users,{
        as:'users_wishlist',
        foreignKey:'user_id'
      })
      //wishlist atau barang yang ingin kita beli memiliki banyak produk yang kita ingin beli,dengan foreignKey product_id
      wishlist.hasMany(models.products,{
        as:'products',
        foreignKey:'product_id'
      })
    }
  }
  wishlist.init({
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'wishlist',
  });
  return wishlist;
};