
exports.up = (knex) => {
  return knex.schema.createTable('posts', (table) => {
    table.increments();
    table.string('title');
    table.text('body');
    table.string('image');
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.dropTable('posts');
};
