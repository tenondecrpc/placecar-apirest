'use strict';
module.exports = (sequelize, DataTypes) => {
  var Parking = sequelize.define('Parking', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    document: DataTypes.STRING,
    owner: DataTypes.STRING,
    photoUrl: {
      field: 'photo_url',
      type: DataTypes.TEXT,
    },
    cityId:  {
      field: 'city_id',
      type: DataTypes.INTEGER,
    },
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
  }, 
  {
    timestamps: false,
    tableName: 'parkings',
  });
  Parking.associate = function(models) {
    // Parking.hasMany(models.ParkingImage, { 
    //   through: 'ParkingImage',
    //   foreignKey: 'parking_id'
    //  })
  };
  return Parking;
};