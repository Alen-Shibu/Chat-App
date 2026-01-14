import bcrypt from 'bcryptjs'
import User from '../models/user.model.js'
import {generateToken} from '../lib/generateToken.js'
import cloudinary from '../lib/cloudinary.js'

// Signup Controller
export const signup = async(req,res) => {
    try {
        let {fullName,email,password} = req.body;
        // Checking If user passed all fields
        if(!password) return res.status(400).json({message:'Password Field Cannont be Empty'})
        if(!fullName) return res.status(400).json({message:'Full Name Field Cannont be Empty'})
        if(!email) return res.status(400).json({message:'Email Field Cannont be Empty'})

        // Data normalisation for consistent data
        fullName = fullName.trim();
        email = email.toLowerCase().trim();

        // Checking if email format is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {return res.status(400).json({success: false, message: "Invalid email format",});}

        // Checking if User already exists
        const user = await User.exists({email})
        if(user) return res.status(409).json({message:'Email already exists'})

        // Checking is Password is 5 characters long
        if(password.length<5) return res.status(400).json({message:'Password Must be atleast 5 characters long'})

        // Hashing Password (To keep the users password secure)
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        // Creating a new User
        const newUser = new User({
            fullName,
            email,
            password:hashedPassword,
        });
        
        await newUser.save();

        // Generating a token (So user keeps logged in right after signup)
        generateToken(newUser._id,res)

        return res.status(201).json({
            Fullname : newUser.fullName,
            Email : newUser.email,
            ProfilePic : newUser.profilePic,
            id : newUser._id
        })
    }
     catch (error) {
        console.error('Error in Signup Controller:',error);
        return res.status(500).json({message:'Internal Server Error'});
}
}

// Login Controller
export const login = async(req,res) => {
    try {
        const {email,password} = req.body;

        // Checking if user passed email and password
        if(!email) return res.status(400).json({message:'Email Field Cannont be Empty'})
        if(!password) return res.status(400).json({message:'Password Field Cannont be Empty'})

        // Confirming user exists in database
        const user = await User.findOne({email})
        if(!user) return res.status(401).json({message:'Invalid Credentials!'})
        
        // Checking if the entered password is correct
        const isPasswordCorrect = await bcrypt.compare(password,user.password)
        if(!isPasswordCorrect) return res.status(401).json({message:"Invalid Credentials!"})

        // Creating a token to log in the user
        generateToken(user._id,res);

        return res.status(200).json({message:"Login Successful"})
    } catch (error) {
        console.error('Error in Login Controller:',error);
        return res.status(500).json({message:'Internal Server Error'});
    }    
}

// Logout Controller
export const logout = (_,res) => {
    try {
        // Clearing the cookie (so that user gets instantly logged out)
        res.clearCookie("jwt",{
            httpOnly:true,
            sameSite:'strict',
            secure: process.env.NODE_ENV === "production"
        })
        return res.status(200).json({message:'Logout Success'})
    } catch (error) {
        console.log(`Error in Logout Controller: ${error.message}`)
        return res.status(500).json({message:'Internal Server Error'})
    }
}

// Updating Profile 
export const updateProfile = async(req,res) => {
    try {
        const {profilePic} = req.body;
        if(!profilePic) return res.status(400).json({message:'Profile image not provided'})

        // Getting user Id which is passed via protectRoute middleware
        const userId = req.user._id

        // uploading to cloudinary
        const cloudUpload = await cloudinary.uploader.upload(profilePic)

        // getting the link of the image to be put as profile
        const imageUrl = cloudUpload.secure_url;

        const profileUpdate = await User.findByIdAndUpdate(userId,{profilePic:imageUrl},{new:true})

        return res.status(200).json(profileUpdate)
    } catch (error) {
        console.log(`Error in updateProfile Controller: ${error.message}`)
        return res.status(500).json({message:'Internal Server Error'})
    }
}