const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getUser = async (req, res, next) => {
    try{
        const users = await User.find();
        if(!users) {
            res.status(400);
            throw new Error("User not found");
        }

        return res.status(200).json(users);
    }catch(error){
        next(error);
    }
};

const createUsers = async (req, res, next)=>{
    try{
        const {password,...rest} = req.body;

        //generate salt;
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({
            ...rest,
            password: hashedPassword,
        });
        if(!user){
            throw new Error("user not create");
        }

        //hash password before saving to database
        const {password: userPassword, ...otherDetails } =user._doc;

        return res.status(201).json(otherDetails);
    } catch (error){
        next(error);
    }
};

const loginUser = async (req, res, next) => {
    try{
        //todo use joi to validate data;

        const {email, password} = req.body;

        //const user = await User.findOne({ email });

        if(!User){
            res.status(400);
            throw new Error("user not found");
        }

        //compare password

        const isCoreect = await bcrypt.compare(password, user.password);

        if(!isCoreect){
            res.status(400);
            throw new Error("incorrect password");
        }

        //generate token set
        //set cookie
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        res.cookie("jwt",token);

        const {password: userPassword, ...rest } =user._doc;
        return res.status(200).json({
            ...rest,
        });
    }catch(error){
        next(error);
    }
};

const logoutUser = async (req, res, next) => {
    res.cookie("jwt"," ",{ expiresIn:"-1"});
    return res.json({message: "you have been logged out"});
};

Module.export = {
    getUser,
    createUsers,
    loginUser,
    logoutUser,
};

