

exports.up = function(knex) {
    return knex.schema.createTable('post_failure', function(table) {
        table.increments();
        table.string('post_id').notNullable();
        table.string('channel_id').notNullable();
        table.dateTime('created_at').notNullable();
      })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('post_failure');
  };
