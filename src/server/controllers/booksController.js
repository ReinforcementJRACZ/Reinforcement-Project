import { db } from '../models/models.js';

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
  const { bookid } = req.params;
  // Logic here

  res.locals.bookDetails = {};
  return next();
};



booksController.add = (req, res, next) => {
  const { userId, bookId, list } = req.body;
  // userId is user ID, bookId is book that user wants to add, and list is either want to read or already read (‘want_to_read’ OR ‘books_read’)

  const bookQuery = `
  SELECT *
  FROM books
  WHERE id = $1;  
`;

  db.query(bookQuery, [userId, bookId, list], (err, result) => {
    if (err) {
      console.error('Error executing query', err); // Use console.error for errors
      return next(err); // Pass error to next middleware
    }
  });

  return next();
};

export default booksController;
