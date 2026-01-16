import express from 'express'
import 'dotenv/config'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/messages.routes.js'
import { connectDB } from './lib/connectDB.js';
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express();

const PORT = process.env.PORT;

app.use(express.json({ limit: "15mb" }));
app.use(express.urlencoded({ extended: true, limit: "15mb" }));

app.use(cookieParser())
app.use(cors({origin:'http://localhost:5173',credentials:true}))

app.use('/api/auth',authRoutes)
app.use('/api/message',messageRoutes)

app.listen(PORT,()=>{
    connectDB();
    console.log(`App is running in http://localhost:${PORT}/`);
})