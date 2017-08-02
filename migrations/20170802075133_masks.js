exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('masks', function(table) {
        table.increments('id')
        table.string('model_id')
        table.string('lense')
        table.string('frame')
        table.string('lense_material')
        table.string('skirt')
        table.string('mask_volume')
        table.string('buckels')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('masks')
};