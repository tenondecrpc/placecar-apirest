'use strict';
module.exports = (sequelize, DataTypes) => {
  var ParkingRating = sequelize.define('ParkingRating', {
    parkingId: {
      field: 'parking_id',
      type: DataTypes.INTEGER
    },
    userId: {
      field: 'user_id',
      type: DataTypes.INTEGER
    },
    rating: DataTypes.DECIMAL,
    timeStamp: {
      field: 'time_stamp',
      type: DataTypes.DATE
    }
  }, 
  {
    timestamps: false,
    tableName: 'parkings_ratings'
  });
  ParkingRating.associate = function(models) {};
  return ParkingRating;
};