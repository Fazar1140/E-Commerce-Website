'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
 
    static associate(models) {

    //asosiasikan users has many address, dimana users memiliki banyak alamat dengan foreignKey user_id
      users.hasMany(models.address,{
        as:'address',
        foreignkey:'user_id'
      })
    //asosiasikan users has many wishlist, users memiliki banyak barang yang akan ditambahkan ke keranjang dengan foreignKey user_id
      users.hasMany(models.wishlist,{
        as:'wishlist',
        foreignKey:'user_id'
      })
      //asosiasikan users has one cart, setiap users hanya memiliki satu keranjang saja dengan foreignKey user_id
      users.hasOne(models.cart,{
        as:'cart',
        foreignKey:'user_id'
      })
      //asosiasikan users has one review, setiap user hanya memiliki satu review dengan foreignKey user_id
      users.hasOne(models.review,{
        as:'user_review',
        foreignKey:'user_id'
      })
    }
  }
  users.init({
    avatar: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    isVerified: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};