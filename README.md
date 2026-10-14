# Faizan Ismail — Personal Portfolio Website

[![React](https://img.shields.io/badge/React-18.x-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, high-performance developer portfolio website for **Faizan Ismail**, Backend Developer & AI/ML Engineer. Features a dark-mode Swiss editorial aesthetic, kinetic horizontal moving typography, and a photo-free, typography-focused layout.

---

## 🌟 Key Features

- **Kinetic Typography Hero:** Three horizontal marquee text rows moving right-to-left continuously with hardware-accelerated CSS keyframes and zero hitch/reset.
- **Editorial Dark Theme:** Curated `#0e0e0e` dark background with crisp typography and hairline structural borders.
- **Photo-Free Minimalism:** Typography and engineering achievements take center stage without distracting portraits or avatars.
- **Centralized Data Layer:** All text, experience, projects, skills, and links are managed in a single file (`src/data/content.js`).
- **Fully Responsive & Accessible:** Responsive sizing with `clamp()`, no horizontal overflow, and respects `prefers-reduced-motion`.

---

## 🛠️ Tech Stack

- **Framework:** React 18
- **Bundler:** Vite 5
- **Styling:** Vanilla CSS with custom properties
- **Typography:** [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue), [Outfit](https://fonts.google.com/specimen/Outfit), [Inter](https://fonts.google.com/specimen/Inter)
- **Deployment:** Vercel

---

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/faizanismail013-cmd/-Myportfolio.git
cd -Myportfolio
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized bundle will be created in the `dist/` directory.

---

## ✏️ Customization & Updating Content

To update the portfolio's content, open:
`src/data/content.js`

You can customize:
- Personal details (name, email, phone, location, social links)
- Work experience and responsibilities
- Projects, tech stacks, metrics, and URLs
- Technical skills organized by category
- Education and relevant coursework
- Professional certifications

For complete architectural details, see the **[HANDOVER.md](HANDOVER.md)** file.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
