const mongoose = require("mongoose");

var LotSchema = new mongoose.Schema({
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    totalSpaces: Number,
    price: { type: Number, required: true, default: 10 },
    priceFactors: {
        nearbyHotspots: Number
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Lot", LotSchema)