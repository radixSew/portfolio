import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiAntdesign,
  SiDotnet,
  SiMysql,
  SiGit,
  SiGithub,
  SiSwagger,
  SiSharp,
  SiPhpmyadmin,
  SiPostman,
  SiPython,
  SiJira,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import "../styles/Skills.css";
function Skills() {
  const skills = [
    { name: "React.js", icon: <SiReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Ant Design", icon: <SiAntdesign /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <SiPython /> },
    { name: "C#", icon: <SiSharp /> },
    { name: ".NET 8", icon: <SiDotnet /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "phpMyAdmin", icon: <SiPhpmyadmin /> },
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Swagger", icon: <SiSwagger /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Jira", icon: <SiJira /> },
  ];
  return (
    <section id="skills" className="skills section-padding">
      {" "}
      <div className="container">
        {" "}
        {/* Section Heading */}{" "}
        <motion.div
          className="section-title skills-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {" "}
          <p className="section-label">TECH STACK</p>{" "}
          <h2>
            {" "}
            Tools I use to <br />{" "}
            <span className="gradient-text">build things.</span>{" "}
          </h2>{" "}
          <p className="skills-intro">
            {" "}
            Technologies and tools I use across frontend development, backend
            engineering, databases and software development.{" "}
          </p>{" "}
        </motion.div>{" "}
        {/* Skills Panel */}{" "}
        <motion.div
          className="skills-panel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          {" "}
          <div className="skills-grid">
            {" "}
            {skills.map((skill, index) => (
              <motion.div
                className="skill-item"
                key={skill.name}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: 0.25 + index * 0.05,
                  ease: "easeOut",
                }}
                title={skill.name}
              >
                {" "}
                <motion.span
                  className="skill-icon"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.12,
                  }}
                  whileHover={{ scale: 1.18, y: -6, rotate: 5 }}
                >
                  {" "}
                  {skill.icon}{" "}
                </motion.span>{" "}
              </motion.div>
            ))}{" "}
          </div>{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
export default Skills;
