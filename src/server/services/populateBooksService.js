import { getAllGoogleBooks } from "./googleBooksService.js";
import { query } from '../models/models.js'


export const populateBooksService = async () => {
    try {
        const books = await getAllGoogleBooks();

        const bookInsertPromises = books.map((book) => {
            const {title, author, genre, description} = book; 
            
            const insertQuery = 'INSERT INTO books (title, author, genre, description) VALUES ($1, $2, $3, $4)';
            const values = [title, author, genre, description];

            return query.query(insertQuery, values);
        })

        await Promise.all(bookInsertPromises);
        console.log('PopulateBooksService: Books populated in the database successfully!')
    } catch (error) {
        console.log('Error in populateBooksService:', error);
        throw new Error('Failed to populate database with books data from Google Books API')
    }
};