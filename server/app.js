const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const router = require('./PatientInfo/patientInfo.router');


const app = express();

app.use(cors());

app.use(morgan('combined'));


app.use(express.json()); 
app.use('/api', router); 

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
      message: 'An unexpected error occurred'
  });
});



module.exports = app;

