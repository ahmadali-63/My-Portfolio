    import projects from "../../data/projects";
    import "./Projects.css";

    const Projects = () => {
    return (
        <section className="projects" id="projects">
        <div className="projects-container">

            <h2 className="section-title">My Projects</h2>

            <div className="projects-grid">

            {projects.map((project, index) => (
                <div
                className="project-card"
                key={index}
                style={{
                    animationDelay: `${index * 0.2}s`,
                }}
                >
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                    {project.tech.split(",").map((tech, i) => (
                    <span key={i}>{tech.trim()}</span>
                    ))}
                </div>

                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                >
                    View on GitHub
                </a>

                </div>
            ))}

            </div>
        </div>
        </section>
    );
    };

    export default Projects;