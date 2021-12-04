// IMPORTS
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

// MIDDLEWARE
app.use(cors());                                            // CORS Support
app.use(express.static(path.join(__dirname, 'public')));    // Static files. Must be an public/index.html file to see response


app.use(express.json()); // JSON Support
app.use(morgan('dev'));  // Logger

// SERVER START
app.listen(PORT, () => console.log('Server started at port ' + PORT));