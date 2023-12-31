const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
    try {
        const { username, title, content, createdAt } = req.body;
        let blog = new Blog({
          username,
          title,
          content
        });
        await blog.save();
        res.status(201).json({ authenticated: true, message: "created blog"});
      } catch (err) {
        res.status(500).json({ authenticated: false, message: err.message});
      }
}

exports.updateBlog = async (req, res) => {
  const { username, title, newTitle, newContent } = req.body;
  try{
    const blog = await Blog.findOneAndUpdate({username, title}, {"content": newContent, "title": newTitle});
    if(blog == null){
      res.status(401).json({ MESSAGE: "already updated or didn't find"});
    }
    res.status(201).json({blog})
  }catch(err){
    res.status(500).json({ MESSAGE: err.message});
  }
}

exports.readBlog = async (req,res) => {
  //const { postID, username, title, content, createdAt } = req.body;
  //if query username and title is provided it can query that specific document if none is provided it will find all blogs
  //http://localhost:3000/api/blogs/read/?username=test&title=testtitleasg2
  const user = req.query.username;
  const title = req.query.title;
  //Ameer's addition of id below
  const _id = req.query._id;
  if(user != null && title != null && _id != null){
    const { username, title, _id } = req.body;
    try{
      const blog = await Blog.findOne({username, title, _id});
      res.status(200).json({blog, authenticated: true});
    }catch(err){
      res.status(500).json({ MESSAGE: err.message});
    }
  }else{
    try{
      const blog = await Blog.find();
      res.status(200).json({blog, authenticated: true});
    }catch(err){
      res.status(500).json({ MESSAGE: err.message});
    }
  }
}

exports.deleteBlog = async (req, res) => {
  const { username, title } = req.body;
  try{
    const blog = await Blog.deleteOne({username, title})
    res.status(201).json(blog)
  }catch(err){
    res.status(500).json({ MESSAGE: err.message});
  }
}