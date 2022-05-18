import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controller/PostController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const postRoute = express();

postRoute.post("/", verifyUser, createPost);

postRoute.put("/:id", verifyUser, updatePost);

postRoute.delete("/:id", verifyUser, deletePost);

postRoute.get("/:id", verifyUser, getPost);

postRoute.get("/", verifyAdmin, getPosts);

export default postRoute;
