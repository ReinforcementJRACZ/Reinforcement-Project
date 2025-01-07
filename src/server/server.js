import express from 'express';
import path from 'path';
import { connect } from './models/models.js';

const app = express();
const PORT = 3333;

// Connect to db
connect(); 

app.use (express.json());





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