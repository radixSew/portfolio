import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);

      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const links = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact"
  ];

  return (
    <motion.header
      className={scrolled ? "navbar scrolled" : "navbar"}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="nav-container">

        <a href="#home" className="logo" onClick={closeMenu}>
          R<span>.</span>
        </a>

        {isMobile && (
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span
              className={menuOpen ? "line rotate1" : "line"}
            ></span>

            <span
              className={menuOpen ? "line hide" : "line"}
            ></span>

            <span
              className={menuOpen ? "line rotate2" : "line"}
            ></span>
          </button>
        )}

        {(!isMobile || menuOpen) && (
          <AnimatePresence>
            <motion.nav
              className={
                isMobile
                  ? "nav-links mobile-active"
                  : "nav-links"
              }
              initial={
                isMobile
                  ? { opacity: 0, y: -20 }
                  : false
              }
              animate={
                isMobile
                  ? { opacity: 1, y: 0 }
                  : false
              }
              exit={{ opacity: 0, y: -20 }}
            >
              {links.map((link, index) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  

                  {link}
                </a>
              ))}
            </motion.nav>
          </AnimatePresence>
        )}

      </div>
    </motion.header>
  );
}

export default Navbar;