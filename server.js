// IMPORTS
const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();

// MIDDLEWARE
// Static files. Must be an public/index.html file to see response
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json()); // JSON Support
app.use(morgan('dev'));  // Logger

// SERVER START
app.listen(3000, () => console.log('Server started at port 3000'));
