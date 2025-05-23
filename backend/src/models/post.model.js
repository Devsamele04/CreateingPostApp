const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likesCount: {
    type: Number,
    default: 0,
  },
});

const PostModel = mongoose.model("Post", postSchema);
module.exports = PostModel;
