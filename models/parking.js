'use strict';
module.exports = (sequelize, DataTypes) => {
  var Parking = sequelize.define('Parking', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    document: DataTypes.STRING,
    owner: DataTypes.STRING,
    cityId:  {
      field: 'city_id',
      type: DataTypes.INTEGER
    },
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING
  }, 
  {
    timestamps: false,
    tableName: 'parkings'
  });
  Parking.associate = function(models) {};
  return Parking;
};