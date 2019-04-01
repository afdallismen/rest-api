'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeSave: function (user, options) {
        if (Object.keys(user._changed).includes('password') || user.isNewRecord) {
          user.password = bcrypt.hashSync(user.password, 10)
        }
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