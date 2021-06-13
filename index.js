const express = require("express");
const fs = require("fs");

//create express app
const app = express();

//port at which the server will run
const port = 4000;

//create end point
app.get("/", (_req, res) => {
  //send 'Hi, from Node server' to client
  const result = fs.readFileSync("web.html", "utf8");
  res.send(result);
});

// THE SOLUTION HERE
const SOLUTION = require("./solution");

app.get("/dree", (_req, res) => {
  res.send(SOLUTION);
});

//start server and listen for the req
app.listen(port, () =>
  //a callback that will be called as soon as server start listening
  console.log(`server is listening at http://localhost:${port}`)
);
