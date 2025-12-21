import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        
        // Small delay to allow menu to close
        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
                const offsetTop = element.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo */}
                    <a 
                        href="#home" 
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                        }}
                        className="text-lg sm:text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500 cursor-pointer"
                    >
                        &lt;Ayush<span className="text-slate-200">.jsx</span>   /&gt;
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.querySelector(link.href);
                                    if (element) {
                                        const offsetTop = element.offsetTop - 80;
                                        window.scrollTo({
                                            top: offsetTop,
                                            behavior: 'smooth'
                                        });
                                    }
                                }}
                                className="text-slate-300 hover:text-primary-400 transition-colors text-sm font-medium tracking-wide cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="https://github.com/AYNR325" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-200 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-slate-900/80 backdrop-blur-xl border-b border-white/20 shadow-2xl"
                    >
                        <div className="flex flex-col space-y-4 px-6 py-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-slate-300 hover:text-primary-400 text-lg font-medium cursor-pointer transition-colors !text-slate-300 hover:!text-primary-400"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex space-x-6 pt-4 border-t border-white/10">
                                <a href="https://github.com/AYNR325" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/ayush-rokade-972940310" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                                    <Linkedin size={24} />
                                </a>
                                <a href="mailto:ayushnr35@gmail.com" className="text-slate-400 hover:text-white">
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
