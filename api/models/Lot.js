const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

module.exports = model("Lot",new Schema({
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    totalSpaces: Number,
    price: { type: Number, required: true, default: 10 },
    priceFactors: {
        nearbyHotspots: Number
    }
}, {
    timestamps: true
}));