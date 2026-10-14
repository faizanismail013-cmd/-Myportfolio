import { personalInfo } from '../data/content';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <div className="footer__name">
              <span>{personalInfo.name.first}</span>
              <span>{personalInfo.name.last}</span>
            </div>
            <p className="footer__tagline">{personalInfo.title}</p>
          </div>

          <div className="footer__right">
            <p className="footer__copyright">
              © {currentYear} {personalInfo.name.first} {personalInfo.name.last}
            </p>
            <p className="footer__built">
              Built with React & Passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
