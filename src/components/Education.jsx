import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';

const Education = () => {
    const educationData = [
        {
            school: "Datta Meghe College of Engineering, Navi Mumbai",
            degree: "BE Computer Engineering",
            year: "2022 - 2026",
            grade: "CGPA: 8.5",
            image: "/dmce-collge-logo.png",
        },
        {
            school: "St. Xavier’s High School & Jr. College, Navi Mumbai",
            degree: "HSC",
            year: "2021 - 2022",
            grade: "87.67%",
            image: "/st.Xavier's-college-logo.jpg",
        },
        {
            school: "MGM High School & Jr. College, Navi Mumbai",
            degree: "SSC",
            year: "2019 - 2020",
            grade: "90.60%",
            image: "/mgm-school-logo.png",
        }
    ];

    return (
        <div id="education" className="relative py-20">
            <SectionWrapper>
                <div className="mb-12 sm:mb-16 md:mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400 inline-block border-b-2 sm:border-b-4 border-primary-500 pb-2"
                    >
                        Education<span className="text-primary-500"></span>
                    </motion.h2>
                </div>

                <div className="relative space-y-8 sm:space-y-10 md:space-y-12">
                    {/* Center Line (Desktop) */}
                    <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-primary-500 to-transparent -translate-x-1/2 opacity-30"></div>

                    {/* Center Line (Mobile) */}
                    <div className="lg:hidden absolute top-0 bottom-0 left-3 w-0.5 bg-gradient-to-b from-primary-500 to-transparent opacity-30"></div>

                    {educationData.map((edu, index) => (
                        <div key={index} className={`relative lg:flex ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''} items-center`}>
                            {/* Mobile Dot */}
                            <div className="lg:hidden absolute top-[46px] left-[6px] w-3 h-3 rounded-full bg-primary-500 z-10"></div>

                            {/* Desktop Central Dot - Strictly centered on the line */}
                            <div className="hidden lg:block absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-slate-950 z-10 shadow-[0_0_10px_rgba(6,182,212,0.5)] -translate-x-1/2 -translate-y-1/2"></div>

                            {/* Spacer for the other side */}
                            <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12 lg:text-right'}`}></div>

                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'} mb-8 lg:mb-0 pl-8 lg:pl-0 relative`}
                            >
                                <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-center bg-slate-900/40 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 hover:border-primary-500/30 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] group">
                                    {/* Logo Section */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-slate-900 border border-white/10 p-3 sm:p-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                            <img src={edu.image} alt={edu.school} className="w-full h-full object-contain" />
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex-grow text-center md:text-left">
                                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                                            {edu.school}
                                        </h3>
                                        <p className="text-xs sm:text-sm md:text-base font-medium text-slate-300 mb-1 sm:mb-2">
                                            {edu.degree}
                                        </p>
                                        <p className="text-slate-500 text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                                            {edu.year}
                                        </p>
                                        <div className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-primary-500/10 to-indigo-500/10 border border-primary-500/20 rounded-lg">
                                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-indigo-400 font-bold text-xs sm:text-sm">
                                                {edu.grade}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};
export default Education;
