const config = require("./utils/config");
const logger = require("./utils/logger");
const middleware = require("./utils/middleware");

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require("cors");
const blogsRouter = require("./controllers/blogs");

mongoose.set("strictQuery", false);

logger.info("connecting to", config.MONGODB_URI);

const mongoUrl = config.MONGODB_URI;
mongoose
  .connect(mongoUrl)
  .then(() => {
    logger.info("connected to database successfully!");
  })
  .catch((error) => logger.error("there was a fucking error!", error));

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.use("/api/blogs", blogsRouter);

module.exports = app;
