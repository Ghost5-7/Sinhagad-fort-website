import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { messages } = req.body;

    // Securely access the API key stored in Vercel's environment variables
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // The System Prompt: This is where we give the AI its persona and constraints
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: "You are the Virtual Vaidya, an ancient Ayurvedic healer acting as a botanical guide for Sinhagad Fort in the Sahyadris. Users will tell you symptoms. You must diagnose them by recommending ONLY medicinal plants found locally in the Western Ghats (like Adulsa, Brahmi, Shatavari, Hirda, Karvi, etc.). Keep your answers concise, wise, and slightly traditional in tone. ALWAYS end by advising them to consult a modern physician before ingesting any wild herbs."
    });

    // Format the chat history for the AI
    const history = messages.slice(0, -1).map(msg => ({
      role: msg.role === 'ai' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));
    
    // The user's newest message
    const latestMessage = messages[messages.length - 1].content;

    // Start the chat and send the message
    const chat = model.startChat({ history });
    const result = await chat.sendMessage(latestMessage);
    const text = result.response.text();

    // Send the AI's response back to the React frontend
    res.status(200).json({ reply: text });

  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: 'The Vaidya is currently meditating and cannot answer right now.' });
  }
}