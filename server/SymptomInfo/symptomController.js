const symptomsService = require('./symptomsService');

const getSymptomsByUserId = async (req, res) => {
    const userId = req.params.userId;
    const symptoms = await symptomsService.getSymptomsByUserId(userId);
    res.json(symptoms);
};

const createSymptom = async (req, res) => {
    const newSymptom = req.body;
    const createdSymptom = await symptomsService.createSymptom(newSymptom);
    res.json(createdSymptom);
};

module.exports = {
    getSymptomsByUserId,
    createSymptom
};
