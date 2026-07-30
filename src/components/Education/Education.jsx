import education from "../../data/education";
import "./Education.css";

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="education-container">

        <h2 className="education-title">Education</h2>

        <div className="timeline">

          {education.map((edu, index) => (
            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span className="timeline-year">
                  {edu.period}
                </span>

                <h3>{edu.degree}</h3>

                <h4>{edu.institution}</h4>

                <p>{edu.details}</p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;