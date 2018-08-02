'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('parkings_prices', {
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
      type: {
        allowNull: false,
        type: Sequelize.INTEGER(10),
      },
      quantity: {
        allowNull: false,
        field: 'quantity',
        type: Sequelize.DECIMAL(20,2),
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(20,2),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('parkings_prices');
  }
};