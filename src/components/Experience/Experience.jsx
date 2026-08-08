import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import experience from "../../data/experience.js";
import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      <motion.div
        className="experience-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="experience-heading">
          <span className="section-kicker">Experience</span>
          <h2>Practice shaped through real projects.</h2>
        </div>

        <div className="experience-grid">
          {experience.map((item, index) => (
            <motion.article
              className="experience-card"
              key={item.role}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <div className="experience-icon">
                <FaBriefcase />
              </div>

              <span>{item.period}</span>
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <p>{item.details}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;