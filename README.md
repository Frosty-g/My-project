Aimee

Live Demo

👉 https://aimee-1.vercel.app

Project Overview

Aimee is a modern, responsive service and travel showcase website built with React and Tailwind CSS.
It highlights features, packages, testimonials, and a newsletter subscription section.
The goal is to provide a clean user experience with smooth interactivity and strong brand consistency.


---

Brand Identity

🎨 Color System

Primary (CTA + Key Text): orange-500

Secondary (Backgrounds + Hover): gray-500

Neutral Dark: #111827

Neutral Light: #F3F4F6


✍ Typography

Headings: Poppins – bold, modern, and clean

Body: Inter – highly readable for long text



---

Design Decisions

📐 Layout Adherence

Tailwind spacing system (px-6, py-16, gap-10) used consistently

Responsive grid (grid-cols-4, md:grid-cols-2) for package and feature sections

All content centered with max-w-7xl for clean desktop layouts

Smooth spacing flow for improved readability


🎨 Creative Choices

Testimonials placed left with a static image on the right for visual balance

Hover animations on images and cards for modern interaction

CTA buttons styled with orange-500 to clearly direct user actions

MD breakpoint introduces side-by-side structure for a more premium feel



---

Component Architecture

src/
│
├── components/
│   ├── common/
│   ├── layouts/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Navigation.jsx
│   ├── sections/
│   │   ├── Destinations.jsx
│   │   ├── Features.jsx
│   │   ├── Hero.jsx
│   │   ├── Packages.jsx
│   │   ├── Stat.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Whyus.jsx
│   │   ├── Auth.jsx
│   │   ├── Dashboard.jsx
│   │   └── FAQ.jsx
│
├── App.jsx
├── main.jsx
└── index.css

🛠 Component Strategy

Sections → self-contained page sections

Layouts → Navbar, Header, Footer

Common → reusable UI parts

Components remain modular for scalability



---

Performance Optimizations

Tailwind purge reduces final CSS bundle

Image optimization + compressed assets

React Slick used efficiently for smooth sliding

Minimal state management for reduced re-renders

Fast hosting via Vercel (edge caching)



---

Image Credits

Add your actual sources, for example:

Unsplash

Pexels

Freepik



---

Installation & Setup

git clone https://github.com/your-username/aimee.git
cd aimee/frontend
npm install
npm run dev

Local Dev URL:
👉 http://localhost:5173


---

Technologies Used

React 18

Vite

Tailwind CSS 3

React Icons

React Slick Carousel

Vercel (Deployment)



---

Challenges & Solutions

1. Import Errors (react-icons)

Issue: Icons failing to import in Vite
Fix: Installed react-icons and used specific imports like:
import { FaQuoteLeft } from "react-icons/fa"

2. Navbar Scroll Background

Issue: Transparent navbar needed to change on scroll
Fix: Used useEffect + window.scrollY to toggle Tailwind classes dynamically.

3. Responsive Package Grid

Issue: Package cards breaking at tablet screens
Fix: Tailwind grid layout:
grid-cols-1 md:grid-cols-2 lg:grid-cols-4


---

Future Improvements

Add backend API for newsletter + authentication

Detailed pop-up modals for packages

Dashboard for managing testimonials / packages

Dark mode toggle

Multi-language support
