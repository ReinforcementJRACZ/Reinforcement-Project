import express from 'express';
import booksController from '../controllers/booksController.js';
import userController from '../controllers/userController.js';

const router = express.Router();

router.post('/populate-books-table', booksController.populateBooksTable, (req, res) => {
  res.status(200).send('Books populated in the database successfully');
})

router.get('/books', booksController.getBooks, (req, res) => {
  res.status(200).json(req.books);
})

export default router;