const postFetch = require('./postFetch')
const postNoveltyCheck = require('./postNoveltyCheck')
const postToChannel = require('./postToChannel')
const postHandleFailed = require('./postHandleFailed')
const getChannels = require('./getChannels')


module.exports = async function (req, res) {
  // Fetch lastest posts
  const posts = await postFetch()

  // Make sure posts are new
  const newPosts = await postNoveltyCheck(posts)

  // Get all channels the bot can post too
  const channels = await getChannels();

  // Ship the posts to slack!
  for (const post of newPosts) {
    for (const channel of channels) {
      const result = await postToChannel(channel, post)

      // Failed to post
      if (!result) {
        await postHandleFailed(channel, post)
      }
    }
  }

  return res.sendStatus(200)
}