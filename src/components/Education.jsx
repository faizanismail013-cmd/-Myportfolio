import { useReveal } from '../hooks/useAnimations';
import { educationData } from '../data/content';
import './Education.css';

export default function Education() {
  const [ref, isVisible] = useReveal({ threshold: 0.15 });

  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-label">
          <span className="section-number">05</span> Education
        </div>

        <div ref={ref} className={`education__content ${isVisible ? 'visible' : ''}`}>
          <div className="education__main">
            <div className="education__degree-block">
              <h3 className="education__degree">{educationData.degree}</h3>
              <p className="education__field">{educationData.field}</p>
            </div>
            <div className="education__institution-block">
              <p className="education__institution">{educationData.institution}</p>
              <p className="education__location">{educationData.location}</p>
            </div>
          </div>

          <div className="education__coursework">
            <h4 className="education__coursework-title">Relevant Coursework</h4>
            <div className="education__coursework-list">
              {educationData.coursework.map((course, i) => (
                <span
                  key={course}
                  className="education__course"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
