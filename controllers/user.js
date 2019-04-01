const UserModel = require('../models').User

class User {
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
        password: req.body.password
      })
      .then(created => res.status(201).json(created))
      .catch(next)
  }

  static put (req, res, next) {
    UserModel
      .findByPk(req.params.id)
      .then(user => user.update({
        username: req.body.username,
        password: req.body.password
      }))
      .then(res.status(204).json)
      .catch(next)
  }

  static patch (req, res, next) {
    UserModel
      .findByPk(req.params.id)
      .then(user => user.update({
        username: req.body.username,
        password: req.body.password
      }, { fields: Object.keys(req.body) }))
      .then(res.status(204).json)
      .catch(next)
  }

  static remove (req, res, next) {
    UserModel
      .findByPk(req.params.id)
      .then(user => user.destroy())
      .then(res.status(204).json)
      .catch(next)
  }
}

module.exports = User