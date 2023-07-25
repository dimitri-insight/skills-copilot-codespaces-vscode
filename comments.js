// Create web server application with express
// Create a route for the path /comments that returns the data from comments.json
// Listen on port 3000, log a message when the server starts
// Run the application with node comments.js and visit localhost:3000/comments in your browser

const express = require("express");
const app = express();
const port = 3000;
const comments = require("./data/comments");

// console.log(comments);

app.get("/comments", (req, res) => {
  res.send(comments);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});