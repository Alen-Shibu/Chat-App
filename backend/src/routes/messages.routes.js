import express from 'express'
import { protectRoute } from '../middlewares/auth.middleware.js';
import { getAllContacts, getChatPartners, getMessages, sendMessages } from '../controllers/messages.controller.js';

const router = express.Router();

router.get('/contacts',protectRoute,getAllContacts)
router.get('/chats',protectRoute,getChatPartners)
router.get('/:id',protectRoute,getMessages)
router.post('/send/:id',protectRoute,sendMessages)

export default router;