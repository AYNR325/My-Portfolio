import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceCard = ({ role, company, duration, description, techStack, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        className="relative pl-8 md:pl-0"
    >
        <div className="md:w-1/2 md:ml-auto md:pl-12 relative group">
            {/* Timeline Dot (Desktop) */}
            <div className="hidden md:block absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary-500 border-4 border-background z-10 group-hover:scale-125 transition-transform"></div>

            <div className="bg-slate-900/40 p-6 rounded-2xl border border-white/5 hover:border-primary-500/30 transition-all shadow-lg hover:shadow-primary-500/5">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                    <h3 className="text-xl font-bold text-white">{role}</h3>
                    <div className="flex items-center gap-1 text-sm text-primary-400 mt-1 sm:mt-0">
                        <Calendar size={14} />
                        <span>{duration}</span>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-slate-300 mb-4 font-medium">
                    <Briefcase size={16} className="text-secondary-500" />
                    {company}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-md border border-white/5">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

const ExperienceTimeline = () => {
    const experiences = [
        {
            role: "Artificial Intelligence Intern",
            company: "Infosys Springboard",
            duration: "Sep '24 - Nov '24",
            description: "Built an AI-driven Dynamic Pricing System for ride-sharing using XGBoost and LightGBM to optimize prices based on demand and supply. Developed automated data pipelines, performed EDA and feature engineering, and validated revenue impact through backtesting and KPIs. Created an interactive dashboard to visualize insights and compare pricing strategies.",
            techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "React.js", "Tailwind CSS"],
            delay: 0.1
        },
        {
            role: "Full Stack Developer Intern",
            company: "Cognifyz Technologies",
            duration: "Jun '25 - Jul '25",
            description: "Worked on frontend and backend development using the MERN stack, building APIs, UI screens, and form validations. Delivered multiple end-to-end features by integrating backend logic with responsive user interfaces.",
            techStack: ["JavaScript", "React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
            delay: 0.2
        }
    ];

    return (
        <div id="experience" className="relative py-20">
            <SectionWrapper>
                <div className="mb-12 sm:mb-16 md:mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400 inline-block border-b-2 sm:border-b-4 border-primary-500 pb-2"
                    >
                        Work <span className="text-primary-500">Experience</span>
                    </motion.h2>
                </div>

                <div className="relative space-y-8 sm:space-y-10 md:space-y-12">
                    {/* Center Line (Desktop) */}
                    <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-primary-500 to-transparent -translate-x-1/2 opacity-30"></div>

                    {/* Center Line (Mobile) */}
                    <div className="lg:hidden absolute top-0 bottom-0 left-3 w-0.5 bg-gradient-to-b from-primary-500 to-transparent opacity-30"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className={`relative lg:flex ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Mobile Dot */}
                            <div className="lg:hidden absolute top-[35px] left-[7px] w-3 h-3 rounded-full bg-primary-500 z-10"></div>

                            <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12 lg:text-right'}`}></div>

                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'} mb-8 lg:mb-0 pl-8 lg:pl-0`}
                            >
                                <div className="hidden lg:block absolute top-6 left-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-slate-950 z-10 -translate-x-1/2 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>

                                <div className="bg-slate-900/40 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 hover:border-primary-500/30 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] group">
                                    <div className={`flex flex-col ${index % 2 !== 0 ? 'lg:items-end' : ''} mb-2`}>
                                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary-400 transition-colors">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mt-1 flex-wrap">
                                            <span className="text-primary-500 font-medium">{exp.company}</span>
                                            <span>•</span>
                                            <span>{exp.duration}</span>
                                        </div>
                                    </div>
                                    <p className={`text-slate-400 text-xs sm:text-sm leading-relaxed mt-3 sm:mt-4 mb-3 sm:mb-4 ${index % 2 !== 0 ? 'lg:text-right' : ''}`}>
                                        {exp.description}
                                    </p>
                                    <div className={`flex flex-wrap gap-1.5 sm:gap-2 ${index % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                                        {exp.techStack.map((tech) => (
                                            <span key={tech} className="px-2 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-md border border-white/5">
                                                {tech}
                                            </span>
                                        ))}
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

export default ExperienceTimeline;
