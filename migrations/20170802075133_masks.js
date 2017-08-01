exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('masks', function(table) {
        table.string('model_id').primary()
        table.string('lense_type')
        table.string('mask_profile')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('masks')
};