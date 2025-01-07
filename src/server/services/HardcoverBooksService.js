import fetch from 'node-fetch';

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
            'Content-Type': 'application/json', 
            'Authorization': process.env.HARDCOVER_AUTH_TOKEN,
        }, 
        body: JSON.stringify({ query }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data from Hardcover API')
    }

    const data = await response.json();
    return data.data.me;
}

