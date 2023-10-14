const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userService = require('./patientInfo.service');

const register = async (req, res, next) => {
  console.log("Received registration request for:", req.body);
  try {
    const { first_name, last_name, email, password } = req.body;


    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userData = { first_name, last_name, email, password: hashedPassword };

    const createdUser = await userService.createUser(userData);

    res.status(201).json({ message: 'Registration successful', user: { first_name: createdUser.first_name, last_name: createdUser.last_name, age: createdUser.age } });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
      const { email, password } = req.body;

      console.log('Received login request:', { email, password });

      const user = await userService.getUserByEmail(email); 

      console.log("Queried user:", user);

      if (!user) {
        return res.status(401).json({ error: 'Authentication failed. User not found.' });
    }

      
      const isPasswordValid = await bcrypt.compare(password, user.password);
      console.log("Password validity:", isPasswordValid);


     
      if (!isPasswordValid) {
          return res.status(401).json({ error: 'Authentication failed. Wrong password.' });
      }
      
      console.log("JWT data:", { userId: user.id, email: user.email });

      console.log("JWT Secret:", process.env.JWT_SECRET);

      const token = jwt.sign(
          { userId: user.id, email: user.email },
          process.env.JWT_SECRET, 
          { expiresIn: '1h' }
      );

      console.log("Generated JWT:", token);
    


      res.json({ token, 
        userId: user.id, 
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name 
      });

  } catch (error) {
    console.error(error); 
      res.status(500).json({ error: 'Login failed.' });
      
  }
};


module.exports = {
  register,
  loginUser,
};
