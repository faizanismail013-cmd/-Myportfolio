# Project Handover Documentation

**Project:** Faizan Ismail — Personal Portfolio Website  
**Role:** Backend Developer & AI/ML Engineer  
**Location:** Greater Noida, India  
**Date:** October 2026  
**Status:** Production Ready (Build Verified & Deployed Setup)  

---

## 1. Project Overview

This project is a bespoke, high-performance personal portfolio website built with **React 18** and **Vite 5**. It features a modern dark-mode Swiss-style editorial aesthetic inspired by avant-garde creative developer portfolios, highlighted by a **photo-free, typography-driven hero section** with three continuously moving marquee typography rows.

### Core Design Principles
- **Editorial Dark Aesthetic:** Sleek dark background (`#0e0e0e`) with high-contrast text (`#f0f0f0`), architectural hairline borders, and zero generic gradients or heavy drop shadows.
- **Typography-Centric Hero:** Three large horizontal marquee rows moving right-to-left continuously:
  - Row 1: `"BACKEND DEVELOPER"` (Speed: 26s, `#f0f0f0`)
  - Row 2: `"AI/ML ENGINEER"` (Speed: 34s, `#b0b0b0`)
  - Row 3: `"CREATIVE DEVELOPER"` (Speed: 22s, `#ffffff`)
- **100% Photo-Free:** Clean layout that removes personal portraits, placeholders, and avatar graphics in favor of bold typography and clean spacing.
- **Single Name Occurrence:** The developer's name `"Faizan Ismail"` is featured exclusively once in the top navigation header logo to eliminate header/hero duplication.

---

## 2. Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Component architecture & state management |
| **Vite 5** | Lightning-fast build tool & development server |
| **Vanilla CSS** | Scoped, performant design system with CSS custom properties |
| **Google Fonts** | `Bebas Neue` (condensed marquee), `Outfit` (display headlines), `Inter` (body) |
| **Lucide Icons** | Clean SVG icons for metadata and actions |
| **Git & Vercel** | Version control and cloud edge deployment |

---

## 3. Project Structure

```
My portfolio/
├── dist/                          # Production-ready build artifacts
├── node_modules/                  # Installed dependencies
├── public/
│   ├── favicon.svg                # Custom SVG monogram favicon
│   └── icons.svg                  # Vector assets
├── src/
│   ├── assets/                    # Static visual assets
│   ├── components/
│   │   ├── About.css & .jsx       # Editorial biography & profile facts
│   │   ├── AnimatedMarquee.css    # GPU-accelerated marquee keyframe animation
│   │   ├── AnimatedMarquee.jsx    # Reusable infinite horizontal text scroller
│   │   ├── Certifications.css     # Credential cards & verified links
│   │   ├── Certifications.jsx
│   │   ├── Contact.css & .jsx     # Inverted CTA button & social links
│   │   ├── Education.css & .jsx   # Degree details & coursework tags
│   │   ├── Experience.css & .jsx  # Career timeline & responsibilities
│   │   ├── Footer.css & .jsx      # Minimal bottom copyright
│   │   ├── Header.css & .jsx      # Sticky navbar with blur & mobile drawer
│   │   ├── Hero.css & .jsx        # Hero with identity info & 3-row marquee
│   │   ├── Projects.css & .jsx    # Architectural project showcase cards
│   │   ├── ScrollProgress.css     # Thin viewport scroll progress indicator
│   │   └── Skills.css & .jsx      # Category-filtered skill explorer
│   ├── data/
│   │   └── content.js             # SINGLE SOURCE OF TRUTH for all data
│   ├── hooks/
│   │   └── useAnimations.js       # IntersectionObserver reveal & scroll hooks
│   ├── App.css & App.jsx          # Main page assembly
│   ├── index.css                  # Global design tokens, reset & variables
│   └── main.jsx                   # React DOM root entry
├── .gitignore                     # Git ignore rules
├── index.html                     # HTML shell, metadata, OpenGraph & Google Fonts
├── package.json                   # Dependencies & scripts
├── vercel.json                    # Vercel deployment & rewrite configuration
├── vite.config.js                 # Vite bundler configuration
├── README.md                      # Repository README
└── HANDOVER.md                    # This handover document
```

---

## 4. How to Update Content

All content is decoupled from components and stored in **[`src/data/content.js`](file:///Users/faizanismail/Desktop/My%20portfolio/src/data/content.js)**. You do not need to edit JSX code to update your resume details:

### 1. Personal Information & Links
Edit `personalInfo` in `src/data/content.js`:
```javascript
export const personalInfo = {
  name: { first: 'Faizan', last: 'Ismail' },
  title: 'Backend Developer & AI/ML Engineer',
  location: 'Greater Noida, India',
  email: 'faizanismail013@gmail.com',
  phone: '+91 9508962220',
  linkedin: 'https://www.linkedin.com/in/faizan-ismail-/',
  github: 'https://github.com/faizan-ismail',
  heroIntro: 'I build intelligent applications and reliable backend systems...'
};
```

### 2. Work Experience
Add or modify items in `experienceData`:
```javascript
{
  id: 1,
  role: 'Backend Developer',
  company: 'PPR Smart Systems',
  period: '2026 – Present',
  type: 'Full-time',
  technologies: ['Python', 'Flask', 'REST APIs', 'Databases', 'Git'],
  responsibilities: [ ... ]
}
```

### 3. Projects
Add or modify items in `projectsData`:
```javascript
{
  id: 1,
  number: '01',
  title: 'Inspolio AI Fintech Platform',
  description: 'An AI-powered fintech platform...',
  technologies: ['Python', 'React', 'FastAPI', 'LangChain', 'PyTorch'],
  highlight: '25% reduction in API latency',
  url: 'https://yourprojectlink.com' // Set URL or leave null for 'Details Coming Soon'
}
```

### 4. Technical Skills
Edit categories or add tools in `skillsData`:
```javascript
export const skillsData = {
  'Programming Languages': ['Python', 'C++', 'SQL', 'JavaScript', ...],
  'AI & Machine Learning': ['PyTorch', 'Keras', 'Scikit-learn', 'LangChain', ...],
  'Web & Backend': ['React', 'Node.js', 'FastAPI', 'Flask', ...],
  'Tools & Infrastructure': ['Git', 'Docker', 'GCP', ...]
};
```

---

## 5. Development & Build Commands

Run the following commands inside the project root:

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (runs at http://localhost:5173/)
npm run dev

# 3. Build optimized production bundle to /dist
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 6. Deployment Guide

### Git Remote Configuration
The repository is linked to your GitHub account:
- **Remote:** `https://github.com/faizanismail013-cmd/-Myportfolio.git`
- **Branch:** `main`

### Pushing Changes to GitHub
```bash
git add .
git commit -m "Update portfolio content"
git push -u origin main
```

### Deploying on Vercel
The repository includes a ready-to-use [`vercel.json`](file:///Users/faizanismail/Desktop/My%20portfolio/vercel.json):
1. Navigate to **[vercel.com/new](https://vercel.com/new)**.
2. Sign in with GitHub.
3. Import **`-Myportfolio`**.
4. Click **Deploy**. Any future `git push` to `main` will automatically trigger a production deployment.

---

## 7. Performance & Accessibility Highlights
- **Seamless Keyframe Animations:** Utilizes pure CSS `translate3d(0, 0, 0)` to `translate3d(-50%, 0, 0)` for hardware-accelerated 60fps scrolling with zero JavaScript timer overhead.
- **Respects User Preferences:** Automatically stops moving marquees when `prefers-reduced-motion` is enabled.
- **Fully Responsive:** Uses dynamic fluid clamp functions (`clamp()`) for typography across mobile, tablet, desktop, and ultrawide monitors without horizontal page scrolling.
