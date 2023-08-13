const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userService = require('./patientInfo.service');

const register = async (req, res, next) => {
  console.log("Received registration request for:", req.body);
  try {
    const { name, email, password } = req.body;


    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userData = { name, email, password: hashedPassword };

    const createdUser = await userService.createUser(userData);

    res.status(201).json({ message: 'Registration successful', user: { name: createdUser.name, age: createdUser.age } });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
      const { email, password } = req.body;

      const user = await userService.getUserByEmail(email); 

      if (!user) {
          return res.status(401).json({ error: 'Authentication failed. User not found.' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
          return res.status(401).json({ error: 'Authentication failed. Wrong password.' });
      }

      const token = jwt.sign(
          { userId: user.id, email: user.email },
          process.env.JWT_SECRET, 
          { expiresIn: '1h' }
      );

      res.json({ token, userId: user.id, email: user.email });

  } catch (error) {
      res.status(500).json({ error: 'Login failed.' });
      next(error);
  }
};


module.exports = {
  register,
  loginUser,
};
