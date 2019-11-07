
exports.up = function (knex) {
    knex.schema
        .createTable('recipes', () => {
            tbl.increments();
            tbl.string('name', 255).notNullable();
        })
        .createTable('ingredients', () => {
            tbl.increments();
            tbl.string('name', 255).notNullable();
        })
        .createTable('recipe_ingredients', () => {
            tbl.increments();
            tbl.string('quantity', 255).notNullable();
            tbl
                .integer('recipe_id')
                .unsigned()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate();
            tbl
                .integer('ingredient_id')
                .unsigned()
                .references('id')
                .inTable('ingredients')
                .onDelete('CASCADE')
                .onUpdate();
        })
        .createTable('steps', () => {
            tbl.increments();
            tbl.string('instructions', 1048);
            tbl
                .integer('recipe_id')
                .unsigned()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate();
        });
};

exports.down = function (knex) {
    knex.dropTableIfExists();
};
