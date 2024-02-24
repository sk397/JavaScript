const AsyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")

const validateToken = AsyncHandler(async(req,res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECERET, (err, decoded) => {
            if(err) {
                res.status(401);
                throw new Error("user is not authorized");
            }

            req.user = decoded.user;
            next();

            if(!token) {
                res.status(401);
                throw new Error ("User is not authorized or token is missing in the request")
            }
            console.log(decoded);
        })
    }
})

module.exports = validateToken