import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();

// MIDDLEWARES
const app = express();

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
