const init = require('./src/index')

exports.valorantNewsSlackBot = (req, res) => {
  init()
  res.sendStatus(200)
}
