const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

var LotSchema = new Schema({
    _id: Schema.Types.ObjectId,
});

var LotModel = model("Lot", LotSchema)

module.exports = LotModel;