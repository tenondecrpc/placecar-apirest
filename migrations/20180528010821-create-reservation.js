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
      parkingId: {
        field: 'parking_id',
        allowNull: false,
        type: Sequelize.INTEGER(10)
      },
      userId: {
        field: "user_id",
        allowNull: false,
        type: Sequelize.INTEGER(10)
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(20,2)
      },
      timeStamp: {
        field: 'time_stamp',
        type: Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('reservations');
  }
};