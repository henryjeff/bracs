const path = require("path");
const express = require("express");
const app = express(); // create express app

// add middle-wares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 8080
app.listen(8080, () => {
  console.log("server started on port 8080");
});