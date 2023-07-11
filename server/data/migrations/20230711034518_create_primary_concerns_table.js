/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {return knex.schema.createTable('primary_concerns', function (table) {
    table.increments('id').primary();
    table.string('concern').notNullable();
    table.string('symptom').notNullable();
 
    table.timestamps(true, true);
  });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('primary_concerns');
};
