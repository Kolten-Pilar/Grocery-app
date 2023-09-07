const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, //user id
      required: true,
      ref: "User", //reference to User model
    },
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
