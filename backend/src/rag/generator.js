import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateChatResponse(prompt) {
  const response = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL,
    messages: [
      { role: "system", content: "You are a helpful booking assistant." },
      { role: "user", content: prompt },
    ],
  });
  return response.choices[0].message.content;
}
