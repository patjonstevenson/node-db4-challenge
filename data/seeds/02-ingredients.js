
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'flour' },
        { name: 'salt' },
        { name: 'water' },
        { name: 'yeast' }
      ]);
    });
};
