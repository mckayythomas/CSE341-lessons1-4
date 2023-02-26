const express = require('express');
const app = express();
const connectDB = require('./db/connection');

connectDB;
const port = process.env.Port || 3000

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log('Server is running on port 3000');
});