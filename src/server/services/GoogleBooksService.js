import fetch from 'node-fetch'; 
import dotenv from 'dotenv'; 
dotenv.config(); 

const API_URL='https://www.googleapis.com/books/v1/volumes';
const API_KEY=process.env.GOOGLE_BOOKS_API_KEY;

export const getAllBooks = async () => {
    try {
        const queryParams = {
            q: 'nonfiction', 
            key: API_KEY, 
            maxResults: 30,
        }
        const queryString = new URLSearchParams(queryParams).toString();
        const url = `${API_URL}?${queryString}`;

        const response = await fetch(url);

        if (!response.ok) {
            const errorDetails = await response.text(); 
            console.log('Google Books API Error Response', errorDetails); 
            throw new Error('Failed to fetch books data from Google Books API');
        }

        const data = await response.json(); 
        const books = data.items.map((book) => ({
            title: book.volumeInfo.title, 
            author: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown',
            genre: book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : 'Unknown', 
            description: book.volumeInfo.description || 'No description available', 

        })); 
        console.log(books);
        return books;
    } catch (error) {
        console.log('Error in getAllBooks:', error); 
        throw new Error('Failed to fetch books data from Google Books API')
    }
}