import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

const connectDB = () => {
    mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => {
        console.log("Failed to connect with DB");
        console.log(err);
    });
};

const startServer= () => {
    try {
        connectDB();
        app.listen(8000,() => {
            console.log("The server started on port 8000"); 
        });
    }   
    catch(error) {
        console.log(error);
    }
};

startServer();