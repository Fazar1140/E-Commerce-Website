'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  payment_detail.init({
    order_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    provider: DataTypes.STRING,
    status: DataTypes.ENUM('PENDING', 'DISPATCHED', 'OUT FOR DELIVERY', 'CANCELLED'),
    payment_mode: DataTypes.ENUM('COD', 'UPI', 'CARD')
  }, {
    sequelize,
    modelName: 'payment_detail',
  });
  return payment_detail;
};