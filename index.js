const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const database = require("./config/database");

const app = express();
const port = process.env.PORT;

// enable CORS
app.use(cors());

// parse application/json
app.use(bodyParser.json());

// server APIs Version 1
const serverRoutes = require("./api/v1/routes/index.route");

database.connect();

serverRoutes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})