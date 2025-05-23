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

module.exports = { createPost, getPosts };
