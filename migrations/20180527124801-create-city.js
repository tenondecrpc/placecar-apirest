'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10),
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cities');
  }
};