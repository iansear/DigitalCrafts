'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    models.User.hasMany(models.Post, {as: 'posts', foreignKey: 'userid'})
  };
  return User;
};