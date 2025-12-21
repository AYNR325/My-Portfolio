import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = "" }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const Wrapper = isMobile ? 'div' : motion.div;
    const wrapperProps = isMobile ? {} : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.1 },
        transition: { duration: 0.5 }
    };

    return (
        <section id={id} className={`py-12 sm:py-16 md:py-20 w-full relative overflow-hidden ${className}`}>
            <Wrapper {...wrapperProps} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                {children}
            </Wrapper>
        </section>
    );
};

export default SectionWrapper;
