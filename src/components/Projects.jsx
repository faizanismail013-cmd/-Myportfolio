import { useReveal } from '../hooks/useAnimations';
import { projectsData } from '../data/content';
import './Projects.css';

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-label">
          <span className="section-number">03</span> Projects
        </div>

        <div className="projects__list">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [ref, isVisible] = useReveal({ threshold: 0.1 });

  return (
    <article
      ref={ref}
      className={`project-card ${isVisible ? 'project-card--visible' : ''}`}
    >
      <div className="project-card__visual">
        <div
          className="project-card__preview"
          style={{ background: project.gradient }}
        >
          <div className="project-card__preview-content">
            <span className="project-card__preview-number">{project.number}</span>
            <span className="project-card__preview-title">{project.title}</span>
            <div className="project-card__preview-dots">
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="project-card__preview-dot" style={{ background: project.accent }}>
                  {tech[0]}
                </span>
              ))}
            </div>
          </div>
          <div className="project-card__preview-grid">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="project-card__preview-cell" />
            ))}
          </div>
        </div>
      </div>

      <div className="project-card__info">
        <div className="project-card__top">
          <span className="project-card__number">{project.number}</span>
          <div className="project-card__tech-list">
            {project.technologies.map((tech) => (
              <span key={tech} className="project-card__tech">{tech}</span>
            ))}
          </div>
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>

        {project.highlight && (
          <p className="project-card__highlight">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            {project.highlight}
          </p>
        )}

        <div className="project-card__action">
          {project.url ? (
            <a href={project.url} className="project-card__link" target="_blank" rel="noopener noreferrer">
              View Project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          ) : (
            <span className="project-card__coming-soon">
              Details Coming Soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
