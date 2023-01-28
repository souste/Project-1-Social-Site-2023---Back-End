const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  img: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  likes: { type: Number, default: 0, required: true },
  author: mongoose.Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now() },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
