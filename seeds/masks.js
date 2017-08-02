exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('masks').del()
        .then(function() {
            // Inserts seed entries
            return knex('table_name').insert([
                { Model_ID: '1azx-Aql', Lense: 'Single', Frame: 'Plastic', Glass: 'Tempered', Skirt: 'Signle', Mask_Volume: 'Medium', Buckels: 'Cervical joint' },
                { Model_ID: '2azy-mare', Lense: 'Double', Frame: 'Plastic', Glass: 'Normal', Skirt: 'Single', Mask_Volume: 'Low', Buckels: 'Hard Buckel' },
                { Model_ID: '23a-apex', Lense: 'Single', Frame: 'Metal', Glass: 'Plastic', Skirt: 'Single', Mask_Volume: 'High', Buckels: 'Cervical' },
            ]);
        });
};
// 'Model_ID' = primary, Product Code
// string('Lense') = Single, Double
// string('Frame') = Frameless, Plastic, Metal
// string('Skirt') = Single, Double
// string('Mask_Volume') = High, Medium, Low
// string('Buckels') = Cervical Joint, Hard buckle,