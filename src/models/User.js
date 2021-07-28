const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: string,
    required: true
  }
});

mongoose.model("User", userSchema);