import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skills from "../../data/skills";
import "./Skills.css";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(skills.map((skill) => skill.category))];

  // Filter skills based on category
  const getFilteredSkills = () => {
    if (activeCategory === "All") {
      return skills;
    } else {
      return skills.filter((skill) => skill.category === activeCategory);
    }
  };

  const filteredSkills = getFilteredSkills();

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  // Group skills by category for "All" view
  const getGroupedSkills = () => {
    const grouped = {};
    skills.forEach((skill) => {
      if (!grouped[skill.category]) {
        grouped[skill.category] = [];
      }
      grouped[skill.category].push(skill);
    });
    return grouped;
  };

  const groupedSkills = getGroupedSkills();

  return (
    <section className="skills-section" id="skills">
      <motion.div
        className="skills-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="skills-header">
          <div className="skills-header-top">
            <h2 className="skills-title">
               My Skills
            </h2>
            <div className="skills-username">
            </div>
          </div>
          <h3 className="skills-subtitle1">
            Technologies i work with
          </h3>
          <p className="skills-subtitle">
            I build modern, responsive web applications using React.js, JavaScript, Node.js, Express.js, MongoDB, and SQL, with a strong foundation in HTML, CSS, Java, and Python. I’m continuously learning and expanding my skills across the MERN stack and full-stack development. 
          </p>
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`category-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          {activeCategory === "All" ? (
            // Show grouped by category
            <motion.div
              key="all-skills"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {Object.entries(groupedSkills).map(([category, categorySkills], catIdx) => (
                <motion.div
                  key={category}
                  className="category-section"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: catIdx * 0.1 }}
                >
                  <div className="category-header">
                    <h3>{category}</h3>
                    <span className="category-count">{categorySkills.length}</span>
                  </div>
                  <div className="skills-grid">
                    {categorySkills.map((skill, index) => {
                      const IconComponent = skill.icon;
                      return (
                        <motion.div
                          className="skill-card"
                          key={skill.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{ y: -5, scale: 1.04 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.04 }}
                        >
                          <div
                            className="skill-icon-wrapper"
                            style={{ background: skill.bgColor }}
                          >
                            <IconComponent style={{ color: skill.color }} />
                          </div>
                          <div className="skill-name">{skill.name}</div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // Show filtered by category
            <motion.div
              key={activeCategory}
              className="category-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="category-header">
                <h3>{activeCategory}</h3>
                <span className="category-count">{filteredSkills.length}</span>
              </div>
              <div className="skills-grid">
                {filteredSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      className="skill-card"
                      key={skill.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ y: -5, scale: 1.04 }}
                      transition={{ duration: 0.3, delay: index * 0.04 }}
                    >
                      <div
                        className="skill-icon-wrapper"
                        style={{ background: skill.bgColor }}
                      >
                        <IconComponent style={{ color: skill.color }} />
                      </div>
                      <div className="skill-name">{skill.name}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;