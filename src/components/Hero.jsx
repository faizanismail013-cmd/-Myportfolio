import AnimatedMarquee from './AnimatedMarquee';
import { personalInfo } from '../data/content';
import './Hero.css';

export default function Hero() {
  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      {/* Top Identity Block */}
      <div className="hero__header container">
        <div className="hero__identity">
          <span className="hero__identity-title">
            BACKEND DEVELOPER · AI/ML ENGINEER
          </span>
          <span className="hero__identity-location">
            GREATER NOIDA, INDIA
          </span>
        </div>

        <div className="hero__summary">
          <p className="hero__summary-text">
            "I build intelligent applications and reliable backend systems."
          </p>
        </div>
      </div>

      {/* Main Feature: 3 Oversized Animated Typography Rows */}
      <div className="hero__marquee-showcase" aria-label="Animated specialties">
        {/* ROW 1: BACKEND DEVELOPER */}
        <AnimatedMarquee
          text="BACKEND DEVELOPER"
          duration={26}
          color="#f0f0f0"
          separator=" • "
          repeat={8}
          className="hero__marquee-row hero__marquee-row--1"
        />

        {/* ROW 2: AI/ML ENGINEER */}
        <AnimatedMarquee
          text="AI/ML ENGINEER"
          duration={34}
          color="#b0b0b0"
          separator=" • "
          repeat={8}
          className="hero__marquee-row hero__marquee-row--2"
        />

        {/* ROW 3: CREATIVE DEVELOPER */}
        <AnimatedMarquee
          text="CREATIVE DEVELOPER"
          duration={22}
          color="#ffffff"
          separator=" • "
          repeat={8}
          className="hero__marquee-row hero__marquee-row--3"
        />
      </div>

      {/* Bottom Bar with Status & Scroll */}
      <div className="hero__footer container">
        <div className="hero__status">
          <span className="hero__status-indicator"></span>
          <span className="hero__status-text">Available for engineering roles & collaborations</span>
        </div>

        <button
          className="hero__scroll-btn"
          onClick={handleScrollDown}
          aria-label="Scroll down to About section"
        >
          <span className="hero__scroll-btn-text">Explore</span>
          <svg
            className="hero__scroll-btn-icon"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </button>
      </div>
    </section>
  );
}
