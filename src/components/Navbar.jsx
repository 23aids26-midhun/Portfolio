import React, { useState, useEffect } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' }
    ];

    const handleClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled ? 'gradient-bg backdrop-blur-md border-b' : 'bg-transparent'
        }`} style={{ borderColor: 'rgba(100, 255, 218, 0.2)' }}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="cube">
                        <div className="cube-face"></div>
                        <div className="cube-face"></div>
                        <div className="cube-face"></div>
                        <div className="cube-face"></div>
                        <div className="cube-face"></div>
                        <div className="cube-face"></div>
                    </div>
                    <div className="text-xl font-bold gradient-text">Midhun</div>
                </div>

                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            className="hover:text-[#64ffda] transition-colors flex items-center space-x-2 cursor-pointer"
                        >
                            <span className="text-[#64ffda]">□</span>
                            <span>{link.name}</span>
                        </a>
                    ))}
                </div>

                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-2xl text-[#64ffda] cursor-pointer"
                >
                    <i className={`fas fa-${isOpen ? 'times' : 'bars'}`}></i>
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden gradient-bg p-6 flex flex-col space-y-4 border-t" style={{ borderColor: 'rgba(100, 255, 218, 0.2)' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            className="hover:text-[#64ffda] transition-colors flex items-center space-x-2 py-2 cursor-pointer"
                        >
                            <span className="text-[#64ffda]">□</span>
                            <span>{link.name}</span>
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default Navbar;