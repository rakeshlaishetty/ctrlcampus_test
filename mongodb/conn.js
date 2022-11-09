const mongoose = require("mongoose");
module.exports = mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.izdr3bf.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(
    () => {
      console.log("DataBase Connected");
    },
    (err) => {
      console.log(err);
    }
  );
