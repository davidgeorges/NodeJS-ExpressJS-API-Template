const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user")
const authMiddleware = require("../middleware/auth")

userRouter.get("/:id",authMiddleware.isAuthentificated,userController.getUser)

module.exports = {userRouter}