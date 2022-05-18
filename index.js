import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/UserRoute.js";
import postRoute from "./routes/PostsRoute.js";
import authRoute from "./routes/AuthRoute.js";
dotenv.config();

const app = express();

// MIDDLEWARES
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/posts", postRoute);

// ERROR HANDLING
app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: error.stack,
  });
});

// DB SETUP
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("CONNECTED TO DB"))
  .catch((error) => {
    console.log("DB NOT CONNECTED. EXITING NOW!");
    console.log(error);
    process.exit(1);
  });

// LOCAL SERVER SETUP
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`LISTENING ON PORT: ${port}`);
});
