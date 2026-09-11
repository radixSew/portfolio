import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-grid"></div>

      <div className="floating-orb orb-one"></div>
      <div className="floating-orb orb-two"></div>

      <div className="container hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >

          <motion.div
            className="available"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="pulse"></span>
            Available for opportunities
          </motion.div>

          <p className="hero-small">
            FULL-STACK DEVELOPER
          </p>

          <h1>
            Building digital
            <span>experiences.</span>
          </h1>

          <p className="hero-description">
            I'm Radhika, a Full-Stack Developer focused on creating
            scalable web applications with React.js, .NET Core and
            modern backend technologies.
          </p>

          <div className="hero-buttons">

            <motion.a
              href="#projects"
              className="primary-button"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.96 }}
            >
              Explore My Work
              <span>↗</span>
            </motion.a>

            <motion.a
              href="#contact"
              className="secondary-button"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.96 }}
            >
              Let's Talk
            </motion.a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/radixSew"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/radhika-sewwandi"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

          </div>

        </motion.div>


        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >

          <div className="code-window">

            <div className="window-header">

              <div className="window-buttons">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <p>developer.js</p>

              <div></div>

            </div>

            <div className="code-body">

              <div>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span>{" "}
                = {"{"}
              </div>

              <div className="code-indent">
                <span className="code-property">name:</span>{" "}
                <span className="code-green">
                  "Radhika Nanayakkara"
                </span>,
              </div>

              <div className="code-indent">
                <span className="code-property">role:</span>{" "}
                <span className="code-green">
                  "Full-Stack Developer"
                </span>,
              </div>

              <div className="code-indent">
                <span className="code-property">frontend:</span>{" "}
                <span className="code-green">
                  "React.js"
                </span>,
              </div>

              <div className="code-indent">
                <span className="code-property">backend:</span>{" "}
                <span className="code-green">
                  ".NET Core"
                </span>,
              </div>

              <div className="code-indent">
                <span className="code-property">database:</span>{" "}
                <span className="code-green">
                  "SQL"
                </span>,
              </div>

              <div className="code-indent">
                <span className="code-property">passion:</span>{" "}
                <span className="code-green">
                  "Building"
                </span>
              </div>

              <div>{"};"}</div>

              <div className="code-cursor">
                <span>_</span>
              </div>

            </div>

          </div>


          <motion.div
            className="floating-tech tech-react"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          >
            React
          </motion.div>

          <motion.div
            className="floating-tech tech-dotnet"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity
            }}
          >
            .NET
          </motion.div>

          <motion.div
            className="floating-tech tech-sql"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 2.8,
              repeat: Infinity
            }}
          >
            SQL
          </motion.div>

        </motion.div>

      </div>

      <div className="scroll-indicator">
        <span></span>
        Scroll to explore
      </div>

    </section>
  );
}

export default Hero;