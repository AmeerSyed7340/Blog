const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.post('/create', blogController.createBlog);
router.get('/read', blogController.readBlog);
//router.get('/read:', blogController.readblogOne);
router.put('/update', blogController.updateBlog);
router.delete('/delete', blogController.deleteBlog);


module.exports = router;