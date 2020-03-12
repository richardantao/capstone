// const async = require("async");
// const moment = require("moment");

const ObjectId = require("mongodb").ObjectId;

// model
const Session = require("../models/Session");

/**
 * @summary -
 * @description - 
 * @param  {Object} req
 * @param  {Object} res
 * @return {Object} - 
 */
exports.create = (req, res) => {
    const { } = req.body;
    
    Session.create({
        _id: ObjectId()
    })
    .then(session => {
        return res.status(201).json(session);
    })
    .catch(err => {
        return res.status(500).json({ message: err.message });
    });
};

/**
 * @summary -
 * @description - 
 * @param  {Object} req
 * @param  {Object} res
 * @return {Object} - 
 */
exports.fetch = (req, res) => {
    const { user } = req.params;
    
    Session.find({ user }, {

    })
    .then(sessions => {
        if(sessions.length === 0) {
            return res.status(404).json({ message: "Sessions not found" });
        } else {
            return res.status(200).json(sessions);
        };
    })
    .catch(err => {
        return res.status(500).json({ message: err.message });
    });
};

/**
 * @summary -
 * @description - 
 * @param  {Object} req
 * @param  {Object} res
 * @return {Object} - 
 */
exports.edit = (req, res) => {
    const { _id } = req.params;
    
    Session.findOne({ _id }, {

    })
    .then(session => {
        if(!session) {
            return res.status(404).json({ message: "Session not found" });
        } else {
            return res.status(200).json(session);
        };
    })
    .catch(err => {
        return res.status(500).json({ message: err.message });
    });
};

/**
 * @summary -
 * @description - 
 * @param  {Object} req
 * @param  {Object} res
 * @return {Object} - 
 */
exports.update = (req, res) => {
    const { _id } = req.params;
    const { } = req.body;

    Session.updateOne({ _id }, {
        $set: {

        }
    })
    .then(() => {
        if(n.modifiedCount !== 1) {
            return res.status(404).json({ message: "Session was not found" });
        } else {
            return res.status(200).json({ message: "Session updated" });
        };
    })
    .catch(err => {
        return res.status(500).json({ message: err.message });
    });
};

/**
 * @summary - Delete Session
 * @description - 
 * @param  {Object} req - 
 * @param  {Object} res - 
 * @return {Object} - message signifying success/failure of operation
 */
exports.delete = (req, res) => {
    const { _id } = req.params;

    Session.deleteOne({ _id })
    .then(() => {
        if(n.modifiedCount !== 1) {
            return res.status(404).json({ message: "Session not found" });
        } else {
            return res.status(200).json({ message: "Session deleted" });
        };
    })
    .catch(err => {
        return res.status(500).json({ message: err.message });
    });
};