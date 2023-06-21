const express = require('express');
const router = express.Router();
const patientInfoController = require('./patientInfo.controller')


router.get('/', patientInfoController.getAllPatientInfo);
router.post('/', patientInfoController.createPatientInfo);
router.get('/:id', patientInfoController.getPatientInfoById);
router.put('/:id', patientInfoController.updatePatientInfo);
router.delete('/:id', patientInfoController.deletePatientInfo);
router.post('/register', patientInfoController.register);


module.exports = router;
