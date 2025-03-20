import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"; 
import "../Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Contact Us</h2>
        <p>&copy; 2025 Portfolio Builder . All rights reserved.</p>
        <div className="social-links">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaFacebook size={24} color="#1877F2" /> {/* Blue Facebook */}
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram size={24} color="#E4405F" /> {/* Pink Instagram */}
          </a>
          <a
            href="https://wa.me/0101759745" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaWhatsapp size={24} color="green" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
