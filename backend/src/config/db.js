import mongoose from 'mongoose'


export const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DATABASE CONNECTED");        
    } catch (error) {
        console.error("Error Connecting MONGODB",error)
        process.exit(1) // ? 1 means exit with failure
    }
}