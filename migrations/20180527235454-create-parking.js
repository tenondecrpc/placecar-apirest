'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('parkings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10),
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      description: {
        type: Sequelize.TEXT('long'),
      },
      document: {
        type: Sequelize.STRING(50),
      },
      owner: {
        type: Sequelize.STRING(50),
      },
      photoUrl: {
        field: 'photo_url',
        type: Sequelize.TEXT('long'),
      },
      cityId: {
        allowNull: false,
        field: 'city_id',
        type: Sequelize.INTEGER(10),
      },
      latitude: {
        type: Sequelize.STRING(50),
      },
      longitude: {
        type: Sequelize.STRING(50),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('parkings');
  }
};