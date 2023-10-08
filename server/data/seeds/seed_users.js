/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com', password: 'johnsSecurePassword123' },
        { first_name: 'Jane', last_name: 'Smith', email: 'jane.smith@example.com', password: 'janesSecurePassword123' },
        { first_name: 'Bob', last_name: 'Brown', email: 'bob.brown@example.com', password: 'bobsSecurePassword123' },
        { first_name: 'Alice', last_name: 'Johnson', email: 'alice.johnson@example.com', password: 'alicesSecurePassword123' },
        { first_name: 'Robert', last_name: 'Miller', email: 'robert.miller@example.com', password: 'robertsSecurePassword123' },
        { first_name: 'Ella', last_name: 'Davis', email: 'ella.davis@example.com', password: 'ellasSecurePassword123' },
        { first_name: 'Michael', last_name: 'Garcia', email: 'michael.garcia@example.com', password: 'michaelsSecurePassword123' },
        { first_name: 'Sophia', last_name: 'Rodriguez', email: 'sophia.rodriguez@example.com', password: 'sophiasSecurePassword123' },
        { first_name: 'William', last_name: 'Martinez', email: 'william.martinez@example.com', password: 'williamsSecurePassword123' },
        { first_name: 'Olivia', last_name: 'Lopez', email: 'olivia.lopez@example.com', password: 'oliviasSecurePassword123' },
      ]);
    });
};

