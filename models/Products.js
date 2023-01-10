const mongoose = require("mongoose");

const ProductSchema = new mongoose.ProductSchema(
  {
    title: { type: String, require: true, unique: true },
    desc: { type: String, require: true },
    img: { type: String, require: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, require: true },
  },
  { timstamps: true }
);

model.export = mongoose.model("Product", ProductSchema);
