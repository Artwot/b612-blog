const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true } // Shortcut for Create and Update
);

module.exports = mongoose.model("Category", CategorySchema);
