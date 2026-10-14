import { useReveal } from '../hooks/useAnimations';
import { experienceData } from '../data/content';
import './Experience.css';

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-label">
          <span className="section-number">02</span> Experience
        </div>

        <div className="experience__list">
          {experienceData.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, index }) {
  const [ref, isVisible] = useReveal({ threshold: 0.15 });

  return (
    <article
      ref={ref}
      className={`exp-card ${isVisible ? 'exp-card--visible' : ''}`}
    >
      <div className="exp-card__header">
        <div className="exp-card__meta">
          <span className="exp-card__number">0{index + 1}</span>
          <span className="exp-card__period">{exp.period}</span>
        </div>
        <span className="exp-card__type">{exp.type}</span>
      </div>

      <div className="exp-card__body">
        <div className="exp-card__title-block">
          <h3 className="exp-card__role">{exp.role}</h3>
          <p className="exp-card__company">{exp.company}</p>
        </div>

        <div className="exp-card__details">
          <ul className="exp-card__responsibilities">
            {exp.responsibilities.map((item, i) => (
              <li key={i} className="exp-card__responsibility">
                {item}
              </li>
            ))}
          </ul>

          <div className="exp-card__tech">
            {exp.technologies.map((tech) => (
              <span key={tech} className="exp-card__tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
