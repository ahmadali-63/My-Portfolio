import { FaCircle, FaRegCircle } from "react-icons/fa";
import "./Pagination.css";

const links = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "education", title: "Education" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const Pagination = ({ activeSection, onNavigate }) => {
  return (
    <div className="pagination-controls">
      <div className="pagination-title">Pages</div>
      <div className="pagination-list">
        {links.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <button
              key={link.id}
              type="button"
              className={`pagination-button ${isActive ? "active" : ""}`}
              onClick={() => onNavigate(link.id)}
              aria-label={`Go to ${link.title}`}
            >
              {isActive ? <FaCircle /> : <FaRegCircle />}
              <span>{link.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
