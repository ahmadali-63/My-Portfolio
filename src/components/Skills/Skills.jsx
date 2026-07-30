    import { useState } from "react";
    import skills from "../../data/skills";
    import "./Skills.css";

    const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    // Get unique categories
    const categories = ["All", ...new Set(skills.map(skill => skill.category))];

    // Filter skills based on category
    const getFilteredSkills = () => {
        if (activeCategory === "All") {
        return skills;
        } else {
        return skills.filter(skill => skill.category === activeCategory);
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
        <div className="skills-container">
            {/* Header */}
            <div className="skills-header">
            <div className="skills-header-top">
                <h2 className="skills-title">
                <span>⚡</span> My Skills
                </h2>
                <div className="skills-username">
                <span>@</span>ahmad.dev
                </div>
            </div>
            <p className="skills-subtitle">
                Technologies I work with · constantly evolving
            </p>
            </div>

            {/* Category Filters */}
            <div className="category-filters">
            {categories.map((category) => (
                <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category)}
                >
                {category}
                </button>
            ))}
            </div>

            {/* Skills Display */}
            {activeCategory === "All" ? (
            // Show grouped by category
            Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <div key={category} className="category-section">
                <div className="category-header">
                    <h3>{category}</h3>
                    <span className="category-count">{categorySkills.length}</span>
                </div>
                <div className="skills-grid">
                    {categorySkills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                        <div className="skill-card" key={skill.id}>
                        <div
                            className="skill-icon-wrapper"
                            style={{ background: skill.bgColor }}
                        >
                            <IconComponent style={{ color: skill.color }} />
                        </div>
                        <div className="skill-name">{skill.name}</div>
                        </div>
                    );
                    })}
                </div>
                </div>
            ))
            ) : (
            // Show filtered by category
            <div className="category-section">
                <div className="category-header">
                <h3>{activeCategory}</h3>
                <span className="category-count">{filteredSkills.length}</span>
                </div>
                <div className="skills-grid">
                {filteredSkills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                    <div className="skill-card" key={skill.id}>
                        <div
                        className="skill-icon-wrapper"
                        style={{ background: skill.bgColor }}
                        >
                        <IconComponent style={{ color: skill.color }} />
                        </div>
                        <div className="skill-name">{skill.name}</div>
                    </div>
                    );
                })}
                </div>
            </div>
            )}
        </div>
        </section>
    );
    };

    export default Skills;