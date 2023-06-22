
const knex = require('../config/database');

const getAllUsers = async () => {
  try {
    
    const users = await knex('users').select('*');
    return users;
  } catch (error) {

    throw new Error('Failed to fetch users');
  }
};

const createUser = async (userData) => {
  try {
    console.log('userData');
    const [createdUser] = await knex('users').insert(userData).returning('*');
    return createdUser;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create user');
  }
};

const getUserById = async (userId) => {
  try {
    
    const user = await knex('users').where('id', userId).first();
    return user;
  } catch (error) {
  
    throw new Error('Failed to fetch user');
  }
};

const updateUser = async (userId, updatedUserData) => {
  try {
    
    const [updatedUser] = await knex('users').where('id', userId).update(updatedUserData).returning('*');
    return updatedUser;
  } catch (error) {
   
    throw new Error('Failed to update user');
  }
};

const deleteUser = async (userId) => {
  try {
    
    await knex('users').where('id', userId).del();
  } catch (error) {
    
    throw new Error('Failed to delete user');
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
