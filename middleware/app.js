const express = require('express');
const app = express();

// Middleware function
const logMiddleware = (req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
};

// Using the middleware function
app.use(logMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
