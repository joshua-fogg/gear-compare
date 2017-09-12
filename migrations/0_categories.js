
exports.up = function(knex, Promise) {
 return knex.schema.createTableIfNotExists('categories', function (table) {
  table.increments('id')
  table.string('categories')
 })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('categories')
};
