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

    // Format the chat history for the AI
    let history = messages.slice(0, -1).map(msg => ({
      role: msg.role === 'ai' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));
    
    // --- THE FIX ---
    // Gemini requires the history array to start with a 'user'. 
    // This removes our initial "Namaskar!" greeting from the backend history so Gemini doesn't crash.
    if (history.length > 0 && history[0].role === 'model') {
      history.shift();
    }

    const latestMessage = messages[messages.length - 1].content;

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(latestMessage);
    const text = result.response.text();

    res.status(200).json({ reply: text });

  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: 'The Vaidya is currently meditating and cannot answer right now.' });
  }
}