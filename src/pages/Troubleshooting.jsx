import Chatbot from '../components/Chatbot';
import './Troubleshooting.css';

function Troubleshooting() {
  const quickOptions = [
    'VPN not connecting',
    'Software won’t install',
    'Computer running slow',
    'Outlook not syncing'
  ];

  return (
    <div className="page-container">
      <h2>Troubleshooting Tips</h2>
      <p>Use the assistant below to solve more complex tech issues.</p>
      <Chatbot quickOptions={quickOptions} />
    </div>
  );
}

export default Troubleshooting;