import { useState, useEffect } from 'react';
import { navItems, personalInfo } from '../data/content';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__inner container">
          <a href="/" className="header__logo" aria-label="Home">
            <span className="header__logo-first">{personalInfo.name.first}</span>
            <span className="header__logo-last">{personalInfo.name.last}</span>
          </a>

          <button
            className="header__menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`}>
              <span></span>
              <span></span>
            </span>
          </button>

          <nav className="header__nav header__nav--desktop" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="header__nav-link"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <nav className="mobile-menu__nav" aria-label="Mobile navigation">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-menu__link"
              style={{ transitionDelay: menuOpen ? `${0.1 + i * 0.06}s` : '0s' }}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              <span className="mobile-menu__number">{item.number}</span>
              <span className="mobile-menu__label">{item.label}</span>
            </a>
          ))}
          <div className="mobile-menu__footer" style={{ transitionDelay: menuOpen ? '0.5s' : '0s' }}>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </div>
        </nav>
      </div>
    </>
  );
}
