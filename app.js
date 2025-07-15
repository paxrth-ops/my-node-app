const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('🚀 Node.js App is Running on AWS Lightsail!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App running at http://localhost:${port}`);
});