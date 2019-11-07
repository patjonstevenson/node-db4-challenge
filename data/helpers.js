const db = require("./db-config");

const helpers = {
    getRecipes: () => db('recipes').select('*'),

    getShoppingList: recipe_id => db('recipe_ingredients as r')
        .join('ingredients as i', 'r.ingredient_id', '=', 'i.id')
        .select('i.name', 'r.quantity')
        .where({ recipe_id }),

    getInstructions: recipe_id => db('steps as s')
        .select('s.step_number', 's.instructions')
        .where({ recipe_id })
        .orderBy('step_number')
};

module.exports = helpers;