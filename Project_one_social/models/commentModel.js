const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    comment: { type: String, required: [true, 'Comment cannot be empty'] },
    // likes: { type: Number, required: true, default: 0 },
    createdAt: { type: Date, default: Date.now },
    post: {
      type: mongoose.Schema.ObjectId,
      ref: 'Post',
      required: [true, 'Comment must belong to a Post'],
    },
    author: { type: String, required: true },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      // required: [true, 'Comment must belong to a User'],
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

commentSchema.virtual('created').get(function () {
  return this.createdAt.toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Europe/London',
  });
});

commentSchema.pre(/^find/, function (next) {
  // this.populate({
  //   path: 'post',
  //   select: 'title',
  // }).populate({
  //   path: 'user',
  //   select: 'name',
  // });

  this.populate({
    path: 'user',
    select: 'name',
  });
  next();
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
