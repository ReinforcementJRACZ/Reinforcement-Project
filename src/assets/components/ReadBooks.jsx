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
    <Box sx={{ padding: 3 }}>
  <Typography
  variant="h4"
  component="h1"
  gutterBottom
  align="center"
  sx={{
    fontWeight: "bold", // Makes the text bold
    color: "primary.main", // Uses theme's primary color
    textDecoration: "underline", // Adds an underline
    textTransform: "uppercase", // Makes the text uppercase
    letterSpacing: 2, // Adds spacing between letters
    mb: 4, // Adds bottom margin for spacing
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Adds a subtle shadow
  }}
>
      Books Read
    </Typography>
    <Grid container spacing={3}>
      {booksRead.map((book, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
            {book.image !== "No Image" && (
              <CardMedia
                component="img"
                sx={{
                  height: 250,
                  objectFit: "cover",
                }}
                image={book.image}
                alt={book.book_title}
              />
            )}
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="div">
                {book.book_title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Author: {book.book_author}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Genre: {book.book_genre}
              </Typography>
              <Rating value={book.rating} readOnly />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
  );
}

export default ReadBooks;
