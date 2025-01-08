import express from 'express';
import booksController from '../controllers/booksController.js';
import userController from '../controllers/userController.js';

const router = express.Router();

// Route to seed our database
router.post('/populate-books-table', booksController.populateBooksTable, (req, res) => {
  res.status(200).send('Books populated in the database successfully');
})

// Route to get all books
router.get('/books', booksController.getBooks, (req, res) => {
  res.status(200).json(req.books);
})

// Route for specific book details
router.get('/books/:bookid', booksController.getDetails, (req, res) => {
  res.status(200).json(res.locals.bookDetails || {});
});

// Route to populate books user has read
router.get('/read/:userid', userController.read, (req, res) => {
  res.status(200).json(res.locals.booksRead || []);
});

// Route to populate books users has on to be read list
router.get('/to-read/:userid', userController.toRead, (req, res) => {
  res.status(200).json(res.locals.toRead || []);
});

// Routes to mark books as read or want to read
router.post('/add', booksController.add, (req, res) => {
  res.status(200)
})

export default router;