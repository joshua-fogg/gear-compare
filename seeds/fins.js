exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('table_name').del()
        .then(function() {
            // Inserts seed entries
            return knex('table_name').insert([
                { Model_Id: 'Bio Fin', Variation: 'High Torque', Attachment: 'Spring Strap', Type: '1', colName: 'rowValue1', Model_Id: '1', colName: 'rowValue1' },
                { id: 2, colName: 'rowValue2' },
                { id: 3, colName: 'rowValue3' }
            ]);
        });
};


// Model_I = primary
// Variation = 
// Attachment = Closed Heel, Open Heel Spring Strap, Open Heel, Clip-In
//         table.string('Type')  = Blade, Split Fin, 
//          
//         table.string('Class') = Innovative (Nova / Slingshot), Colourful, Freediving, Turtle Fins,  Snorkelling
//         table.string('Colours') = 1, <3, <7, <10

// Brian Lonsdorf