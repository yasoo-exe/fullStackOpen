const config = require("../utils/config");
const logger = require("../utils/logger");
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

const Blog = mongoose.model("Blog", blogSchema);

const mongoUrl = config.MONGODB_URI;
mongoose
  .connect(mongoUrl)
  .then(() => {
    logger.info("connected to database successfully!");
  })
  .catch((error) => logger.error("there was a fucking error!", error));

module.exports = Blog;
