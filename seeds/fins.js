exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('table_name').del()
        .then(function() {
            // Inserts seed entries
            return knex('table_name').insert([
                { Model_Id: 'Bio Fin', Variation: 'Torque', Heel_Type: 'Spring Strap', Fin_Type: 'Split Fin', Class: '', Colours: 'Black' },
                { id: 2, colName: 'rowValue2' },
                { id: 3, colName: 'rowValue3' }
            ]);
        });
};


// Model_Id = primary
// Variation = high torque, v normal
// Heel_Type = Closed Heel, Open Heel Spring Strap, Open Heel, Clip-In
// Fin_Type = Blade, Split Fin
// Class = Innovative (Nova / Slingshot), Colourful, Freediving, Turtle Fins, Snorkelling
// Colours = 1, <3, <7, <10


// Brian Lonsdorf