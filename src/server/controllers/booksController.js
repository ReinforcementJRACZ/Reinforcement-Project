import { db } from '../models/models.js';
import { populateBooksService } from '../services/populateBooksService.js';

const booksController = {};

// Middleware to seed our database (DONE)
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

// Middleware for populating our database (DONE)
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

// Middleware to populate book details when user clicks into one (DONE)
booksController.getDetails = (req, res, next) => {
  console.log("in booksController.get details")
  const { bookid } = req.params;
  const bookQuery = `
    SELECT *
    FROM books
    WHERE id = $1
  `
  db.query(bookQuery, [bookid], (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      return next(err);
    }
    res.locals.bookDetails = result.rows[0];
    console.log(res.locals.bookDetails)
  });
  return next();
};

// Middleware to add books to TBR or read (DONE)
booksController.add = (req, res, next) => {
  console.log("adding book")
  const { userId, bookId, list, rating } = req.body;

  const insertQuery =
    list === 'books_read'
      ? `INSERT INTO ${list} (user_id, book_id, rating)
         VALUES ($1, $2, $3)
         RETURNING *;`
      : `INSERT INTO ${list} (user_id, book_id)
         VALUES ($1, $2)
         RETURNING *;`;
  const queryParams =
    list === 'books_read' ? [userId, bookId, rating || null] : [userId, bookId];
  db.query(insertQuery, queryParams, (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      return next(err);
    }
    console.log(`Added to list ${list}: `, result.rows[0]);
  });
  return next();
};

export default booksController;
