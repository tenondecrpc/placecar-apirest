'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Parkings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      description: {
        type: Sequelize.TEXT
      },
      document: {
        type: Sequelize.STRING(50)
      },
      owner: {
        type: Sequelize.STRING(50)
      },
      cityId: {
        allowNull: false,
        type: Sequelize.INTEGER(10)
      },
      latitude: {
        type: Sequelize.STRING(50)
      },
      longitude: {
        type: Sequelize.STRING(50)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Parkings');
  }
};