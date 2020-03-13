const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("User", UserSchema);