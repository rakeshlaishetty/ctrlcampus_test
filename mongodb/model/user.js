const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const TodoUserData = mongoose.model("UserTodo", userSchema);

module.exports = TodoUserData;
