'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      afterValidate: function (user, options) {
        user.password = bcrypt.hashSync(user.password, 10)
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };

  User.prototype.validatePassword = function (input) {
    return bcrypt.compareSync(input, this.password)
  }
  
  return User;
};