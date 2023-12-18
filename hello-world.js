const express = require("express");
const app = express();

app.get("/sample", (req, res) => {
  res.status(200).json({
    status: "success",
    author: "Akash",
    description: "Hello World, Welcome to Amazon web sevices",
  });
  res.end();
});

app.listen(5000, () => {
  console.log("Hello I am node server");
});
