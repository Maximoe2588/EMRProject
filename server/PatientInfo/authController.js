const patientInfoService = require('./patientInfo.service');




const register = async (req, res, next) => {
    try {
    
      const { name, email, password } = req.body;
  

      const newUser = await patientInfoService.createUser({ name, email, password });
  

      res.status(201).json({ message: 'Registration successful', user: newUser });
    } catch (error) {
     
      res.status(500).json({ error: 'Failed to register user' });
      next(error);
    }
  };
  module.exports = {
    register,
  };