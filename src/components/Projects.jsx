import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";

function Projects() {
  const [activeCard, setActiveCard] = useState(0);

  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const isHoveringRef = useRef(false);

  const projects = [
    {
      number: "01",
      title: "Weekly Report Generator",
      category: "FULL-STACK APPLICATION",
      description:
        "A complete team reporting platform where team members submit weekly reports and managers review, approve or request corrections. Includes role-based authentication, report versions and dashboards.",
      technologies: ["React.js", ".NET 8", "C#", "MySQL", "EF Core", "JWT"],
      github: "https://github.com/radixSew/Weekly-Report-Generator",
    },
    {
      number: "02",
      title: "Inventory Management System",
      category: "FULL-STACK APPLICATION",
      description:
        "A full-stack inventory management application for managing products, stock levels, and inventory operations. Includes CRUD functionality, RESTful APIs, LINQ-based searching and filtering, and SQL Server database management.",
      technologies: [
        "ASP.NET Core Web API",
        "C#",
        "SQL Server",
        "Entity Framework Core",
        "LINQ",
      ],
      github: "#",
    },
    {
      number: "03",
      title: "Employee Management System",
      category: "BACKEND APPLICATION",
      description:
        "A secure employee management application for managing employees, departments and roles. Includes JWT authentication, role-based authorization, Entity Framework Core, layered architecture and dependency injection.",
      technologies: [
        "ASP.NET Core Web API",
        "C#",
        "SQL Server",
        "Entity Framework Core",
        "JWT",
      ],
      github: "#",
    },
    {
      number: "04",
      title: "Online Appointment Booking System",
      category: "BACKEND APPLICATION",
      description:
        "An appointment scheduling platform for managing bookings and available time slots. Includes conflict detection, availability validation, asynchronous database operations and reliable date and time management.",
      technologies: [
        "ASP.NET Core Web API",
        "C#",
        "SQL Server",
        "Entity Framework Core",
        "REST API",
      ],
      github: "#",
    },
    {
      number: "05",
      title: "Bridge Park Hotel",
      category: "FRONTEND APPLICATION",
      description:
        "A responsive hotel website frontend built with React.js for an interactive booking experience. Includes authentication interfaces, form validation, routing, REST API integration and reusable UI components.",
      technologies: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "REST API",
        "Ant Design",
        "Tailwind CSS",
      ],
      github: "https://www.bridgeparkhotel.co.uk/",
    },
  ];

  // Create 3 copies for a smoother infinite carousel
  const infiniteProjects = [
    ...projects,
    ...projects,
    ...projects,
  ];

  /*
   * Update the active card based on which card
   * is closest to the center of the carousel.
   */
  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (!scrollContainer) return;

    const updateActiveCard = () => {
      const cards = scrollContainer.querySelectorAll(".project-card");

      if (!cards.length) return;

      const containerRect = scrollContainer.getBoundingClientRect();

      const containerCenter =
        containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();

        const cardCenter =
          cardRect.left + cardRect.width / 2;

        const distance = Math.abs(
          containerCenter - cardCenter
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      // Convert duplicated index back to original project index
      setActiveCard(closestIndex % projects.length);
    };

    updateActiveCard();

    scrollContainer.addEventListener(
      "scroll",
      updateActiveCard,
      { passive: true }
    );

    window.addEventListener("resize", updateActiveCard);

    return () => {
      scrollContainer.removeEventListener(
        "scroll",
        updateActiveCard
      );

      window.removeEventListener(
        "resize",
        updateActiveCard
      );
    };
  }, [projects.length]);

  /*
   * Start from the middle copy.
   * This allows the carousel to move in both directions.
   */
  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (!scrollContainer) return;

    const list = scrollContainer.querySelector(".projects-list");

    if (!list) return;

    const setWidth = list.scrollWidth / 3;

    scrollContainer.scrollLeft = setWidth;

  }, []);

  /*
   * Automatic infinite scrolling
   */
  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (!scrollContainer) return;

    let lastTime = performance.now();

    const speed = 0.04;

    const autoScroll = (currentTime) => {
      const delta = currentTime - lastTime;

      lastTime = currentTime;

      if (!isHoveringRef.current) {
        scrollContainer.scrollLeft += speed * delta;
      }

      const list =
        scrollContainer.querySelector(".projects-list");

      if (list) {
        const setWidth = list.scrollWidth / 3;

        /*
         * If user reaches the third copy,
         * move back by one set.
         */
        if (
          scrollContainer.scrollLeft >=
          setWidth * 2
        ) {
          scrollContainer.scrollLeft -= setWidth;
        }

        /*
         * If user manually scrolls too far
         * to the beginning, move forward by one set.
         */
        if (
          scrollContainer.scrollLeft <= 0
        ) {
          scrollContainer.scrollLeft += setWidth;
        }
      }

      animationRef.current =
        requestAnimationFrame(autoScroll);
    };

    animationRef.current =
      requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(
        animationRef.current
      );
    };
  }, []);

  return (
    <section
      id="projects"
      className="projects section-padding"
    >
      <div className="container">

        {/* Section Heading */}
        <motion.div
          className="section-title projects-title"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <p className="section-label">
            SELECTED WORK
          </p>

          <h2>
            Things I've
            <br />
            <span className="gradient-text">
              built.
            </span>
          </h2>

          <p>
            A selection of projects showcasing my
            experience across full-stack development,
            frontend engineering and AI.
          </p>
        </motion.div>

        {/* Project Carousel */}
        <div
          className="projects-scroll"
          ref={scrollRef}
          onMouseEnter={() => {
            isHoveringRef.current = true;
          }}
          onMouseLeave={() => {
            isHoveringRef.current = false;
          }}
        >
          <div className="projects-list">

            {infiniteProjects.map(
              (project, index) => {
                const originalIndex =
                  index % projects.length;

                return (
                  <motion.article
                    key={`${project.number}-${index}`}
                    className={`project-card ${
                      activeCard === originalIndex
                        ? "project-card-active"
                        : ""
                    }`}
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.6,
                      delay:
                        (index % projects.length) *
                        0.12,
                    }}
                  >

                    {/* Project Number */}
                    <div className="project-number">
                      {project.number}
                    </div>

                    {/* Project Header */}
                    <div className="project-main">

                      <div className="project-heading">

                        <p>
                          {project.category}
                        </p>

                        <h3>
                          {project.title}
                        </h3>

                      </div>

                      <a
                        href={project.github}
                        className="project-arrow"
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title}`}
                      >
                        ↗
                      </a>

                    </div>

                    {/* Description */}
                    <p className="project-description">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="project-tech">
                      {project.technologies.map(
                        (technology) => (
                          <span key={technology}>
                            {technology}
                          </span>
                        )
                      )}
                    </div>

                  </motion.article>
                );
              }
            )}

          </div>
        </div>

        {/* Scroll Hint */}
        <div className="projects-scroll-hint">
          <span>
            Scroll to explore
          </span>

          <span className="scroll-line"></span>

          <span>
            →
          </span>
        </div>

      </div>
    </section>
  );
}

export default Projects;