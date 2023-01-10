const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connection successfull!"))
  .catch((err) => {
    console.log("Error!");
  });

app.get("/api/test", () => {
  console.log("Test is successful");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Connected to Backend Server");
});
