import Chatbot from '../components/Chatbot';
import '../index.css';

function Troubleshooting() {
  return (
    <div className="page-container">
      <h2>Troubleshooting Tips</h2>
      <p>Use the assistant below to diagnose and solve common tech issues.</p>
      <Chatbot />
    </div>
  );
}

export default Troubleshooting;