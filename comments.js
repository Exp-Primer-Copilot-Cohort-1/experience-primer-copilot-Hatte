// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Create a middleware
app.use(bodyParser.json());

// Create a GET route for /comments
app.get('/comments', (req, res) => {
  res.send('GET request to homepage');
});

// Create a POST route for /comments
app.post('/comments', (req, res) => {
  res.send('POST request to homepage');
});

// Create a PUT route for /comments
app.put('/comments', (req, res) => {
  res.send('PUT request to homepage');
});

// Create a DELETE route for /comments
app.delete('/comments', (req, res) => {
  res.send('DELETE request to homepage');
});

// Create a GET route for /comments/:id
app.get('/comments/:id', (req, res) => {
  res.send('GET request to homepage');
});

// Create a POST route for /comments/:id
app.post('/comments/:id', (req, res) => {
  res.send('POST request to homepage');
});

// Create a PUT route for /comments/:id
app.put('/comments/:id', (req, res) => {
  res.send('PUT request to homepage');
});

// Create a DELETE route for /comments/:id
app.delete('/comments/:id', (req, res) => {
  res.send('DELETE request to homepage');
});

// Create a GET route for /comments/:id/abuseReports
app.get('/comments/:id/abuseReports', (req, res) => {
  res.send('GET request to homepage');
});

// Create a POST route for /comments/:id/abuseReports
app.post('/comments/:id/abuseReports', (req, res) => {
  res.send('POST request to homepage');
});

// Create a PUT route for /comments/:id/abuseReports
app.put('/comments/:id/abuseReports', (req, res) => {
  res.send('PUT request to homepage');
});

// Create a DELETE route for /comments/:id/abuseReports
app.delete('/comments/:id/abuseReports', (req, res) => {
  res.send('DELETE request to homepage');
});

// Create a GET route for /comments/:id/abuseReports/:id
app.get('/comments/:id/abuse