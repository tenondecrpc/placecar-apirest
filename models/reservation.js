'use strict';
module.exports = (sequelize, DataTypes) => {
  var Reservation = sequelize.define('Reservation', {
    parkingId: {
      field: 'parking_id',
      type: DataTypes.INTEGER
    },
    userId: {
      field: 'user_id',
      type: DataTypes.INTEGER
    },
    price: DataTypes.DECIMAL,
    timeStamp: {
      field: 'time_stamp',
      type: DataTypes.NOW
    },
  }, 
  {
    timestamps: false,
    tableName: 'reservations'
  });
  Reservation.associate = function(models) {
    
  };
  return Reservation;
};