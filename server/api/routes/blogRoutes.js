const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.post('/', blogController.createBlog);
router.post('/read', blogController.readBlog);
router.post('/update', blogController.updateBlog);
router.post('/delete', blogController.deleteBlog);


module.exports = router;