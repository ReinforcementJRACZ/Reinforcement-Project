import db from '../models/models.js';

const booksController = {};

// controller to query for all books
booksController.getCatalogue = (req, res, next) => {
  // Logic here

  // variable to store query result
  res.locals.catalogue = [];
  return next();
};

// router for detailed book info
booksController.getDetails = (req, res, next) => {
  const { id } = req.params;
  // Logic here
  
  res.locals.bookDetails = {};
}
export default booksController;