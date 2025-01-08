import { db } from '../models/models.js';
import { populateBooksService } from '../services/populateBooksService.js';

const booksController = {};

booksController.getBooks = async (req, res, next) => {
  try {
    const getBooksQuery = `
      SELECT *
      FROM books
    `

    const books = await db.query(getBooksQuery); 
    req.books = books.rows;
    return next();
  } catch (error) {
    return next ({
      log: 'booksController: Error while getting books from the database' + error,
      status: 500,
      message: { err: 'Failed to get books from database'},
    })
  }
}

// middleware for populating the database 
booksController.populateBooksTable = async (req, res, next) => {
  try {
    await populateBooksService();
    return next();
  } catch (error) {
    return next ({
      log: 'booksController: Error while populating books table:' + error,
      status: 500,
      message: { err: 'Failed to populate books in the database' },
    })
  }
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

booksController.deleteAllBooks = async (req, res, next) => {
  try {
    const deleteBooksQuery = `DELETE FROM books`
    await db.query(deleteBooksQuery)
    return next();
  } catch (error) {
    return next ({
      log: 'booksController: Error while deleting all books:' + error,
      status: 500,
      message: { err: 'Failed to delete books from database' },
    })
  }
}

export default booksController;
