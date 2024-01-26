const mongoose = require("mongoose");

const db = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("MongoDB connection successful");
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
    });
};

module.exports = db;

