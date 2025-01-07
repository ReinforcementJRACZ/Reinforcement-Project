import { populateBooksService } from '../services/populateBooksService.js';

const booksController = {};

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