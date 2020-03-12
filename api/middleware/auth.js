require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.AUTH_SECRET;

/**
 * @param  {Object} req - 
 * @param  {Object} res - 
 * @param  {function} next - 
 * @return {function} - 
 */
module.exports = (req, res, next) => {
    const token = req.header("x-auth-token");
    
    if(!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    } else {
        try {
        const decoded = jwt.verify(token, secret);
        
        req.user = decoded;

        res.status(200).json({ message: "Token verified" });
        
        return next();
        } catch (e) {
            res.status(400).json({ message: "Token is not valid" });
        };
    };    
};