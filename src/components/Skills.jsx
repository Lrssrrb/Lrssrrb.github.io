import { skillCategories } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skill-content">
        <div className="section-heading text-center">
          <h2>technical skills</h2>
        </div>
        <div className="container" style={{ marginTop: "40px" }}>
          <div className="row">
            {skillCategories.map((category) => (
              <div key={category.title} className={category.colClass}>
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
