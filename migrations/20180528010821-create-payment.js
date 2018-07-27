'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10)
      },
      reservationId: {
        field: 'reservation_id',
        allowNull: false,
        type: Sequelize.INTEGER(10)
      },
      paymentMethodId: {
        field: 'payment_method_id',
        allowNull: false,
        type: Sequelize.INTEGER(10)
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(20,2)
      },
      timeStamp: {
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
        field: 'time_stamp',
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('reservations');
  }
};