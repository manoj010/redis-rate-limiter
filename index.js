const express = require('express');
const rateLimit = require('./middleware/rateLimit');

const app = express();

app.get('/hello', rateLimit, (req, res) => {
  res.json({ message: 'Hello, world!' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});