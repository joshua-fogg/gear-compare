
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('products', function (table) {
    table.increments('id')
    table.string('product_number')
    table.string('manufacturer')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('products')
}
