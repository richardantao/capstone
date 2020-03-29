const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

module.exports = model("User", Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: {
        first: { type: String, required: true },
        last: { type: String, required: true }
    },
    // payment: {}
    // settings: {}
}, {
    timestamps: true
}));