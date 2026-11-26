import { useState } from "react";
import { skillCategories } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ref, visible] = useReveal();

  const filterTabs = [
    "All",
    "Technical Skills",
    "Soft Skills",
    ...skillCategories.map((c) => c.title),
  ];

  const visibleCategories = skillCategories.filter((c) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Technical Skills") return c.type === "technical";
    if (selectedCategory === "Soft Skills") return c.type === "soft";
    return c.title === selectedCategory;
  });

  return (
    <section id="skills" className="skills">
      <div
        ref={ref}
        className={`skill-content reveal-block ${visible ? "is-visible" : ""}`}
      >
        <div className="section-heading text-center">
          <h2>technical &amp; soft skills</h2>
        </div>

        <div className="container" style={{ marginTop: "32px" }}>
          <div className="skill-filter-bar">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedCategory(tab)}
                className={`skill-filter-btn ${
                  selectedCategory === tab ? "active" : ""
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="row" style={{ marginTop: "24px" }}>
            {visibleCategories.map((category) => (
              <div
                key={category.title}
                className={
                  visibleCategories.length === 1
                    ? "col-md-8 col-md-offset-2"
                    : category.colClass
                }
              >
                <div className="skill-category-box">
                  <h4>{category.title}</h4>
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
