import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controller/PostController.js";
const postRoute = express();

postRoute.post("/", createPost);

postRoute.put("/:id", updatePost);

postRoute.delete("/:id", deletePost);

postRoute.get("/:id", getPost);

postRoute.get("/", getPosts);

export default postRoute;
