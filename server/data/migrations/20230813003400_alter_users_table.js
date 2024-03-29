/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex('users').del()
    .then(() => {
        return knex.schema.alterTable('users', function(table) {
            table.string('first_name').notNullable();
            table.string('last_name').notNullable();
        });
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex) {
    return knex.schema.alterTable('users', function(table) {
        table.dropColumn('first_name');
        table.dropColumn('last_name');
    });
};

