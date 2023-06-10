const userService = require('./patientInfo.service');

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
 
    next(error);
  }
};


const createUser = async (req, res, next) => {
  const userData = req.body;
  try {
    const createdUser = await userService.createUser(userData);
    res.status(201).json(createdUser);
  } catch (error) {
 
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
    // Handle any errors
    next(error);
  }
};


const deleteUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    await userService.deleteUser(userId);
    res.sendStatus(204);
  } catch (error) {
    
    next(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
