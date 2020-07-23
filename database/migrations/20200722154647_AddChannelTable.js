
exports.up = function(knex) {
    return knex.schema.createTable('channel', function(table) {
        table.increments();
        table.string('app_id').notNullable();
        table.string('scope').notNullable();
        table.string('team_id').notNullable();
        table.string('team_name').notNullable();
        table.string('access_token').notNullable();
        table.string('token_type').notNullable();
        table.string('incoming_webhook_url').notNullable();
        table.string('incoming_webhook_channel').notNullable();
        table.string('incoming_webhook_channel_id').notNullable();
        table.string('incoming_webhook_configuration_url').notNullable();
        table.string('bot_user_id').notNullable();
        table.boolean('is_active').defaultTo(true).notNullable();
      })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('channel');
  };
