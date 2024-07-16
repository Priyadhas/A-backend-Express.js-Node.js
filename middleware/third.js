const express = require('express');
const morgan = require('morgan');
const app = express();

// Using third-party middleware
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3005, () => {
  console.log('Server is running on port 3005');
});
