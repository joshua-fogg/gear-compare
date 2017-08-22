exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('fins').del()
    .then(function () {
      // Inserts seed entries
      return knex('fins').insert([
        { brand: 'Apollo', make: 'Bio Fin', prod_number: '1', model: 'Pro', heel_type: 'Spring Strap', fin_type: 'Split Fin', class: '', colours: 'Black' },
        { brand: 'Apollo', make: 'Bio Fin', prod_number: '2', model: 'Ranger', heel_type: 'Spring Strap', fin_type: 'Split Fin', class: '', colours: 'Black' },
        { brand: 'Oceanic', make: 'Viper', prod_number: '3', model: 'Power Thrust', heel_type: 'Quick Release', fin_type: 'Blade', class: 'Innvoative', colours: 'Black, Blue, Neon Yellow, Red, White/pink, White/Sea Blue' },
        { brand: 'Mares', make: 'X-Stream', prod_number: '', model: '', heel_type: 'Quick Release', fin_type: 'Blade', class: 'Innovative', colours: 'Black, Blue, Pink, Red, White, Yellow' },
      ]);
    });
};

//Brand = Apollo, Oceanic, Aqualung, Mares
// Make = Prod Name
//Prod_Number = Primary
// Model = high torque, v normal
// Heel_Type = Closed Heel, Open Heel Spring Strap, Open Heel, Clip-In
// Fin_Type = Blade, Split Fin
// Class = Innovative (Nova / Slingshot), Colourful, Freediving, Turtle Fins, Snorkelling
// Colours = 1, <3, <7, <10


// Brian Lonsdorf