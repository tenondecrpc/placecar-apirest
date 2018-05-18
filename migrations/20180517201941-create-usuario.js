'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuario: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      clave: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      imagenUrl: {
        field: "imagen_url",
        type: Sequelize.STRING
      },
      rol: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        field: "create_at",
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        field: "update_at",
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios');
  }
};