function unauthorizedAccess(res) {
  res.status(401).json({ message: 'Unauthorized' })
}

module.exports = {
  adminOnly: (req, res, next) => {
    if (req.user.role === 'admin') {
      next()
    } else {
      unauthorizedAccess(res)
    }
  },
  adminAndSelf: (req, res, next) => {
    if (req.user.role === 'admin' || req.user.id === req.params.id) {
      next()
    } else {
      unauthorizedAccess(res)
    }
  }
}