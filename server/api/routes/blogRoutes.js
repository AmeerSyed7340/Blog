const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.post('/create', blogController.createBlog);
router.all('/read', blogController.readBlog); //get -> all 
router.put('/update', blogController.updateBlog);
router.delete('/delete', blogController.deleteBlog);


module.exports = router;