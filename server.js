/* --- Dependencies --- */
require("dotenv").config();
const helmet = require("helmet");
const cors = require("cors");
const express = require("express");
const path = require("path");

/* --- Configurations --- */
const app = express();
const port = process.env.PORT || 3001;
require("./config/db");

/* --- Middleware --- */
app.use(helmet());
app.use(cors());
app.use(express.json());

/* --- Routes --- */
app.use("/api/v1", require("./api/routes/auth"));


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "views/build/index.html"));
    res.set("Cache-Control", "no-cache");
});

/* --- Bootup --- */
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;