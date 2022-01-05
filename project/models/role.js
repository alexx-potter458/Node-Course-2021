'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {

    static associate(models) {
      // define association here
      models.Role.hasMany(models.User);
    }
  };
  Role.init({
    name: DataTypes.STRING,
    permissions: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
    timestamps: false,

  });
  return Role;
};