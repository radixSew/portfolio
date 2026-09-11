import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div>
          <span className="footer-logo">
            R<span>.</span>
          </span>

          <p>
            Full-Stack Developer
          </p>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Radhika Nanayakkara
        </p>

        <a href="#home" className="back-top">
          Back to top ↑
        </a>

      </div>

    </footer>
  );
}

export default Footer;