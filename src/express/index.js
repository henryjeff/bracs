const path = require("path");
const express = require("express");
const app = express(); // create express app

const PORT = process.env.HTTP_PORT || 8080;

// add middle-wares
app.use(express.static(path.join(__dirname, "..", "..", "build")));
app.use(express.static("public"));

app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "..", "build", "index.html"));
});


// start express server on port 8080
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});