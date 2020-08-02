const express = require("express");
let ejs = require("ejs");

const app = express();

app.listen(3000);

app.set("view engine", "ejs");
