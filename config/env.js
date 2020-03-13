require("dotenv").config({ path: __dirname + "/../.env" });

module.exports = {
    keys: {
        GOOGLE_PLACES: process.env.GOOGLE_PLACES_API_KEY
    }
};