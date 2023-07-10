const userService = require('./patientInfo.service');

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch patient information' });
      
  }
};


const createUser = async (req, res, next) => {
  const userData = req.body;
  try {
    const createdUser = await userService.createUser(userData);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create patient information' });
    next(error);
  }
};


const getUserById = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await userService.getUserById(userId);
    if (user) {
      res.json(user);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch patient information' });
    next(error);
  }
};


const updateUser = async (req, res, next) => {
  const userId = req.params.id;
  const updatedUserData = req.body;
  try {
    const updatedUser = await userService.updateUser(userId, updatedUserData);
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update patient information' });
  }
    next(error);
  };



const deleteUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    await userService.deleteUser(userId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete patient information' });
  }
};

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const userData = { name, email, password };

    const createdUser = await userService.createUser(userData);

    res.status(201).json({ message: 'Registration successful', user: { name: createdUser.name, age: createdUser.age },
  });
 } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
    next(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  register,
};
