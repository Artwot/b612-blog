const mongoose = require("mongoose");

// El usuario tiene un esquema con las propiedades:
// name
// lastName
// username
// email
// password
// description
// profilePic
// socialMedia
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    profilePic: {
      type: String,
      default: "",
    },
    socialMedia: {
      type: Array,
      required: false,
    },
  },
  { timeStamps: true } // Shortcut for Create and Update
);

module.exports = mongoose.model("User", UserSchema);
