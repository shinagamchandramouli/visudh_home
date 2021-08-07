const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
    trim: true,
    // minlength: 5,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    // minlength: 5,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    // minlength: 6,
  },
  contact_no: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
    // minlenght: 10
  },
  aadhar_no : {
    type: Number,
    required: true,
    unique: true,
    trim: true,
    // minlenght: 10
  },
  category: {
    type: String,
    required: true,
    trim: true
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
