import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaGraduationCap,
  FaLaptopCode,
  FaLayerGroup,
  FaRocket,
} from "react-icons/fa";
import "./About.css";

const highlights = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Development",
    text: "Responsive projects using HTML, CSS, and JavaScript.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Core CS Foundation",
    text: "Strong base in Data Structures and Object-Oriented Programming.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Systems",
    text: "Comfortable designing and working with structured data.",
  },
  {
    icon: <FaRocket />,
    title: "MERN Growth",
    text: "Expanding toward full-stack development with the MERN stack.",
  },
];

const timeline = [
  "Computer Science undergraduate at COMSATS University Islamabad, Sahiwal Campus.",
  "Building practical frontend projects with clean layouts and responsive behavior.",
  "Growing into a full-stack developer through MERN Stack development.",
];

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="about-heading">
          <span className="section-kicker">About Me</span>
          <h2>
            Turning ideas into practical
            <span> software solutions.</span>
          </h2>
        </div>

        <div className="about-layout">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p>
              Hi, I'm <strong>Ahmad Ali</strong>, a Computer Science
              undergraduate at{" "}
              <strong>COMSATS University Islamabad, Sahiwal Campus</strong>. I
              am passionate about building modern web applications and improving
              my skills in software development.
            </p>

            <p>
              I have experience creating responsive frontend projects using{" "}
              <strong>HTML, CSS, and JavaScript</strong>, with a strong
              foundation in{" "}
              <strong>
                Data Structures, Object-Oriented Programming, and Database
                Systems
              </strong>
              . Currently, I am expanding my knowledge in{" "}
              <strong>MERN Stack development</strong> to become a full-stack
              developer.
            </p>

            <p>
              I enjoy solving problems, learning new technologies, and turning
              ideas into practical software solutions. My goal is to build
              efficient, user-friendly applications while continuously growing
              as a software engineer.
            </p>
          </motion.div>

          <motion.div
            className="about-timeline"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="timeline-line" />
            {timeline.map((item, index) => (
              <motion.div
                className="timeline-item"
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              >
                <span className="timeline-dot">
                  {index === 0 ? <FaGraduationCap /> : <FaCode />}
                </span>
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="about-cards">
          {highlights.map((item, index) => (
            <motion.article
              className="about-card"
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.03 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="about-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
