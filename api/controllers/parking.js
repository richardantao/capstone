const Parking = require("../models/Parking");

exports.fetch = (req, res) => {
    const { } = req.query;

    Parking.find({ })
    .then(lots => {
        if(lots.length === 0) {
            return res.status(404).json({ message: "Parking lots not found" });
        } else {
            return res.status(200).json(lots);
        };
    })
    .catch(err => {
        return res.status(500).json({ message: err.message });
    });
};

exports.inspect = (req, res) => {
    const { _id } = req.params;

    Parking.findOne({ _id })
    .then(lot => {
        if(!lot) {
            return res.status(404).json({ message: "Parking lot not found" });
        } else {
            return res.status(200).json(lot);
        };
    })
    .catch(err => {
        return res.status(500).json({ message: err.message });
    });
};