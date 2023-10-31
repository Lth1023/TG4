const express = require("express");
const app = express();
const router = express.Router();
const dbo = require("./db/conect");
const index = require("./routes/index");
const route = require("./routes/routes.js");

dbo.connectToServer();
app.use(express.json());
app.use("/", route);
module.exports = app;
