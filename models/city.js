'use strict';
module.exports = (sequelize, DataTypes) => {
  var City = sequelize.define('City', {
    name: DataTypes.STRING
  }, 
  {
    timestamps: false,
    // paranoid: false,
    // underscored: true,
    tableName: 'cities'
  });
  City.associate = function(models) {
    // associations can be defined here
  };
  return City;
};