const mongoose = require("mongoose");
const config = require("../utils/config");
const logger = require("../utils/logger");

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
