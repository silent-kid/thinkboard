// ! const express = require('express'); -> type = commonjs
import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

connectDB();

// * MIDDLEWARE

app.use((req,res,next)=>{
  console.log(`Req method is ${req.method} and req url is ${req.url}`);
  next();
})

// ! access to req.body because of this
app.use(express.json());

app.use("/api/notes", notesRoutes);

app.listen(5000, () => {
  console.log("APP Running on PORT 5000");
});
