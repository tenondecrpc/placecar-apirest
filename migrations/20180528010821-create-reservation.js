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
        field: 'user_id',
        allowNull: false,
        type: Sequelize.INTEGER(10)
      },
      startDate: {
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
        field: 'start_date',
        type: Sequelize.DATE
      },
      endDate: {
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
        field: 'end_date',
        type: Sequelize.DATE
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(20,2)
      },
      timeStamp: {
        allowNull: false,
        // defaultValue: Sequelize.NOW,//Bug
        defaultValue: Sequelize.fn('NOW'),//Only for MySQL
        field: 'time_stamp',
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('reservations');
  }
};