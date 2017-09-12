
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('features', function (table) {
    table.increments('id')
    table.string('name')
    table.string('description')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('features')
}
