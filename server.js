// server.js

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware to parse JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { uid, level } = req.body;

    // Store the data in a file (appending)
    fs.appendFile('user_data.txt', `UID: ${uid}, Level: ${level}\n`, (err) => {
        if (err) throw err;
        console.log('Data saved successfully!');
    });

    res.send('Data submitted successfully!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
