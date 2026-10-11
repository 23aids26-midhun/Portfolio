// Edit this file to add / change projects. Each card on the site is built from this list.
const GITHUB_USER = 'https://github.com/23aids26-midhun';

export const githubProfile = GITHUB_USER;

export const projects = [
    {
        icon: 'fas fa-compass',
        title: 'AI Career Guidance Platform',
        description:
            'AI-powered platform that helps students explore career paths and get personalised guidance.',
        tags: ['AI', 'Career Guidance', 'Web App'],
        github: `${GITHUB_USER}/Aicareerguidanceplatform`,
    },
    {
        icon: 'fas fa-shopping-cart',
        title: 'Shop – Full-Stack E-Commerce',
        description:
            'Marketplace-style store with JWT auth, product search and pagination, cart, saved addresses and an atomic, stock-checked checkout. Admin can manage the catalog.',
        tags: ['React', 'Django REST', 'JWT', 'MySQL'],
        github: `${GITHUB_USER}/Shop`,
    },
    {
        icon: 'fas fa-graduation-cap',
        title: 'EduVerse – Learning Management System',
        description:
            'LMS with three roles: students enroll and track progress, trainers create courses and lessons, institutes manage trainers and view analytics.',
        tags: ['Flask', 'Python', 'MySQL', 'HTML/CSS/JS'],
        github: `${GITHUB_USER}/Learning-Management-System`,
    },
    {
        icon: 'fas fa-laptop-code',
        title: 'LMS Portal',
        description:
            'Multi-page learning portal front end with dashboards, courses, quizzes, assignments, attendance, certificates, placement tracker and resume builder.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        github: `${GITHUB_USER}/LMS---Portal`,
    },
];
