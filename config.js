require('dotenv').config();

module.exports = {
  SECRET: process.env.SECRET,
  DB: process.env.MONGODB_URI,
  PORT: process.env.PORT,
};
