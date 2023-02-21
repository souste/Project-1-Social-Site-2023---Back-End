const commentController = require('../controllers/commentController');

const express = require('express');

const router = express.Router();

router
  .route('/')
  .get(commentController.getAllComments)
  .post(commentController.createComment);

module.exports = router;
