import express from 'express';
import booksController from '..controllers/booksController.js'
import userController from '..controllers/userController.js'

const router = express.Router();

// Route to populate catalogue
router.get('/catalogue', booksController.getCatalogue, (req, res) => {
  res.status(200).json(res.locals.catalogue || [])
});

// Route for book details
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
