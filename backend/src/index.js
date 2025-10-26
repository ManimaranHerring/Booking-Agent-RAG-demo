import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import chatRouter from "./routes/chat.js";
import bookingRouter from "./routes/booking.js";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRouter);
app.use("/api/bookings", bookingRouter);

app.listen(8000, () => console.log("✅ API running at http://localhost:8000"));
