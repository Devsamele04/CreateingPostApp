const express = require("express");
const app = express();
const postRoutes = require("./routes/post.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", postRoutes);

module.exports = app;
