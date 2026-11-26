import { educationList } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";

export default function Education() {
  const [ref, visible] = useReveal();

  return (
    <section id="education" className="education">
      <div
        ref={ref}
        className={`reveal-block ${visible ? "is-visible" : ""}`}
      >
        <div className="section-heading text-center">
          <h2>education &amp; training</h2>
        </div>
        <div className="container">
          <div className="timelines">
            <ul>
              {educationList.map((edu) => (
                <li key={edu.institution} className="edu-item-hover">
                  <span>{edu.period}</span>
                  <div className="timeline_content">
                    <h3>{edu.institution}</h3>
                    <p>{edu.degree}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
