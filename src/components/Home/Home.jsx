import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import "./Home.css";

const getParticleValue = (seed) => {
  const value = Math.sin(seed) * 10000;
  return value - Math.floor(value);
};

const particles = Array.from({ length: 150 }, (_, i) => ({
  id: i,
  size: getParticleValue(i + 1) * 8 + 2,
  duration: 7000 + getParticleValue(i + 151) * 4000,
  delay: getParticleValue(i + 301) * 11000,
  startX: getParticleValue(i + 451) * 100,
  startY: 100 + getParticleValue(i + 601) * 10,
  opacity: 0.3 + getParticleValue(i + 751) * 0.5,
}));

const Home = () => {
  const typedRef = useRef(null);
  const typedElementRef = useRef(null);

  useEffect(() => {
    if (typedElementRef.current) {
      const options = {
        strings: [
          "Full Stack MERN Developer",
          "React.js Expert",
          "Node.js Enthusiast",
          "UI/UX Designer",
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: "|",
        smartBackspace: true,
        autoInsertCss: true,
        fadeOut: false,
      };

      typedRef.current = new Typed(typedElementRef.current, options);
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  return (
    <section id="home" className="home">
      {/* Particles Background */}
      <div className="particles-container">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="circle-container"
            style={{
              width: particle.size + "px",
              height: particle.size + "px",
              animationDuration: particle.duration + "ms",
              animationDelay: particle.delay + "ms",
              left: particle.startX + "%",
              top: particle.startY + "vh",
              position: "absolute",
            }}
          >
            <div
              className="circle"
              style={{
                opacity: particle.opacity,
              }}
            />
          </div>
        ))}
      </div>

      <div className="home-container">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="profile-image-container"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.3,
            }}
          >
            {/* 
              ✅ IMAGE FIX:
              1. Take your image "profile.jpg"
              2. Put it inside your project's "public" folder.
              3. Change src to "/profile.jpg" (no import needed)
            */}
            <img
              src="public\Profile.jpg"
              alt="Ahmad Ali"
              className="profile-image"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/200x200/1a1a2e/00d4ff?text=AA";
              }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hi, I'm <span className="highlight">Ahmad Ali</span>
          </motion.h1>

          <motion.div
            className="typed-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2>
              <span 
                ref={typedElementRef}
                className="typed-text"
                style={{ 
                  display: 'inline-block',
                  minHeight: '60px',
                  lineHeight: '1.4'
                }}
              ></span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I build modern, responsive and scalable web applications using
            React.js, Node.js, Express.js and MongoDB. With a passion for
            creating seamless user experiences and robust backend solutions.
          </motion.p>

          <motion.div
            className="home-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.a
              href="#projects"
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              className="btn secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* ------------ SOCIAL ICONS (SVG format) ------------ */}
          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* GitHub */}
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="social-icon"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" className="icon-svg">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="social-icon"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>

            {/* Facebook */}
            <motion.a
              href="https://www.facebook.com/profile.php?id=100081540682794"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="social-icon"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;