const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

module.exports = model("users", new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        first: { type: String, required: true },
        last: { type: String, required: true }
    },
    email: { type: String, required: true },
    password: { type: String, required: true }
}));