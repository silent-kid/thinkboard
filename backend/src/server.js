// ! const express = require('express'); -> type = commonjs
import express from "express";
import cors from "cors";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimit.js";

dotenv.config();

const app = express();

// ? first running the app then connecting to database - wrong
// connectDB();

// * MIDDLEWARE

// > custom middleware
//  app.use((req,res,next)=>{
//  console.log(`Req method is ${req.method} and req url is ${req.url}`);
//   next();
// })

// ! access to req.body because of this
app.use(cors({
  origin: 'http://localhost:5173',
}));
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

// > Connect to database first and then start the app

connectDB().then(() => {
  app.listen(5000, () => {
    console.log("APP Running on PORT 5000");
  });
});
