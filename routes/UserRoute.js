import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controller/UserController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const userRoute = express();

userRoute.put("/:id", verifyUser, updateUser);

userRoute.delete("/:id", verifyUser, deleteUser);

userRoute.get("/:id", verifyUser, getUser);

userRoute.get("/", verifyAdmin, getUsers);

export default userRoute;
