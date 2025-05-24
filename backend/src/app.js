const express = require("express");
const app = express();
const postRoutes = require("./routes/post.routes");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/", postRoutes);

module.exports = app;
