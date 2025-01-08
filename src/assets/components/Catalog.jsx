// Catalog page (search, filter, display books)
import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/joy/Button';
import InputBase from '@mui/material/InputBase';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

function Catalog() {
	const [author, setAuthor] = React.useState('');
	const [title, setTitle] = React.useState('');
	const [genre, setGenre] = React.useState('');
	const [rating, setRating] = React.useState('');
	const [books, setBooks] = useState([]);
	const [filteredBooks, setFilteredBooks] = useState([]);

	useEffect(() => {
		//define aysnc function  
			const fetchData = async () => {
					try {
						console.log("entered useEffect fn")
							const response = await fetch(`http://localhost:3333/api/books`)

							console.log("response: ", response)

							if (!response.ok) {
									throw new Error (`Reponse not ok, status ${response.status}`)
							}
							const result = await response.json();
							//result will be an object with key recipes that an array 
							const fetchedBooks = result;  // result.recipes = an array of the different drinks

							console.log("fetchedBooks: ", fetchedBooks)
							//update state
							setBooks(fetchedBooks);
					//need catch error tched drinks: ", fetchedDrinks)
					}
					//need catch error 
					catch (error){
							console.log("Error caught in the Catalog: " + error)
					}
			}
			
			//call fetchdata function 
			fetchData();
	}, [books])

	
	// const allBooks = await fetch('http://localhost:3333/api/books', {
	// 	// rename here after
	// 	method: 'GET',
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// 	body: JSON.stringify({
	// 		user_arguments: userArguments,
	// 		ai_arguments: aiArguments,
	// 		topic: topic,
	// 		user_side: userSide,
	// 		round: round,
	// 	}),
	// });


	// // Example book data
  // const books = [
  //   { id: 1, title: 'Book A', author: 'Author 1', genre: 'Fiction', rating: 4.8 },
  //   { id: 2, title: 'Book B', author: 'Author 2', genre: 'Non-Fiction', rating: 4.3 },
  //   { id: 3, title: 'Book C', author: 'Author 1', genre: 'Fiction', rating: 3.5 },
  //   { id: 4, title: 'Book D', author: 'Author 3', genre: 'Sci-Fi', rating: 4.0 },
  // ];

	// const handleSearch = () => {
  //   const results = books.filter((book) => {
  //     const matchAuthor = author ? book.author.toLowerCase().includes(author.toLowerCase()) : true;
  //     const matchGenre = genre ? book.genre === genre : true;
  //     const matchRating =
  //       rating === 10
  //         ? book.rating > 4.5
  //         : rating === 20
  //         ? book.rating >= 4.0 && book.rating <= 4.5
  //         : rating === 30
  //         ? book.rating >= 3.0 && book.rating <= 3.5
  //         : rating === 40
  //         ? book.rating >= 2.0 && book.rating <= 2.5
  //         : rating === 50
  //         ? book.rating < 2.0
  //         : true;

  //     return matchAuthor && matchGenre && matchRating;
  //   });

  //   setFilteredBooks(results);
  // };

  // const handleGenreChange = (event) => {
  //   setGenre(event.target.value);
  // };

	// const handleRatingChange = (event) => {
  //   setRating(event.target.value);
  // };

	return (
		<div>
			<FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="author-input">Author</InputLabel>
        <BootstrapInput id="author-input" value={author} onChange={(e) => setAuthor(e.target.value)}/>
      </FormControl>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel id="genre-select-label">Genre</InputLabel>
        <Select
          labelId="genre-select-label"
          id="genre-select"
          value={genre}
          // onChange={handleGenreChange}
					onChange={(e) => setGenre(e.target.value)}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Fiction</MenuItem>
          <MenuItem value={20}>Sci-Fi</MenuItem>
          <MenuItem value={30}>Non-Fiction</MenuItem>
        </Select>
      </FormControl>
			<FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel id="rating-select-label">Rating</InputLabel>
        <Select
          labelId="rating-select-label"
          id="demo-customized-select"
          value={rating}
          // onChange={handleRatingChange}
					onChange={(e) => setRating(e.target.value)}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Above 4.5</MenuItem>
          <MenuItem value={20}>4.0 - 4.5</MenuItem>
          <MenuItem value={30}>3.0 - 3.5</MenuItem>
					<MenuItem value={30}>2.0 - 2.5</MenuItem>
					<MenuItem value={30}>Below 2.0</MenuItem>
        </Select>
      </FormControl>
			{/* <FormControl sx={{ m: 1 }} variant="standard">
				<Button variant="solid" color="primary" onClick={handleSearch}>Search</Button>
      </FormControl> */}


		</div>
	)
}

export default Catalog;