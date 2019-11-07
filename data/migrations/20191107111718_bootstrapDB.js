
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('name', 255).notNullable();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('name', 255).notNullable();
        })
        .createTable('recipe_ingredients', tbl => {
            tbl.increments();
            tbl.string('quantity', 255).notNullable();
            tbl
                .integer('recipe_id')
                .unsigned()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl
                .integer('ingredient_id')
                .unsigned()
                .references('id')
                .inTable('ingredients')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        .createTable('steps', tbl => {
            tbl.increments();
            tbl.string('instructions', 1048);
            tbl.integer('step_number').unsigned();
            tbl
                .integer('recipe_id')
                .unsigned()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        });
};

exports.down = function (knex) {
    knex.schema.dropTable('steps');
    knex.schema.dropTable('recipe_ingredients');
    knex.schema.dropTable('ingredients');
    knex.schema.dropTable('recipe');
};
