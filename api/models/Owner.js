const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

module.exports = mongoose.model("Owner", new Schema({
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    lot: [{ type: Schema.Types.ObjectId, required: true, ref: "Lot" }],
}, {
    timestamps: true
}));