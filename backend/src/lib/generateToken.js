import jwt from 'jsonwebtoken'

export const generateToken = (userId,res) => {
    try {
        const token = jwt.sign({userId},process.env.SECRET_KEY,{
            // Server side expiring of token
            expiresIn:'7d'
        })

        res.cookie("jwt",token,{
            // maxAge to create a cookie in browser & other options to make the app more secure
            maxAge: 7*24*60*60*1000,
            httpOnly:true,
            sameSite:'strict',
            secure: process.env.NODE_ENV === "production"
        })
    } catch (error) {
        console.error("Error in Generating jwt token: ",error);
        return res.status(500).json({message:"Internal Server Error"})
    }
}