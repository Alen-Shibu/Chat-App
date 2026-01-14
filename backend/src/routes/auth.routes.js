import express from 'express'
import { login, logout, signup, updateProfile } from '../controllers/auth.controllers.js';
import {protectRoute} from '../middlewares/auth.middleware.js'

// Creating a mini express app that deals with routes only
const router = express.Router();

router.post('/signup',signup)

router.post('/login',login)

router.post('/logout',logout)

router.put('/update-profile',protectRoute,updateProfile)

router.get('/check',protectRoute,(req,res)=>{
    return res.status(200).json(req.user)
})

export default router;