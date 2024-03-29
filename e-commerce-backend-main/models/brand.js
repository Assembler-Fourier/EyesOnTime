const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Brand extends Model {}

Brand.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    brand_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'brand',
  }
);

module.exports = Brand;
