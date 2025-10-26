import express from "express";
import { generateChatResponse } from "../rag/generator.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { session_id, message } = req.body;
    const reply = await generateChatResponse(message);
    res.json({ answer: reply, citations: [] });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

export default router;
