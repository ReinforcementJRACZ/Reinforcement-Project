import { getAllGoogleBooks } from "./googleBooksService.js";
import { query } from '../models/models.js'


export const populateBooksService = async () => {
    try {
        const books = await getAllGoogleBooks();

        const bookInsertPromises = books.map((book) => {
            const {title, author, genre, description, thumbnail} = book; 
            
            const insertQuery = 'INSERT INTO books (title, author, genre, description, thumbnail) VALUES ($1, $2, $3, $4, $5)';
            const values = [title, author, genre, description, thumbnail];

            return query.query(insertQuery, values);
        })

        await Promise.all(bookInsertPromises);
        console.log('PopulateBooksService: Books populated in the database successfully!')
    } catch (error) {
        console.log('Error in populateBooksService:', error);
        throw new Error('Failed to populate database with books data from Google Books API')
    }
};