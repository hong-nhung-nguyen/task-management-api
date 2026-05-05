const express = require("express");
require("dotenv").config();
const database = require("./config/database");

const app = express();
const port = process.env.PORT;

database.connect();

app.get("/tasks", (req, res) => {
    res.send("Task List");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})