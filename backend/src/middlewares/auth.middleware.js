import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';

// this middleware protects routes from unauthenticated Users
export const protectRoute = async(req,res,next) => {
    try {
        const token = req.cookies.jwt
        if(!token) return res.status(401).json({message:"Token not provided"})     
        const decoded = jwt.verify(token,process.env.SECRET_KEY)
        const user = await User.findById(decoded.userId).select('-password')
        if(!user) return res.status(401).json({message:'User not found'})
        req.user = user;
        next();
    } catch (error) {
        console.error(`Error in protectRoute middleware: ${error.message}`)
        return res.status(401).json({message:'Unauthorised!'})
    }
}