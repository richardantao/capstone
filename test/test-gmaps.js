const assert = require('assert');
const sinon = require('sinon');
const fs = require('fs');

const { Client } = require("@googlemaps/google-maps-services-js");

const gmaps = require('../libs/gmaps');

const LATITUDE = 43.668490
const LONGITUDE = -79.394085

const textSearchParkingData = JSON.parse(fs.readFileSync(__dirname + '/test-data/text-search-parking.json'))

describe('libs/gmaps', function() {
    describe('#getLots()', function() {
        it('should return lots in radius', async function() {
            sinon.stub(Client.prototype, "textSearch").returns(
                new Promise((resolve, reject) => {
                    resolve({ data: { results: textSearchParkingData } })
                })
            );
            let lots = await gmaps.getLots(LATITUDE, LONGITUDE);
        });
    });
});