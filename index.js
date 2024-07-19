const express = require('express');
const sequelize = require('./config/database');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 3006;

app.use(express.json()); 


sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Sync all defined models to the DB
sequelize.sync({ force: true }) // Set to `true` to drop tables if they already exist
  .then(() => {
    console.log('Database & tables created!');
  });

// Define a route to create a new user
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Define a route to get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
