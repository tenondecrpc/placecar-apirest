'use strict';
module.exports = (sequelize, DataTypes) => {
  var ParkingImage = sequelize.define('ParkingImage', {
    parkingId: {
      field: 'parking_id',
      type: DataTypes.INTEGER,
    },
    imageUrl: {
      field: 'image_url',
      type: DataTypes.TEXT,
    }
  },   
  {
    timestamps: false,
    tableName: 'parkings_images',
  });
  ParkingImage.associate = function(models) {};
  return ParkingImage;
};