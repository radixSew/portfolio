import React from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container">

        {/* Contact Box */}
        <motion.div
          className="contact-box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-main">

            {/* Contact Introduction */}
            <p className="section-label">HAVE A PROJECT?</p>

            <h2>
              Let's create
              <span>something amazing.</span>
            </h2>

            <p className="contact-description">
              Whether you have a project in mind or you're
              looking for a developer to join your team,
              I'd love to hear from you.
            </p>

            {/* Email Button */}
            <motion.a
              href="mailto:radhikasewwandi071@gmail.com"
              className="email-button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Start a conversation
              <span>↗</span>
            </motion.a>
          </div>

          {/* Contact Details */}
          <div className="contact-details">

            {/* Email */}
            <div className="contact-detail">
              <span>EMAIL</span>

              <a href="mailto:radhikasewwandi071@gmail.com">
                radhikasewwandi071@gmail.com
              </a>
            </div>

            {/* GitHub */}
            <div className="contact-detail">
              <span>GITHUB</span>

              <a
                href="https://github.com/radixSew"
                target="_blank"
                rel="noreferrer"
              >
                github.com/radixSew ↗
              </a>
            </div>

            {/* LinkedIn */}
            <div className="contact-detail">
              <span>LINKEDIN</span>

              <a
                href="https://linkedin.com/in/radhika-sewwandi"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/radhika-sewwandi ↗
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
