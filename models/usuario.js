'use strict';
module.exports = (sequelize, DataTypes) => {
  var Usuario = sequelize.define('Usuario', {
    usuario: DataTypes.STRING,
    email: DataTypes.STRING,
    clave: DataTypes.STRING,
    telefono: DataTypes.STRING,
    imagenUrl: {
      field: 'imagen_url',
      type: DataTypes.STRING
    },
    rol: DataTypes.INTEGER
  }, 
  {
    paranoid: false,
    underscored: true,
    tableName: 'usuarios'
  });
  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};