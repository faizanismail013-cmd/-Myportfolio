import React from 'react';
import './AnimatedMarquee.css';

export default function AnimatedMarquee({
  text,
  duration = 25,
  color = '#000000',
  separator = ' • ',
  repeat = 8,
  className = '',
}) {
  const items = Array.from({ length: repeat });

  return (
    <div
      className={`animated-marquee ${className}`}
      style={{
        '--marquee-duration': `${duration}s`,
        '--marquee-color': color,
      }}
    >
      <div className="animated-marquee__track">
        <div className="animated-marquee__group" aria-hidden="false">
          {items.map((_, i) => (
            <React.Fragment key={`a-${i}`}>
              <span className="animated-marquee__text">{text}</span>
              <span className="animated-marquee__separator">{separator}</span>
            </React.Fragment>
          ))}
        </div>
        <div className="animated-marquee__group" aria-hidden="true">
          {items.map((_, i) => (
            <React.Fragment key={`b-${i}`}>
              <span className="animated-marquee__text">{text}</span>
              <span className="animated-marquee__separator">{separator}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
