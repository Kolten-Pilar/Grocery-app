const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please enter text"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", itemSchema);
