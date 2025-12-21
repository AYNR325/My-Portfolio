import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionWrapper from './ui/SectionWrapper';

// --- Data ---
const techData = [
    {
        category: 'Languages',
        skills: [
            { name: 'JavaScript', image: '/JavaScript.png' },
            { name: 'Python', image: '/Python.png' },
            { name: 'Java', image: '/Java.png' },
            { name: 'C', image: '/C.png' },
        ]
    },
    {
        category: 'Frontend',
        skills: [
            { name: 'React', image: '/React.png' },
            { name: 'HTML5', image: '/HTML5.png' },
            { name: 'CSS3', image: '/CSS3.png' },
            { name: 'Tailwind CSS', image: '/Tailwind CSS.png' },
            { name: 'Bootstrap', image: '/Bootstrap.png' },
            { name: 'Redux', image: '/Redux.png' },
        ]
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Node.js', image: '/Node.js.png' },
            { name: 'Express.js', image: '/Express.png', lightBg: true },
            { name: 'MongoDB', image: '/MongoDB.png' },
            { name: 'MySQL', image: '/MySQL.png' },
            { name: 'Socket.io', image: '/Socket.io.png', lightBg: true },
            { name: 'JWT', image: '/JWT.png' },
            { name: 'Gemini API', image: '/gemini.svg' },
            { name: 'Appwrite', image: '/Appwrite.png' },
        ]
    },
    {
        category: 'Tools',
        skills: [
            { name: 'Git', image: '/Git.png' },
            { name: 'GitHub', image: '/GitHub (1).png', lightBg: true },
            { name: 'VS Code', image: '/Visual Studio Code (VS Code).png' },
            { name: 'Postman', image: '/Postman.png' },
            { name: 'Vercel', image: '/vercel.png', lightBg: true },
            { name: 'Render', image: '/render.png', lightBg: true },
            { name: 'Figma', image: '/Figma.png' },
            { name: 'Canva', image: '/canva.png' },
        ]
    }
];

// --- Desktop: Orbit Component ---
const OrbitRing = ({ radius, duration, category, skills, reverse = false }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative flex items-center justify-center rounded-full border transition-all duration-300 ${isHovered ? 'border-primary-500/50 shadow-[0_0_30px_rgba(var(--primary-500),0.15)]' : 'border-white/5'}`}
            style={{ width: radius * 2, height: radius * 2 }}
        >
            {/* 
                Rotate this inner container. 
                Using standard CSS animation allows purely style-based pausing via animationPlayState. 
            */}
            <div
                className="w-full h-full absolute top-0 left-0 rounded-full"
                style={{
                    animation: `orbit ${duration}s linear infinite ${reverse ? 'reverse' : 'normal'}`,
                    animationPlayState: isHovered ? 'paused' : 'running'
                }}
            >
                {skills.map((skill, index) => {
                    const angle = (index / skills.length) * 360;

                    return (
                        <div
                            key={skill.name}
                            className="absolute top-1/2 left-1/2 -ml-6 -mt-6 w-12 h-12"
                            style={{
                                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                            }}
                        >
                            <div
                                className="w-full h-full"
                                style={{
                                    animation: `orbit ${duration}s linear infinite ${reverse ? 'normal' : 'reverse'}`,
                                    animationPlayState: isHovered ? 'paused' : 'running'
                                }}
                            >
                                <div
                                    className="group relative w-full h-full flex items-center justify-center bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-full hover:scale-125 hover:border-primary-500/50 hover:bg-slate-800/90 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-primary-500/20 z-10"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <div className={`w-7 h-7 flex items-center justify-center rounded-full ${skill.lightBg ? 'bg-white/90 p-1' : ''}`}>
                                        {/* Original color icons - Removed grayscale filter */}
                                        {skill.image ? (
                                            <img src={skill.image} alt={skill.name} className="w-full h-full object-contain" />
                                        ) : (
                                            <span className="text-xs font-bold text-slate-500">?</span>
                                        )}
                                    </div>

                                    {/* Enhanced Tooltip */}
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900/90 border border-white/20 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-xl backdrop-blur-sm">
                                        <div className="text-[10px] text-primary-400 font-bold tracking-wider uppercase mb-0.5">{category}</div>
                                        <div className="text-xs font-medium">{skill.name}</div>
                                        {/* Little triangular arrow */}
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/90"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


const OrbitSystem = () => {
    return (
        <div className="relative w-[800px] h-[800px] flex items-center justify-center scale-50 sm:scale-75 md:scale-90 lg:scale-100">
            {/* Define Keyframes locally for this component */}
            <style>{`
            @keyframes orbit {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `}</style>

            {/* Core */}
            <div className="absolute inset-0 m-auto z-0 w-32 h-32 rounded-full bg-gradient-to-br from-primary-600 to-indigo-600 blur-[80px] opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 m-auto z-20 flex flex-col items-center justify-center w-24 h-24 rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(var(--primary-500),0.3)]">
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Tech</span>
                <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-indigo-400">STACK</span>
            </div>

            {/* Orbits - Adding 'pointer-events-none' to rings container but 'pointer-events-auto' to children if needed, 
           but here simpler to just layer them. Inner must be on top in z-index if overlapping? 
           Actually, rings don't overlap in a way that blocks clicks if they are just borders.
           The icons are absolute. We should leverage z-index to ensure tooltips pop over outer rings.
        */}

            {/* Languages - Inner */}
            <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
                <div className="pointer-events-auto">
                    <OrbitRing radius={140} duration={30} category="Languages" skills={techData[0].skills} />
                </div>
            </div>

            {/* Frontend - Mid */}
            <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                <div className="pointer-events-auto">
                    <OrbitRing radius={220} duration={45} category="Frontend" skills={techData[1].skills} reverse />
                </div>
            </div>

            {/* Backend - Outer */}
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <div className="pointer-events-auto">
                    <OrbitRing radius={300} duration={60} category="Backend" skills={techData[2].skills} />
                </div>
            </div>

            {/* Tools - Outermost */}
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <div className="pointer-events-auto">
                    <OrbitRing radius={380} duration={80} category="Tools" skills={techData[3].skills} reverse />
                </div>
            </div>
        </div>
    );
};


// --- Mobile: Marquee Component ---
const MarqueeRow = ({ skills, reverse = false }) => {
    return (
        <div className="flex overflow-hidden relative w-full mb-6 last:mb-0 group/marquee-container py-4">
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

            {/* Inline styles for Marquee Animation */}
            <style>{`
                @keyframes marquee {
                    from { transform: translateX(0%); }
                    to { transform: translateX(-50%); }
                }
                @keyframes marquee-reverse {
                    from { transform: translateX(-50%); }
                    to { transform: translateX(0%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marquee-reverse 40s linear infinite;
                }
                .group\\/marquee-container:hover .animate-marquee,
                .group\\/marquee-container:hover .animate-marquee-reverse {
                    animation-play-state: paused;
                }
            `}</style>

            <div
                className={`flex gap-4 px-2 w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group/track`}
            >
                {/* Duplicate content 4 times for smoother infinite loop on larger tablets */}
                {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
                    <div
                        key={`${skill.name}-${i}`}
                        className="group/item flex items-center gap-2 pl-3 pr-4 py-2 bg-slate-900/50 border border-white/5 rounded-full shrink-0 min-w-max transition-all duration-300
                            hover:scale-110 hover:border-primary-500/50 hover:shadow-[0_0_15px_rgba(var(--primary-500),0.3)]
                            group-hover/track:opacity-30 group-hover/track:hover:opacity-100"
                    >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${skill.lightBg ? 'bg-white p-0.5' : ''}`}>
                            <img src={skill.image} alt={skill.name} className="w-full h-full object-contain" />
                        </div>
                        {/* Name fades in on hover */}
                        <span className="text-sm text-slate-300 font-medium opacity-70 group-hover/item:opacity-100 group-hover/item:text-white transition-opacity duration-300">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};


const TechStack = () => {
    return (
        <div id="skills" className="relative overflow-hidden py-24">
            <SectionWrapper>
                <div className="text-center mb-12 sm:mb-14 md:mb-16 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-500 mb-4 sm:mb-6 inline-block border-b-2 sm:border-b-4 border-primary-500 pb-2"
                    >
                        Technical <span className="text-primary-500">Proficiency</span>
                    </motion.h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        My development ecosystem, visualized.
                    </p>
                </div>

                {/* DESKTOP VIEW (>1024px) */}
                <div className="hidden lg:flex items-center justify-center h-[600px] lg:h-[700px] w-full relative">
                    <OrbitSystem />
                </div>

                {/* MOBILE/TABLET VIEW (<1024px) */}
                <div className="lg:hidden flex flex-col gap-6">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-4 mb-2">Languages</div>
                    <MarqueeRow skills={techData[0].skills} />

                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-4 mb-2">Frontend</div>
                    <MarqueeRow skills={techData[1].skills} reverse />

                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-4 mb-2">Backend</div>
                    <MarqueeRow skills={techData[2].skills} />

                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-4 mb-2">Tools</div>
                    <MarqueeRow skills={techData[3].skills} reverse />
                </div>
            </SectionWrapper>
        </div>
    );
};

export default TechStack;
