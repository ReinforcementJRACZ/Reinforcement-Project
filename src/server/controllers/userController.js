import { db } from '../models/models.js';

const userController = {};

// Middleware to populate books that user has read (DONE)
userController.read = (req, res, next) => {
  console.log('in userController.read');
  const { userid } = req.params;
  console.log(userid);
  const queryText = `
  SELECT 
    b.title AS book_title, 
    br.rating
  FROM books_read br
  JOIN books b ON br.book_id = b.id
  WHERE br.user_id = $1;  
`;
  db.query(queryText, [userid], (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      return next(err);
    }
    console.log(result.rows);
    // variable to store query result
    res.locals.booksRead = result.rows;
    console.log(res.locals.booksRead);
    return next();
  });
};

// Middleware to populate books on user's TBR list (DONE)
userController.toRead = (req, res, next) => {
  const { userid } = req.params;
  const queryText = `
  SELECT 
    b.title AS book_title
  FROM want_to_read br
  JOIN books b ON br.book_id = b.id
  WHERE br.user_id =$1;  
`;
  db.query(queryText, [userid], (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      return next(err);
    }
    console.log(result.rows);
    res.locals.toRead = result.rows;
    console.log(res.locals.toRead);
    return next();
  });
};

export default userController;
