import React from "react";
import { motion } from "framer-motion";
import "../styles/Experience.css";

function Experience() {
  const experiences = [
    {
      year: "2024 — Present",
      role: "Software Engineer",
      company: "Glitchfy",
      description:
        "Developing web applications and backend services using C#, ASP.NET Core, Entity Framework Core and SQL Server. Working with REST APIs, authentication, authorization and maintainable application architecture.",
      technologies: [
        "C#",
        ".NET Core",
        "EF Core",
        "SQL Server",
        "JWT",
      ],
    },
    {
      year: "2025 — 2026",
      role: "Associate Analyst – Data",
      company: "Inplay Matrix",
      description:
        "Worked with operational data, platform validation, event configuration, reporting and anomaly identification while supporting data-driven operational processes.",
      technologies: [
        "Data Analysis",
        "Excel",
        "Reporting",
        "Validation",
      ],
    },
    {
      year: "2024",
      role: "Frontend Developer Intern",
      company: "IYKONS",
      description:
        "Developed responsive React.js interfaces, integrated REST APIs and worked with Git, Jira and modern frontend development practices.",
      technologies: [
        "React.js",
        "JavaScript",
        "REST API",
        "Git",
      ],
    },
  ];

  return (
    <section id="experience" className="experience section-padding">
      <div className="container">

        {/* Experience Header */}
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">EXPERIENCE</p>

          <h2>
            My professional
            <br />
            <span className="gradient-text">journey.</span>
          </h2>
        </motion.div>

        {/* Experience List */}
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <motion.div
              className="experience-item"
              key={experience.company}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
              }}
            >
              {/* Experience Year */}
              <div className="experience-year">
                {experience.year}
              </div>

              {/* Experience Line */}
              <div className="experience-line">
                <span></span>
              </div>

              {/* Experience Content */}
              <div className="experience-content">
                <h3>{experience.role}</h3>

                <h4>{experience.company}</h4>

                <p>{experience.description}</p>

                {/* Technologies */}
                <div className="experience-tags">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
