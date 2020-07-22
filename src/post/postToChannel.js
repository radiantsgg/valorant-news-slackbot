const axios = require('axios')

/**
 * 
 * @param {String} title Article title
 * @param {String} description Article description
 * @param {String} bannerUrl Uniform Resource Locator for banner image
 * @param {String} url Uniform Resource Locator for article
 * @param {String} tags Comma seperated values recommended
 * @returns null
 */
module.exports = async function ({
  title,
  description,
  bannerUrl,
  url,
  tags
}) {
  
  try {
    await axios({
      url: process.env.SLACK_WEBHOOK,
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
  } catch (error) {
    console.error('Failed to post to Slack channel. ' + error.message)
  }
}
  