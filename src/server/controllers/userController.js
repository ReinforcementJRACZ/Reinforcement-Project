import { db } from '../models/models.js';

const userController = {};

// Books that user has read
userController.read = (req, res, next) => {
  console.log('in userController.read');
  const { userid } = req.params;
  // logic here
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
      console.error('Error executing query', err); // Use console.error for errors
      return next(err); // Pass error to next middleware
    }
    console.log(result.rows);
    // variable to store query result
    res.locals.booksRead = result.rows;
    console.log(res.locals.booksRead);
    return next();
  });
};

// Books on user's TBR list
userController.toRead = (req, res, next) => {
  const { userid } = req.params;

  // logic here

  const queryText = `
  SELECT 
    b.title AS book_title
  FROM want_to_read br
  JOIN books b ON br.book_id = b.id
  WHERE br.user_id =$1;  
`;
  db.query(queryText, [userid], (err, result) => {
    if (err) {
      console.error('Error executing query', err); // Use console.error for errors
      return next(err); // Pass error to next middleware
    }
    console.log(result.rows);
    // variable to store query result
    res.locals.toRead = result.rows;
    console.log(res.locals.toRead);
    return next();
  });
};

export default userController;
