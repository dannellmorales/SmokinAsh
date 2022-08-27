
const cors = require("cors");
const express = require("express");

const app = express();


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Come have a Stogie!");
});


module.exports = app;