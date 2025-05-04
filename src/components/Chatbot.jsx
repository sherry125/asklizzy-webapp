import { useState, useEffect } from 'react';

function Chatbot({ quickOptions = [] }) {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const chat = document.querySelector('.chat-box');
    if (chat) chat.scrollTop = chat.scrollHeight;
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    const botMsg  = botResponse(input);
    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput('');
  };

  const botResponse = (txt) => {
    const q = txt.toLowerCase();

    const rules = [
      { keywords: ['printer','print','printing'], response: 'Try restarting the printer, clearing any paper jams, and checking its USB or Wi-Fi connection.' },
      { keywords: ['password','login','reset'],       response: 'Reset your password at https://reset.company.com. If you’re locked out contact IT.' },
      { keywords: ['email','outlook','mail','gmail'], response: 'Restart your email client, check mailbox storage, or try webmail.' },
      { keywords: ['wifi','internet','network'],      response: 'Restart your router, forget & rejoin the Wi-Fi, or check for outages.' },
      { keywords: ['vpn','remote access'],            response: 'Reconnect your VPN and ensure your credentials are correct.' },
      { keywords: ['software','install','application'], response: 'Install via the Company Software Portal. Request admin rights if blocked.' },
      { keywords: ['blue screen','crash','error screen'], response: 'Note any error code, then reboot. If it recurs, contact IT.' },
      { keywords: ['frozen','not responding','freeze'], response: 'Force-quit the unresponsive app or reboot your machine.' },
      { keywords: ['slow','lag','performance'],      response: 'Close unused apps, clear temp files, and reboot your computer.' },
      { keywords: ['update','windows update','software update'], response: 'Go to Settings → Update & Security, install updates, then restart.' },
      { keywords: ['phone','mobile','cell'],         response: 'Restart your phone, check for OS updates, and confirm network settings.' },
      { keywords: ['calendar','meetings','invite'],  response: 'Ensure your calendar is syncing properly in Outlook or web app.' },
      { keywords: ['teams','zoom','video call'],      response: 'Restart the app, check mic/cam permissions, and test your connection.' },
      { keywords: ['security','virus','malware','phishing'], response: 'Disconnect from the network and contact IT immediately.' },
      { keywords: ['forgot username','forgot id'],   response: 'Contact the IT Service Desk to retrieve or reset your username.' },
      { keywords: ['file sharing','upload','download'], response: 'Use SharePoint or OneDrive to securely share and access files.' },
      { keywords: ['browser','chrome','edge','firefox'], response: 'Clear your browser cache & cookies, then restart the browser.' },
      { keywords: ['printer jam','printer error'],   response: 'Turn off the printer, carefully remove jammed paper, and restart.' },
      { keywords: ['audio','sound','microphone','speaker'], response: 'Check your sound settings and ensure nothing is muted.' },
      { keywords: ['screen','display','monitor'],    response: 'Verify cables are secure and adjust resolution settings if needed.' }
    ];

    for (let { keywords, response } of rules) {
      if (keywords.some(k => q.includes(k))) {
        return { from: 'bot', text: response };
      }
    }

    const suggestions = [
      'Printer not working',
      'Forgot my password',
      'VPN not connecting',
      'Software won’t install',
      'Outlook not syncing',
      'Computer running slow',
      'Browser won’t load',
      'Audio not working'
    ];

    return {
      from: 'bot',
      text: `I’m not sure I understand that. Did you mean one of these?\n• ${suggestions.join('\n• ')}`
    };
  };

  return (
    <div className="chat-box">
      {messages.map((m,i) => (
        <div key={i} className={`message ${m.from}`}>
          <p>{m.text}</p>
        </div>
      ))}

      <div className="input-row">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your question..."
          onKeyDown={e => e.key==='Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>

      {quickOptions.length>0 && (
        <div className="categories">
          {quickOptions.map((opt,idx) => (
            <button key={idx} onClick={()=>setInput(opt)}>
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Chatbot;