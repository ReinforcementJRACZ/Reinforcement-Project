import * as React from 'react';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Rating, Box } from "@mui/material";
function ReadBooks() {

  const [booksRead, updateBooksRead] = useState([]);
 

  const [user_id, updateUser_id] = useState(1); 

  //get request to the server to retrieve books read and want to read

  useEffect(() => {
    const fetchedBooksRead = async () => {
      try {
        console.log('in useEffect');
        const response = await fetch ('http://localhost:3333/read/1')
        
        if (!response.ok) {
          throw new Error ('Issue with response')
        }
        const result = await response.json();
        console.log('result', result)
        updateBooksRead(result)
      }
      catch (error) {
        console.log('Error fetching data in mybooks')
      }
    }
    fetchedBooksRead(); 

  },[])

  console.log('booksReads state', booksRead)

 
  return (
		<div>
			 <Box
        display="flex"
        alignItems="center"
        justifyContent="left"
        gap={2}
        sx={{
          marginTop: 10,
          marginBottom: 4,
          
        }}
      >

			</Box>

			{/* Display Books */}
      <Typography
  variant="h4"
  component="h1"
  gutterBottom
  align="left"
  sx={{
    fontWeight: "bold", // Makes the text bold
    color: "primary.main", // Uses theme's primary color
    textTransform: "uppercase", // Makes the text uppercase
    letterSpacing: 2, // Adds spacing between letters
    mb: 4, // Adds bottom margin for spacing
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Adds a subtle shadow
    marginLeft: 15, 
  }}
>
      Books Read
    </Typography>
			<Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          padding: 2,
          marginLeft: 15, 
        }}
      >
        
        {booksRead.map((book) => (
          <Card key={1} sx={{ width: '300px', height: '450px', cursor: 'pointer' }}>
						<CardMedia
              component="img"
              height="240"
              image={book.image}
              alt={`${book.book_title} cover`}
            />
            <CardContent>
              <Typography variant="h6">{book.book_title}</Typography>
              <Typography variant="body2">Author: {book.boo_author}</Typography>
              <Typography variant="body2">Genre: {book.book_genre}</Typography>
              <Rating value={book.rating} readOnly />
            </CardContent>
          </Card>
        ))}
      </Box>
		</div>
	)
}

export default ReadBooks;
