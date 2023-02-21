const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  comment: { type: String, required: [true, 'Comment cannot be empty'] },
  likes: { type: Number, required: true, default: 0 },
  createdAt: { type: Date, default: Date.now },
  post: {
    type: mongoose.Schema.ObjectId,
    ref: 'Post',
    required: [true, 'Comment must belong to a Post'],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Comment must belong to a User'],
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
