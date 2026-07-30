    import "./Hero.css";
    import { motion } from "framer-motion";
    import {
    FaGithub,
    FaLinkedin,
    FaArrowDown,
    FaDownload,
    } from "react-icons/fa";

    const Hero = () => {
    return (
        <section id="home" className="hero">

        <div className="blob blob1"></div>
        <div className="blob blob2"></div>

        <div className="hero-container">

            <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            >

            <h4>Hello, I'm</h4>

            <h1>
                Ahmad <span>Ali</span>
            </h1>

            <h2>
                Full Stack Developer
            </h2>

            <p>
                Passionate Computer Science student at COMSATS University
                Islamabad, Sahiwal Campus. I build responsive websites,
                scalable backend systems, and modern web applications using
                the MERN Stack.
            </p>

            <div className="hero-buttons">

                <a href="/resume.pdf" download className="btn primary">
                <FaDownload />
                Resume
                </a>

                <a href="#projects" className="btn secondary">
                View Projects
                </a>

            </div>

            <div className="hero-social">

                <a
                href="https://github.com/ahmadaliolpak-stack"
                target="_blank"
                rel="noreferrer"
                >
                <FaGithub />
                </a>

                <a
                href="https://www.linkedin.com/in/ahmad-ali-2b6407318/"
                target="_blank"
                rel="noreferrer"
                >
                <FaLinkedin />
                </a>

            </div>

            </motion.div>

            <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            >

            <div className="profile-ring">

                <img
                src="https://i.ibb.co/YBCv33dg/1758471348177.jpg"
                alt="Ahmad Ali"
                />

            </div>

            </motion.div>

        </div>

        <a href="#about" className="scroll-down">
            <FaArrowDown />
        </a>

        </section>
    );
    };

    export default Hero;