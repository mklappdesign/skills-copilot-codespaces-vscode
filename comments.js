// Create web server using express
const express = require('express');
const app = express();
const port = 3000;

// Create a route for the homepage
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Create a route for the comments page
app.get('/comments', (req, res) => {
    res.send('Comments Page');
});

// Listen on port 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});