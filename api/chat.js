/* eslint-env node */
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { messages } = req.body;
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: "You are the Virtual Vaidya, an ancient Ayurvedic healer acting as a botanical guide for Sinhagad Fort in the Sahyadris. Users will tell you symptoms. You must diagnose them by recommending ONLY medicinal plants found locally in the Western Ghats (like Adulsa, Brahmi, Shatavari, Hirda, Karvi, etc.). Keep your answers concise, wise, and slightly traditional in tone. ALWAYS end by advising them to consult a modern physician before ingesting any wild herbs."
    });

    // 1. Separate the newest message from the older history
    const latestMessage = messages[messages.length - 1].content;
    const rawHistory = messages.slice(0, -1);

    // 2. The Defensive Sanitizer: Build a flawlessly formatted history array
    let safeHistory = [];
    
    for (const msg of rawHistory) {
      const geminiRole = msg.role === 'ai' ? 'model' : 'user';
      
      // Rule 1: History cannot start with a model message. Skip if it tries to.
      if (safeHistory.length === 0 && geminiRole === 'model') {
        continue;
      }
      
      // Rule 2: History must alternate. If it detects two of the same roles in a row, skip the duplicate.
      if (safeHistory.length > 0 && safeHistory[safeHistory.length - 1].role === geminiRole) {
        continue;
      }
      
      // If the message passes the strict rules, add it to our clean array!
      safeHistory.push({
        role: geminiRole,
        parts: [{ text: msg.content }]
      });
    }

    // 3. Send the guaranteed-safe history to Gemini
    const chat = model.startChat({ history: safeHistory });
    const result = await chat.sendMessage(latestMessage);
    const text = result.response.text();

    res.status(200).json({ reply: text });

  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: 'The Vaidya is currently meditating and cannot answer right now.' });
  }
}