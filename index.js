const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.listen(5000, function() {
  console.log("Listening on localhost port 5000");
});
