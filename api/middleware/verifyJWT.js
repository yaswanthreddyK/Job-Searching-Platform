import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const verifyJWT = async function (req, res, next){
    try {
        const token = req.cookies?.token || req.headers["Authorization"]?.replace('Bearer ', "");
    
    if(!token) return res.status(401).send("Unauthorised requrest!")
    
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET)
    
    if(!decodedToken) return res.status(401).send("Token expired! Please login.")
    
    const user = await User.findById(decodedToken._id).select("-passowrd")
    if(!user) return res.status(401).send("Invalid token")
    
    req.user = user;
    return next()
    } catch (error) {
        console.log("verifyJWT :: Error : ",error);
        return res.status(500).send("Something went wrong!")
    }
}

export default verifyJWT;