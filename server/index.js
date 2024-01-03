// index.js

const express = require('express');
const connectDB = require('./config/db');
const app = require('./api/app');
const dotenv = require('dotenv');

dotenv.config();

connectDB(); // Connect to the database

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});