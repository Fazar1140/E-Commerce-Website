'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //address yang berisikan alamat rumah dimiliki oleh users dengan foreignKey user_id
      address.belongsTo(models.users,{
        foreignKey:'user_id'
      })
    }
  }
  address.init({
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    address_line: DataTypes.STRING,
    country: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    landmark: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'address',
  });
  return address;
};