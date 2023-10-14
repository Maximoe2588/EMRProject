const express = require('express');
const router = express.Router();
const patientInfoController = require('./patientInfo.controller')
const authController = require('./authController');

const bodyParser = require('body-parser');

router.use(bodyParser.json());


router.get('/users', patientInfoController.getAllUsers);
router.post('/users', patientInfoController.createUser);
router.get('/users/:id', patientInfoController.getUserById);
router.put('/users/:id', patientInfoController.updateUser);
router.delete('/users/:id', patientInfoController.deleteUser);
router.post('/register', authController.register);;
router.post('/primary-concerns', patientInfoController.createPrimaryConcern);
router.post('/login', authController.loginUser);




module.exports = router;
