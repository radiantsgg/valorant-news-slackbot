const knex = require('../../database/connect')

module.exports = async function (channel, post) {
  try {
    await knex('post_failure')
      .insert({
        post_id: post.id,
        channel_id: channel.id,
        created_at: new Date()
      })

    const numberOfFailues = await knex('post_failure')
      .where('channel_id', channel.id)

    // If number the threshold return 
    if (numberOfFailues < 5) {
      return;
    }

    await knex('channel')
      .where('id', channel.id)
      .update('is_active', false)

  } catch (error) {
    console.error('Failed to save post failure information. ' + error.message)
  }
}