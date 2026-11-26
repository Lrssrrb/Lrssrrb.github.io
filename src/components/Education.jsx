import { educationList } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="section-heading text-center">
        <h2>education &amp; training</h2>
      </div>
      <div className="container">
        <div className="timelines">
          <ul>
            {educationList.map((edu) => (
              <li key={edu.institution}>
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
    </section>
  );
}
