const express = require('express');
const app = express();
const router = express.Router();

// Middleware function
const logMiddleware = (req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
};

// Using the middleware function with the router
router.use(logMiddleware);

router.get('/', (req, res) => {
  res.send('Hello from Router');
});

app.use('/router', router);

app.listen(3004, () => {
  console.log('Server is running on port 3004');
});
