import db from '../models/models.js';

const userController = {};

// Books that user has read
userController.read = (req, res, next) => {
  const { user_id } = req.params
  // logic here

  const queryText = `
  SELECT 
    b.title AS book_title, 
    br.rating
  FROM books_read br
  JOIN books b ON br.book_id = b.id
  WHERE br.user_id = $user_id;  
`;

  // variable to store query result
  res.locals.booksRead = [];
  return next();
};

// Books on user's TBR list
userController.toRead = (req, res, next) => {
  const { userid } = req.params;

  // logic here

  // variable to store query result
  res.locals.toRead = [];
  return next();
};

export default userController;
