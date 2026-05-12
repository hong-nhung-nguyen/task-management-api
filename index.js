const express = require("express");
<<<<<<< Updated upstream
=======
const bodyParser = require("body-parser");
const cors = require("cors");
>>>>>>> Stashed changes
require("dotenv").config();
const database = require("./config/database");

const app = express();
const port = process.env.PORT;

<<<<<<< Updated upstream
// server APIs
=======
// enable CORS
app.use(cors());

// parse application/json
app.use(bodyParser.json());

// server APIs Version 1
>>>>>>> Stashed changes
const serverRoutes = require("./api/v1/routes/index.route");

database.connect();


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})