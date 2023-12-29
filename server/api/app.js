const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);

app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

module.exports = app;