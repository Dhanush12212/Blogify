import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import loginRoute from './routes/Login.js';
import registerRoute from './routes/Register.js'; 
const app = express();

dotenv.config();
app.use(express.json());


//Routing
app.use('/login',loginRoute);
app.use('/register', registerRoute);
 

//MongoDB Connection
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