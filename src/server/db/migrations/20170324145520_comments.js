
exports.up = function up(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table.text('body');
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function down(knex) {
  return knex.dropTable('comments');
};
