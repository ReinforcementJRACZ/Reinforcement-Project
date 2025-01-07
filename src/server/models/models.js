import { createClient } from '@supabase/supabase-js';
import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

// Import variables from .env
dotenv.config();
const PG_URI = process.env.PG_URI;

// Set up connection
const pool = new Pool({
  connectionString: PG_URI,
})

// Test function to connect to DB
async function connect() {
  try {
    const res = await pool.query('SELECT NOW()'); 
    console.log('Connected to database');
  } catch (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1); 
  }
}

// Export query function
export const query = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

export { connect }