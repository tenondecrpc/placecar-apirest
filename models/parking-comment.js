'use strict';
module.exports = (sequelize, DataTypes) => {
  var ParkingComment = sequelize.define('ParkingComment', {
    parkingId: {
      field: 'parking_id',
      type: DataTypes.INTEGER,
    },
    userId: {
      field: 'user_id',
      type: DataTypes.INTEGER,
    },
    comment: DataTypes.TEXT,
    timeStamp: {
      field: 'time_stamp',
      type: DataTypes.DATE,
    }
  }, 
  {
    timestamps: false,
    tableName: 'parkings_comments',
  });
  ParkingComment.associate = function(models) {};
  return ParkingComment;
};