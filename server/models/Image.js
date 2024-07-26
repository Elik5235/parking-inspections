"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate({Protocol}) {
        Image.belongsTo(Protocol,{
            foreignKey:'protocolId'
        });
    }
  }
  Image.init(
    {
      path: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    { sequelize, modelName: "Image", tableName: "Images", underscored:true }
  );
  return Image;
};
