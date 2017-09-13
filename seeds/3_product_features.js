exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('masks').del()
    .then(function () {
      // Inserts seed entries
      return knex('masks').insert([
        { model_id: '1azx-Aql', lense: 'Single', frame: 'Plastic', lense_material: 'Tempered', Skirt: 'Signle', mask_volume: 'Medium', buckels: 'Cervical joint' },
        { model_id: '2azy-mare', lense: 'Double', frame: 'Plastic', lense_material: 'Normal', Skirt: 'Single', mask_volume: 'Low', buckels: 'Hard Buckel' },
        { model_id: '23a-apex', lense: 'Single', frame: 'Metal', lense_material: 'Plastic', Skirt: 'Single', mask_volume: 'High', buckels: 'Cervical' },
      ]);
    });
};
// 'Model_ID' = primary, Product Code
// string('Lense') = Single, Double
// string('Frame') = Frameless, Plastic, Metal
// string('Skirt') = Single, Double
// string('Mask_Volume') = High, Medium, Low
// string('Buckels') = Cervical Joint, Hard buckle,