const express = require('express');
const symptomsController = require('./symptomsController');
const router = express.Router();

router.get('/:userId', symptomsController.getSymptomsByUserId);
router.post('/', symptomsController.createSymptom);

module.exports = router;
