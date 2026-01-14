import express from 'express'
import 'dotenv/config'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/messages.routes.js'
import { connectDB } from './lib/connectDB.js';
import cookieParser from 'cookie-parser'

const app = express();

const PORT = process.env.PORT;
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/message',messageRoutes)

app.listen(PORT,()=>{
    connectDB();
    console.log(`App is running in http://localhost:${PORT}/`);
})