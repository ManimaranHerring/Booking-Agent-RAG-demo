import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  const { session_id, type, amount, details } = req.body;
  const booking = await prisma.booking.create({
    data: { sessionId: session_id, type, amount, details },
  });
  res.json(booking);
});

export default router;
