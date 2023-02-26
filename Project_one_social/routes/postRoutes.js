const express = require('express');
const postController = require('../controllers/postController');
// const authController = require('../controllers/authController');

const router = express.Router();

// router.param('id', postController.checkID);

router
  .route('/')
  .get(postController.getAllPosts) // authController.protect,
  .post(postController.createPost);

router
  .route('/:id')
  .get(postController.getPost)
  // .patch(postController.updatePost)
  .delete(postController.deletePost);

module.exports = router;
