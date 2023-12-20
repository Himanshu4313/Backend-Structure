import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URL || 'Localhost url';
const connectToDB = async () =>{
    try {
        const connection = await mongoose.connect(MONGODB_URI);
        console.log(`Database connected at ${connection.connection.host}`);
        
    } catch (error) {
        console.log(`Database connection failed`,error);
        process.exit(1);
    }
}

export default connectToDB;