const knex = require('../config/database');
const patientInfoService = require('./patientInfo.service');

const createUser = async (userData) => {
    try {
        const createdUser = await patientInfoService.createUser(userData);
        return createdUser;
      } catch (error) {
        throw new Error('Failed to create user');
      }
    };



module.exports = {
  createUser,
};
