'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('parkings_images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10),
      },
      parkingId: {
        field: 'parking_id',
        type: Sequelize.INTEGER(10),
      },
      imageUrl: {
        field: 'image_url',
        type: Sequelize.TEXT('long'),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('parkings_images');
  }
};