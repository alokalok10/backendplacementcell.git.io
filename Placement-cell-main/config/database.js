const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect('mongodb://0.0.0.0:27017/codeial_development')
    
    .then(console.log("DB CONNECTED SUCCESSFULLY"))
    .catch((err) => {
      console.log("DB CONNECTION FAILED");
      console.log(err);
      process.exit(1);
    });
};
