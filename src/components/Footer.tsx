function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              KAZI TAUHID RANA
            </h3>
            <p className="text-gray-400 text-sm">
              Competitive Programmer & Aspiring Software Developer
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#projects" className="hover:text-purple-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">
              Skills
            </a>
            <a href="#about" className="hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#social" className="hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-500/20 text-center text-gray-500 text-sm">
          <p>
            © {currentYear} ZeroD. All rights reserved. Built with passion and code.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
