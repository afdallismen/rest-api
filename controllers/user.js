const jwt = require('jsonwebtoken')
const UserModel = require('../models').User

class User {
  static signin (req, res, next) {
    UserModel
      .findOne({
        where: {
          username: req.body.username
        }
      })
      .then(user => {
        if (user && user.validatePassword(req.body.password)) {
          const token = jwt.sign({
            id: user.id,
            username: user.username,
            role: user.role
          }, process.env.JWT_SECRET)

          res.status(200).json({ token })
        } else {
          res.status(402).json({ message: 'Username/password is wrong' })
        }
      })
      .catch(next)
  }

  static list (req, res, next) {
    UserModel
      .findAll()
      .then(users => res.status(200).json(users))
      .catch(next)
  }

  static get (req, res, next) {
    UserModel
      .findByPk(req.params.id)
      .then(user => res.status(200).json(user))
      .catch(next)
  }

  static create (req, res, next) {
    UserModel
      .create({
        username: req.body.username,
        password: req.body.password,
        role: !req.user ? 'basic' : req.body.role
      })
      .then(created => res.status(201).json(created))
      .catch(next)
  }

  static put (req, res, next) {
    UserModel
      .findByPk(req.params.id)
      .then(user => user.update({
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
      }))
      .then(_ => res.status(204).json())
      .catch(next)
  }

  static patch (req, res, next) {
    UserModel
      .findByPk(req.params.id)
      .then(user => user.update({
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
      }, { fields: Object.keys(req.body) }))
      .then(_ => res.status(204).json())
      .catch(next)
  }

  static remove (req, res, next) {
    UserModel
      .findByPk(req.params.id)
      .then(user => user.destroy())
      .then(_ => res.status(204).json())
      .catch(next)
  }
}

module.exports = User