    import { FaBriefcase } from "react-icons/fa";
    import experience from "../../data/experience.js";
    import "./Experience.css";

    function Experience() {
    return (
        <section id="experience" className="experience">
        <div className="experience-container">
            <div className="experience-heading">
            <span className="section-kicker">Experience</span>
            <h2>Practice shaped through real projects.</h2>
            </div>

            <div className="experience-grid">
            {experience.map((item) => (
                <article className="experience-card" key={item.role}>
                <div className="experience-icon">
                    <FaBriefcase />
                </div>

                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.details}</p>
                </article>
            ))}
            </div>
        </div>
        </section>
    );
    }

    export default Experience;