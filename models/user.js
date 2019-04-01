'use strict';
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeSave: function (user, options) {
        console.log(user)
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
    console.log(this.password)
    return bcrypt.compareSync(input, this.password)
  }
  
  return User;
};