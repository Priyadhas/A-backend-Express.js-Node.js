const express = require('express');
const app = express();

// Error-handling middleware function
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
};

// Using the error-handling middleware
app.use(errorHandler);

app.get('/', (req, res) => {
  throw new Error('Oops!');
});

app.listen(3003, () => {
  console.log('Server is running on port 3003');
});
