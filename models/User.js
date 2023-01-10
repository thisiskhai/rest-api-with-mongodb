const mongoose = require("mongoose");

const userSchema = new mongoose.userSchema(
  {
    username: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timstamps: true }
);

model.export = mongoose.model("User", userSchema);