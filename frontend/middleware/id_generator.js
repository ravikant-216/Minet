const { v4 } = require('uuid')

module.exports = (req, _, next) => {
  if (req.method === 'POST') {
    req.body.id = v4()
  }
  next()
}
