const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
    try {
        const { postID, username, title, content, createdAt } = req.body;
        let blog = new Blog({
          postID,
          username,
          title,
          content,
          createdAt
        });
        await blog.save();
        res.status(201).json({ authenticated: true, message: "created blog"});
      } catch (err) {
        res.status(500).json({ authenticated: false, message: err.message});
      }
}

exports.updateBlog = async (req, res) => {

}

exports.readBlog = async (req,res) => {
  //const { postID, username, title, content, createdAt } = req.body;
  try{
    const blog = await Blog.find();
    res.status(200).json({blog, authenticated: true});
  }catch(err){
    res.status(500).json({ MESSAGE: err.message});
  }
}

exports.deleteBlog = async (req, res) => {

}