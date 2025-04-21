import React, { useState } from 'react';
import '../index.css';

function Home() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { from: 'user', text: input };
    const botMsg = generateResponse(input);
    setMessages([...messages, userMsg, botMsg]);
    setInput('');
  };

  const generateResponse = (txt) => {
    const question = txt.toLowerCase().trim();

    // Define your rule‑based responses:
    const rules = [
      {
        keywords: ['printer', 'print', 'printing'],
        response: 'Try restarting the printer and checking its cable or Wi‑Fi connection.'
      },
      {
        keywords: ['password', 'login', 'reset'],
        response: 'To reset your password, visit https://reset.company.com and follow the steps.'
      },
      {
        keywords: ['email', 'outlook', 'mail'],
        response: 'Make sure your email client is online. Try refreshing or clearing cache.'
      },
      {
        keywords: ['wifi', 'internet', 'network'],
        response: 'Restart your router or switch to a different network to test connectivity.'
      },
      {
        keywords: ['slow', 'lag', 'performance'],
        response: 'Close unused apps, clear browser cache, and reboot your device to improve speed.'
      }
    ];

    // Attempt to match any rule:
    for (let { keywords, response } of rules) {
      if (keywords.some(k => question.includes(k))) {
        return { from: 'bot', text: response };
      }
    }

    // Fallback suggestions if no rule matched:
    const suggestions = [
      'Printer not working',
      'Forgot my password',
      'Email is down',
      'WiFi issues'
    ];
    return {
      from: 'bot',
      text: `I’m not sure I understand that. Did you mean one of these?
• “${suggestions[0]}”
• “${suggestions[1]}”
• “${suggestions[2]}”
• “${suggestions[3]}”`
    };
  };

  return (
    <div className="page-container">
      <h2>AskLizzy – Office Tech Support</h2>

      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.from}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="input-row">
        <input
          type="text"
          placeholder="Type your question..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>

      <div className="categories">
        <button onClick={() => setInput('Printer not working')}>Printer Help</button>
        <button onClick={() => setInput('Forgot my password')}>Password Reset</button>
        <button onClick={() => setInput('Email is down')}>Email Issue</button>
      </div>
    </div>
  );
}

export default Home;