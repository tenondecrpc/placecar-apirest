'use strict';
module.exports = (sequelize, DataTypes) => {
  var ParkingPrice = sequelize.define('ParkingPrice', {
    parkingId: {
      field: 'parking_id',
      type: DataTypes.INTEGER
    },
    price: DataTypes.DECIMAL,
    quantityHour: {
      field: 'quantity_hour',
      type: DataTypes.DECIMAL
    }
  }, 
  {
    timestamps: false,
    tableName: 'parkings_prices'
  });
  ParkingPrice.associate = function(models) {};
  return ParkingPrice;
};