// const express = require("express");
const User = require("../models/user.model")

exports.createUser = async(req, res) => {
    const {fullName, email, age} = req.body;

    if(!fullName || !email || !age){
        return res.status(400).send({isSuccess: false, message: "All fields are required!"})
    }
    try {
        const newUser = await User.create({fullName, email,age})
        res.status(200).send({isSuccess: true, message: "User save in db successfully!", data: newUser})
    } catch (error) {
        res.status(500).send({isSuccess: false, message: "Server Error", error: error.message})
    }
}

exports.getUser = async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).send({isSuccess: true, data: users})
    } catch (error) {
             res.status(500).send({isSuccess: false, message: "Server Error", error: error.message})
    }
}

exports.getUserById = async(req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if(!user){
         return res.status(404).send({isSuccess: false, message: "User not found!"})
      }
          res.status(200).send({isSuccess: true, data: user})
    } catch (error) {
          res.status(500).send({isSuccess: false, message: "Server Error", error: error.message})
    }
}

exports.deleteUser = async(req, res)=> {
    try {
        const deleted = await User.findByIdAndDeleted(req.params.id)
         if(!deleted){
         res.status(404).send({isSuccess: false, message: "User not found"});
      }
         res.status(200).send({isSuccess: true, deleted})
    } catch (error) {
        res.status(500).send({isSuccess: false, message: "Server Error", error: error.message})
    }
}