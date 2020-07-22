const knex = require('../connect')

async function findPost(id) {
  return await knex('post').where('source_id', id)
}

module.exports = async function (posts) {
  let newPosts = []

  for (const post of posts) {
    const result = await findPost(post.id)
    if (!result.length) {
      newPosts.push(post)
    }
  }

  return newPosts
}