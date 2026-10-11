import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        // Create floating squares
        const container = document.querySelector('.floating-squares');
        if (container && container.children.length === 0) {
            for (let i = 0; i < 15; i++) {
                const square = document.createElement('div');
                square.className = 'floating-square';
                square.style.width = `${20 + Math.random() * 40}px`;
                square.style.height = square.style.width;
                square.style.left = `${Math.random() * 100}%`;
                square.style.top = `${Math.random() * 100}%`;
                square.style.opacity = 0.1 + Math.random() * 0.2;
                square.style.animationDelay = `-${Math.random() * 20}s`;
                square.style.animationDuration = `${30 + Math.random() * 30}s`;
                container.appendChild(square);
            }
        }
    }, []);

    return (
        <div>
            <div className="square-grid-bg"></div>
            <div className="floating-squares"></div>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;