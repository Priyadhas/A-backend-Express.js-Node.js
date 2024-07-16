const express = require('express');
const app = express();

// Using built-in middleware to serve static files
app.use(express.static('public'));

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});
