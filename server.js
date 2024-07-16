
const express = require('express');
const app = express();
const port = 5000;


// Basic route for the home page
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Route with URL parameters
app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

// Route with query parameters
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Search query: ${query}`);
});

// POST route to handle form submissions or JSON data
app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Form data received: ${JSON.stringify(data)}`);
});

// Middleware to handle 404 errors
app.use((req, res, next) => {
    res.status(404).send("Sorry, we couldn't find that!");
});



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


