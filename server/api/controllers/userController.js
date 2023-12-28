// src/api/controllers/userController.js

const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    let user = new User({
      username,
      password
    });

    await user.save();

    res.status(201).json({ message: 'User created successfully', user });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({MESSAAGE: err.message});
  }
};