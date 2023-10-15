require('dotenv').config({ path: '../.env' });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./PatientInfo/patientInfo.router');


const app = express();


app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json()); 
app.use('/api', router); 

app.use((err, req, res, next) => {
  const status = err.status || 500;
    res.status(status).json({
        message: err.message || 'An unexpected error occurred'
  });
});

module.exports = app;

