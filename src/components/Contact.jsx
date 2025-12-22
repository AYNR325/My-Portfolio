import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactItem = ({ icon: Icon, label, value, href }) => (
    <div className="flex items-center gap-4">
        <div className="p-3 bg-white/5 rounded-lg text-primary-400">
            <Icon size={20} />
        </div>
        <div>
            <p className="text-sm text-slate-400">{label}</p>
            {href ? (
                <a href={href} className="text-white hover:text-primary-400 transition-colors font-medium">
                    {value}
                </a>
            ) : (
                <p className="text-white font-medium">{value}</p>
            )}
        </div>
    </div>
);

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(
            () => {
                setIsSent(true);
                form.current.reset(); // Reset form fields after sending
                toast.success("Message sent successfully! ✅", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                });
            },
            (error) => {
                console.error("Error sending message:", error);
                toast.error("Failed to send message. Please try again.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                });
            }
        );
        setTimeout(() => {
            setStatus('success');
            setFormState({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <div id="contact" className="relative py-20">
            <ToastContainer />
            <SectionWrapper>
                {/* Header Moved Out of Grid */}
                <div className="text-center mb-12 sm:mb-14 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 inline-block border-b-2 sm:border-b-4 border-primary-500 pb-2"
                    >
                        Let's <span className="text-gradient">Connect</span>
                    </motion.h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        I am currently open to new opportunities. If you have any questions or would like to discuss potential collaborations, please feel free to reach out. I look forward to connecting with you!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                    {/* Left Info */}
                    <div>
                        <div className="space-y-4 sm:space-y-6">
                            <ContactItem icon={Mail} label="Email" value="ayushnr35@gmail.com" href="mailto:ayushnr35@gmail.com" />
                            <ContactItem icon={MapPin} label="Location" value="Navi Mumbai, Maharashtra, India" />
                            <ContactItem icon={Github} label="Github" value="github.com/AYNR325" href="https://github.com/AYNR325" />
                            <ContactItem icon={Linkedin} label="LinkedIn" value="linkedin.com/in/ayush-rokade-972940310" href="https://www.linkedin.com/in/ayush-rokade-972940310" />
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-slate-900/50 p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 relative overflow-hidden">
                        <form onSubmit={handleSubmit} ref={form} className="space-y-4 sm:space-y-6 relative z-10">
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    value={formState.subject}
                                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                    placeholder="Subject"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    required
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white font-bold py-3 sm:py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                            >
                                {status === 'submitting' ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : status === 'success' ? (
                                    <>Sent! <CheckCircle size={20} /></>
                                ) : (
                                    <>Send Message <Send size={20} /></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Contact;
