const knex = require('../../database/connect')

module.exports = async function () {
  try {
    return await knex('channel').where('is_active', true)
  } catch (error) {
    console.error('Failed to get channels. ' + error.message)
    return []
  }
}