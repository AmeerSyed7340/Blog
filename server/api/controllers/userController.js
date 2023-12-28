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
    res.status(500).json({ MESSAGE: err.message});
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  try{
    const user = await User.findOne({username, password});
    if(user == null){
      res.status(401).json({username: user, authenticated: "false"})
    }else{
      res.json({username: user.username, authenticated: "true"})
    }
  }catch(err){
    res.status(500).json({ MESSAGE: err.message});
  }
}