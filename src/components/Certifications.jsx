import { useReveal } from '../hooks/useAnimations';
import { certificationsData } from '../data/content';
import './Certifications.css';

export default function Certifications() {
  const [ref, isVisible] = useReveal({ threshold: 0.15 });

  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <div className="section-label">
          <span className="section-number">06</span> Certifications
        </div>

        <div ref={ref} className={`certifications__list ${isVisible ? 'visible' : ''}`}>
          {certificationsData.map((cert, i) => (
            <div
              key={cert.id}
              className="cert-card"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="cert-card__number">0{cert.id}</div>
              <div className="cert-card__content">
                <h3 className="cert-card__title">{cert.title}</h3>
                <p className="cert-card__issuer">{cert.issuer}</p>
              </div>
              <div className="cert-card__action">
                {cert.url ? (
                  <a href={cert.url} className="cert-card__link" target="_blank" rel="noopener noreferrer">
                    View
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                ) : (
                  <span className="cert-card__badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="8" r="7" />
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                    </svg>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
