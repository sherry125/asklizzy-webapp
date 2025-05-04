import Chatbot from '../components/Chatbot';
import '../index.css';

function Home() {
  const quickOptions = [
    'Printer not working',
    'Forgot my password',
    'Email is down'
  ];

  return (
    <div className="page-container">
      <h2>AskLizzy – Office Tech Support</h2>
      <Chatbot quickOptions={quickOptions} />
    </div>
  );
}

export default Home;