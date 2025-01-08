import { db } from '../models/models.js';
import { populateBooksService } from '../services/populateBooksService.js';

const booksController = {};

booksController.getBooks = async (req, res, next) => {
  try {
    const getBooksQuery = `
      SELECT *
      FROM books
    `;
    const books = await db.query(getBooksQuery);
    req.books = books.rows;
    return next();
  } catch (error) {
    return next({
      log:
        'booksController: Error while getting books from the database' + error,
      status: 500,
      message: { err: 'Failed to get books from database' },
    });
  }
};

// middleware for populating the database
booksController.populateBooksTable = async (req, res, next) => {
  try {
    await populateBooksService();
    return next();
  } catch (error) {
    return next({
      log: 'booksController: Error while populating books table:' + error,
      status: 500,
      message: { err: 'Failed to populate books in the database' },
    });
  }
};

booksController.getDetails = (req, res, next) => {
  return next();
};

// middleware to add books to TBR or read
booksController.add = (req, res, next) => {
  const { userId, bookId, list } = req.body;

  // Insert into user's to read list
  const insertQuery = `
    INSERT INTO ${list} (user_id, book_id)
    VALUES ($1, $2)
    RETURNING *;
  `;

  db.query(insertQuery, [userId, bookId], (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      return next(err);
    }
    console.log(`Added to list ${list}: `, result.rows[0]);
  });
  return next();
};

export default booksController;
