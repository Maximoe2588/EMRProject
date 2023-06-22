const express = require('express');
const router = express.Router();
const patientInfoController = require('./patientInfo.controller')


router.get('/', patientInfoController.getAllUsers);
router.post('/', patientInfoController.createUser);
router.get('/:id', patientInfoController.getUserById);
router.put('/:id', patientInfoController.updateUser);
router.delete('/:id', patientInfoController.deleteUser);
router.post('/register', patientInfoController.register);


module.exports = router;
