import mongoose from "mongoose";
import { env } from "./env";

export async function connectDB() {
  try {
     await mongoose.connect(env.MONGODB_URL)
     console.log("MongoDB conectado")
  } catch (error) {
    console.log("Erro ao conectar no Mongo:", error);
    process.exit(1);
  }
}
