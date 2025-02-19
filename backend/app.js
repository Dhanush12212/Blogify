import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv'; 
import AuthRoute from './routes/AuthRoute.js';
import  BlogRoute from './routes/BlogRoute.js';
const app = express();

dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 8080;

//Routing
app.use('/api/Auth',AuthRoute); 
app.use('/api/Blog', BlogRoute)
 

//MongoDB Connection
const connectDB = async() => {
    try {
        await mongoose
        .connect(process.env.MONGODB_URL);
        console.log(JSON.stringify({ message: "Connected to MongoDB", status: "success" }));
    } 
    catch(error) {
        console.error(
            JSON.stringify({ 
                message: "Failed to connect with DB", 
                status: "error", 
                error: error.message 
            })
        );
        process.exit(1); // Stop the app if DB connection fails 
    };
};

const startServer= async() => {
    try {
        await connectDB();
        app.listen(PORT,() => {
            console.log(
                JSON.stringify({ message: `Server started on port ${PORT}`, status: "success"})
            );
        });
    }   
    catch(error) {
        console.error(
            JSON.stringify({ 
                message: "Failed to connect with DB", 
                status: "error", 
                error: error.message, 
            })
        );
    }
};

startServer();