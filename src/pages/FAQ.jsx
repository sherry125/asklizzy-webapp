import React from 'react';
import '../index.css';

function FAQ() {
  const faqs = [
    { q:"How do I reset my password?", a:"Click “Forgot Password” on the login screen."},
    { q:"My printer won’t print.", a:"Restart the printer and check its connection."},
    { q:"I can’t send email.", a:"Make sure your mail client is online and not full."},
    { q:"Wi‑Fi is slow.", a:"Reboot your router or try a wired connection."},
    { q:"My screen is frozen.", a:"Hold the power button for 10 seconds to restart."},
  ];
  return (
    <div className="page-container">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqs.map((f, i) => (
          <li key={i}>
            <strong>{f.q}</strong><br/>{f.a}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQ;