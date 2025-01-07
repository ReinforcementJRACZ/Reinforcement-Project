import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

console.log('Token:', process.env.TOKEN);
const API_URL = 'https://api.hardcover.app/v1/graphql';
const query = `
    query Test {
        me {
            username
        }
    }
`;

export const getUser = async () => {
    const response = await fetch(API_URL, {
        method: 'POST', 
        headers: {
            "Content-Type": 'application/json',
            authorization: process.env.TOKEN,
        }, 
        body: JSON.stringify({ query }),
    });

    if (!response.ok) {
        const errorDetails = await response.text(); 
        console.error('API Error Response:', errorDetails);
        throw new Error('Failed to fetch data from Hardcover API')
    }

    const data = await response.json();
    return data.data.me;
}

