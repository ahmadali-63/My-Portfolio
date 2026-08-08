import { motion } from "framer-motion";
import projects from "../../data/projects";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <motion.div
        className="projects-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.split(",").map((tech, i) => (
                  <span key={i}>{tech.trim()}</span>
                ))}
              </div>

              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View on GitHub
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;