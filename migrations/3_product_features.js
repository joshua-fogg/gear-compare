
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('product_features', function (table) {
    table.increments('id')
    table.string('product_id')
    table.string('feature_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('product_features')
}
