    import { useState, useEffect } from "react";
    import "./Navbar.css";

    import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

    const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [active, setActive] = useState("home");
    const [sticky, setSticky] = useState(false);

    const links = [
        { id: "home", title: "Home" },
        { id: "about", title: "About" },
        { id: "education", title: "Education" },
        { id: "skills", title: "Skills" },
        { id: "experience", title: "Experience" },
        { id: "projects", title: "Projects" },
        { id: "contact", title: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
        setSticky(window.scrollY > 50);

        const sections = document.querySelectorAll("section");

        sections.forEach((section) => {
            const top = window.scrollY;
            const offset = section.offsetTop - 120;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");

            if (top >= offset && top < offset + height) {
            setActive(id);
            }
        });
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        setMenu(false);
    };

    return (
        <nav className={sticky ? "navbar sticky" : "navbar"}>
        <div className="nav-container">

            <a href="#home" className="logo">
            Ahmad<span>.</span>
            </a>

            <ul className={menu ? "nav-links active" : "nav-links"}>
            {links.map((item) => (
                <li key={item.id}>
                <a
                    href={`#${item.id}`}
                    onClick={handleClick}
                    className={active === item.id ? "active-link" : ""}
                >
                    {item.title}
                </a>
                </li>
            ))}

            <li>
                <a
                href="public\Resume.pdf"
                className="resume-btn mobile-btn"
                download
                >
                <FaDownload />
                Resume
                </a>
            </li>
            </ul>

            <a
            href="public\Resume.pdf"
            download
            className="resume-btn desktop-btn"
            >
            <FaDownload />
            Resume
            </a>

            <div
            className="menu-icon"
            onClick={() => setMenu(!menu)}
            >
            {menu ? <FaTimes /> : <FaBars />}
            </div>
        </div>
        </nav>
    );
    };

    export default Navbar;
