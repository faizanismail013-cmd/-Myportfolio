import { useReveal } from '../hooks/useAnimations';
import { personalInfo } from '../data/content';
import './Contact.css';

export default function Contact() {
  const [ref, isVisible] = useReveal({ threshold: 0.1 });
  const [linksRef, linksVisible] = useReveal({ threshold: 0.2 });

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-label">
          <span className="section-number">07</span> Contact
        </div>

        <div ref={ref} className={`contact__content ${isVisible ? 'visible' : ''}`}>
          <h2 className="contact__headline">
            <span className="contact__headline-line">Have an</span>
            <span className="contact__headline-line contact__headline-line--accent">interesting problem</span>
            <span className="contact__headline-line">to solve?</span>
          </h2>

          <p className="contact__text">
            I'm interested in building useful software, exploring AI-driven solutions,
            and collaborating on meaningful technical projects.
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="contact__email-btn"
          >
            <span className="contact__email-btn-text">Get in Touch</span>
            <span className="contact__email-btn-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
        </div>

        <div ref={linksRef} className={`contact__links ${linksVisible ? 'visible' : ''}`}>
          <a
            href={`mailto:${personalInfo.email}`}
            className="contact__link"
            style={{ transitionDelay: '0s' }}
          >
            <span className="contact__link-label">Email</span>
            <span className="contact__link-value">{personalInfo.email}</span>
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="contact__link"
            style={{ transitionDelay: '0.08s' }}
          >
            <span className="contact__link-label">Phone</span>
            <span className="contact__link-value">{personalInfo.phone}</span>
          </a>
          <a
            href={personalInfo.linkedin}
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ transitionDelay: '0.16s' }}
          >
            <span className="contact__link-label">LinkedIn</span>
            <span className="contact__link-value">linkedin.com/in/faizan-ismail-</span>
          </a>
          <a
            href={personalInfo.github}
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ transitionDelay: '0.24s' }}
          >
            <span className="contact__link-label">GitHub</span>
            <span className="contact__link-value">github.com/faizan-ismail</span>
          </a>
        </div>
      </div>
    </section>
  );
}
