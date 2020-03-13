require("dotenv").config({ path: __dirname + "/../.env" });

module.exports = {
    keys: {
        GOOGLE_PLACES: process.env.GOOGLE_PLACES_API_KEY,
        GOOGLE_GEOLOCATION: process.env.GOOGLE_GEOLOCATION_API_KEY,
        MAP_QUEST: process.env.MAP_QUEST_API_KEY,
        MAP_QUEST_SECRET: process.env.MAP_QUEST_SECRET,
    }
};