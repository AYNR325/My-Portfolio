const Footer = () => {
    return (
        <footer className="border-t border-white/5 py-6 sm:py-8 text-center text-slate-400 text-xs sm:text-sm px-4">
            <p className="mb-2">Designed & Built by <span className="text-primary-400 font-medium">Ayush Rokade</span></p>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </footer>
    );
};

export default Footer;
