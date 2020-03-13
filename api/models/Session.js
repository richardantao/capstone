const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

var SessionSchema = new Schema({
    _id: Schema.Types.ObjectId,
    user: { type: Schema.Types.ObjectId, required: true, ref: "users" }
});

var SessionModel = model("Session", SessionSchema);

module.exports = SessionModel;