exports.up = (knex) => {
  return knex.schema.createTable('images', (table) => {
    table.increments();
    table.string('url');
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.dropTable('posts');
};
