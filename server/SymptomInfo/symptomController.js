const symptomsService = require('./symptomsService');

const getSymptomsByUserId = async (req, res) => {
   try{
    const userId = req.params.userId;
    const symptoms = await symptomsService.getSymptomsByUserId(userId);
    if(!symptoms.length) throw new Error('No symptoms found for this user');
    res.json(symptoms);
   } catch(err){
    next(err);
   }
};

const createSymptom = async (req, res) => {
    try{
    const newSymptom = req.body;
    const createdSymptom = await symptomsService.createSymptom(newSymptom);
    if(!createdSymptom) throw new Error('Could not create symptom');
    res.json(createdSymptom);
    } catch (err){
        next(err);
    }
};

module.exports = {
    getSymptomsByUserId,
    createSymptom
};
