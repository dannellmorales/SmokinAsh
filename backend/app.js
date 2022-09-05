
const cors = require("cors");
const express = require("express");

//configuration
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Come have a Stogie!");
});

const stogsController = require("./controllers/stogsController");
app.use("/stogs", stogsController);

//404
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });

//export
module.exports = app;