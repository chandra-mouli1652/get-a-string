const express = require("express");
const app = express();

app.get("/", (request, responce) => {
  responce.send("Express JS");
});
module.exports = app;
