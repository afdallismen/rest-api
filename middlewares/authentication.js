const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  try {
    const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch {
    res.status(400).json({ message: 'Authentication failed' })
  }
}