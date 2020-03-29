const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

module.exports = model("Session", new Schema({
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    lot: { type: Schema.Types.ObjectId, required: true, ref: "Lot" },
    price: { type: Number, required: true },
    expires: { type: Date, required: true }
}, {
    timestamps: true
}));