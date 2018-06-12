'use strict';
module.exports = (sequelize, DataTypes) => {
  var City = sequelize.define('City', {
    name: DataTypes.STRING,
    photoUrl: {
      field: 'photo_url',
      type: DataTypes.TEXT,
    },
  }, 
  {
    timestamps: false,
    tableName: 'cities',
  });
  City.associate = function(models) {};
  return City;
};