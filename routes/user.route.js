const express = require("express");

const router = express.Router();

const {createUser, getUser, getUserById, deleteUser} = require("../controllers/user.controller");

router.post("/create", createUser)

router.get("/all", getUser);

router.get("/single/:id", getUserById);

router.delete("/:id", deleteUser);

module.exports = router;