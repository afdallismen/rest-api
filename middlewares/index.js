const authenticate = require('./authentication')
const { adminOnly, authenticated, adminAndSelf } = require('./authorization')

module.exports = {
  auth: {
    authenticate,
    adminOnly,
    adminAndSelf
  }
}