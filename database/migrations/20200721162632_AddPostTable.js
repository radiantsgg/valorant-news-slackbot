
exports.up = function(knex) {
    return knex.schema.createTable('post', function(table) {
        table.increments();
        table.string('source_id').notNullable();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('url').notNullable();
        table.string('banner_url').notNullable();
        table.string('tags').notNullable();
      })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('post');
  };