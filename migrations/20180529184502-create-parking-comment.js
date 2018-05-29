'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('parkings_comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10),
      },
      parkingId: {
        allowNull: false,
        field: 'parking_id',
        type: Sequelize.INTEGER(10),
      },
      userId: {
        allowNull: false,
        field: 'user_id',
        type: Sequelize.INTEGER(10),
      },
      comment: {
        allowNull: false,
        type: Sequelize.TEXT('long'),
      },
      timeStamp: {
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
        field: 'time_stamp',
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('parkings_comments');
  }
};