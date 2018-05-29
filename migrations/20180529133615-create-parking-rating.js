'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('parkings_ratings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10)
      },
      parkingId: {
        allowNull: false,
        field: 'parking_id',
        type: Sequelize.INTEGER(10)
      },
      userId: {
        allowNull: false,
        field: 'user_id',
        type: Sequelize.INTEGER(10)
      },
      rating: {
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
    return queryInterface.dropTable('parkings_ratings');
  }
};