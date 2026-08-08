import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import {
  FaCode,
  FaLayerGroup,
  FaRocket,
  FaArrowDown,
} from "react-icons/fa";
import "./Home.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
  },
};

const slideRightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.94 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      delay: index * 0.1,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const highlightCards = [
  {
    icon: <FaCode />,
    title: "Frontend",
    text: "React, responsive UI & clean layouts",
  },
  {
    icon: <FaLayerGroup />,
    title: "Backend",
    text: "Node.js, Express & REST APIs",
  },
  {
    icon: <FaRocket />,
    title: "Full Stack",
    text: "MERN apps from idea to deploy",
  },
];

const techStack = ["React", "Node.js", "Express", "MongoDB", "JavaScript"];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ahmadaliolpak-stack",
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor" className="icon-svg" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmad-ali-2b6407318/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100081540682794",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const Home = ({ onNavigate }) => {
  const typedRef = useRef(null);
  const typedElementRef = useRef(null);

  const handleBtnClick = (event, sectionId) => {
    event.preventDefault();
    onNavigate?.(sectionId);
  };

  useEffect(() => {
    if (!typedElementRef.current) return undefined;

    typedRef.current = new Typed(typedElementRef.current, {
      strings: [
        "Full Stack MERN Developer",
        "React.js Expert",
        "Node.js Enthusiast",
        "UI/UX Designer",
      ],
      typeSpeed: 55,
      backSpeed: 35,
      backDelay: 2200,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      smartBackspace: true,
      autoInsertCss: true,
      fadeOut: false,
    });

    return () => typedRef.current?.destroy();
  }, []);

  return (
    <section id="home" className="home">
      <div className="home-glow home-glow--one" aria-hidden="true" />
      <div className="home-glow home-glow--two" aria-hidden="true" />

      <div className="home-container">
        <motion.div
          className="home-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="home-intro" variants={fadeUpVariants}>
            <span className="section-kicker home-kicker">Welcome</span>

            <h1>
              Hi, I&apos;m <span className="highlight">Ahmad Ali</span>
            </h1>

            <div className="typed-wrapper">
              <h2>
                <span ref={typedElementRef} className="typed-text" />
              </h2>
            </div>

            <p className="home-bio">
              I build modern, responsive and scalable web applications using
              React.js, Node.js, Express.js and MongoDB — focused on seamless
              user experiences and robust backend solutions.
            </p>

            <div className="tech-pills">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="tech-pill"
                  variants={cardVariants}
                  custom={index}
                  whileHover={{ y: -4, scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="home-buttons">
              <motion.a
                href="#projects"
                className="btn btn-primary"
                onClick={(event) => handleBtnClick(event, "projects")}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.a>

              <motion.a
                href="#contact"
                className="btn btn-secondary"
                onClick={(event) => handleBtnClick(event, "contact")}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.a>
            </div>

            <div className="social-links">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={link.label}
                  whileHover={{ y: -5, scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div className="home-visual" variants={slideRightVariants}>
            <motion.div
              className="profile-card"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div className="profile-ring">
                <div className="profile-ring-glow" aria-hidden="true" />
                <img
                  src="/Profile.jpg"
                  alt="Ahmad Ali"
                  loading="eager"
                  decoding="async"
                  className="profile-image"
                  onError={(event) => {
                    event.currentTarget.src =
                      "https://via.placeholder.com/240x240/1B2631/A5CBD6?text=AA";
                  }}
                />
              </div>

              <div className="profile-meta">
                <span className="status-dot" aria-hidden="true" />
                <span>Available for opportunities</span>
              </div>
            </motion.div>

            <div className="home-cards">
              {highlightCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  className="home-card"
                  variants={cardVariants}
                  custom={index + 1}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                >
                  <div className="home-card-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        className="scroll-hint"
        onClick={() => onNavigate?.("about")}
        aria-label="Scroll to about section"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span>Explore</span>
        <motion.span
          className="scroll-hint-icon"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaArrowDown />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Home;
