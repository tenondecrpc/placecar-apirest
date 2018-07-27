'use strict';
module.exports = (sequelize, DataTypes) => {
  var ParkingPrice = sequelize.define('ParkingPrice', {
    parkingId: {
      field: 'parking_id',
      type: DataTypes.INTEGER,
    },
    price: DataTypes.DECIMAL,
    type: DataTypes.STRING,//REVISAR IMPACTO (HORA, DIA, SEMANA, QUINCENAL, MES, Anho)
    quantity: {
      field: 'quantity',
      type: DataTypes.DECIMAL,
    }
  }, 
  {
    timestamps: false,
    tableName: 'parkings_prices',
  });
  ParkingPrice.associate = function(models) {};
  return ParkingPrice;
};