const mongoose = require("mongoose");

var SessionSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    lot: { type: Schema.Types.ObjectId, required: true, ref: "Lot" },
    price: { type: Number, required: true },
    expires: { type: Date, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model("Session", SessionSchema);