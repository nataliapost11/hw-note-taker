const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

const path = require('path');
const api = require('./routes/index.js');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// Serve images, css files, js files from the public directory
// Allows us to reference files with their relative path
// Example: http://localhost:3001/index.html

// Add a static middleware for serving assets in the public folder
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

//app.get('/jobs', (req, res) => res.json(db));

app.listen(PORT, () =>
  console.log(
    `Serving static asset routes on port at http://localhost:${PORT}!`
  )
);
