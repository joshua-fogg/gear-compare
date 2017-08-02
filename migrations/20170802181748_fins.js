exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('fins', function(table) {
        table.string('prod_number').primary()
        table.string('brand')
        table.string('model')
        table.string('make')
        table.string('heel_type')
        table.string('fin_type')
        table.string('class')
        table.string('colours')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('fins')
};