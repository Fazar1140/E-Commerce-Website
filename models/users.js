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
      // define association here
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