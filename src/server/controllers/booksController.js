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
}
export default booksController;