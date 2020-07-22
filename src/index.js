require('dotenv').config()

const fetchPosts = require('./post/postFetch')
const checkPostNovelty = require('./post/postNoveltyCheck')
const postToChannel = require('./post/postToChannel')
const postSave = require('./post/postSave')

module.exports = async function () {
  
  // Fetch lastest posts
  const posts = await fetchPosts()

  // Make sure posts are new
  const newPosts = await checkPostNovelty(posts)

  // Ship the posts to slack!
  for (const post of newPosts) {
    await postToChannel(post)
    await postSave(post)
  }
}
