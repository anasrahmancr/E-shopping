import { verifyToken } from "../utils/jwt.js";

const auth = async(req, res, next) => {
    const token = await req.cookies.user_token;
    // proceed only if token is present
    if(!token){
        return res.status(403).json({message: "User not authorized"});
    } 
    try {
        const data = await verifyToken(token);
        req.userId = data.userId;
        req.userName = data.userName;
        next();
    } catch(error){
        return res.status(403).json({ message: 'Forbidden' });
    }
};

export default auth;