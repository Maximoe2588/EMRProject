/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { name: 'John Doe', email: 'john@example.com' },
        { name: 'Jane Smith', email: 'jane@example.com' },
        { name: 'Michael Johnson', email: 'michael@example.com' },
        { name: 'Emily Brown', email: 'emily@example.com' },
        { name: 'David Wilson', email: 'david@example.com' },
        { name: 'Sarah Davis', email: 'sarah@example.com' },
        { name: 'Christopher Taylor', email: 'christopher@example.com' },
        { name: 'Olivia Anderson', email: 'olivia@example.com' },
        { name: 'Daniel Martinez', email: 'daniel@example.com' },
        { name: 'Sophia Hernandez', email: 'sophia@example.com' }
      ]);
    });
};

