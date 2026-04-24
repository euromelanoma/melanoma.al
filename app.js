const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// BODYPARSER MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));

// STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.eventNames.PORT || 5289;
app.listen(PORT, console.log(`Server started on ${PORT}`));
