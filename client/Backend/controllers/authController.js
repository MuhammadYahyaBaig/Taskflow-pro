import User from "../models/User.js";
import bcrypt  from "bcryptjs";
import jwt from "jsonwebtoken";

//token banany ka chota helper function
const createToken = (userID) =>{
    return jwt.sign({id: userID}, process.env.JWT_SECRET, {expiresIn: "7d"});
};

//Register user
export const registerUser = async ( req, res) =>{
    const {name, email, password} = req.body;
    //pehly sy account hai?
    const exists = await User.findOne({email});
    if(exists)
        {
            return res.status(400).json({message:"Email already exsists"});
        } 
     // user banao 
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(password, salt);
      const user = await User.create({
        name,
        email,
        password:hashedPassword,
      });
     //token do
     const token = createToken(user.id);    
     res.status(201).json({
        token,
        user:{
            id:user.id,
            name:user.name,
            email:user.email,
        },
     });
};

//Login user
export const loginUser = async (req, res) =>{
    const {email, password} = req.body;
    //check if user exists
    const user = await User.findOne({email});
    if(!user)
    {
        return res.status(400).json({message:"User does not exist"});
    }
    //password milao (encrypted password ko compare karo)
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch)
    {
        return res.status(400).json({message:"Invalid Password or Email"});
    }
    //token do
    const token = createToken(user.id);
    res.status(200).json({
        token,
        user:{
            id:user.id,
            name:user.name,
            email:user.email,
        },
    });
};