const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({  
  username: {
    type: String,
    required: true,
    ref: 'User'
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
  // Add other fields as needed
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
