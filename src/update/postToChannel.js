const axios = require('axios')

module.exports = async function ({ incoming_webhook_url }, {
  title,
  description,
  bannerUrl,
  url,
  tags
}) {
  try {
    await axios({
      url: incoming_webhook_url,
      method: 'post',
      data: {
        text: title,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: url
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*${title}* \n ${description}`
            },
            accessory: {
              type: "image",
              image_url: bannerUrl,
              alt_text: "Article banner"
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `_tags: ${tags}_`
            }
          },
        ]
      }
    })
    return true
  } catch (error) {
    console.error('Failed to post to Slack channel. ' + error.message)
    return false
  }
}
  