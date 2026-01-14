import mongoose from 'mongoose'

export const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to database at: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error in connecting to database: ${error.message}`)
        process.exit(1)
    }
}