const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.Signup = async(req, res) => {
    try {
        const {fullName, email, password} = req.body;

        const existUser = await User.findOne({email});

        if(existUser){
            return res.status(400).send({isSuccess: false, message: "Email already exist"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            fullName,
            email,
            password: hashedPassword
        })
        res.send({isSuccess: true, message: "User created!", user})
    } catch (error) {
        res.status(500).send({isSuccess: false, message: "Signup failed!", error: error.message})
    }
}

exports.login = async(req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email})

        if(!user){
            return res.status(400).send({isSuccess: false, message: "Invalid Email"});
        }
        const isMatch = await bcrypt.hash(password, user.password)
        if(!isMatch){
            return res.status(400).send({isSuccess: false, message: "Invalid Password"});
        }

        const token = jwt.sign({id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        )
        res.send({isSuccess: true, message: "Login successfully!", token})
    } catch (error) {
        res.status(500).send({isSuccess: false, message: "Login failed", error: error.message})
    }
}