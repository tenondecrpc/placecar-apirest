'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    photoUrl: {
      field: 'photo_url',
      type: DataTypes.STRING
    },
    role: DataTypes.INTEGER
  }, 
  {
    timestamps: false,
    // paranoid: false,
    // underscored: true,
    tableName: 'users'
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};