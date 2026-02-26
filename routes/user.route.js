const express = require("express");

const router = express.Router();

const {createUser, getUser, getUserById, deleteUser} = require("../controllers/user.controller");

router.post("/create", createUser)

router.get("/all", getUser);

router.get("/single/:id", getUserById);

router.delete("/:id", deleteUser);

module.exports = router;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5OWZlYTcyNzk3ZGRkOTA2YjMxNWZjYiIsImlhdCI6MTc3MjA4ODA2MCwiZXhwIjoxNzcyNjkyODYwfQ.7Gi3DNLcm5pTLe53stsCx5Zk-1TcsmsAesszZDReGR8