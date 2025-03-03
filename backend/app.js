import * as dotenv from 'dotenv'; 
dotenv.config();

import express from 'express';
// import mongoose from 'mongoose';
import AuthRoute from './routes/AuthRoute.js';
import  BlogRoute from './routes/BlogRoute.js';
import connectDB from './db/connectDB.js'; 
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [
        "http://localhost:5173",  
        "https://blogify-gilt-alpha.vercel.app", 
    ],  
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true  
}));


const PORT = process.env.PORT || 10000;

//Routing
app.use('/api/Auth',AuthRoute); 
app.use('/api/BlogHome', BlogRoute); 

 

const startServer = async() => {
    try {
        await connectDB();
        app.listen(PORT, "0.0.0.0", () => {
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



// const connectDB = () => {
//     mongoose.set("strictQuery", true);
//     mongoose
//       .connect(process.env.MONGODB_URL)
//       .then(() => console.log("Connected to Mongo DB"))
//       .catch((err) => {
//         console.error("failed to connect with mongo");
//         console.error(err);
//       });
//   };
  
//   const startServer = async () => {
//     try {
//       connectDB();
//       app.listen(PORT, "0.0.0.0", () => console.log(`Server started on port ${PORT}`));
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
  
//   startServer();