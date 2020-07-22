const knex = require('../connect')

module.exports = async function (post) {
  await knex('post').insert({ 
    source_id: post.id,
    title: post.title,
    description: post.description,
    url: post.url,
    banner_url: post.bannerUrl,
    tags: post.tags
  })
}