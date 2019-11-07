
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { instructions: 'Mix ingredients in a bowl, knead, and let sit for 1 to 2 hours, or until risen' },
        { instructions: 'Preheat oven to 375 degrees F' },
        { instructions: 'Bake until golden brown' }
      ]);
    });
};
