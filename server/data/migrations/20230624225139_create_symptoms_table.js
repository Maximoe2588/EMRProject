/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('symptoms', function(table) {
        table.increments();
        table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE'); 
        table.string('symptomDescription').notNullable();
        table.string('symptomLocation').notNullable();
        table.integer('symptomIntensity').notNullable();
        table.string('symptomOccurrence').notNullable();
        table.timestamps(true, true); " "
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('symptoms');
};
