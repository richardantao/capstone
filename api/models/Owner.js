const mongoose = require("mongoose");

var OwnerSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    lot: [{ type: Schema.Types.ObjectId, required: true, ref: "Lot" }],
}, {
    timestamps: true
});

module.exports = mongoose.model("Owner", OwnerSchema);