import jwt from 'jsonwebtoken';

const authMiddleware = async(req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];  //Need to sent token to the header in the frontend
    
    if(!token) {
        return res.status(401).json({ message: 'Unauthorized'});
    }
    try {
        const decoded = jwt.verify( token, process.env.jwt_SECRET);
        req.user = decoded;
        next();
    }
    catch(error) {
        console.log("Failed to validate User", error);
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};

export default authMiddleware;