import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';
import userModel from '../models/user.js';

//Registering an user
export const Register = async(req,res) => {
    let {username, email, password} = req.body;

    try {

        const user = await userModel.findOne({ email }) 
        
        if(user) {
            return res.status(400).send("Something Went Wrong!!"); 
        }
        
        //Hashing the Password
        const salt = await bcrypt.genSalt( 10 );  
        const hashedPassword = await bcrypt.hash(password, salt);

        user = userModel.create({
            username,
            email,
            password: hashedPassword, 
        });

        let token = JWT.sign({email: user.email, id: user._id}, "Secret", {expiresIn: "1h" }); 
        res.cookie("token", token, { httpOnly: true, secure: true });
        return res.status(201).send("Successfully Registered"); 
    }   
    catch(error)
    {
        console.log(error);
        return res.status(500).send("Something Went Wrong!!");
    }
    res.redirect('/Home');
}


//Login Authorization
export const login = async(req,res) => {
    let { email, password} = req.body;

    try {
        const user = await userModel.findOne({ email });

        if(!user) {
            return res.status(400).send("Something Went Wrong!!");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password) 
        if(!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password!" });
        }

        let token = JWT.sign({email: user.email, id: user._id}, "Secret", {expiresIn: "1h" }); 
        res.cookie("token", token, { httpOnly: true, secure: true });
        return res.status(200).send("Login Successfully");
       
              
    } 
    catch(error) {
        console.log(error);   
        return res.status(500).json({ message: "Internal Server Error" }); 
    }
}