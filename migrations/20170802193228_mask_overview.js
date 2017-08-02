exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('mask_overview', function(table) {
        table.increment('id').primary()
        table.string('feature_name')
        table.string('feature_description')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('mask_overview')
};