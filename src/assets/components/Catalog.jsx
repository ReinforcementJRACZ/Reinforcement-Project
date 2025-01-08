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
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import BookModal from './BookModal';


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
	const [author, setAuthor] = useState('');
	const [genre, setGenre] = useState('');
	const [rating, setRating] = useState('');

	const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
	const [selectedBook, setSelectedBook] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);

  const booksPerPage = 40;

	useEffect(() => { 
			const fetchData = async () => {
					try {
						console.log("entered useEffect fn")
							const response = await fetch(`/api/books`)
							if (!response.ok) {
									throw new Error (`Reponse not ok, status ${response.status}`)
							}
							const result = await response.json();
							const fetchedBooks = result;  
							console.log("fetchedBooks: ", fetchedBooks)
							setBooks(fetchedBooks);
					}
					catch (error){
							console.log("Error caught in the Catalog: " + error)
					}
			}
			
			fetchData();
	}, [])

	const handleCardClick = (book) => {
		setSelectedBook(book);
		setIsModalOpen(true);
	}

	const handleCloseModal = () => {
		setIsModalOpen(false);
	}
 
	const handlePageChange = (event, value) => {
    setPage(value);
  };

	const handleAddToWantToRead = () => {
    // Logic to add book to "Want to Read" list
    // console.log(`${book.title} added to Want to Read list.`);
    setIsModalOpen(false); // Close the modal after adding
  };

  const currentBooks = books.slice((page - 1) * booksPerPage, page * booksPerPage);

	return (
		<div>
			 <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
        sx={{
          marginTop: 10,
          marginBottom: 4,
        }}
      >
				<FormControl sx={{ m: 1 }} variant="standard">
					<InputLabel htmlFor="author-input">Author</InputLabel>
					<BootstrapInput id="author-input" value={author} onChange={(e) => setAuthor(e.target.value)}/>
				</FormControl>
				<FormControl sx={{  minWidth: 150  }} variant="standard">
					<InputLabel id="genre-select-label">Genre</InputLabel>
					<Select
						labelId="genre-select-label"
						id="genre-select"
						value={genre}
						onChange={(e) => setGenre(e.target.value)}
						input={<BootstrapInput />}
					> 
					<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>Biography & Autobiography</MenuItem>
						<MenuItem value={20}>Education</MenuItem>
						<MenuItem value={30}>Fiction</MenuItem>
						<MenuItem value={40}>History</MenuItem>
						<MenuItem value={50}>Language Arts & Disciplines</MenuItem>
						<MenuItem value={60}>Literary Criticism</MenuItem>
						<MenuItem value={70}>Nonfiction</MenuItem>
						<MenuItem value={80}>Sports & Recreation</MenuItem>
						<MenuItem value={90}>Science</MenuItem>
						<MenuItem value={100}>Social Science</MenuItem>
						<MenuItem value={110}>True Crime</MenuItem>
					</Select>
				</FormControl>
				<FormControl sx={{ minWidth: 150 }} variant="standard">
					<InputLabel id="rating-select-label">Rating</InputLabel>
					<Select
						labelId="rating-select-label"
						id="demo-customized-select"
						value={rating}
						onChange={(e) => setRating(e.target.value)}
						input={<BootstrapInput />}
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>Above 4.5</MenuItem>
						<MenuItem value={20}>4.0 - 4.5</MenuItem>
						<MenuItem value={30}>3.0 - 3.5</MenuItem>
						<MenuItem value={40}>2.0 - 2.5</MenuItem>
						<MenuItem value={50}>Below 2.0</MenuItem>
					</Select>
				</FormControl>

				<Button variant="solid" color="primary">
          Search
        </Button>
			</Box>

			{/* Display Books */}
			<Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          padding: 2,
        }}
      >
        {currentBooks.map((book) => (
          <Card key={book.id} sx={{ width: '300px', height: '450px', cursor: 'pointer' }} onClick={() => handleCardClick(book)}>
						<CardMedia
              component="img"
              height="240"
              image={book.thumbnail}
              alt={`${book.title} cover`}
            />
            <CardContent>
              <Typography variant="h6">{book.title}</Typography>
              <Typography variant="body2">Author: {book.author}</Typography>
              <Typography variant="body2">Genre: {book.genre}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
		
			{/* Pagination */}
			<Box display="flex" justifyContent="center" sx={{ marginTop: 3 }}>
        <Pagination
          count={Math.ceil(books.length / booksPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>

			<BookModal
        book={selectedBook}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddToWantToRead={handleAddToWantToRead}
      />
		</div>
	)
}

export default Catalog;