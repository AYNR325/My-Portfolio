import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { ExternalLink, Github, Layers } from 'lucide-react';

const ProjectCard = ({ title, description, tags, delay, image, githubLink, liveLink }) => {
    // Use CSS class for base visibility, animation is enhancement
    return (
    <motion.div
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ delay: delay * 0.3, duration: 0.2 }}
        className="group relative bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-500 h-full flex flex-col"
    >
        {/* Image Section */}
        <div className="h-40 sm:h-48 md:h-52 w-full overflow-hidden relative flex-shrink-0">
            <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img
                src={image}
                alt={title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
        </div>

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        <div className="p-4 sm:p-6 relative z-10 font-sans flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-3 sm:mb-4 gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-primary-400 transition-colors pr-2 sm:pr-4">
                    {title}
                </h3>
                <div className="flex gap-1 sm:gap-2 flex-shrink-0">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 text-slate-400 hover:text-white transition-colors hover:bg-white/10 rounded-full" title="View Code">
                        <Github size={18} className="sm:w-5 sm:h-5" />
                    </a>
                    <a href={liveLink} target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 text-slate-400 hover:text-white transition-colors hover:bg-white/10 rounded-full" title="Live Demo">
                        <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                    </a>
                </div>
            </div>
            <p className="text-slate-400 mb-3 sm:mb-4 text-xs sm:text-sm flex-grow leading-relaxed">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 text-xs font-semibold tracking-wide bg-primary-500/10 text-primary-300 rounded-full border border-primary-500/20 hover:bg-primary-500/20 hover:border-primary-500/40 transition-all duration-300 shadow-[0_0_10px_rgba(var(--primary-500),0.1)] hover:shadow-[0_0_15px_rgba(var(--primary-500),0.2)]">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: 'DevHub – Developer Collaboration Platform',
            description: 'DevHub is a full-stack MERN platform designed to help developers find the right collaborators and work together in real time. It uses AI-powered matching with Google Gemini embeddings to recommend partners based on skills, language, experience, and semantic profile similarity. The platform supports live chat, Kanban task boards, and real-time updates using Socket.io, with secure access through JWT authentication and role-based permissions.',
            tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Gemini API'],
            delay: 0.1,
            image: '/devhub-project.png',
            githubLink: 'https://github.com/AYNR325/Developer-pairing-app',
            liveLink: 'https://developer-pairing-app-frontend.vercel.app'
        },
        {
            title: 'MERN E-Commerce Platform',
            description: 'A modern, scalable e-commerce platform that allows users to browse, search, and purchase products with a smooth online shopping experience. The application includes secure user authentication, shopping cart and order management, and Stripe-based payment processing. An admin dashboard enables product, category, and order management, while the responsive UI ensures usability across devices.',
            tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT'],
            delay: 0.2,
            image: '/E-commerce-project.png',
            githubLink: 'https://github.com/AYNR325/E-commerce-Shopping-Store',
            liveLink: 'https://e-commerce-shopping-store-roan.vercel.app'
        },
        {
            title: 'Savy – Accessibility Platform',
            description: 'Savy is an AI-driven accessibility platform built to assist visually impaired users through voice-based interaction. Users can find objects, extract and listen to text, receive scene descriptions, and ask general questions hands-free. The platform combines Gemini AI for vision and conversation, Tesseract OCR for text extraction, and YOLOv8 for real-time object detection with navigation guidance.',
            tags: ['React.js', 'Python', 'Flask', 'YOLO', 'Gemini API', 'Tesseract OCR'],
            delay: 0.3,
            image: '/Savy-project.png',
            githubLink: 'https://github.com/AYNR325/savy-frontend-final',
            liveLink: 'https://savy-frontend-final.onrender.com'
        },
        {
            title: 'CourtEase – Smart Badminton Court Booking',
            description: 'CourtEase is a full-stack booking and management system for badminton facilities, offering a premium, responsive user experience. Users can book indoor or outdoor courts, rent equipment, and hire coaches, while the system dynamically adjusts pricing based on peak hours. The application includes real-time slot availability, booking history, and a secure admin dashboard for managing courts and pricing rules.',
            tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
            delay: 0.4,
            image: '/CourtEase-project.png',
            githubLink: 'https://github.com/AYNR325/CourtEase-Smart-Badminton-Court-Booking-Platform',
            liveLink: 'https://smart-badminton-court-booking-platf.vercel.app'
        },
        {
            title: 'Restaurant Booking Voice Agent',
            description: 'The AI Restaurant Booking Voice Agent enables users to reserve tables through natural voice conversations, acting as a smart virtual concierge. Powered by Google Gemini AI, it understands context, handles interruptions, and suggests seating using real-time weather data. The system integrates speech APIs with a Node.js backend and MongoDB for secure reservation management.',
            tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini API', 'Web Speech API'],
            delay: 0.5,
            image: '/Resturant-booking-agent-project.png',
            githubLink: 'https://github.com/AYNR325/Restaurant-Booking-Voice-Agent',
            liveLink: 'https://restaurant-booking-voice-agent-fron.vercel.app'
        },
        {
            title: 'AI Price Optimization Engine',
            description: 'AI-PriceOptima is an end-to-end machine learning system designed to optimize ride-sharing prices in real time. The project covers the complete ML lifecycle, including EDA, feature engineering, and model training. Advanced models like LightGBM outperform rule-based pricing, and the solution is deployed with a React dashboard for real-time simulations and visual insights.',
            tags: ['Python', 'Pandas', 'Scikit-Learn', 'Flask', 'React.js', 'ML'],
            delay: 0.6,
            image: '/AI-price-optima-project.png',
            githubLink: 'https://github.com/AYNR325/AI-Price-Optima---Infosys-Springboard',
            liveLink: 'https://ai-price-optima-frontend.vercel.app'
        }
    ];

    return (
        <div id="projects" className="relative min-h-[400px]">
            <SectionWrapper>
                <div className="text-center mb-12 sm:mb-14 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.2 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 inline-block border-b-2 sm:border-b-4 border-primary-500 pb-2"
                    >
                        Featured <span className="text-gradient">Projects</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={project.title} 
                            {...project} 
                            delay={Math.min(index * 0.05, 0.3)}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://github.com/AYNR325" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                        View full archive <ExternalLink size={16} />
                    </a>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Projects;
