require('dotenv').config();

module.exports = {
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  DATABASE_URL:
        process.env.DATABASE_URL || 'mongodb://localhost:27017/recipes',
  API_KEY: process.env.API_KEY,
  FOOD2FORK_URL: 'https://www.food2fork.com/api'     
};