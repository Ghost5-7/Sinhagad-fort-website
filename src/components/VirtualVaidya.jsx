import React, { useState } from 'react';

const VirtualVaidya = () => {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Namaskar! I am your guide to the medicinal herbs of the Sahyadris. Tell me your symptoms, or ask about a specific local plant found near Sinhagad.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Expanded Medicinal Herbs Data
  const medicinalHerbs = [
    { name: "Adulsa (Justicia adhatoda)", use: "Respiratory Health", desc: "Found abundantly on the lower slopes. Its leaves are traditionally boiled to create a potent syrup that clears severe coughs and asthma symptoms." },
    { name: "Brahmi (Bacopa monnieri)", use: "Cognitive Function", desc: "Grows near the moisture of Dev Taki and other water bodies. Known in Ayurveda to enhance memory, reduce anxiety, and improve focus." },
    { name: "Shatavari (Asparagus racemosus)", use: "Vitality & Immunity", desc: "A thorny under-shrub found in the deciduous patches. Its roots are used extensively as a restorative tonic to build strength and immunity." },
    { name: "Hirda (Terminalia chebula)", use: "Digestive Aid", desc: "Often called the 'King of Medicine'. The fruit of this tree, found across the Sahyadris, is a primary ingredient in the ancient remedy Triphala." }
  ];

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message to the UI immediately
    const userMsg = { role: 'user', content: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    try {
      // Send the chat history to our secure Vercel Serverless Function
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Add the AI's actual response to the chat
        setMessages(prev => [...prev, { role: 'ai', content: data.reply }]);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      // Use the variable to log the exact issue for yourself behind the scenes!
      console.error("Chat API Error:", error); 
      
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: "I am having trouble connecting to my ancient texts right now. Please try again later." 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-parchment min-h-screen text-basalt">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-heading text-bhagwa-dark mb-4 text-center">
          Virtual Vaidya
        </h1>
        <p className="text-xl text-basalt-light mb-16 text-center max-w-2xl mx-auto border-b-2 border-regal pb-8">
          Consult the ancient botanical wisdom of Sinhagad Fort.
        </p>

        {/* --- Top Section: Medicinal Herbs Grid --- */}
        <div className="mb-20">
          <h2 className="text-3xl font-heading text-basalt-dark mb-8 text-center inline-block relative left-1/2 -translate-x-1/2">
            Local Medicinal Flora
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {medicinalHerbs.map((herb, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-md border-t-4 border-regal hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
                <h3 className="text-xl font-heading text-bhagwa-dark mb-1">{herb.name}</h3>
                <span className="text-xs font-sans uppercase tracking-wider text-basalt-light font-bold mb-4 block">
                  Cures: {herb.use}
                </span>
                <p className="text-base leading-relaxed text-basalt/80 flex-grow">
                  {herb.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Bottom Section: The AI Chatbot --- */}
        <div className="max-w-4xl mx-auto bg-basalt rounded-sm shadow-2xl overflow-hidden flex flex-col h-[600px] border border-basalt-light">
          {/* Chat Header */}
          <div className="bg-basalt-dark p-6 border-b border-basalt-light flex items-center gap-4">
            <div className="w-12 h-12 bg-bhagwa rounded-full flex items-center justify-center text-2xl shadow-inner">
              🌿
            </div>
            <div>
              <h3 className="text-2xl font-heading text-regal text-left m-0">AI Botanical Guide</h3>
              <p className="text-sm text-parchment/60 font-sans text-left m-0">Ask about herbs and symptoms</p>
            </div>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-grow p-6 overflow-y-auto bg-parchment/5 flex flex-col gap-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-sm shadow-md font-sans leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-bhagwa text-basalt-dark rounded-br-none' 
                    : 'bg-white text-basalt-dark rounded-bl-none border-l-4 border-regal'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-basalt-light p-4 rounded-sm rounded-bl-none border-l-4 border-regal shadow-md">
                  Consulting ancient texts...
                </div>
              </div>
            )}
          </div>

          {/* Chat Input Box */}
          <form onSubmit={handleSendMessage} className="p-4 bg-basalt-dark border-t border-basalt-light flex flex-col sm:flex-row gap-4">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="E.g., I have a bad cough, what grows near the fort that can help?"
              className="flex-grow bg-parchment text-basalt p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-regal font-sans w-full"
            />
            <button 
              type="submit"
              disabled={isTyping}
              className="bg-bhagwa text-basalt-dark px-8 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-bhagwa-light transition-colors disabled:opacity-50 w-full sm:w-auto"
            >
              Ask
            </button>
          </form>
        </div>
        
        <p className="text-center text-sm text-basalt-light mt-6 italic">
          *Disclaimer: The Virtual Vaidya is for educational purposes regarding local flora. Do not ingest wild plants or replace professional medical advice.
        </p>

      </div>
    </section>
  );
};

export default VirtualVaidya;