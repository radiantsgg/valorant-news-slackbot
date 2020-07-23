const knex = require('../../database/connect')

async function findPost(id) {
  return await knex('post').where('source_id', id)
}

module.exports = async function (posts) {
  let newPosts = []

  for (const post of posts) {
    const result = await findPost(post.id)
    
    // Already exists
    if (result.length) {
      continue;
    }
    
    try {
      const id = await knex('post')
        .returning('id')
        .insert({ 
          source_id: post.id,
          title: post.title,
          description: post.description,
          url: post.url,
          banner_url: post.bannerUrl,
          tags: post.tags
        })

      // Add to new posts
      newPosts.push({ ...post, id: id[0] })
    } catch (error) {
      console.error('Failed to save post. ' + error.message)
    }
  }

  return newPosts
}