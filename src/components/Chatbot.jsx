import { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = { from: 'user', text: input };
    setMessages([...messages, newMessage, botResponse(input)]);
    setInput('');
  };

  const botResponse = (userInput) => {
    let response = "I'm not sure how to help with that.";
    if (userInput.toLowerCase().includes('printer')) {
      response = 'Try restarting the printer and checking the connection.';
    } else if (userInput.toLowerCase().includes('password')) {
      response = 'You can reset your password at reset.company.com.';
    } else if (userInput.toLowerCase().includes('email')) {
      response = 'Check if your inbox is full or refresh your mail client.';
    }

    return { from: 'bot', text: response };
  };

  return (
    <div className="chat-box">
      {messages.map((msg, i) => (
        <div key={i} className={`message ${msg.from}`}>
          <p>{msg.text}</p>
        </div>
      ))}
      <div className="input-row">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
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

export default Chatbot;