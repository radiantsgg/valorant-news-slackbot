const axios = require('axios')

const accessTokenRetrieve = require('./accessTokenRetrieve')
const accessTokenSave = require('./accessTokenSave')

module.exports = async function (req, res) {
  if (req.query.error) {
    console.info('Install request denied. ' + req.query.error);
    res.sendStatus(400)
  }

  // Temporary verification code
  const code = req.query.code;

  if (!code) {
    return res.status(400).send('Missing verification code');
  }

  // Get OAuth information
  const tokenResponse = await accessTokenRetrieve(code)

  if (!tokenResponse) {
    return res.status(400).send('Failed to retrieve OAuth information');
  }

  // Save/Update OAuth information
  const result = await accessTokenSave(tokenResponse);

  if (!result) {
    return res.status(500)
  }

  return res.sendStatus(200)
}