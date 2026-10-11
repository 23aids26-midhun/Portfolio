# Midhunan Nanthan S – Portfolio

Personal portfolio website built with **React 18** and **Tailwind CSS**.

**Live site:** https://23aids26-midhun.github.io/Portfolio

## Sections
Home · About · Skills · Projects · Education & Achievements · Contact

## Projects shown
| Project | Stack |
| --- | --- |
| [AI Career Guidance Platform](https://github.com/23aids26-midhun/Aicareerguidanceplatform) | AI, Web App |
| [Shop – Full-Stack E-Commerce](https://github.com/23aids26-midhun/Shop) | React, Django REST, JWT, MySQL |
| [EduVerse – Learning Management System](https://github.com/23aids26-midhun/Learning-Management-System) | Flask, Python, MySQL |
| [LMS Portal](https://github.com/23aids26-midhun/LMS---Portal) | HTML, CSS, JavaScript |

To add or edit a project, change `src/data/projects.js` – the cards update automatically.

## Run locally
```bash
npm install
npm start          # http://localhost:3000
```

## Deploy to GitHub Pages
```bash
npm run deploy
```
Then on GitHub: **Settings → Pages → Branch: `gh-pages` / root**.

## Folder structure
```
public/            index.html (Tailwind CDN, fonts, icons)
src/
  components/      Navbar, Hero, About, Skills, Projects, Education, Contact, Footer
  data/projects.js project list
  App.js  index.js  index.css
```
