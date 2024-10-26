'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  subCategory.init({
    parent_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'subCategory',
  });
  return subCategory;
};