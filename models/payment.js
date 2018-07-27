'use strict';
module.exports = (sequelize, DataTypes) => {
  var Payment = sequelize.define('Payment', {
    reservationId: {
      field: 'reservation_id',
      type: DataTypes.INTEGER,
    },
    paymentMethodId: {
      field: 'payment_method_id',
      type: DataTypes.INTEGER,
    },
    price: DataTypes.DECIMAL,
    timeStamp: {
      field: 'time_stamp',
      type: DataTypes.DATE,
    }
  }, 
  {
    timestamps: false,
    tableName: 'payments',
  });
  Payment.associate = function(models) {};
  return Payment;
};