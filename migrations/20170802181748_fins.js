exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('fins', function(table) {
        table.string('Model_ID').primary()
        table.string('Attachment')
        table.string('Fin_Type')
        table.string('Flexibility')
        table.string('length')
        table.string('Heel_Type')
        table.string('Class')
        table.string('Colours')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('fins')
};