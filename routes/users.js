const routes = require('express').Router()
const { User } = require('../controllers')

routes.get('/', User.list)
routes.get('/:id', User.get)
routes.post('/', User.create)
routes.put('/:id', User.put)
routes.patch('/:id', User.patch)
routes.delete('/:id', User.remove)

module.exports = routes