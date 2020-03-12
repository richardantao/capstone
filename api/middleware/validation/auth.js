const { body, validationResult } = require("express-validator");

exports.register = (req, res, next) => {
    const errors = validationResult(req);
    const { first, last, email, password } = req.body;

    body(first, "First name had an invalid input")
        .exists().withMessage("First name is a required field")
        .escape();
    body(last, "Last name had an invalid input")
        .exists().withMessage("First name is a required field")
        .escape();
        
    body(email, "Email had an invalid input")
        .exists().withMessage("First name is a required field")
        .isEmail().withMessage("Email must be a valid emaill address")
        .escape()
        .normalizeEmail();

    body(password, "Password had an invalid input")
        .exists().withMessage("First name is a required field")
        .isLength().withMessage({ min: 8, max: undefined })
        .escape();

    if(!errors.isEmpty()) {
        return res.status(400).json({ message: errors.message });
    } else {
        return next();
    };
};


exports.login = (req, res, next) => {
    const errors = validationResult(req);
    const { email, password } = req.body; 

    body(email, "Email had an invalid input")
        .exists().withMessage("First name is a required field")
        .isEmail().withMessage("Email must be a valid emaill address")
        .escape()
        .normalizeEmail();

    body(password, "Password had an invalid input")
        .exists().withMessage("First name is a required field")
        .isLength().withMessage({ min: 8, max: undefined })
        .escape();

    if(!errors.isEmpty()) {
        return res.status(400).json({ message: errors.message });
    } else {
        return next();
    };
};