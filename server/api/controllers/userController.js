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

    res.status(201).json({ authenticated: true, user });
  } catch (err) {
    res.status(500).json({ authenticated: false, message: err.message});
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  try{
    const user = await User.findOne({username, password});
    if(user == null){
      res.status(401).json({username: user, authenticated: false})
    }else{
      res.json({username: user.username, authenticated: true})
    }
  }catch(err){
    res.status(500).json({ MESSAGE: err.message});
  }
}
