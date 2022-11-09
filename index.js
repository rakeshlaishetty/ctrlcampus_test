const express = require("express");
const router = require("./routes/Routes");
require("./mongodb/conn");
const app = express();

app.use(express.json());

// Routes
app.use(router);

let port = process.env.PORT | 8080;
app.listen(port, () => {
  console.log(`Connected to the ${port}`);
});
