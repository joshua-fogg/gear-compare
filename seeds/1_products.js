
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, colName: 'Masks'},
        {id: 2, colName: 'Fins'},
        {id: 3, colName: 'Tanks'}
      ]);
    });
};
