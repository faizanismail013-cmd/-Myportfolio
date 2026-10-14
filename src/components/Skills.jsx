import { useState } from 'react';
import { useReveal } from '../hooks/useAnimations';
import { skillsData } from '../data/content';
import './Skills.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(Object.keys(skillsData)[0]);
  const [ref, isVisible] = useReveal({ threshold: 0.1 });

  const categories = Object.keys(skillsData);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-label">
          <span className="section-number">04</span> Skills
        </div>

        <div ref={ref} className={`skills__content ${isVisible ? 'visible' : ''}`}>
          <div className="skills__categories">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`skills__category-btn ${activeCategory === cat ? 'skills__category-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <span className="skills__category-index">0{i + 1}</span>
                {cat}
              </button>
            ))}
          </div>

          <div className="skills__display">
            <div className="skills__grid" key={activeCategory}>
              {skillsData[activeCategory].map((skill, i) => (
                <div
                  key={skill}
                  className="skills__item"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <span className="skills__item-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
