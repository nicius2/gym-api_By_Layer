import express from "express";
import { connectDB } from "./config/database";

const app = express();
app.use(express.json());

connectDB()

export { app };