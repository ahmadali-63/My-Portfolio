import { motion } from "framer-motion";
import education from "../../data/education";
import "./Education.css";

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="education-container">
        <motion.h2
          className="education-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <div className="timeline">
          {education.map((edu, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-dot"></div>

              <motion.div
                className="timeline-content"
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <span className="timeline-year">{edu.period}</span>

                <h3>{edu.degree}</h3>

                <h4>{edu.institution}</h4>

                <p>{edu.details}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;