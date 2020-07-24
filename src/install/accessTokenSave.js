const knex = require('../../database/connect')

module.exports = async function (tokenResponse) {

  try {
    const payload = {
      app_id: tokenResponse.app_id,
      scope: tokenResponse.scope,
      team_id: tokenResponse.team.id,
      team_name: tokenResponse.team.name,
      // Token
      access_token: tokenResponse.access_token,
      token_type: tokenResponse.token_type,
      // Webhook information
      incoming_webhook_url: tokenResponse.incoming_webhook.url,
      incoming_webhook_channel: tokenResponse.incoming_webhook.channel,
      incoming_webhook_channel_id: tokenResponse.incoming_webhook.channel_id,
      incoming_webhook_configuration_url: tokenResponse.incoming_webhook.configuration_url,
      // Bot Information
      bot_user_id: tokenResponse.bot_user_id
    }

    const result = await knex('channel').where('incoming_webhook_channel_id', tokenResponse.incoming_webhook.channel_id)

    // If channel already connected to ReconBot we update existing data
    if (result.length) {
      await knex('channel')
        .where('incoming_webhook_channel_id', tokenResponse.incoming_webhook.channel_id)
        .update({ ...payload, 'is_active': true })
    } else {
      await knex('channel').insert(payload)
    }

    return true
  } catch (error) {
    console.error('Failed to save token information. ' + error.message)
    return false
  }
}
