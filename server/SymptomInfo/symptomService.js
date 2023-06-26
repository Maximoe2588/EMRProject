const db = require('./database');

const getSymptomsByUserId = async (userId) => {
    return db('symptoms').where('user_id', userId);
};

const createSymptom = async (newSymptom) => {
    return db('symptoms').insert(newSymptom).returning('*');
};

module.exports = {
    getSymptomsByUserId,
    createSymptom
};
