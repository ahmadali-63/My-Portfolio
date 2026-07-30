    import "./Footer.css";

    function Footer() {
    return (
        <footer className="footer">
        <div className="footer-container">
            <h2>Ahmad Ali</h2>

            <p>Full Stack MERN Developer | Computer Science Student</p>

            <div className="footer-links">
            <a
                href="mailto:ahmadaliolpak@gmail.com"
                target="_blank"
                rel="noreferrer"
            >
                Email
            </a>

            <a
                href="https://github.com/ahmadaliolpak-stack"
                target="_blank"
                rel="noreferrer"
            >
                GitHub
            </a>

            <a
                href="https://linkedin.com/in/ahmad-ali-2b6407318"
                target="_blank"
                rel="noreferrer"
            >
                LinkedIn
            </a>
            </div>

            <p className="copyright">
            &copy; {new Date().getFullYear()} Ahmad Ali. All Rights Reserved.
            </p>
        </div>
        </footer>
    );
    }

    export default Footer;