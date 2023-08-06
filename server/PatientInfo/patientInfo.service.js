
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
    return { name: createdUser.name, age: createdUser.age, ...createdUser };
  } catch (error) {
    console.error('Detailed error', error);
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


const createPrimaryConcern = async (userId, primaryConcernData) => {
  try {
    const dataToInsert = {
      user_id: userId,
      // Other fields from primaryConcernData
    };
    const [createdPrimaryConcern] = await knex('primary_concerns').insert(dataToInsert).returning('*');
    return createdPrimaryConcern;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create primary concern');
  }
};

const getPrimaryConcernsByUserId = async (userId) => {
  try {
    const primaryConcerns = await knex('primary_concerns').where('user_id', userId).select('*');
    return primaryConcerns;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch primary concerns');
  }
};



module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  createPrimaryConcern,
  getPrimaryConcernsByUserId,
};
