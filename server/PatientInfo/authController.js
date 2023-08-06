const userService = require('./patientInfo.service');

const register = async (req, res, next) => {
  console.log("Received registration request for:", req.body);
  try {
    const { name, email, password } = req.body;
    const userData = { name, email, password };

    const createdUser = await userService.createUser(userData);

    res.status(201).json({ message: 'Registration successful', user: { name: createdUser.name, age: createdUser.age } });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
    next(error);
  }
};

module.exports = {
  register,
};
