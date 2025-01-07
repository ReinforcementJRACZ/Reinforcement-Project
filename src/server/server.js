import express from 'express';
const { getUser } from '/services/HardcoverBookService.js';
import path from 'path';

const app = express();
const PORT = 3333;

app.use (express.json());

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
    statu: 500,
    log: { error: 'Unknown error occured' }
  };
  const caughtError = Object.assign(defaultErr, err)
  console.log(caughtError.log)
  return res.status(caughtError.status).json(caughtError.message);
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})