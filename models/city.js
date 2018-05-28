'use strict';
module.exports = (sequelize, DataTypes) => {
  var City = sequelize.define('City', {
    name: DataTypes.STRING
  }, 
  {
    timestamps: false,
    tableName: 'cities'
  });
  City.associate = function(models) {};
  return City;
};