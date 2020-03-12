const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

module.exports = model("sessions", new Schema({
    _id: Schema.Types.ObjectId,
    user: { type: Schema.Types.ObjectId, required: true, ref: "users" }
}));