import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Modal, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  display: 'flex',
  gap: 3,
};

const thumbnailStyle = {
  width: '150px',
  height: '220px',
  objectFit: 'cover',
  borderRadius: '4px',
};

const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  flexGrow: 1,
};

const ratingStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  marginTop: 2,
};

const BookModal = ({ book, isOpen, onClose, onAddToWantToRead }) => {
// function BookModal({ book, isOpen, onClose, onAddToWantToRead }) {
	const [rating, setRating] = useState(0);

	useEffect(() => {
    if (isOpen) {
      setRating(0);
    }
  }, [isOpen, book]);

	const handleRating = (index) => {
    setRating(index);
  };

	return (
		<Modal open={isOpen} onClose={onClose}>
			<Box sx={modalStyle}>
				{/* Thumbnail */}
        <img
          src={book.thumbnail}
          alt={`${book.title} thumbnail`}
          style={thumbnailStyle}
        />

				{/* Content */}
        <Box sx={contentStyle}>
          <Typography variant="h5" gutterBottom>
            {book.title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Author: {book.author}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Genre: {book.genre}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }} gutterBottom>
            {book.description || 'No description available.'}
          </Typography>

          {/* Rating Section */}
          <Box sx={ratingStyle}>
            <Typography variant="body1">Rate me:</Typography>
            {[...Array(5)].map((_, index) => (
              <IconButton
                key={index}
                onClick={() => handleRating(index + 1)}
                color={index < rating ? 'warning' : 'default'}
              >
                <StarIcon />
              </IconButton>
            ))}
          </Box>

          {/* Add to Read Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            onClick={() => onAddToWantToRead(book)}
          >
            Want to Read
          </Button>
        </Box>
      </Box>
		</Modal>
	)
}

export default BookModal;