const assert = require('assert');
const sinon = require('sinon');
const fs = require('fs');

const { Client } = require("@googlemaps/google-maps-services-js");

const gmaps = require('../libs/gmaps');

// Test data
const USER_LAT = 43.668490
const USER_LONG = -79.394085

// Load text search parking data and stub 
const textSearchParkingData = JSON.parse(fs.readFileSync(__dirname + '/test-data/text-search-parking.json'))
sinon.stub(Client.prototype, "textSearch").returns(
    new Promise((resolve, reject) => {
        resolve({ data: { results: textSearchParkingData } })
    })
);

describe('libs/gmaps', function() {
    describe('#getLots()', function() {
        it('should return lots in radius', async function() {
            let lots = await gmaps.getLots(USER_LAT, USER_LONG, 1000);
        });
    });
});