import User from '../models/user.model.js'
import Message from '../models/message.model.js'
import cloudinary from '../lib/cloudinary.js'

export const getAllContacts = async(req,res) => {
    try {
    const loggedInUserId = req.user._id;
    // Get all users from database which isn't the current logged user
    const getContacts = await User.find({
        _id:{$ne:loggedInUserId}
    }).select('-password')
    return res.status(200).json(getContacts)
    } catch (error) {
        console.log('Error in getAllContacts controller:',error.message)
        return res.status(500).json({message:'Internal Server Error'})
    }
}

export const getChatPartners = async(req,res) => {
    try {
        const loggedInUserId = req.user._id;
        // Fetch all messages where the logged-in user is either the sender or receiver
        const messages = await Message.find({
            $or:[
                {senderId:loggedInUserId},
                {receiverId:loggedInUserId}
            ]
        })

        /*
            Extract unique user IDs of people the logged-in user has chatted with.
            For each message:
                - If the logged-in user is the sender → take receiverId
                - Otherwise → take senderId
            A Set is used to remove duplicate user IDs.
        */
        const chatPartnerId = [...new Set(messages.map((msg) => msg.senderId.toString() === loggedInUserId.toString() ? msg.receiverId.toString() : msg.senderId.toString()))]

          // Fetch user details of all chat partners (excluding passwords)
        const chatPartners = await User.find({
            _id:{$in:chatPartnerId}
        }).select('-password')

        return res.status(200).json(chatPartners)
    } catch (error) {
        console.log('Error in getChatPartners controller:',error.message)
        return res.status(500).json({message:'Internal Server Error'})
    }
}

export const getMessages = async(req,res) => {
    try {
    const loggedInUserId = req.user._id;
    const otherPersonId = req.params.id;

    /* Fetch all messages where either
        - logged-in user is sender and other person is receiver
        - logged-in user is receiver and other person is sender
    */
    const messages = await Message.find({
        $or:[
            {senderId:loggedInUserId,receiverId:otherPersonId},
            {senderId:otherPersonId,receiverId:loggedInUserId}
        ]
    })
    return res.status(200).json(messages)
    } catch (error) {
        console.log('Error in getMessages controller:',error.message)
        return res.status(500).json({message:'Internal Server Error'})
    }
}

export const sendMessages = async(req,res) => {
    try {
        const {text,image} = req.body;
        const loggedInUserId = req.user._id;
        const otherPersonId = req.params.id

        if(!text && !image) return res.status(400).json({message:'No text or image provided'})
        
        let cloudUrl;
        if(image){
            const cloudUpload = await cloudinary.uploader.upload(image);
            cloudUrl = cloudUpload.secure_url;
        }

        const message = await Message.create({
            senderId:loggedInUserId,
            receiverId:otherPersonId,
            text,
            image:cloudUrl
        })

        return res.status(201).json(message)
    } catch (error) {
        console.log('Error in sendMessages controller:',error.message)
        return res.status(500).json({message:'Internal Server Error'})
    }
}