'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
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
      email: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true
      },
      photoUrl: {
        field: "photo_url",
        type: Sequelize.STRING(255),
      },
      role: {
        defaultValue: 1,
        type: Sequelize.INTEGER(10),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};