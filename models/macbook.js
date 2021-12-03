'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Macbook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Macbook.init({
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    color: DataTypes.STRING,
    price: {
      type: DataTypes.INTEGER,
      validate: { isInt: { msg: 'Must be integer' } }
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    productInfo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Macbook',
  });
  return Macbook;
};