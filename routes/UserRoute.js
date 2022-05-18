import express from "express";
import { createUser, updateUser } from "../controller/UserController.js";

const userRoute = express();

// Create user
userRoute.post("/", createUser);

// Update user
userRoute.put("/:id", updateUser);

export default userRoute;
