import { useReveal } from '../hooks/useAnimations';
import { aboutData } from '../data/content';
import './About.css';

export default function About() {
  const [sectionRef, sectionVisible] = useReveal({ threshold: 0.1 });
  const [detailsRef, detailsVisible] = useReveal({ threshold: 0.2 });

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-label">
          <span className="section-number">01</span> About
        </div>

        <div
          ref={sectionRef}
          className={`about__content ${sectionVisible ? 'visible' : ''}`}
        >
          <div className="about__text">
            {aboutData.summary.map((paragraph, i) => (
              <p key={i} className="about__paragraph" style={{ transitionDelay: `${i * 0.15}s` }}>
                {paragraph}
              </p>
            ))}
          </div>

          <div
            ref={detailsRef}
            className={`about__details ${detailsVisible ? 'visible' : ''}`}
          >
            <h3 className="about__details-title">Profile</h3>
            <dl className="about__info-list">
              {Object.entries(aboutData.details).map(([key, value], i) => (
                <div key={key} className="about__info-item" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <dt className="about__info-label">{key}</dt>
                  <dd className="about__info-value">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
