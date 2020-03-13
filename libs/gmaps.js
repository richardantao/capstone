const env = require("../config/env");

const { Client } = require("@googlemaps/google-maps-services-js");

const client = new Client({});

function getLots(lat, lng, radius=1000) {
    return client.textSearch({
        params: {
            key: env.keys.GOOGLE_PLACES,
            location: `${lat},${lng}`,
            radius,
            type: 'parking'
        }
    })
    .then(r => r.data.results)
    .catch(e => { console.error(e) });
}

module.exports = {
    getLots
}