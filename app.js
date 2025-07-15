const express = require('express');
const app = express();
const port = 4000; // Changed to port 4000

app.get('/', (req, res) => {
  res.send('📅 15-07-2025 — Node.js project created by Parth and is currently live.');
});

// Listen on 0.0.0.0 instead of localhost
app.listen(port, '0.0.0.0', () => {
  console.log(`App running at http://0.0.0.0:${port}`);
});