import * as dotenv from 'dotenv'; 
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import AuthRoute from './routes/AuthRoute.js';
import  BlogRoute from './routes/BlogRoute.js';
import connectDB from './db/connectDB.js';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

//Routing
app.use('/api/Auth',AuthRoute); 
app.use('/api/Blog', BlogRoute);
 

const startServer = async() => {
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
                message: "Server failed to start", 
                status: "error", 
                error: error.message, 
            })
        );
        process.exit(1);
    }
};

startServer();