var express = require("express");
var app = express();

// Serve the public directory
app.use(express.static("src"));

app.listen(3000);