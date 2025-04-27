'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Legend extends Model {
    static associate(models) {
      // Definir asociaciones aquí
    }
  }
  Legend.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['activo', 'retirado']]
      }
    },
    last_club: DataTypes.STRING,
    titles_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    goals_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    ballon_dors: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    world_cups: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Legend',
    tableName: 'Legends',
    timestamps: true
  });
  return Legend;
};
