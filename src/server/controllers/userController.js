import db from '../models/models.js';

const userController = {};

// Books that user has read
userController.read = (req, res, next) => {
  // logic here

  // variable to store query result
  res.locals.booksRead = [];
  return next();
};

// Books on user's TBR list
userController.toRead = (req, res, next) => {
  // logic here

  // variable to store query result
  res.locals.toRead = [];
  return next();
};

export default userController;
