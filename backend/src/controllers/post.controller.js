const PostModel = require("../models/post.model");

async function createPost(req, res) {
  const { imageUrl, caption } = req.body;
  const post = await PostModel.create({
    imageUrl,
    caption,
  });

  res.status(201).json({
    mensage: "Post created successfully",
    post,
  });
}

async function getPosts(req, res) {
  const posts = await PostModel.find();
  res.status(200).json({
    mensage: "Posts fetched successfully",
    posts,
  });
}

async function deletePost(req, res) {
  try {
    const { id } = req.params;
    const deleted = await PostModel.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting post", error });
  }
}

module.exports = { createPost, getPosts, deletePost };
