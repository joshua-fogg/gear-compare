exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('masks', function(table) {
        table.string('Model_ID').primary()
        table.string('Lense')
        table.string('Frame')
        table.string('Skirt')
        table.string('Mask_Volume')
        table.string('Buckels')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('masks')
};