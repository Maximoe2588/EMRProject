const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const router = require('./PatientInfo/patientInfo.router');


const app = express();

app.use(cors({
  origin: 'http://localhost:3001', 
}));

app.use(morgan('combined'));


app.use(express.json()); 
app.use('/api', router); 


module.exports = app;

