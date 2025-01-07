import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const API_URL = 'https://api.hardcover.app/v1/graphql';
const getUserQuery = `
    query GetUser {
        me {
            username
        }
    }
`;

const getBooksQuery = `
    query GetBooks {
        books {
            title
            contributions {
                author {
                    name
                }
            }
        }
    }
`

export const getUser = async () => {
    const response = await fetch(API_URL, {
        method: 'POST', 
        headers: {
            "Content-Type": 'application/json',
            authorization: process.env.HARDCOVER_AUTH_TOKEN,
        }, 
        body: JSON.stringify({ query: getUserQuery }),
    });

    if (!response.ok) {
        const errorDetails = await response.text(); 
        console.error('API Error Response:', errorDetails);
        throw new Error('Failed to fetch user data from Hardcover API')
    }

    const data = await response.json();
    return data.data.me;
}

export const getBooks = async () => {
    const response = await fetch(API_URL, {
        method: 'POST', 
        headers: {
            "Content-Type": 'application/json',
            authorization: process.env.HARDCOVER_AUTH_TOKEN,
        }, 
        body: JSON.stringify({ query: getBooksQuery }),
    });

    if (!response.ok) {
        const errorDetails = await response.text(); 
        console.error('API Error Response:', errorDetails);
        throw new Error('Failed to fetch books data from Hardcover API')
    }

    const data = await response.json();
    console.log(data.data.books);
    return data.data.books;
}

