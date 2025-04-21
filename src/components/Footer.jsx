//Use AI tool to write this code specifically for the Current Year in the footer.
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} AskLizzy Support</p>
    </footer>
  );
}

export default Footer;