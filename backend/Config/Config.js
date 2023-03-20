const mongoose = require("mongoose");

function connect () {
   return  mongoose.connect("mongodb://localhost:27017/hackathon");
}

module.exports = connect;