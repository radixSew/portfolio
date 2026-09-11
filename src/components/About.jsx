import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: index * 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function About() {
  return (
    <section id="about" className="about section-padding">
      <div className="container">

        {/* About Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <p className="section-label">ABOUT ME</p>

          <h2>
            Turning ideas into{" "}
            <span>digital products.</span>
          </h2>
        </motion.div>

        {/* About Grid */}
        <div className="about-grid">

          {/* Left Side */}
          <motion.div
            className="about-left"
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <div className="about-intro">
              <motion.span
                className="about-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                01
              </motion.span>

              <h3>Full-Stack Developer</h3>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.25,
                duration: 0.6,
              }}
            >
              I'm a Full-Stack Developer who enjoys building
              applications from the frontend interface to the
              backend API and database.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
            >
              I work mainly with React.js, C#, ASP.NET Core,
              Entity Framework Core and SQL. I focus on writing
              clean, maintainable code and creating applications
              that are practical and easy to use.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.55,
                duration: 0.6,
              }}
            >
              I'm continuously expanding my skills across modern
              software development, backend architecture and
              AI/ML technologies.
            </motion.p>

            {/* Quote */}
            <motion.div
              className="about-highlight"
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.7,
                duration: 0.7,
              }}
            >
              <span className="highlight-line"></span>

              <p>
                "I believe good software is not only about
                writing code — it's about solving real problems."
              </p>
            </motion.div>
          </motion.div>

          {/* Right Cards */}
          <div className="about-right">

            {/* Card 01 */}
            <motion.div
              className="about-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              custom={0}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.25,
                },
              }}
            >
              <div className="card-number">01</div>

              <div>
                <h3>Frontend</h3>

                <p>
                  Building responsive and interactive user
                  interfaces with React.js.
                </p>
              </div>
            </motion.div>

            {/* Card 02 */}
            <motion.div
              className="about-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              custom={1}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.25,
                },
              }}
            >
              <div className="card-number">02</div>

              <div>
                <h3>Backend</h3>

                <p>
                  Developing secure and scalable APIs using
                  ASP.NET Core and C#.
                </p>
              </div>
            </motion.div>

            {/* Card 03 */}
            <motion.div
              className="about-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              custom={2}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.25,
                },
              }}
            >
              <div className="card-number">03</div>

              <div>
                <h3>Database</h3>

                <p>
                  Designing and working with structured
                  relational databases using SQL.
                </p>
              </div>
            </motion.div>

            {/* Card 04 */}
            <motion.div
              className="about-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              custom={3}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.25,
                },
              }}
            >
              <div className="card-number">04</div>

              <div>
                <h3>Architecture</h3>

                <p>
                  Applying Clean Architecture, SOLID principles
                  and maintainable development practices.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
