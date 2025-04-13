import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faQuestionCircle, faTools, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
      <Link to="/faq"><FontAwesomeIcon icon={faQuestionCircle} /> FAQ</Link>
      <Link to="/troubleshooting"><FontAwesomeIcon icon={faTools} /> Troubleshooting</Link>
      <Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</Link>
    </nav>
  );
}

export default Navbar;