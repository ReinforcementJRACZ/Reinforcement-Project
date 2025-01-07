import express from 'express';
import { getUser, getBooks } from './services/hardcoverBooksService.js';
import { getAllGoogleBooks } from './services/googleBooksService.js';
import { connect } from './models/models.js';
import { router } from './routers/router.js'
import path from 'path';

const app = express();
const PORT = 3333;

connect();

app.use (express.json());

app.use('/api', router);


// Books route
app.get('/books', async (req, res) => {
  try {
    const books = await getBooks();
    res.json(books); 

  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

// Google Books route
app.get('/GoogleBooks', async (req, res) => {
  try {
    const books = await getAllGoogleBooks();
    res.json(books); 

  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

// User route
app.get('/me', async (req, res) => {
  try {
    const user = await getUser();
    res.json(user); 

  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

// 404 router
app.use('/', (req, res) => {
  return res.status(404).send('Page not found')
})

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    message: 'Unknown error occured',
    status: 500,
    log: { error: 'Unknown error occured' }
  };
  const caughtError = Object.assign(defaultErr, err)
  console.log(caughtError.log)
  return res.status(caughtError.status).json(caughtError.message);
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})