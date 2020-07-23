const axios = require('axios')
const qs = require('qs')

module.exports = async function (code) {

  try {
    const { data } = await axios({
      method: 'post',
      url: 'https://slack.com/api/oauth.v2.access',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify({
        client_id: process.env.SLACK_CLIENT_ID,
        client_secret: process.env.SLACK_CLIENT_SECRET,
        code
      })
    })

    if (data.error) {
      console.log('Slack verification failed. ' + JSON.stringify(data))
      return null
    }

    return data;
  } catch (error) {
    console.error('Slack verification failed. ' + error.message)
  }
}