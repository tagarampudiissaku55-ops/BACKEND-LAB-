
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// GET / - Home route
app.get('/', (req, res) => {
    res.status(200).send('Welcome to my Backend Development Lab 1!');
});

// GET /about - About route
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Issaku',
        section: 'CSE GAI 2C'
    });
});

// GET /time - Current date and time
app.get('/time', (req, res) => {
    res.status(200).json({
        currentDateTime: new Date()
    });
});

// 404 Middleware - Handle unknown routes
app.use((req, res) => {
    res.status(404).json({
        error: '404 - Page Not Found'
    });
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});
