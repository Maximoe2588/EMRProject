const express = require('express');
const router = express.Router();
const patientInfoController = require('./patientInfo.controller')


router.get('/users', patientInfoController.getAllUsers);
router.post('/users', patientInfoController.createUser);
router.get('/users/:id', patientInfoController.getUserById);
router.put('/users/:id', patientInfoController.updateUser);
router.delete('/users/:id', patientInfoController.deleteUser);
router.post('/register', patientInfoController.register);


module.exports = router;
