require("dotenv").config();
const async = require("async");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// env variables
const secret = process.env.JWT_SECRET;

/**
 * @summary - 
 * @description - 
 * @param  {Object} req - represents the HTTP request
 * @param  {Object} res - represents the HTTP response after an HTTP request is made
 * @return {Object}
 */
exports.user = (req, res) => {
    const { _id } = req.user;

    User.findOne({ _id }, {
        _id: 1,
        name: 1,
        "email.address": 1,
        "meta.membership": 1
    })
    .then(user => {
        return res.status(200).json(user);
    })
    .catch(err => {
        return res.status(500).json({ message: err.message });
    });
};

/** 
 * @summary - Registers new user
 * @description - Receives data from register form and creates 
 * @param  {Object} req
 * @param  {Object} res
 * @return {Object}
 */
exports.register = (req, res) => {
    const { first, last, email, password } = req.body;

    /** 
     * @summary - Validates email
     * @description - Receives data from register form and creates 
     * @param  {Object} req
     * @param  {Object} res
     * @return {Object}
     */
    const validateEmail = callback => {
        User.findOne({ email }, {
            email: 1
        })
        .then(user => {
            if(user) {
                return res.status(400).json({
                    message: "This email is already associated with a registered account"
                });
            } else {
                return callback(null, email);
            };
        })
        .catch(err => {
            return res.status(500).json({ message: err.message });
        });
    };

    /**
     * @param  {} email
     * @param  {} callback
     */
    const hashPassword = (email, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash("", salt, (err, hash) => {
                if(err) {
                    return res.status(500).json({
                        message: "The server was unable to hash your password",
                        errors: err
                    });
                } else {
                    password = hash;
                    console.log("The user's hashed password is " + hash);
                    callback(null, email, hash);
                };
            });
        });
    };
    
    /**
     * @param  {} email
     * @param  {} hash
     * @param  {} callback
     */
    const registerUser = (email, hash, callback) => {
        User.create({
            name: {
                first,
                last
            },
            email,
            password: hash
        })
        .then(user => {
            return callback(null, { message: "User registered" });
        })
        .catch(err => {
            return res.status(500).json({ message: err.messsage });
        });
    };

    async.waterfall([
        validateEmail,
        hashPassword,
        registerUser
    ], (err, results) => {
        if(err) {
            return res.status(500).json({ message: err.message });
        } else {
            return res.status(201).json(results);
        };
    });
};

/**
 * @summary - 
 * @description - 
 * @param  {} req - 
 * @param  {} res - 
 * @return {} - 
 */
exports.login = (req, res) => {
    const { email, password } = req.body;

    User.findOne({ "email.address": email }, {
        email: 1,
        password: 1
    })
    .then(user => {
        if(!user) { 
            return res.status(404).json({
                message: "This email is not associated with a registered account"
            }); 
        } else {
            const passwordIsValid = bcrypt.compareSync(password, user.password);

            if (!passwordIsValid) {
                return res.status(401).json({ 
                    message: "Wrong password. Try again or click Forgot Password to reset it."
                });
            } else {
                User.updateOne({ _id: user._id }, {
                    $set: {
                        meta: {
                            sessions: {
                                $inc: 1
                            }
                        }
                    }
                });

                const token = jwt.sign(
                    { id: user._id }, 
                    secret, 
                    { expiresIn: 259200 }
                );

                return res.status(200).json({
                    token,
                    user
                });
            };
        };
    })
    .catch(err => {
        return res.status(500).json({ message: err.message });
    });
};

/**
 * @summary
 * @description
 * @param  {} req
 * @param  {} res
 * @return {}
 */
exports.logout = (req, res) => {
    return res.status(200).json({
        message: "You have successfully logged out",
        token: null
    });  
};