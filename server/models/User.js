//Require Packages//
const mongoose = require("mongoose");

//Create a Schema/Module//
const UserSchema = new mongoose.Schema({
  //username
  //password
});

module.exports = User = mongoose.model("user", UserSchema);
