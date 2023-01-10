const mongoose = require("mongoose");

const OrderSchema = new mongoose.OrderSchema(
  {
    userId: { type: String, require: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, require: true },
    address: { type: Object, require: true },
    status: { type: String, default: "Pending" },
  },
  { timstamps: true }
);

model.export = mongoose.model("Order", OrderSchema);
