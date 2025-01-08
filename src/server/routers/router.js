import express from 'express';
import booksController from '../controllers/booksController.js';
import userController from '../controllers/userController.js';

const router = express.Router();

// Route to seed our database (DONE)
router.post('/populate-books-table', booksController.populateBooksTable, (req, res) => {
  return res.status(200).send('Books populated in the database successfully');
})

// Route to get all books (DONE)
router.get('/books', booksController.getBooks, (req, res) => {
  return res.status(200).json(req.books);
})

// Route for specific book details (DONE)
router.get('/books/:bookid', booksController.getDetails, (req, res) => {
  return res.status(200).json(res.locals.bookDetails || {});
});

// Route to populate books user has read (DONE)
router.get('/read/:userid', userController.read, (req, res) => {
  return res.status(200).json(res.locals.booksRead || []);
});

// Route to populate books users has on to be read list (DONE)
router.get('/to-read/:userid', userController.toRead, (req, res) => {
  return res.status(200).json(res.locals.toRead || []);
});

// Route to mark books as read (with rating) or want to read (DONE)
router.post('/add', booksController.add, (req, res) => {
  return res.status(200)
})

export default router;