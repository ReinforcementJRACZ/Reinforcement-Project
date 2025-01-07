import express from 'express';
import booksController from '../controllers/booksController.js';

export const router = express.Router();

router.post('/populate-books-table', booksController.populateBooksTable, (req, res) => {
  res.status(200).send('Books populated in the database successfully');
})
