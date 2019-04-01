const routes = require('express').Router()
const { User } = require('../controllers')
const { auth } = require('../middlewares')

routes.post('/signup', User.create)
routes.post('/signin', User.signin)
routes.use('/users', auth.authenticate, require('./users'))

module.exports = routes