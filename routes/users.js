const routes = require('express').Router()
const { User } = require('../controllers')
const { auth } = require('../middlewares')

routes.get('/', auth.adminOnly, User.list)
routes.get('/:id', User.get)
routes.post('/', auth.adminOnly, User.create)
routes.put('/:id', auth.adminAndSelf, User.put)
routes.patch('/:id', auth.adminAndSelf, User.patch)
routes.delete('/:id', auth.adminOnly, User.remove)

module.exports = routes