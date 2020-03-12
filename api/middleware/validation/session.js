const { body, validationResult } = require("express-validator");

/**
 * @summary - Validate form data
 * @description - 
 * @param  {Object} req - 
 * @param  {Object} res -
 * @param  {function} next -
 * @return {Object/function} - call controller function or return error message if necessary
 */
module.exports = (req, res, next) => {
    const errors = validationResult(req);
    const { } = req.body;

    body();

    if(!errors.isEmpty()) {
        return res.status(400).json({ message: errors });
    } else {
        return next();
    };
};