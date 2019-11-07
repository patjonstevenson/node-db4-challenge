
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        { recipe_id: 1, ingredient_id: 1, quantity: '6 1/2 cups' },
        { recipe_id: 1, ingredient_id: 2, quantity: '1 tablespoon' },
        { recipe_id: 1, ingredient_id: 3, quantity: '2 1/4 cups' },
        { recipe_id: 1, ingredient_id: 4, quantity: '1/4 ounce' }
      ]);
    });
};
