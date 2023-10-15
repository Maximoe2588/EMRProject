const userService = require('./patientInfo.service');
const HttpError = require('../errors/HttpError');

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    next(new HttpError(500, 'Failed to fetch patient information'));
      
  }
};


const createUser = async (req, res, next) => {
  const userData = req.body;
  try {
    const createdUser = await userService.createUser(userData);
    res.status(201).json(createdUser);
  } catch (error) {
    next(new HttpError(500, 'Failed to create patient information'));
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
    if (error instanceof HttpError) {
      next(error);
  } else {
      next(new HttpError(500, 'Failed to fetch patient information'));
  }
  }
};


/*const updateUser = async (req, res, next) => {
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
  };*/

  const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        if (!updatedUser) throw new HttpError(404, 'User not found');
        res.json(updatedUser);
    } catch (error) {
        if (error instanceof HttpError) {
            next(error);
        } else {
            next(new HttpError(500, 'Failed to update patient information'));
        }
    }
};



const deleteUser = async (req, res, next) => {
  try {
    await userService.deleteUser(req.params.id);
    res.sendStatus(204);
} catch (error) {
    next(new HttpError(500, 'Failed to delete patient information'));
}
};


const createPrimaryConcern = async (req, res, next) => {
  try {
    const createdPrimaryConcern = await patientInfoService.createPrimaryConcern(req.body.primaryConcern);
    res.status(201).json(createdPrimaryConcern);
} catch (error) {
    next(new HttpError(500, 'Failed to create primary concern'));
}
};



module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  createPrimaryConcern,
};
