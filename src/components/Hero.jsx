import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

const Hero = () => {
    return (
        <div id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 -left-10 sm:-left-20 w-64 h-64 sm:w-96 sm:h-96 bg-primary-500/20 rounded-full blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 -right-10 sm:-right-20 w-64 h-64 sm:w-96 sm:h-96 bg-secondary-500/20 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <SectionWrapper className="z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-4 md:space-y-6 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="font-bold leading-tight text-white mb-3 md:mb-4">
                                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mb-2">Hey, I'm</span>
                                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">Ayush Rokade</span>
                            </h1>

                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-blue-600 mb-4 md:mb-6 font-mono">
                                Full Stack Developer
                            </h2>

                            <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed mb-6 md:mb-8">
                                I build scalable web applications and integrate intelligent AI solutions.
                                Passionate about crafting user-friendly experiences and solving real-world problems with code.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <a
                                    href="/Resume-Ayush_Rokade.pdf"
                                    download="Resume-Ayush_Rokade.pdf"
                                    className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all flex items-center gap-2 shadow-lg shadow-primary-500/25 text-sm sm:text-base"
                                >
                                    <Download size={18} className="sm:w-5 sm:h-5" />
                                    Download Resume
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Image/Graphic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center mt-8 md:mt-0"
                    >
                        <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            {/* Glowing Ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 blur-2xl opacity-20 animate-pulse"></div>

                            {/* Image Container */}
                            <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center group">
                                <img src="/myPhoto.jpeg" alt="Ayush Rokade" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" style={{ objectPosition: 'center 35%' }} />
                            </div>


                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Hero;
